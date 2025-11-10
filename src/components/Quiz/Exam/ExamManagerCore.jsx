// src/components/Quiz/Exam/ExamManagerCore.jsx
import React, { useEffect } from "react";
import useExamManager from "../../../hooks/useExamManager";
import { renderMath } from "../../../utils/mathRenderer";

// Import all screen components
import ExamStartScreen from "./ExamStartScreen";
import ExamActiveScreen from "./ExamActiveScreen";
import ExamReviewScreen from "./ExamReviewScreen";
import ExamResultsScreen from "./ExamResultsScreen";

/**
 * ExamManagerCore
 * 
 * Orchestrator component that uses the useExamManager hook
 * and renders the appropriate screen based on the current mode.
 * 
 * Supports lecturer credit via exam.examBy
 * 
 * Modes:
 * - "start": Warning screen with attempt counter
 * - "exam": Active exam with questions and navigation
 * - "review": Full-page review with grid navigation
 * - "results": Results page with score and student form
 * 
 * ✅ UPDATED: Now passes currentSectionIndex to ExamActiveScreen
 */
const ExamManagerCore = ({ exam, onExit }) => {
  // Get all exam state and handlers from the hook
  const examState = useExamManager(exam);

  // Ensure math renders whenever the mode or question changes
  useEffect(() => {
    renderMath();
  }, [examState.mode, examState.currentQuestionIndex]);

  // Handle loading state
  if (!exam || examState.mode === "loading") {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div className="animate-spin inline-block w-12 h-12 border-4 border-[#4169E1] border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Loading exam data...</p>
        </div>
      </div>
    );
  }

  // Render the appropriate screen based on mode
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 relative print:p-0">
      {examState.mode === "start" && (
        <ExamStartScreen
          exam={examState.exam}
          questions={examState.questions}
          attemptNumber={examState.attemptNumber}
          handleStart={examState.handleStart}
        />
      )}

      {examState.mode === "exam" && (
        <ExamActiveScreen
          exam={examState.exam}
          questions={examState.questions}
          currentQuestion={examState.currentQuestion}
          currentQuestionIndex={examState.currentQuestionIndex}
          currentSectionIndex={examState.currentSectionIndex} // ✅ NEW: Pass section index
          currentAnswer={examState.currentAnswer}
          userAnswers={examState.userAnswers}
          timeLeft={examState.timeLeft}
          formatTime={examState.formatTime}
          isTimerCritical={examState.isTimerCritical}
          handleAnswerChange={examState.handleAnswerChange}
          handleNext={examState.handleNext}
          handlePrev={examState.handlePrev}
          handleReviewClick={examState.handleReviewClick}
          handleConfirmAnswer={examState.handleConfirmAnswer}
          handleExit={examState.handleExit}
          showConfirmationMessage={examState.showConfirmationMessage}
        />
      )}

      {examState.mode === "review" && (
        <ExamReviewScreen
          exam={examState.exam}
          questions={examState.questions}
          userAnswers={examState.userAnswers}
          jumpToQuestion={examState.jumpToQuestion}
          handleBack={examState.handleBackToExam}
          handleConfirmSubmit={examState.handleConfirmSubmit}
        />
      )}

      {examState.mode === "results" && (
        <>
          <ExamResultsScreen
            exam={examState.exam}
            questions={examState.questions}
            userAnswers={examState.userAnswers}
            score={examState.score}
            attemptNumber={examState.attemptNumber}
            handleReset={examState.handleReset}
          />
          
          {/* 👇 Optional: Display credit under results */}
          {examState.exam?.examBy && (
            <div className="text-center mt-6 text-sm text-gray-500 italic">
              Exam created by {examState.exam.examBy}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExamManagerCore;