import React from 'react';
import { renderTextWithMathAndMarkdown } from '../utils/textRenderer';

const Explanation = ({ explanation }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
      <h4 className="text-gray-800 mb-4 text-lg font-semibold">Explanation:</h4>
      <div className="prose text-gray-700 leading-relaxed">
        {renderTextWithMathAndMarkdown(explanation)}
      </div>
    </div>
  );
};

export default Explanation;