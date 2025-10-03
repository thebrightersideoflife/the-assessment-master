// src/hooks/useQuiz.js
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnswerValidator } from '../utils/answerValidator';
import { soundManager, createConfetti, createShakeEffect } from '../utils/gamificationUtils';
import useStore from '../store/useStore';
import { questions } from '../data/questions';
import { modules } from '../data/modules';
import { chunkQuestions } from '../utils/chunkQuestions';

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
    completeQuiz 
  } = useStore();

  // Get state for THIS specific quiz segment
  const quizState = getQuizState(moduleId, weekId, quizIndex);
  const { currentQuestionIndex, stats, completed } = quizState;

  // Load questions ONLY
  useEffect(() => {
    if (!moduleId || !weekId) {
      setError('Invalid module or week ID.');
      setLoading(false);
      return;
    }

    setLoading(true);

    const module = modules.find((m) => m.id === moduleId);
    if (!module || !isModuleVisible(moduleId)) {
      setError('This module is not available.');
      navigate('/modules', { replace: true });
      return;
    }

    try {
      const weekQuestions = questions.filter(
        (q) => q.moduleId === moduleId && q.weekId === weekId
      );

      if (weekQuestions.length === 0) {
        setError('No questions found for this module and week.');
        setQuizQuestions([]);
        setLoading(false);
        return;
      }

      const questionChunks = chunkQuestions(weekQuestions, 15);
      const segmentQuestions = questionChunks[quizIndex] || [];

      if (segmentQuestions.length === 0) {
        setError(`Quiz ${quizIndex + 1} does not exist for this week.`);
        setQuizQuestions([]);
        setLoading(false);
        return;
      }

      setQuizQuestions(segmentQuestions);
      setError(null);
    } catch (err) {
      setError('Failed to load questions. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [moduleId, weekId, quizIndex, navigate, isModuleVisible]);

  // Mark quiz as complete when all questions answered
  useEffect(() => {
    if (currentQuestionIndex >= quizQuestions.length && quizQuestions.length > 0 && !completed) {
      completeQuiz(moduleId, weekId, quizIndex);
      const accuracy = getAccuracy(moduleId, weekId, quizIndex);
      soundManager.playAchievementSound(accuracy);
    }
  }, [currentQuestionIndex, quizQuestions.length, completed, moduleId, weekId, quizIndex, completeQuiz, getAccuracy]);

  // Answer checking
  const checkAnswer = useCallback(
    (userAnswer, correctAnswers, element) => {
      let normalizedAnswer = userAnswer;
      if (typeof userAnswer === 'string') {
        normalizedAnswer = userAnswer.replace(',', '.').trim();
      }

      const result = AnswerValidator.checkAnswer(normalizedAnswer, correctAnswers, {
        caseSensitive: false,
        allowPartialCredit: false,
        tolerance: 0.01,
      });

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
    },
    []
  );

  // Handle submission - THIS IS CALLED BY QUESTION.JSX
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
          message: 'Question not found',
          method: 'error',
        };
      }

      const result = checkAnswer(userAnswer, question.correctAnswers, element);
      
      // Update stats ONCE per submission
      updateStats(moduleId, weekId, quizIndex, result.isCorrect);

      return result;
    },
    [checkAnswer, moduleId, weekId, quizIndex, quizQuestions, updateStats]
  );

  // Next question
  const nextQuestion = useCallback(() => {
    incrementQuestionIndex(moduleId, weekId, quizIndex);
  }, [moduleId, weekId, quizIndex, incrementQuestionIndex]);

  // Restart this quiz segment
  const restart = useCallback(() => {
    resetQuiz(moduleId, weekId, quizIndex);
  }, [resetQuiz, moduleId, weekId, quizIndex]);

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