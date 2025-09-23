import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const AnswerInput = ({ value, onChange, onSubmit, disabled, isCorrect, correctAnswer }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled) {
      onSubmit();
    }
  };

  const getInputClasses = () => {
    let classes = "flex-1 min-w-48 p-4 border-2 rounded-xl text-lg transition-all bg-white ";
    
    if (disabled) {
      if (isCorrect === true) {
        classes += "border-[#28B463] bg-[#28B463]/10";
      } else if (isCorrect === false) {
        classes += "border-[#C0392B] bg-[#C0392B]/10";
      }
    } else {
      classes += "border-gray-300 focus:border-[#4169E1] focus:shadow-lg focus:shadow-[#4169E1]/20";
    }
    
    return classes;
  };

  const getFeedbackMessage = () => {
    if (!disabled) return null;
    
    if (isCorrect) {
      return (
        <div className="text-[#28B463] font-semibold mt-4 flex items-center gap-2">
          <AiOutlineCheck className="w-5 h-5" />
          Correct! Well done.
        </div>
      );
    } else {
      return (
        <div className="text-[#C0392B] font-semibold mt-4 flex items-center gap-2">
          <AiOutlineClose className="w-5 h-5" />
          Incorrect. The answer was: {correctAnswer}
        </div>
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <input
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
      
      {getFeedbackMessage()}
    </div>
  );
};

export default AnswerInput;