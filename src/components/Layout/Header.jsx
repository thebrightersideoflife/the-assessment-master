import React from 'react';

const Header = () => {
  return (
    <header className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl mx-4 my-6 p-8 text-center shadow-2xl">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2">
        The Assessment Master
      </h1>
      <p className="text-gray-600 text-lg">
        Interactive Math Quizzes for University IT Students
      </p>
    </header>
  );
};

export default Header;