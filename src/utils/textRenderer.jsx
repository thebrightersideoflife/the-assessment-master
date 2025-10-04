// src/utils/textRenderer.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/**
 * Enhanced text renderer that handles both LaTeX math and markdown formatting
 * Supports: $...$, $...$, \(...\), \[...\], **bold**, and \n line breaks
 */
export const renderTextWithMathAndMarkdown = (text) => {
  if (!text) return null;

  try {
    // First, split by math expressions to preserve them
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
    const parts = text.split(mathRegex).filter(Boolean);

    return parts.map((part, index) => {
      // Handle block math
      if (part.startsWith('$') && part.endsWith('$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      }
      
      // Handle inline math
      if (part.startsWith(') && part.endsWith(')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }
      
      if (part.startsWith('\\(') && part.endsWith('\\)')) {
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      }
      
      if (part.startsWith('\\[') && part.endsWith('\\]')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      }

      // For non-math text, process markdown and line breaks
      return <span key={index}>{processMarkdown(part)}</span>;
    });
  } catch (error) {
    console.error('Text rendering error:', error, 'Text:', text);
    return <span className="text-red-600">{text} (Rendering failed)</span>;
  }
};

/**
 * Process markdown formatting (bold) and line breaks in text
 */
const processMarkdown = (text) => {
  // Split by line breaks first
  const lines = text.split('\n');
  
  return lines.map((line, lineIndex) => (
    <React.Fragment key={lineIndex}>
      {processBoldText(line)}
      {lineIndex < lines.length - 1 && <br />}
    </React.Fragment>
  ));
};

/**
 * Process bold markdown (**text**)
 */
const processBoldText = (text) => {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = text.split(boldRegex);
  
  return parts.map((part, index) => {
    // Odd indices are the content between ** **
    if (index % 2 === 1) {
      return <strong key={index} className="font-semibold text-gray-900">{part}</strong>;
    }
    return part;
  });
};

// ====== UPDATED EXPLANATION.JSX ======

// Replace your Explanation.jsx with this:
/*
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
*/

// ====== UPDATED QUESTION.JSX ======

// In Question.jsx, replace the renderMath import and usage:
// 1. Remove the local renderMath function
// 2. Add this import at the top:
//    import { renderTextWithMathAndMarkdown as renderMath } from '../utils/textRenderer';
// 3. Everything else stays the same - all your renderMath() calls will now support markdown!