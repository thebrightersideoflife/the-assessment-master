// src/components/UI/ChallengePrompt.jsx
import React, { useState, useEffect } from 'react';
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';
import useStore from '../../store/useStore';

/**
 * ChallengePrompt Component
 * 
 * Displays weekly and monthly challenges to motivate users.
 * Tracks completion status and shows progress.
 */
const ChallengePrompt = ({ position = 'dashboard' }) => {
  const { quizzes, exams, streaks } = useStore();
  const [activeChallenges, setActiveChallenges] = useState([]);

  useEffect(() => {
    const challenges = generateChallenges();
    setActiveChallenges(challenges);
  }, [quizzes, exams, streaks]);

  const generateChallenges = () => {
    const now = new Date();
    const challenges = [];

    // Weekly Challenges
    const weekStart = startOfWeek(now, { weekStartsOn: 1 }); // Monday
    const weekEnd = endOfWeek(now, { weekStartsOn: 1 });
    
    const weeklyQuizzesCompleted = Object.values(quizzes).filter(quiz => {
      if (!quiz.completed) return false;
      // Check if completed this week (you'd need to add completedAt timestamp to quiz state)
      return true; // Simplified for now
    }).length;

    // Challenge 1: Complete 5 quizzes this week
    if (weeklyQuizzesCompleted < 5) {
      challenges.push({
        id: 'weekly-5-quizzes',
        type: 'weekly',
        title: '📅 Weekly Challenge',
        description: 'Complete 5 quizzes this week',
        progress: weeklyQuizzesCompleted,
        target: 5,
        reward: '⭐ 50 Bonus Points',
        emoji: '📅',
        color: 'from-[#3498DB] to-[#4169E1]',
        expiresAt: format(weekEnd, 'EEE, MMM d')
      });
    }

    // Challenge 2: Maintain 7-day streak
    if (streaks.currentStreak < 7) {
      challenges.push({
        id: 'weekly-streak',
        type: 'weekly',
        title: '🔥 Streak Challenge',
        description: 'Maintain a 7-day learning streak',
        progress: streaks.currentStreak,
        target: 7,
        reward: '🏆 Streak Master Badge',
        emoji: '🔥',
        color: 'from-[#E67E22] to-[#D35400]',
        expiresAt: 'Ongoing'
      });
    }

    // Monthly Challenges
    const monthStart = startOfMonth(now);
    const monthEnd = endOfMonth(now);

    const monthlyAccuracy = calculateMonthlyAccuracy();
    
    // Challenge 3: Achieve 80% average accuracy this month
    if (monthlyAccuracy < 80) {
      challenges.push({
        id: 'monthly-accuracy',
        type: 'monthly',
        title: '🎯 Monthly Challenge',
        description: 'Achieve 80% average accuracy',
        progress: monthlyAccuracy,
        target: 80,
        reward: '🌟 Accuracy Champion Badge',
        emoji: '🎯',
        color: 'from-[#28B463] to-[#27AE60]',
        expiresAt: format(monthEnd, 'MMM d, yyyy')
      });
    }

    // Challenge 4: Complete 1 exam this month
    const monthlyExamsCompleted = Object.values(exams).filter(
      exam => exam.submitted
    ).length;

    if (monthlyExamsCompleted === 0) {
      challenges.push({
        id: 'monthly-exam',
        type: 'monthly',
        title: '📋 Monthly Challenge',
        description: 'Complete at least 1 formal exam',
        progress: monthlyExamsCompleted,
        target: 1,
        reward: '🎓 Exam Warrior Badge',
        emoji: '📋',
        color: 'from-[#9b59b6] to-[#8e44ad]',
        expiresAt: format(monthEnd, 'MMM d, yyyy')
      });
    }

    // Limit to 2 challenges at a time to avoid overwhelming
    return challenges.slice(0, 2);
  };

  const calculateMonthlyAccuracy = () => {
    const allQuizzes = Object.values(quizzes);
    if (allQuizzes.length === 0) return 0;

    const totalCorrect = allQuizzes.reduce((sum, q) => sum + (q.stats?.correct || 0), 0);
    const totalQuestions = allQuizzes.reduce((sum, q) => sum + (q.stats?.total || 0), 0);

    return totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  };

  if (activeChallenges.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🏆</span>
        <h3 className="text-xl font-bold text-gray-800">Active Challenges</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeChallenges.map((challenge, idx) => (
          <div
            key={challenge.id}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${challenge.color} p-6 shadow-lg border border-white/20 animate-fadeIn`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{challenge.emoji}</span>
                  <div>
                    <h4 className="text-white font-bold text-lg">{challenge.title}</h4>
                    <p className="text-white/80 text-xs">Expires: {challenge.expiresAt}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  challenge.type === 'weekly' 
                    ? 'bg-blue-500/30 text-white' 
                    : 'bg-purple-500/30 text-white'
                }`}>
                  {challenge.type === 'weekly' ? 'WEEKLY' : 'MONTHLY'}
                </span>
              </div>

              {/* Description */}
              <p className="text-white text-sm mb-3">{challenge.description}</p>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-white/90 mb-1">
                  <span>Progress</span>
                  <span className="font-bold">{challenge.progress}/{challenge.target}</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.min((challenge.progress / challenge.target) * 100, 100)}%` 
                    }}
                  />
                </div>
              </div>

              {/* Reward */}
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <span className="text-white text-xs font-semibold">Reward:</span>
                <span className="text-white text-xs">{challenge.reward}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengePrompt;