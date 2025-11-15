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
      
      // ✅ Points tracking
      points: {
        total: 0,                    // Total lifetime points
        byModule: {},                // Points per module { moduleId: points }
        byWeek: {},                  // Points per week { moduleId-weekId: points }
        history: []                  // Point earning history
      },
      
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
            completedAt: null,
            lastAnsweredQuestion: -1,
            pointsEarned: 0,
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
            completedAt: null,
            lastAnsweredQuestion: -1,
            pointsEarned: 0,
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
            completedAt: null,
            lastAnsweredQuestion: -1,
            pointsEarned: 0,
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
      
      // ✅ Complete quiz with points calculation
      completeQuiz: (moduleId, weekId, quizIndex = 0) =>
        set((state) => {
          const quizKey = state.getQuizKey(moduleId, weekId, quizIndex);
          const quizState = state.quizzes[quizKey] || {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
            completed: false,
            completedAt: null,
            lastAnsweredQuestion: -1,
            pointsEarned: 0,
          };
          
          // ✅ If quiz was previously completed, subtract old points before adding new ones
          const previousPoints = quizState.pointsEarned || 0;
          const weekKey = `${moduleId}-${weekId}`;
          
          // Calculate new points earned
          const accuracy = quizState.stats.total > 0 
            ? Math.round((quizState.stats.correct / quizState.stats.total) * 100) 
            : 0;
          
          let pointsEarned = quizState.stats.correct * 10; // 10 points per correct answer
          let bonusReason = '';
          
          if (accuracy === 100) {
            pointsEarned += 50;
            bonusReason = 'Perfect Score Bonus';
          } else if (accuracy >= 90) {
            pointsEarned += 25;
            bonusReason = 'Excellent Performance Bonus';
          } else if (accuracy >= 80) {
            pointsEarned += 10;
            bonusReason = 'Good Job Bonus';
          }
          
          // Calculate the point difference (new - old)
          const pointDifference = pointsEarned - previousPoints;
          
          // Create history entry only if there's a change in points
          const historyEntry = pointDifference !== 0 ? {
            timestamp: Date.now(),
            moduleId,
            weekId,
            quizIndex,
            points: pointsEarned,
            previousPoints,
            reason: quizState.completed ? 'Quiz Retry' : (bonusReason || 'Quiz Completion'),
            accuracy,
            quizKey
          } : null;
          
          return {
            quizzes: {
              ...state.quizzes,
              [quizKey]: {
                ...quizState,
                completed: true,
                completedAt: Date.now(),
                pointsEarned
              },
            },
            points: {
              total: state.points.total + pointDifference,
              byModule: {
                ...state.points.byModule,
                [moduleId]: (state.points.byModule[moduleId] || 0) + pointDifference
              },
              byWeek: {
                ...state.points.byWeek,
                [weekKey]: (state.points.byWeek[weekKey] || 0) + pointDifference
              },
              history: historyEntry ? [...state.points.history, historyEntry] : state.points.history
            }
          };
        }),
      
      // ✅ Reset quiz - removes points from totals
      resetQuiz: (moduleId, weekId, quizIndex = 0) =>
        set((state) => {
          const quizKey = state.getQuizKey(moduleId, weekId, quizIndex);
          const quizState = state.quizzes[quizKey];
          
          if (!quizState) return state;
          
          const pointsToRemove = quizState.pointsEarned || 0;
          const weekKey = `${moduleId}-${weekId}`;
          
          const newQuizzes = { ...state.quizzes };
          delete newQuizzes[quizKey];
          
          return {
            quizzes: newQuizzes,
            points: {
              total: Math.max(0, state.points.total - pointsToRemove),
              byModule: {
                ...state.points.byModule,
                [moduleId]: Math.max(0, (state.points.byModule[moduleId] || 0) - pointsToRemove)
              },
              byWeek: {
                ...state.points.byWeek,
                [weekKey]: Math.max(0, (state.points.byWeek[weekKey] || 0) - pointsToRemove)
              },
              history: state.points.history
            }
          };
        }),
      
      resetWeekQuizzes: (moduleId, weekId) =>
        set((state) => {
          const newQuizzes = { ...state.quizzes };
          const prefix = `${moduleId}-${weekId}-`;
          const weekKey = `${moduleId}-${weekId}`;
          let totalPointsToRemove = 0;
          
          Object.keys(newQuizzes).forEach((key) => {
            if (key.startsWith(prefix)) {
              totalPointsToRemove += newQuizzes[key].pointsEarned || 0;
              delete newQuizzes[key];
            }
          });
          
          return {
            quizzes: newQuizzes,
            points: {
              total: Math.max(0, state.points.total - totalPointsToRemove),
              byModule: {
                ...state.points.byModule,
                [moduleId]: Math.max(0, (state.points.byModule[moduleId] || 0) - totalPointsToRemove)
              },
              byWeek: {
                ...state.points.byWeek,
                [weekKey]: 0
              },
              history: state.points.history
            }
          };
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
      
      // ============================================================================
      // POINTS SYSTEM
      // ============================================================================
      
      // ✅ Calculate points for a quiz (without awarding them)
      calculateQuizPoints: (moduleId, weekId, quizIndex) => {
        const state = get();
        const quizKey = state.getQuizKey(moduleId, weekId, quizIndex);
        const quizState = state.quizzes[quizKey];
        
        if (!quizState || !quizState.completed) return 0;
        
        return quizState.pointsEarned || 0;
      },
      
      // ✅ Award streak bonus points
      awardStreakBonus: (streakDays) =>
        set((state) => {
          const bonusPoints = Math.floor(streakDays / 7) * 100; // 100 points per 7-day milestone
          
          if (bonusPoints === 0) return state;
          
          const historyEntry = {
            timestamp: Date.now(),
            moduleId: null,
            weekId: null,
            quizIndex: null,
            points: bonusPoints,
            reason: `${streakDays}-Day Streak Bonus`,
            quizKey: null
          };
          
          return {
            points: {
              ...state.points,
              total: state.points.total + bonusPoints,
              history: [...state.points.history, historyEntry]
            }
          };
        }),
      
      // ✅ Get total points
      getTotalPoints: () => {
        return get().points.total;
      },
      
      // ✅ Get points for a specific module
      getModulePoints: (moduleId) => {
        return get().points.byModule[moduleId] || 0;
      },
      
      // ✅ Get points for a specific week
      getWeekPoints: (moduleId, weekId) => {
        const weekKey = `${moduleId}-${weekId}`;
        return get().points.byWeek[weekKey] || 0;
      },
      
      // ✅ Reset all progress including points
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
            points: {
              total: 0,
              byModule: {},
              byWeek: {},
              history: []
            }
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
      version: 7, // ✅ Incremented for points system
      partialize: (state) => ({
        quizzes: state.quizzes,
        exams: state.exams,
        examAttempts: state.examAttempts,
        streaks: state.streaks,
        points: state.points, // ✅ Persist points
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
                completedAt: null,
                pointsEarned: 0,
              };
            } else {
              newQuizzes[key] = {
                ...quiz,
                lastAnsweredQuestion: quiz.lastAnsweredQuestion ?? -1,
                completedAt: quiz.completedAt || null,
                pointsEarned: quiz.pointsEarned || 0,
              };
            }
          });
          
          return {
            ...persistedState,
            quizzes: newQuizzes,
            exams: {},
            points: {
              total: 0,
              byModule: {},
              byWeek: {},
              history: []
            }
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
        
        if (version < 7) {
          // Add points structure to existing state
          return {
            ...persistedState,
            points: {
              total: 0,
              byModule: {},
              byWeek: {},
              history: []
            }
          };
        }
        
        return persistedState;
      },
    }
  )
);

export default useStore;