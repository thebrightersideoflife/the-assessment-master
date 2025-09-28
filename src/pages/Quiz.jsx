import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizManager from '../components/Quiz/QuizManager';
import { useStore } from '../store/useStore';
import { AiOutlineReload } from 'react-icons/ai';
import Breadcrumb from '../components/UI/Breadcrumb';
import { modules } from '../data/modules';

const Quiz = () => {
  const { moduleId, weekId } = useParams();
  const { resetQuiz, stats, getAccuracy } = useStore();
  const navigate = useNavigate();
  const module = modules.find((m) => m.id === moduleId);
  const week = module?.weeks.find((w) => w.id === weekId);
  const [showResetModal, setShowResetModal] = React.useState(false);

  const handleResetQuiz = () => {
    resetQuiz();
    localStorage.removeItem(`quiz-progress-${moduleId}-${weekId}`);
    navigate('/');
    setTimeout(() => navigate(`/quizzes/module/${moduleId}/${weekId}`), 10);
  };

  if (!module || !week) {
    return <div className="text-center text-[#3498DB]">Loading quiz...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Modules', path: '/modules' },
          { label: module.id, path: `/modules/${module.id}` },
          { label: week.name, path: `/modules/${module.id}/${week.id}` },
          { label: 'Quiz' },
        ]}
      />

      {/* Quiz Header with Stats and Reset */}
      <div className="bg-gradient-to-r from-[#4169E1] to-[#3498DB] rounded-2xl p-6 text-white shadow-2xl border border-[#FFC300]/30">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">{week.name} Quiz</h2>
            <p className="text-blue-100">
              Test your knowledge with interactive math problems
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center space-x-6">
            <div className="text-center" aria-label={`${stats.correct} correct answers`}>
              <div className="text-2xl font-bold text-[#FFC300]">
                {stats.correct}
              </div>
              <div className="text-sm text-blue-200">Correct</div>
            </div>
            <div className="text-center" aria-label={`${stats.total} questions attempted`}>
              <div className="text-2xl font-bold text-[#FFC300]">
                {stats.total}
              </div>
              <div className="text-sm text-blue-200">Total</div>
            </div>
            <div className="text-center" aria-label={`${getAccuracy()}% accuracy`}>
              <div className="text-2xl font-bold text-[#FFC300]">
                {getAccuracy()}%
              </div>
              <div className="text-sm text-blue-200">Accuracy</div>
            </div>

            <button
              onClick={() => setShowResetModal(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#ad1457]/20 to-[#E67E22]/20 hover:from-[#880e4f]/30 hover:to-[#E67E22]/30 rounded-xl transition-all font-semibold backdrop-blur-sm border border-[#ffffff]/50"
              aria-label="Reset quiz"
            >
              <AiOutlineReload className="w-5 h-5" />
              <span>Reset Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-modal-title"
        >
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3
              id="reset-modal-title"
              className="text-xl font-semibold text-[#4169E1] mb-4"
            >
              Confirm Reset
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to reset the quiz? This will clear all your
              progress.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
                aria-label="Cancel reset"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleResetQuiz();
                  setShowResetModal(false);
                }}
                className="px-4 py-2 bg-[#C0392B] text-white rounded-lg hover:bg-[#E67E22]"
                aria-label="Confirm reset"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Content */}
      <QuizManager />
    </div>
  );
};

export default Quiz;