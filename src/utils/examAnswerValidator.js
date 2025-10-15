// src/utils/examAnswerValidator.js

/* -------------------------
   EXAM-SPECIFIC VALIDATOR
   Enhanced for better symbolic matching
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
   ENHANCED Symbolic normalization for exams
   Handles e^(x)2, e^(x^2), e^(x)^2, etc.
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
  
  // ✅ CRITICAL FIX: Handle e^(x)2 → e^(x^2)
  // Pattern: e^(something)digit → e^(something^digit)
  s = s.replace(/e\^\(([^)]+)\)(\d+)/g, 'e^(($1)^$2)');
  
  // ✅ CRITICAL FIX: Handle e^x2 → e^(x^2)
  s = s.replace(/e\^([a-z])(\d+)/gi, 'e^($1^$2)');
  
  // ✅ Handle e^(x)^2 → e^(x^2) (flatten nested exponents)
  s = s.replace(/e\^\(([^)]+)\)\^(\d+)/g, 'e^(($1)^$2)');
  
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
  
  // ✅ Normalize multiplication signs
  s = s.replace(/\*/g, '');
  
  // ✅ Handle coefficient before e: 2xe^(x^2) → 2*x*e^(x^2)
  s = s.replace(/(\d)([a-z])/gi, '$1*$2');
  s = s.replace(/([a-z])e\^/gi, '$1*e^');
  
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
   Main validator class
   ------------------------- */
export class ExamAnswerValidator {
  /**
   * Validates user answer against correct answers with multiple strategies
   * Optimized for batch grading in exams
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
        message: 'No answer provided', 
        method: 'error'
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
              details: { user: userNumeric, correct: corrNumeric, diff }
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
        return {
          equivalent: false,
          unitError: true,
          message: `Unit must be ${opts.requiredUnit}`,
          method: 'unit'
        };
      }
      
      // Check accepted units
      if (opts.acceptedUnits && opts.acceptedUnits.length > 0 && userParsed.unit &&
          !opts.acceptedUnits.includes(userParsed.unit)) {
        return {
          equivalent: false,
          unitError: true,
          message: `Unit must be one of: ${opts.acceptedUnits.join(', ')}`,
          method: 'unit'
        };
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
            details: { userSI, corrSI }
          };
        }
      }
      
      return {
        equivalent: false,
        unitError: false,
        message: 'Values differ beyond tolerance',
        method: 'unit'
      };
    }
    
    // Strategy 2: Symbolic comparison with enhanced normalization
    if (opts.allowSymbolic) {
      const nUser = normalizeSymbolic(userAnswer);
      
      if (nUser === null || nUser === '') {
        return {
          equivalent: false,
          message: 'Invalid symbolic form',
          method: 'symbolic'
        };
      }
      
      for (const corr of correctAnswers) {
        const nCorr = normalizeSymbolic(corr);
        if (nCorr === null) continue;
        
        // Direct match
        if (nUser === nCorr) {
          return {
            equivalent: true,
            message: 'Symbolically equivalent',
            method: 'symbolic',
            normalized: nUser
          };
        }
        
        // ✅ Try removing spaces and * for comparison
        const nUserClean = nUser.replace(/[\s*]/g, '');
        const nCorrClean = nCorr.replace(/[\s*]/g, '');
        
        if (nUserClean === nCorrClean) {
          return {
            equivalent: true,
            message: 'Symbolically equivalent',
            method: 'symbolic',
            normalized: nUser
          };
        }
      }
      
      return {
        equivalent: false,
        message: 'Does not match expected form',
        method: 'symbolic',
        normalized: nUser
      };
    }
    
    // Strategy 3: Fallback text comparison
    const userText = this.basicTextNormalize(userAnswer);
    for (const corr of correctAnswers) {
      if (userText === this.basicTextNormalize(corr)) {
        return { 
          equivalent: true, 
          message: 'Text match', 
          method: 'text'
        };
      }
    }
    
    // No match found
    return {
      equivalent: false, 
      message: 'Answer does not match',
      method: 'none'
    };
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
      .replace(/\s+/g, '')
      .replace(/\$/g, '')
      .replace(/\\left|\\right/g, '')
      .replace(/[{}]/g, '')
      .replace(/\*/g, '')
      .trim();
  }
}

export default ExamAnswerValidator;