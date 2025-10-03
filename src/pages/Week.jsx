// src/pages/Week.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Breadcrumb from '../components/UI/Breadcrumb';
import VideoEmbed from '../components/UI/VideoEmbed';
import WeekQuizzes from './WeekQuizzes';
import { modules } from '../data/modules';
import { useStore } from '../store/useStore';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { AiOutlineRight } from 'react-icons/ai';

const Week = () => {
  const { moduleId, weekId } = useParams();
  const navigate = useNavigate();
  const { isModuleVisible } = useStore();
  
  const module = modules.find((m) => m.id === moduleId);
  const week = module?.weeks.find((w) => w.id === weekId);
  
  const [openTopicId, setOpenTopicId] = useState(null);
  
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
  
  useEffect(() => {
    if (!module || !isModuleVisible(moduleId) || !week) {
      const timer = setTimeout(() => {
        navigate('/modules', { replace: true });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [module, week, navigate, isModuleVisible, moduleId]);
  
  const toggleTopic = (topicId) => {
    setOpenTopicId(openTopicId === topicId ? null : topicId);
  };
  
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
      
      {/* Accordion Topics */}
      <div className="space-y-4">
        {week.topics.map((topic) => {
          const isOpen = openTopicId === topic.id;
          
          return (
            <div
              key={topic.id}
              className="bg-white bg-opacity-98 rounded-lg shadow-md border border-[#FFC300]/20 overflow-hidden transition-all"
              role="region"
              aria-labelledby={`topic-header-${topic.id}`}
            >
              <button
                id={`topic-header-${topic.id}`}
                onClick={() => toggleTopic(topic.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`topic-content-${topic.id}`}
              >
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-[#3498DB]">
                    {topic.name}
                  </h2>
                  <p className="text-sm font-bold mt-1" style={{ color: '#4d4d4dff' }}>
                    {topic.competency}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <AiOutlineRight className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-90 text-[#4169E1]' : 'rotate-0 text-gray-400'}`} />
                </div>
              </button>
              
              <div
                id={`topic-content-${topic.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'max-h-screen opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-2'
                }`}
                role="region"
                aria-hidden={!isOpen}
              >
                <div className="px-6 pb-6 pt-2 space-y-4">
                  <div className="prose text-gray-700">
                    {renderMath(topic.explanation)}
                  </div>
                  
                  {topic.example && (
                    <div className="bg-[#4169E1]/5 rounded-lg p-4 border-l-4 border-[#4169E1]">
                      <strong className="text-[#4169E1] block mb-2">Example:</strong>
                      <div className="prose text-gray-700">
                        {renderMath(topic.example)}
                      </div>
                    </div>
                  )}
                  
                  {topic.studyTip && (
                    <div className="bg-[#FFC300]/10 rounded-lg p-4 border-l-4 border-[#FFC300]">
                      <strong className="text-[#E67E22] block mb-2">💡 Study Tip:</strong>
                      <p className="text-gray-700">
                        {renderMath(topic.studyTip)}
                      </p>
                    </div>
                  )}
                  
                  {topic.videoUrl && (
                    <div className="mt-4">
                      <VideoEmbed 
                        videoUrl={topic.videoUrl} 
                        title={`Video: ${topic.name}`} 
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Quiz Section - Now shows WeekQuizzes component */}
      <div className="bg-gradient-to-br from-[#4169E1]/10 to-[#3498DB]/10 rounded-2xl p-6 border border-[#3498DB]/30 mt-8">
        <WeekQuizzes moduleId={moduleId} weekId={weekId} />
      </div>
    </div>
  );
};

export default Week;