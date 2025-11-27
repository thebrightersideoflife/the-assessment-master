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
    const safeValue = value || '';
    if (e.key === 'Enter' && !disabled && safeValue.trim()) {
      onSubmit(safeValue);
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

  const handleCheckAnswer = () => {
    const safeValue = value || '';
    if (!safeValue.trim() || disabled) return;
    onSubmit(safeValue);
  };

  // ✅ FIX: Move correctNums extraction outside the if block
  const generateHint = () => {
    if (!value || isCorrect) return null;
    
    const userVal = value.trim().toLowerCase();
    const hasNumber = /\d/.test(userVal);
    const hasUnit = /[a-z]/i.test(userVal.replace(/[0-9.,\s]/g, ''));
    
    // Common mistake hints
    const hints = [];
    
    // ✅ FIX: Extract correctNums FIRST, before using it
    const userNum = parseFloat(userVal.replace(/[^0-9.-]/g, ''));
    const correctNums = Array.isArray(correctAnswer)
      ? correctAnswer
          .map(ans => parseFloat(String(ans).replace(/[^0-9.-]/g, '')))
          .filter(n => !isNaN(n))
      : [];
    
    // Check if answer is close numerically
    if (!isNaN(userNum) && correctNums.length > 0) {
      const closest = correctNums.reduce((prev, curr) => 
        Math.abs(curr - userNum) < Math.abs(prev - userNum) ? curr : prev
      , Infinity);
      
      if (closest !== Infinity && Math.abs(closest - userNum) / Math.abs(closest) < 0.1) {
        hints.push("You're close! Double-check your calculation or rounding.");
      }
    }
    
    // Unit-related hints
    if (questionOptions.options?.requiredUnit && !hasUnit) {
      hints.push(`Don't forget to include the unit: ${questionOptions.options.requiredUnit}`);
    }
    
    if (questionOptions.options?.acceptedUnits?.length > 0 && hasUnit) {
      hints.push(`Make sure you're using an accepted unit: ${questionOptions.options.acceptedUnits.join(', ')}`);
    }
    
    // Symbolic answer hints
    if (!hasNumber && questionOptions.options?.allowSymbolic) {
      hints.push("Check your algebraic simplification. Remember to use ^ for exponents (e.g., x^2).");
    }
    
    // Fraction vs decimal
    if (userVal.includes('/') && Array.isArray(correctAnswer) && correctAnswer.some(ans => String(ans).includes('.'))) {
      hints.push("Try converting your fraction to a decimal, or vice versa.");
    }
    
    // Sign errors - now correctNums is accessible here
    if (hasNumber && userNum < 0 && correctNums.length > 0 && correctNums.every(n => n > 0)) {
      hints.push("Check the sign of your answer. Should it be positive or negative?");
    } else if (hasNumber && userNum > 0 && correctNums.length > 0 && correctNums.every(n => n < 0)) {
      hints.push("Check the sign of your answer. Should it be positive or negative?");
    }
    
    return hints.length > 0 ? hints : ["Review the question carefully and check your work step by step."];
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
    const hints = generateHint();
    
    return (
      <div className="mt-4 space-y-3">
        <div
          className={`font-semibold flex items-center gap-2 ${
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
              'Incorrect.'
            )}
          </span>
        </div>
        
        {/* Show helpful hints for incorrect answers */}
        {!isCorrect && hints && hints.length > 0 && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
            <p className="text-sm font-semibold text-blue-800 mb-1">💡 Hint:</p>
            <ul className="text-sm text-blue-700 space-y-1">
              {hints.map((hint, i) => (
                <li key={i}>{hint}</li>
              ))}
            </ul>
          </div>
        )}
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
            disabled={!(value || '').trim()}
            className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
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