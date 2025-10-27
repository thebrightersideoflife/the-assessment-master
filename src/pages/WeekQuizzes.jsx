import React from "react";
import { Link } from "react-router-dom";
import { questions } from "../data/questions";
import { chunkQuestions, QUIZ_CHUNK_SIZE } from "../utils/chunkQuestions"; // ✅ Global constant
import useStore from "../store/useStore";

const WeekQuizzes = ({ moduleId, weekId }) => {
  const { getQuizState } = useStore();

  const weekQuestions = questions.filter(
    (q) => q.moduleId === moduleId && q.weekId === weekId
  );

  // ✅ Use global chunk size
  const questionChunks = chunkQuestions(weekQuestions, QUIZ_CHUNK_SIZE);

  // ✅ Empty state — no quizzes found
  if (!questionChunks.length) {
    return (
      <div className="p-6 text-center bg-white rounded-xl shadow-lg border border-gray-200">
        <p className="text-lg text-gray-700 font-medium mb-2">
          No quizzes available for this week (yet😉).
        </p>
        <p className="text-sm text-gray-500">
          📚 Review the week’s material before attempting quizzes.
        </p>
      </div>
    );
  }

  // ✅ Compute overall progress
  const completedCount = questionChunks.reduce((count, _, idx) => {
    const quizState = getQuizState(moduleId, weekId, idx);
    return count + (quizState.completed ? 1 : 0);
  }, 0);

  const overallProgress = Math.round(
    (completedCount / questionChunks.length) * 100
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4169E1] to-[#3498DB] rounded-xl p-6 text-white shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Week {weekId} Quizzes
            </h2>
            <p className="text-sm opacity-90">
              Complete all {questionChunks.length} quiz
              {questionChunks.length !== 1 ? "zes" : ""} ({weekQuestions.length} total questions)
            </p>
          </div>

          {/* ✅ Progress Summary */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div
              className="text-3xl font-bold"
              aria-live="polite"
              aria-label={`Overall progress ${overallProgress}%`}
            >
              {overallProgress}%
            </div>
            <div className="text-xs opacity-90">Progress</div>
            <div className="text-sm mt-1">
              {completedCount}/{questionChunks.length} completed
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questionChunks.map((chunk, idx) => {
          const quizState = getQuizState(moduleId, weekId, idx);
          const isCompleted = quizState.completed || false;
          const accuracy =
            quizState.stats.total > 0
              ? Math.round(
                  (quizState.stats.correct / quizState.stats.total) * 100
                )
              : 0;
          const isPartial = chunk.length < QUIZ_CHUNK_SIZE;

          // ✅ Badge color logic
          let badgeColor = "bg-gray-400";
          if (isCompleted) {
            if (accuracy >= 90) badgeColor = "bg-[#28B463]";
            else if (accuracy >= 70) badgeColor = "bg-[#E67E22]";
          }

          return (
            <Link
              key={idx}
              to={`/quiz/${moduleId}/${weekId}/${idx}`}
              aria-label={`Start Quiz ${idx + 1} for Week ${weekId}`}
              className={`relative p-6 rounded-xl shadow-lg border-2 transition-all duration-300
                hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-[#4169E1]
                ${
                  isCompleted
                    ? "bg-gradient-to-br from-[#28B463]/10 to-[#3498DB]/10 border-[#28B463]/30"
                    : "bg-white border-[#3498DB]/30 hover:border-[#3498DB]"
                }`}
            >
              {/* ✅ Completion Badge */}
              {isCompleted && (
                <div
                  className={`absolute top-3 right-3 ${badgeColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}
                >
                  {accuracy}%
                </div>
              )}

              {/* ✅ Title */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#4169E1]">
                  Quiz {idx + 1}
                </h3>
                {isCompleted && (
                  <span className="text-2xl" aria-hidden="true">
                    ✓
                  </span>
                )}
              </div>

              {/* ✅ Question Count */}
              <p className="text-sm text-gray-600 mb-1">
                {chunk.length} question{chunk.length !== 1 ? "s" : ""}
              </p>

              {/* ✅ Partial Quiz Indicator */}
              {isPartial && (
                <p className="text-xs text-[#E67E22] font-semibold mb-2">
                  Final Quiz
                </p>
              )}

              {/* ✅ Progress Bar */}
              {quizState.stats.total > 0 && !isCompleted && (
                <div className="mt-3" aria-live="polite">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>In Progress</span>
                    <span>
                      {quizState.currentQuestionIndex}/{chunk.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#3498DB] h-2 rounded-full transition-all"
                      style={{
                        width: `${
                          (quizState.currentQuestionIndex / chunk.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* ✅ Completed Status */}
              {isCompleted && (
                <div
                  className="mt-3 flex items-center gap-2"
                  aria-live="polite"
                >
                  <span className="text-xs text-[#28B463] font-semibold">
                    Completed
                  </span>
                  <span className="text-xs text-gray-500">
                    {quizState.stats.correct}/{quizState.stats.total} correct
                  </span>
                </div>
              )}

              {/* ✅ Not Started */}
              {quizState.stats.total === 0 && (
                <div className="mt-3 text-xs text-gray-500">
                  Not started
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* ✅ Info Banner */}
      <div className="bg-[#FFC300]/10 border border-[#FFC300]/30 rounded-xl p-4">
        <p className="text-sm text-gray-700">
          💡 <strong>Tip:</strong> Each quiz contains up to {QUIZ_CHUNK_SIZE} questions.
          Complete them in order for the best learning experience!
        </p>
      </div>
    </div>
  );
};

export default WeekQuizzes;
