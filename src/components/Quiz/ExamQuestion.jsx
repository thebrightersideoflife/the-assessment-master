// src/components/Quiz/ExamQuestion.jsx
import React from 'react';
import TextRenderer from '../../utils/textRenderer';

/**
 * ExamQuestion - Displays question WITHOUT any feedback
 * - No correct/incorrect indicators
 * - No visual feedback states
 * - Just clean question presentation
 */
const ExamQuestion = ({ question, questionNumber, showPoints = true }) => {
  return (
    <div className="space-y-4">
      {/* Question Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          Question {questionNumber}
        </h3>
        {showPoints && (
          <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {question.points || 1} {question.points === 1 ? 'point' : 'points'}
          </span>
        )}
      </div>

      {/* Question Text */}
      <div className="text-lg text-gray-800 leading-relaxed">
        <TextRenderer content={question.text} />
      </div>

      {/* Question Type Indicator */}
      <p className="text-sm text-gray-500 italic">
        {question.type === 'multiple-choice' ? 'Select one answer' : 'Enter your answer below'}
      </p>
    </div>
  );
};

export default ExamQuestion;