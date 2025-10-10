// src/hooks/useQuiz.js
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerValidator } from "../utils/answerValidator";
import {
  soundManager,
  createConfetti,
  createShakeEffect,
} from "../utils/gamificationUtils";
import useStore from "../store/useStore";
import { questions } from "../data/questions";
import { modules } from "../data/modules";
import {
  getQuizChunk,
  isValidQuizIndex,
  QUIZ_CHUNK_SIZE,
} from "../utils/chunkQuestions";

export const useQuiz = (moduleId, weekId, quizIndex = 0) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const {
    getQuizState,
    incrementQuestionIndex,
    updateStats,
    resetQuiz,
    getAccuracy,
    isModuleVisible,
    completeQuiz,
  } = useStore();

  // Quiz-specific state from store
  const quizState = getQuizState(moduleId, weekId, quizIndex);
  const { currentQuestionIndex, stats, completed } = quizState;

  // ------------------------------
  // Load quiz questions
  // ------------------------------
  useEffect(() => {
    if (!moduleId || !weekId) {
      setError("Invalid module or week ID.");
      setLoading(false);
      return;
    }

    setLoading(true);
    const module = modules.find((m) => m.id === moduleId);

    if (!module || !isModuleVisible(moduleId)) {
      setError("This module is not available.");
      navigate("/modules", { replace: true });
      return;
    }

    try {
      const segmentQuestions = getQuizChunk(
        questions,
        moduleId,
        weekId,
        quizIndex,
        QUIZ_CHUNK_SIZE
      );

      if (segmentQuestions.length === 0) {
        setError(`Quiz ${quizIndex + 1} does not exist for this week.`);
        setQuizQuestions([]);
        setLoading(false);
        return;
      }

      setQuizQuestions(segmentQuestions);
      setError(null);
    } catch (err) {
      setError("Failed to load questions. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [moduleId, weekId, quizIndex, navigate, isModuleVisible]);

  // ------------------------------
  // Mark quiz as complete when all answered
  // ------------------------------
  useEffect(() => {
    if (
      currentQuestionIndex >= quizQuestions.length &&
      quizQuestions.length > 0 &&
      !completed
    ) {
      completeQuiz(moduleId, weekId, quizIndex);
      const accuracy = getAccuracy(moduleId, weekId, quizIndex);
      soundManager.playAchievementSound(accuracy);
    }
  }, [
    currentQuestionIndex,
    quizQuestions.length,
    completed,
    moduleId,
    weekId,
    quizIndex,
    completeQuiz,
    getAccuracy,
  ]);

  // ------------------------------
  // Answer validation with new validator
  // ------------------------------
  const checkAnswer = useCallback(
    (userAnswer, question, element) => {
      // Normalize user input
      let normalizedAnswer = userAnswer;
      if (typeof userAnswer === "string") {
        normalizedAnswer = userAnswer.replace(",", ".").trim();
      }

      // Extract question validation options
      const validationOptions = {
        allowSymbolic: question.options?.allowSymbolic ?? true,
        acceptedUnits: question.options?.acceptedUnits || [],
        requiredUnit: question.options?.requiredUnit || null,
        tolerance: question.options?.tolerance ?? 0.001,
        ...question.options, // Include any other custom options
      };

      // Use the new validate method
      const result = AnswerValidator.validate(
        normalizedAnswer,
        question.correctAnswers || [],
        validationOptions
      );

      // Play sounds and animations based on result
      if (element) {
        if (result.equivalent) {
          soundManager.playCorrectSound();
          createConfetti(element);
        } else {
          soundManager.playIncorrectSound();
          createShakeEffect(element);
        }
      }

      // Return result in format expected by the rest of the app
      return {
        isCorrect: result.equivalent,
        message: result.message,
        method: result.method,
        unitError: result.unitError || false,
        details: result.details,
        normalized: result.normalized,
      };
    },
    []
  );

  // ------------------------------
  // Handle answer submission
  // ------------------------------
  const handleAnswerSubmit = useCallback(
    (userAnswer, questionId, element) => {
      const question = quizQuestions.find((q) => q.id === questionId);

      if (!question) {
        console.error("Question not found:", {
          questionId,
          moduleId,
          weekId,
          quizIndex,
          availableIds: quizQuestions.map((q) => q.id),
        });
        return {
          isCorrect: false,
          message: "Question not found",
          method: "error",
          unitError: false,
        };
      }

      // Validate the answer using the new system
      const result = checkAnswer(userAnswer, question, element);

      // Update stats for this quiz segment
      updateStats(moduleId, weekId, quizIndex, result.isCorrect);

      return result;
    },
    [checkAnswer, moduleId, weekId, quizIndex, quizQuestions, updateStats]
  );

  // ------------------------------
  // Direct validation without stats update (for preview/testing)
  // ------------------------------
  const validateAnswer = useCallback(
    (userAnswer, questionId) => {
      const question = quizQuestions.find((q) => q.id === questionId);

      if (!question) {
        return {
          equivalent: false,
          message: "Question not found",
          method: "error",
        };
      }

      const validationOptions = {
        allowSymbolic: question.options?.allowSymbolic ?? true,
        acceptedUnits: question.options?.acceptedUnits || [],
        requiredUnit: question.options?.requiredUnit || null,
        tolerance: question.options?.tolerance ?? 0.001,
        ...question.options,
      };

      return AnswerValidator.validate(
        userAnswer,
        question.correctAnswers || [],
        validationOptions
      );
    },
    [quizQuestions]
  );

  // ------------------------------
  // Navigation & reset
  // ------------------------------
  const nextQuestion = useCallback(() => {
    incrementQuestionIndex(moduleId, weekId, quizIndex);
  }, [moduleId, weekId, quizIndex, incrementQuestionIndex]);

  const restart = useCallback(() => {
    resetQuiz(moduleId, weekId, quizIndex);
  }, [resetQuiz, moduleId, weekId, quizIndex]);

  // ------------------------------
  // Get current question
  // ------------------------------
  const currentQuestion = quizQuestions[currentQuestionIndex] || null;

  // ------------------------------
  // Check if quiz can proceed to next
  // ------------------------------
  const canProceed = currentQuestionIndex < quizQuestions.length;

  // ------------------------------
  // Return unified quiz API
  // ------------------------------
  return {
    // State
    currentQuestionIndex,
    currentQuestion,
    stats: stats || { correct: 0, total: 0 },
    accuracy: getAccuracy(moduleId, weekId, quizIndex),
    completed,
    loading,
    error,
    canProceed,

    // Questions
    questions: quizQuestions,
    totalQuestions: quizQuestions.length,

    // Actions
    checkAnswer,
    handleAnswerSubmit,
    validateAnswer,
    nextQuestion,
    restart,

    // Computed values
    progress: quizQuestions.length > 0 
      ? Math.round((currentQuestionIndex / quizQuestions.length) * 100)
      : 0,
    questionsRemaining: Math.max(0, quizQuestions.length - currentQuestionIndex),
  };
};

export default useQuiz;