import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-12 shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to The Assessment Master
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Master your mathematical skills with our interactive quiz system. 
          Practice algebra, calculus, geometry, and more with instant feedback and detailed explanations.
        </p>
        <Link 
          to="/quiz"
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;