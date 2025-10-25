// src/components/Quiz/ExamQuestion.jsx
import React from 'react';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import TextRenderer from '../../utils/textRenderer';

/**
 * ExamQuestion - Displays question WITHOUT any feedback
 * - No correct/incorrect indicators
 * - No visual feedback states
 * - Just clean question presentation
 * - Supports optional images with zoom functionality
 * 
 * ✅ FIXED: Added overflow protection for long content
 * ✅ NEW: Added image display support
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

      {/* Optional Question Image with Zoom */}
      {question.image?.src && (
        <figure className="w-full flex flex-col items-center my-4">
          <Zoom>
            <img
              src={question.image.src}
              alt={question.image.alt || "Question image"}
              className="max-h-96 rounded-xl shadow-md hover:scale-[1.02] transition-transform object-contain cursor-zoom-in"
              loading="lazy"
            />
          </Zoom>
          {question.image.caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              {question.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Question Text with Overflow Protection */}
      <div className="text-lg text-gray-800 leading-relaxed w-full max-w-full overflow-x-auto overflow-y-hidden break-words">
        <div className="min-w-0">
          <TextRenderer content={question.text} />
        </div>
      </div>

      {/* Unit Requirement Notice */}
      {question.options?.requiredUnit && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-blue-700 font-semibold">ℹ️ Note:</span>
            <span className="text-blue-700">
              Please express your answer in{" "}
              <strong>{question.options.requiredUnit}</strong>
            </span>
          </div>
        </div>
      )}

      {/* Accepted Units Notice */}
      {!question.options?.requiredUnit &&
        question.options?.acceptedUnits &&
        question.options.acceptedUnits.length > 0 && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-blue-700 font-semibold">ℹ️ Note:</span>
              <span className="text-blue-800">
                Acceptable units:{" "}
                <strong>{question.options.acceptedUnits.join(", ")}</strong>
              </span>
            </div>
          </div>
        )}

      {/* Question Type Indicator */}
      <p className="text-sm text-gray-500 italic">
        {question.type === 'multiple-choice' ? 'Select one answer' : 'Enter your answer below'}
      </p>
    </div>
  );
};

export default ExamQuestion;