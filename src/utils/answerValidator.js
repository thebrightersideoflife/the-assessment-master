//The AnswerValidator class has a method checkAnswer that compares the user's answer with the correct answers.
// It normalizes the answers and checks for equivalence.

export class AnswerValidator {
  constructor() {
    this.patterns = {
      fraction: /^(-?\d+)\/(-?\d+)$/,
      decimal: /^-?\d*\.?\d+$/,
      percentage: /^-?\d*\.?\d+%$/,
      expression: /^[a-zA-Z0-9+\-*\/\^\s\(\)π]+$/
    };
  }

  normalize(answer) {
    let normalized = answer.toString().trim().toLowerCase();
    normalized = normalized.replace(/\s+/g, ' ');
    normalized = normalized.replace(/\*\s*π/g, 'π');
    normalized = normalized.replace(/pi/g, 'π');
    normalized = normalized.replace(/\s*\+\s*/g, '+');
    normalized = normalized.replace(/\s*-\s*/g, '-');
    normalized = normalized.replace(/\s*\*\s*/g, '*');
    normalized = normalized.replace(/\s*\/\s*/g, '/');
    return normalized;
  }

  convertToDecimal(answer) {
    const normalized = this.normalize(answer);
    
    if (normalized.includes('%')) {
      const num = parseFloat(normalized.replace('%', ''));
      return num / 100;
    }
    
    const fractionMatch = normalized.match(this.patterns.fraction);
    if (fractionMatch) {
      const numerator = parseFloat(fractionMatch[1]);
      const denominator = parseFloat(fractionMatch[2]);
      return numerator / denominator;
    }
    
    if (this.patterns.decimal.test(normalized)) {
      return parseFloat(normalized);
    }
    
    if (normalized.includes('π')) {
      let expr = normalized.replace(/π/g, Math.PI.toString());
      try {
        return eval(expr);
      } catch {
        return null;
      }
    }
    
    return null;
  }

  isEquivalent(userAnswer, correctAnswer, tolerance = 0.001) {
    const normalizedUser = this.normalize(userAnswer);
    const normalizedCorrect = this.normalize(correctAnswer);
    
    if (normalizedUser === normalizedCorrect) {
      return true;
    }
    
    const userDecimal = this.convertToDecimal(normalizedUser);
    const correctDecimal = this.convertToDecimal(normalizedCorrect);
    
    if (userDecimal !== null && correctDecimal !== null) {
      return Math.abs(userDecimal - correctDecimal) < tolerance;
    }
    
    return false;
  }

  checkAnswer(userAnswer, correctAnswers) {
    for (const correctAnswer of correctAnswers) {
      if (this.isEquivalent(userAnswer, correctAnswer)) {
        return true;
      }
    }
    return false;
  }
}