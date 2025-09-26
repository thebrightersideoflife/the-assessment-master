import React, { useState, useEffect, useRef } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import { questions } from '../../data/questions';
import { useQuiz } from '../../hooks/useQuiz';
import { renderMath } from '../../utils/mathRenderer';
import { soundManager, createAchievementConfetti } from '../../utils/gamificationUtils';

const QuizManager = () => {
  const { currentQuestionIndex, stats, accuracy, nextQuestion, restart } = useQuiz();
  const [isComplete, setIsComplete] = useState(false);
  const [achievementPlayed, setAchievementPlayed] = useState(false);
  const completionRef = useRef(null);

  useEffect(() => {
    // Render math after component updates
    const timer = setTimeout(() => {
      renderMath();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (isComplete && !achievementPlayed && completionRef.current) {
      console.log('Triggering achievement celebration', { accuracy, completionRef: !!completionRef.current });
      setAchievementPlayed(true);
      // Resume audio context to bypass autoplay restrictions
      soundManager.audioContext?.resume();
      triggerAchievementCelebration();
    }
  }, [isComplete, achievementPlayed]);

  const triggerAchievementCelebration = () => {
    if (completionRef.current) {
      // Determine intensity based on accuracy
      let confettiIntensity = accuracy >= 100 ? 'high' : accuracy >= 90 ? 'medium' : accuracy >= 80 ? 'low' : null;
      
      // Play sound and confetti
      if (confettiIntensity) {
        console.log(`Playing achievement sound for ${confettiIntensity} intensity`);
        soundManager.playAchievementSound(accuracy);
        createAchievementConfetti(completionRef.current, confettiIntensity);
      } else {
        console.log('Playing fallback correct sound');
        soundManager.play('/sounds/correct.mp3');
      }

      // Animate stats cards
      const statsCards = completionRef.current.querySelectorAll('.stats-card');
      statsCards.forEach(card => {
        console.log('Adding pulse to stats card');
        card.classList.add('success-pulse');
        setTimeout(() => card.classList.remove('success-pulse'), 600);
      });

      // Add glow to achievement badge
      const badge = completionRef.current.querySelector('.achievement-badge');
      if (badge) {
        console.log('Adding glow to achievement badge');
        badge.classList.add('achievement-glow');
        setTimeout(() => badge.classList.remove('achievement-glow'), 1500);
      }
    } else {
      console.warn('completionRef.current is null');
    }
  };

  const handleNext = () => {
    console.log('handleNext called', { currentQuestionIndex, isLastQuestion: currentQuestionIndex === questions.length - 1 });
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    console.log('Restarting quiz');
    restart();
    setIsComplete(false);
    setAchievementPlayed(false);
  };

  const getAchievementDetails = (accuracy) => {
    if (accuracy >= 100) {
      return {
        title: "PERFECT SCORE!",
        subtitle: "Flawless execution!",
        emoji: "🏆",
        gradient: "from-[#FFC300] to-[#E67E22]",
        bgGradient: "from-[#FFC300]/20 to-[#E67E22]/30"
      };
    } else if (accuracy >= 90) {
      return {
        title: "EXCELLENT!",
        subtitle: "Outstanding performance!",
        emoji: "🌟",
        gradient: "from-[#28B463] to-[#3498DB]",
        bgGradient: "from-[#28B463]/20 to-[#3498DB]/30"
      };
    } else if (accuracy >= 80) {
      return {
        title: "GOOD JOB!",
        subtitle: "Well done!",
        emoji: "💪",
        gradient: "from-[#3498DB] to-[#4169E1]",
        bgGradient: "from-[#3498DB]/20 to-[#4169E1]/30"
      };
    }
    return null;
  };

  const getCompletionMessage = (accuracy) => {
    if (accuracy >= 100) {
      return {
        message: "Perfect! You've mastered every question!",
        emoji: "👑",
        textColor: "text-[#FFC300]"
      };
    } else if (accuracy >= 90) {
      return {
        message: "Excellent work! You're showing real mastery!",
        emoji: "🌟",
        textColor: "text-[#28B463]"
      };
    } else if (accuracy >= 80) {
      return {
        message: "Great job! You're on the right track!",
        emoji: "🎯",
        textColor: "text-[#3498DB]"
      };
    } else if (accuracy >= 60) {
      return {
        message: "Good effort! Keep practicing to improve further.",
        emoji: "📚",
        textColor: "text-[#E67E22]"
      };
    } else {
      return {
        message: "Keep studying and try again! Every attempt helps you learn.",
        emoji: "💪",
        textColor: "text-[#7b1fa2]"
      };
    }
  };

  if (isComplete) {
    const completionDetails = getCompletionMessage(accuracy);
    const achievementDetails = getAchievementDetails(accuracy);

    return (
      <div className="space-y-6">
        {/* Completion Screen */}
        <div 
          ref={completionRef}
          className="bg-white bg-opacity-98 backdrop-blur-lg rounded-2xl p-10 shadow-2xl text-center border border-[#FFC300]/30 transition-all duration-300"
          role="dialog"
          aria-labelledby="quiz-complete-title"
        >
          <div className="flex justify-center mb-6 text-6xl">🏆</div>
          
          <h2 id="quiz-complete-title" className="text-3xl font-bold text-[#4169E1] mb-6">Quiz Complete!</h2>
          
          <p className="text-xl mb-8 text-gray-700">
            You scored {stats.correct} out of {stats.total} questions correctly.
          </p>
          
          <div className={`text-6xl font-bold ${completionDetails.textColor} my-6`}>
            {accuracy}%
          </div>
          
          <div className={`mb-8 ${completionDetails.textColor} font-semibold flex items-center justify-center gap-3 text-lg`} aria-live="polite">
            <span>{completionDetails.emoji}</span>
            <span>{completionDetails.message}</span>
          </div>

          {/* Achievement Badge */}
          {achievementDetails && (
            <div className={`achievement-badge inline-block bg-gradient-to-r ${achievementDetails.bgGradient} px-6 py-3 rounded-xl border border-[#FFC300]/40 mb-8`}>
              <div className="flex items-center gap-3">
                <span className="text-xl">{achievementDetails.emoji}</span>
                <span className="font-semibold text-gray-800">
                  Achievement Unlocked: {achievementDetails.title}
                </span>
              </div>
            </div>
          )}

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="stats-card bg-gradient-to-br from-[#28B463]/10 to-[#28B463]/20 p-4 rounded-xl border border-[#28B463]/30">
              <div className="text-2xl font-bold text-[#28B463]">{stats.correct}</div>
              <div className="text-sm text-gray-600">Correct Answers</div>
            </div>
            
            <div className="stats-card bg-gradient-to-br from-[#E67E22]/10 to-[#E67E22]/20 p-4 rounded-xl border border-[#E67E22]/30">
              <div className="text-2xl font-bold text-[#E67E22]">{stats.total - stats.correct}</div>
              <div className="text-sm text-gray-600">To Review</div>
            </div>
            
            <div className="stats-card bg-gradient-to-br from-[#4169E1]/10 to-[#4169E1]/20 p-4 rounded-xl border border-[#4169E1]/30">
              <div className="text-2xl font-bold text-[#4169E1]">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </div>
          </div>
          
          <button 
            onClick={handleRestart}
            className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all hover:from-[#E67E22] hover:to-[#C0392B]"
            aria-label="Restart quiz"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="bg-white bg-opacity-98 backdrop-blur-lg rounded-2xl p-10 shadow-2xl text-center border border-[#3498DB]/30">
        <p className="text-xl text-[#3498DB]">Loading question...</p>
      </div>
    );
  }

  return (
    <div key={currentQuestionIndex}>
      <ProgressBar 
        current={currentQuestionIndex + 1} 
        total={questions.length}
        correct={stats.correct}
        total_answered={stats.total}
        accuracy={accuracy}
      />
      
      <Question 
        key={`question-${currentQuestion.id}-${currentQuestionIndex}`}
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        onNext={handleNext}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
      />
    </div>
  );
};

export default QuizManager;