// src/utils/answerValidator.js
/* -------------------------
   Unit converter utilities
   ------------------------- */
const UNIT_CONVERSIONS = {
  // Length
  mm: 0.001, cm: 0.01, m: 1, km: 1000,
  // Mass
  mg: 1e-6, g: 1e-3, kg: 1,
  // Time
  s: 1, sec: 1, min: 60, h: 3600, hr: 3600,
  // Area
  'm^2': 1, 'm²': 1, 'cm^2': 1e-4, 'cm²': 1e-4, 'km^2': 1e6, 'km²': 1e6,
  // Volume
  l: 0.001, ml: 1e-6,
  // Percent
  '%': 0.01,
};

function parseValueAndUnit(input) {
  if (!input || typeof input !== 'string') return { value: null, unit: null, raw: input };
 
  let s = input.trim().toLowerCase();
  
  // Remove approximation words and symbols FIRST
  s = s.replace(/approximately|about|roughly|around/gi, '');
  s = s.replace(/≈/g, '');
  
  // Replace comma with period BEFORE regex matching
  s = s.replace(/,/g, '.');
  
  // Remove extra spaces
  s = s.replace(/\s+/g, '');
 
  // Match number (including scientific notation) followed by optional unit
  const m = s.match(/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-zµμ^0-9°%]*)$/i);
  if (!m) return { value: null, unit: null, raw: input };
 
  const val = parseFloat(m[1]);
  let u = m[2] || null;
 
  if (u) {
    u = u.replace(/²/g, '^2').replace(/³/g, '^3').replace('µ', 'u').replace('μ', 'u');
  }
 
  return { value: isNaN(val) ? null : val, unit: u, raw: input };
}

function toSI(value, unit) {
  if (value == null) return null;
  if (!unit) return null;
 
  const lookup = UNIT_CONVERSIONS[unit] ?? UNIT_CONVERSIONS[unit.toLowerCase()];
  if (lookup == null) return null;
 
  return value * lookup;
}

/* -------------------------
   Symbolic normalization
   ------------------------- */
function normalizeSymbolic(raw) {
  if (raw == null) return '';
  let s = String(raw).trim();
 
  // Clean LaTeX delimiters
  s = s.replace(/\\\(/g, '').replace(/\\\)/g, '').replace(/\$\$/g, '').replace(/\$/g, '');
 
  // Remove approximation indicators
  s = s.replace(/approximately|about|roughly|around/gi, '');
  s = s.replace(/≈/g, '');
  
  // Normalize commas to periods
  s = s.replace(/,/g, '.');
 
  // Replace unicode characters
  s = s.replace(/½/g, '(1/2)').replace(/¼/g, '(1/4)').replace(/¾/g, '(3/4)')
       .replace(/²/g, '^2').replace(/³/g, '^3');
 
  // Normalize sqrt
  s = s.replace(/√\s*/g, 'sqrt').replace(/\\sqrt\s*\(?/g, 'sqrt(');
  s = s.replace(/\s+/g, '');
  s = s.replace(/\*\*/g, '^');
 
  // Add parentheses for sqrt if missing
  s = s.replace(/sqrt([a-z0-9(])/gi, (_, a) => {
    if (a === '(') return 'sqrt(';
    return 'sqrt(' + a;
  });
  s = s.replace(/sqrt([^\(][^+\-*/^)]*)/g, 'sqrt($1)');
 
  // Canonicalize exponent forms
  s = s.replace(/\^\(0?\.5\)/g, '^(1/2)').replace(/\^0\.5/g, '^(1/2)');
  s = s.replace(/\^\(1\/2\)/g, '^(1/2)');
 
  // Convert sqrt to exponent form
  s = s.replace(/sqrt\(([^)]+)\)/g, '($1)^(1/2)');
 
  // Detect invalid forms like x3 (should be x^3)
  if (/[a-zA-Z][0-9]/.test(s) && !/([a-zA-Z]\^|\^[0-9]|e[+-]?\d)/.test(s)) {
    return null; // Invalid symbolic form
  }
 
  // Remove outer parentheses
  while (/^\(([^()]+)\)$/.test(s)) {
    s = s.replace(/^\(([^()]+)\)$/, '$1');
  }
 
  // Canonicalize addition order
  const topTerms = splitTopLevel(s, '+');
  if (topTerms.length > 1) {
    topTerms.sort();
    s = topTerms.join('+');
  }
 
  return s;
}

function splitTopLevel(str, sep) {
  const parts = [];
  let depth = 0, buf = '';
 
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '(') { depth++; buf += ch; continue; }
    if (ch === ')') { depth = Math.max(0, depth - 1); buf += ch; continue; }
    if (depth === 0 && ch === sep) { parts.push(buf); buf = ''; continue; }
    buf += ch;
  }
 
  if (buf) parts.push(buf);
  return parts;
}

/* -------------------------
   Generate helpful hints
   ------------------------- */
function generateHint(userAnswer, correctAnswers, userParsed, options, validationResult) {
  const hints = [];
  
  // If close numerically
  if (validationResult.details?.diff !== undefined) {
    const relativeError = validationResult.details.diff / Math.abs(validationResult.details.correct);
    
    if (relativeError < 0.05) {
      hints.push("You're very close! Check your rounding or calculation precision.");
    } else if (relativeError < 0.15) {
      hints.push("Your answer is in the right ballpark. Review your calculation steps carefully.");
    } else {
      hints.push("Your numerical value is off. Double-check your computation from the beginning.");
    }
  }
  
  // Unit-specific hints
  if (validationResult.unitError) {
    if (options.requiredUnit) {
      hints.push(`Remember to express your answer in ${options.requiredUnit}.`);
    } else if (options.acceptedUnits && options.acceptedUnits.length > 0) {
      hints.push(`Use one of these units: ${options.acceptedUnits.join(', ')}.`);
    }
    
    // Check if user forgot unit entirely
    if (!userParsed.unit && userParsed.value !== null) {
      hints.push("Don't forget to include the unit with your numerical answer.");
    }
  }
  
  // Symbolic answer hints
  if (validationResult.method === 'symbolic' && !validationResult.equivalent) {
    const normalized = normalizeSymbolic(userAnswer);
    
    if (normalized === null) {
      hints.push("Invalid format detected. Use ^ for exponents (e.g., x^2 not x2) and check parentheses.");
    } else if (normalized.includes('sqrt')) {
      hints.push("Try simplifying your square roots or converting to exponent form (e.g., √x = x^(1/2)).");
    } else if (normalized.includes('/')) {
      hints.push("Check your fraction simplification. Make sure numerator and denominator are correct.");
    } else {
      hints.push("Verify your algebraic simplification. Combine like terms and factor if possible.");
    }
  }
  
  // Sign error detection
  const userNum = parseFloat(String(userAnswer).replace(/[^0-9.-]/g, ''));
  if (!isNaN(userNum)) {
    const correctNums = correctAnswers
      .map(ans => parseFloat(String(ans).replace(/[^0-9.-]/g, '')))
      .filter(n => !isNaN(n));
    
    if (correctNums.length > 0) {
      const allPositive = correctNums.every(n => n > 0);
      const allNegative = correctNums.every(n => n < 0);
      
      if (allPositive && userNum < 0) {
        hints.push("Check your sign: the answer should be positive.");
      } else if (allNegative && userNum > 0) {
        hints.push("Check your sign: the answer should be negative.");
      }
    }
  }
  
  // Fraction vs decimal hint
  if (String(userAnswer).includes('/')) {
    if (correctAnswers.some(ans => String(ans).includes('.'))) {
      hints.push("Try converting your fraction to a decimal form.");
    }
  } else if (String(userAnswer).includes('.')) {
    if (correctAnswers.some(ans => String(ans).includes('/'))) {
      hints.push("The answer might be expressed as a fraction. Try that form.");
    }
  }
  
  // Generic fallback
  if (hints.length === 0) {
    hints.push("Review the problem carefully. Check your units, signs, and calculation steps.");
  }
  
  return hints;
}

/* -------------------------
   Main validator class
   ------------------------- */
export class AnswerValidator {
  /**
   * Validates user answer against correct answers with multiple strategies
   * @param {string} userAnswer - The user's input
   * @param {string[]} correctAnswers - Array of acceptable answers
   * @param {Object} options - Validation options
   * @returns {Object} - { equivalent, unitError, message, method, hints }
   */
  static validate(userAnswer, correctAnswers, options = {}) {
    const opts = {
      allowSymbolic: true,
      acceptedUnits: [],
      requiredUnit: null,
      tolerance: 1e-3,
      ...options
    };
   
    if (!userAnswer || !Array.isArray(correctAnswers) || correctAnswers.length === 0) {
      return { 
        equivalent: false, 
        message: 'Invalid input', 
        method: 'error',
        hints: ['Please enter an answer.']
      };
    }
   
    // Try pure numeric comparison first
    const userNumeric = this.extractNumericValue(userAnswer);
    
    if (userNumeric !== null) {
      for (const corr of correctAnswers) {
        const corrNumeric = this.extractNumericValue(corr);
        
        if (corrNumeric !== null) {
          const diff = Math.abs(userNumeric - corrNumeric);
          const isClose = diff <= Math.abs(corrNumeric) * opts.tolerance || diff <= opts.tolerance;
          
          if (isClose) {
            return {
              equivalent: true,
              message: 'Numerically equivalent',
              method: 'numeric',
              details: { user: userNumeric, correct: corrNumeric, diff },
              hints: []
            };
          }
        }
      }
    }
    
    // Strategy 1: Unit-based comparison
    const userParsed = parseValueAndUnit(userAnswer);
    const anyCorrectHasUnit = correctAnswers.some(a => parseValueAndUnit(a).unit != null);
   
    if (userParsed.value != null && (userParsed.unit || anyCorrectHasUnit)) {
      // Check required unit
      if (opts.requiredUnit && userParsed.unit !== opts.requiredUnit) {
        const result = {
          equivalent: false,
          unitError: true,
          message: `Unit must be ${opts.requiredUnit}`,
          method: 'unit'
        };
        result.hints = generateHint(userAnswer, correctAnswers, userParsed, opts, result);
        return result;
      }
     
      // Check accepted units
      if (opts.acceptedUnits && opts.acceptedUnits.length > 0 && userParsed.unit &&
          !opts.acceptedUnits.includes(userParsed.unit)) {
        const result = {
          equivalent: false,
          unitError: true,
          message: `Unit must be one of: ${opts.acceptedUnits.join(', ')}`,
          method: 'unit'
        };
        result.hints = generateHint(userAnswer, correctAnswers, userParsed, opts, result);
        return result;
      }
     
      // Compare with each correct answer
      for (const corr of correctAnswers) {
        const cp = parseValueAndUnit(corr);
        if (cp.value == null) continue;
       
        const userSI = toSI(userParsed.value, userParsed.unit || cp.unit);
        const corrSI = toSI(cp.value, cp.unit || userParsed.unit);
       
        if (userSI == null || corrSI == null) continue;
       
        const diff = Math.abs(userSI - corrSI);
        const ok = diff <= Math.abs(corrSI) * opts.tolerance || diff <= opts.tolerance;
       
        if (ok) {
          return {
            equivalent: true,
            message: 'Values are equivalent',
            method: 'unit',
            details: { userSI, corrSI },
            hints: []
          };
        }
      }
     
      const result = {
        equivalent: false,
        unitError: false,
        message: 'Values differ beyond tolerance',
        method: 'unit',
        details: { diff: Math.abs(userParsed.value - parseValueAndUnit(correctAnswers[0]).value), correct: parseValueAndUnit(correctAnswers[0]).value }
      };
      result.hints = generateHint(userAnswer, correctAnswers, userParsed, opts, result);
      return result;
    }
   
    // Strategy 2: Symbolic comparison
    if (opts.allowSymbolic) {
      const nUser = normalizeSymbolic(userAnswer);
     
      if (nUser === null) {
        return {
          equivalent: false,
          message: 'Invalid symbolic form (e.g., use x^3 not x3)',
          method: 'symbolic',
          hints: ['Use ^ for exponents (e.g., x^3 not x3)', 'Check that parentheses are balanced', 'Use sqrt(x) or x^(1/2) for square roots']
        };
      }
     
      for (const corr of correctAnswers) {
        const nCorr = normalizeSymbolic(corr);
        if (nCorr === null) continue;
       
        if (nUser === nCorr) {
          return {
            equivalent: true,
            message: 'Symbolically equivalent',
            method: 'symbolic',
            normalized: nUser,
            hints: []
          };
        }
      }
      
      const result = {
        equivalent: false,
        message: 'Sometimes you can confirm your answer by substituting it in the original equation or expression.',
        method: 'symbolic'
      };
      result.hints = generateHint(userAnswer, correctAnswers, userParsed, opts, result);
      return result;
    }
   
    // Strategy 3: Fallback text comparison
    const userText = this.basicTextNormalize(userAnswer);
    for (const corr of correctAnswers) {
      if (userText === this.basicTextNormalize(corr)) {
        return { 
          equivalent: true, 
          message: 'Text match', 
          method: 'text',
          hints: []
        };
      }
    }
   
    // No match found
    const result = {
      equivalent: false, 
      message: 'Answer does not match',
      method: 'none'
    };
    result.hints = generateHint(userAnswer, correctAnswers, userParsed, opts, result);
    return result;
  }
  
  /**
   * Extract pure numeric value from text
   */
  static extractNumericValue(input) {
    if (!input || typeof input !== 'string') return null;
    
    let s = input.toLowerCase()
      .replace(/approximately|about|roughly|around/gi, '')
      .replace(/≈/g, '')
      .replace(/,/g, '.')
      .trim();
    
    const match = s.match(/([-+]?\d*\.?\d+(?:e[-+]?\d+)?)/);
    if (!match) return null;
    
    const val = parseFloat(match[1]);
    return isNaN(val) ? null : val;
  }
 
  /**
   * Basic text normalization
   */
  static basicTextNormalize(s) {
    if (!s) return '';
    return String(s)
      .toLowerCase()
      .replace(/approximately|about|roughly|around/gi, '')
      .replace(/≈/g, '')
      .replace(/,/g, '.')
      .replace(/\s+/g, ' ')
      .replace(/\$/g, '')
      .replace(/\\left|\\right/g, '')
      .replace(/[{}]/g, '')
      .trim();
  }
 
  /**
   * Legacy method for backward compatibility
   */
  static checkAnswer(userAnswer, correctAnswers, options = {}) {
    const result = this.validate(userAnswer, correctAnswers, options);
    return {
      isCorrect: result.equivalent,
      message: result.message,
      matchedAnswer: result.equivalent ? correctAnswers[0] : null,
      method: result.method,
      hints: result.hints || []
    };
  }
}

export default AnswerValidator;