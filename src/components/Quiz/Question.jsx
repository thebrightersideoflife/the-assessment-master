import React, { useState, useRef } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import AnswerInput from './AnswerInput';

const renderMath = (text) => {
  if (!text) return null;
  return text.split(/(\$\$.*?\$\$|\$.*?\$)/).map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={index} math={part.slice(2, -2)} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    }
    return <span key={index}>{part}</span>;
  });
};

const Question = ({
  question,
  questionIndex,
  moduleId,
  weekId,
  onAnswerSubmit,
  onNext,
  totalQuestions,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const inputRef = useRef(null);

  if (!question) return null;

  const isLastQuestion = questionIndex === totalQuestions - 1;

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;

    // Call the hook's handleAnswerSubmit with correct parameters
    const result = onAnswerSubmit(
      userAnswer,
      question.id,
      inputRef.current || document.querySelector('.question-container')
    );

    setSubmitted(true);
    setFeedback(result);
    
    // If incorrect, show explanation immediately
    if (!result.isCorrect) {
      setShowExplanation(true);
    }
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  return (
    <div className="space-y-6 question-container">
      <div className="text-lg font-medium text-gray-800">
        {renderMath(question.text)}
      </div>

      {question.type === 'multiple-choice' && (
        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              disabled={submitted}
              onClick={() => setUserAnswer(opt)}
              className={`w-full text-left p-3 rounded-xl border transition-all ${
                userAnswer === opt
                  ? 'bg-[#3498DB]/10 border-[#3498DB] text-[#3498DB]'
                  : 'bg-white hover:bg-gray-50 border-gray-300'
              } ${submitted ? 'cursor-not-allowed opacity-60' : 'hover:shadow-md'}`}
            >
              {renderMath(opt)}
            </button>
          ))}
        </div>
      )}

      {question.type === 'open-ended' && (
        <AnswerInput
          value={userAnswer}
          onChange={setUserAnswer}
          onSubmit={handleSubmit}
          disabled={submitted}
          isCorrect={feedback?.isCorrect}
          correctAnswer={question.correctAnswers[0]}
          ref={inputRef}
        />
      )}

      <div className="flex items-center gap-4 flex-wrap">
        {!submitted ? (
          question.type === 'multiple-choice' && (
            <button
              onClick={handleSubmit}
              disabled={!userAnswer.trim()}
              className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          )
        ) : (
          <>
            {/* Show Explanation button - only for CORRECT answers */}
            {feedback?.isCorrect && !showExplanation && question.explanation && (
              <button
                onClick={handleShowExplanation}
                className="px-6 py-3 bg-gradient-to-r from-[#28B463] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Show Explanation
              </button>
            )}
            
            {/* Next/Finish button - changes text based on whether it's the last question */}
            <button
              onClick={onNext}
              className="px-6 py-3 bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </button>
          </>
        )}
      </div>

      {/* Feedback and Explanation Section */}
      {submitted && feedback && (
        <div
          className={`mt-4 p-4 rounded-xl border transition-all ${
            feedback.isCorrect
              ? 'bg-green-50 border-green-300 text-green-700'
              : 'bg-red-50 border-red-300 text-red-700'
          }`}
        >
          <p className="font-semibold mb-2 flex items-center gap-2">
            {feedback.isCorrect ? (
              <>
                <span className="text-xl">✅</span>
                <span>Correct!</span>
              </>
            ) : (
              <>
                <span className="text-xl">❌</span>
                <span>Incorrect</span>
              </>
            )}
          </p>

          {/* Show explanation if:
              1. Answer is incorrect (immediately)
              2. Answer is correct AND user clicked "Show Explanation"
          */}
          {showExplanation && question.explanation && (
            <div className="mt-3 p-3 bg-white/50 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Explanation:</p>
              <div className="text-gray-700 text-sm">
                {renderMath(question.explanation)}
              </div>
            </div>
          )}

          {/* Suggestions for incorrect answers */}
          {!feedback.isCorrect && feedback.suggestions?.length > 0 && (
            <div className="mt-3 p-3 bg-white/50 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">💡 Hints:</p>
              <ul className="text-sm list-disc list-inside text-gray-600 space-y-1">
                {feedback.suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;