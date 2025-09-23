import React, { useState, useEffect } from 'react';
import AnswerInput from './AnswerInput';
import Explanation from './Explanation';
import { useQuiz } from '../../hooks/useQuiz';

const Question = ({ question, questionNumber, onNext, isLastQuestion }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const { handleAnswerSubmit } = useQuiz();

  // Reset state when question changes
  useEffect(() => {
    setUserAnswer('');
    setIsAnswered(false);
    setIsCorrect(false);
    setShowExplanation(false);
  }, [question.id]); // Reset when question ID changes

  const handleSubmit = () => {
    if (!userAnswer.trim()) {
      alert('Please enter an answer before checking.');
      return;
    }

    const correct = handleAnswerSubmit(userAnswer, question.correctAnswers);
    setIsCorrect(correct);
    setIsAnswered(true);
    
    if (!correct) {
      setShowExplanation(true);
    }
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  const handleNext = () => {
    // Reset state before moving to next question
    setUserAnswer('');
    setIsAnswered(false);
    setIsCorrect(false);
    setShowExplanation(false);
    onNext();
  };

  return (
    <div className="bg-white bg-opacity-98 backdrop-blur-lg rounded-2xl p-10 shadow-2xl hover:transform hover:-translate-y-2 transition-all border border-[#FFC300]/20">
      <div className="flex items-start mb-8">
        <div className="bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 shadow-lg">
          {questionNumber}
        </div>
        <div className="text-xl font-medium text-[#4169E1] leading-relaxed">
          {question.question}
        </div>
      </div>

      <AnswerInput
        value={userAnswer}
        onChange={setUserAnswer}
        onSubmit={handleSubmit}
        disabled={isAnswered}
        isCorrect={isAnswered ? isCorrect : null}
        correctAnswer={isAnswered && !isCorrect ? question.correctAnswers[0] : null}
      />

      {isAnswered && isCorrect && (
        <button
          onClick={handleShowExplanation}
          className="mt-4 bg-gradient-to-r from-[#28B463] to-[#28B463] text-white px-6 py-2 rounded-lg font-semibold hover:from-[#28B463]/90 hover:to-[#28B463]/90 transition-all shadow-md"
        >
          Show Explanation
        </button>
      )}

      {showExplanation && (
        <Explanation explanation={question.explanation} />
      )}

      {isAnswered && (
        <div className="mt-8 text-center">
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all hover:from-[#E67E22] hover:to-[#C0392B]"
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;