import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/**
 * Remove invisible Unicode characters that break KaTeX rendering.
 * This fixes issues like "arctan⁡(x)" or random spacing in formulas.
 */
const sanitizeMathText = (text) => {
  if (!text) return text;

  // Replace known invisible characters
  return text
    // Remove zero-width, function-application, word joiner, etc.
    .replace(/[\u200B-\u200F\uFEFF\u2060-\u2064]/g, '')
    .replace(/\u2061/g, '') // specifically remove invisible function application char (⁡)
    // Replace odd Unicode minus signs or primes with ASCII equivalents
    .replace(/\u2212/g, '-') // minus sign → hyphen-minus
    .replace(/\u2032/g, "'"); // prime → apostrophe
};

/**
 * Enhanced text renderer: handles LaTeX, markdown, and line breaks.
 */
export const renderTextWithMathAndMarkdown = (text) => {
  if (!text) return null;

  try {
    const cleanText = sanitizeMathText(text);

    const mathRegex =
      /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
    const parts = cleanText.split(mathRegex).filter(Boolean);

    return parts.map((part, index) => {
      // $$ block math $$
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      }

      // $ inline math $
      if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }

      // \( inline math \)
      if (part.startsWith('\\(') && part.endsWith('\\)')) {
        return <InlineMath key={index} math={part.slice(2, -2)} />;
      }

      // \[ block math \]
      if (part.startsWith('\\[') && part.endsWith('\\]')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      }

      // Non-math text
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
 * Basic markdown formatting (**bold**) and line breaks (\n)
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

const processBoldText = (text) => {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = text.split(boldRegex);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-gray-900">
        {part}
      </strong>
    ) : (
      part
    )
  );
};
