// src/components/Quiz/ExamScreens.jsx
import React, { useEffect, useState } from "react";
import ExamQuestion from "./ExamQuestion";
import ExamAnswerInput from "./ExamAnswerInput";
import ExamExplanation from "./ExamExplanation";
import { renderMath } from "../../utils/mathRenderer";

/**
 * ExamScreens
 * Handles rendering for all stages of the exam flow:
 * - "start"
 * - "exam"
 * - "results"
 */
const ExamScreens = ({
  mode,
  exam,
  questions,
  currentQuestionIndex,
  userAnswers,
  isSubmitted,
  score,
  onAnswerChange,
  onNext,
  onPrev,
  onSubmit,
  onStart,
  onShowResults,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // ✅ Render math on every mode/question change
  useEffect(() => {
    renderMath();
  }, [currentQuestionIndex, mode]);

  /** ---------- START SCREEN ---------- */
  if (mode === "start") {
    return (
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-[#4169E1] mb-4">
          Ready to Begin the Exam?
        </h2>
        <p className="text-gray-700 mb-6">
          You’ll have <strong>{exam.duration}</strong> minutes to complete{" "}
          <strong>{questions.length}</strong> questions.
        </p>
        <button
          onClick={onStart}
          className="bg-[#4169E1] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-600 transition-all"
        >
          Start Exam
        </button>
      </div>
    );
  }

  /** ---------- EXAM SCREEN ---------- */
  if (mode === "exam") {
    const userAnswer = userAnswers[currentQuestion.id] || "";

    const handleConfirmAnswer = () => {
      setIsAnswerConfirmed(true);
    };

    return (
      <div className="space-y-6">
        <ExamQuestion question={currentQuestion} index={currentQuestionIndex} />
        <ExamAnswerInput
          question={currentQuestion}
          value={userAnswer}
          onChange={(val) => onAnswerChange(currentQuestion.id, val)}
        />

        {/* Navigation and Control Buttons */}
        <div className="flex justify-between items-center pt-4">
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => {
                onPrev();
                setIsAnswerConfirmed(false);
              }}
              className="bg-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl shadow hover:bg-gray-300 transition-all"
            >
              ← Previous
            </button>
          )}

          <button
            onClick={() => {
              if (isLastQuestion) {
                if (!isAnswerConfirmed) {
                  handleConfirmAnswer();
                } else {
                  onShowResults(); // Move to review/results screen
                }
              } else {
                onNext();
                setIsAnswerConfirmed(false);
              }
            }}
            className="bg-[#4169E1] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-600 transition-all"
          >
            {isLastQuestion
              ? isAnswerConfirmed
                ? "Review Answers"
                : "Confirm Answer"
              : "Check Answer"}
          </button>
        </div>
      </div>
    );
  }

  /** ---------- RESULTS / REVIEW SCREEN ---------- */
  if (mode === "results") {
    const isMidterm =
      exam.title?.toLowerCase().includes("midterm") ||
      exam.title?.toLowerCase().includes("exam");

    return (
      <div className="relative">
        {/* Page Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#4169E1]">
            {exam.title} - Results
          </h2>
        </div>

        {/* Score Summary */}
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 mb-6">
          <p className="text-lg font-semibold text-gray-800">
            Score: {score.correct}/{score.total} ({score.percentage}%)
          </p>
        </div>

        {/* Question Review Section */}
        <div className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[question.id] || "";
            const isCorrect = question.correctAnswers?.includes(userAnswer);
            return (
              <div key={index}>
                <ExamQuestion question={question} index={index} />
                <ExamExplanation
                  question={question}
                  userAnswer={userAnswer}
                  isCorrect={isCorrect}
                />
              </div>
            );
          })}
        </div>

        {/* Student Details Section */}
        <div
          id="student-credentials-form"
          className="mt-12 p-6 border-t border-gray-300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Student Information
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student ID
              </label>
              <input
                type="text"
                placeholder="Enter your student ID"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course/Module
              </label>
              <input
                type="text"
                placeholder="Enter your module code"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all"
              >
                🖨️ Print Results
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  /** ---------- FALLBACK ---------- */
  return (
    <div className="text-center text-gray-500 py-10">
      Loading exam data...
    </div>
  );
};

export default ExamScreens;
