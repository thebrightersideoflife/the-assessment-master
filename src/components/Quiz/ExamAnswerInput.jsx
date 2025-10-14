// src/components/Quiz/ExamAnswerInput.jsx
import React, { useRef } from 'react';
import MathSymbolPalette from './MathSymbolPalette';

const ExamAnswerInput = ({ question, value, onChange }) => {
  const inputRef = useRef(null);
  
  // ✅ Safety: ensure value is always a string
  const safeValue = value || '';
  
  const handleInsertSymbol = (symbol) => {
    onChange(safeValue + symbol);
    inputRef.current?.focus();
  };

  // Multiple choice rendering
  if (question.type === 'multiple-choice') {
    return (
      <div className="space-y-3">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          Select your answer:
        </p>
        {question.options.map((option, index) => {
          const letter = option.charAt(0); // Extract "A", "B", "C", "D"
          const isSelected = safeValue === letter;
          
          return (
            <button
              key={index}
              onClick={() => onChange(letter)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'border-[#4169E1] bg-blue-50'
                  : 'border-gray-300 bg-white hover:border-[#4169E1] hover:bg-blue-50'
              }`}
              aria-pressed={isSelected}
              aria-label={`Option ${letter}`}
            >
              <span className="font-semibold text-gray-800">{option}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Open-ended rendering
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-gray-700">
        Your answer:
      </p>
      
      <input
        ref={inputRef}
        type="text"
        value={safeValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your answer..."
        className="w-full p-4 border-2 border-gray-300 rounded-xl text-lg transition-all bg-white focus:border-[#4169E1] focus:shadow-lg focus:shadow-[#4169E1]/20"
        aria-label="Answer input"
      />
      
      <MathSymbolPalette onInsert={handleInsertSymbol} />
    </div>
  );
};

export default ExamAnswerInput;