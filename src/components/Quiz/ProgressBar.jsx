import React from 'react';

const ProgressBar = ({ current, total, correct, total_answered, accuracy }) => {
  const progress = (current / total) * 100;

  return (
    <>
      {/* Stats */}
      <div className="flex justify-between items-center bg-white bg-opacity-90 p-6 rounded-xl mb-6 shadow-lg">
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-600">{correct}</div>
          <div className="text-sm text-gray-600 mt-1">Correct</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-600">{total_answered}</div>
          <div className="text-sm text-gray-600 mt-1">Answered</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-600">{accuracy}%</div>
          <div className="text-sm text-gray-600 mt-1">Accuracy</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-300 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default ProgressBar;