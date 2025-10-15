// src/hooks/useExamManager.js
import { useState, useEffect, useCallback } from "react";
import useStore from "../store/useStore";
import { gradeExam } from "../utils/examUtils";

/**
 * useExamManager
 * 
 * Core hook for managing exam state, timer, navigation, and persistence.
 * Handles the complete exam lifecycle: start → exam → review → results
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
    getExamAttemptCount,
    initializeExam,
    resetExam: resetExamInStore,
  } = useStore();

  // ========== STATE MANAGEMENT ==========
  const [mode, setMode] = useState("start"); // "start" | "exam" | "review" | "results"
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0, percentage: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState((exam.duration || exam.timeLimit || 0) * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [hasConfirmedLastAnswer, setHasConfirmedLastAnswer] = useState(false);

  const attemptNumber = getExamAttemptCount(exam.id);

  // ========== COMPUTED VALUES ==========
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // ========== TIMER LOGIC ==========
  useEffect(() => {
    if (mode !== "exam" || !timerActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timerActive, timeLeft, mode]);

  // ========== PERSISTENCE (LocalStorage) ==========
  // Save progress during exam
  useEffect(() => {
    if (mode === "exam") {
      localStorage.setItem(
        `exam-${exam.id}-progress`,
        JSON.stringify({
          userAnswers,
          timeLeft,
          currentQuestionIndex,
        })
      );
    }
  }, [userAnswers, timeLeft, currentQuestionIndex, mode, exam.id]);

  // Restore previous attempt on mount
  useEffect(() => {
    const saved = localStorage.getItem(`exam-${exam.id}-progress`);
    if (saved) {
      const confirmRestore = window.confirm(
        "🔄 A previous attempt was found. Would you like to resume where you left off?"
      );
      if (confirmRestore) {
        const { userAnswers, timeLeft, currentQuestionIndex } = JSON.parse(saved);
        setUserAnswers(userAnswers);
        setTimeLeft(timeLeft);
        setCurrentQuestionIndex(currentQuestionIndex);
        setMode("exam");
        setTimerActive(true);
      } else {
        localStorage.removeItem(`exam-${exam.id}-progress`);
      }
    }
  }, [exam.id]);

  // ========== EVENT HANDLERS ==========

  /**
   * Start the exam
   * Initializes timer, resets state, records attempt in store
   */
  const handleStart = useCallback(() => {
    const confirmStart = window.confirm(
      `⚠️ Once you start the exam, the timer begins.\n\nThis will be ATTEMPT #${attemptNumber + 1}.\n\nDo you wish to continue?`
    );
    if (!confirmStart) return;

    // Initialize in Zustand store (increments attempt counter)
    initializeExam(exam.id);

    // Reset local state
    setMode("exam");
    setTimerActive(true);
    setTimeLeft((exam.duration || exam.timeLimit || 0) * 60);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore({ correct: 0, total: 0, percentage: 0 });
    setIsSubmitted(false);
    setHasConfirmedLastAnswer(false);

    // Clear localStorage
    localStorage.removeItem(`exam-${exam.id}-progress`);
  }, [exam.id, exam.duration, exam.timeLimit, attemptNumber, initializeExam]);

  /**
   * Update answer for a specific question
   */
  const handleAnswerChange = useCallback((questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  }, []);

  /**
   * Navigate to next question
   */
  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setHasConfirmedLastAnswer(false);
    }
  }, [currentQuestionIndex, questions.length]);

  /**
   * Navigate to previous question
   */
  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setHasConfirmedLastAnswer(false);
    }
  }, [currentQuestionIndex]);

  /**
   * Move to review screen (called from last question)
   */
  const handleShowResults = useCallback(() => {
    if (!hasConfirmedLastAnswer) {
      setHasConfirmedLastAnswer(true);
    } else {
      setMode("review");
      setTimerActive(false);
    }
  }, [hasConfirmedLastAnswer]);

  /**
   * Submit exam from review screen
   */
  const handleConfirmSubmit = useCallback(() => {
    handleSubmit();
  }, [exam, userAnswers, attemptNumber]);

  /**
   * Auto-submit when timer expires
   */
  const handleAutoSubmit = useCallback(() => {
    alert("⏰ Time's up! Your exam will be submitted automatically.");
    handleSubmit();
  }, [exam, userAnswers, attemptNumber]);

  /**
   * Submit exam and calculate results
   */
  const handleSubmit = useCallback(() => {
    const result = gradeExam(exam, userAnswers);
    
    setScore(result);
    setIsSubmitted(true);
    setMode("results");
    setTimerActive(false);

    // Clear localStorage
    localStorage.removeItem(`exam-${exam.id}-progress`);
  }, [exam, userAnswers]);

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

    // Reset in Zustand store
    resetExamInStore(exam.id);

    // Reset local state
    setMode("start");
    setUserAnswers({});
    setScore({ correct: 0, total: 0, percentage: 0 });
    setIsSubmitted(false);
    setTimeLeft((exam.duration || exam.timeLimit || 0) * 60);
    setTimerActive(false);
    setHasConfirmedLastAnswer(false);
    setCurrentQuestionIndex(0);

    // Clear localStorage
    localStorage.removeItem(`exam-${exam.id}-progress`);
  }, [exam.id, exam.duration, exam.timeLimit, attemptNumber, resetExamInStore]);

  /**
   * Format seconds to mm:ss
   */
  const formatTime = useCallback((seconds = timeLeft) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }, [timeLeft]);

  // ========== RETURN INTERFACE ==========
  return {
    // State
    mode,
    currentQuestionIndex,
    currentQuestion,
    userAnswers,
    score,
    timeLeft,
    isSubmitted,
    attemptNumber,
    
    // Computed
    isLastQuestion,
    questions,
    exam,
    formatTime: formatTime(),
    
    // Actions
    handleStart,
    handleAnswerChange,
    handleNext,
    handlePrev,
    handleShowResults,
    handleConfirmSubmit,
    handleReset,
  };
};

export default useExamManager;