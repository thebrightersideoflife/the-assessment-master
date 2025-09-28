// src/pages/Modules.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/UI/Breadcrumb';
import { modules } from '../data/modules';

const Modules = () => {
  const { moduleId } = useParams();
  const selectedModule = moduleId ? modules.find((m) => m.id === moduleId) : null;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          selectedModule ? { label: 'Modules', path: '/modules' } : { label: 'Modules' },
          ...(selectedModule ? [{ label: selectedModule.name }] : []),
        ]}
      />
      <h1 className="text-3xl font-bold text-[#4169E1]">
        {selectedModule ? selectedModule.name : 'Modules'}
      </h1>
      {selectedModule ? (
        <div className="space-y-6">
          {selectedModule.weeks.map((week) => (
            <Link
              key={week.id}
              to={`/modules/${selectedModule.id}/${week.id}`}
              className="block bg-gradient-to-br from-[#3498DB]/10 to-[#4169E1]/20 p-6 rounded-xl border border-[#3498DB]/30 hover:shadow-lg transition-all"
              aria-label={`Go to ${week.name}`}
            >
              <h2 className="text-xl font-semibold text-[#3498DB]">
                {week.name}: {week.title}
              </h2>
            </Link>
          ))}
          {selectedModule.exams?.map((exam) => (
            <Link
              key={exam.id}
              to={`/quizzes/exam/${exam.id}`}
              className="block bg-gradient-to-br from-[#28B463]/10 to-[#28B463]/20 p-6 rounded-xl border border-[#28B463]/30 hover:shadow-lg transition-all"
              aria-label={`Start ${exam.name}`}
            >
              <h2 className="text-xl font-semibold text-[#28B463]">
                {exam.name}
              </h2>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m) => (
            <Link
              key={m.id}
              to={`/modules/${m.id}`}
              className="block bg-gradient-to-br from-[#3498DB]/10 to-[#4169E1]/20 p-6 rounded-xl border border-[#3498DB]/30 hover:shadow-lg transition-all"
              aria-label={`Explore ${m.name}`}
            >
              <h2 className="text-xl font-semibold text-[#3498DB]">
                {m.name}
              </h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Modules;