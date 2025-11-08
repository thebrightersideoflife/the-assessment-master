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

  // Get module display name
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

  // Helper function for progress colors
  const getProgressColor = (accuracy) => {
    if (accuracy >= 80) return "from-[#28B463] to-[#28B463]/80";
    if (accuracy >= 60) return "from-[#3498DB] to-[#4169E1]";
    if (accuracy >= 40) return "from-[#FFC300] to-[#E67E22]";
    return "from-[#C0392B] to-[#C0392B]/80";
  };

  const getBadgeColor = (accuracy) => {
    if (accuracy >= 80) return "bg-[#28B463]/20 text-[#28B463]";
    if (accuracy >= 60) return "bg-[#3498DB]/20 text-[#3498DB]";
    if (accuracy >= 40) return "bg-[#FFC300]/20 text-[#E67E22]";
    return "bg-[#C0392B]/20 text-[#C0392B]";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Quizzes" },
          ]}
        />

        {/* Hero Section */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#4169E1] to-[#3498DB] bg-clip-text text-transparent">
            All Quizzes
          </h1>
          <p className="text-gray-600 text-lg">
            Choose a module to begin your quiz journey
          </p>
        </div>

        {/* Overall Stats Cards */}
        {overallStats.totalQuizzes > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Quizzes */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-[#3498DB]/10 p-3 rounded-lg">
                  <AiOutlineBook className="w-6 h-6 text-[#3498DB]" />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-800">
                    {overallStats.totalQuizzes}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Total Quizzes
                  </div>
                  <div className="text-xs text-gray-400">
                    Across all modules
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Completion */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-[#28B463]/10 p-3 rounded-lg">
                  <AiOutlineCheckCircle className="w-6 h-6 text-[#28B463]" />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-800">
                    {overallCompletion}%
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Completion
                  </div>
                  <div className="text-xs text-gray-400">
                    {overallStats.completedQuizzes}/{overallStats.totalQuizzes} completed
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Accuracy */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-[#FFC300]/10 p-3 rounded-lg">
                  <AiOutlineTrophy className="w-6 h-6 text-[#FFC300]" />
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-800">
                    {overallAccuracy}%
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Accuracy
                  </div>
                  <div className="text-xs text-gray-400">
                    {overallStats.totalCorrect}/{overallStats.totalAnswered} correct
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Motivation Banner */}
        {overallStats.totalQuizzes > 0 && (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4169E1] to-[#28B463] p-6 text-center shadow-lg">
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
        )}

        {/* Module Selection */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="h-1 flex-1 bg-gradient-to-r from-[#4169E1] to-transparent rounded-full"></div>
            <h2 className="text-3xl font-bold text-[#3498DB]">Select a Module</h2>
            <div className="h-1 flex-1 bg-gradient-to-l from-[#4169E1] to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moduleStats.map((stat, index) => (
              <Link
                key={stat.module.id}
                to={`/quizzes/module/${stat.module.id}`}
                className="group relative p-8 rounded-2xl border-2 border-gray-200 bg-white 
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeInUp overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#3498DB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Module Name */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-12 bg-gradient-to-b from-[#4169E1] to-[#3498DB] rounded-full"></span>
                      <h3 className="text-3xl font-bold text-[#4169E1] group-hover:text-[#3498DB] transition-colors">
                        {getModuleDisplayName(stat.module)}
                      </h3>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-bold ${getBadgeColor(stat.accuracy)}`}>
                      {stat.completionPercentage}%
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">
                        {stat.totalQuizzes}
                      </div>
                      <div className="text-xs text-gray-500">Quizzes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#28B463]">
                        {stat.completedQuizzes}
                      </div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#3498DB]">
                        {stat.accuracy}%
                      </div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {stat.totalAnswered > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>{stat.totalCorrect} correct</span>
                        <span>{stat.totalAnswered} attempted</span>
                      </div>
                      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getProgressColor(stat.accuracy)} transition-all duration-1000 ease-out`}
                          style={{ width: `${stat.accuracy}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Text */}
                  <div className="pt-4 border-t border-gray-200">
                    <span className="inline-flex items-center space-x-2 text-[#4169E1] hover:text-[#3498DB] font-semibold transition-all group-hover:translate-x-2">
                      <span>
                        {stat.completedQuizzes === 0
                          ? "Start Quizzes"
                          : stat.completedQuizzes === stat.totalQuizzes
                          ? "Review Quizzes"
                          : "Continue Quizzes"}
                      </span>
                      <span className="text-xl">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {moduleStats.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl shadow-lg border-2 border-gray-200">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-gray-700 font-semibold mb-2">
              No modules available
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Check back soon as new quiz modules are added!
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-[#FFC300]/10 to-[#E67E22]/10 border-2 border-[#FFC300]/30 rounded-xl p-6">
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