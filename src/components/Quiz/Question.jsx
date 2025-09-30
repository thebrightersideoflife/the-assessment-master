// src/components/Quiz/Question.jsx
import React, { useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { soundManager } from "../../utils/gamificationUtils";
import { AnswerValidator } from "../../utils/answerValidator";

/**
 * Utility to render inline and block math inside text
 */
const renderMath = (text) => {
  if (!text) return null;
  return text.split(/(\$\$.*?\$\$|\$.*?\$)/).map((part, index) => {
    if (part.startsWith("$$") && part.endsWith("$$")) {
      return <BlockMath key={index} math={part.slice(2, -2)} />;
    } else if (part.startsWith("$") && part.endsWith("$")) {
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
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);

  if (!question) return null;

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;

    const result = AnswerValidator.checkAnswer(userAnswer, question.correctAnswers, {
      tolerance: 0.001,
    });

    setSubmitted(true);
    setFeedback(result);

    if (result.isCorrect) {
      soundManager.playCorrectSound();
    } else {
      soundManager.playWrongSound();
    }

    onAnswerSubmit(result.isCorrect, {
      questionId: question.id,
      userAnswer,
      method: result.method,
    });
  };

  return (
    <div className="space-y-6">
      {/* Question text */}
      <div className="text-lg font-medium text-gray-800">
        {renderMath(question.text)}
      </div>

      {/* Multiple-choice options */}
      {question.type === "multiple-choice" && (
        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              disabled={submitted}
              onClick={() => setUserAnswer(opt)}
              className={`w-full text-left p-3 rounded-xl border transition-all ${
                userAnswer === opt
                  ? "bg-[#3498DB]/10 border-[#3498DB] text-[#3498DB]"
                  : "bg-white hover:bg-gray-50 border-gray-300"
              }`}
            >
              {renderMath(opt)}
            </button>
          ))}
        </div>
      )}

      {/* Open-ended input */}
      {question.type === "open-ended" && (
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={submitted}
          placeholder="Type your answer"
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3498DB] focus:border-[#3498DB] disabled:bg-gray-100"
        />
      )}

      {/* Submit / Next */}
      <div className="flex items-center gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!userAnswer.trim()}
            className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-6 py-3 bg-gradient-to-r from-[#28B463] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Next
          </button>
        )}
      </div>

      {/* Feedback */}
      {submitted && feedback && (
        <div
          className={`mt-4 p-4 rounded-xl border ${
            feedback.isCorrect
              ? "bg-green-50 border-green-300 text-green-700"
              : "bg-red-50 border-red-300 text-red-700"
          }`}
        >
          <p className="font-semibold mb-2">
            {feedback.isCorrect ? "✅ Correct!" : "❌ Incorrect"}
          </p>

          {/* Show explanation if provided */}
          {question.explanation && (
            <div className="text-gray-700 text-sm">
              {renderMath(question.explanation)}
            </div>
          )}

          {/* Suggestions from AnswerValidator */}
          {!feedback.isCorrect && feedback.suggestions?.length > 0 && (
            <ul className="mt-2 text-sm list-disc list-inside text-gray-600">
              {feedback.suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
