// src/components/quiz/QuizManager.jsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../hooks/useQuiz";
import useStore from "../../store/useStore";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import LoadingSpinner from "../UI/LoadingSpinner";
import PointsAnimation from "../UI/PointsAnimation";
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
  const navigate = useNavigate();
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
  
  // ✅ Get quiz state and points from store
  const { quizzes, getQuizState, getTotalPoints } = useStore();
  const quizState = getQuizState(moduleId, weekId, quizIndex);
  const previousQuizPoints = quizState.pointsEarned || 0;
  const totalPointsBefore = getTotalPoints() - previousQuizPoints; // Total before this quiz
  
  const [isComplete, setIsComplete] = useState(false);
  const [achievementPlayed, setAchievementPlayed] = useState(false);
  const [showPointsAnimation, setShowPointsAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef(null);

  // ✅ Reset state when quiz changes
  useEffect(() => {
    setIsComplete(false);
    setAchievementPlayed(false);
    setShowPointsAnimation(false);
    setAnimationComplete(false);
  }, [moduleId, weekId, quizIndex]);

  // ✅ Determine total quizzes for display
  const weekQuestions = questions.filter(
    (q) => q.moduleId === moduleId && q.weekId === weekId
  );
  const questionChunks = chunkQuestions(weekQuestions, QUIZ_CHUNK_SIZE);
  const totalQuizzes = questionChunks.length;
  
  // ✅ Calculate next quiz info
  const hasNextQuiz = quizIndex + 1 < totalQuizzes;
  const nextQuizIndex = quizIndex + 1;

  // ✅ Calculate current session points (before completion)
  const currentSessionPoints = stats.correct * 10;
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // ✅ Mark quiz completion - only if there are actual stats
  useEffect(() => {
    const quizKey = `${moduleId}-${weekId}-${quizIndex}`;
    const currentQuizState = quizzes[quizKey];
    
    if (currentQuizState?.completed && stats.total > 0) {
      setIsComplete(true);
      // Show points animation on first completion
      if (!animationComplete) {
        setShowPointsAnimation(true);
      }
    } else if (currentQuestionIndex >= totalQuestions && totalQuestions > 0 && stats.total > 0) {
      setIsComplete(true);
      if (!animationComplete) {
        setShowPointsAnimation(true);
      }
    } else {
      setIsComplete(false);
    }
  }, [currentQuestionIndex, totalQuestions, stats.total, moduleId, weekId, quizIndex, quizzes, animationComplete]);

  // ✅ Helper function to generate first-time achievement messages
  const getFirstTimeMessages = () => {
    const messages = [];
    
    const allQuizStats = Object.values(quizzes);
    const completedCount = allQuizStats.filter(q => q.completed).length;
    
    if (completedCount === 1) {
      messages.push({
        emoji: "🎉",
        text: "First quiz completed! Keep going!",
        color: "from-[#FFC300] to-[#E67E22]"
      });
    }
    
    const weekQuizzes = allQuizStats.filter(
      q => q.moduleId === moduleId && q.weekId === weekId
    );
    const weekCompleted = weekQuizzes.filter(q => q.completed).length;
    
    if (weekCompleted === 1 && completedCount > 1) {
      messages.push({
        emoji: "🌟",
        text: "First quiz of the week completed!",
        color: "from-[#3498DB] to-[#4169E1]"
      });
    }
    
    return messages;
  };

  // ✅ Trigger sound & confetti on completion
  useEffect(() => {
    if (isComplete && !achievementPlayed && containerRef.current && animationComplete) {
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
  }, [isComplete, achievementPlayed, accuracy, animationComplete]);

  const handleRestart = () => {
    restart();
    setIsComplete(false);
    setAchievementPlayed(false);
    setShowPointsAnimation(false);
    setAnimationComplete(false);
  };

  const handleNextQuiz = () => {
    if (hasNextQuiz) {
      setIsComplete(false);
      setAchievementPlayed(false);
      setShowPointsAnimation(false);
      setAnimationComplete(false);
      navigate(`/quiz/${moduleId}/${weekId}/${nextQuizIndex}`);
    }
  };

  const handleBackToQuizzes = () => {
    navigate(`/quizzes/module/${moduleId}`);
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
    const firstTimeMessages = getFirstTimeMessages();

    // ✅ Calculate bonus points
    let bonusPoints = 0;
    let bonusText = '';
    if (accuracy === 100) {
      bonusPoints = 50;
      bonusText = 'Perfect Score Bonus';
    } else if (accuracy >= 90) {
      bonusPoints = 25;
      bonusText = 'Excellent Performance Bonus';
    } else if (accuracy >= 80) {
      bonusPoints = 10;
      bonusText = 'Good Job Bonus';
    }
    
    const totalPoints = currentSessionPoints + bonusPoints;

    // Show points animation
    if (showPointsAnimation && !animationComplete) {
      return (
        <PointsAnimation 
          points={totalPoints}
          previousTotal={totalPointsBefore}
          onComplete={() => {
            setShowPointsAnimation(false);
            setAnimationComplete(true);
          }}
        />
      );
    }

    // Calculate total points after this quiz
    const totalPointsAfter = totalPointsBefore + totalPoints;

    return (
      <div
        ref={containerRef}
        className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 rounded-2xl p-8 shadow-2xl overflow-hidden border border-blue-100"
        role="region"
        aria-labelledby="quiz-complete-title"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <span>Quiz {quizIndex + 1}</span>
              <span className="opacity-60">/</span>
              <span>{totalQuizzes}</span>
            </div>
            
            {badge && (
              <div className={`achievement-badge inline-flex items-center gap-2 bg-gradient-to-r ${badge.gradient} px-4 py-2 rounded-full border border-[#FFC300]/40 shadow-lg animate-fadeIn`}>
                <span className="text-lg">{badge.emoji}</span>
                <span className="text-sm font-bold text-gray-800">{badge.title}</span>
              </div>
            )}
          </div>

          {/* First-Time Achievement Messages */}
          {firstTimeMessages.length > 0 && (
            <div className="mb-6">
              {firstTimeMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${msg.color} p-3 text-center shadow-lg animate-fadeIn mb-3 last:mb-0`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <p className="relative text-white font-semibold flex items-center justify-center gap-2">
                    <span className="text-xl">{msg.emoji}</span>
                    <span className="text-sm">{msg.text}</span>
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Main Score Display with Points Badge */}
          <div className="text-center mb-6 relative">
            <h2 id="quiz-complete-title" className="text-2xl font-bold text-gray-800 mb-3">
              Quiz Complete!
            </h2>
            
            <div className="inline-flex items-center gap-8 relative">
              {/* Percentage Score */}
              <div className="inline-flex items-baseline gap-2">
                <span className={`text-6xl font-black ${message.color} drop-shadow-lg`}>
                  {accuracy}
                </span>
                <span className="text-3xl font-bold text-gray-400">%</span>
              </div>
              
              {/* Points Badge - Circular Sticker */}
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4169E1] to-[#3498DB] rounded-full blur-md opacity-40 animate-pulse"></div>
                
                {/* Main badge */}
                <div className="relative bg-gradient-to-br from-[#4169E1] via-[#5B9BD5] to-[#3498DB] rounded-full p-1 shadow-2xl">
                  <div className="bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center">
                    <span className="text-3xl mb-1">💎</span>
                    <div className="text-2xl font-black bg-gradient-to-r from-[#4169E1] to-[#3498DB] bg-clip-text text-transparent">
                      +{totalPoints}
                    </div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                      This Quiz
                    </div>
                  </div>
                </div>
                
                {/* Bonus indicator if applicable */}
                {bonusPoints > 0 && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
                    +{bonusPoints}
                  </div>
                )}
              </div>
            </div>
            
            <div className={`flex items-center justify-center gap-2 ${message.color} font-medium mt-4`}>
              <span className="text-2xl">{message.emoji}</span>
              <span>{message.message}</span>
            </div>
            
            {/* Points Summary with animation effect */}
            <div className="mt-6 bg-gradient-to-r from-[#4169E1]/5 via-[#5B9BD5]/5 to-[#3498DB]/5 border border-[#4169E1]/20 rounded-xl p-4">
              <div className="flex items-center justify-center gap-3 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-black text-gray-400">{totalPointsBefore}</div>
                  <div className="text-xs text-gray-500">Previous Total</div>
                </div>
                <div className="text-2xl text-[#4169E1]">+</div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#4169E1]">{totalPoints}</div>
                  <div className="text-xs text-[#4169E1] font-semibold">Earned Now</div>
                </div>
                <div className="text-2xl text-gray-300">=</div>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-[#4169E1] to-[#3498DB] bg-clip-text text-transparent">
                    {totalPointsAfter}
                  </div>
                  <div className="text-xs font-bold text-gray-700">New Total</div>
                </div>
              </div>
              
              {/* Breakdown */}
              {bonusPoints > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500 flex items-center justify-center gap-3">
                  <span>{stats.correct} correct × 10</span>
                  <span>+</span>
                  <span className="text-[#4169E1] font-semibold">{bonusText}</span>
                </div>
              )}
            </div>
          </div>

          {/* Compact Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="stats-card bg-gradient-to-br from-[#28B463]/10 to-[#28B463]/5 p-3 rounded-xl border border-[#28B463]/20 text-center hover:scale-105 transition-transform">
              <div className="text-3xl font-black text-[#28B463]">{stats.correct}</div>
              <div className="text-xs text-gray-600 font-medium">Correct</div>
            </div>
            <div className="stats-card bg-gradient-to-br from-[#E67E22]/10 to-[#E67E22]/5 p-3 rounded-xl border border-[#E67E22]/20 text-center hover:scale-105 transition-transform">
              <div className="text-3xl font-black text-[#E67E22]">
                {stats.total - stats.correct}
              </div>
              <div className="text-xs text-gray-600 font-medium">Missed</div>
            </div>
            <div className="stats-card bg-gradient-to-br from-[#4169E1]/10 to-[#4169E1]/5 p-3 rounded-xl border border-[#4169E1]/20 text-center hover:scale-105 transition-transform">
              <div className="text-3xl font-black text-[#4169E1]">{stats.total}</div>
              <div className="text-xs text-gray-600 font-medium">Total</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={handleRestart}
              className="flex-1 bg-white border-2 border-[#4169E1] text-[#4169E1] px-6 py-3 rounded-xl font-semibold hover:bg-[#4169E1] hover:text-white transform hover:scale-105 transition-all shadow-md"
            >
              <div className="flex items-center justify-center gap-2">
                <span>↻</span>
                <span>Retry</span>
              </div>
            </button>
            
            {hasNextQuiz ? (
              <button
                onClick={handleNextQuiz}
                className="flex-1 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all shadow-md"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Next Quiz</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ) : (
              <button
                onClick={handleBackToQuizzes}
                className="flex-1 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all shadow-md"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>←</span>
                  <span>Back to Quizzes</span>
                </div>
              </button>
            )}
          </div>

          {/* Progress Indicator */}
          {hasNextQuiz && (
            <div className="bg-gradient-to-r from-[#3498DB]/10 via-[#4169E1]/10 to-[#3498DB]/10 border border-[#3498DB]/30 rounded-xl p-4 text-center animate-fadeIn">
              <p className="text-sm text-gray-700 font-medium mb-2">
                🎯 <strong>Up Next:</strong> Quiz {quizIndex + 2} of {totalQuizzes}
              </p>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute h-full bg-gradient-to-r from-[#4169E1] to-[#3498DB] transition-all duration-1000"
                  style={{ width: `${((quizIndex + 1) / totalQuizzes) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {totalQuizzes - (quizIndex + 1)} quiz{totalQuizzes - (quizIndex + 1) !== 1 ? 'zes' : ''} remaining
              </p>
            </div>
          )}
          
          {!hasNextQuiz && (
            <div className="bg-gradient-to-r from-[#28B463]/10 via-[#3498DB]/10 to-[#28B463]/10 border border-[#28B463]/30 rounded-xl p-4 text-center animate-fadeIn">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                🎉 Week Complete!
              </p>
              <p className="text-xs text-gray-600">
                You've finished all {totalQuizzes} quizzes. Great work!
              </p>
            </div>
          )}
        </div>
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
        
        {/* ✅ Running points display */}
        <div className="relative bg-gradient-to-r from-[#4169E1] via-[#5B9BD5] to-[#3498DB] p-[2px] rounded-full shadow-md">
          <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-xl">💎</span>
            <span className="font-black bg-gradient-to-r from-[#4169E1] via-[#5B9BD5] to-[#3498DB] bg-clip-text text-transparent">
              +{currentSessionPoints}
            </span>
            <span className="text-xs font-semibold text-[#4169E1]">pts</span>
          </div>
        </div>
      </div>

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