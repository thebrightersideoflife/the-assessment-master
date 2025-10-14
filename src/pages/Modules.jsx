import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/UI/Breadcrumb";
import { modules } from "../data/modules";
import ExamCard from "../components/Quiz/ExamCard";
import { renderMath } from "../utils/mathRenderer";
import useStore from "../store/useStore";

const Modules = () => {
  const { moduleId } = useParams();
  const { isModuleVisible } = useStore();

  const selectedModule = moduleId
    ? modules.find((m) => m.id === moduleId && isModuleVisible(m.id))
    : null;

  useEffect(() => {
    renderMath();
  }, [moduleId]);

  // ──────────────────────────────────────────────
  // Case 1: Module not found or hidden
  // ──────────────────────────────────────────────
  if (moduleId && !selectedModule) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Modules", path: "/modules" },
          ]}
        />
        <div className="rounded-2xl border border-brand-red/20 bg-white p-10 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            <svg
              className="h-16 w-16 text-brand-red"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856
                   c1.54 0 2.502-1.667 1.732-3L13.732 4
                   c-.77-1.333-2.694-1.333-3.464 0L3.34 16
                   c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Module Not Available
          </h2>
          <p className="text-gray-600 mb-6">
            This module is currently hidden or does not exist.
          </p>

          <Link
            to="/modules"
            aria-label="Back to modules"
            className="inline-block bg-gradient-to-r from-brand-darkBlue 
                       to-brand-blue text-white px-6 py-3 rounded-xl font-semibold
                       shadow hover:shadow-lg transition-all focus:outline-none
                       focus:ring-2 focus:ring-brand-darkBlue focus:ring-offset-2"
          >
            Back to Modules
          </Link>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────
  // Case 2: Single visible module (Weeks → Exams)
  // ──────────────────────────────────────────────
  if (selectedModule) {
    return (
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Modules", path: "/modules" },
              { label: selectedModule.name },
            ]}
          />

          <header className="mt-10 mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
              {selectedModule.name}
            </h1>
            <p className="text-gray-500 text-lg">
              Choose a week or exam from this module.
            </p>

            {selectedModule.formulaSheet?.available && (
              <Link
                to={selectedModule.formulaSheet.path}
                className="inline-block mt-5 bg-blue-100 text-blue-700
                           px-5 py-2 rounded-lg font-semibold hover:bg-blue-200
                           transition-all"
              >
                📋 View Formula Sheet
              </Link>
            )}
          </header>

          <div className="space-y-16">
            {/* Weeks Section */}
            {selectedModule.weeks?.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-8">
                  📅 Weeks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedModule.weeks.map((week) => (
                    <Link
                      key={week.id}
                      to={`/modules/${selectedModule.id}/${week.id}`}
                      aria-label={`Go to ${week.name}`}
                      className="group block rounded-2xl border border-gray-200
                                 bg-white p-6 shadow-sm hover:shadow-md
                                 hover:border-brand-darkBlue/40 transition-all
                                 animate-fade-in"
                    >
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-400 mb-1">
                          {week.name}
                        </span>
                        <h3
                          className="text-lg font-medium text-gray-800
                                     group-hover:text-brand-darkBlue transition-colors"
                        >
                          {week.title}
                        </h3>
                        {week.topics?.length > 0 && (
                          <p className="mt-2 text-xs text-gray-500">
                            {week.topics.length}{" "}
                            {week.topics.length === 1 ? "topic" : "topics"}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Exams Section — placed at bottom */}
            {selectedModule.exams?.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-8">
                  📝 Exams
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedModule.exams.map((exam) => (
                    <ExamCard
                      key={exam.id}
                      exam={exam}
                      moduleId={selectedModule.id}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────
  // Case 3: All modules view
  // ──────────────────────────────────────────────
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Modules" },
        ]}
      />

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
          📚 Modules
        </h1>
        <p className="text-gray-500 text-lg">
          Browse all available modules below.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules
          .filter((mod) => isModuleVisible(mod.id))
          .map((m) => (
            <Link
              key={m.id}
              to={`/modules/${m.id}`}
              aria-label={`Explore ${m.name}`}
              className="group block rounded-2xl border border-gray-200
                         bg-white p-8 shadow-sm hover:shadow-md
                         hover:border-brand-darkBlue/40 transition-all
                         animate-fade-in"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2
                    className="text-xl font-semibold text-gray-800 mb-2
                               group-hover:text-brand-darkBlue transition-colors"
                  >
                    {m.name}
                  </h2>
                  {(m.weeks?.length > 0 || m.exams?.length > 0) && (
                    <p className="text-sm text-gray-500">
                      {m.weeks?.length ?? 0}{" "}
                      {m.weeks?.length === 1 ? "week" : "weeks"}
                      {m.exams?.length > 0 &&
                        ` • ${m.exams.length} ${
                          m.exams.length === 1 ? "exam" : "exams"
                        }`}
                    </p>
                  )}
                </div>
                <div className="mt-4 text-brand-darkBlue font-medium text-sm">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Modules;
