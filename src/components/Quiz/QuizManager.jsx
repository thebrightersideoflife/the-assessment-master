import React, { useState, useEffect } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import { questions } from '../../data/questions';
import { useQuiz } from '../../hooks/useQuiz';
import { renderMath } from '../../utils/mathRenderer';

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
      <div className="bg-white bg-opacity-98 backdrop-blur-lg rounded-2xl p-10 shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">🎉 Quiz Complete!</h2>
        <p className="text-xl mb-8">
          You scored {stats.correct} out of {stats.total} questions correctly.
        </p>
        <div className="text-6xl text-green-500 my-6">
          {accuracy}%
        </div>
        <p className="text-gray-600 mb-8">
          {accuracy >= 80 ? 'Excellent work! 🌟' : 
           accuracy >= 60 ? 'Good job! Keep practicing! 📚' : 
           'Keep studying and try again! 💪'}
        </p>
        <button 
          onClick={handleRestart}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          Start Over
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="bg-white bg-opacity-98 backdrop-blur-lg rounded-2xl p-10 shadow-2xl text-center">
        <p className="text-xl text-gray-600">Loading question...</p>
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