import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      // Quiz state
      quizzes: {}, // { [moduleId-weekId]: { currentQuestionIndex, stats } }
      
      // Actions
      setQuizState: (moduleId, weekId, state) =>
        set((s) => ({
          quizzes: {
            ...s.quizzes,
            [`${moduleId}-${weekId}`]: {
              ...s.quizzes[`${moduleId}-${weekId}`],
              ...state,
            },
          },
        })),

      incrementQuestionIndex: (moduleId, weekId) =>
        set((s) => ({
          quizzes: {
            ...s.quizzes,
            [`${moduleId}-${weekId}`]: {
              ...s.quizzes[`${moduleId}-${weekId}`],
              currentQuestionIndex:
                (s.quizzes[`${moduleId}-${weekId}`]?.currentQuestionIndex || 0) + 1,
            },
          },
        })),

      updateStats: (moduleId, weekId, isCorrect) =>
        set((s) => {
          const key = `${moduleId}-${weekId}`;
          const currentStats = s.quizzes[key]?.stats || { correct: 0, total: 0 };
          return {
            quizzes: {
              ...s.quizzes,
              [key]: {
                ...s.quizzes[key],
                stats: {
                  correct: currentStats.correct + (isCorrect ? 1 : 0),
                  total: currentStats.total + 1,
                },
              },
            },
          };
        }),

      resetQuiz: (moduleId, weekId) =>
        set((s) => {
          const key = `${moduleId}-${weekId}`;
          return {
            quizzes: {
              ...s.quizzes,
              [key]: { currentQuestionIndex: 0, stats: { correct: 0, total: 0 } },
            },
          };
        }),

      getAccuracy: (moduleId, weekId) => {
        const key = `${moduleId}-${weekId}`;
        const stats = get().quizzes[key]?.stats || { correct: 0, total: 0 };
        return stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
      },

      clearAllProgress: () =>
        set({ quizzes: {} }),
    }),
    {
      name: 'quiz-storage',
      storage: createJSONStorage(() => localStorage),
      version: 1, // For future migrations
    }
  )
);