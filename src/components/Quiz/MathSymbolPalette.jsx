import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const MathSymbolPalette = ({ onInsert }) => {
  const symbols = [
    { symbol: "π", desc: "Pi (3.14159...)" },
    { symbol: "√(", desc: "Square root" },
    { symbol: "≠", desc: "Not equal" },
    { symbol: "∞", desc: "Infinity" },
    { symbol: "Δ", desc: "Delta (change)" },
    { symbol: "θ", desc: "Theta (angle)" },
    { symbol: "≈", desc: "Approximately equal" },

    // Logarithm functions
    { symbol: "log(", desc: "Logarithm base 10" },
    { symbol: "ln(", desc: "Natural logarithm (base e)" },

    // Arc trig functions
    { symbol: "sin⁻¹(", desc: "Inverse sine (arcsin)" },
    { symbol: "cos⁻¹(", desc: "Inverse cosine (arccos)" },
    { symbol: "tan⁻¹(", desc: "Inverse tangent (arctan)" },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {symbols.map((s, idx) => (
        <button
          key={idx}
          data-tooltip-id="math-tooltip"
          data-tooltip-content={s.desc}
          onClick={(e) => {
            e.preventDefault();
            onInsert(s.symbol);
          }}
          className="px-2 py-1 border rounded hover:bg-gray-100 text-lg"
          aria-label={`Insert ${s.desc}`}
        >
          {s.symbol}
        </button>
      ))}
      <Tooltip id="math-tooltip" />
    </div>
  );
};

export default MathSymbolPalette;