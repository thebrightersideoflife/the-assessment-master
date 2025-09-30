import React from 'react';

const ProgressBar = ({ current, total, correct, total_answered, accuracy }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="space-y-4 mb-6">
      <div
        className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={progressPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`Progress: ${current} of ${total} questions`}
      >
        <div
          className="absolute h-full bg-gradient-to-r from-[#28B463] to-[#3498DB] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600">
        <span>Question {current} of {total}</span>
        <span>Correct: {correct} | Total Answered: {total_answered} | Accuracy: {accuracy}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;