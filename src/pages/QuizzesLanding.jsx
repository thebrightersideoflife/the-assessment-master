// src/pages/QuizzesLanding.jsx
import React from "react";
import { Link } from "react-router-dom";
import { modules } from "../data/modules";
import { questions } from "../data/questions";
import { chunkQuestions } from "../utils/chunkQuestions";
import useStore from "../store/useStore";
import Breadcrumb from "../components/UI/Breadcrumb";
import { AiOutlineBook, AiOutlineTrophy, AiOutlineCheckCircle } from "react-icons/ai";

const QuizzesLanding = () => {
  const { getQuizState, isModuleVisible } = useStore();

  const getModuleDisplayName = (mod) => {
    return mod.name;
  };

  // Calculate stats for each visible module
  const moduleStats = modules
    .filter((mod) => isModuleVisible(mod.id))
    .map((module) => {
      let totalQuizzes = 0;
      let completedQuizzes = 0;
      let totalCorrect = 0;
      let totalAnswered = 0;

      module.weeks.forEach((week) => {
        const weekQuestions = questions.filter(
          (q) => q.moduleId === module.id && q.weekId === week.id
        );
        const questionChunks = chunkQuestions(weekQuestions);
        totalQuizzes += questionChunks.length;

        questionChunks.forEach((_, idx) => {
          const quizState = getQuizState(module.id, week.id, idx);
          if (quizState.completed) completedQuizzes++;
          totalCorrect += quizState.stats?.correct || 0;
          totalAnswered += quizState.stats?.total || 0;
        });
      });

      const completionPercentage =
        totalQuizzes > 0 ? Math.round((completedQuizzes / totalQuizzes) * 100) : 0;
      const accuracy =
        totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

      return {
        module,
        totalQuizzes,
        completedQuizzes,
        completionPercentage,
        accuracy,
        totalCorrect,
        totalAnswered,
      };
    });

  // Overall stats across all modules
  const overallStats = moduleStats.reduce(
    (acc, stat) => ({
      totalQuizzes: acc.totalQuizzes + stat.totalQuizzes,
      completedQuizzes: acc.completedQuizzes + stat.completedQuizzes,
      totalCorrect: acc.totalCorrect + stat.totalCorrect,
      totalAnswered: acc.totalAnswered + stat.totalAnswered,
    }),
    { totalQuizzes: 0, completedQuizzes: 0, totalCorrect: 0, totalAnswered: 0 }
  );

  const overallCompletion =
    overallStats.totalQuizzes > 0
      ? Math.round((overallStats.completedQuizzes / overallStats.totalQuizzes) * 100)
      : 0;
  const overallAccuracy =
    overallStats.totalAnswered > 0
      ? Math.round((overallStats.totalCorrect / overallStats.totalAnswered) * 100)
      : 0;

  const getProgressColor = (accuracy) => {
    if (accuracy >= 80) return "from-emerald-500 to-emerald-600";
    if (accuracy >= 60) return "from-blue-500 to-indigo-600";
    if (accuracy >= 40) return "from-amber-500 to-orange-600";
    return "from-red-500 to-red-600";
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 80) return "text-emerald-600";
    if (accuracy >= 60) return "text-blue-600";
    if (accuracy >= 40) return "text-amber-600";
    return "text-red-600";
  };

  const getBadgeColor = (accuracy) => {
    if (accuracy >= 80) return "bg-emerald-100 text-emerald-700";
    if (accuracy >= 60) return "bg-blue-100 text-blue-700";
    if (accuracy >= 40) return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Quizzes" },
          ]}
        />

        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            All Quizzes
          </h1>
          <p className="text-gray-600 text-lg">
            Choose a module to begin your quiz journey
          </p>
        </div>

        {/* Overall Stats Cards */}
        {overallStats.totalQuizzes > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Quizzes */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <AiOutlineBook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-gray-900">
                      {overallStats.totalQuizzes}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Total Quizzes
                    </div>
                    <div className="text-xs text-gray-500">
                      Across all modules
                    </div>
                  </div>
                </div>
              </div>

              {/* Overall Completion */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <AiOutlineCheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-gray-900">
                      {overallCompletion}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Completion
                    </div>
                    <div className="text-xs text-gray-500">
                      {overallStats.completedQuizzes}/{overallStats.totalQuizzes} completed
                    </div>
                  </div>
                </div>
              </div>

              {/* Overall Accuracy */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <AiOutlineTrophy className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-gray-900">
                      {overallAccuracy}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Accuracy
                    </div>
                    <div className="text-xs text-gray-500">
                      {overallStats.totalCorrect}/{overallStats.totalAnswered} correct
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="relative">
              <div className="h-2 bg-white/60 backdrop-blur-sm rounded-full overflow-hidden shadow-inner">
                <div
                  className={`h-full bg-gradient-to-r ${getProgressColor(overallAccuracy)} transition-all duration-700 relative overflow-hidden`}
                  style={{ width: `${overallCompletion}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                </div>
              </div>
            </div>

            {/* Motivation Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center shadow-lg">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <p className="relative text-white text-lg font-semibold">
                {overallCompletion === 100
                  ? "🎉 Incredible! You've completed all available quizzes!"
                  : overallCompletion >= 75
                  ? "🌟 Outstanding progress! You're almost at 100%!"
                  : overallCompletion >= 50
                  ? "💪 Great work! You're halfway through!"
                  : overallCompletion > 0
                  ? "🚀 You've made a strong start! Keep going!"
                  : "📚 Ready to test your knowledge? Choose a module below!"}
              </p>
            </div>
          </>
        )}

        {/* Module Selection */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Select a Module</h2>
          </div>

          {/* Module Grid in White Container */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {moduleStats.map((stat, index) => (
                <Link
                  key={stat.module.id}
                  to={`/quizzes/module/${stat.module.id}`}
                  className="group relative p-6 bg-gray-50/50 rounded-xl border border-gray-200 
                    hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 rounded-xl transition-all duration-300 pointer-events-none"></div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Module Name */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {getModuleDisplayName(stat.module)}
                        </h3>
                      </div>
                      <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${getBadgeColor(stat.accuracy)}`}>
                        {stat.completionPercentage}%
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 py-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.totalQuizzes}
                        </div>
                        <div className="text-xs text-gray-600">Quizzes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">
                          {stat.completedQuizzes}
                        </div>
                        <div className="text-xs text-gray-600">Completed</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getAccuracyColor(stat.accuracy)}`}>
                          {stat.accuracy}%
                        </div>
                        <div className="text-xs text-gray-600">Accuracy</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {stat.totalAnswered > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>{stat.totalCorrect} correct</span>
                          <span>{stat.totalAnswered} attempted</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getProgressColor(stat.accuracy)} transition-all duration-700`}
                            style={{ width: `${stat.accuracy}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Text */}
                    <div className="pt-3 border-t border-gray-200">
                      <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                        <span>
                          {stat.completedQuizzes === 0
                            ? "Start Quizzes"
                            : stat.completedQuizzes === stat.totalQuizzes
                            ? "Review Quizzes"
                            : "Continue Quizzes"}
                        </span>
                        <span className="text-lg">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {moduleStats.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-200">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-gray-900 font-bold mb-2">
              No modules available
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Check back soon as new quiz modules are added!
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* Pro Tip Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200/60 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">
                Quiz Navigation
              </p>
              <p className="text-sm text-gray-600">
                Select a module above to view all quizzes organized by week. Each module contains multiple weeks of practice material with 5-question quizzes designed to reinforce your learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesLanding;