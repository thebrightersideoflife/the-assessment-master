// src/components/Quiz/Exam/ExamHeader.jsx
import React from 'react';

/**
 * ExamHeader
 * 
 * Displays exam title, timer, progress bar, and answered count
 * Shown during active exam mode
 * 
 * Enhanced with:
 * - Critical timer warning (< 5 minutes)
 * - Animated pulse effect when time is low
 */
const ExamHeader = ({
  exam,
  timeLeft,
  formatTime,
  currentQuestionIndex,
  totalQuestions,
  answeredCount,
  currentSection,
  isTimerCritical, // NEW: Boolean flag for timer warning
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {exam.title}
          </h2>
          <p className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {totalQuestions}
            {currentSection && ` • Section ${currentSection.sectionNumber || ''} of ${exam.sections.length}`}
          </p>
        </div>
        
        <div className="text-right">
          {exam.timeLimit && (
            <>
              <div className={`text-2xl font-bold mb-1 transition-all ${
                isTimerCritical 
                  ? 'text-red-600 animate-pulse' 
                  : 'text-gray-800'
              }`}>
                ⏱️ {formatTime}
              </div>
              
              {/* Warning message when critical */}
              {isTimerCritical && (
                <p className="text-xs font-semibold text-red-600 animate-pulse">
                  ⚠️ TIME RUNNING OUT!
                </p>
              )}
            </>
          )}
          
          <p className="text-sm text-gray-600">
            {answeredCount} / {totalQuestions} answered
          </p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            answeredCount === totalQuestions 
              ? 'bg-green-500' 
              : 'bg-[#4169E1]'
          }`}
          style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
        />
      </div>
      
      {/* Timer warning banner */}
      {isTimerCritical && (
        <div className="mt-4 bg-red-50 border-2 border-red-300 rounded-lg p-3 animate-pulse">
          <p className="text-sm font-bold text-red-800 text-center">
            🚨 Less than 5 minutes remaining! Please review and submit soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default ExamHeader;