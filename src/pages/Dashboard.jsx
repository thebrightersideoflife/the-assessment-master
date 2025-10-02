// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";
import { AiOutlineStar, AiOutlineBook, AiOutlineTrophy } from "react-icons/ai";
import { modules } from "../data/modules";

const Dashboard = () => {
  const { quizzes, getQuizState, getAccuracy } = useStore();

  // Aggregate stats across all quizzes
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

  // Export progress as JSON file
  const handleExportProgress = () => {
    const data = JSON.stringify(quizzes);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quiz-progress.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import progress from JSON file
  const handleImportProgress = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        useStore.setState({ quizzes: data });
        alert("✅ Progress imported successfully!");
      } catch (err) {
        console.error("Failed to import progress:", err);
        alert("❌ Invalid file format");
      }
    };
    reader.readAsText(file);
  };

  // Reset all quizzes
  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress?")) {
      const newQuizzes = {};
      modules.forEach((module) => {
        if (!module.isVisible) return; // ✅ Skip hidden modules
        module.weeks.forEach((week) => {
          newQuizzes[`${module.id}-${week.id}`] = {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
          };
        });
        module.exams?.forEach((exam) => {
          newQuizzes[`${module.id}-${exam.id}`] = {
            currentQuestionIndex: 0,
            stats: { correct: 0, total: 0 },
          };
        });
      });
      useStore.setState({ quizzes: newQuizzes });
      localStorage.clear();
    }
  };

  // Build per-module stats, only for visible modules
  const moduleStats = modules
    .filter((module) => module.isVisible !== false) // ✅ Hide invisible modules
    .map((module) => ({
      moduleId: module.id,
      moduleName: module.name,
      weeks: module.weeks.map((week) => {
        const quizState = getQuizState(module.id, week.id);
        const stats = quizState.stats || { correct: 0, total: 0 };
        const accuracy = getAccuracy(module.id, week.id);
        return { weekId: week.id, weekName: week.name, stats, accuracy };
      }),
      exams:
        module.exams?.map((exam) => {
          const quizState = getQuizState(module.id, exam.id);
          const stats = quizState.stats || { correct: 0, total: 0 };
          const accuracy = getAccuracy(module.id, exam.id);
          return { examId: exam.id, examName: exam.name, stats, accuracy };
        }) || [],
    }));

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#4169E1] mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Track your quiz progress and performance over time.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard
          icon={<AiOutlineStar className="w-6 h-6 text-[#28B463]" />}
          value={aggregateStats.correct}
          label="Questions Correct"
          gradient="from-[#28B463]/10 to-[#28B463]/20"
        />
        <StatCard
          icon={<AiOutlineBook className="w-6 h-6 text-[#3498DB]" />}
          value={aggregateStats.total}
          label="Total Attempted"
          gradient="from-[#3498DB]/10 to-[#3498DB]/20"
        />
        <StatCard
          icon={<AiOutlineTrophy className="w-6 h-6 text-[#4169E1]" />}
          value={`${overallAccuracy}%`}
          label="Accuracy Rate"
          gradient="from-[#4169E1]/10 to-[#7b1fa2]/20"
        />
      </div>

      {/* Motivation message */}
      <div className="text-center text-gray-600 text-sm">
        {overallAccuracy >= 80
          ? "🌟 Excellent performance! Keep it up!"
          : overallAccuracy >= 60
          ? "📚 Good work — there’s room to improve."
          : aggregateStats.total === 0
          ? "Start taking quizzes to see your stats!"
          : "💪 Keep practicing to improve your scores!"}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <button
          onClick={handleResetProgress}
          className="px-6 py-2 rounded-lg font-semibold border border-[#C0392B]/30 text-[#C0392B] bg-[#C0392B]/5 hover:bg-[#C0392B]/10 transition-all"
        >
          Reset Progress
        </button>
        <button
          onClick={handleExportProgress}
          className="px-6 py-2 rounded-lg font-semibold border border-[#3498DB]/30 text-[#3498DB] bg-[#3498DB]/5 hover:bg-[#3498DB]/10 transition-all"
        >
          Export Progress
        </button>
        <button
            onClick={() => document.getElementById("importProgressInput").click()}
            className="px-6 py-2 rounded-lg font-semibold border border-[#28B463]/30 text-[#28B463] bg-[#28B463]/5 hover:bg-[#28B463]/10 transition-all"
          >
            Import Progress
          </button>
          <input
            id="importProgressInput"
            type="file"
            accept=".json"
            onChange={handleImportProgress}
            className="hidden"
          />
      </div>

      {/* Progress by Module */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-[#3498DB]">
          Progress by Module
        </h2>
        {moduleStats.map((module) => (
          <div key={module.moduleId} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4169E1]">
              {module.moduleName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {module.weeks.map((week) => (
                <div
                  key={week.weekId}
                  className="p-4 rounded-lg border border-[#3498DB]/30 bg-gradient-to-br from-[#3498DB]/5 to-[#4169E1]/10"
                >
                  <h4 className="text-lg font-medium text-[#3498DB] mb-1">
                    {week.weekName}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {week.stats.correct} / {week.stats.total} correct (
                    {week.accuracy}%)
                  </p>
                  <Link
                    to={`/quizzes/module/${module.moduleId}/${week.weekId}`}
                    className="mt-2 inline-block text-sm text-[#4169E1] hover:text-[#3498DB] transition-colors"
                    aria-label={`Go to ${week.weekName} quiz`}
                  >
                    {week.stats.total > 0 ? "Continue" : "Start"} Quiz
                  </Link>
                </div>
              ))}
              {module.exams.map((exam) => (
                <div
                  key={exam.examId}
                  className="p-4 rounded-lg border border-[#3498DB]/30 bg-gradient-to-br from-[#3498DB]/5 to-[#4169E1]/10"
                >
                  <h4 className="text-lg font-medium text-[#3498DB] mb-1">
                    {exam.examName}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {exam.stats.correct} / {exam.stats.total} correct (
                    {exam.accuracy}%)
                  </p>
                  <Link
                    to={`/quizzes/module/${module.moduleId}/${exam.examId}`}
                    className="mt-2 inline-block text-sm text-[#4169E1] hover:text-[#3498DB] transition-colors"
                    aria-label={`Go to ${exam.examName} exam`}
                  >
                    {exam.stats.total > 0 ? "Continue" : "Start"} Exam
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Reusable StatCard Component
const StatCard = ({ icon, value, label, gradient }) => (
  <div
    className={`rounded-xl p-6 text-center border shadow-sm bg-gradient-to-br ${gradient} border-gray-200 hover:shadow-md transition-transform hover:-translate-y-1`}
  >
    <div className="flex justify-center mb-2">{icon}</div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

export default Dashboard;
