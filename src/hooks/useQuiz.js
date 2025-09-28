import { useState, useCallback, useEffect } from 'react';
import { AnswerValidator } from '../utils/answerValidator';
import { useStore } from '../store/useStore';
import { questions } from '../data/questions';

export const useQuiz = (moduleId, weekId) => {
  const [validator] = useState(() => new AnswerValidator({ tolerance: 0.001 }));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const { 
    currentQuestionIndex, 
    stats, 
    incrementQuestionIndex, 
    updateStats, 
    resetQuiz, 
    getAccuracy 
  } = useStore();

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

  // Load saved progress
  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem(`quiz-progress-${moduleId}-${weekId}`));
    if (savedProgress) {
      setTimeout(() => {
        useStore.setState({
          currentQuestionIndex: savedProgress.currentQuestionIndex,
          stats: savedProgress.stats,
        });
      }, 0);
    }
  }, [moduleId, weekId]);

  // Save progress
  useEffect(() => {
    localStorage.setItem(
      `quiz-progress-${moduleId}-${weekId}`,
      JSON.stringify({ currentQuestionIndex, stats })
    );
  }, [currentQuestionIndex, stats, moduleId, weekId]);

  const checkAnswer = useCallback(
    (userAnswer, correctAnswers) => {
      return validator.checkAnswer(userAnswer, correctAnswers);
    },
    [validator]
  );

  const handleAnswerSubmit = useCallback(
    (userAnswer, correctAnswers) => {
      const isCorrect = checkAnswer(userAnswer, correctAnswers);
      updateStats(isCorrect);
      return isCorrect;
    },
    [checkAnswer, updateStats]
  );

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      incrementQuestionIndex();
    }
  }, [currentQuestionIndex, incrementQuestionIndex, quizQuestions.length]);

  const restart = useCallback(() => {
    resetQuiz();
    localStorage.removeItem(`quiz-progress-${moduleId}-${weekId}`);
  }, [resetQuiz, moduleId, weekId]);

  return {
    currentQuestionIndex,
    stats,
    accuracy: getAccuracy(),
    checkAnswer,
    handleAnswerSubmit,
    nextQuestion,
    restart,
    totalQuestions: quizQuestions.length,
    loading,
    error,
  };
};