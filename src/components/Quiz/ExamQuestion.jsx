import React from 'react';
import TextRenderer from '../../utils/textRenderer';

/**
 * ExamQuestion - Displays question WITHOUT any feedback
 * - No correct/incorrect indicators
 * - No visual feedback states
 * - Just clean question presentation
 * 
 * ✅ FIXED: Added overflow protection for long content
 */
const ExamQuestion = ({ question, questionNumber, showPoints = true }) => {
  return (
    <div className="space-y-4 w-full">
      {/* Question Header */}
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-xl font-bold text-gray-800 flex-shrink-0">
          Question {questionNumber}
        </h3>
        {showPoints && (
          <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            {question.points || 1} {question.points === 1 ? 'point' : 'points'}
          </span>
        )}
      </div>

      {/* Question Text with Overflow Protection */}
      <div className="text-lg text-gray-800 leading-relaxed w-full max-w-full overflow-x-auto overflow-y-hidden break-words">
        <div className="min-w-0">
          <TextRenderer content={question.text} />
        </div>
      </div>

      {/* Question Type Indicator */}
      <p className="text-sm text-gray-500 italic">
        {question.type === 'multiple-choice' ? 'Select one answer' : 'Enter your answer below'}
      </p>
    </div>
  );
};

export default ExamQuestion;