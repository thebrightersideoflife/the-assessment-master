import React, { useRef } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import MathSymbolPalette from './MathSymbolPalette';

// Helper to render text with LaTeX
const renderMath = (text) => {
  if (!text) return null;
 
  try {
    return text.split(/(\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\)|\\\[.*?\\\])/).map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        // Block math
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        // Inline math
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
        // LaTeX inline math
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('\\[') && part.endsWith('\\]')) {
        // LaTeX block math
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      }
      return <span key={index}>{part}</span>;
    });
  } catch (error) {
    console.error('Error rendering LaTeX:', error);
    return <span>{text}</span>;
  }
};

const AnswerInput = ({ value, onChange, onSubmit, disabled, isCorrect, correctAnswer }) => {
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled) {
      onSubmit();
    }
  };

  const handleInsertSymbol = (symbol) => {
    // insert symbol at the end of input value
    onChange(value + symbol);
    // Optional: focus input so students can continue typing
    inputRef.current?.focus();
  };

  const getInputClasses = () => {
    let classes = "flex-1 min-w-48 p-4 border-2 rounded-xl text-lg transition-all bg-white ";
    if (disabled) {
      classes += isCorrect ? "border-[#28B463] bg-[#28B463]/10" : "border-[#C0392B] bg-[#C0392B]/10";
    } else {
      classes += "border-gray-300 focus:border-[#4169E1] focus:shadow-lg focus:shadow-[#4169E1]/20";
    }
    return classes;
  };

  const getFeedbackMessage = () => {
    if (!disabled) return null;
   
    return (
      <div className={`font-semibold mt-4 flex items-center gap-2 ${isCorrect ? 'text-[#28B463]' : 'text-[#C0392B]'}`}>
        {isCorrect ? <AiOutlineCheck className="w-5 h-5" /> : <AiOutlineClose className="w-5 h-5" />}
        <span>
          {isCorrect ? (
            'Correct! Well done.'
          ) : (
            <span className="flex items-center gap-2 flex-wrap">
              <span>Incorrect. The answer was:</span>
              <span className="inline-flex items-center">{renderMath(correctAnswer)}</span>
            </span>
          )}
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-4" ref={containerRef}>
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
            onClick={onSubmit}
            className="bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all min-w-36 hover:from-[#3498DB] hover:to-[#4169E1]"
          >
            Check Answer
          </button>
        )}
      </div>
      {/* Mini math symbol palette */}
      {!disabled && (
        <MathSymbolPalette onInsert={handleInsertSymbol} />
      )}
      {getFeedbackMessage()}
    </div>
  );
};

export default AnswerInput;