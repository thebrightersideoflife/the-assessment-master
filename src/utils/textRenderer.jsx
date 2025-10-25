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
 * Check if a line is part of a markdown table
 */
const isTableLine = (line) => {
  const trimmed = line.trim();
  return trimmed.startsWith('|') && trimmed.endsWith('|') && (trimmed.match(/\|/g) || []).length >= 3;
};

/**
 * Parse markdown table rows
 */
const parseTableRow = (line) => {
  return line
    .split('|')
    .slice(1, -1)
    .map(cell => cell.trim());
};

/**
 * Check if a line is a table separator (e.g., |---|---|---| or |---|---|)
 */
const isTableSeparator = (line) => {
  const trimmed = line.trim();
  // Must start with |, end with |, and contain only |, -, :, and whitespace
  // Must have at least one instance of ---
  const hasOnlyValidChars = /^[\|\-:\s]+$/.test(trimmed);
  const startsAndEndsCorrectly = trimmed.startsWith('|') && trimmed.endsWith('|');
  const hasTripleDash = trimmed.includes('---');
  
  return hasOnlyValidChars && startsAndEndsCorrectly && hasTripleDash;
};

/**
 * Process markdown tables in text - returns array of blocks
 */
const processTablesInText = (text) => {
  const lines = text.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check if this is the start of a table
    if (isTableLine(line)) {
      // Look ahead to see if the next line is a separator
      const nextLineIdx = i + 1;
      
      if (nextLineIdx < lines.length && isTableSeparator(lines[nextLineIdx])) {
        const tableLines = [line, lines[nextLineIdx]]; // Header and separator
        i = nextLineIdx + 1;

        // Collect all subsequent table rows
        while (i < lines.length && isTableLine(lines[i]) && !isTableSeparator(lines[i])) {
          tableLines.push(lines[i]);
          i++;
        }

        // Parse the table
        const headers = parseTableRow(tableLines[0]);
        const rows = tableLines.slice(2).map(parseTableRow); // Skip header and separator

        result.push({
          type: 'table',
          headers,
          rows
        });
        
        continue;
      }
    }

    // Not a table, handle as text or break
    if (trimmedLine !== '') {
      result.push({
        type: 'text',
        content: line
      });
    } else {
      result.push({
        type: 'break'
      });
    }
    i++;
  }

  return result;
};

/**
 * Render a markdown table
 */
const renderTable = (headers, rows, key) => {
  return (
    <div key={key} className="my-6 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 shadow-sm">
        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800"
              >
                {processLineWithMathAndBold(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr 
              key={rowIdx} 
              className={rowIdx % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100'}
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="border border-gray-300 px-4 py-3 text-gray-700">
                  {processLineWithMathAndBold(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Enhanced text renderer: handles LaTeX, markdown tables, bold text, and line breaks.
 */
export const renderTextWithMathAndMarkdown = (text) => {
  if (!text) return null;

  try {
    const cleanText = sanitizeMathText(text);
    const blocks = processTablesInText(cleanText);

    return blocks.map((block, blockIdx) => {
      if (block.type === 'table') {
        return renderTable(block.headers, block.rows, `table-${blockIdx}`);
      } else if (block.type === 'text') {
        return (
          <React.Fragment key={`text-${blockIdx}`}>
            {processLineWithMathAndBold(block.content)}
            <br />
          </React.Fragment>
        );
      } else if (block.type === 'break') {
        return <br key={`break-${blockIdx}`} />;
      }
      return null;
    });
  } catch (error) {
    console.error('Text rendering error:', error);
    return (
      <span className="text-red-600">
        Error rendering content
      </span>
    );
  }
};

/**
 * Process a single line: handle both bold and math
 */
const processLineWithMathAndBold = (line) => {
  if (!line) return null;
  
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
  if (!text) return null;
  
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
  return <div className="text-renderer-wrapper">{renderTextWithMathAndMarkdown(content)}</div>;
};

export default TextRenderer;