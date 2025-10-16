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
          This module doesn’t have a formula sheet yet.
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

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* ✅ Increased container width */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-14">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Modules", path: "/modules" },
            { label: module.name, path: `/modules/${module.id}` },
            { label: "Formula Sheet" },
          ]}
        />

        {/* Formula Sheet Card */}
        <div className="formula-sheet mt-10 bg-white shadow-2xl rounded-3xl p-12 print:shadow-none print:p-6 print:rounded-none print:bg-white print:text-black">
          {/* Branding Header */}
          <div className="text-center mb-10 border-b border-gray-200 pb-6 print:border-none">
            <div className="flex flex-col items-center">
              <img
                src="/logo.png"
                alt="The Brighter Side of Life Logo"
                className="h-14 w-auto mb-3 print:h-12"
              />
              <h1 className="text-[#4169E1] font-extrabold text-2xl sm:text-3xl tracking-tight">
                The Brighter Side of Life
              </h1>
              <p className="text-[#28B463] font-medium text-sm sm:text-base mt-1">
                Assessment Master • Learn | Practice | Excel
              </p>
            </div>
          </div>

          {/* Course Title */}
          <div className="mb-8 text-left border-l-4 border-[#FFC300] pl-4">
            <h2 className="text-3xl font-extrabold text-[#4169E1] leading-tight">
              {module.name}
            </h2>
            <p className="text-lg font-medium text-[#E67E22] mt-1">
              Formula Sheet
            </p>
          </div>

          {/* Formula Content */}
          <section className="prose max-w-none text-gray-800 print:text-black">
            {sheet.sections.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="text-xl font-semibold text-[#3498DB] mb-3">
                  {section.title}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {renderTextWithMathAndMarkdown(item)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p className="mb-2">
              © {new Date().getFullYear()} The Assessment Master
            </p>
            <a
              href={formulaSheetUrl}
              className="text-[#4169E1] hover:underline break-all"
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
