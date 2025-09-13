/**
 * AnswerValidator - Advanced answer validation system
 * Handles multiple input formats and mathematical equivalence
 */
export class AnswerValidator {
  /**
   * Normalize user input for comparison
   * @param {string} answer - Raw user input
   * @returns {string} Normalized answer
   */
  static normalize(answer) {
    if (!answer || typeof answer !== 'string') return '';
    
    return answer
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/,/g, '.') // Replace comma with period for decimal (European format)
      .replace(/×/g, '*') // Replace × with *
      .replace(/∗/g, '*') // Replace ∗ with * (scientific notation)
      .replace(/÷/g, '/') // Replace ÷ with /
      .replace(/\s*=\s*/g, '=') // Normalize equals sign spacing
      .replace(/\s*\+\s*/g, '+') // Normalize plus sign spacing
      .replace(/\s*-\s*/g, '-') // Normalize minus sign spacing
      .replace(/\s*\*\s*/g, '*') // Normalize multiplication spacing
      .replace(/\s*\/\s*/g, '/') // Normalize division spacing
      .replace(/\s*\^\s*/g, '^') // Normalize exponent spacing
      .replace(/square\s+meters?/g, 'm²')
      .replace(/sq\s+m/g, 'm²')
      .replace(/m\^2/g, 'm²')
      .replace(/percent/g, '%')
      .replace(/^x\s*=\s*/, '') // Remove "x=" prefix for algebra
      .replace(/^x\s*/, '') // Remove standalone "x" prefix
      .replace(/\s*$/, ''); // Remove trailing spaces
  }

  /**
   * Extract numeric value from various formats
   * @param {string} str - Input string
   * @returns {number|null} Extracted number or null if invalid
   */
  static extractNumber(str) {
    const normalized = this.normalize(str);
    
    // Handle scientific notation (e.g., 6.673 * 10^-11)
    const scientificMatch = normalized.match(/(-?\d*\.?\d+)\s*\*\s*10\s*\^\s*(-?\d+)/);
    if (scientificMatch) {
      const coefficient = parseFloat(scientificMatch[1]);
      const exponent = parseInt(scientificMatch[2]);
      if (!isNaN(coefficient) && !isNaN(exponent)) {
        return coefficient * Math.pow(10, exponent);
      }
    }

    // Handle mixed numbers (e.g., "2 1/8")
    const mixedMatch = normalized.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);
    if (mixedMatch) {
      const whole = parseInt(mixedMatch[1]);
      const numerator = parseInt(mixedMatch[2]);
      const denominator = parseInt(mixedMatch[3]);
      if (!isNaN(whole) && !isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
        const fractionPart = numerator / denominator;
        return whole >= 0 ? whole + fractionPart : whole - fractionPart;
      }
    }

    // Handle percentages
    if (normalized.includes('%')) {
      const num = parseFloat(normalized.replace(/%.*$/, ''));
      return isNaN(num) ? null : num / 100;
    }
    
    // Handle fractions
    if (normalized.includes('/')) {
      const parts = normalized.split('/');
      if (parts.length === 2) {
        const numerator = parseFloat(parts[0]);
        const denominator = parseFloat(parts[1]);
        if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
          return numerator / denominator;
        }
      }
    }
    
    // Handle regular numbers (including thousands separators like "12 800.25")
    // Remove spaces for number parsing, but preserve decimal points
    const cleanedStr = normalized.replace(/\s+(?=\d)/g, ''); // Remove spaces between digits
    const match = cleanedStr.match(/-?\d*\.?\d+/);
    return match ? parseFloat(match[0]) : null;
  }

  /**
   * Check if two numbers are approximately equal (handles floating point precision)
   * @param {number} a - First number
   * @param {number} b - Second number
   * @param {number} tolerance - Tolerance for comparison
   * @returns {boolean} True if numbers are approximately equal
   */
  static isNumericEqual(a, b, tolerance = 0.0001) {
    if (a === null || b === null || isNaN(a) || isNaN(b)) return false;
    return Math.abs(a - b) < tolerance;
  }

  /**
   * Handle special text answers (like "twelve" -> 12)
   * @param {string} answer - Text answer
   * @returns {number|null} Numeric equivalent or null
   */
  static parseTextNumber(answer) {
    const textNumbers = {
      'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
      'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
      'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
      'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20
    };
    
    const normalized = this.normalize(answer);
    return textNumbers[normalized] ?? null;
  }

  /**
   * Clean units from answer for numeric comparison
   * @param {string} answer - Answer with potential units
   * @returns {string} Answer without units
   */
  static removeUnits(answer) {
    return answer
      .replace(/\s*(m²|m\^2|square\s+meters?|sq\s+m|cm²|km²)\s*$/i, '')
      .replace(/\s*(meters?|m|centimeters?|cm|kilometers?|km)\s*$/i, '')
      .replace(/\s*(seconds?|sec|s|minutes?|min|hours?|hr|h)\s*$/i, '')
      .replace(/\s*(dollars?|\$|euros?|€|pounds?|£)\s*$/i, '')
      .trim();
  }

  /**
   * Main validation method - checks if user answer matches any correct answer
   * @param {string} userAnswer - User's input
   * @param {Array<string>} correctAnswers - Array of acceptable answers
   * @param {Object} options - Validation options
   * @returns {Object} Validation result with success boolean and details
   */
  static checkAnswer(userAnswer, correctAnswers, options = {}) {
    const {
      caseSensitive = false,
      allowPartialCredit = false,
      tolerance = 0.0001
    } = options;

    if (!userAnswer || !correctAnswers || !Array.isArray(correctAnswers)) {
      return { 
        isCorrect: false, 
        message: 'Invalid input provided',
        matchedAnswer: null,
        method: 'error'
      };
    }

    const normalizedUserAnswer = this.normalize(userAnswer);
    
    // Try each correct answer format
    for (const correctAnswer of correctAnswers) {
      const normalizedCorrectAnswer = this.normalize(correctAnswer);
      
      // 1. Exact string match (after normalization)
      if (normalizedUserAnswer === normalizedCorrectAnswer) {
        return {
          isCorrect: true,
          message: 'Exact match',
          matchedAnswer: correctAnswer,
          method: 'exact'
        };
      }
      
      // 2. Numeric equivalence check
      const userNum = this.extractNumber(normalizedUserAnswer);
      const correctNum = this.extractNumber(normalizedCorrectAnswer);
      
      if (userNum !== null && correctNum !== null) {
        if (this.isNumericEqual(userNum, correctNum, tolerance)) {
          return {
            isCorrect: true,
            message: 'Numerically equivalent',
            matchedAnswer: correctAnswer,
            method: 'numeric',
            userValue: userNum,
            correctValue: correctNum
          };
        }
      }

      // 3. Text number matching (e.g., "twelve" = "12")
      const userTextNum = this.parseTextNumber(normalizedUserAnswer);
      if (userTextNum !== null && correctNum !== null) {
        if (this.isNumericEqual(userTextNum, correctNum, tolerance)) {
          return {
            isCorrect: true,
            message: 'Text number match',
            matchedAnswer: correctAnswer,
            method: 'text_numeric',
            userValue: userTextNum,
            correctValue: correctNum
          };
        }
      }

      // 4. Unit-agnostic comparison (remove units before comparing)
      const userWithoutUnits = this.removeUnits(normalizedUserAnswer);
      const correctWithoutUnits = this.removeUnits(normalizedCorrectAnswer);
      
      if (userWithoutUnits && correctWithoutUnits && userWithoutUnits === correctWithoutUnits) {
        return {
          isCorrect: true,
          message: 'Match without units',
          matchedAnswer: correctAnswer,
          method: 'unit_agnostic'
        };
      }
    }
    
    // No match found
    return {
      isCorrect: false,
      message: 'No match found',
      matchedAnswer: null,
      method: 'none',
      suggestions: this.generateSuggestions(userAnswer, correctAnswers)
    };
  }

  /**
   * Generate helpful suggestions when answer is incorrect
   * @param {string} userAnswer - User's incorrect answer
   * @param {Array<string>} correctAnswers - Correct answer formats
   * @returns {Array<string>} Array of suggestion messages
   */
  static generateSuggestions(userAnswer, correctAnswers) {
    const suggestions = [];
    const userNum = this.extractNumber(userAnswer);
    
    if (userNum === null) {
      suggestions.push("Make sure your answer is in a valid number format");
    }
    
    // Check if user is close to any correct answer
    for (const correct of correctAnswers) {
      const correctNum = this.extractNumber(correct);
      if (userNum !== null && correctNum !== null) {
        const difference = Math.abs(userNum - correctNum);
        const percentDiff = (difference / Math.abs(correctNum)) * 100;
        
        if (percentDiff < 10) {
          suggestions.push(`You're close! Check your calculation - the correct answer is near ${correctNum}`);
          break;
        }
      }
    }
    
    // Format-specific suggestions
    if (userAnswer.includes(',') && !userAnswer.includes('.')) {
      suggestions.push("Try using a decimal point (.) instead of comma for decimals");
    }
    
    if (userAnswer.includes('%') && !correctAnswers.some(a => a.includes('%'))) {
      suggestions.push("Try converting the percentage to decimal form");
    }
    
    return suggestions.slice(0, 2); // Limit to 2 suggestions
  }

  /**
   * Validate answer format without checking correctness
   * @param {string} answer - Answer to validate
   * @returns {Object} Format validation result
   */
  static validateFormat(answer) {
    const normalized = this.normalize(answer);
    
    if (!normalized) {
      return { valid: false, message: "Answer cannot be empty" };
    }
    
    // Check for common format issues
    const issues = [];
    
    if (normalized.includes('..')) {
      issues.push("Multiple decimal points detected");
    }
    
    if (normalized.match(/[a-z]+/) && !this.parseTextNumber(normalized)) {
      issues.push("Unrecognized text in answer");
    }
    
    if (normalized.includes('/') && normalized.split('/').length !== 2) {
      issues.push("Invalid fraction format");
    }
    
    return {
      valid: issues.length === 0,
      message: issues.length > 0 ? issues[0] : "Format looks good",
      issues: issues
    };
  }
}