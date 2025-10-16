// src/pages/Exam.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getExamById } from '../data/exams';
import ExamManagerCore from '../components/Quiz/Exam/ExamManagerCore';
import { renderMath } from '../utils/mathRenderer';

/**
 * Exam Page
 * 
 * Entry point for taking exams. Loads exam data and displays
 * pre-exam information before starting ExamManagerCore.
 */
const Exam = () => {
  const { examId } = useParams();
  const [exam, setExam] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load exam data
  useEffect(() => {
    const examData = getExamById(examId);
    if (!examData) {
      console.error(`Exam not found: ${examId}`);
      setLoading(false);
      return;
    }
    setExam(examData);
    setLoading(false);
    renderMath();
  }, [examId]);

  // Render math when exam loads
  useEffect(() => {
    if (exam) renderMath();
  }, [exam]);

  // Loading state
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <div className="animate-spin inline-block w-12 h-12 border-4 border-[#4169E1] border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Loading exam...</p>
        </div>
      </div>
    );
  }

  // Error state - exam not found
  if (!exam) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Exam Not Found
          </h2>
          <p className="text-red-600 mb-6">
            The exam "{examId}" could not be loaded.
          </p>
          <Link
            to="/modules"
            className="inline-block bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Back to Modules
          </Link>
        </div>
      </div>
    );
  }

  // Pre-exam information screen (before starting)
  if (!isStarted) {
    const totalPoints = exam.questions.reduce(
      (sum, q) => sum + (q.points || 0),
      0
    );

    return (
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <Link
            to={`/modules/${exam.moduleId}`}
            className="text-[#4169E1] hover:underline mb-4 inline-block"
          >
            ← Back to {exam.moduleId}
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {exam.title}
          </h1>
          <p className="text-lg text-gray-600">{exam.description}</p>
        </div>

        {/* Exam Info Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📋 Exam Information
          </h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <span className="text-3xl">📝</span>
              <div>
                <p className="font-semibold text-gray-700">Total Questions</p>
                <p className="text-2xl font-bold text-[#4169E1]">
                  {exam.questions.length}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-3xl">⭐</span>
              <div>
                <p className="font-semibold text-gray-700">Total Points</p>
                <p className="text-2xl font-bold text-[#4169E1]">
                  {totalPoints}
                </p>
              </div>
            </div>
            {exam.timeLimit && (
              <div className="flex items-start space-x-3">
                <span className="text-3xl">⏱️</span>
                <div>
                  <p className="font-semibold text-gray-700">Time Limit</p>
                  <p className="text-2xl font-bold text-[#E67E22]">
                    {exam.timeLimit} minutes
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-start space-x-3">
              <span className="text-3xl">🎯</span>
              <div>
                <p className="font-semibold text-gray-700">Passing Score</p>
                <p className="text-2xl font-bold text-[#28B463]">
                  {exam.passingScore}%
                </p>
              </div>
            </div>
          </div>

          {/* Sections Overview */}
          {exam.sections && exam.sections.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Exam Sections
              </h3>
              <div className="space-y-3">
                {exam.sections.map((section) => {
                  const sectionQuestions = exam.questions.filter(
                    (q) => q.sectionId === section.id
                  );
                  return (
                    <div
                      key={section.id}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                    >
                      <h4 className="font-bold text-gray-800 mb-1">
                        {section.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {section.description}
                      </p>
                      {section.instructions && (
                        <p className="text-sm text-gray-500 italic">
                          📌 {section.instructions}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-2">
                        {sectionQuestions.length} questions •{" "}
                        {sectionQuestions.reduce(
                          (sum, q) => sum + (q.points || 0),
                          0
                        )}{" "}
                        points
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">
              ⚠️ Important Instructions
            </h3>
            <ul className="space-y-2 text-sm text-yellow-900">
              <li>✓ You must complete all questions before submitting</li>
              <li>✓ You can navigate between questions freely</li>
              <li>✓ Review your answers before final submission</li>
              {exam.timeLimit && (
                <li>✓ The timer will start when you begin the exam</li>
              )}
              <li>✓ Once submitted, answers cannot be changed</li>
              <li>✓ Ensure stable internet connection throughout</li>
            </ul>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={() => setIsStarted(true)}
              className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              🚀 Start Exam
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Good luck! Take your time and show what you know.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Once started, render the exam manager
  return <ExamManagerCore exam={exam} />;
};

export default Exam;