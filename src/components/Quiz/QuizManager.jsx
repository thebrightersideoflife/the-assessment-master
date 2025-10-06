// src/components/quiz/QuizManager.jsx
import React, { useEffect, useState, useRef } from "react";
import { useQuiz } from "../../hooks/useQuiz";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import LoadingSpinner from "../UI/LoadingSpinner";
import {
  soundManager,
  createAchievementConfetti,
} from "../../utils/gamificationUtils";
import {
  chunkQuestions,
  QUIZ_CHUNK_SIZE,
} from "../../utils/chunkQuestions";
import { questions } from "../../data/questions";

const QuizManager = ({ moduleId, weekId, quizIndex = 0 }) => {
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
    questions: filteredQuestions,
  } = useQuiz(moduleId, weekId, quizIndex);

  const [isComplete, setIsComplete] = useState(false);
  const [achievementPlayed, setAchievementPlayed] = useState(false);
  const containerRef = useRef(null);

  // ✅ Determine total quizzes for display
  const weekQuestions = questions.filter(
    (q) => q.moduleId === moduleId && q.weekId === weekId
  );
  const questionChunks = chunkQuestions(weekQuestions, QUIZ_CHUNK_SIZE);
  const totalQuizzes = questionChunks.length;

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // ✅ Mark quiz completion
  useEffect(() => {
    if (currentQuestionIndex >= totalQuestions && totalQuestions > 0) {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, totalQuestions]);

  // ✅ Trigger sound & confetti on completion
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

  const handleRestart = () => {
    restart();
    setIsComplete(false);
    setAchievementPlayed(false);
  };

  // ✅ Messages for completion screen
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

  // ------------------------------
  // Loading & Error
  // ------------------------------
  if (loading) {
    return <LoadingSpinner text="Loading your quiz..." color="blue" size="lg" />;
  }

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

  // ------------------------------
  // Completion View
  // ------------------------------
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
        <div className="inline-block bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
          Quiz {quizIndex + 1} of {totalQuizzes}
        </div>

        <h2 id="quiz-complete-title" className="text-3xl font-bold text-[#4169E1] mb-4">
          Quiz Complete!
        </h2>

        <div className={`text-6xl font-bold ${message.color}`}>{accuracy}%</div>

        <div className={`text-lg ${message.color} flex items-center justify-center gap-3`}>
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
            <div className="text-2xl font-bold text-[#28B463]">{stats.correct}</div>
            <div className="text-sm text-gray-600">Correct Answers</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-[#E67E22]/10 to-[#E67E22]/20 p-4 rounded-xl border border-[#E67E22]/30">
            <div className="text-2xl font-bold text-[#E67E22]">
              {stats.total - stats.correct}
            </div>
            <div className="text-sm text-gray-600">To Review</div>
          </div>
          <div className="stats-card bg-gradient-to-br from-[#4169E1]/10 to-[#4169E1]/20 p-4 rounded-xl border border-[#4169E1]/30">
            <div className="text-2xl font-bold text-[#4169E1]">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Questions</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="bg-gradient-to-r from-[#3498DB] to-[#4169E1] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Retry Quiz {quizIndex + 1}
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Back to Quizzes
          </button>
        </div>

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

  // ------------------------------
  // Active Quiz View
  // ------------------------------
  return (
    <div
      className="bg-white bg-opacity-98 rounded-2xl p-8 shadow-2xl border border-[#3498DB]/30"
      role="region"
      aria-labelledby="quiz-manager"
      ref={containerRef}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div>
          <div className="text-sm text-gray-600 mb-1">
            Quiz {quizIndex + 1} of {totalQuizzes}
          </div>
          <h2 id="quiz-manager" className="text-2xl font-bold text-[#3498DB]">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </h2>
        </div>
      </div>

      {/* ✅ Centralized ProgressBar Component */}
      <ProgressBar
        current={currentQuestionIndex + 1}
        total={totalQuestions}
        correct={stats.correct}
        total_answered={stats.total}
        accuracy={accuracy}
      />

      <Question
        question={currentQuestion}
        questionIndex={currentQuestionIndex}
        moduleId={moduleId}
        weekId={weekId}
        quizIndex={quizIndex}
        onAnswerSubmit={handleAnswerSubmit}
        onNext={nextQuestion}
        totalQuestions={totalQuestions}
        imageUrl={currentQuestion?.imageUrl || null}
        imageAlt={currentQuestion?.imageAlt || "Question illustration"}
        hasImage={!!currentQuestion?.imageUrl}
      />
    </div>
  );
};

export default QuizManager;
