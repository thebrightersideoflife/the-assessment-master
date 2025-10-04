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
  getQuizChunk,      // ✅ Extracts the correct quiz segment
  isValidQuizIndex,  // ✅ Optional validation helper
  QUIZ_CHUNK_SIZE,   // ✅ Global chunk size constant
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

  // ✅ Quiz-specific state from store
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
      // ✅ Automatically respects the global chunk size
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
  // Answer validation
  // ------------------------------
  const checkAnswer = useCallback((userAnswer, correctAnswers, element) => {
    let normalizedAnswer = userAnswer;
    if (typeof userAnswer === "string") {
      normalizedAnswer = userAnswer.replace(",", ".").trim();
    }

    const result = AnswerValidator.checkAnswer(
      normalizedAnswer,
      correctAnswers,
      {
        caseSensitive: false,
        allowPartialCredit: false,
        tolerance: 0.01,
      }
    );

    if (element) {
      if (result.isCorrect) {
        soundManager.playCorrectSound();
        createConfetti(element);
      } else {
        soundManager.playIncorrectSound();
        createShakeEffect(element);
      }
    }

    return result;
  }, []);

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
        };
      }

      const result = checkAnswer(userAnswer, question.correctAnswers, element);

      // ✅ Update stats for this quiz segment
      updateStats(moduleId, weekId, quizIndex, result.isCorrect);

      return result;
    },
    [checkAnswer, moduleId, weekId, quizIndex, quizQuestions, updateStats]
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
  // Return unified quiz API
  // ------------------------------
  return {
    currentQuestionIndex,
    stats: stats || { correct: 0, total: 0 },
    accuracy: getAccuracy(moduleId, weekId, quizIndex),
    completed,
    checkAnswer,
    handleAnswerSubmit,
    nextQuestion,
    restart,
    totalQuestions: quizQuestions.length,
    loading,
    error,
    questions: quizQuestions,
  };
};
