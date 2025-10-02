import React, { useRef, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { 
  soundManager, 
  createConfetti, 
  createShakeEffect 
} from '../../utils/gamificationUtils';
import MathSymbolPalette from './MathSymbolPalette'; // <-- import palette

// Helper to render text with LaTeX
const renderMath = (text) => {
  if (!text) return null;
  
  return text.split(/(\$\$.*?\$\$|\$.*?\$)/).map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      // Block math
      return <InlineMath key={index} math={part.slice(2, -2)} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    }
    if (part.includes('\\')) {
      return <InlineMath key={index} math={part} />;
    }
    return <span key={index}>{part}</span>;
  });
};

const AnswerInput = ({ value, onChange, onSubmit, disabled, isCorrect, correctAnswer }) => {
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (disabled && isCorrect !== null) {
      if (isCorrect) {
        soundManager.playCorrectSound();
        setTimeout(() => {
          createConfetti(inputRef.current);
          inputRef.current?.classList.add('success-pulse');
          setTimeout(() => inputRef.current?.classList.remove('success-pulse'), 600);
        }, 30);
      } else {
        soundManager.playIncorrectSound();
        setTimeout(() => {
          createShakeEffect(containerRef.current);
          inputRef.current?.classList.add('error-flash');
          setTimeout(() => inputRef.current?.classList.remove('error-flash'), 400);
        }, 30);
      }
    }
  }, [disabled, isCorrect]);

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
