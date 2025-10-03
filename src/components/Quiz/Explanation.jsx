import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Reusing the renderMath function from Question.jsx logic
const renderMath = (text) => {
  if (!text) return null;
  try {
    // Match $...$ (inline), $$...$$ (block), \(...\) (inline), \[...\] (block)
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\(.*?\\\)|\\\[.*?\\\])/g;
    const parts = text.split(mathRegex).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('\\[') && part.endsWith('\\]')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      }
      return <span key={index}>{part}</span>;
    });
  } catch (error) {
    console.error('Math rendering error:', error, 'Text:', text);
    return <span className="text-[#C0392B]">{text} (Math rendering failed)</span>;
  }
};

const Explanation = ({ explanation }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
      <h4 className="text-gray-800 mb-4 text-lg font-semibold">Explanation:</h4>
      <p className="prose text-gray-700 leading-relaxed">
        {renderMath(explanation)}
      </p>
    </div>
  );
};

export default Explanation;