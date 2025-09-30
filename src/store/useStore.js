import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      // Quiz state per moduleId/weekId
      quizzes: {}, // { [moduleId-weekId]: { currentQuestionIndex, stats } }
      
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
    }),
    {
      name: 'quiz-storage',
      partialize: (state) => ({ quizzes: state.quizzes }),
    }
  )
);