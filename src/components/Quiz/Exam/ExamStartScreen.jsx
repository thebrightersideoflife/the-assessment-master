// src/components/Quiz/Exam/ExamStartScreen.jsx
import React from 'react';
import { formatExamDate } from '../../../data/exams';

/**
 * ExamStartScreen
 * 
 * Warning and instructions screen shown before exam starts
 * Displays attempt counter, exam info, sections, and warnings
 */
const ExamStartScreen = ({ exam, questions, attemptNumber, handleStart }) => {
  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white border-2 border-orange-300 rounded-xl p-8 shadow-lg">
        {/* Warning Header */}
        <div className="text-center mb-6">
          <span className="text-6xl mb-4 block">⚠️</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Important: Read Before Starting
          </h2>
          {attemptNumber > 0 && (
            <div className="inline-block bg-red-100 border-2 border-red-300 px-4 py-2 rounded-lg mb-4">
              <p className="text-red-800 font-bold">
                ⚠️ This will be ATTEMPT #{attemptNumber + 1}
              </p>
            </div>
          )}
        </div>

        {/* Exam Information */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-orange-800 mb-3">
            📋 Exam Information
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Title:</strong> {exam.title}</span>
            </li>
            {/* Exam By (Lecturer Credit) */}
            {exam.examBy && (
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Exam by:</strong>{' '}
                  <span className="italic text-gray-600">{exam.examBy}</span>
                </span>
              </li>
            )}
            {/* Created On Date */}
            {exam.createdOn && (
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Created on:</strong>{' '}
                  <span className="text-gray-600">{formatExamDate(exam.createdOn)}</span>
                </span>
              </li>
            )}
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Total Questions:</strong> {questions.length}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Total Points:</strong> {totalPoints}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Passing Score:</strong> {exam.passingScore}%</span>
            </li>
            {exam.timeLimit && (
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Time Limit:</strong> {exam.timeLimit} minutes</span>
              </li>
            )}
          </ul>
        </div>

        {/* Sections Overview */}
        {exam.sections && exam.sections.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              📚 Exam Sections
            </h3>
            <div className="space-y-3">
              {exam.sections.map((section) => {
                const sectionQuestions = questions.filter(
                  (q) => q.sectionId === section.id
                );
                const sectionPoints = sectionQuestions.reduce(
                  (sum, q) => sum + (q.points || 0),
                  0
                );

                return (
                  <div
                    key={section.id}
                    className="bg-white border border-blue-200 rounded-lg p-4"
                  >
                    <h4 className="font-bold text-gray-800 mb-1">
                      {section.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {section.description}
                    </p>
                    {section.instructions && (
                      <p className="text-sm text-blue-700 italic mb-2">
                        📌 {section.instructions}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">
                      {sectionQuestions.length} questions • {sectionPoints} points
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Critical Warning */}
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-red-800 mb-3">
            🚨 Critical Warning
          </h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">1.</span>
              <span><strong>All attempts are permanently recorded.</strong> Every time you start or reset this exam, it counts as an attempt.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">2.</span>
              <span><strong>Make sure you are ready.</strong> Only start when you have sufficient time and are prepared.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">3.</span>
              <span><strong>Stable internet connection required.</strong> Ensure you won't be interrupted during the exam.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">4.</span>
              <span><strong>Timer cannot be paused.</strong> Once started, the countdown continues until submission or timeout.</span>
            </li>
            {exam.timeLimit && (
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">5.</span>
                <span><strong>Auto-submit at 0:00.</strong> When time expires, your exam will be automatically submitted.</span>
              </li>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href={`/modules/${exam.moduleId}`}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
          >
            ← Go Back
          </a>
          <button
            onClick={handleStart}
            className="px-8 py-3 bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white rounded-xl font-bold hover:shadow-lg transition-all"
          >
            I Understand - Start Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamStartScreen;