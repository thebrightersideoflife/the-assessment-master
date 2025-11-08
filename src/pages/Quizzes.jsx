// src/pages/Quizzes.jsx
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { questions } from "../data/questions";
import { modules } from "../data/modules";
import { chunkQuestions, QUIZ_CHUNK_SIZE } from "../utils/chunkQuestions";
import useStore from "../store/useStore";
import Breadcrumb from "../components/UI/Breadcrumb";
import { AiOutlineTrophy, AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";

const Quizzes = () => {
  const { moduleId } = useParams();
  const { getQuizState, isModuleVisible } = useStore();

  // ✅ Find module by ID (handle both string and numeric IDs)
  const module = modules.find((m) => {
    return String(m.id) === String(moduleId);
  });

  // ✅ Redirect if module doesn't exist or is hidden
  if (!module || (module.id && !isModuleVisible(module.id))) {
    console.log('[Quizzes] Module not found or hidden:', { moduleId, module });
    return <Navigate to="/modules" replace />;
  }

  const parsedModuleId = module.id;

  // Get module display name (already handled in modules.js)
  const getModuleDisplayName = (mod) => {
    return mod.name; // Direct use since modules.js has correct display names
  };

  // ✅ Get all questions for this module, grouped by week
  const weekQuizData = module.weeks.map((week) => {
    const weekQuestions = questions.filter(
      (q) => q.moduleId === parsedModuleId && q.weekId === week.id
    );
    const questionChunks = chunkQuestions(weekQuestions, QUIZ_CHUNK_SIZE);

    // Calculate completion for this week
    const completedCount = questionChunks.reduce((count, _, idx) => {
      const quizState = getQuizState(parsedModuleId, week.id, idx);
      return count + (quizState.completed ? 1 : 0);
    }, 0);

    const weekProgress =
      questionChunks.length > 0
        ? Math.round((completedCount / questionChunks.length) * 100)
        : 0;

    // Calculate total correct answers for this week
    let totalCorrect = 0;
    let totalQuestions = 0;
    questionChunks.forEach((_, idx) => {
      const quizState = getQuizState(parsedModuleId, week.id, idx);
      totalCorrect += quizState.stats?.correct || 0;
      totalQuestions += quizState.stats?.total || 0;
    });

    const weekAccuracy = totalQuestions > 0 
      ? Math.round((totalCorrect / totalQuestions) * 100) 
      : 0;

    return {
      week,
      questionChunks,
      totalQuestions: weekQuestions.length,
      completedCount,
      weekProgress,
      weekAccuracy,
      totalCorrect,
      totalAnswered: totalQuestions,
    };
  });

  // ✅ Calculate overall module progress
  const totalQuizzes = weekQuizData.reduce(
    (sum, w) => sum + w.questionChunks.length,
    0
  );
  const totalCompleted = weekQuizData.reduce(
    (sum, w) => sum + w.completedCount,
    0
  );
  const overallProgress =
    totalQuizzes > 0 ? Math.round((totalCompleted / totalQuizzes) * 100) : 0;

  // Calculate overall accuracy
  const totalCorrect = weekQuizData.reduce((sum, w) => sum + w.totalCorrect, 0);
  const totalAnswered = weekQuizData.reduce((sum, w) => sum + w.totalAnswered, 0);
  const overallAccuracy = totalAnswered > 0 
    ? Math.round((totalCorrect / totalAnswered) * 100) 
    : 0;

  // Helper functions for styling
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
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Quizzes", path: "/quizzes" },
            { label: getModuleDisplayName(module) },
          ]}
        />

        {/* Hero Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#4169E1] to-[#3498DB] bg-clip-text text-transparent">
            {getModuleDisplayName(module)} Quizzes
          </h1>
          <p className="text-gray-600 text-lg">
            Master every concept through focused practice
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Quizzes */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="bg-[#3498DB]/10 p-3 rounded-lg">
                <AiOutlineClockCircle className="w-6 h-6 text-[#3498DB]" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-gray-800">
                  {totalQuizzes}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Total Quizzes
                </div>
              </div>
            </div>
          </div>

          {/* Completion Progress */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="bg-[#28B463]/10 p-3 rounded-lg">
                <AiOutlineCheckCircle className="w-6 h-6 text-[#28B463]" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-gray-800">
                  {overallProgress}%
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Completion
                </div>
                <div className="text-xs text-gray-400">
                  {totalCompleted}/{totalQuizzes} completed
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
                  {totalCorrect}/{totalAnswered} correct
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        {totalQuizzes > 0 && (
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                📊 Overall Progress
              </h3>
              <span className="text-sm text-gray-600">
                {totalCompleted} / {totalQuizzes} quizzes completed
              </span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${getProgressColor(overallAccuracy)} transition-all duration-1000 ease-out`}
                style={{ width: `${overallProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
              </div>
            </div>
          </div>
        )}

        {/* Motivation Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4169E1] to-[#28B463] p-6 text-center shadow-lg">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <p className="relative text-white text-lg font-semibold">
            {overallProgress === 100
              ? "🎉 Perfect! You've completed all quizzes!"
              : overallProgress >= 75
              ? "🌟 Almost there! Keep up the excellent work!"
              : overallProgress >= 50
              ? "💪 Great progress! You're halfway through!"
              : overallProgress > 0
              ? "🚀 You've started strong! Keep going!"
              : "📚 Ready to begin your quiz journey?"}
          </p>
        </div>

        {/* Week-by-Week Quiz Sections */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <div className="h-1 flex-1 bg-gradient-to-r from-[#4169E1] to-transparent rounded-full"></div>
            <h2 className="text-3xl font-bold text-[#3498DB]">Quizzes by Week</h2>
            <div className="h-1 flex-1 bg-gradient-to-l from-[#4169E1] to-transparent rounded-full"></div>
          </div>

          {weekQuizData.map(
            ({ week, questionChunks, totalQuestions, completedCount, weekProgress, weekAccuracy, totalCorrect, totalAnswered }, weekIndex) => {
              // Skip weeks with no quizzes
              if (questionChunks.length === 0) return null;

              return (
                <div
                  key={week.id}
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden animate-fadeIn"
                  style={{ animationDelay: `${weekIndex * 100}ms` }}
                >
                  {/* Week Header with Stats */}
                  <div className="relative bg-gradient-to-r from-[#4169E1]/5 to-[#3498DB]/10 border-b-2 border-gray-200 p-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"></div>
                    <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-8 bg-gradient-to-b from-[#4169E1] to-[#3498DB] rounded-full"></span>
                          <h2 className="text-3xl font-bold text-[#4169E1]">
                            {week.name}
                          </h2>
                        </div>
                        <p className="text-sm text-gray-600 pl-5">
                          {questionChunks.length} quiz{questionChunks.length !== 1 ? "zes" : ""} • {totalQuestions} total questions
                        </p>
                      </div>

                      {/* Week Stats */}
                      <div className="flex items-center gap-4">
                        <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-200">
                          <div className={`text-2xl font-bold ${getBadgeColor(weekAccuracy).split(' ')[1]}`}>
                            {weekProgress}%
                          </div>
                          <div className="text-xs text-gray-500">Complete</div>
                        </div>
                        <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-200">
                          <div className={`text-2xl font-bold ${getBadgeColor(weekAccuracy).split(' ')[1]}`}>
                            {weekAccuracy}%
                          </div>
                          <div className="text-xs text-gray-500">Accuracy</div>
                        </div>
                        <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-gray-200">
                          <div className="text-2xl font-bold text-gray-800">
                            {completedCount}/{questionChunks.length}
                          </div>
                          <div className="text-xs text-gray-500">Quizzes</div>
                        </div>
                      </div>
                    </div>

                    {/* Week Progress Bar */}
                    {totalAnswered > 0 && (
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>{totalCorrect} correct answers</span>
                          <span>{totalAnswered} attempted</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getProgressColor(weekAccuracy)} transition-all duration-1000 ease-out`}
                            style={{ width: `${weekAccuracy}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quiz Grid for this Week */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {questionChunks.map((chunk, idx) => {
                        const quizState = getQuizState(parsedModuleId, week.id, idx);
                        const isCompleted = quizState.completed || false;
                        const accuracy =
                          quizState.stats.total > 0
                            ? Math.round(
                                (quizState.stats.correct / quizState.stats.total) * 100
                              )
                            : 0;

                        const isPartial = chunk.length < QUIZ_CHUNK_SIZE;

                        // Badge color
                        let badgeColor = "bg-gray-400";
                        if (isCompleted) {
                          if (accuracy >= 90) badgeColor = "bg-[#28B463]";
                          else if (accuracy >= 70) badgeColor = "bg-[#E67E22]";
                        }

                        return (
                          <Link
                            key={idx}
                            to={`/quiz/${parsedModuleId}/${week.id}/${idx}`}
                            aria-label={`Start Quiz ${idx + 1} for ${week.name}`}
                            className={`group relative p-5 rounded-xl border-2 transition-all duration-300
                              hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 
                              focus:ring-offset-2 focus:ring-[#4169E1] animate-fadeInUp
                              ${
                                isCompleted
                                  ? "bg-gradient-to-br from-[#28B463]/10 to-[#3498DB]/10 border-[#28B463]/40"
                                  : quizState.stats.total > 0
                                  ? "bg-gradient-to-br from-[#3498DB]/5 to-[#4169E1]/10 border-[#3498DB]/40"
                                  : "bg-white border-gray-300 hover:border-[#3498DB]"
                              }`}
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#3498DB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                            {/* Completion Badge */}
                            {isCompleted && (
                              <div
                                className={`absolute top-3 right-3 ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
                              >
                                {accuracy}%
                              </div>
                            )}

                            {/* Content */}
                            <div className="relative space-y-3">
                              {/* Title */}
                              <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-[#4169E1] group-hover:text-[#3498DB] transition-colors">
                                  Quiz {idx + 1}
                                </h3>
                                {isCompleted && (
                                  <span className="text-2xl" aria-hidden="true">
                                    ✓
                                  </span>
                                )}
                              </div>

                              {/* Question Count */}
                              <p className="text-sm text-gray-600">
                                {chunk.length} question{chunk.length !== 1 ? "s" : ""}
                              </p>

                              {/* Partial Quiz Indicator */}
                              {isPartial && (
                                <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#E67E22]/20 text-[#E67E22] rounded-full">
                                  Final Quiz
                                </span>
                              )}

                              {/* Progress Bar (In Progress) */}
                              {quizState.stats.total > 0 && !isCompleted && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs text-gray-600">
                                    <span>In Progress</span>
                                    <span>
                                      {quizState.currentQuestionIndex}/{chunk.length}
                                    </span>
                                  </div>
                                  <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                      className="bg-gradient-to-r from-[#3498DB] to-[#4169E1] h-2 rounded-full transition-all duration-500"
                                      style={{
                                        width: `${
                                          (quizState.currentQuestionIndex / chunk.length) *
                                          100
                                        }%`,
                                      }}
                                    />
                                  </div>
                                </div>
                              )}

                              {/* Completed Status */}
                              {isCompleted && (
                                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                                  <span className="text-xs text-[#28B463] font-semibold">
                                    ✓ Completed
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {quizState.stats.correct}/{quizState.stats.total} correct
                                  </span>
                                </div>
                              )}

                              {/* Not Started */}
                              {quizState.stats.total === 0 && (
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                  Not started
                                </div>
                              )}

                              {/* Action Link */}
                              <div className="pt-2">
                                <span className="inline-flex items-center space-x-2 text-[#4169E1] hover:text-[#3498DB] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                  <span>
                                    {quizState.stats.total > 0 && !isCompleted
                                      ? "Continue"
                                      : isCompleted
                                      ? "Review"
                                      : "Start Quiz"}
                                  </span>
                                  <span className="text-lg">→</span>
                                </span>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Empty State */}
        {totalQuizzes === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl shadow-lg border-2 border-gray-200">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-gray-700 font-semibold mb-2">
              No quizzes available yet
            </p>
            <p className="text-sm text-gray-500">
              Check back soon as new content is added!
            </p>
          </div>
        )}

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-[#FFC300]/10 to-[#E67E22]/10 border-2 border-[#FFC300]/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">
                Pro Tip: Master Each Week
              </p>
              <p className="text-sm text-gray-600">
                Each quiz contains up to {QUIZ_CHUNK_SIZE} questions. Complete them week by week for the best learning experience. Aim for 80%+ accuracy before moving to the next week!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;