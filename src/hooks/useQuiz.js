// src/hooks/useQuiz.js
import { useState, useCallback, useEffect } from 'react';
import { AnswerValidator } from '../utils/answerValidator';
import { soundManager, createConfetti } from '../utils/gamificationUtils';
import { useStore } from '../store/useStore';
import { questions } from '../data/questions';

export const useQuiz = (moduleId, weekId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const { getQuizState, incrementQuestionIndex, updateStats, resetQuiz, getAccuracy } = useStore();
  const { currentQuestionIndex, stats } = getQuizState(moduleId, weekId);

  useEffect(() => {
    setLoading(true);
    try {
      const filteredQuestions = questions.filter(
        (q) => q.moduleId === moduleId && q.weekId === weekId
      );
      if (filteredQuestions.length === 0) {
        setError('No questions found for this module and week.');
      }
      setQuizQuestions(filteredQuestions);
    } catch (err) {
      setError('Failed to load questions. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [moduleId, weekId]);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem(`quiz-progress-${moduleId}-${weekId}`));
    if (savedProgress && savedProgress.currentQuestionIndex !== undefined && savedProgress.stats) {
      resetQuiz(moduleId, weekId);
      setTimeout(() => {
        useStore.setState((state) => ({
          quizzes: {
            ...state.quizzes,
            [`${moduleId}-${weekId}`]: {
              currentQuestionIndex: savedProgress.currentQuestionIndex,
              stats: savedProgress.stats,
            },
          },
        }));
      }, 0);
    }
  }, [moduleId, weekId, resetQuiz]);

  useEffect(() => {
    localStorage.setItem(
      `quiz-progress-${moduleId}-${weekId}`,
      JSON.stringify({ currentQuestionIndex, stats })
    );
    // Trigger achievement sound on quiz completion
    if (currentQuestionIndex >= quizQuestions.length && quizQuestions.length > 0) {
      const accuracy = getAccuracy(moduleId, weekId);
      soundManager.playAchievementSound(accuracy);
    }
  }, [currentQuestionIndex, stats, moduleId, weekId, quizQuestions.length, getAccuracy]);

  const checkAnswer = useCallback(
    (userAnswer, correctAnswers, element) => {
      const result = AnswerValidator.checkAnswer(userAnswer, correctAnswers, {
        caseSensitive: false,
        allowPartialCredit: false,
        tolerance: 0.0001,
      });
      if (result.isCorrect) {
        createConfetti(element);
        soundManager.playCorrectSound();
      } else {
        soundManager.playIncorrectSound();
        createShakeEffect(element);
      }
      return result;
    },
    []
  );

  const handleAnswerSubmit = useCallback(
    (userAnswer, questionId, element) => {
      const question = quizQuestions.find((q) => q.id === questionId);
      if (!question) {
        return { isCorrect: false, message: 'Question not found', method: 'error' };
      }
      const result = checkAnswer(userAnswer, question.correctAnswers, element);
      updateStats(moduleId, weekId, result.isCorrect);
      return result;
    },
    [checkAnswer, moduleId, weekId, quizQuestions, updateStats]
  );

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      incrementQuestionIndex(moduleId, weekId);
    }
  }, [currentQuestionIndex, quizQuestions.length, moduleId, weekId, incrementQuestionIndex]);

  const restart = useCallback(() => {
    resetQuiz(moduleId, weekId);
    localStorage.removeItem(`quiz-progress-${moduleId}-${weekId}`);
  }, [resetQuiz, moduleId, weekId]);

  return {
    currentQuestionIndex,
    stats: stats || { correct: 0, total: 0 },
    accuracy: getAccuracy(moduleId, weekId),
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