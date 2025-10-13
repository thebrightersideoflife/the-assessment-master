// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import { AiOutlineStar, AiOutlineBook, AiOutlineTrophy } from "react-icons/ai";
import { modules } from "../data/modules";
import { chunkQuestions } from "../utils/chunkQuestions";
import { questions } from "../data/questions";

const Dashboard = () => {
  const { quizzes, getQuizState, resetAllProgress } = useStore();

  // Aggregate global stats
  const aggregateStats = Object.values(quizzes).reduce(
    (acc, quiz) => ({
      correct: acc.correct + (quiz.stats?.correct || 0),
      total: acc.total + (quiz.stats?.total || 0),
    }),
    { correct: 0, total: 0 }
  );

  const overallAccuracy =
    aggregateStats.total > 0
      ? Math.round((aggregateStats.correct / aggregateStats.total) * 100)
      : 0;

  // Export progress as JSON
  const handleExportProgress = () => {
    const data = JSON.stringify(quizzes, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `quiz-progress-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import progress from JSON
  const handleImportProgress = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        useStore.setState({ quizzes: data });
        alert("✅ Progress imported successfully!");
        window.location.reload();
      } catch (err) {
        console.error("Failed to import progress:", err);
        alert("❌ Invalid file format");
      }
    };
    reader.readAsText(file);
  };

  // Reset all quizzes
  const handleResetProgress = () => {
    if (window.confirm("⚠️ This will delete ALL quiz progress. Are you sure?")) {
      resetAllProgress();
      window.location.reload();
    }
  };

  // Build per-module stats
  const moduleStats = modules
    .filter((module) => module.isVisible !== false)
    .map((module) => ({
      moduleId: module.id,
      moduleName: module.name,
      weeks: module.weeks.map((week) => {
        const weekQuestions = questions.filter(
          (q) => q.moduleId === module.id && q.weekId === week.id
        );
        const questionChunks = chunkQuestions(weekQuestions);
        const totalQuizzes = questionChunks.length;

        let totalCorrect = 0;
        let totalAnswered = 0;
        let completedQuizzes = 0;

        for (let i = 0; i < totalQuizzes; i++) {
          const quizState = getQuizState(module.id, week.id, i);
          if (quizState.stats) {
            totalCorrect += quizState.stats.correct;
            totalAnswered += quizState.stats.total;
          }
          if (quizState.completed) {
            completedQuizzes++;
          }
        }

        const accuracy =
          totalAnswered > 0
            ? Math.round((totalCorrect / totalAnswered) * 100)
            : 0;

        return {
          weekId: week.id,
          weekName: week.name,
          stats: { correct: totalCorrect, total: totalAnswered },
          accuracy,
          totalQuizzes,
          completedQuizzes,
        };
      }),
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#4169E1] to-[#3498DB] bg-clip-text text-transparent">
            Your Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Track your journey to mastery, one quiz at a time.
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<AiOutlineStar className="w-6 h-6 text-[#28B463]" />}
            value={aggregateStats.correct}
            label="Questions Correct"
            iconBg="bg-[#28B463]/10"
          />
          <StatCard
            icon={<AiOutlineBook className="w-6 h-6 text-[#3498DB]" />}
            value={aggregateStats.total}
            label="Total Attempted"
            iconBg="bg-[#3498DB]/10"
          />
          <StatCard
            icon={<AiOutlineTrophy className="w-6 h-6 text-[#4169E1]" />}
            value={`${overallAccuracy}%`}
            label="Accuracy Rate"
            iconBg="bg-[#4169E1]/10"
          />
        </div>

        {/* Motivation Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4169E1] to-[#28B463] p-6 text-center shadow-lg">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <p className="relative text-white text-lg font-semibold">
            {overallAccuracy >= 80
              ? "🌟 Outstanding! You're crushing it!"
              : overallAccuracy >= 60
              ? "💪 Great progress! Keep pushing forward!"
              : aggregateStats.total === 0
              ? "🚀 Ready to start your learning journey?"
              : "📚 Practice makes perfect. You've got this!"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <ActionButton
            onClick={handleResetProgress}
            color="red"
            icon="🗑️"
            label="Reset All Progress"
          />
          <ActionButton
            onClick={handleExportProgress}
            color="blue"
            icon="📥"
            label="Export Progress"
          />
          <ActionButton
            onClick={() => document.getElementById("importProgressInput").click()}
            color="green"
            icon="📤"
            label="Import Progress"
          />
          <input
            id="importProgressInput"
            type="file"
            accept=".json"
            onChange={handleImportProgress}
            className="hidden"
          />
        </div>

        {/* Progress by Module */}
        <div className="space-y-10">
          <div className="flex items-center space-x-3">
            <div className="h-1 flex-1 bg-gradient-to-r from-[#4169E1] to-transparent rounded-full"></div>
            <h2 className="text-3xl font-bold text-[#3498DB]">Your Progress</h2>
            <div className="h-1 flex-1 bg-gradient-to-l from-[#4169E1] to-transparent rounded-full"></div>
          </div>

          {moduleStats.map((module, moduleIndex) => (
            <div
              key={module.moduleId}
              className="space-y-6 animate-fadeIn"
              style={{ animationDelay: `${moduleIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-[#4169E1] flex items-center space-x-2">
                <span className="w-2 h-8 bg-gradient-to-b from-[#4169E1] to-[#3498DB] rounded-full"></span>
                <span>{module.moduleName}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {module.weeks.map((week, weekIndex) => (
                  <WeekCard
                    key={week.weekId}
                    week={week}
                    moduleId={module.moduleId}
                    delay={weekIndex * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label, iconBg }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    <div className="flex items-center space-x-4">
      <div className={`${iconBg} p-3 rounded-lg`}>{icon}</div>
      <div className="flex-1">
        <div className="text-3xl font-bold text-gray-800">{value}</div>
        <div className="text-sm text-gray-500 font-medium">{label}</div>
      </div>
    </div>
  </div>
);

const ActionButton = ({ onClick, color, icon, label }) => {
  const colors = {
    red: "border-[#C0392B]/30 text-[#C0392B] bg-[#C0392B]/5 hover:bg-[#C0392B]/15",
    blue: "border-[#3498DB]/30 text-[#3498DB] bg-[#3498DB]/5 hover:bg-[#3498DB]/15",
    green: "border-[#28B463]/30 text-[#28B463] bg-[#28B463]/5 hover:bg-[#28B463]/15",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 
        hover:scale-105 hover:shadow-lg flex items-center space-x-2 ${colors[color]}`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

const WeekCard = ({ week, moduleId, delay }) => {
  const getProgressColor = (accuracy) => {
    if (accuracy >= 80) return "bg-gradient-to-r from-[#28B463] to-[#28B463]/80";
    if (accuracy >= 60) return "bg-gradient-to-r from-[#3498DB] to-[#4169E1]";
    if (accuracy >= 40) return "bg-gradient-to-r from-[#FFC300] to-[#E67E22]";
    return "bg-gradient-to-r from-[#C0392B] to-[#C0392B]/80";
  };

  const getBadgeColor = (accuracy) => {
    if (accuracy >= 80) return "bg-[#28B463]/20 text-[#28B463]";
    if (accuracy >= 60) return "bg-[#3498DB]/20 text-[#3498DB]";
    if (accuracy >= 40) return "bg-[#FFC300]/20 text-[#E67E22]";
    return "bg-[#C0392B]/20 text-[#C0392B]";
  };

  return (
    <div
      className="group relative p-6 rounded-2xl border-2 border-gray-200 bg-white 
        hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeInUp overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/5 to-[#3498DB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 space-y-4">
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-bold text-[#3498DB] group-hover:text-[#4169E1] transition-colors">
            {week.weekName}
          </h4>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(week.accuracy)}`}>
            {week.accuracy}%
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{week.stats.correct} / {week.stats.total} correct</span>
            <span>{week.completedQuizzes}/{week.totalQuizzes} quizzes</span>
          </div>

          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor(week.accuracy)} progress-bar-animated shadow-lg transition-all duration-1000 ease-out`}
              style={{ width: `${week.accuracy}%`, animationDelay: `${delay}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
            </div>
          </div>
        </div>

        <Link
          to={`/modules/${moduleId}/${week.weekId}`}
          className="inline-flex items-center space-x-2 text-[#4169E1] hover:text-[#3498DB] 
            font-semibold transition-all group-hover:translate-x-1"
          aria-label={`Go to ${week.weekName} quizzes`}
        >
          <span>{week.stats.total > 0 ? "Continue" : "Start"}</span>
          <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;