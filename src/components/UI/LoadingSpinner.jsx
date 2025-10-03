import React from 'react';

const LoadingSpinner = ({ text = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-indigo-500 border-r-indigo-500 animate-spin"></div>

        {/* Inner pulse */}
        <div className="absolute h-8 w-8 bg-indigo-500 rounded-full animate-pulse shadow-lg"></div>
      </div>

      {/* Text */}
      {text && (
        <p className="mt-6 text-gray-600 font-medium tracking-wide animate-fade-in">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
