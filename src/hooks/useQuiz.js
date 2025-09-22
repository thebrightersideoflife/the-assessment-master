import { useState, useCallback } from 'react';
import { AnswerValidator } from '../utils/answerValidator';
import { useStore } from '../store/useStore';

export const useQuiz = () => {
  const [validator] = useState(() => new AnswerValidator());
  const { 
    currentQuestionIndex, 
    stats, 
    incrementQuestionIndex, 
    updateStats, 
    resetQuiz, 
    getAccuracy 
  } = useStore();

  const checkAnswer = useCallback((userAnswer, correctAnswers) => {
    return validator.checkAnswer(userAnswer, correctAnswers);
  }, [validator]);

  const handleAnswerSubmit = useCallback((userAnswer, correctAnswers) => {
    const isCorrect = checkAnswer(userAnswer, correctAnswers);
    updateStats(isCorrect);
    return isCorrect;
  }, [checkAnswer, updateStats]);

  const nextQuestion = useCallback(() => {
    incrementQuestionIndex();
  }, [incrementQuestionIndex]);

  const restart = useCallback(() => {
    resetQuiz();
  }, [resetQuiz]);

  return {
    currentQuestionIndex,
    stats,
    accuracy: getAccuracy(),
    checkAnswer,
    handleAnswerSubmit,
    nextQuestion,
    restart
  };
};