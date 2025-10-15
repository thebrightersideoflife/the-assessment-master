// src/components/Quiz/ExamManagerCore.jsx
import React, { useEffect } from "react";
import ExamScreens from "./ExamScreens";
import useExamManager from "../../hooks/useExamManager";
import { renderMath } from "../../utils/mathRenderer";

/**
 * ExamManagerCore
 * 
 * Simplified orchestrator component that uses the useExamManager hook
 * and renders the appropriate screen based on the current mode.
 * 
 * @param {Object} exam - The exam object
 * @param {Function} onExit - Callback for exiting the exam (optional)
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
      <ExamScreens {...examState} />
    </div>
  );
};

export default ExamManagerCore;