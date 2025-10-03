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
      
      // Streak tracking
      streaks: {
        lastActivityDate: null,
        currentStreak: 0,
        longestStreak: 0,
      },
      
      // Module visibility state
      moduleVisibility: modules.reduce((acc, mod) => ({
        ...acc,
        [mod.id]: mod.isVisible !== false,
      }), {}),

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
            lastAnsweredQuestion: -1, // Track last answered question index
          }
        );
      },

      // ============================================================================
      // ACTIONS: Quiz management
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
                // Keep lastAnsweredQuestion - it will be updated on next submission
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
            return state; // Return unchanged state
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
                lastAnsweredQuestion: quizState.currentQuestionIndex, // Mark this question as answered
              },
            },
            streaks: {
              lastActivityDate: today,
              currentStreak,
              longestStreak,
            },
          };
        }),

      // Mark quiz as completed
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

      // Reset all quizzes for a week
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

      // Get week progress (all quizzes in a week)
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
        set(() => ({
          quizzes: {},
          streaks: { lastActivityDate: null, currentStreak: 0, longestStreak: 0 },
          moduleVisibility: modules.reduce((acc, mod) => ({
            ...acc,
            [mod.id]: mod.isVisible !== false,
          }), {}),
        })),

      toggleModuleVisibility: (moduleId) =>
        set((state) => ({
          moduleVisibility: {
            ...state.moduleVisibility,
            [moduleId]: !state.moduleVisibility[moduleId],
          },
        })),

      isModuleVisible: (moduleId) => get().moduleVisibility[moduleId] !== false,
    }),
    {
      name: 'quiz-storage',
      version: 3, // Incremented for new lastAnsweredQuestion field
      partialize: (state) => ({
        quizzes: state.quizzes,
        streaks: state.streaks,
        moduleVisibility: state.moduleVisibility,
      }),
      migrate: (persistedState, version) => {
        if (version < 3) {
          const oldQuizzes = persistedState.quizzes || {};
          const newQuizzes = {};
          
          Object.keys(oldQuizzes).forEach((key) => {
            const quiz = oldQuizzes[key];
            
            // Add lastAnsweredQuestion field to existing quizzes
            if (key.split("-").length === 2) {
              // Old format without quizIndex
              newQuizzes[`${key}-0`] = {
                ...quiz,
                lastAnsweredQuestion: -1,
              };
            } else {
              // New format with quizIndex
              newQuizzes[key] = {
                ...quiz,
                lastAnsweredQuestion: quiz.lastAnsweredQuestion ?? -1,
              };
            }
          });
          
          return {
            ...persistedState,
            quizzes: newQuizzes,
          };
        }
        
        return persistedState;
      },
    }
  )
);

export default useStore;