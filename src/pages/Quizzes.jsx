// src/pages/Quizzes.jsx
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { questions } from "../data/questions";
import { modules } from "../data/modules";
import { chunkQuestions, QUIZ_CHUNK_SIZE } from "../utils/chunkQuestions";
import useStore from "../store/useStore";
import Breadcrumb from "../components/UI/Breadcrumb";

const Quizzes = () => {
  const { moduleId } = useParams();
  const { getQuizState, isModuleVisible } = useStore();

  const module = modules.find((m) => String(m.id) === String(moduleId));

  if (!module || (module.id && !isModuleVisible(module.id))) {
    return <Navigate to="/modules" replace />;
  }

  const parsedModuleId = module.id;

  const weekQuizData = module.weeks.map((week) => {
    const weekQuestions = questions.filter(
      (q) => q.moduleId === parsedModuleId && q.weekId === week.id
    );
    const questionChunks = chunkQuestions(weekQuestions, QUIZ_CHUNK_SIZE);

    const completedCount = questionChunks.reduce((count, _, idx) => {
      const quizState = getQuizState(parsedModuleId, week.id, idx);
      return count + (quizState.completed ? 1 : 0);
    }, 0);

    const weekProgress =
      questionChunks.length > 0
        ? Math.round((completedCount / questionChunks.length) * 100)
        : 0;

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

  const totalQuizzes = weekQuizData.reduce((sum, w) => sum + w.questionChunks.length, 0);
  const totalCompleted = weekQuizData.reduce((sum, w) => sum + w.completedCount, 0);
  const overallProgress = totalQuizzes > 0 ? Math.round((totalCompleted / totalQuizzes) * 100) : 0;

  const totalCorrect = weekQuizData.reduce((sum, w) => sum + w.totalCorrect, 0);
  const totalAnswered = weekQuizData.reduce((sum, w) => sum + w.totalAnswered, 0);
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 80) return "text-emerald-600";
    if (accuracy >= 60) return "text-blue-600";
    if (accuracy >= 40) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Quizzes", path: "/quizzes" },
            { label: module.name },
          ]}
        />

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            {module.name} Quizzes
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span>{totalQuizzes} quizzes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              <span>{overallProgress}% complete</span>
            </div>
            {totalAnswered > 0 && (
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  overallAccuracy >= 80 ? 'bg-emerald-500' : 
                  overallAccuracy >= 60 ? 'bg-blue-500' : 
                  overallAccuracy >= 40 ? 'bg-amber-500' : 'bg-red-500'
                }`}></div>
                <span className={getAccuracyColor(overallAccuracy)}>
                  {overallAccuracy}% accuracy
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Overall Progress */}
        {totalQuizzes > 0 && (
          <div className="relative">
            <div className="h-2 bg-white/60 backdrop-blur-sm rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 transition-all duration-700 relative overflow-hidden"
                style={{ width: `${overallProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
              </div>
            </div>
          </div>
        )}

        {/* Week Sections */}
        <div className="space-y-16">
          {weekQuizData.map(({ week, questionChunks, weekProgress, weekAccuracy, totalAnswered }) => {
            if (questionChunks.length === 0) return null;

            return (
              <div key={week.id} className="space-y-6">
                {/* Week Header */}
                <div className="flex items-baseline justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                      <h2 className="text-2xl font-light text-gray-900">
                        {week.name}
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 pl-4">
                      <span>{questionChunks.length} quiz{questionChunks.length !== 1 ? "zes" : ""}</span>
                      {totalAnswered > 0 && (
                        <>
                          <span className="text-gray-300">•</span>
                          <span className={`font-medium ${getAccuracyColor(weekAccuracy)}`}>
                            {weekAccuracy}% accuracy
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-2xl font-light text-gray-900">{weekProgress}%</div>
                      <div className="text-xs text-gray-500">complete</div>
                    </div>
                  </div>
                </div>

                {/* Quiz Grid - in White Container */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {questionChunks.map((chunk, idx) => {
                    const quizState = getQuizState(parsedModuleId, week.id, idx);
                    const isCompleted = quizState.completed || false;
                    const accuracy = quizState.stats.total > 0
                      ? Math.round((quizState.stats.correct / quizState.stats.total) * 100)
                      : 0;
                    const inProgress = quizState.stats.total > 0 && !isCompleted;

                    return (
                      <Link
                        key={idx}
                        to={`/quiz/${parsedModuleId}/${week.id}/${idx}`}
                        className="group relative p-6 bg-gray-50/50 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                      >
                        {/* Completion Badge */}
                        {isCompleted && (
                          <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium ${
                            accuracy >= 80 ? 'bg-emerald-100 text-emerald-700' :
                            accuracy >= 60 ? 'bg-blue-100 text-blue-700' :
                            accuracy >= 40 ? 'bg-amber-100 text-amber-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {accuracy}%
                          </div>
                        )}

                        {/* Quiz Number */}
                        <div className="flex items-start justify-between mb-4">
                          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Quiz {idx + 1}
                          </span>
                        </div>

                        {/* Question Count */}
                        <div className="text-sm text-gray-600 mb-6">
                          {chunk.length} question{chunk.length !== 1 ? "s" : ""}
                        </div>

                        {/* Status */}
                        <div className="flex items-center justify-between text-sm">
                          {isCompleted ? (
                            <>
                              <span className="text-emerald-600 font-medium">✓ Completed</span>
                              <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                Review <span className="text-lg">→</span>
                              </span>
                            </>
                          ) : inProgress ? (
                            <>
                              <span className="text-blue-600 font-medium">
                                {quizState.currentQuestionIndex}/{chunk.length}
                              </span>
                              <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                Continue <span className="text-lg">→</span>
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-gray-400">Not started</span>
                              <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                Start <span className="text-lg">→</span>
                              </span>
                            </>
                          )}
                        </div>

                        {/* Progress Indicator */}
                        {inProgress && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-xl overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
                              style={{
                                width: `${(quizState.currentQuestionIndex / chunk.length) * 100}%`,
                              }}
                            />
                          </div>
                        )}

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {totalQuizzes === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400">No quizzes available yet</p>
          </div>
        )}

        {/* Pro Tip Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200/60 rounded-xl p-6">
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