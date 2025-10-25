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
  // Temperature (for reference, though not converted to SI)
  'c': 1, '°c': 1, 'celsius': 1,
  'f': 1, '°f': 1, 'fahrenheit': 1,
  'k': 1, 'kelvin': 1,
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
    
    // ✅ CRITICAL FIX: Normalize temperature units
    // Handle C, °C, c, celsius as equivalent
    if (u === 'c' || u === '°c' || u === 'celsius') {
      u = 'C'; // Canonical form
    }
    if (u === 'f' || u === '°f' || u === 'fahrenheit') {
      u = 'F';
    }
    if (u === 'k' || u === 'kelvin') {
      u = 'K';
    }
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
   Symbolic normalization - STRICT VERSION
   ------------------------- */
function normalizeSymbolic(raw, strictMode = true) {
  if (raw == null) return '';
  let s = String(raw).trim();
 
  // Clean LaTeX delimiters
  s = s.replace(/\\\(/g, '').replace(/\\\)/g, '').replace(/\$\$/g, '').replace(/\$/g, '');
 
  // Remove approximation indicators
  s = s.replace(/approximately|about|roughly|around/gi, '');
  s = s.replace(/≈/g, '');
  
  // Normalize commas to periods for decimals
  s = s.replace(/,/g, '.');
 
  // Replace ALL unicode superscripts to caret notation
  s = s.replace(/⁰/g, '^0').replace(/¹/g, '^1').replace(/²/g, '^2')
       .replace(/³/g, '^3').replace(/⁴/g, '^4').replace(/⁵/g, '^5')
       .replace(/⁶/g, '^6').replace(/⁷/g, '^7').replace(/⁸/g, '^8')
       .replace(/⁹/g, '^9');
  
  // Replace unicode fractions
  s = s.replace(/½/g, '(1/2)').replace(/¼/g, '(1/4)').replace(/¾/g, '(3/4)')
       .replace(/⅓/g, '(1/3)').replace(/⅔/g, '(2/3)')
       .replace(/⅕/g, '(1/5)').replace(/⅖/g, '(2/5)').replace(/⅗/g, '(3/5)').replace(/⅘/g, '(4/5)')
       .replace(/⅙/g, '(1/6)').replace(/⅚/g, '(5/6)')
       .replace(/⅐/g, '(1/7)').replace(/⅛/g, '(1/8)').replace(/⅑/g, '(1/9)').replace(/⅒/g, '(1/10)');
 
  // Normalize sqrt
  s = s.replace(/√\s*/g, 'sqrt').replace(/\\sqrt\s*\(?/g, 'sqrt(');
  
  // ✅ FIX: Remove spaces BEFORE normalizing constants
  s = s.replace(/\s+/g, '');
  
  // ✅ FIX: Remove leading '+' sign (it's implicit)
  s = s.replace(/^\+/, '');
  
  s = s.replace(/\*\*/g, '^');
 
  // ✅ FIX: Normalize ALL constants to lowercase - improved regex
  // This handles C, C1, C2, K, K1, A, B etc. in all positions
  // Match: start of string OR after operator, then constant letter(s) with optional digits
  s = s.replace(/(?:^|([+\-*/^(]))([CKAB])(\d*)\b/gi, (match, operator, letter, num) => {
    const op = operator || '';
    return op + letter.toLowerCase() + num;
  });
  
  // Also catch constants at the very end (e.g., "x^2+C")
  s = s.replace(/([+\-])([CKAB])(\d*)$/gi, (match, sign, letter, num) => {
    return sign + letter.toLowerCase() + num;
  });
  
  // And at the beginning (e.g., "C+x^2")
  s = s.replace(/^([CKAB])(\d*)(?=[+\-/*^(]|$)/gi, (match, letter, num) => {
    return letter.toLowerCase() + num;
  });
 
  // Add parentheses for sqrt if missing
  s = s.replace(/sqrt([a-z0-9(])/gi, (_, a) => {
    if (a === '(') return 'sqrt(';
    return 'sqrt(' + a;
  });
  s = s.replace(/sqrt([^\(][^+\-*/^)]*)/g, 'sqrt($1)');
 
  // Canonicalize exponent forms
  s = s.replace(/\^\(0?\.5\)/g, '^(1/2)').replace(/\^0\.5/g, '^(1/2)');
  s = s.replace(/\^\(1\/2\)/g, '^(1/2)');
 
  // Convert sqrt to exponent form for comparison
  s = s.replace(/sqrt\(([^)]+)\)/g, '($1)^(1/2)');
 
  // Detect invalid forms like x3 (should be x^3)
  // But exclude e notation (e.g., 1e-3) and function names (cos, sin, etc.)
  if (/[a-df-z][0-9]/i.test(s) && !/([a-z]\^|\^[0-9]|[0-9]e[+-]?\d)/i.test(s)) {
    return null; // Invalid symbolic form
  }
 
  // Remove outer parentheses CAREFULLY - only if they encompass the entire expression
  while (/^\(([^()]+)\)$/.test(s)) {
    s = s.replace(/^\(([^()]+)\)$/, '$1');
  }
 
  // ✅ FIX: ALWAYS normalize addition order (addition is commutative!)
  // Split by top-level + and - signs, preserving the signs with terms
  const terms = splitAndPreserveSigns(s);
  
  if (terms.length > 1) {
    // Sort terms alphabetically, but keep negative terms as-is
    terms.sort((a, b) => {
      // Remove leading signs for comparison
      const aKey = a.replace(/^[+-]/, '');
      const bKey = b.replace(/^[+-]/, '');
      return aKey.localeCompare(bKey);
    });
    
    // Reconstruct the expression
    s = terms.join('');
    
    // Clean up double signs (e.g., "+-" becomes "-", "++" becomes "+")
    s = s.replace(/\+\+/g, '+').replace(/\+-/g, '-').replace(/-\+/g, '-').replace(/--/g, '+');
    
    // Remove leading '+' again if it was added back
    s = s.replace(/^\+/, '');
  }
 
  return s;
}

function splitAndPreserveSigns(str) {
  const terms = [];
  let depth = 0;
  let buf = '';
  let prevSign = '+'; // Start with implicit positive
  
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    
    if (ch === '(') {
      depth++;
      buf += ch;
    } else if (ch === ')') {
      depth = Math.max(0, depth - 1);
      buf += ch;
    } else if (depth === 0 && (ch === '+' || ch === '-')) {
      // Found a top-level operator
      if (buf) {
        // Add the previous term with its sign
        if (prevSign === '-' && !buf.startsWith('-')) {
          terms.push('-' + buf);
        } else if (prevSign === '+' && !buf.startsWith('-')) {
          terms.push('+' + buf);
        } else {
          terms.push(buf);
        }
        buf = '';
      }
      prevSign = ch;
    } else {
      buf += ch;
    }
  }
  
  // Add the last term
  if (buf) {
    if (prevSign === '-' && !buf.startsWith('-')) {
      terms.push('-' + buf);
    } else if (prevSign === '+' && !buf.startsWith('-')) {
      terms.push('+' + buf);
    } else {
      terms.push(buf);
    }
  }
  
  return terms.filter(t => t && t !== '+' && t !== '-');
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
   Extract variables and constants
   ------------------------- */
function extractSymbolicComponents(normalized) {
  const components = {
    variables: new Set(),
    hasConstant: false,
    leadingSign: '+',
    terms: []
  };
  
  // Check leading sign (after normalization, leading '+' should be removed)
  if (normalized.startsWith('-')) {
    components.leadingSign = '-';
  }
  
  // Extract all variable letters (excluding e for exponential notation)
  // Also exclude common function prefixes
  const varMatches = normalized.match(/(?<!co)(?<!si)(?<!ta)(?<!lo)(?<!ln)(?<!se)(?<!cs)[a-df-z]/gi);
  if (varMatches) {
    varMatches.forEach(v => {
      const lower = v.toLowerCase();
      // Skip if it's a constant marker
      if (lower !== 'c' && lower !== 'k') {
        components.variables.add(lower);
      }
    });
  }
  
  // Check for constant term (standalone 'c' or 'k' with optional digit)
  // Must be:
  // - At start: ^c1 or ^k
  // - After operator: +c or -c2
  // - At end: ...+c$ or ...-k1$
  // Must NOT be part of cos, sec, etc.
  if (/(?:^|[+\-*/^(])[ck]\d*(?:[+\-*/^)]|$)/i.test(normalized)) {
    components.hasConstant = true;
  }
  
  // Split into terms (by + and - at top level)
  const terms = normalized.split(/(?=[+\-])/);
  components.terms = terms.filter(t => t.trim());
  
  return components;
}

/* -------------------------
   Strict comparison for symbolic expressions
   ------------------------- */
function strictSymbolicMatch(userNorm, correctNorm) {
  // Must match exactly after normalization
  if (userNorm === correctNorm) {
    return { match: true, reason: null };
  }
  
  // Extract components
  const userComp = extractSymbolicComponents(userNorm);
  const correctComp = extractSymbolicComponents(correctNorm);
  
  // ✅ Check 1: Variables must match exactly
  const userVars = Array.from(userComp.variables).sort().join(',');
  const correctVars = Array.from(correctComp.variables).sort().join(',');
  
  if (userVars !== correctVars) {
    return { 
      match: false, 
      reason: `Variable mismatch: expected ${correctVars || 'none'}, got ${userVars || 'none'}`
    };
  }
  
  // ✅ Check 2: Constant of integration must match
  if (correctComp.hasConstant && !userComp.hasConstant) {
    return { 
      match: false, 
      reason: 'Missing constant of integration (+C)'
    };
  }
  
  // ✅ Check 3: Leading sign must match (catches -x^2 vs x^2)
  // Note: After term reordering, this checks the sign of the FIRST term alphabetically
  if (userComp.leadingSign !== correctComp.leadingSign) {
    return { 
      match: false, 
      reason: 'Sign error: check if your answer should be positive or negative'
    };
  }
  
  // ✅ Check 4: Number of terms should match (helps catch missing terms)
  if (Math.abs(userComp.terms.length - correctComp.terms.length) > 1) {
    return { 
      match: false, 
      reason: 'Expression structure differs significantly'
    };
  }
  
  return { match: false, reason: 'Expressions are not equivalent' };
}

/* -------------------------
   Generate helpful hints
   ------------------------- */
function generateHint(userAnswer, correctAnswers, userParsed, options, validationResult) {
  const hints = [];
  
  // Symbolic-specific hints
  if (validationResult.method === 'symbolic' && validationResult.symbolicReason) {
    hints.push(validationResult.symbolicReason);
    
    // Additional context-specific hints
    if (validationResult.symbolicReason.includes('variable')) {
      hints.push('Make sure you\'re using the correct variable name from the problem.');
    }
    if (validationResult.symbolicReason.includes('constant')) {
      hints.push('Indefinite integrals require adding a constant of integration (usually +C).');
    }
    if (validationResult.symbolicReason.includes('Sign error')) {
      hints.push('Double-check the signs in your calculation, especially when distributing negatives.');
    }
  }
  
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
    
    if (!userParsed.unit && userParsed.value !== null) {
      hints.push("Don't forget to include the unit with your numerical answer.");
    }
  }
  
  // Invalid format hints
  if (validationResult.method === 'symbolic' && validationResult.message?.includes('Invalid')) {
    hints.push("Use ^ for exponents (e.g., x^3 not x3)");
    hints.push("Check that parentheses are balanced");
    hints.push("Use sqrt(x) or x^(1/2) for square roots");
  }
  
  // Sign error detection for pure numbers
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
  
  // Generic fallback
  if (hints.length === 0) {
    hints.push("Review the problem carefully and verify each step of your solution.");
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
      strictSymbolic: true, // ✅ Enforces strict symbolic matching
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
   
    // ✅ Normalize accepted units to handle case variations
    const normalizedAcceptedUnits = opts.acceptedUnits.map(u => {
      const lower = u.toLowerCase();
      if (lower === 'c' || lower === '°c' || lower === 'celsius') return 'C';
      if (lower === 'f' || lower === '°f' || lower === 'fahrenheit') return 'F';
      if (lower === 'k' || lower === 'kelvin') return 'K';
      return u;
    });
   
    // ✅ Strategy 1: Pure numeric comparison (for answers that are just numbers)
    const userNumeric = this.extractNumericValue(userAnswer);
    const allCorrectAreNumeric = correctAnswers.every(ans => {
      const normalized = normalizeSymbolic(ans, false);
      // Check if it's purely numeric (no variables)
      return !/[a-z]/i.test(normalized.replace(/e[+-]?\d/gi, ''));
    });
    
    if (userNumeric !== null && allCorrectAreNumeric) {
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
      
      // If we get here, numeric comparison failed
      const result = {
        equivalent: false,
        message: 'Numerical value incorrect',
        method: 'numeric',
        details: { 
          diff: Math.abs(userNumeric - this.extractNumericValue(correctAnswers[0])), 
          correct: this.extractNumericValue(correctAnswers[0])
        }
      };
      result.hints = generateHint(userAnswer, correctAnswers, {}, opts, result);
      return result;
    }
    
    // ✅ Strategy 2: Unit-based comparison (numeric with units)
    const userParsed = parseValueAndUnit(userAnswer);
    const anyCorrectHasUnit = correctAnswers.some(a => parseValueAndUnit(a).unit != null);
   
    if (userParsed.value != null && (userParsed.unit || anyCorrectHasUnit)) {
      // ✅ Check required unit with normalization
      if (opts.requiredUnit) {
        const normalizedRequired = opts.requiredUnit.toLowerCase() === 'c' || 
                                   opts.requiredUnit === '°C' ? 'C' : opts.requiredUnit;
        
        if (userParsed.unit !== normalizedRequired) {
          const result = {
            equivalent: false,
            unitError: true,
            message: `Unit must be ${opts.requiredUnit}`,
            method: 'unit'
          };
          result.hints = generateHint(userAnswer, correctAnswers, userParsed, opts, result);
          return result;
        }
      }
     
      // ✅ Check accepted units with normalization
      if (normalizedAcceptedUnits.length > 0 && userParsed.unit &&
          !normalizedAcceptedUnits.includes(userParsed.unit)) {
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
       
        // ✅ For temperature, just compare values directly (no SI conversion)
        if ((userParsed.unit === 'C' || userParsed.unit === 'F' || userParsed.unit === 'K') &&
            (cp.unit === 'C' || cp.unit === 'F' || cp.unit === 'K')) {
          const diff = Math.abs(userParsed.value - cp.value);
          const ok = diff <= Math.abs(cp.value) * opts.tolerance || diff <= opts.tolerance;
          
          if (ok) {
            return {
              equivalent: true,
              message: 'Values are equivalent',
              method: 'unit',
              details: { user: userParsed.value, correct: cp.value },
              hints: []
            };
          }
          continue;
        }
        
        // For other units, use SI conversion
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
        details: { 
          diff: Math.abs(userParsed.value - parseValueAndUnit(correctAnswers[0]).value), 
          correct: parseValueAndUnit(correctAnswers[0]).value 
        }
      };
      result.hints = generateHint(userAnswer, correctAnswers, userParsed, opts, result);
      return result;
    }
   
    // ✅ Strategy 3: STRICT Symbolic comparison
    if (opts.allowSymbolic) {
      const nUser = normalizeSymbolic(userAnswer, opts.strictSymbolic);
     
      if (nUser === null) {
        return {
          equivalent: false,
          message: 'Invalid symbolic form (e.g., use x^3 not x3)',
          method: 'symbolic',
          hints: ['Use ^ for exponents (e.g., x^3 not x3)', 'Check that parentheses are balanced', 'Use sqrt(x) or x^(1/2) for square roots']
        };
      }
     
      for (const corr of correctAnswers) {
        const nCorr = normalizeSymbolic(corr, opts.strictSymbolic);
        if (nCorr === null) continue;
       
        // ✅ Use strict matching
        const matchResult = strictSymbolicMatch(nUser, nCorr);
        
        if (matchResult.match) {
          return {
            equivalent: true,
            message: 'Symbolically equivalent',
            method: 'symbolic',
            normalized: nUser,
            hints: []
          };
        }
      }
      
      // If no match, provide detailed feedback
      const firstCorrect = normalizeSymbolic(correctAnswers[0], opts.strictSymbolic);
      const matchResult = strictSymbolicMatch(nUser, firstCorrect);
      
      const result = {
        equivalent: false,
        message: matchResult.reason || 'Expression does not match expected form',
        method: 'symbolic',
        symbolicReason: matchResult.reason
      };
      result.hints = generateHint(userAnswer, correctAnswers, userParsed, opts, result);
      return result;
    }
   
    // ✅ Strategy 4: Fallback text comparison (case-insensitive, whitespace-normalized)
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
      message: 'Answer does not match expected form',
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
    
    // Match the number part, preserving sign
    const match = s.match(/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)/);
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
      .replace(/\s+/g, '')
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