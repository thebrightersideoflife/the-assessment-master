import React, { useEffect, useState, useRef } from "react";
import { useQuiz } from "../../hooks/useQuiz";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import { soundManager, createAchievementConfetti } from "../../utils/gamificationUtils";
import { questions } from "../../data/questions";
import { chunkQuestions } from "../../utils/chunkQuestions";

// ============================================================================
// UPDATED COMPONENT: QuizManager with Segmentation Support
// ============================================================================
const QuizManager = ({ moduleId, weekId, quizIndex = 0 }) => {
  // Step 1: Filter all questions for this week
  const weekQuestions = questions.filter(
    (q) => q.moduleId === moduleId && q.weekId === weekId
  );

  // Step 2: Split into 15-question chunks
  const questionChunks = chunkQuestions(weekQuestions, 15);
  
  // Step 3: Get only the questions for THIS quiz segment
  const filteredQuestions = questionChunks[quizIndex] || [];

  // Calculate total number of quizzes for this week
  const totalQuizzes = questionChunks.length;

  // Use the quiz hook (now working with segmented questions)
  const {
    currentQuestionIndex,
    totalQuestions,
    stats,
    accuracy,
    handleAnswerSubmit,
    nextQuestion,
    restart,
    loading,
    error,
  } = useQuiz(moduleId, weekId, quizIndex);

  const [isComplete, setIsComplete] = useState(false);
  const [achievementPlayed, setAchievementPlayed] = useState(false);
  const containerRef = useRef(null);

  // Get current question from the SEGMENTED list
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // Validate and reset if saved progress is invalid
  useEffect(() => {
    if (filteredQuestions.length === 0) {
      console.warn(`No questions found for quiz segment ${quizIndex + 1}`);
      restart();
      return;
    }

    if (
      currentQuestionIndex >= filteredQuestions.length ||
      currentQuestionIndex < 0 ||
      !filteredQuestions[currentQuestionIndex]
    ) {
      console.warn("Saved progress invalid for this quiz segment, resetting.");
      restart();
    }
  }, [currentQuestionIndex, filteredQuestions, restart, quizIndex]);

  // Watch for quiz completion
  useEffect(() => {
    if (currentQuestionIndex >= totalQuestions && totalQuestions > 0) {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, totalQuestions]);

  // Trigger celebration effects
  useEffect(() => {
    if (isComplete && !achievementPlayed && containerRef.current) {
      setAchievementPlayed(true);
      soundManager.audioContext?.resume();

      const intensity =
        accuracy >= 100
          ? "high"
          : accuracy >= 90
          ? "medium"
          : accuracy >= 80
          ? "low"
          : null;

      if (intensity) {
        soundManager.playAchievementSound(accuracy);
        createAchievementConfetti(containerRef.current, intensity);
      } else {
        soundManager.playCorrectSound();
      }

      const cards = containerRef.current.querySelectorAll(".stats-card");
      cards.forEach((card) => {
        card.classList.add("achievement-glow");
        setTimeout(() => card.classList.remove("achievement-glow"), 1500);
      });

      const badge = containerRef.current.querySelector(".achievement-badge");
      if (badge) {
        badge.classList.add("achievement-glow");
        setTimeout(() => badge.classList.remove("achievement-glow"), 1500);
      }
    }
  }, [isComplete, achievementPlayed, accuracy]);

  // Restart handler
  const handleRestart = () => {
    restart();
    setIsComplete(false);
    setAchievementPlayed(false);
  };

  // Completion feedback
  const getCompletionMessage = (acc) => {
    if (acc >= 100)
      return {
        message: "Perfect! You've mastered every question!",
        emoji: "👑",
        color: "text-[#FFC300]",
      };
    if (acc >= 90)
      return {
        message: "Excellent work! You're showing real mastery!",
        emoji: "🌟",
        color: "text-[#28B463]",
      };
    if (acc >= 80)
      return {
        message: "Great job! You're on the right track!",
        emoji: "🎯",
        color: "text-[#3498DB]",
      };
    if (acc >= 60)
      return {
        message: "Good effort! Keep practicing to improve further.",
        emoji: "📚",
        color: "text-[#E67E22]",
      };
    return {
      message: "Keep studying and try again! Every attempt helps you learn.",
      emoji: "💪",
      color: "text-[#7b1fa2]",
    };
  };

  const getAchievementBadge = (acc) => {
    if (acc >= 100)
      return {
        emoji: "🏆",
        title: "PERFECT SCORE!",
        gradient: "from-[#FFC300]/20 to-[#E67E22]/30",
      };
    if (acc >= 90)
      return {
        emoji: "🌟",
        title: "EXCELLENT!",
        gradient: "from-[#28B463]/20 to-[#3498DB]/30",
      };
    if (acc >= 80)
      return {
        emoji: "💪",
        title: "GOOD JOB!",
        gradient: "from-[#3498DB]/20 to-[#4169E1]/30",
      };
    return null;
  };

  // Loading state
  if (loading) {
    return (
      <div className="text-center p-6">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4169E1]"></div>
        <p className="mt-4 text-gray-600">Loading quiz...</p>
      </div>
    );
  }

  // Error or no questions
  if (error || filteredQuestions.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-2xl text-center border border-[#C0392B]/30">
        <p className="text-xl text-[#C0392B] mb-4" aria-live="assertive">
          {error || `No questions found for Quiz ${quizIndex + 1}.`}
        </p>
        <p className="text-sm text-gray-600">
          This quiz segment may not exist. Please return to the quiz selection.
        </p>
      </div>
    );
  }

  // Completion screen
  if (isComplete) {
    const message = getCompletionMessage(accuracy);
    const badge = getAchievementBadge(accuracy);

    return (
      <div
        ref={containerRef}
        className="bg-white bg-opacity-98 backdrop-blur-lg rounded-2xl p-10 shadow-2xl text-center border border-[#FFC300]/30 space-y-6 transition-all duration-300"
        role="region"
        aria-labelledby="quiz-complete-title"
      >
        {/* Quiz Segment Identifier */}
        <div className="inline-block bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
          Quiz {quizIndex + 1} of {totalQuizzes}
        </div>

        <h2
          id="quiz-complete-title"
          className="text-3xl font-bold text-[#4169E1] mb-4"
        >
          Quiz Complete!
        </h2>

        <div className={`text-6xl font-bold ${message.color}`}>{accuracy}%</div>

        <div
          className={`text-lg ${message.color} flex items-center justify-center gap-3`}
          aria-live="polite"
        >
          <span>{message.emoji}</span>
          <span>{message.message}</span>
        </div>

        {badge && (
          <div
            className={`achievement-badge inline-block bg-gradient-to-r ${badge.gradient} px-6 py-3 rounded-xl border border-[#FFC300]/40`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{badge.emoji}</span>
              <span className="font-semibold text-gray-800">
                Achievement Unlocked: {badge.title}
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="stats-card bg-gradient-to-br from-[#28B463]/10 to-[#28B463]/20 p-4 rounded-xl border border-[#28B463]/30">
            <div className="text-2xl font-bold text-[#28B463]">
              {stats.correct}
            </div>
            <div className="text-sm text-gray-600">Correct Answers</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-[#E67E22]/10 to-[#E67E22]/20 p-4 rounded-xl border border-[#E67E22]/30">
            <div className="text-2xl font-bold text-[#E67E22]">
              {stats.total - stats.correct}
            </div>
            <div className="text-sm text-gray-600">To Review</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-[#4169E1]/10 to-[#4169E1]/20 p-4 rounded-xl border border-[#4169E1]/30">
            <div className="text-2xl font-bold text-[#4169E1]">
              {stats.total}
            </div>
            <div className="text-sm text-gray-600">Total Questions</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="bg-gradient-to-r from-[#3498DB] to-[#4169E1] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            aria-label={`Retry Quiz ${quizIndex + 1}`}
          >
            Retry Quiz {quizIndex + 1}
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            aria-label="Back to quiz selection"
          >
            Back to Quizzes
          </button>
        </div>

        {/* Progress Indicator */}
        {quizIndex + 1 < totalQuizzes && (
          <div className="bg-[#3498DB]/10 border border-[#3498DB]/30 rounded-xl p-4 mt-4">
            <p className="text-sm text-gray-700">
              🎯 <strong>Next up:</strong> Quiz {quizIndex + 2} of {totalQuizzes}
            </p>
          </div>
        )}

        {quizIndex + 1 === totalQuizzes && (
          <div className="bg-[#28B463]/10 border border-[#28B463]/30 rounded-xl p-4 mt-4">
            <p className="text-sm text-gray-700">
              🎉 <strong>Congratulations!</strong> You've completed all quizzes for this week!
            </p>
          </div>
        )}
      </div>
    );
  }

  // Active quiz state
  return (
    <div
      className="bg-white bg-opacity-98 rounded-2xl p-8 shadow-2xl border border-[#3498DB]/30"
      role="region"
      aria-labelledby="quiz-manager"
      ref={containerRef}
    >
      {/* Header with Quiz Segment Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div>
          <div className="text-sm text-gray-600 mb-1">
            Quiz {quizIndex + 1} of {totalQuizzes}
          </div>
          <h2 id="quiz-manager" className="text-2xl font-bold text-[#3498DB]">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </h2>
        </div>
        
        {/* Stats Badge */}
        <div className="bg-[#4169E1]/10 px-4 py-2 rounded-full">
          <span className="text-sm font-semibold text-[#4169E1]">
            {stats.correct}/{stats.total} correct
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        current={currentQuestionIndex + 1}
        total={totalQuestions}
        correct={stats.correct}
        total_answered={stats.total}
        accuracy={accuracy}
      />

      {/* Question Component */}
      <Question
        question={currentQuestion}
        questionIndex={currentQuestionIndex}
        moduleId={moduleId}
        weekId={weekId}
        quizIndex={quizIndex}
        onAnswerSubmit={handleAnswerSubmit}
        onNext={nextQuestion}
        totalQuestions={totalQuestions}
      />

      {/* Optional: Quiz Progress Indicator */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>Quiz Progress</span>
          <span>{Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%</span>
        </div>
        <div className="mt-2 grid grid-cols-15 gap-1">
          {filteredQuestions.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx < currentQuestionIndex
                  ? 'bg-[#28B463]'
                  : idx === currentQuestionIndex
                  ? 'bg-[#3498DB] animate-pulse'
                  : 'bg-gray-200'
              }`}
              aria-label={`Question ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizManager;