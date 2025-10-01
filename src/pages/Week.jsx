import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Breadcrumb from '../components/UI/Breadcrumb';
import VideoEmbed from '../components/UI/VideoEmbed';
import { modules } from '../data/modules';
import { useStore } from '../store/useStore';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Week = () => {
  const { moduleId, weekId } = useParams();
  const navigate = useNavigate();
  const { isModuleVisible } = useStore();
  const module = modules.find((m) => m.id === moduleId);
  const week = module?.weeks.find((w) => w.id === weekId);

  // Custom renderMath function
  const renderMath = (text) => {
    if (!text) return null;
    return text.split(/(\$\$.*?\$\$|\$.*?\$)/).map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }
      return part;
    });
  };

  // Check if module or week is hidden or not found, redirect after 5 seconds
  useEffect(() => {
    if (!module || !isModuleVisible(moduleId) || !week) {
      const timer = setTimeout(() => {
        navigate('/modules', { replace: true });
      }, 5000); // 5-second delay
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [module, week, navigate, isModuleVisible]);

  // Error UI for hidden module or missing week
  if (!module || !isModuleVisible(moduleId) || !week) {
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
            <h2 className="text-xl font-semibold text-gray-800">Module or Week Not Available</h2>
            <p className="text-gray-600">
              {module && !isModuleVisible(moduleId)
                ? 'This module is not available. Redirecting in 5 seconds...'
                : 'Week or module not found. Redirecting in 5 seconds...'}
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Modules', path: '/modules' },
          { label: module.name, path: `/modules/${module.id}` },
          { label: week.name },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#4169E1]">{week.title}</h1>
      <div className="space-y-6">
        {week.topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white bg-opacity-98 rounded-lg p-6 shadow-md border border-[#FFC300]/20"
            role="region"
            aria-labelledby={`topic-${topic.id}`}
          >
            <h2
              id={`topic-${topic.id}`}
              className="text-2xl font-semibold text-[#3498DB] mb-4"
            >
              {topic.name} ({topic.competency})
            </h2>
            <div className="prose text-gray-700 mb-4">{renderMath(topic.explanation)}</div>
            {topic.example && (
              <div className="prose text-gray-700 mb-4">
                <strong>Example:</strong>
                <div>{renderMath(topic.example)}</div>
              </div>
            )}
            {topic.studyTip && (
              <p className="mt-2 text-gray-600">
                <strong>Study Tip:</strong> {renderMath(topic.studyTip)}
              </p>
            )}
            <VideoEmbed videoUrl={topic.videoUrl} title={`Video: ${topic.name}`} />
          </div>
        ))}
      </div>
      <Link
        to={`/quizzes/module/${moduleId}/${weekId}`}
        className="inline-block bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
        aria-label={`Start ${week.name} Quiz`}
      >
        Start {week.name} Quiz
      </Link>
    </div>
  );
};

export default Week;