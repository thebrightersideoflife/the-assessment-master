import React, { useState, useRef } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { questions } from '../../data/questions';
import { createConfetti, createShakeEffect, soundManager } from '../../utils/gamificationUtils';

const Question = ({ questionIndex, moduleId, weekId, onAnswerSubmit, onNext }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const inputRef = useRef(null);

  // Find the current question based on module, week, and index
  const question = questions.find(
    (q) => q.moduleId === moduleId && q.weekId === weekId && q.index === questionIndex
  );

  if (!question) {
    return (
      <div className="text-center text-[#C0392B]">
        Question not found.
      </div>
    );
  }

  // Render text with LaTeX math support
  const renderMath = (text) => {
    return text.split(/(\$\$.*?\$\$|\$.*?\$)/).map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }
      return part;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    const isCorrect = onAnswerSubmit(userAnswer, question.correctAnswers);

    setFeedback({
      isCorrect,
      message: isCorrect
        ? 'Correct! Well done! 🎉'
        : `Incorrect. Try again or proceed. The correct answer is: ${question.correctAnswers[0]}.`
    });

    if (isCorrect) {
      soundManager.playCorrectSound();
      createConfetti(inputRef.current);
    } else {
      soundManager.playIncorrectSound();
      createShakeEffect(inputRef.current);
    }
  };

  const handleNext = () => {
    setUserAnswer('');
    setFeedback(null);
    onNext();
  };

  return (
    <div className="space-y-6">
      {/* Question Text with Math Rendering */}
      <div className="prose text-gray-700">
        {renderMath(question.text)}
      </div>

      {/* Answer Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="answer" className="sr-only">
            Your answer
          </label>
          <input
            ref={inputRef}
            id="answer"
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your answer"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
            aria-label="Enter your answer"
            autoFocus
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#28B463] to-[#3498DB] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            aria-label="Submit answer"
          >
            Submit
          </button>

          {feedback && (
            <button
              type="button"
              onClick={handleNext}
              className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              aria-label="Next question"
            >
              Next
            </button>
          )}
        </div>
      </form>

      {/* Feedback Box */}
      {feedback && (
        <div
          className={`p-4 rounded-lg ${
            feedback.isCorrect
              ? 'bg-[#28B463]/10 border border-[#28B463]/30'
              : 'bg-[#C0392B]/10 border border-[#C0392B]/30'
          }`}
          role="alert"
        >
          <p className={feedback.isCorrect ? 'text-[#28B463]' : 'text-[#C0392B]'}>
            {renderMath(feedback.message)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Question;
