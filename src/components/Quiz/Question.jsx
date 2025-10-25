import React, { useState, useRef, useEffect } from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import AnswerInput from "./AnswerInput";
import { renderTextWithMathAndMarkdown as renderMath } from "../../utils/textRenderer";
import { AnswerValidator } from "../../utils/answerValidator";

const Question = ({
  question,
  questionIndex,
  moduleId,
  weekId,
  onAnswerSubmit,
  onNext,
  totalQuestions,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const hasSubmittedRef = useRef(false);
  const containerRef = useRef(null);

  // ✅ Safely handle missing correctAnswers
  const correctAnswers = Array.isArray(question?.correctAnswers)
    ? question.correctAnswers
    : [];

  // Reset state when the question changes
  useEffect(() => {
    setUserAnswer("");
    setSubmitted(false);
    setFeedback(null);
    setShowExplanation(false);
    hasSubmittedRef.current = false;
  }, [question?.id, questionIndex]);

  // ✅ Smooth scroll to question feedback after submission
  useEffect(() => {
    if (submitted && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted]);

  if (!question) return null;

  const isLastQuestion = questionIndex === totalQuestions - 1;

  // Extracts the letter from a multiple-choice option string (e.g., "A. ...")
  const extractOptionLetter = (option) => {
    const match = option.match(/^([A-Z])\./);
    return match ? match[1] : option;
  };

  // ✅ FIXED: Single submission handler for BOTH multiple-choice and open-ended
  const handleSubmit = (answerToSubmit) => {
    // Prevent duplicate submissions
    if (hasSubmittedRef.current || submitted) {
      console.log('[Question] Submit blocked - already submitted');
      return;
    }

    console.log('[Question] Processing submission:', answerToSubmit);
    hasSubmittedRef.current = true;

    // For multiple-choice, extract just the letter
    let finalAnswer = answerToSubmit;
    if (question.type === "multiple-choice") {
      finalAnswer = extractOptionLetter(answerToSubmit);
    }

    // ✅ Validate the answer
    const validationResult = AnswerValidator.validate(
      finalAnswer,
      question.correctAnswers || [],
      question.options || {}
    );

    // ✅ Build feedback result
    let result = {};
    if (validationResult.equivalent) {
      result = {
        isCorrect: true,
        method: validationResult.method,
        message: validationResult.message,
      };
    } else if (validationResult.unitError) {
      result = {
        isCorrect: false,
        unitError: true,
        suggestions: [validationResult.message || "Check your units."],
      };
    } else {
      result = {
        isCorrect: false,
        suggestions: validationResult.message ? [validationResult.message] : [],
      };
    }

    // ✅ Call parent's handler ONCE - it handles stats update
    onAnswerSubmit(
      finalAnswer,
      question.id,
      containerRef.current || document.querySelector(".question-container")
    );

    // Update local state
    setSubmitted(true);
    setFeedback(result);

    // Show explanation if incorrect
    if (!result.isCorrect) {
      setShowExplanation(true);
    }

    console.log('[Question] Submission complete');
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  return (
    <div className="space-y-6 question-container" ref={containerRef}>
      {/* Optional question image with zoom */}
      {question.image?.src && (
        <figure className="w-full flex flex-col items-center my-4">
          <Zoom>
            <img
              src={question.image.src}
              alt={question.image.alt || "Question image"}
              className="max-h-96 rounded-xl shadow-md hover:scale-[1.02] transition-transform object-contain cursor-zoom-in"
              loading="lazy"
            />
          </Zoom>
          {question.image.caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              {question.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Question text */}
      <div className="text-lg font-medium text-gray-800">
        {renderMath(question.text)}
      </div>

      {/* Unit requirement notice */}
      {question.options?.requiredUnit && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-blue-700 font-semibold">ℹ️ Note:</span>
            <span className="text-blue-700">
              Please express your answer in{" "}
              <strong>{question.options.requiredUnit}</strong>
            </span>
          </div>
        </div>
      )}

      {/* Accepted units notice */}
      {!question.options?.requiredUnit &&
        question.options?.acceptedUnits &&
        question.options.acceptedUnits.length > 0 && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-blue-700 font-semibold">ℹ️ Note:</span>
              <span className="text-blue-800">
                Acceptable units:{" "}
                <strong>{question.options.acceptedUnits.join(", ")}</strong>
              </span>
            </div>
          </div>
        )}

      {/* Multiple Choice Options */}
      {question.type === "multiple-choice" && (
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            const optionLetter = extractOptionLetter(opt);
            const isSelected = userAnswer === opt;
            const isCorrectOption =
              submitted && correctAnswers.includes(optionLetter);
            const isIncorrectSelection =
              submitted && isSelected && !feedback?.isCorrect;

            return (
              <button
                key={idx}
                disabled={submitted || hasSubmittedRef.current}
                onClick={() => !submitted && !hasSubmittedRef.current && setUserAnswer(opt)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  submitted
                    ? isCorrectOption
                      ? "bg-[#28B463]/10 border-[#28B463] text-[#28B463] font-semibold"
                      : isIncorrectSelection
                      ? "bg-[#C0392B]/10 border-[#C0392B] text-[#C0392B]"
                      : "bg-gray-50 border-gray-200 text-gray-500"
                    : isSelected
                    ? "bg-[#3498DB]/10 border-[#3498DB] text-[#3498DB] shadow-md"
                    : "bg-white hover:bg-gray-50 border-gray-300 hover:border-[#3498DB]/50"
                } ${
                  submitted || hasSubmittedRef.current
                    ? "cursor-not-allowed"
                    : "hover:shadow-md cursor-pointer"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      submitted
                        ? isCorrectOption
                          ? "border-[#28B463] bg-[#28B463]"
                          : isIncorrectSelection
                          ? "border-[#C0392B] bg-[#C0392B]"
                          : "border-gray-300"
                        : isSelected
                        ? "border-[#3498DB] bg-[#3498DB]"
                        : "border-gray-300"
                    }`}
                  >
                    {submitted && isCorrectOption && (
                      <span className="text-white text-sm">✓</span>
                    )}
                    {submitted && isIncorrectSelection && (
                      <span className="text-white text-sm">✗</span>
                    )}
                    {isSelected && !submitted && (
                      <span className="w-3 h-3 rounded-full bg-white"></span>
                    )}
                  </div>
                  <div className="flex-1">{renderMath(opt)}</div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Open-ended Answer */}
      {question.type === "open-ended" && (
        <AnswerInput
          value={userAnswer}
          onChange={setUserAnswer}
          onSubmit={handleSubmit}
          disabled={submitted || hasSubmittedRef.current}
          isCorrect={feedback?.isCorrect}
          correctAnswer={correctAnswers}
          questionOptions={{
            correctAnswers,
            options: question.options || {},
            unitErrorMessage: feedback?.unitError ? feedback.suggestions?.[0] : null,
          }}
        />
      )}

      {/* Action buttons */}
      <div className="flex items-center gap-4 flex-wrap">
        {!submitted ? (
          question.type === "multiple-choice" && (
            <button
              onClick={() => handleSubmit(userAnswer)}
              disabled={!userAnswer.trim() || hasSubmittedRef.current}
              className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Submit Answer
            </button>
          )
        ) : (
          <>
            {feedback?.isCorrect && !showExplanation && question.explanation && (
              <button
                onClick={handleShowExplanation}
                className="px-6 py-3 bg-gradient-to-r from-[#28B463] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                Show Explanation
              </button>
            )}
            <button
              onClick={onNext}
              className="px-6 py-3 bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              {isLastQuestion ? "Finish Quiz" : "Next Question"}
            </button>
          </>
        )}
      </div>

      {/* Feedback and explanation section */}
      {submitted && feedback && (
        <div
          aria-live="polite"
          className={`mt-4 p-4 rounded-xl border-2 transition-all ${
            feedback.isCorrect
              ? "bg-green-50 border-green-300 text-green-700"
              : "bg-red-50 border-red-300 text-red-700"
          }`}
        >
          <p className="font-semibold mb-2 flex items-center gap-2">
            {feedback.isCorrect ? (
              <>
                <span className="text-2xl">✅</span>
                <span>Correct. Well done!</span>
              </>
            ) : (
              <>
                <span className="text-2xl">❌</span>
                <span>Incorrect</span>
              </>
            )}
          </p>

          {/* Show correct answer if incorrect */}
          {!feedback.isCorrect && !feedback.unitError && (
            <div className="mt-2 p-3 bg-white/70 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800 mb-1">Correct answer:</p>
              <div className="text-gray-700 flex flex-wrap gap-2">
                {correctAnswers.map((ans, i) => (
                  <span key={i} className="inline-flex items-center">
                    {renderMath(ans)}
                    {i < correctAnswers.length - 1 && (
                      <span className="mx-1 text-gray-400">or</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Show explanation if available and visible */}
          {showExplanation && question.explanation && (() => {
            // DEBUG: Log explanation details
            console.log('=== QUESTION COMPONENT DEBUG ===');
            console.log('FULL EXPLANATION LENGTH:', question.explanation.length);
            console.log('EXPLANATION FIRST 300 CHARS:', question.explanation.substring(0, 300));
            console.log('EXPLANATION LAST 300 CHARS:', question.explanation.substring(question.explanation.length - 300));
            console.log('HAS TABLE MARKERS:', question.explanation.includes('|'));
            console.log('TABLE LINES COUNT:', question.explanation.split('\n').filter(l => l.includes('|')).length);
            console.log('================================');
            
            return (
              <div className="mt-3 p-3 bg-white/70 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2">Explanation:</p>
                <div className="text-gray-700">{renderMath(question.explanation)}</div>
              </div>
            );
          })()}

          {/* Show suggestions/hints for incorrect answers */}
          {!feedback.isCorrect && feedback.suggestions?.length > 0 && (
            <div className="mt-3 p-3 bg-white/70 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">
                {feedback.unitError ? "⚠️ Unit Issue:" : "💡 Hints:"}
              </p>
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