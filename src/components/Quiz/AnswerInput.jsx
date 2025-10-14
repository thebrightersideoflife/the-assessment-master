import React, { useRef } from 'react';
import { AiOutlineCheck, AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import MathSymbolPalette from './MathSymbolPalette';

// Helper to render text with LaTeX or plain fallback
const renderMath = (text) => {
  if (!text) return null;
  try {
    return text.split(/(\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])/).map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('\\[') && part.endsWith('\\]')) {
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      }
      return <span key={index}>{part}</span>;
    });
  } catch {
    return <span>{text}</span>;
  }
};

const AnswerInput = ({
  value,
  onChange,
  onSubmit,
  disabled,
  isCorrect,
  correctAnswer,
  questionOptions = {},
  feedbackMessage = null,
}) => {
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled && value.trim()) {
      // ✅ FIXED: Just pass the value, let Question.jsx handle validation
      onSubmit(value);
    }
  };

  const handleInsertSymbol = (symbol) => {
    onChange(value + symbol);
    inputRef.current?.focus();
  };

  const getInputClasses = () => {
    let classes = 'flex-1 min-w-48 p-4 border-2 rounded-xl text-lg transition-all bg-white ';
    if (disabled) {
      classes += isCorrect
        ? 'border-[#28B463] bg-[#28B463]/10'
        : 'border-[#C0392B] bg-[#C0392B]/10';
    } else {
      classes +=
        'border-gray-300 focus:border-[#4169E1] focus:shadow-lg focus:shadow-[#4169E1]/20';
    }
    return classes;
  };

  // ✅ FIXED: Simple handler - no validation, just pass value up
  const handleCheckAnswer = () => {
    if (!value.trim() || disabled) return;
    onSubmit(value);
  };

  // Unified feedback logic
  const getFeedbackMessage = () => {
    // External feedbackMessage prop has priority
    if (feedbackMessage) {
      return (
        <div
          className={`mt-2 font-semibold flex items-center gap-2 ${
            feedbackMessage.isError ? 'text-red-600' : 'text-green-600'
          }`}
        >
          <AiOutlineInfoCircle className="w-5 h-5" />
          <span>{feedbackMessage.text}</span>
        </div>
      );
    }

    // If not submitted yet, show nothing
    if (!disabled) return null;

    // Handle unit errors specifically
    if (questionOptions.unitErrorMessage) {
      return (
        <div className="font-semibold mt-4 flex items-center gap-2 text-[#C0392B]">
          <AiOutlineInfoCircle className="w-5 h-5" />
          <span>{questionOptions.unitErrorMessage}</span>
        </div>
      );
    }

    // Default feedback
    return (
      <div
        className={`font-semibold mt-4 flex items-center gap-2 ${
          isCorrect ? 'text-[#28B463]' : 'text-[#C0392B]'
        }`}
      >
        {isCorrect ? (
          <AiOutlineCheck className="w-5 h-5" />
        ) : (
          <AiOutlineClose className="w-5 h-5" />
        )}
        <span>
          {isCorrect ? (
            'Correct! Well done.'
          ) : (
            <span className="flex items-center gap-2 flex-wrap">
              <span>Incorrect. The answer was:</span>
              <span className="inline-flex items-center">
                {Array.isArray(correctAnswer)
                  ? correctAnswer.map((ans, i) => (
                      <span key={i} className="mx-1">
                        {renderMath(ans)}
                      </span>
                    ))
                  : renderMath(correctAnswer)}
              </span>
            </span>
          )}
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          placeholder="Enter your answer..."
          className={getInputClasses()}
          aria-label="Answer input"
        />
        {!disabled && (
          <button
            onClick={handleCheckAnswer}
            disabled={!value.trim()}
            className="bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all min-w-36 hover:from-[#3498DB] hover:to-[#4169E1] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Check Answer
          </button>
        )}
      </div>

      {!disabled && <MathSymbolPalette onInsert={handleInsertSymbol} />}

      {/* Dynamic feedback message section */}
      {getFeedbackMessage()}
    </div>
  );
};

export default AnswerInput;