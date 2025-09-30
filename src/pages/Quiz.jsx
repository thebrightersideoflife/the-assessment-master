import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import QuizManager from "../components/Quiz/QuizManager";
import ErrorBoundary from "../components/UI/ErrorBoundary";
import { useStore } from "../store/useStore";
import { useQuiz } from "../hooks/useQuiz";
import { AiOutlineReload } from "react-icons/ai";
import Breadcrumb from "../components/UI/Breadcrumb";
import { modules } from "../data/modules";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Quiz = () => {
  const { moduleId, weekId } = useParams();
  const { resetQuiz, getQuizState, getAccuracy } = useStore();
  const { loading, error } = useQuiz(moduleId, weekId);
  const navigate = useNavigate();
  const module = modules.find((m) => m.id === moduleId);
  const week =
    module?.weeks.find((w) => w.id === weekId) ||
    module?.exams?.find((e) => e.id === weekId);
  const [showResetModal, setShowResetModal] = useState(false);
  const stats = getQuizState(moduleId, weekId).stats;

  const handleResetQuiz = () => {
    resetQuiz(moduleId, weekId);
    localStorage.removeItem(`quiz-progress-${moduleId}-${weekId}`);
    setShowResetModal(false);
    navigate("/");
    setTimeout(() => navigate(`/quizzes/module/${moduleId}/${weekId}`), 10);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !module || !week) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#C0392B]/30">
          <p className="text-xl text-[#C0392B] mb-4" aria-live="assertive">
            {error || "Quiz not found. Please select a valid module and week."}
          </p>
          <Link
            to="/modules"
            className="inline-block bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            aria-label="Back to modules"
          >
            Back to Modules
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Modules", path: "/modules" },
            { label: module.name, path: `/modules/${module.id}` },
            { label: week.name, path: `/modules/${module.id}/${week.id}` },
            { label: "Quiz" },
          ]}
        />

        {/* Quiz Header with Stats + Reset */}
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
              <div
                className="text-center"
                aria-label={`${stats.correct} correct answers`}
              >
                <div className="text-2xl font-bold text-[#FFC300]">
                  {stats.correct}
                </div>
                <div className="text-sm text-blue-200">Correct</div>
              </div>
              <div
                className="text-center"
                aria-label={`${stats.total} questions attempted`}
              >
                <div className="text-2xl font-bold text-[#FFC300]">
                  {stats.total}
                </div>
                <div className="text-sm text-blue-200">Total</div>
              </div>
              <div
                className="text-center"
                aria-label={`${getAccuracy(moduleId, weekId)}% accuracy`}
              >
                <div className="text-2xl font-bold text-[#FFC300]">
                  {getAccuracy(moduleId, weekId)}%
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
                Are you sure you want to reset the quiz? This will clear all
                your progress.
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
                  onClick={handleResetQuiz}
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
        <QuizManager moduleId={moduleId} weekId={weekId} />
      </div>
    </ErrorBoundary>
  );
};

export default Quiz;
