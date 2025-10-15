import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import { AiOutlineStar, AiOutlineBook, AiOutlineTrophy, AiOutlineFire } from "react-icons/ai";
import { modules } from "../data/modules";
import { exams } from "../data/exams";
import { chunkQuestions } from "../utils/chunkQuestions";
import { questions } from "../data/questions";

const Dashboard = () => {
  const {
    quizzes,
    exams: examStates,
    getExamState,
    getExamAttemptCount,
    resetExam,
    resetAllProgress,
    streaks,
    getWeekProgress,
  } = useStore();

  // Aggregate global stats (quizzes + exams)
  const aggregateStats = Object.values(quizzes).reduce(
    (acc, quiz) => ({
      correct: acc.correct + (quiz.stats?.correct || 0),
      total: acc.total + (quiz.stats?.total || 0),
    }),
    { correct: 0, total: 0 }
  );

  const examStats = Object.values(examStates).reduce(
    (acc, exam) => {
      if (exam.results) {
        return {
          correct: acc.correct + (exam.results.earnedPoints || 0),
          total: acc.total + (exam.results.totalPoints || 0),
        };
      }
      return acc;
    },
    { correct: 0, total: 0 }
  );

  const totalCorrect = aggregateStats.correct + examStats.correct;
  const totalAttempted = aggregateStats.total + examStats.total;
  const overallAccuracy =
    totalAttempted > 0
      ? Math.round((totalCorrect / totalAttempted) * 100)
      : 0;

  // Count completed exams
  const completedExams = Object.values(examStates).filter((e) => e.submitted).length;
  const totalExams = exams.length; // Use exams from data/exams.js

  // Get recent exam results (last 3 submitted exams)
  const recentExams = Object.entries(examStates)
    .filter(([_, exam]) => exam.submitted && exam.results)
    .sort((a, b) => b[1].results.submittedAt - a[1].results.submittedAt)
    .slice(0, 3)
    .map(([examId, exam]) => {
      const examData = exams.find((e) => e.id === examId);
      return {
        examId,
        examName: examData?.title || "Unknown Exam",
        percentage: exam.results.percentage,
        passed: exam.results.passed,
        attemptNumber: exam.results.attemptNumber,
        submittedAt: exam.results.submittedAt,
      };
    });

  // Export progress as JSON
  const handleExportProgress = () => {
    const data = JSON.stringify({ quizzes, exams: examStates }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `progress-${new Date().toISOString().split("T")[0]}.json`;
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
        useStore.setState({
          quizzes: data.quizzes || {},
          exams: data.exams || {},
        });
        alert("✅ Progress imported successfully!");
        window.location.reload();
      } catch (err) {
        console.error("Failed to import progress:", err);
        alert("❌ Invalid file format");
      }
    };
    reader.readAsText(file);
  };

  // Reset all progress
  const handleResetProgress = () => {
    if (window.confirm("⚠️ This will delete ALL quiz and exam progress. Are you sure?")) {
      resetAllProgress();
      window.location.reload();
    }
  };

  // Build per-module stats (weeks + exams)
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
        const progress = getWeekProgress(module.id, week.id, totalQuizzes);
        return {
          weekId: week.id,
          weekName: week.name,
          stats: { correct: progress.totalCorrect, total: progress.totalQuestions },
          accuracy: progress.overallAccuracy,
          totalQuizzes,
          completedQuizzes: progress.completedQuizzes,
        };
      }),
      exams: (exams.filter((e) => e.moduleId === module.id) || []).map((exam) => {
        const examState = getExamState(exam.id);
        const attemptCount = getExamAttemptCount(exam.id);
        return {
          examId: exam.id,
          examName: exam.title,
          duration: exam.duration,
          isCompleted: examState.submitted || false,
          percentage: examState.results?.percentage || 0,
          passed: examState.results?.passed || false,
          earnedPoints: examState.results?.earnedPoints || 0,
          totalPoints: examState.results?.totalPoints || exam.questions?.length || 0,
          attemptCount,
          inProgress: examState.startTime && !examState.submitted,
        };
      }),
    }));

  // Render math for any formulas
  useEffect(() => {
    import("../utils/mathRenderer").then(({ renderMath }) => {
      renderMath();
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#4169E1] to-[#3498DB] bg-clip-text text-transparent">
            Your Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Track your journey to mastery, one quiz and exam at a time.
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            icon={<AiOutlineStar className="w-6 h-6 text-[#28B463]" />}
            value={totalCorrect}
            label="Points Earned"
            iconBg="bg-[#28B463]/10"
          />
          <StatCard
            icon={<AiOutlineBook className="w-6 h-6 text-[#3498DB]" />}
            value={totalAttempted}
            label="Total Attempted"
            iconBg="bg-[#3498DB]/10"
          />
          <StatCard
            icon={<AiOutlineTrophy className="w-6 h-6 text-[#4169E1]" />}
            value={`${overallAccuracy}%`}
            label="Accuracy Rate"
            iconBg="bg-[#4169E1]/10"
          />
          <StatCard
            icon={<AiOutlineFire className="w-6 h-6 text-[#E67E22]" />}
            value={`${streaks.currentStreak} days`}
            label="Current Streak"
            iconBg="bg-[#E67E22]/10"
            subLabel={`Longest: ${streaks.longestStreak} days`}
          />
        </div>

        {/* Recent Exam Results */}
        {recentExams.length > 0 && (
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🏆 Recent Exam Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentExams.map((exam, index) => (
                <div
                  key={exam.examId}
                  className="p-4 rounded-lg border border-gray-200 bg-gray-50 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-lg font-semibold text-gray-800">{exam.examName}</h4>
                  <p className="text-sm text-gray-600">
                    Score: {exam.percentage}% ({exam.passed ? "Passed" : "Not Passed"})
                  </p>
                  <p className="text-sm text-gray-600">Attempt: {exam.attemptNumber}</p>
                  <p className="text-sm text-gray-500">
                    Submitted: {new Date(exam.submittedAt).toLocaleDateString()}
                  </p>
                  <Link
                    to={`/exam/${exam.examId}`}
                    className="mt-2 inline-flex items-center text-[#4169E1] hover:text-[#3498DB] font-semibold"
                  >
                    Review <span className="ml-1 text-lg">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exam Progress Summary */}
        {totalExams > 0 && (
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                📝 Exam Progress
              </h3>
              <span className="text-sm text-gray-600">
                {completedExams} / {totalExams} completed
              </span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#28B463] to-[#3498DB] transition-all duration-1000 ease-out"
                style={{ width: `${totalExams > 0 ? (completedExams / totalExams) * 100 : 0}%` }}
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
            {overallAccuracy >= 80
              ? "🌟 Outstanding! You're crushing it!"
              : overallAccuracy >= 60
              ? "💪 Great progress! Keep pushing forward!"
              : totalAttempted === 0
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

              {/* Exams Section */}
              {module.exams.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    📝 Exams
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.exams.map((exam, examIndex) => (
                      <ExamCard
                        key={exam.examId}
                        exam={exam}
                        moduleId={module.moduleId}
                        delay={examIndex * 50}
                        onRetake={() => {
                          if (window.confirm(`Retake ${exam.examName}? This will reset your current progress for this exam.`)) {
                            resetExam(exam.examId);
                            window.location.reload();
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Weeks Section */}
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  📅 Weekly Quizzes
                </h4>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label, iconBg, subLabel }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    <div className="flex items-center space-x-4">
      <div className={`${iconBg} p-3 rounded-lg`}>{icon}</div>
      <div className="flex-1">
        <div className="text-3xl font-bold text-gray-800">{value}</div>
        <div className="text-sm text-gray-500 font-medium">{label}</div>
        {subLabel && <div className="text-xs text-gray-400">{subLabel}</div>}
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

const ExamCard = ({ exam, moduleId, delay, onRetake }) => {
  const getStatusColor = () => {
    if (exam.inProgress) return "border-[#3498DB]/40 bg-[#3498DB]/5";
    if (!exam.isCompleted) return "border-gray-300 bg-gray-50";
    if (exam.passed) return "border-[#28B463]/40 bg-[#28B463]/5";
    return "border-[#E67E22]/40 bg-[#E67E22]/5";
  };
  const getStatusBadge = () => {
    if (exam.inProgress) {
      return <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">In Progress</span>;
    }
    if (!exam.isCompleted) {
      return <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">Not Started</span>;
    }
    if (exam.passed) {
      return <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#28B463]/20 text-[#28B463]">✓ Passed</span>;
    }
    return <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E67E22]/20 text-[#E67E22]">Review</span>;
  };
  return (
    <div
      className={`group relative p-5 rounded-xl border-2 ${getStatusColor()}
        hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 animate-fadeInUp`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h5 className="text-lg font-bold text-gray-800 group-hover:text-[#4169E1] transition-colors">
            {exam.examName}
          </h5>
          {getStatusBadge()}
        </div>
        <div className="text-sm text-gray-600">
          <p>Attempts: {exam.attemptCount}</p>
        </div>
        {exam.isCompleted && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Score:</span>
              <span className="font-semibold">{exam.percentage}%</span>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  exam.passed
                    ? "bg-gradient-to-r from-[#28B463] to-[#28B463]/80"
                    : "bg-gradient-to-r from-[#E67E22] to-[#E67E22]/80"
                } transition-all duration-1000 ease-out`}
                style={{ width: `${exam.percentage}%` }}
              />
            </div>
          </div>
        )}
        <div className="flex items-center space-x-3">
          <Link
            to={`/exam/${exam.examId}`}
            className="inline-flex items-center space-x-2 text-[#4169E1] hover:text-[#3498DB]
              font-semibold transition-all group-hover:translate-x-1 text-sm"
            aria-label={`${exam.inProgress ? "Continue" : exam.isCompleted ? "Review" : "Start"} ${exam.examName}`}
          >
            <span>{exam.inProgress ? "Continue" : exam.isCompleted ? "Review" : "Start Exam"}</span>
            <span className="text-lg">→</span>
          </Link>
          {exam.isCompleted && (
            <button
              onClick={onRetake}
              className="text-[#C0392B] hover:text-[#C0392B]/80 font-semibold text-sm"
              aria-label={`Retake ${exam.examName}`}
            >
              Retake
            </button>
          )}
        </div>
      </div>
    </div>
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