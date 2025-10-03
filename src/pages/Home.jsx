import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBook, AiOutlineEdit, AiOutlineStar } from 'react-icons/ai';
import { modules } from '../data/modules';
import { useStore } from '../store/useStore';

const Home = () => {
  const { isModuleVisible } = useStore();

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
        <div className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto space-y-4">
          <p>
            An interactive learning platform inspired by{' '}
            <a
              href="https://www.siyavula.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4169E1] hover:text-[#3498DB] font-semibold underline transition-colors"
              aria-label="Visit Siyavula website"
            >
              Siyavula
            </a>{' '}
            and powered by Eduvos content, designed to transform how university students engage with IT-related mathematics.
          </p>
          <p>
            We believe learning should feel less like a chore and more like a challenge worth conquering. That’s why The Assessment Master turns complex academic concepts into bite-sized, gamified experiences—where every quiz is a chance to grow, every explanation a moment of clarity, and every module a step closer to mastery.
          </p>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-[#4169E1] mb-2">🎯 What You'll Find Here:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <span className="font-medium">Weekly Modules:</span> Curated summaries of key topics aligned with your coursework, updated in real-time to match your academic calendar.
              </li>
              <li>
                <span className="font-medium">Contextual Examples:</span> Real-world applications that bridge theory and practice, helping you see the “why” behind the “how.”
              </li>
              <li>
                <span className="font-medium">Study Tips & Memory Boosters:</span> Bite-sized strategies, visual aids, and videos to help you retain and recall with confidence.
              </li>
              <li>
                <span className="font-medium">Interactive Quizzes:</span> Instant feedback, flexible answer formats, and layered explanations that adapt to your input—just like Siyavula, but tailored for university-level IT and math.
              </li>
              <li>
                <span className="font-medium">No Login Required:</span> Jump in, learn, and level up—no accounts, no data collection, just pure learning. (Though we’re building toward optional progress tracking soon!)
              </li>
            </ul>
          </div>
          <p>
            <span className="font-semibold">🙌 Acknowledgments:</span> This project draws inspiration from the incredible work of{' '}
            <a
              href="https://www.siyavula.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4169E1] hover:text-[#3498DB] font-semibold underline transition-colors"
              aria-label="Visit Siyavula website"
            >
              Siyavula
            </a>
            , whose open-source approach to math and science education has empowered millions of learners. We also thank Eduvos for providing the academic foundation and content that fuels this platform.
          </p>
        </div>
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

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#4169E1] mb-6">
            Featured Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules
              .filter((mod) => isModuleVisible(mod.id))
              .slice(0, 2)
              .map((module) => (
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