// src/hooks/useExamManager.js
import { useState, useEffect, useCallback, useRef } from "react";
import useStore from "../store/useStore";
import { gradeExam } from "../utils/examUtils";
import { AnswerValidator } from "../utils/answerValidator";
import { renderMath } from "../utils/mathRenderer";

/**
 * useExamManager
 * 
 * Enhanced hook for managing exam state with section-aware navigation
 * Handles the complete exam lifecycle: start → exam → review → results
 * 
 * Features:
 * - Proper answer tracking across all questions
 * - Section-aware navigation
 * - Timer with audio warnings at 5 minutes
 * - Auto-save and resume capability
 * 
 * @param {Object} exam - The exam object containing questions, sections, etc.
 * @returns {Object} - Exam state and handler functions
 */
const useExamManager = (exam) => {
  if (!exam) {
    return {
      mode: "loading",
      questions: [],
      exam: null,
    };
  }

  const questions = exam.questions || [];

  // ========== ZUSTAND STORE INTEGRATION ==========
  const {
    getExamState,
    getExamAttemptCount,
    initializeExam,
    updateExamAnswer,
    submitExam,
    isExamSubmitted,
    resetExam: resetExamInStore,
  } = useStore();

  // ========== STATE MANAGEMENT ==========
  const [mode, setMode] = useState("start"); // "start" | "exam" | "review" | "results"
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [confirmedAnswers, setConfirmedAnswers] = useState({});
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0, percentage: 0 });
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [showStartWarning, setShowStartWarning] = useState(true);
  const [fiveMinuteWarningShown, setFiveMinuteWarningShown] = useState(false);
  
  const attemptNumber = getExamAttemptCount(exam.id);
  const printRef = useRef(null);
  const audioRef = useRef(null);
  const isAutoSubmittingRef = useRef(false); // NEW: Track if auto-submit is in progress

  // ========== HELPER FUNCTIONS ==========
  const getCurrentSection = useCallback(() => {
    return exam.sections?.[currentSectionIndex];
  }, [exam.sections, currentSectionIndex]);

  const getSectionQuestions = useCallback((sectionIndex = currentSectionIndex) => {
    const section = exam.sections?.[sectionIndex];
    if (!section) return questions;
    return questions.filter(q => q.sectionId === section.id);
  }, [exam.sections, questions, currentSectionIndex]);

  const getCurrentQuestion = useCallback(() => {
    const sectionQuestions = getSectionQuestions();
    return sectionQuestions[currentQuestionIndex];
  }, [getSectionQuestions, currentQuestionIndex]);

  const getAllAnsweredQuestions = useCallback(() => {
    return Object.keys(confirmedAnswers).filter(qId => {
      const answer = confirmedAnswers[qId];
      return answer && (answer + '').trim() !== '';
    });
  }, [confirmedAnswers]);

  // ========== INITIALIZATION EFFECTS ==========
  useEffect(() => {
    const examState = getExamState(exam.id);
    
    // If exam is already submitted, go directly to results
    if (isExamSubmitted(exam.id) && examState.results) {
      setMode('results');
      setScore(examState.results);
      setConfirmedAnswers(examState.answers || {});
      setShowStartWarning(false);
      return;
    }
    
    // Otherwise check if exam was started
    if (examState.startTime && !isExamSubmitted(exam.id)) {
      setShowStartWarning(false);
      setMode('exam');
      
      // Load saved answers
      if (examState.answers) {
        setConfirmedAnswers(examState.answers);
      }
    }
  }, [exam.id, getExamState, isExamSubmitted]);

  useEffect(() => {
    if (!showStartWarning && !isExamSubmitted(exam.id)) {
      const examState = getExamState(exam.id);
      // Only initialize if not already started
      if (!examState.startTime) {
        initializeExam(exam.id);
      }
    }
  }, [exam.id, showStartWarning, isExamSubmitted, initializeExam, getExamState]);

  // ========== TIMER LOGIC ==========
  useEffect(() => {
    if (exam.timeLimit && !isExamSubmitted(exam.id) && !showStartWarning) {
      const savedState = getExamState(exam.id);
      const startTime = savedState.startTime || Date.now();
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const totalSeconds = exam.timeLimit * 60;
      const remaining = Math.max(0, totalSeconds - elapsedSeconds);
      setTimeRemaining(remaining);
    }
  }, [exam.timeLimit, exam.id, isExamSubmitted, showStartWarning, getExamState]);

  useEffect(() => {
    if (timeRemaining === null || timeRemaining === 0 || mode === 'results' || isExamSubmitted(exam.id)) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeRemaining, mode, exam.id, isExamSubmitted]);

  // ========== 5-MINUTE WARNING ==========
  useEffect(() => {
    // Trigger warning at exactly 5 minutes (300 seconds)
    if (timeRemaining === 300 && !fiveMinuteWarningShown && mode === 'exam') {
      setFiveMinuteWarningShown(true);
      
      // Play warning sound
      const audio = new Audio('/sounds/time-remaining-alert.mp3');
      audio.play().catch(err => console.warn('Could not play warning sound:', err));
      
    }
  }, [timeRemaining, fiveMinuteWarningShown, mode]);

  // ========== ANSWER SYNC ==========
  useEffect(() => {
    const savedState = getExamState(exam.id);
    if (savedState.answers) {
      setConfirmedAnswers(savedState.answers);
    }
    
    // Load current answer for current question
    const currentQ = getCurrentQuestion();
    if (currentQ) {
      const savedAnswer = savedState.answers?.[currentQ.id] || '';
      setCurrentAnswer(savedAnswer);
    }
  }, [exam.id, currentSectionIndex, currentQuestionIndex, getExamState, getCurrentQuestion]);

  // ========== MATH RENDERING ==========
  useEffect(() => {
    renderMath();
  }, [currentSectionIndex, currentQuestionIndex, mode]);

  // ========== EVENT HANDLERS ==========
  
  /**
   * Start the exam
   */
  const handleStart = useCallback(() => {
    setShowStartWarning(false);
    setMode("exam");
    setTimeRemaining((exam.duration || exam.timeLimit || 0) * 60);
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setCurrentAnswer('');
    setConfirmedAnswers({});
    setScore({ correct: 0, total: 0, percentage: 0 });
    setShowConfirmationMessage(false);
    setFiveMinuteWarningShown(false);
  }, [exam.duration, exam.timeLimit]);

  /**
   * Update current answer
   */
  const handleAnswerChange = useCallback((answer) => {
    setCurrentAnswer(answer);
    setShowConfirmationMessage(false);
  }, []);

  /**
   * Confirm answer (saves to store immediately)
   */
  const handleConfirmAnswer = useCallback(() => {
    const question = getCurrentQuestion();
    if (!question) return;
    
    console.log(`[useExamManager] Confirming answer for question ${question.id}:`, currentAnswer);
    
    // Update store immediately
    updateExamAnswer(exam.id, question.id, currentAnswer);
    
    // Update local state
    setConfirmedAnswers(prev => {
      const updated = {
        ...prev,
        [question.id]: currentAnswer
      };
      console.log('[useExamManager] Updated confirmedAnswers:', updated);
      return updated;
    });
    
    setShowConfirmationMessage(true);
    
    setTimeout(() => {
      setShowConfirmationMessage(false);
    }, 2000);
  }, [exam.id, currentAnswer, getCurrentQuestion, updateExamAnswer]);

  /**
   * Navigate to next question (section-aware)
   */
  const handleNext = useCallback(() => {
    const sectionQuestions = getSectionQuestions();
    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (exam.sections && currentSectionIndex < exam.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    }
    setShowConfirmationMessage(false);
  }, [currentQuestionIndex, currentSectionIndex, exam.sections, getSectionQuestions]);

  /**
   * Navigate to previous question (section-aware)
   */
  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      const prevSectionQuestions = getSectionQuestions(currentSectionIndex - 1);
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentQuestionIndex(prevSectionQuestions.length - 1);
    }
    setShowConfirmationMessage(false);
  }, [currentQuestionIndex, currentSectionIndex, getSectionQuestions]);

  /**
   * Jump to specific question (from review screen)
   * Fixed to properly handle section-based navigation
   */
  const jumpToQuestion = useCallback((sectionIndex, questionIndex) => {
    console.log(`[useExamManager] Jumping to section ${sectionIndex}, question ${questionIndex}`);
    setCurrentSectionIndex(sectionIndex);
    setCurrentQuestionIndex(questionIndex);
    setMode('exam');
    setShowConfirmationMessage(false);
  }, []);

  /**
   * Open review screen
   */
  const handleReviewClick = useCallback(() => {
    setMode('review');
    renderMath();
  }, []);

  /**
   * Go back to exam from review
   */
  const handleBackToExam = useCallback(() => {
    setMode('exam');
  }, []);

  /**
   * Auto-submit when timer expires (NO unanswered warning)
   */
  const handleAutoSubmit = useCallback(() => {
    if (isExamSubmitted(exam.id)) return;
    if (isAutoSubmittingRef.current) return; // Prevent double execution
    
    isAutoSubmittingRef.current = true;
    
    alert('⏰ Time is up! Your exam will be submitted automatically.');
    
    // Get fresh state from store to ensure we have all answers
    const examState = getExamState(exam.id);
    const finalAnswers = examState.answers || confirmedAnswers;
    
    console.log('[useExamManager] Auto-submit with answers:', finalAnswers);
    
    // NO unanswered check - just submit immediately
    let totalPoints = 0;
    let earnedPoints = 0;
    
    const gradedQuestions = questions.map(question => {
      const userAnswer = finalAnswers[question.id] || '';
      const validationResult = AnswerValidator.validate(
        userAnswer,
        question.correctAnswers,
        question.options || {}
      );
      const isCorrect = validationResult?.equivalent === true;
      
      totalPoints += question.points || 0;
      if (isCorrect) {
        earnedPoints += question.points || 0;
      }
      
      return {
        ...question,
        userAnswer,
        isCorrect
      };
    });

    const percentage = totalPoints > 0 
      ? Math.round((earnedPoints / totalPoints) * 100)
      : 0;

    const results = {
      answers: finalAnswers,
      gradedQuestions,
      totalPoints,
      earnedPoints,
      percentage,
      passed: percentage >= exam.passingScore,
      submittedAt: Date.now(),
      attemptNumber: attemptNumber
    };

    submitExam(exam.id, results);
    setScore(results);
    setMode('results');
    renderMath();
    
    isAutoSubmittingRef.current = false;
  }, [exam.id, exam.passingScore, questions, confirmedAnswers, attemptNumber, isExamSubmitted, getExamState, submitExam]);

  /**
   * Final submission (manual - WITH unanswered warning)
   */
  const handleFinalSubmit = useCallback((skipUnansweredCheck = false) => {
    if (isExamSubmitted(exam.id)) {
      alert('This exam has already been submitted.');
      return;
    }

    // Get fresh state from store to ensure we have all answers
    const examState = getExamState(exam.id);
    const finalAnswers = examState.answers || confirmedAnswers;
    
    console.log('[useExamManager] Final submission with answers:', finalAnswers);

    // Check for unanswered questions ONLY if not skipping (i.e., manual submission)
    if (!skipUnansweredCheck) {
      const unanswered = questions.length - Object.keys(finalAnswers).filter(qId => {
        const answer = finalAnswers[qId];
        return answer && (answer + '').trim() !== '';
      }).length;
      
      if (unanswered > 0) {
        const confirmSubmit = window.confirm(
          `⚠️ You have ${unanswered} unanswered question(s).\n\nAre you sure you want to submit?`
        );
        if (!confirmSubmit) return;
      }
    }

    let totalPoints = 0;
    let earnedPoints = 0;
    
    const gradedQuestions = questions.map(question => {
      const userAnswer = finalAnswers[question.id] || '';
      const validationResult = AnswerValidator.validate(
        userAnswer,
        question.correctAnswers,
        question.options || {}
      );
      const isCorrect = validationResult?.equivalent === true;
      
      totalPoints += question.points || 0;
      if (isCorrect) {
        earnedPoints += question.points || 0;
      }
      
      return {
        ...question,
        userAnswer,
        isCorrect
      };
    });

    const percentage = totalPoints > 0 
      ? Math.round((earnedPoints / totalPoints) * 100)
      : 0;

    const results = {
      answers: finalAnswers,
      gradedQuestions,
      totalPoints,
      earnedPoints,
      percentage,
      passed: percentage >= exam.passingScore,
      submittedAt: Date.now(),
      attemptNumber: attemptNumber
    };

    submitExam(exam.id, results);
    setScore(results);
    setMode('results');
    renderMath();
  }, [exam.id, exam.passingScore, questions, confirmedAnswers, attemptNumber, isExamSubmitted, getExamState, submitExam]);

  /**
   * Confirm submit from review screen
   */
  const handleConfirmSubmit = useCallback(() => {
    // Get fresh state from store to ensure we have all answers
    const examState = getExamState(exam.id);
    const finalAnswers = examState.answers || confirmedAnswers;
    
    const unanswered = questions.length - Object.keys(finalAnswers).filter(qId => {
      const answer = finalAnswers[qId];
      return answer && (answer + '').trim() !== '';
    }).length;
    
    // Only show warning if there are unanswered questions
    if (unanswered > 0) {
      const confirmSubmit = window.confirm(
        `⚠️ You have ${unanswered} unanswered question(s).\n\nAre you sure you want to submit?`
      );
      if (!confirmSubmit) return;
    }
    
    // Use skipUnansweredCheck=true since we already checked above
    handleFinalSubmit(true);
  }, [handleFinalSubmit, questions, confirmedAnswers, exam.id, getExamState]);

  /**
   * Reset exam for new attempt
   */
  const handleReset = useCallback(() => {
    const nextAttempt = attemptNumber + 1;
    const confirmReset = window.confirm(
      `⚠️ WARNING: Resetting will permanently record an additional attempt.\n\n` +
      `This will be recorded as ATTEMPT #${nextAttempt}.\n\n` +
      'Your previous results will be lost, and this action cannot be undone.\n\n' +
      'Do you want to proceed?'
    );
    
    if (!confirmReset) return;

    resetExamInStore(exam.id);
    setMode('start');
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setCurrentAnswer('');
    setConfirmedAnswers({});
    setScore({ correct: 0, total: 0, percentage: 0 });
    setTimeRemaining(null);
    setShowConfirmationMessage(false);
    setShowStartWarning(true);
    setFiveMinuteWarningShown(false);
    isAutoSubmittingRef.current = false;
  }, [exam.id, attemptNumber, resetExamInStore]);

  /**
   * Handle exit exam
   */
  const handleExit = useCallback((onExit) => {
    const confirmExit = window.confirm(
      `⚠️ Are you sure you want to exit this exam?\n\n` +
      'Your progress will be saved and you can continue later.'
    );
    
    if (!confirmExit) return;
    
    if (onExit && typeof onExit === 'function') {
      onExit();
    } else {
      window.location.href = `/modules/${exam.moduleId}`;
    }
  }, [exam.moduleId]);

  /**
   * Format seconds to mm:ss
   */
  const formatTime = useCallback((seconds = timeRemaining) => {
    if (seconds === null) return '00:00';
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }, [timeRemaining]);

  // ========== COMPUTED VALUES ==========
  const currentQuestion = getCurrentQuestion();
  const currentSection = getCurrentSection();
  const answeredCount = getAllAnsweredQuestions().length;
  const isTimerCritical = timeRemaining !== null && timeRemaining < 300; // Less than 5 minutes

  // ========== RETURN INTERFACE ==========
  return {
    // Mode & Navigation State
    mode,
    currentSectionIndex,
    currentQuestionIndex,
    currentQuestion,
    currentSection,
    showStartWarning,
    
    // Answer State
    currentAnswer,
    confirmedAnswers,
    userAnswers: confirmedAnswers, // Alias for compatibility
    showConfirmationMessage,
    
    // Results
    score,
    
    // Timer
    timeRemaining,
    timeLeft: timeRemaining, // Alias for compatibility
    formatTime: formatTime(),
    isTimerCritical,
    
    // Metadata
    attemptNumber,
    questions,
    exam,
    printRef,
    answeredCount,
    
    // Actions
    handleStart,
    handleAnswerChange,
    handleConfirmAnswer,
    handleNext,
    handlePrev,
    jumpToQuestion,
    handleReviewClick,
    handleBackToExam,
    handleConfirmSubmit,
    handleReset,
    handleExit,
    
    // Helper functions
    getSectionQuestions,
    getAllAnsweredQuestions,
    getCurrentSection,
    getCurrentQuestion,
    
    // Utilities
    isExamSubmitted: isExamSubmitted(exam.id),
    getExamState: () => getExamState(exam.id),
  };
};

export default useExamManager;