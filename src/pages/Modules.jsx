import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/UI/Breadcrumb';
import { modules } from '../data/modules';

const Modules = () => {
  const { moduleId } = useParams();
  const selectedModule = moduleId ? modules.find((m) => m.id === moduleId) : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          selectedModule ? { label: 'Modules', path: '/modules' } : { label: 'Modules' },
          ...(selectedModule ? [{ label: selectedModule.name }] : []),
        ]}
      />

      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          {selectedModule ? selectedModule.name : 'Modules'}
        </h1>
        <p className="text-gray-500">
          {selectedModule
            ? `Choose a week or exam from the ${selectedModule.name} module.`
            : 'Browse all available modules below.'}
        </p>
      </header>

      {selectedModule ? (
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
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
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
                {m.description && (
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {m.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Modules;