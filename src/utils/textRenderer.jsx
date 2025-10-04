// src/utils/textRenderer.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/**
 * Enhanced text renderer that handles both LaTeX math and markdown formatting.
 * Supports:
 * - Inline math: $...$ or \( ... \)
 * - Block math: $$...$$ or \[ ... \]
 * - Markdown: **bold**, line breaks (\n)
 */
export const renderTextWithMathAndMarkdown = (text) => {
  if (!text) return null;

  try {
    // Split text by any math expressions (inline or block)
    const mathRegex =
      /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
    const parts = text.split(mathRegex).filter(Boolean);

    return parts.map((part, index) => {
      // Handle block math: $$ ... $$
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      }

      // Handle inline math: $ ... $
      if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }

      // Handle inline math: \( ... \)
      if (part.startsWith('\\(') && part.endsWith('\\)')) {
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      }

      // Handle block math: \[ ... \]
      if (part.startsWith('\\[') && part.endsWith('\\]')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      }

      // For non-math text, process markdown and line breaks
      return <span key={index}>{processMarkdown(part)}</span>;
    });
  } catch (error) {
    console.error('Text rendering error:', error, 'Text:', text);
    return (
      <span className="text-red-600">
        {text} (Rendering failed)
      </span>
    );
  }
};

/**
 * Process markdown formatting (**bold**) and line breaks (\n)
 */
const processMarkdown = (text) => {
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
    // Odd indices correspond to text between ** **
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-semibold text-gray-900">
          {part}
        </strong>
      );
    }
    return part;
  });
};
