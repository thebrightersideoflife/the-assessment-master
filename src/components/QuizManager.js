/**
 * QuizManager - Main quiz logic and state management
 * Coordinates between UI, questions data, and answer validation
 */

import { AnswerValidator } from './AnswerValidator.js';
import { UI } from './UI.js';

export class QuizManager {
  constructor(questions) {
    this.questions = questions;
    this.completedQuestions = new Set();
    this.correctAnswers = new Set();
    this.currentQuestionId = null;
    this.ui = new UI();
    this.startTime = null;
    this.questionAttempts = new Map(); // Track attempts per question
    
    // Initialize the quiz
    this.init();
  }

  /**
   * Initialize the quiz manager
   */
  async init() {
    try {
      this.startTime = new Date();
      
      // Initialize UI
      this.ui.init();
      
      // Render questions
      this.renderQuestions();
      
      // Update initial progress
      this.updateProgress();
      
      console.log('Quiz initialized successfully');
      
    } catch (error) {
      console.error('Failed to initialize quiz:', error);
      this.ui.showError('Failed to initialize quiz. Please refresh the page.');
    }
  }

  /**
   * Render all questions using the UI component
   */
  renderQuestions() {
    this.ui.renderQuestions(
      this.questions, 
      this.checkAnswer.bind(this),
      this.completedQuestions
    );
  }

  /**
   * Check user's answer against correct answers
   * @param {number} questionId - ID of the question being answered
   * @param {string} userAnswer - User's submitted answer
   */
  async checkAnswer(questionId, userAnswer) {
    const question = this.questions.find(q => q.id === questionId);
    if (!question) {
      console.error('Question not found:', questionId);
      return;
    }

    // Track attempts
    const attempts = this.questionAttempts.get(questionId) || 0;
    this.questionAttempts.set(questionId, attempts + 1);

    try {
      // Validate the answer
      const validationResult = AnswerValidator.checkAnswer(
        userAnswer, 
        question.correctAnswers,
        {
          caseSensitive: false,
          allowPartialCredit: false,
          tolerance: 0.0001
        }
      );

      if (validationResult.isCorrect) {
        // Handle correct answer
        await this.handleCorrectAnswer(questionId, question, validationResult);
      } else {
        // Handle incorrect answer
        await this.handleIncorrectAnswer(questionId, question, validationResult);
      }

    } catch (error) {
      console.error('Error validating answer:', error);
      this.ui.showFeedback(questionId, 'Error checking answer. Please try again.', 'incorrect');
      this.resetAnswerButton(questionId);
    }
  }

  /**
   * Handle correct answer submission
   * @param {number} questionId - Question ID
   * @param {Object} question - Question object
   * @param {Object} validationResult - Validation result from AnswerValidator
   */
  async handleCorrectAnswer(questionId, question, validationResult) {
    // Mark as completed and correct
    this.completedQuestions.add(questionId);
    this.correctAnswers.add(questionId);

    // Update UI
    this.ui.updateQuestionStatus(questionId, true);
    
    // Show success feedback
    const attempts = this.questionAttempts.get(questionId);
    const feedback = attempts === 1 
      ? '🎉 Perfect! Correct on the first try!'
      : `🎉 Correct! Well done! (${attempts} ${attempts === 1 ? 'attempt' : 'attempts'})`;
    
    this.ui.showFeedback(questionId, feedback, 'correct');

    // Update button to show explanation option
    this.ui.updateAnswerButton(
      questionId, 
      true, 
      this.showExplanation.bind(this),
      null
    );

    // Update progress
    this.updateProgress();

    // Check if quiz is complete
    this.checkQuizCompletion();
  }

  /**
   * Handle incorrect answer submission
   * @param {number} questionId - Question ID
   * @param {Object} question - Question object
   * @param {Object} validationResult - Validation result from AnswerValidator
   */
  async handleIncorrectAnswer(questionId, question, validationResult) {
    const attempts = this.questionAttempts.get(questionId);
    
    // Update UI
    this.ui.updateQuestionStatus(questionId, false);

    // Generate feedback message
    let feedback = '❌ Not quite right.';
    
    if (validationResult.suggestions && validationResult.suggestions.length > 0) {
      feedback += ' ' + validationResult.suggestions[0];
    } else if (attempts === 1) {
      feedback += ' Take another look at the problem.';
    } else {
      feedback += ' Keep trying!';
    }

    this.ui.showFeedback(questionId, feedback, 'incorrect');

    // Show explanation immediately for incorrect answers
    setTimeout(() => {
      this.showExplanation(questionId);
    }, 1000);

    // Update button for retry
    this.ui.updateAnswerButton(
      questionId,
      false,
      null,
      this.resetQuestion.bind(this)
    );
  }

  /**
   * Show explanation for a question
   * @param {number} questionId - Question ID
   */
  showExplanation(questionId) {
    const question = this.questions.find(q => q.id === questionId);
    if (!question) return;

    this.ui.showExplanation(questionId, question.explanation);

    // For correct answers, hide the "Show Explanation" button after clicking
    if (this.correctAnswers.has(questionId)) {
      const button = document.querySelector(`[data-question-id="${questionId}"].check-btn`);
      if (button && button.textContent === 'Show Explanation') {
        button.style.display = 'none';
      }
    }
  }

  /**
   * Reset a question to allow retrying
   * @param {number} questionId - Question ID
   */
  resetQuestion(questionId) {
    this.ui.resetQuestion(questionId);
    
    // Reset button click handler
    const button = document.querySelector(`[data-question-id="${questionId}"].check-btn`);
    if (button) {
      button.onclick = () => {
        const input = document.getElementById(`answer-${questionId}`);
        if (input) {
          this.checkAnswer(questionId, input.value);
        }
      };
    }
  }

  /**
   * Reset answer button to initial state
   * @param {number} questionId - Question ID
   */
  resetAnswerButton(questionId) {
    const button = document.querySelector(`[data-question-id="${questionId}"].check-btn`);
    if (!button) return;

    button.textContent = 'Check Answer';
    button.className = 'btn btn-primary';
    button.disabled = false;
    button.onclick = () => {
      const input = document.getElementById(`answer-${questionId}`);
      if (input) {
        this.checkAnswer(questionId, input.value);
      }
    };
  }

  /**
   * Update progress bar and tracking
   */
  updateProgress() {
    const completedCount = this.completedQuestions.size;
    const totalQuestions = this.questions.length;
    
    this.ui.updateProgress(completedCount, totalQuestions);

    // Log progress for analytics
    console.log(`Progress: ${completedCount}/${totalQuestions} questions completed`);
  }

  /**
   * Check if quiz is complete and show results
   */
  checkQuizCompletion() {
    const totalQuestions = this.questions.length;
    const completedCount = this.completedQuestions.size;

    if (completedCount >= totalQuestions) {
      setTimeout(() => {
        this.showQuizResults();
      }, 1500); // Delay to let user see final feedback
    }
  }

  /**
   * Show quiz completion results
   */
  showQuizResults() {
    const correctCount = this.correctAnswers.size;
    const totalQuestions = this.questions.length;
    const endTime = new Date();
    const timeSpent = Math.round((endTime - this.startTime) / 1000); // seconds

    // Show completion message
    this.ui.showCompletionMessage(correctCount, totalQuestions);

    // Log detailed results
    console.log('Quiz Results:', {
      correct: correctCount,
      total: totalQuestions,
      percentage: Math.round((correctCount / totalQuestions) * 100),
      timeSpent: timeSpent,
      attempts: Object.fromEntries(this.questionAttempts)
    });

    // Analytics could be sent here
    this.trackQuizCompletion(correctCount, totalQuestions, timeSpent);
  }

  /**
   * Track quiz completion for analytics
   * @param {number} correctAnswers - Number of correct answers
   * @param {number} totalQuestions - Total number of questions
   * @param {number} timeSpent - Time spent in seconds
   */
  trackQuizCompletion(correctAnswers, totalQuestions, timeSpent) {
    // This is where you would send analytics data
    // For example, to Google Analytics, Mixpanel, etc.
    
    const analyticsData = {
      event: 'quiz_completed',
      correct_answers: correctAnswers,
      total_questions: totalQuestions,
      success_rate: (correctAnswers / totalQuestions) * 100,
      time_spent_seconds: timeSpent,
      average_attempts: this.calculateAverageAttempts(),
      timestamp: new Date().toISOString()
    };

    // Log to console (replace with actual analytics service)
    console.log('Analytics Data:', analyticsData);

    // Example: Send to analytics service
    // this.sendAnalytics(analyticsData);
  }

  /**
   * Calculate average number of attempts per question
   * @returns {number} Average attempts
   */
  calculateAverageAttempts() {
    if (this.questionAttempts.size === 0) return 0;
    
    const totalAttempts = Array.from(this.questionAttempts.values())
      .reduce((sum, attempts) => sum + attempts, 0);
    
    return totalAttempts / this.questionAttempts.size;
  }

  /**
   * Get quiz statistics
   * @returns {Object} Quiz statistics
   */
  getStatistics() {
    return {
      totalQuestions: this.questions.length,
      completedQuestions: this.completedQuestions.size,
      correctAnswers: this.correctAnswers.size,
      incorrectAnswers: this.completedQuestions.size - this.correctAnswers.size,
      questionsRemaining: this.questions.length - this.completedQuestions.size,
      successRate: this.completedQuestions.size > 0 
        ? (this.correctAnswers.size / this.completedQuestions.size) * 100 
        : 0,
      averageAttempts: this.calculateAverageAttempts(),
      timeSpent: this.startTime ? Math.round((new Date() - this.startTime) / 1000) : 0
    };
  }

  /**
   * Reset the entire quiz
   */
  resetQuiz() {
    // Clear all tracking
    this.completedQuestions.clear();
    this.correctAnswers.clear();
    this.questionAttempts.clear();
    this.currentQuestionId = null;
    this.startTime = new Date();

    // Re-render questions
    this.renderQuestions();
    
    // Update progress
    this.updateProgress();

    console.log('Quiz reset successfully');
  }

  /**
   * Get question by ID
   * @param {number} questionId - Question ID
   * @returns {Object|null} Question object or null
   */
  getQuestion(questionId) {
    return this.questions.find(q => q.id === questionId) || null;
  }

  /**
   * Check if question is completed
   * @param {number} questionId - Question ID
   * @returns {boolean} True if completed
   */
  isQuestionCompleted(questionId) {
    return this.completedQuestions.has(questionId);
  }

  /**
   * Check if question was answered correctly
   * @param {number} questionId - Question ID
   * @returns {boolean} True if answered correctly
   */
  isQuestionCorrect(questionId) {
    return this.correctAnswers.has(questionId);
  }

  /**
   * Get number of attempts for a question
   * @param {number} questionId - Question ID
   * @returns {number} Number of attempts
   */
  getQuestionAttempts(questionId) {
    return this.questionAttempts.get(questionId) || 0;
  }
}