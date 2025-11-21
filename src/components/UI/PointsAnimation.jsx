// src/components/UI/PointsAnimation.jsx
import React, { useEffect, useState } from 'react';

const PointsAnimation = ({ points, previousTotal = 0, onComplete }) => {
  const [currentPoints, setCurrentPoints] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(previousTotal);
  const [showStars, setShowStars] = useState(false);
  const [phase, setPhase] = useState('quiz'); // 'quiz' or 'total'

  useEffect(() => {
    // Show stars after 300ms delay
    const starsTimer = setTimeout(() => {
      setShowStars(true);
    }, 300);

    // Phase 1: Animate quiz points from 0 to points earned (1 second)
    const quizSteps = 20;
    const quizIncrement = points / quizSteps;
    const quizDuration = 1000;
    const quizStepDuration = quizDuration / quizSteps;

    let quizStep = 0;
    const quizTimer = setInterval(() => {
      quizStep++;
      if (quizStep >= quizSteps) {
        setCurrentPoints(points);
        clearInterval(quizTimer);
        
        // After quiz points animation, wait 500ms then start total animation
        setTimeout(() => {
          setPhase('total');
          
          // Phase 2: Animate total from previousTotal to previousTotal + points (1 second)
          const totalSteps = 20;
          const totalIncrement = points / totalSteps;
          const totalDuration = 1000;
          const totalStepDuration = totalDuration / totalSteps;
          
          let totalStep = 0;
          const totalTimer = setInterval(() => {
            totalStep++;
            if (totalStep >= totalSteps) {
              setCurrentTotal(previousTotal + points);
              clearInterval(totalTimer);
              
              // Complete animation after total finishes
              setTimeout(() => {
                onComplete?.();
              }, 500);
            } else {
              setCurrentTotal(Math.floor(previousTotal + (totalIncrement * totalStep)));
            }
          }, totalStepDuration);
        }, 500);
      } else {
        setCurrentPoints(Math.floor(quizIncrement * quizStep));
      }
    }, quizStepDuration);

    return () => {
      clearTimeout(starsTimer);
      clearInterval(quizTimer);
    };
  }, [points, previousTotal, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-fadeIn px-4">
      <div className="relative w-full max-w-md">
        {/* Arc Stars Animation - Responsive Positioning */}
        {showStars && (
          <>
            {/* Left Star */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ 
                animation: 'starPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                animationDelay: '0ms',
                transform: 'translate(calc(-50% - 2.5rem), calc(-50% - 0.5rem))'
              }}
            >
              <span className="text-2xl sm:text-4xl">⭐</span>
            </div>
            {/* Center Star */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ 
                animation: 'starPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                animationDelay: '150ms',
                transform: 'translate(-50%, calc(-50% - 2rem))'
              }}
            >
              <span className="text-2xl sm:text-4xl">⭐</span>
            </div>
            {/* Right Star */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ 
                animation: 'starPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                animationDelay: '300ms',
                transform: 'translate(calc(-50% + 2.5rem), calc(-50% - 0.5rem))'
              }}
            >
              <span className="text-2xl sm:text-4xl">⭐</span>
            </div>
          </>
        )}

        {/* Points Counter Card - Responsive Layout */}
        <div className="relative bg-gradient-to-r from-[#4169E1] via-[#5B9BD5] to-[#3498DB] p-[3px] rounded-3xl shadow-2xl">
          <div className="bg-white rounded-[21px] px-6 sm:px-12 py-6 sm:py-8">
            {phase === 'quiz' ? (
              // Phase 1: Show quiz points
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <span 
                  className="text-4xl sm:text-6xl"
                  style={{ animation: 'diamondBounce 0.6s ease-in-out infinite' }}
                >
                  💎
                </span>
                <div className="text-center">
                  <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#4169E1] via-[#5B9BD5] to-[#3498DB] bg-clip-text text-transparent">
                    +{currentPoints}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">
                    Points Earned!
                  </div>
                </div>
              </div>
            ) : (
              // Phase 2: Show addition to total - Mobile Optimized
              <div className="space-y-3 sm:space-y-4">
                {/* Calculation Row - Responsive */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-gray-400">
                      {previousTotal}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">Previous</div>
                  </div>
                  <div className="text-2xl sm:text-3xl text-[#4169E1] font-black">+</div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-[#4169E1]">
                      {points}
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#4169E1] font-semibold">Earned</div>
                  </div>
                  <div className="text-2xl sm:text-3xl text-gray-300 font-black">=</div>
                  <div className="text-center">
                    <span 
                      className="text-3xl sm:text-4xl"
                      style={{ animation: 'diamondBounce 0.6s ease-in-out infinite' }}
                    >
                      💎
                    </span>
                  </div>
                </div>
                
                {/* Total Display */}
                <div className="text-center border-t-2 border-gray-200 pt-3 sm:pt-4">
                  <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#4169E1] via-[#5B9BD5] to-[#3498DB] bg-clip-text text-transparent">
                    {currentTotal}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-bold mt-1">
                    New Total Points!
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <style>{`
          @keyframes starPop {
            0% {
              opacity: 0;
              transform: scale(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: scale(1.3) rotate(180deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(360deg);
            }
          }
          
          @keyframes diamondBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PointsAnimation;