// src/components/Quiz/ExamNavigation.jsx
import React from 'react';

const ExamNavigation = ({
  currentSectionIndex,
  currentQuestionIndex,
  totalSections,
  sectionQuestionsCount,
  onPrevious,
  onNext,
  onReview,
  onExit,
  isFirstQuestion,
  isLastQuestion
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        {/* Left Side - Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
          >
            ← Previous
          </button>
          
          <button
            onClick={onNext}
            disabled={isLastQuestion}
            className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:transform-none"
          >
            Next →
          </button>
        </div>

        {/* Right Side - Review & Exit Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onReview}
            className="px-6 py-3 bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            📝 Review Answers
          </button>
          
          <button
            onClick={onExit}
            className="px-6 py-3 bg-red-100 text-red-700 rounded-xl font-semibold hover:bg-red-200 transition-all"
          >
            Exit Exam
          </button>
        </div>
      </div>

      {/* Progress Info */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Section {currentSectionIndex + 1} of {totalSections} • 
          Question {currentQuestionIndex + 1} of {sectionQuestionsCount} in this section
        </p>
      </div>
    </div>
  );
};

export default ExamNavigation;