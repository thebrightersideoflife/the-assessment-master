import React from 'react';
import TextRenderer from '../../utils/textRenderer';

/**
 * ExamExplanation - Shows explanation with correctness indicator
 * Only used in the results view after exam submission
 * 
 * ✅ FIXED: Added overflow protection for long content
 */
const ExamExplanation = ({ question, userAnswer, isCorrect }) => {
  return (
    <div className={`p-4 rounded-lg border-2 w-full max-w-full ${
      isCorrect 
        ? 'bg-green-50 border-green-200' 
        : 'bg-red-50 border-red-200'
    }`}>
      {/* User's Answer */}
      <div className="mb-3 w-full">
        <p className="text-sm font-semibold text-gray-700 mb-1">Your Answer:</p>
        <div className={`font-mono text-lg break-words overflow-x-auto overflow-y-hidden ${
          isCorrect ? 'text-green-700' : 'text-red-700'
        }`}>
          <div className="min-w-0 max-w-full">
            {userAnswer || '(No answer provided)'}
          </div>
        </div>
      </div>

      {/* Correct Answer (if wrong) */}
      {!isCorrect && (
        <div className="mb-3 w-full">
          <p className="text-sm font-semibold text-gray-700 mb-1">Correct Answer:</p>
          <div className="font-mono text-lg text-green-700 break-words overflow-x-auto overflow-y-hidden">
            <div className="min-w-0 max-w-full">
              {Array.isArray(question.correctAnswers) 
                ? question.correctAnswers[0] 
                : question.correctAnswers}
            </div>
          </div>
          {/* Show all accepted forms if multiple */}
          {Array.isArray(question.correctAnswers) && question.correctAnswers.length > 1 && (
            <div className="text-xs text-gray-500 mt-1 break-words">
              <span className="font-semibold">Other accepted forms:</span>
              <div className="mt-1 space-y-1">
                {question.correctAnswers.slice(1).map((answer, idx) => (
                  <div key={idx} className="font-mono bg-white/50 px-2 py-1 rounded">
                    {answer}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Explanation */}
      {question.explanation && (
        <div className="mt-4 pt-4 border-t border-gray-300 w-full">
          <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <span className="mr-2">💡</span> Explanation:
          </p>
          <div className="text-sm text-gray-700 prose prose-sm max-w-none break-words overflow-x-auto overflow-y-hidden">
            <div className="min-w-0">
              <TextRenderer content={question.explanation} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamExplanation;