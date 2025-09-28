import React, { useEffect } from 'react';
import { renderMath } from '../../utils/mathRenderer';

const Explanation = ({ explanation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      renderMath();
    }, 100);
    return () => clearTimeout(timer);
  }, [explanation]);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
      <h4 className="text-gray-800 mb-4 text-lg font-semibold">Explanation:</h4>
      <p className="prose text-gray-700 leading-relaxed">{explanation}</p>
    </div>
  );
};

export default Explanation;