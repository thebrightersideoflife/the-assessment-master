import React from 'react';

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
        classes += "border-green-500 bg-green-50";
      } else if (isCorrect === false) {
        classes += "border-red-500 bg-red-50";
      }
    } else {
      classes += "border-gray-300 focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-200";
    }
    
    return classes;
  };

  const getFeedbackMessage = () => {
    if (!disabled) return null;
    
    if (isCorrect) {
      return <div className="text-green-600 font-semibold mt-4">✅ Correct! Well done.</div>;
    } else {
      return <div className="text-red-600 font-semibold mt-4">❌ Incorrect. The answer was: {correctAnswer}</div>;
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
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all min-w-36"
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