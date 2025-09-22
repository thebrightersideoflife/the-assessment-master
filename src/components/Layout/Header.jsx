import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';

const Header = ({ onResetQuiz }) => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">AM</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-indigo-600">Assessment Master</h1>
          <p className="text-sm text-gray-600">Learn | Practice | Excel</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={onResetQuiz}
          className="hidden md:flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <FiRefreshCw size={16} />
          <span>Reset Quiz</span>
        </button>
      </div>
    </header>
  );
};

export default Header;