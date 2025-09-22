import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      // Quiz state
      currentQuestionIndex: 0,
      stats: { correct: 0, total: 0 },
      
      // Actions
      incrementQuestionIndex: () => set(state => ({
        currentQuestionIndex: state.currentQuestionIndex + 1
      })),
      
      updateStats: (isCorrect) => set(state => ({
        stats: {
          correct: state.stats.correct + (isCorrect ? 1 : 0),
          total: state.stats.total + 1
        }
      })),
      
      resetQuiz: () => set({
        currentQuestionIndex: 0,
        stats: { correct: 0, total: 0 }
      }),
      
      getAccuracy: () => {
        const { stats } = get();
        return stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
      }
    }),
    {
      name: 'quiz-storage', // unique name
      // You can add additional options here
    }
  )
);