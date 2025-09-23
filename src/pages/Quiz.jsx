import React from 'react';
import QuizManager from '../components/Quiz/QuizManager';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import { AiOutlineReload } from 'react-icons/ai';

const Quiz = () => {
  const { resetQuiz, stats, getAccuracy } = useStore();
  const navigate = useNavigate();

  const handleResetQuiz = () => {
    if (window.confirm('Are you sure you want to reset the quiz? This will clear all your progress.')) {
      resetQuiz();
      navigate('/');
      setTimeout(() => navigate('/quiz'), 10);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Header with Stats and Reset */}
      <div className="bg-gradient-to-r from-[#4169E1] to-[#3498DB] rounded-2xl p-6 text-white shadow-2xl border border-[#FFC300]/30">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Math Quiz Challenge</h2>
            <p className="text-blue-100">Test your knowledge with interactive math problems</p>
          </div>
          
          {/* Quick Stats */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FFC300]">{stats.correct}</div>
              <div className="text-sm text-blue-200">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FFC300]">{stats.total}</div>
              <div className="text-sm text-blue-200">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FFC300]">{getAccuracy()}%</div>
              <div className="text-sm text-blue-200">Accuracy</div>
            </div>
            
            <button
              onClick={handleResetQuiz}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#ad1457]/20 to-[#E67E22]/20 hover:from-[#880e4f]/30 hover:to-[#E67E22]/30 rounded-xl transition-all font-semibold backdrop-blur-sm border border-[#ffffff]/50"
            >
              <AiOutlineReload className="w-5 h-5" />
              <span>Reset Quiz</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Quiz Content */}
      <QuizManager />
    </div>
  );
};

export default Quiz;