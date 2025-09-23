import React, { useState, useEffect } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import { questions } from '../../data/questions';
import { useQuiz } from '../../hooks/useQuiz';
import { renderMath } from '../../utils/mathRenderer';
import { AiOutlineTrophy, AiOutlineStar, AiOutlineBook } from 'react-icons/ai';

const QuizManager = () => {
  const { currentQuestionIndex, stats, accuracy, nextQuestion, restart } = useQuiz();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Render math after component updates
    const timer = setTimeout(() => {
      renderMath();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  useEffect(() => {
    setIsComplete(currentQuestionIndex >= questions.length);
  }, [currentQuestionIndex]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    restart();
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="bg-white bg-opacity-98 backdrop-blur-lg rounded-2xl p-10 shadow-2xl text-center border border-[#FFC300]/30">
        <div className="flex justify-center mb-6">
          <AiOutlineTrophy className="text-6xl text-[#FFC300]" />
        </div>
        <h2 className="text-3xl font-bold text-[#4169E1] mb-6">🎉 Quiz Complete!</h2>
        <p className="text-xl mb-8 text-gray-700">
          You scored {stats.correct} out of {stats.total} questions correctly.
        </p>
        <div className="text-6xl font-bold text-[#28B463] my-6">
          {accuracy}%
        </div>
        <p className="text-gray-600 mb-8">
          {accuracy >= 80 ? (
            <span className="text-[#FFC300] font-semibold flex items-center justify-center gap-2">
              Excellent work! 🌟
            </span>
          ) : accuracy >= 60 ? (
            <span className="text-[#E67E22] font-semibold flex items-center justify-center gap-2">
              Good job! Keep practicing! 📚
            </span>
          ) : (
            <span className="text-[#f50057] font-semibold flex items-center justify-center gap-2">
              Keep studying and try again! 💪
            </span>
          )}
        </p>
        <button 
          onClick={handleRestart}
          className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all hover:from-[#E67E22] hover:to-[#C0392B]"
        >
          Start Over
        </button>
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
    <div key={currentQuestionIndex}> {/* Key helps React reset component state */}
      <ProgressBar 
        current={currentQuestionIndex + 1} 
        total={questions.length}
        correct={stats.correct}
        total_answered={stats.total}
        accuracy={accuracy}
      />
      
      <Question 
        key={`question-${currentQuestion.id}-${currentQuestionIndex}`} // Unique key forces component reset
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        onNext={handleNext}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
      />
    </div>
  );
};

export default QuizManager;