// src/utils/textRenderer.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/**
 * Remove invisible Unicode characters that break KaTeX rendering.
 */
const sanitizeMathText = (text) => {
  if (!text) return text;
  return text
    .replace(/[\u200B-\u200F\uFEFF\u2060-\u2064]/g, '')
    .replace(/\u2061/g, '')
    .replace(/\u2212/g, '-')
    .replace(/\u2032/g, "'");
};

/**
 * Enhanced text renderer: handles LaTeX, markdown, and line breaks.
 */
export const renderTextWithMathAndMarkdown = (text) => {
  if (!text) return null;

  try {
    const cleanText = sanitizeMathText(text);
    const lines = cleanText.split('\n');
    
    return lines.map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {processLineWithMathAndBold(line)}
        {lineIndex < lines.length - 1 && <br />}
      </React.Fragment>
    ));
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
 * Process a single line: handle both bold and math
 */
const processLineWithMathAndBold = (line) => {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const segments = [];
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        text: line.slice(lastIndex, match.index),
        bold: false
      });
    }
    
    segments.push({
      text: match[1],
      bold: true
    });
    
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < line.length) {
    segments.push({
      text: line.slice(lastIndex),
      bold: false
    });
  }

  if (segments.length === 0) {
    segments.push({ text: line, bold: false });
  }

  return segments.map((segment, segIndex) => {
    const content = processMathInText(segment.text);
    
    if (segment.bold) {
      return (
        <strong key={segIndex} className="font-semibold text-gray-900">
          {content}
        </strong>
      );
    }
    
    return <React.Fragment key={segIndex}>{content}</React.Fragment>;
  });
};

/**
 * Process math delimiters in text
 */
const processMathInText = (text) => {
  const mathRegex =
    /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\$[^\$\n]+?\$)/g;
  const parts = text.split(mathRegex).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={index} math={part.slice(2, -2)} />;
    }
    if (part.startsWith('\\[') && part.endsWith('\\]')) {
      return <BlockMath key={index} math={part.slice(2, -2)} />;
    }
    if (part.startsWith('\\(') && part.endsWith('\\)')) {
      return <InlineMath key={index} math={part.slice(2, -2)} />;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

/**
 * TextRenderer Component - Wraps the rendering logic
 */
const TextRenderer = ({ content }) => {
  return <>{renderTextWithMathAndMarkdown(content)}</>;
};

// ✅ ADD DEFAULT EXPORT
export default TextRenderer;