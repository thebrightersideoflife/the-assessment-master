import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { modules } from "../data/modules";
import { formulaSheets } from "../data/formulaSheets";
import { renderMath } from "../utils/mathRenderer";
import { renderTextWithMathAndMarkdown } from "../utils/textRenderer";
import Breadcrumb from "../components/UI/Breadcrumb";
import "katex/dist/katex.min.css";

const FormulaSheetPage = () => {
  const { moduleId } = useParams();
  const module = modules.find(
    (m) => m.id.toLowerCase() === moduleId.toLowerCase()
  );
  const sheet = formulaSheets.find(
    (s) => s.moduleId.toLowerCase() === moduleId.toLowerCase()
  );

  useEffect(() => {
    renderMath();
  }, [moduleId]);

  // Add print styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        /* Hide everything except formula sheet */
        body * {
          visibility: hidden;
        }
        
        .formula-sheet-print-wrapper,
        .formula-sheet-print-wrapper * {
          visibility: visible;
        }
        
        .formula-sheet-print-wrapper {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        
        /* Page setup */
        @page {
          size: A4;
          margin: 1.5cm 1.5cm 1.5cm 1.5cm;
        }
        
        /* Prevent text wrapping and maintain layout */
        .formula-sheet-print-wrapper {
          max-width: 100% !important;
          width: 210mm !important;
          padding: 0 !important;
          margin: 0 !important;
          background: white !important;
        }
        
        /* Prevent content from being cut off */
        .formula-sheet-print-wrapper h3 {
          page-break-after: avoid;
          page-break-inside: avoid;
        }
        
        .formula-sheet-print-wrapper ul,
        .formula-sheet-print-wrapper table {
          page-break-inside: avoid;
        }
        
        /* Allow page breaks between sections but not force them */
        .formula-sheet-print-wrapper .section-wrapper {
          page-break-inside: avoid;
          page-break-after: auto;
        }
        
        /* Maintain font sizes and prevent scaling */
        .formula-sheet-print-wrapper {
          font-size: 11pt !important;
        }
        
        .formula-sheet-print-wrapper h1 {
          font-size: 16pt !important;
        }
        
        .formula-sheet-print-wrapper h2 {
          font-size: 14pt !important;
        }
        
        .formula-sheet-print-wrapper h3 {
          font-size: 13pt !important;
          color: #4169E1 !important;
          background-color: #E8F4FF !important;
          padding: 8px 12px !important;
          border-radius: 6px !important;
          border-left: 4px solid #4169E1 !important;
        }
        
        .formula-sheet-print-wrapper p,
        .formula-sheet-print-wrapper li {
          font-size: 11pt !important;
        }
        
        /* Prevent table overflow */
        .formula-sheet-print-wrapper table {
          width: 100% !important;
          table-layout: auto !important;
          font-size: 10pt !important;
        }
        
        .formula-sheet-print-wrapper td,
        .formula-sheet-print-wrapper th {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          padding: 4px 6px !important;
        }
        
        /* KaTeX math rendering adjustments */
        .formula-sheet-print-wrapper .katex {
          font-size: 1em !important;
        }
        
        .formula-sheet-print-wrapper .katex-display {
          margin: 0.5em 0 !important;
        }
        
        /* Print colors for branding */
        .formula-sheet-print-wrapper .print-blue {
          color: #4169E1 !important;
        }
        
        .formula-sheet-print-wrapper .print-green {
          color: #28B463 !important;
        }
        
        .formula-sheet-print-wrapper .print-orange {
          color: #E67E22 !important;
        }
        
        .formula-sheet-print-wrapper .print-yellow-border {
          border-color: #FFC300 !important;
        }
        
        /* Compact header for print */
        .formula-sheet-print-wrapper .print-header {
          margin-bottom: 12px !important;
          padding-bottom: 8px !important;
        }
        
        .formula-sheet-print-wrapper .print-logo {
          height: 32px !important;
          margin-bottom: 4px !important;
        }
        
        .formula-sheet-print-wrapper .print-title-section {
          margin-bottom: 12px !important;
          padding-left: 12px !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!module || !sheet) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Modules", path: "/modules" },
          ]}
        />
        <h1 className="text-2xl font-bold text-[#C0392B] mt-6">
          Formula Sheet Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          This module doesn't have a formula sheet yet.
        </p>
        <Link
          to="/modules"
          className="inline-block mt-6 bg-[#4169E1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#315dc1] transition"
        >
          Back to Modules
        </Link>
      </div>
    );
  }

  const formulaSheetUrl = `https://the-assessment-master.vercel.app`;

  /**
   * Helper function to check if an item is likely a table line
   */
  const isTableItem = (item) => {
    const trimmed = item.trim();
    return trimmed.startsWith('|') && trimmed.includes('|') && (trimmed.match(/\|/g) || []).length >= 3;
  };

  /**
   * Group section items into table blocks and regular items
   */
  const groupSectionItems = (items) => {
    const groups = [];
    let currentTableLines = [];
    let inTable = false;

    items.forEach((item, index) => {
      if (isTableItem(item)) {
        currentTableLines.push(item);
        inTable = true;
      } else {
        // If we were collecting table lines, save them as a table block
        if (inTable && currentTableLines.length > 0) {
          groups.push({
            type: 'table',
            content: currentTableLines.join('\n')
          });
          currentTableLines = [];
          inTable = false;
        }
        
        // Add regular item
        if (item.trim() !== '') {
          groups.push({
            type: 'text',
            content: item
          });
        }
      }
    });

    // Don't forget any remaining table lines
    if (currentTableLines.length > 0) {
      groups.push({
        type: 'table',
        content: currentTableLines.join('\n')
      });
    }

    return groups;
  };

  // Assign colors to sections cyclically
  const sectionColors = [
    { bg: 'bg-blue-50', border: 'border-[#4169E1]', text: 'text-[#4169E1]', lightBg: 'bg-[#E8F4FF]' },
    { bg: 'bg-green-50', border: 'border-[#28B463]', text: 'text-[#28B463]', lightBg: 'bg-[#E8F9F0]' },
    { bg: 'bg-orange-50', border: 'border-[#E67E22]', text: 'text-[#E67E22]', lightBg: 'bg-[#FDF3E7]' },
    { bg: 'bg-yellow-50', border: 'border-[#FFC300]', text: 'text-[#F39C12]', lightBg: 'bg-[#FFFBEA]' },
    { bg: 'bg-cyan-50', border: 'border-[#3498DB]', text: 'text-[#3498DB]', lightBg: 'bg-[#EBF5FB]' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* ✅ Increased container width */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-14">
        {/* Breadcrumb - Will be hidden in print */}
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Modules", path: "/modules" },
            { label: module.name, path: `/modules/${module.id}` },
            { label: "Formula Sheet" },
          ]}
        />

        {/* Formula Sheet Card - Wrapped for print control */}
        <div className="formula-sheet-print-wrapper mt-10 bg-white shadow-2xl rounded-3xl p-12 print:shadow-none print:p-6 print:rounded-none print:bg-white">
          {/* Branding Header - More compact */}
          <div className="print-header text-center mb-6 border-b-2 border-gray-200 pb-4 print:border-b print:mb-3 print:pb-2">
            <div className="flex flex-col items-center">
              <img
                src="/logo.png"
                alt="The Brighter Side of Life Logo"
                className="print-logo h-12 w-auto mb-2"
              />
              <h1 className="print-blue text-[#4169E1] font-extrabold text-xl sm:text-2xl tracking-tight">
                The Brighter Side of Life
              </h1>
              <p className="print-green text-[#28B463] font-medium text-xs sm:text-sm mt-0.5">
                Assessment Master • Learn | Practice | Excel
              </p>
            </div>
          </div>

          {/* Course Title - More compact */}
          <div className="print-title-section mb-6 text-left border-l-4 print-yellow-border border-[#FFC300] pl-4 print:border-l-2 print:mb-3">
            <h2 className="print-blue text-2xl font-extrabold text-[#4169E1] leading-tight">
              {module.name}
            </h2>
            <p className="print-orange text-base font-medium text-[#E67E22] mt-0.5">
              Formula Sheet
            </p>
          </div>

          {/* Formula Content */}
          <section className="prose max-w-none text-gray-800 print:max-w-full">
            {sheet.sections.map((section, sectionIndex) => {
              const itemGroups = groupSectionItems(section.items);
              const colorScheme = sectionColors[sectionIndex % sectionColors.length];
              
              return (
                <div key={`${section.title}-${sectionIndex}`} className={`section-wrapper mb-6 p-4 rounded-lg ${colorScheme.lightBg} border-l-4 ${colorScheme.border} print:mb-4 print:p-3`}>
                  <h3 className={`text-lg font-bold ${colorScheme.text} mb-3 print:mb-2`}>
                    {section.title}
                  </h3>
                  
                  {itemGroups.map((group, groupIndex) => {
                    if (group.type === 'table') {
                      // Render table directly without list
                      return (
                        <div key={`table-${sectionIndex}-${groupIndex}`} className="my-3 print:my-2 print:overflow-visible">
                          {renderTextWithMathAndMarkdown(group.content)}
                        </div>
                      );
                    } else {
                      // Render regular text items in a list
                      return (
                        <ul key={`list-${sectionIndex}-${groupIndex}`} className="list-disc list-inside space-y-1.5 mb-3 print:space-y-1 print:mb-2">
                          <li className="leading-relaxed print:leading-normal">
                            {renderTextWithMathAndMarkdown(group.content)}
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              );
            })}
          </section>

          {/* Print Button */}
          <div className="text-center mt-10 print:hidden">
            <button
              onClick={() => window.print()}
              className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all"
            >
              🖨️ Print This Formula Sheet
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-10 pt-4 border-t border-gray-200 text-center text-xs text-gray-600 print:mt-6 print:pt-3 print:border-t print:border-gray-400 print:text-black">
            <p className="mb-1">
              © {new Date().getFullYear()} The Assessment Master
            </p>
            <a
              href={formulaSheetUrl}
              className="text-[#4169E1] hover:underline break-all print:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              {formulaSheetUrl}
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FormulaSheetPage;