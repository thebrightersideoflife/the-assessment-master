// src/store/useStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { format, isToday, addDays } from 'date-fns';
import { modules } from '../data/modules';

const useStore = create(
  persist(
    (set, get) => ({
      // Quiz state per moduleId-weekId-quizIndex
      quizzes: {},
      
      // Exam state per examId
      exams: {},
      
      // Exam attempt counter
      examAttempts: {}, // { examId: attemptCount }
      
      // Streak tracking
      streaks: {
        lastActivityDate: null,
        currentStreak: 0,
        longestStreak: 0,
      },
      
      // Module visibility state - initialized from modules.js
      moduleVisibility: {},
      
      // ============================================================================
      // HELPER: Get quiz key
      // ============================================================================
      getQuizKey: (moduleId, weekId, quizIndex = 0) => {
        return `${moduleId}-${weekId}-${quizIndex}`;
      },
      
      // ============================================================================
      // Initialize or get quiz state
      // ============================================================================
      getQuizState: (moduleId, weekId, quizIndex = 0) => {
        const quizKey = get().getQuizKey(moduleId, weekId, quizIndex);
        return (
          get().quizzes[quizKey] || {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
            completed: false,
            lastAnsweredQuestion: -1,
          }
        );
      },
      
      // ============================================================================
      // EXAM STATE MANAGEMENT
      // ============================================================================
      
      // Get exam state
      getExamState: (examId) => {
        return (
          get().exams[examId] || {
            startTime: null,
            answers: {},
            submitted: false,
            results: null,
          }
        );
      },
      
      // Get exam attempt count
      getExamAttemptCount: (examId) => {
        return get().examAttempts[examId] || 0;
      },
      
      // Initialize exam (called when exam starts)
      initializeExam: (examId) =>
        set((state) => {
          // Don't reinitialize if already submitted
          if (state.exams[examId]?.submitted) {
            return state;
          }
          // Increment attempt counter
          const currentAttempts = state.examAttempts[examId] || 0;
          const newAttemptNumber = currentAttempts + 1;
          return {
            exams: {
              ...state.exams,
              [examId]: {
                startTime: Date.now(),
                answers: {},
                submitted: false,
                results: null,
              },
            },
            examAttempts: {
              ...state.examAttempts,
              [examId]: newAttemptNumber,
            },
          };
        }),
      
      // Update a single answer
      updateExamAnswer: (examId, questionId, answer) =>
        set((state) => {
          const examState = state.exams[examId] || {
            startTime: Date.now(),
            answers: {},
            submitted: false,
            results: null,
          };
          return {
            exams: {
              ...state.exams,
              [examId]: {
                ...examState,
                answers: {
                  ...examState.answers,
                  [questionId]: answer,
                },
              },
            },
          };
        }),
      
      // Submit exam with results
      submitExam: (examId, results) =>
        set((state) => {
          const examState = state.exams[examId] || {
            startTime: Date.now(),
            answers: {},
            submitted: false,
            results: null,
          };
          return {
            exams: {
              ...state.exams,
              [examId]: {
                ...examState,
                submitted: true,
                results: {
                  ...results,
                  submittedAt: Date.now(),
                  attemptNumber: state.examAttempts[examId] || 1,
                },
              },
            },
          };
        }),
      
      // Check if exam is submitted
      isExamSubmitted: (examId) => {
        const examState = get().exams[examId];
        return examState?.submitted === true;
      },
      
      // Reset exam (for retakes)
      resetExam: (examId) =>
        set((state) => {
          const newExams = { ...state.exams };
          delete newExams[examId];
          // Note: We DON'T reset the attempt counter - it keeps incrementing
          return { exams: newExams };
        }),
      
      // ============================================================================
      // QUIZ ACTIONS
      // ============================================================================
      
      incrementQuestionIndex: (moduleId, weekId, quizIndex = 0) =>
        set((state) => {
          const quizKey = state.getQuizKey(moduleId, weekId, quizIndex);
          const quizState = state.quizzes[quizKey] || {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
            completed: false,
            lastAnsweredQuestion: -1,
          };
          return {
            quizzes: {
              ...state.quizzes,
              [quizKey]: {
                ...quizState,
                currentQuestionIndex: quizState.currentQuestionIndex + 1,
              },
            },
          };
        }),
      
      updateStats: (moduleId, weekId, quizIndex = 0, isCorrect) =>
        set((state) => {
          const quizKey = state.getQuizKey(moduleId, weekId, quizIndex);
          const quizState = state.quizzes[quizKey] || {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
            completed: false,
            lastAnsweredQuestion: -1,
          };
          
          // CRITICAL: Prevent duplicate submissions for the same question
          if (quizState.lastAnsweredQuestion === quizState.currentQuestionIndex) {
            console.warn(
              `[useStore] Duplicate submission blocked for question ${quizState.currentQuestionIndex} in ${quizKey}`
            );
            return state;
          }
          
          const today = format(new Date(), 'yyyy-MM-dd');
          const lastActivityDate = state.streaks.lastActivityDate;
          let currentStreak = state.streaks.currentStreak;
          let longestStreak = state.streaks.longestStreak;
          
          // Update streak
          if (!lastActivityDate || !isToday(new Date(lastActivityDate))) {
            const yesterday = format(addDays(new Date(), -1), 'yyyy-MM-dd');
            currentStreak = lastActivityDate === yesterday ? currentStreak + 1 : 1;
            longestStreak = Math.max(longestStreak, currentStreak);
          }
          
          console.log(
            `[useStore] Recording answer for question ${quizState.currentQuestionIndex}: ${isCorrect ? 'correct' : 'incorrect'}`
          );
          
          return {
            quizzes: {
              ...state.quizzes,
              [quizKey]: {
                ...quizState,
                stats: {
                  correct: quizState.stats.correct + (isCorrect ? 1 : 0),
                  total: quizState.stats.total + 1,
                },
                lastAnsweredQuestion: quizState.currentQuestionIndex,
              },
            },
            streaks: {
              lastActivityDate: today,
              currentStreak,
              longestStreak,
            },
          };
        }),
      
      completeQuiz: (moduleId, weekId, quizIndex = 0) =>
        set((state) => {
          const quizKey = state.getQuizKey(moduleId, weekId, quizIndex);
          const quizState = state.quizzes[quizKey] || {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
            completed: false,
            lastAnsweredQuestion: -1,
          };
          return {
            quizzes: {
              ...state.quizzes,
              [quizKey]: {
                ...quizState,
                completed: true,
              },
            },
          };
        }),
      
      resetQuiz: (moduleId, weekId, quizIndex = 0) =>
        set((state) => {
          const quizKey = state.getQuizKey(moduleId, weekId, quizIndex);
          const newQuizzes = { ...state.quizzes };
          delete newQuizzes[quizKey];
          return { quizzes: newQuizzes };
        }),
      
      resetWeekQuizzes: (moduleId, weekId) =>
        set((state) => {
          const newQuizzes = { ...state.quizzes };
          const prefix = `${moduleId}-${weekId}-`;
          
          Object.keys(newQuizzes).forEach((key) => {
            if (key.startsWith(prefix)) {
              delete newQuizzes[key];
            }
          });
          
          return { quizzes: newQuizzes };
        }),
      
      getAccuracy: (moduleId, weekId, quizIndex = 0) => {
        const quizState = get().getQuizState(moduleId, weekId, quizIndex);
        const { stats } = quizState;
        return stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
      },
      
      getWeekProgress: (moduleId, weekId, totalQuizzes) => {
        const quizzes = get().quizzes;
        let completedCount = 0;
        let totalCorrect = 0;
        let totalQuestions = 0;
        
        for (let i = 0; i < totalQuizzes; i++) {
          const key = get().getQuizKey(moduleId, weekId, i);
          const quiz = quizzes[key];
          
          if (quiz?.completed) {
            completedCount++;
          }
          
          if (quiz?.stats) {
            totalCorrect += quiz.stats.correct;
            totalQuestions += quiz.stats.total;
          }
        }
        
        const overallAccuracy = totalQuestions > 0 
          ? Math.round((totalCorrect / totalQuestions) * 100)
          : 0;
        
        return {
          completedQuizzes: completedCount,
          totalQuizzes,
          completionPercentage: Math.round((completedCount / totalQuizzes) * 100),
          totalCorrect,
          totalQuestions,
          overallAccuracy,
        };
      },
      
      resetAllProgress: () =>
        set(() => {
          // Create fresh module visibility from modules.js
          const freshModuleVisibility = modules.reduce((acc, mod) => ({
            ...acc,
            [mod.id]: mod.isVisible !== false,
          }), {});
          
          return {
            quizzes: {},
            exams: {},
            examAttempts: {},
            streaks: { lastActivityDate: null, currentStreak: 0, longestStreak: 0 },
            moduleVisibility: freshModuleVisibility,
          };
        }),
      
      // Module visibility is determined by modules.js - always read from source
      isModuleVisible: (moduleId) => {
        const module = modules.find(m => m.id === moduleId);
        // If module doesn't exist, hide it
        if (!module) return false;
        // Return the isVisible property, defaulting to true if not specified
        return module.isVisible !== false;
      },
    }),
    {
      name: 'quiz-storage',
      version: 6, // Incremented for module visibility fix
      partialize: (state) => ({
        quizzes: state.quizzes,
        exams: state.exams,
        examAttempts: state.examAttempts,
        streaks: state.streaks,
        // DON'T persist moduleVisibility - always read from modules.js
      }),
      migrate: (persistedState, version) => {
        if (version < 3) {
          const oldQuizzes = persistedState.quizzes || {};
          const newQuizzes = {};
          
          Object.keys(oldQuizzes).forEach((key) => {
            const quiz = oldQuizzes[key];
            
            if (key.split("-").length === 2) {
              newQuizzes[`${key}-0`] = {
                ...quiz,
                lastAnsweredQuestion: -1,
              };
            } else {
              newQuizzes[key] = {
                ...quiz,
                lastAnsweredQuestion: quiz.lastAnsweredQuestion ?? -1,
              };
            }
          });
          
          return {
            ...persistedState,
            quizzes: newQuizzes,
            exams: {},
          };
        }
        
        if (version < 4) {
          return {
            ...persistedState,
            exams: persistedState.exams || {},
          };
        }
        
        if (version < 5) {
          return {
            ...persistedState,
            examAttempts: persistedState.examAttempts || {},
          };
        }
        
        if (version < 6) {
          // Remove moduleVisibility from persisted state
          const { moduleVisibility, ...rest } = persistedState;
          return rest;
        }
        
        return persistedState;
      },
    }
  )
);

export default useStore;