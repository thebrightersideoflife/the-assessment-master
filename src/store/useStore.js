// src/store/useStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { format, isToday, addDays } from 'date-fns';

export const useStore = create(
  persist(
    (set, get) => ({
      // Quiz state per moduleId/weekId
      quizzes: {}, // { [moduleId-weekId]: { currentQuestionIndex, stats } }
      // Streak tracking
      streaks: {
        lastActivityDate: null,
        currentStreak: 0,
        longestStreak: 0,
      },

      // Initialize or get quiz state
      getQuizState: (moduleId, weekId) => {
        const quizKey = `${moduleId}-${weekId}`;
        return (
          get().quizzes[quizKey] || {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
          }
        );
      },

      // Actions
      incrementQuestionIndex: (moduleId, weekId) =>
        set((state) => {
          const quizKey = `${moduleId}-${weekId}`;
          const quizState = state.quizzes[quizKey] || {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
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

      updateStats: (moduleId, weekId, isCorrect) =>
        set((state) => {
          const quizKey = `${moduleId}-${weekId}`;
          const quizState = state.quizzes[quizKey] || {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
          };
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

          return {
            quizzes: {
              ...state.quizzes,
              [quizKey]: {
                ...quizState,
                stats: {
                  correct: quizState.stats.correct + (isCorrect ? 1 : 0),
                  total: quizState.stats.total + 1,
                },
              },
            },
            streaks: {
              lastActivityDate: today,
              currentStreak,
              longestStreak,
            },
          };
        }),

      resetQuiz: (moduleId, weekId) =>
        set((state) => {
          const quizKey = `${moduleId}-${weekId}`;
          return {
            quizzes: {
              ...state.quizzes,
              [quizKey]: {
                currentQuestionIndex: 0,
                stats: { correct: 0, total: 0 },
              },
            },
          };
        }),

      getAccuracy: (moduleId, weekId) => {
        const quizState = get().getQuizState(moduleId, weekId);
        const { stats } = quizState;
        return stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
      },

      resetAllProgress: () =>
        set(() => ({
          quizzes: {},
          streaks: { lastActivityDate: null, currentStreak: 0, longestStreak: 0 },
        })),
    }),
    {
      name: 'quiz-storage',
      partialize: (state) => ({ quizzes: state.quizzes, streaks: state.streaks }),
    }
  )
);