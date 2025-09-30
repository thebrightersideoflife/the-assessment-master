import { useState, useCallback, useEffect } from 'react';
import { AnswerValidator } from '../utils/answerValidator';
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
      setError('Failed to load questions.');
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
  }, [currentQuestionIndex, stats, moduleId, weekId]);

  const checkAnswer = useCallback(
    (userAnswer, correctAnswers) => {
      return AnswerValidator.checkAnswer(userAnswer, correctAnswers, {
        caseSensitive: false,
        allowPartialCredit: true,
        tolerance: 0.0001
      });
    },
    []
  );

  const handleAnswerSubmit = useCallback(
    (userAnswer, correctAnswers) => {
      const result = checkAnswer(userAnswer, correctAnswers);
      updateStats(moduleId, weekId, result.isCorrect);
      return result; // Return full result for Question.jsx
    },
    [checkAnswer, moduleId, weekId, updateStats]
  );

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      incrementQuestionIndex(moduleId, weekId);
    }
  }, [currentQuestionIndex, quizQuestions.length, moduleId, weekId]);

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
  };
};