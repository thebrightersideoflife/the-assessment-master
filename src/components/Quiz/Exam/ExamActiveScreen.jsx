// src/components/Quiz/Exam/ExamActiveScreen.jsx
import React from 'react';
import ExamHeader from './ExamHeader';
import ExamQuestion from '../ExamQuestion';
import ExamAnswerInput from '../ExamAnswerInput';

/**
 * ExamActiveScreen
 * 
 * Main exam screen with:
 * - Header with timer and progress
 * - Current question display
 * - Answer input
 * - Confirm Answer button
 * - Navigation (Previous/Next)
 * - Review Answers button
 * - Exit Exam button
 */
const ExamActiveScreen = ({
  exam,
  questions,
  currentQuestion,
  currentQuestionIndex,
  currentAnswer,
  timeLeft,
  formatTime,
  isTimerCritical, // NEW: Timer warning flag
  handleAnswerChange,
  handleNext,
  handlePrev,
  handleReviewClick,
  handleConfirmAnswer,
  handleExit,
  showConfirmationMessage,
  userAnswers,
}) => {
  const currentSection = exam.sections?.find(s => s.id === currentQuestion?.sectionId);
  
  const answeredCount = Object.keys(userAnswers).filter(qId => {
    const answer = userAnswers[qId];
    return answer && answer.toString().trim() !== '';
  }).length;

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasAnswerContent = currentAnswer && currentAnswer.toString().trim() !== '';

  return (
    <>
      {/* Header with Timer and Progress */}
      <ExamHeader
        exam={exam}
        timeLeft={timeLeft}
        formatTime={formatTime}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        answeredCount={answeredCount}
        currentSection={currentSection}
        isTimerCritical={isTimerCritical}
      />

      {/* Section Information Card */}
      {currentSection && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {currentSection.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {currentSection.description}
          </p>
          {currentSection.instructions && (
            <p className="text-sm text-blue-700 italic">
              📌 {currentSection.instructions}
            </p>
          )}
        </div>
      )}

      {/* Question Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <ExamQuestion
          question={currentQuestion}
          questionNumber={currentQuestion?.questionNumber || currentQuestionIndex + 1}
          showPoints={true}
        />

        {/* Answer Input */}
        <div className="mt-6">
          <ExamAnswerInput
            question={currentQuestion}
            value={currentAnswer}
            onChange={handleAnswerChange}
          />
        </div>

        {/* Confirm Answer Button */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handleConfirmAnswer}
            disabled={!hasAnswerContent}
            className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
              hasAnswerContent
                ? 'bg-gradient-to-r from-[#28B463] to-[#27AE60] text-white hover:from-[#27AE60] hover:to-[#229954]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Confirm Answer
          </button>
          {showConfirmationMessage && (
            <div className="flex items-center gap-2 text-green-700 animate-fade-in">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Answer recorded!</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons (Top) */}
      <div className="flex justify-between items-center gap-4 mb-4">
        <button
          onClick={handlePrev}
          disabled={isFirstQuestion}
          className={`px-5 py-3 rounded-xl font-semibold shadow transition-all ${
            isFirstQuestion
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={isLastQuestion}
          className={`px-5 py-3 rounded-xl font-semibold shadow transition-all ${
            isLastQuestion
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-[#4169E1] text-white hover:bg-blue-600'
          }`}
        >
          Next →
        </button>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleReviewClick}
          className="px-6 py-3 bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          📝 Review Answers
        </button>
        <button
          onClick={() => {
            if (window.confirm('⚠️ Are you sure you want to exit? Your progress will be saved.\nBut the timer will not stop')) {
              window.location.href = `/modules/${exam.moduleId}`;
            }
          }}
          className="px-6 py-3 bg-red-100 text-red-700 border-2 border-red-300 rounded-xl font-semibold hover:bg-red-200 transition-all"
        >
          Exit Exam
        </button>
      </div>
    </>
  );
};

export default ExamActiveScreen;