import React from 'react';
import { topics } from '../data/topics';
import { AiOutlineBook } from 'react-icons/ai';

const Topics = () => {
  // Array of color combinations for variety
  const colorCombinations = [
    { bg: 'from-[#FFC300]/10 to-[#E67E22]/20', border: '[#FFC300]/30', text: '[#E67E22]' },
    { bg: 'from-[#3498DB]/10 to-[#4169E1]/20', border: '[#3498DB]/30', text: '[#4169E1]' },
    { bg: 'from-[#28B463]/10 to-[#28B463]/20', border: '[#28B463]/30', text: '[#28B463]' },
    { bg: 'from-[#7b1fa2]/10 to-[#4169E1]/20', border: '[#7b1fa2]/30', text: '[#7b1fa2]' },
    { bg: 'from-[#C0392B]/10 to-[#E67E22]/20', border: '[#C0392B]/30', text: '[#C0392B]' },
    { bg: 'from-[#f50057]/10 to-[#7b1fa2]/20', border: '[#f50057]/30', text: '[#f50057]' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#FFC300]/20">
        <h2 className="text-3xl font-bold text-[#4169E1] mb-8 text-center">
          Available Topics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => {
            const colors = colorCombinations[index % colorCombinations.length];
            return (
              <div
                key={topic.id}
                className={`bg-gradient-to-br ${colors.bg} p-6 rounded-xl border border-${colors.border} hover:shadow-lg transition-all cursor-pointer hover:scale-105`}
              >
                <h3 className={`text-xl font-semibold text-${colors.text} mb-2`}>
                  {topic.name}
                </h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-[#28B463]/10 to-[#3498DB]/10 rounded-xl border border-[#28B463]/30">
          <div className="flex items-center gap-2 mb-2">
            <AiOutlineBook className="w-5 h-5 text-[#4169E1]" />
            <h3 className="text-lg font-semibold text-[#4169E1]">Study Tips</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Each topic builds upon previous knowledge. We recommend starting with fundamentals 
            and progressing through more advanced concepts. Practice regularly for best results!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topics;