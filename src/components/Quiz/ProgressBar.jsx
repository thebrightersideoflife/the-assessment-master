import React from 'react';

const ProgressBar = ({ current, total, correct, total_answered, accuracy }) => {
  const progress = (current / total) * 100;

  return (
    <>
      {/* Stats */}
      <div className="flex justify-between items-center bg-white bg-opacity-90 p-6 rounded-xl mb-6 shadow-lg border border-[#FFC300]/20">
        <div className="text-center">
          <div className="text-3xl font-bold text-[#28B463]">{correct}</div>
          <div className="text-sm text-gray-600 mt-1">Correct</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#3498DB]">{total_answered}</div>
          <div className="text-sm text-gray-600 mt-1">Answered</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[#4169E1]">{accuracy}%</div>
          <div className="text-sm text-gray-600 mt-1">Accuracy</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-300 h-3 rounded-full mb-8 overflow-hidden shadow-inner">
        <div 
          className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] h-full transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

export default ProgressBar;