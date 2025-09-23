import React from 'react';
import { useStore } from '../store/useStore';
import { AiOutlineStar, AiOutlineBook, AiOutlineTrophy } from 'react-icons/ai';

const Dashboard = () => {
  const { stats, getAccuracy } = useStore();
  const accuracy = getAccuracy();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-[#4169E1] mb-8 text-center">
          Your Dashboard
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#28B463]/10 to-[#28B463]/20 p-6 rounded-xl text-center border border-[#28B463]/30">
            <div className="text-3xl font-bold text-[#28B463] mb-2">
              {stats.correct}
            </div>
            <div className="text-gray-700">Questions Correct</div>
          </div>
          
          <div className="bg-gradient-to-br from-[#3498DB]/10 to-[#3498DB]/20 p-6 rounded-xl text-center border border-[#3498DB]/30">
            <div className="text-3xl font-bold text-[#3498DB] mb-2">
              {stats.total}
            </div>
            <div className="text-gray-700">Total Attempted</div>
          </div>
          
          <div className="bg-gradient-to-br from-[#4169E1]/10 to-[#7b1fa2]/20 p-6 rounded-xl text-center border border-[#4169E1]/30">
            <div className="text-3xl font-bold text-[#4169E1] mb-2">
              {accuracy}%
            </div>
            <div className="text-gray-700">Accuracy Rate</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            {accuracy >= 80 ? 'Excellent performance! Keep it up! 🌟' : 
             accuracy >= 60 ? 'Good work! Room for improvement 📚' : 
             stats.total === 0 ? 'Start taking quizzes to see your stats!' :
             'Keep practicing to improve your scores! 💪'}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;