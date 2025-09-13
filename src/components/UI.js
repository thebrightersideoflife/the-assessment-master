/**
 * UI - User Interface components and rendering
 * Handles DOM manipulation and user interactions
 */

export class UI {
  constructor() {
    this.mathRenderer = null;
    this.animations = new Map();
  }

  /**
   * Initialize the UI components
   */
  init() {
    this.hideLoadingSpinner();
    this.showQuizContainer();
    this.setupEventListeners();
    this.initializeMathRenderer();
  }

  /**
   * Hide the loading spinner and show quiz content
   */
  hideLoadingSpinner() {
    const loading = document.getElementById('loading');
    const quizRoot = document.getElementById('quiz-root');
    
    if (loading) {
      loading.style.display = 'none';
    }
    
    if (quizRoot) {
      quizRoot.classList.remove('hidden');
    }
  }

  /**
   * Show the quiz container
   */
  showQuizContainer() {
    const quizRoot = document.getElementById('quiz-root');
    if (!quizRoot) return;

    quizRoot.innerHTML = `
      <div class="quiz-container m-4 lg:m-8">
        <header class="quiz-header">
          <h1 class="quiz-title">Interactive Math Quiz</h1>
          <p class="quiz-subtitle">Test your knowledge with real-world problem solving</p>
        </header>
        
        <div class="progress-container">
          <div class="progress-bar" id="progressBar" style="width: 0%" role="progressbar" aria-label="Quiz progress"></div>
        </div>
        
        <main class="p-6" id="questionsContainer">
          <!-- Questions will be rendered here -->
        </main>
        
        <footer class="p-6 bg-gray-50 text-center text-sm text-gray-600 border-t">
          <p>💡 <strong>Tip:</strong> You can use various formats for answers - fractions, decimals, percentages, and more!</p>
        </footer>
      </div>
    `;
  }

  /**
   * Render all questions in dropdown format
   * @param {Array} questions - Array of question objects
   * @param {Function} onAnswerCheck - Callback for answer checking
   * @param {Set} completedQuestions - Set of completed question IDs
   */
  renderQuestions(questions, onAnswerCheck, completedQuestions = new Set()) {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    container.innerHTML = '';

    questions.forEach(question => {
      const questionElement = this.createQuestionElement(question, onAnswerCheck, completedQuestions.has(question.id));
      container.appendChild(questionElement);
    });

    // Render math expressions after DOM update
    setTimeout(() => this.renderMath(), 100);
  }

  /**
   * Create a single question element with dropdown functionality
   * @param {Object} question - Question data object
   * @param {Function} onAnswerCheck - Callback for answer checking
   * @param {boolean} isCompleted - Whether question is completed
   * @returns {HTMLElement} Question DOM element
   */
  createQuestionElement(question, onAnswerCheck, isCompleted = false) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card';
    questionDiv.setAttribute('data-question-id', question.id);

    // Generate question preview (remove math notation for preview)
    const preview = this.generateQuestionPreview(question.question);

    questionDiv.innerHTML = `
      <div class="question-header ${isCompleted ? 'completed' : ''}" data-question-id="${question.id}">
        <div class="question-title">
          <span class="question-number">Question ${question.id}</span>
          ${preview}
        </div>
        <div class="dropdown-arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>
      </div>
      
      <div class="question-content" id="content-${question.id}">
        <div class="question-content-inner">
          <div class="question-text">${question.question}</div>
          
          <div class="answer-rules">
            <h4>How to format your answers:</h4>
            <ul>
              <li><strong>Fractions:</strong> Use <code>/</code> symbol. Example: <code>-2/3</code></li>
              <li><strong>Mixed numbers:</strong> Integer + space + fraction. Example: <code>2 1/8</code></li>
              <li><strong>Thousands:</strong> Use spaces to separate. Example: <code>12 800,25</code></li>
              <li><strong>Scientific notation:</strong> Use <code>∗</code> and <code>^</code>. Example: <code>6,673 ∗ 10^−11</code></li>
            </ul>
          </div>
          
          <div class="answer-section">
            <input 
              type="text" 
              class="answer-input" 
              id="answer-${question.id}"
              placeholder="Enter your answer..."
              aria-label="Answer input for question ${question.id}"
              aria-describedby="feedback-${question.id}"
              autocomplete="off"
              spellcheck="false"
            >
            <button 
              class="btn btn-primary check-btn" 
              data-question-id="${question.id}"
              aria-describedby="feedback-${question.id}"
            >
              Check Answer
            </button>
          </div>
          
          <div class="feedback" id="feedback-${question.id}" role="alert" aria-live="polite"></div>
          <div class="explanation" id="explanation-${question.id}"></div>
        </div>
      </div>
    `;

    this.attachQuestionEventListeners(questionDiv, question, onAnswerCheck);
    return questionDiv;
  }

  /**
   * Generate a preview of the question text (remove math notation)
   * @param {string} questionText - Full question text with LaTeX
   * @returns {string} Simplified preview text
   */
  generateQuestionPreview(questionText) {
    return questionText
      .replace(/\$\$.*?\$\$/g, '[math expression]')
      .replace(/\$.*?\$/g, '[math]')
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
      .substring(0, 80) + '...';
  }

  /**
   * Attach event listeners to question elements
   * @param {HTMLElement} questionElement - Question DOM element
   * @param {Object} question - Question data
   * @param {Function} onAnswerCheck - Callback for answer checking
   */
  attachQuestionEventListeners(questionElement, question, onAnswerCheck) {
    const header = questionElement.querySelector('.question-header');
    const checkBtn = questionElement.querySelector('.check-btn');
    const answerInput = questionElement.querySelector('.answer-input');
    
    // Dropdown toggle functionality
    header.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleQuestion(question.id);
    });

    // Answer submission
    checkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleAnswerSubmission(question.id, onAnswerCheck);
    });

    // Enter key submission
    answerInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleAnswerSubmission(question.id, onAnswerCheck);
      }
    });

    // Input validation on typing
    answerInput.addEventListener('input', (e) => {
      this.clearFeedback(question.id);
      this.validateInputFormat(question.id, e.target.value);
    });
  }

  /**
   * Toggle question dropdown state
   * @param {number} questionId - ID of question to toggle
   */
  toggleQuestion(questionId) {
    const questionElement = document.querySelector(`[data-question-id="${questionId}"]`);
    const header = questionElement.querySelector('.question-header');
    const content = questionElement.querySelector('.question-content');
    const arrow = questionElement.querySelector('.dropdown-arrow');

    // Close other questions first
    this.closeAllQuestions(questionId);

    // Toggle current question
    const isExpanded = content.classList.contains('expanded');
    
    if (isExpanded) {
      // Close current question
      header.classList.remove('active');
      content.classList.remove('expanded');
      arrow.classList.remove('rotated');
    } else {
      // Open current question
      header.classList.add('active');
      content.classList.add('expanded');
      arrow.classList.add('rotated');
      
      // Focus on input after animation
      setTimeout(() => {
        const input = questionElement.querySelector('.answer-input');
        if (input) input.focus();
      }, 300);

      // Render math in newly opened content
      setTimeout(() => this.renderMath(), 100);
    }
  }

  /**
   * Close all questions except the specified one
   * @param {number} excludeId - Question ID to exclude from closing
   */
  closeAllQuestions(excludeId) {
    const allQuestions = document.querySelectorAll('.question-card');
    
    allQuestions.forEach(questionElement => {
      const questionId = parseInt(questionElement.getAttribute('data-question-id'));
      if (questionId !== excludeId) {
        const header = questionElement.querySelector('.question-header');
        const content = questionElement.querySelector('.question-content');
        const arrow = questionElement.querySelector('.dropdown-arrow');
        
        header.classList.remove('active');
        content.classList.remove('expanded');
        arrow.classList.remove('rotated');
      }
    });
  }

  /**
   * Handle answer submission
   * @param {number} questionId - Question ID
   * @param {Function} onAnswerCheck - Answer checking callback
   */
  async handleAnswerSubmission(questionId, onAnswerCheck) {
    const input = document.getElementById(`answer-${questionId}`);
    const button = document.querySelector(`[data-question-id="${questionId}"].check-btn`);
    
    if (!input || !button) return;

    const userAnswer = input.value.trim();
    
    if (!userAnswer) {
      this.showFeedback(questionId, '⚠️ Please enter an answer before checking.', 'incorrect');
      input.focus();
      return;
    }

    // Show loading state
    button.disabled = true;
    button.innerHTML = '<span class="loading-spinner"></span> Checking...';

    try {
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Call the answer checking callback
      await onAnswerCheck(questionId, userAnswer);
      
    } catch (error) {
      console.error('Error checking answer:', error);
      this.showFeedback(questionId, '❌ Error checking answer. Please try again.', 'incorrect');
    } finally {
      // Reset button state will be handled by the callback
    }
  }

  /**
   * Display feedback message to user
   * @param {number} questionId - Question ID
   * @param {string} message - Feedback message
   * @param {string} type - Feedback type ('correct', 'incorrect', 'info')
   */
  showFeedback(questionId, message, type = 'info') {
    const feedback = document.getElementById(`feedback-${questionId}`);
    if (!feedback) return;

    const icons = {
      correct: '🎉',
      incorrect: '❌',
      info: 'ℹ️'
    };

    feedback.className = `feedback ${type}`;
    feedback.innerHTML = `
      <span class="feedback-icon">${icons[type]}</span>
      ${message}
    `;

    // Animate feedback appearance
    setTimeout(() => {
      feedback.classList.add('show');
    }, 10);
  }

  /**
   * Clear feedback message
   * @param {number} questionId - Question ID
   */
  clearFeedback(questionId) {
    const feedback = document.getElementById(`feedback-${questionId}`);
    if (!feedback) return;

    feedback.classList.remove('show');
    setTimeout(() => {
      feedback.innerHTML = '';
      feedback.className = 'feedback';
    }, 300);
  }

  /**
   * Show explanation for a question
   * @param {number} questionId - Question ID
   * @param {string} explanationText - Explanation content
   */
  showExplanation(questionId, explanationText) {
    const explanation = document.getElementById(`explanation-${questionId}`);
    if (!explanation) return;

    explanation.innerHTML = `
      <h4>Explanation</h4>
      <div class="explanation-content">${explanationText}</div>
    `;

    setTimeout(() => {
      explanation.classList.add('show');
      this.renderMath(); // Render math in explanation
    }, 10);
  }

  /**
   * Update question completion status
   * @param {number} questionId - Question ID
   * @param {boolean} isCorrect - Whether answer was correct
   */
  updateQuestionStatus(questionId, isCorrect) {
    const questionElement = document.querySelector(`[data-question-id="${questionId}"]`);
    const header = questionElement?.querySelector('.question-header');
    const input = document.getElementById(`answer-${questionId}`);
    
    if (!questionElement || !header || !input) return;

    if (isCorrect) {
      header.classList.add('completed');
      input.classList.remove('incorrect');
      input.classList.add('correct');
      input.setAttribute('aria-invalid', 'false');
    } else {
      input.classList.remove('correct');
      input.classList.add('incorrect');
      input.setAttribute('aria-invalid', 'true');
    }
  }

  /**
   * Update answer button based on result
   * @param {number} questionId - Question ID
   * @param {boolean} isCorrect - Whether answer was correct
   * @param {Function} onShowExplanation - Show explanation callback
   * @param {Function} onTryAgain - Try again callback
   */
  updateAnswerButton(questionId, isCorrect, onShowExplanation, onTryAgain) {
    const button = document.querySelector(`[data-question-id="${questionId}"].check-btn`);
    if (!button) return;

    button.disabled = false;

    if (isCorrect) {
      button.textContent = 'Show Explanation';
      button.className = 'btn btn-secondary';
      button.onclick = () => onShowExplanation(questionId);
    } else {
      button.textContent = 'Try Again';
      button.className = 'btn btn-primary';
      button.onclick = () => onTryAgain(questionId);
    }
  }

  /**
   * Reset question to initial state
   * @param {number} questionId - Question ID
   */
  resetQuestion(questionId) {
    const input = document.getElementById(`answer-${questionId}`);
    const button = document.querySelector(`[data-question-id="${questionId}"].check-btn`);
    const feedback = document.getElementById(`feedback-${questionId}`);
    const explanation = document.getElementById(`explanation-${questionId}`);
    
    if (input) {
      input.value = '';
      input.classList.remove('correct', 'incorrect');
      input.removeAttribute('aria-invalid');
      input.focus();
    }
    
    if (button) {
      button.textContent = 'Check Answer';
      button.className = 'btn btn-primary';
      button.disabled = false;
      button.onclick = null; // Will be re-attached by event listener
    }
    
    if (feedback) {
      feedback.classList.remove('show');
      setTimeout(() => {
        feedback.innerHTML = '';
        feedback.className = 'feedback';
      }, 300);
    }
    
    if (explanation) {
      explanation.classList.remove('show');
      setTimeout(() => {
        explanation.innerHTML = '';
      }, 300);
    }
  }

  /**
   * Update progress bar
   * @param {number} completed - Number of completed questions
   * @param {number} total - Total number of questions
   */
  updateProgress(completed, total) {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;

    const percentage = total > 0 ? (completed / total) * 100 : 0;
    
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-label', `Progress: ${completed} out of ${total} questions completed`);
    progressBar.setAttribute('aria-valuenow', completed);
    progressBar.setAttribute('aria-valuemax', total);
  }

  /**
   * Validate input format as user types
   * @param {number} questionId - Question ID
   * @param {string} value - Current input value
   */
  validateInputFormat(questionId, value) {
    // Basic format validation could go here
    // For now, we'll keep it simple and let the main validator handle it
  }

  /**
   * Initialize math rendering
   */
  initializeMathRenderer() {
    if (typeof renderMathInElement === 'function') {
      this.mathRenderer = renderMathInElement;
    }
  }

  /**
   * Render math expressions in the document
   */
  renderMath() {
    if (!this.mathRenderer) return;

    try {
      this.mathRenderer(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false,
        errorColor: '#cc0000',
        fleqn: false
      });
    } catch (error) {
      console.warn('Math rendering failed:', error);
    }
  }

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllQuestions();
      }
    });

    // Handle window resize for responsive behavior
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });
  }

  /**
   * Handle window resize events
   */
  handleResize() {
    // Re-render math expressions after resize
    setTimeout(() => this.renderMath(), 100);
  }

  /**
   * Show success message when quiz is completed
   * @param {number} correctAnswers - Number of correct answers
   * @param {number} totalQuestions - Total number of questions
   */
  showCompletionMessage(correctAnswers, totalQuestions) {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    let message, emoji;

    if (percentage >= 90) {
      message = "Excellent work! You're a math superstar! 🌟";
      emoji = "🏆";
    } else if (percentage >= 70) {
      message = "Great job! You have a solid understanding of these concepts. 👍";
      emoji = "🎉";
    } else if (percentage >= 50) {
      message = "Good effort! Keep practicing and you'll improve even more. 📚";
      emoji = "👏";
    } else {
      message = "Keep learning! Math takes practice, and you're on the right track. 💪";
      emoji = "🌱";
    }

    const completionDiv = document.createElement('div');
    completionDiv.className = 'text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200 mt-6';
    completionDiv.innerHTML = `
      <div class="text-6xl mb-4">${emoji}</div>
      <h3 class="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
      <p class="text-lg text-gray-700 mb-4">${message}</p>
      <div class="text-3xl font-bold text-blue-600">
        ${correctAnswers}/${totalQuestions} (${percentage}%)
      </div>
              <button 
        id="restart-quiz" 
        class="btn btn-primary mt-6 inline-flex items-center"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        Try Again
      </button>
    `;

    container.appendChild(completionDiv);

    // Add restart functionality
    const restartBtn = document.getElementById('restart-quiz');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }

  /**
   * Show error message
   * @param {string} message - Error message to display
   */
  showError(message) {
    const container = document.getElementById('questionsContainer');
    if (!container) return;

    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red-50 border border-red-200 rounded-lg p-6 text-center';
    errorDiv.innerHTML = `
      <div class="text-red-600 text-lg mb-2">⚠️ Error</div>
      <p class="text-red-700">${message}</p>
      <button 
        onclick="window.location.reload()" 
        class="btn btn-primary mt-4"
      >
        Reload Page
      </button>
    `;

    container.appendChild(errorDiv);
  }
}