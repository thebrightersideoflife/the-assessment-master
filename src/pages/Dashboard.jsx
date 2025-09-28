import React from 'react';
import { useStore } from '../store/useStore';
import { AiOutlineStar, AiOutlineBook, AiOutlineTrophy } from 'react-icons/ai';
import { questions } from '../data/questions';
import { modules } from '../data/modules';

const Dashboard = () => {
  const { stats, getAccuracy, resetQuiz } = useStore();
  const accuracy = getAccuracy();

  // ✅ Export progress as JSON file
  const handleExportProgress = () => {
    const data = JSON.stringify(useStore.getState().quizzes);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quiz-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // ✅ Import progress from JSON file
  const handleImportProgress = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        useStore.setState({ quizzes: data });
        alert('Progress imported successfully ✅');
      } catch (err) {
        console.error('Failed to import progress:', err);
        alert('Invalid file format ❌');
      }
    };
    reader.readAsText(file);
  };

  // Group stats by module and week (simplified placeholder)
  const moduleStats = modules.map((module) => ({
    moduleId: module.id,
    moduleName: module.name,
    weeks: module.weeks.map((week) => {
      const weekQuestions = questions.filter(
        (q) => q.moduleId === module.id && q.weekId === week.id
      );
      const weekStats = {
        correct: stats.correct, // Replace with per-week tracking if available
        total: stats.total,
        accuracy: getAccuracy(),
      };
      return { weekId: week.id, weekName: week.name, stats: weekStats };
    }),
  }));

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress?')) {
      resetQuiz();
      localStorage.clear();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <h2
          className="text-3xl font-bold text-[#4169E1] mb-8 text-center"
          id="dashboard-title"
        >
          Your Dashboard
        </h2>

        {/* Top Stats Summary */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="region"
          aria-labelledby="dashboard-title"
        >
          <div
            className="bg-gradient-to-br from-[#28B463]/10 to-[#28B463]/20 p-6 rounded-xl text-center border border-[#28B463]/30"
            aria-label={`${stats.correct} questions correct`}
          >
            <div className="text-3xl font-bold text-[#28B463] mb-2">
              {stats.correct}
            </div>
            <div className="text-gray-700">Questions Correct</div>
          </div>

          <div
            className="bg-gradient-to-br from-[#3498DB]/10 to-[#3498DB]/20 p-6 rounded-xl text-center border border-[#3498DB]/30"
            aria-label={`${stats.total} questions attempted`}
          >
            <div className="text-3xl font-bold text-[#3498DB] mb-2">
              {stats.total}
            </div>
            <div className="text-gray-700">Total Attempted</div>
          </div>

          <div
            className="bg-gradient-to-br from-[#4169E1]/10 to-[#7b1fa2]/20 p-6 rounded-xl text-center border border-[#4169E1]/30"
            aria-label={`${accuracy}% accuracy rate`}
          >
            <div className="text-3xl font-bold text-[#4169E1] mb-2">
              {accuracy}%
            </div>
            <div className="text-gray-700">Accuracy Rate</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-y-4" aria-live="polite">
          <p className="text-gray-600 mb-4">
            {accuracy >= 80
              ? 'Excellent performance! Keep it up! 🌟'
              : accuracy >= 60
              ? 'Good work! Room for improvement 📚'
              : stats.total === 0
              ? 'Start taking quizzes to see your stats!'
              : 'Keep practicing to improve your scores! 💪'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleResetProgress}
              className="bg-gradient-to-r from-[#C0392B]/20 to-[#E67E22]/20 text-[#C0392B] px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all"
              aria-label="Reset all progress"
            >
              Reset All Progress
            </button>

            <button
              onClick={handleExportProgress}
              className="bg-gradient-to-r from-[#3498DB]/20 to-[#4169E1]/20 text-[#3498DB] px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all"
              aria-label="Export progress as JSON"
            >
              Export Progress
            </button>

            <label className="cursor-pointer bg-gradient-to-r from-[#28B463]/20 to-[#3498DB]/20 text-[#28B463] px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all">
              Import Progress
              <input
                type="file"
                accept=".json"
                onChange={handleImportProgress}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Module/Week Breakdown */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#3498DB] mb-6">
            Progress by Module
          </h3>
          {moduleStats.map((module) => (
            <div key={module.moduleId} className="mb-8">
              <h4 className="text-xl font-semibold text-[#4169E1] mb-4">
                {module.moduleName}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.weeks.map((week) => (
                  <div
                    key={week.weekId}
                    className="bg-gradient-to-br from-[#3498DB]/10 to-[#4169E1]/20 p-4 rounded-xl border border-[#3498DB]/30"
                  >
                    <h5 className="text-lg font-medium text-[#3498DB]">
                      {week.weekName}
                    </h5>
                    <p className="text-gray-600">
                      Correct: {week.stats.correct} / {week.stats.total} (
                      {week.stats.accuracy}%)
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
