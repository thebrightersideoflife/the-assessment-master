// src/components/Quiz/Exam/ExamReviewScreen.jsx
import React from 'react';

/**
 * ExamReviewScreen
 * 
 * Full-page review screen with grid navigation
 * Allows students to check all answers before final submission
 * Clickable grid to jump to specific questions
 */
const ExamReviewScreen = ({
  exam,
  questions,
  userAnswers,
  jumpToQuestion,
  handleBack,
  handleConfirmSubmit,
}) => {
  const answeredQuestions = Object.keys(userAnswers).filter(qId => {
    const answer = userAnswers[qId];
    return answer && answer.toString().trim() !== '';
  });
  const unansweredCount = questions.length - answeredQuestions.length;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          📝 Review Your Answers
        </h2>

        {/* Progress Summary */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-lg font-semibold text-gray-800">
            Progress: {answeredQuestions.length} / {questions.length} questions answered
          </p>
          {unansweredCount > 0 && (
            <p className="text-sm text-orange-600 mt-2">
              ⚠️ You have {unansweredCount} unanswered question(s)
            </p>
          )}
        </div>

        {/* Grid Navigation - Section by Section */}
        {exam.sections && exam.sections.length > 0 ? (
          exam.sections.map((section, sectionIndex) => {
            const sectionQs = questions.filter(q => q.sectionId === section.id);
            const sectionAnswered = sectionQs.filter(q => {
              const ans = userAnswers[q.id];
              return ans && ans.toString().trim() !== '';
            }).length;

            return (
              <div key={section.id} className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {sectionAnswered} / {sectionQs.length} answered
                </p>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
                  {sectionQs.map((q) => {
                    const isAnswered = userAnswers[q.id] && userAnswers[q.id].toString().trim() !== '';
                    const globalIndex = questions.indexOf(q);

                    return (
                      <button
                        key={q.id}
                        onClick={() => jumpToQuestion(sectionIndex, sectionQs.indexOf(q))}
                        className={`p-3 rounded-lg border-2 font-semibold transition-all hover:scale-105 ${
                          isAnswered
                            ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100'
                            : 'bg-gray-50 border-gray-300 text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        {q.questionNumber || globalIndex + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          // Simple grid if no sections
          <div className="mb-8">
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
              {questions.map((q, index) => {
                const isAnswered = userAnswers[q.id] && userAnswers[q.id].toString().trim() !== '';

                return (
                  <button
                    key={q.id}
                    onClick={() => jumpToQuestion(0, index)}
                    className={`p-3 rounded-lg border-2 font-semibold transition-all hover:scale-105 ${
                      isAnswered
                        ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100'
                        : 'bg-gray-50 border-gray-300 text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {q.questionNumber || index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm font-semibold text-gray-700 mb-2">Legend:</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-50 border-2 border-green-300 rounded"></div>
              <span className="text-gray-600">Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-50 border-2 border-gray-300 rounded"></div>
              <span className="text-gray-600">Not Answered</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <button
            onClick={handleBack}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
          >
            ← Continue Exam
          </button>
          <button
            onClick={() => {
              if (unansweredCount > 0) {
                const confirmSubmit = window.confirm(
                  `⚠️ You have ${unansweredCount} unanswered question(s).\n\nAre you sure you want to submit?`
                );
                if (confirmSubmit) {
                  handleConfirmSubmit();
                }
              } else {
                handleConfirmSubmit();
              }
            }}
            className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Submit Exam ✓
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamReviewScreen;