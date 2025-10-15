// src/components/Quiz/ExamManagerCore.jsx
import React, { useState, useEffect } from "react";
import ExamScreens from "./ExamScreens";
import { calculateScore } from "../../utils/examUtils";
import { renderMath } from "../../utils/mathRenderer";
import { ChevronDown } from "lucide-react";

/**
 * ExamManagerCore
 * Handles exam logic, timer, state, and transitions between modes.
 */
const ExamManagerCore = ({ examData }) => {
  const { exam } = examData || {};
  const questions = exam?.questions || [];

  // ===== State Management =====
  const [mode, setMode] = useState("start"); // "start" | "exam" | "results"
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0, percentage: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(exam?.duration * 60 || 0);
  const [timerActive, setTimerActive] = useState(false);
  const [hasConfirmedLastAnswer, setHasConfirmedLastAnswer] = useState(false);

  // ===== Timer Logic =====
  useEffect(() => {
    let timer = null;
    if (timerActive && timeLeft > 0 && mode === "exam") {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && mode === "exam") {
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [timerActive, timeLeft, mode]);

  // Render math every time the question or mode changes
  useEffect(() => {
    renderMath();
  }, [mode, currentQuestionIndex]);

  // ===== Event Handlers =====
  const handleStart = () => {
    setMode("exam");
    setTimerActive(true);
    setTimeLeft(exam.duration * 60);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore({ correct: 0, total: 0, percentage: 0 });
    setIsSubmitted(false);
    setHasConfirmedLastAnswer(false);
  };

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setHasConfirmedLastAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setHasConfirmedLastAnswer(false);
    }
  };

  const handleSubmit = () => {
    const result = calculateScore(questions, userAnswers);
    setScore(result);
    setIsSubmitted(true);
    setMode("results");
    setTimerActive(false);
  };

  const handleShowResults = () => {
    if (!hasConfirmedLastAnswer) {
      setHasConfirmedLastAnswer(true);
    } else {
      handleSubmit();
    }
  };

  const handleReset = () => {
    setMode("start");
    setUserAnswers({});
    setScore({ correct: 0, total: 0, percentage: 0 });
    setIsSubmitted(false);
    setTimeLeft(exam?.duration * 60 || 0);
    setTimerActive(false);
    setHasConfirmedLastAnswer(false);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // ===== Render =====
  const isMidterm =
    exam.title?.toLowerCase().includes("midterm") ||
    exam.title?.toLowerCase().includes("exam");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      {/* Header */}
      {mode === "exam" && (
        <div className="flex justify-between items-center mb-6 bg-blue-50 border border-blue-200 rounded-xl p-3">
          <p className="text-[#4169E1] font-semibold">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="font-semibold text-gray-800">⏱️ {formatTime(timeLeft)}</p>
        </div>
      )}

      {/* Main Content */}
      <ExamScreens
        mode={mode}
        exam={exam}
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        userAnswers={userAnswers}
        isSubmitted={isSubmitted}
        score={score}
        onAnswerChange={handleAnswerChange}
        onNext={handleNext}
        onPrev={handlePrev}
        onSubmit={handleSubmit}
        onStart={handleStart}
        onShowResults={handleShowResults}
      />

      {/* 📜 Footer for Results Page */}
      {mode === "results" && (
        <div className="mt-10 text-center space-x-4" id="results-bottom">
          <button
            onClick={() => window.print()}
            className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all"
          >
            🖨️ Print Results
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-300 transition-all"
          >
            🔄 Restart Exam
          </button>
          <a
            href={`/modules/${exam.moduleId || ""}`}
            className="bg-[#4169E1] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-600 transition-all"
          >
            ← Back to Module
          </a>
        </div>
      )}
    </div>
  );
};

export default ExamManagerCore;
