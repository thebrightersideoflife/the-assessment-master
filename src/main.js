/**
 * Main Application Entry Point
 * Initializes and starts the Interactive Math Quiz
 */

import { QuizManager } from './components/QuizManager.js';
import { quizQuestions, getRandomQuestions } from './data/questions.js';

/**
 * Application configuration
 */
const CONFIG = {
  // Quiz settings
  randomizeQuestions: false, // Set to true to randomize question order
  questionCount: null, // null = all questions, number = limit questions
  enableAnalytics: false, // Enable analytics tracking
  
  // UI settings
  theme: 'light', // 'light' or 'dark'
  animationSpeed: 'normal', // 'fast', 'normal', 'slow'
  
  // Accessibility settings
  reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  highContrast: window.matchMedia('(prefers-contrast: high)').matches,
};

/**
 * Main application class
 */
class App {
  constructor() {
    this.quizManager = null;
    this.isInitialized = false;
    
    // Bind methods
    this.handleError = this.handleError.bind(this);
    this.handleKeyboardNavigation = this.handleKeyboardNavigation.bind(this);
  }

  /**
   * Initialize the application
   */
  async init() {
    try {
      console.log('🚀 Starting Interactive Math Quiz...');
      
      // Wait for DOM to be ready
      await this.waitForDOM();
      
      // Apply configuration
      this.applyConfiguration();
      
      // Set up error handling
      this.setupErrorHandling();
      
      // Set up global event listeners
      this.setupGlobalEventListeners();
      
      // Prepare questions
      const questions = this.prepareQuestions();
      
      if (!questions || questions.length === 0) {
        throw new Error('No questions available');
      }
      
      // Initialize quiz manager
      this.quizManager = new QuizManager(questions);
      
      // Mark as initialized
      this.isInitialized = true;
      
      console.log('✅ Quiz initialized successfully');
      console.log(`📊 Loaded ${questions.length} questions`);
      
      // Optional: Track initialization
      if (CONFIG.enableAnalytics) {
        this.trackEvent('quiz_initialized', {
          question_count: questions.length,
          randomized: CONFIG.randomizeQuestions
        });
      }
      
    } catch (error) {
      console.error('❌ Failed to initialize app:', error);
      this.handleError(error);
    }
  }

  /**
   * Wait for DOM to be ready
   * @returns {Promise} Resolves when DOM is ready
   */
  waitForDOM() {
    return new Promise((resolve) => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });
  }

  /**
   * Apply configuration settings to the app
   */
  applyConfiguration() {
    // Apply theme
    if (CONFIG.theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    // Apply reduced motion preference
    if (CONFIG.reduceMotion) {
      document.documentElement.classList.add('reduce-motion');
      // Add CSS for reduced motion
      const style = document.createElement('style');
      style.textContent = `
        .reduce-motion *, 
        .reduce-motion *::before, 
        .reduce-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Apply high contrast preference
    if (CONFIG.highContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    
    // Set CSS custom properties for configuration
    document.documentElement.style.setProperty('--animation-speed', 
      CONFIG.animationSpeed === 'fast' ? '0.2s' : 
      CONFIG.animationSpeed === 'slow' ? '0.6s' : '0.3s'
    );
  }

  /**
   * Prepare questions based on configuration
   * @returns {Array} Array of question objects
   */
  prepareQuestions() {
    let questions = [...quizQuestions]; // Create a copy
    
    // Randomize if configured
    if (CONFIG.randomizeQuestions) {
      questions = this.shuffleArray(questions);
      console.log('🔀 Questions randomized');
    }
    
    // Limit question count if configured
    if (CONFIG.questionCount && CONFIG.questionCount > 0) {
      questions = questions.slice(0, CONFIG.questionCount);
      console.log(`📝 Limited to ${CONFIG.questionCount} questions`);
    }
    
    // Validate questions
    questions = questions.filter(this.validateQuestion);
    
    return questions;
  }

  /**
   * Validate a single question object
   * @param {Object} question - Question to validate
   * @returns {boolean} True if question is valid
   */
  validateQuestion(question) {
    const required = ['id', 'question', 'correctAnswers', 'explanation'];
    const hasRequiredFields = required.every(field => 
      question.hasOwnProperty(field) && question[field]
    );
    
    if (!hasRequiredFields) {
      console.warn('Invalid question missing required fields:', question);
      return false;
    }
    
    if (!Array.isArray(question.correctAnswers) || question.correctAnswers.length === 0) {
      console.warn('Question has no correct answers:', question.id);
      return false;
    }
    
    return true;
  }

  /**
   * Shuffle array using Fisher-Yates algorithm
   * @param {Array} array - Array to shuffle
   * @returns {Array} Shuffled array
   */
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Set up global error handling
   */
  setupErrorHandling() {
    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
      this.handleError(event.error);
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      this.handleError(event.reason);
      event.preventDefault(); // Prevent default browser error handling
    });
  }

  /**
   * Set up global event listeners
   */
  setupGlobalEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyboardNavigation);
    
    // Handle visibility change (page focus/blur)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        console.log('📱 Page hidden - pausing quiz');
      } else {
        console.log('📱 Page visible - resuming quiz');
      }
    });
    
    // Handle page unload
    window.addEventListener('beforeunload', (event) => {
      if (this.quizManager && this.quizManager.getStatistics().completedQuestions > 0) {
        // Warn user if they have progress
        const message = 'You have quiz progress that will be lost. Are you sure you want to leave?';
        event.returnValue = message;
        return message;
      }
    });
  }

  /**
   * Handle keyboard navigation
   * @param {KeyboardEvent} event - Keyboard event
   */
  handleKeyboardNavigation(event) {
    // Handle global keyboard shortcuts
    switch (event.key) {
      case 'Escape':
        // Close any open dropdowns
        if (this.quizManager) {
          // This would close all questions - handled by UI component
        }
        break;
        
      case 'F1':
        event.preventDefault();
        this.showHelp();
        break;
        
      case 'r':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          this.confirmResetQuiz();
        }
        break;
    }
  }

  /**
   * Handle application errors
   * @param {Error} error - Error object
   */
  handleError(error) {
    console.error('Application error:', error);
    
    // Show user-friendly error message
    const errorContainer = document.getElementById('quiz-root');
    if (errorContainer) {
      errorContainer.innerHTML = `
        <div class="min-h-screen flex items-center justify-center p-4">
          <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <div class="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
            <p class="text-gray-600 mb-6">
              We encountered an error while loading the quiz. Please try refreshing the page.
            </p>
            <button 
              onclick="window.location.reload()" 
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
            <details class="mt-4 text-left">
              <summary class="cursor-pointer text-sm text-gray-500">Technical Details</summary>
              <pre class="text-xs text-gray-400 mt-2 bg-gray-50 p-2 rounded overflow-auto">${error.message}</pre>
            </details>
          </div>
        </div>
      `;
    }
    
    // Track error if analytics enabled
    if (CONFIG.enableAnalytics) {
      this.trackEvent('quiz_error', {
        error_message: error.message,
        error_stack: error.stack
      });
    }
  }

  /**
   * Show help modal
   */
  showHelp() {
    // Implementation would show a help modal with instructions
    alert('Quiz Help:\n\n' +
          '• Click question headers to expand/collapse\n' +
          '• Use various answer formats (fractions, decimals, etc.)\n' +
          '• Press Enter to submit answers\n' +
          '• Press Esc to close questions\n' +
          '• Press Ctrl+R to reset quiz');
  }

  /**
   * Confirm and reset quiz
   */
  confirmResetQuiz() {
    if (!this.quizManager) return;
    
    const stats = this.quizManager.getStatistics();
    if (stats.completedQuestions === 0) {
      // No progress to lose
      this.quizManager.resetQuiz();
      return;
    }
    
    const confirmed = confirm(
      `Are you sure you want to reset the quiz?\n\n` +
      `You will lose progress on ${stats.completedQuestions} completed questions.`
    );
    
    if (confirmed) {
      this.quizManager.resetQuiz();
      console.log('🔄 Quiz reset by user');
    }
  }

  /**
   * Track analytics event
   * @param {string} eventName - Event name
   * @param {Object} properties - Event properties
   */
  trackEvent(eventName, properties = {}) {
    // This is where you would integrate with your analytics service
    // Examples: Google Analytics, Mixpanel, Segment, etc.
    
    const eventData = {
      event: eventName,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      user_agent: navigator.userAgent,
      ...properties
    };
    
    console.log('📊 Analytics Event:', eventData);
    
    // Example integrations:
    // gtag('event', eventName, properties);
    // mixpanel.track(eventName, properties);
    // analytics.track(eventName, properties);
  }

  /**
   * Get application status
   * @returns {Object} Application status
   */
  getStatus() {
    return {
      initialized: this.isInitialized,
      config: CONFIG,
      stats: this.quizManager ? this.quizManager.getStatistics() : null,
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Initialize the application when the script loads
 */
const app = new App();

// Start the application
app.init().catch(error => {
  console.error('Failed to start application:', error);
});

// Make app available globally for debugging
window.QuizApp = app;

// Export for potential module usage
export default app;