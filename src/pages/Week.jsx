import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/UI/Breadcrumb';
import VideoEmbed from '../components/UI/VideoEmbed';
import { modules } from '../data/modules';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Week = () => {
  const { moduleId, weekId } = useParams();
  const module = modules.find((m) => m.id === moduleId);
  const week = module?.weeks.find((w) => w.id === weekId);

  const renderMath = (text) => {
    return text.split(/(\$\$.*?\$\$|\$.*?\$)/).map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }
      return part;
    });
  };

  if (!module || !week) {
    return (
      <div className="bg-white bg-opacity-98 backdrop-blur-lg rounded-2xl p-10 shadow-2xl text-center border border-[#3498DB]/30">
        <p className="text-xl text-[#3498DB]">
          Week not found. Please select a valid module and week.
        </p>
        <Link
          to="/modules"
          className="inline-block mt-4 text-[#4169E1] hover:underline"
          aria-label="Return to modules"
        >
          Back to Modules
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Modules', path: '/modules' },
          { label: module.id, path: `/modules/${module.id}` },
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