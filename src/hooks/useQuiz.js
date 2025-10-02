import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnswerValidator } from '../utils/answerValidator';
import { soundManager, createConfetti, createShakeEffect } from '../utils/gamificationUtils';
import { useStore } from '../store/useStore';
import { questions } from '../data/questions';
import { modules } from '../data/modules';

export const useQuiz = (moduleId, weekId) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const { getQuizState, incrementQuestionIndex, updateStats, resetQuiz, getAccuracy, isModuleVisible } = useStore();
  const { currentQuestionIndex, stats } = getQuizState(moduleId, weekId);

  // Load questions and validate saved progress
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
      const filteredQuestions = questions.filter(
        (q) => q.moduleId === moduleId && q.weekId === weekId
      );

      if (filteredQuestions.length === 0) {
        setError('No questions found for this module and week.');
      }

      setQuizQuestions(filteredQuestions);

      // Validate saved progress
      const savedProgress = JSON.parse(
        localStorage.getItem(`quiz-progress-${moduleId}-${weekId}`)
      );

      if (
        savedProgress &&
        savedProgress.currentQuestionIndex !== undefined &&
        savedProgress.stats
      ) {
        if (savedProgress.currentQuestionIndex >= filteredQuestions.length) {
          console.warn("Saved progress invalid for this quiz, resetting.");
          resetQuiz(moduleId, weekId);
          localStorage.removeItem(`quiz-progress-${moduleId}-${weekId}`);
        } else {
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
      }
    } catch (err) {
      setError('Failed to load questions. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [moduleId, weekId, navigate, isModuleVisible, resetQuiz]);

  // Persist progress
  useEffect(() => {
    localStorage.setItem(
      `quiz-progress-${moduleId}-${weekId}`,
      JSON.stringify({ currentQuestionIndex, stats })
    );

    // Achievement sound at end
    if (currentQuestionIndex >= quizQuestions.length && quizQuestions.length > 0) {
      const accuracy = getAccuracy(moduleId, weekId);
      soundManager.playAchievementSound(accuracy);
    }
  }, [currentQuestionIndex, stats, moduleId, weekId, quizQuestions.length, getAccuracy]);

  // Answer checking with more lenient tolerance
  const checkAnswer = useCallback(
    (userAnswer, correctAnswers, element) => {
      // Normalize numeric input: commas → dots
      let normalizedAnswer = userAnswer;
      if (typeof userAnswer === 'string') {
        normalizedAnswer = userAnswer.replace(',', '.').trim();
      }

      const result = AnswerValidator.checkAnswer(normalizedAnswer, correctAnswers, {
        caseSensitive: false,
        allowPartialCredit: false,
        tolerance: 0.01, // Increased from 0.001 to 0.01 (1% tolerance)
      });

      if (element) {
        if (result.isCorrect) {
          soundManager.playCorrectSound();
          createConfetti(element);
        } else {
          soundManager.playIncorrectSound();
          createShakeEffect(element);
        }
      } else {
        console.warn('No element provided for effects');
      }

      return result;
    },
    []
  );

  // Handle submission
  const handleAnswerSubmit = useCallback(
    (userAnswer, questionId, element) => {
      const question = quizQuestions.find((q) => q.id === questionId);
      if (!question) {
        console.warn("Invalid question submission", {
          questionId,
          moduleId,
          weekId,
          availableIds: quizQuestions.map((q) => q.id),
        });
        // Reset quiz automatically if IDs don't match
        resetQuiz(moduleId, weekId);
        localStorage.removeItem(`quiz-progress-${moduleId}-${weekId}`);
        return {
          isCorrect: false,
          message: 'Invalid question, restarting quiz',
          method: 'error',
        };
      }

      const result = checkAnswer(userAnswer, question.correctAnswers, element);
      updateStats(moduleId, weekId, result.isCorrect);
      return result;
    },
    [checkAnswer, moduleId, weekId, quizQuestions, updateStats, resetQuiz]
  );

  // Next question - NOW WORKS ON LAST QUESTION TOO
  const nextQuestion = useCallback(() => {
    // Always increment, even on the last question
    // This will push currentQuestionIndex >= totalQuestions, triggering completion
    incrementQuestionIndex(moduleId, weekId);
  }, [moduleId, weekId, incrementQuestionIndex]);

  // Restart quiz
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