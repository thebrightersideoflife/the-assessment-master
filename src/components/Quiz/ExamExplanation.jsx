// src/components/Quiz/ExamExplanation.jsx
import React from 'react';
import TextRenderer from '../../utils/textRenderer';

/**
 * ExamExplanation - Shows explanation with correctness indicator
 * Only used in the results view after exam submission
 */
const ExamExplanation = ({ question, userAnswer, isCorrect }) => {
  return (
    <div className={`p-4 rounded-lg border-2 ${
      isCorrect 
        ? 'bg-green-50 border-green-200' 
        : 'bg-red-50 border-red-200'
    }`}>
      {/* User's Answer */}
      <div className="mb-3">
        <p className="text-sm font-semibold text-gray-700 mb-1">Your Answer:</p>
        <p className={`font-mono text-lg ${
          isCorrect ? 'text-green-700' : 'text-red-700'
        }`}>
          {userAnswer || '(No answer provided)'}
        </p>
      </div>

      {/* Correct Answer (if wrong) */}
      {!isCorrect && (
        <div className="mb-3">
          <p className="text-sm font-semibold text-gray-700 mb-1">Correct Answer:</p>
          <p className="font-mono text-lg text-green-700">
            {question.correctAnswers[0]}
          </p>
        </div>
      )}

      {/* Explanation */}
      {question.explanation && (
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <span className="mr-2">💡</span> Explanation:
          </p>
          <div className="text-sm text-gray-700 prose prose-sm max-w-none">
            <TextRenderer content={question.explanation} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamExplanation;