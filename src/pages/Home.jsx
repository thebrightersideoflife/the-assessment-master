import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineEdit, AiOutlineStar } from 'react-icons/ai';
import { modules } from '../data/modules';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div
        className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-12 shadow-2xl border border-[#FFC300]/20"
        role="region"
        aria-labelledby="home-title"
      >
        <h2
          id="home-title"
          className="text-4xl font-bold bg-gradient-to-r from-[#4169E1] to-[#3498DB] bg-clip-text text-transparent mb-6"
        >
          Welcome to The Assessment Master
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Master your mathematical skills with our interactive quiz system. Practice
          algebra, calculus, geometry, and more with instant feedback and detailed
          explanations.
        </p>
        <Link
          to="/modules"
          className="inline-block bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all hover:from-[#E67E22] hover:to-[#C0392B]"
          aria-label="Explore modules"
        >
          Explore Modules
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#28B463]/10 to-[#28B463]/20 border border-[#28B463]/30">
            <AiOutlineBook className="text-3xl text-[#28B463] mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-[#28B463] mb-2">Learn</h3>
            <p className="text-sm text-gray-600">Interactive lessons and concepts</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-[#3498DB]/10 to-[#3498DB]/20 border border-[#3498DB]/30">
            <AiOutlineEdit className="text-3xl text-[#3498DB] mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-[#3498DB] mb-2">Practice</h3>
            <p className="text-sm text-gray-600">Hands-on problem solving</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-[#4169E1]/10 to-[#4169E1]/20 border border-[#4169E1]/30">
            <AiOutlineStar className="text-3xl text-[#4169E1] mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-[#4169E1] mb-2">Excel</h3>
            <p className="text-sm text-gray-600">Achieve mastery and confidence</p>
          </div>
        </div>

        {/* Featured Modules */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#4169E1] mb-6">
            Featured Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.slice(0, 2).map((module) => (
              <Link
                key={module.id}
                to={`/modules/${module.id}`}
                className="p-6 rounded-xl bg-gradient-to-br from-[#3498DB]/10 to-[#4169E1]/20 border border-[#3498DB]/30 hover:shadow-lg transition-all"
                aria-label={`Explore ${module.name}`}
              >
                <h4 className="text-lg font-semibold text-[#3498DB] mb-2">
                  {module.name}
                </h4>
                <p className="text-sm text-gray-600">
                  Start learning {module.name} with interactive lessons and quizzes.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;