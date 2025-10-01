import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/UI/Breadcrumb';
import { modules } from '../data/modules';
import { useStore } from '../store/useStore';

const Modules = () => {
  const { moduleId } = useParams();
  const { isModuleVisible } = useStore();
  const selectedModule = moduleId ? modules.find((m) => m.id === moduleId && isModuleVisible(m.id)) : null;

  // Redirect if module is hidden or not found
  if (moduleId && !selectedModule) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Modules', path: '/modules' },
          ]}
        />
        <div className="rounded-2xl border border-[#C0392B]/20 bg-white p-8 shadow-sm text-center">
          <div className="mx-auto max-w-md space-y-4">
            <div className="flex justify-center">
              <svg
                className="h-16 w-16 text-[#C0392B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Module Not Available</h2>
            <p className="text-gray-600">
              This module is currently not accessible. It may be hidden or does not exist.
            </p>
            <Link
              to="/modules"
              className="inline-block mt-4 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:ring-offset-2"
              aria-label="Back to modules"
            >
              Back to Modules
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Show weeks/exams for a visible module
  if (selectedModule) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <Breadcrumb
          items={[
            { label: 'Home', path: '/' },
            { label: 'Modules', path: '/modules' },
            { label: selectedModule.name },
          ]}
        />
        <header className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            {selectedModule.name}
          </h1>
          <p className="text-gray-500">
            Choose a week or exam from the {selectedModule.name} module.
          </p>
        </header>

        <div className="space-y-8">
          {selectedModule.weeks.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Weeks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedModule.weeks.map((week) => (
                  <Link
                    key={week.id}
                    to={`/modules/${selectedModule.id}/${week.id}`}
                    className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-[#4169E1]/40 transition-all"
                    aria-label={`Go to ${week.name}`}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">{week.name}</span>
                      <h3 className="mt-1 text-lg font-medium text-gray-800 group-hover:text-[#4169E1]">
                        {week.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {selectedModule.exams?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Exams</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedModule.exams.map((exam) => (
                  <Link
                    key={exam.id}
                    to={`/quizzes/module/${selectedModule.id}/${exam.id}`}
                    className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-[#28B463]/40 transition-all"
                    aria-label={`Start ${exam.name}`}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400">Exam</span>
                      <h3 className="mt-1 text-lg font-medium text-gray-800 group-hover:text-[#28B463]">
                        {exam.name}
                      </h3>
                      {exam.description && (
                        <p className="mt-1 text-sm text-gray-500">{exam.description}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  // Show all visible modules
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Modules' },
        ]}
      />
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Modules</h1>
        <p className="text-gray-500">Browse all available modules below.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules
          .filter((mod) => isModuleVisible(mod.id))
          .map((m) => (
            <Link
              key={m.id}
              to={`/modules/${m.id}`}
              className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#4169E1]/40 transition-all"
              aria-label={`Explore ${m.name}`}
            >
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[#4169E1]">
                  {m.name}
                </h2>
                {m.weeks?.length > 0 && (
                  <p className="mt-2 text-sm text-gray-500">
                    {m.weeks.length} {m.weeks.length === 1 ? 'week' : 'weeks'}
                    {m.exams?.length > 0 && ` • ${m.exams.length} ${m.exams.length === 1 ? 'exam' : 'exams'}`}
                  </p>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Modules;