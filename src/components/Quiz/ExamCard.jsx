// src/components/Quiz/ExamCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore';

const ExamCard = ({ exam }) => {
  const { getExamState } = useStore();
  const examState = getExamState(exam.id);
  const isSubmitted = examState.submitted;
  const results = examState.results;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
      {/* Exam Icon & Title */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">📝</span>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {exam.name}
            </h3>
            <p className="text-sm text-gray-600">
              {exam.description}
            </p>

            {/* 👇 Added Lecturer Credit */}
            {exam.examBy && (
              <p className="text-xs text-gray-500 mt-1 italic">
                <span className="font-medium text-gray-700">Exam by:</span> {exam.examBy}
              </p>
            )}
          </div>
        </div>
        
        {isSubmitted && (
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              results?.passed
                ? 'bg-green-100 text-green-700'
                : 'bg-orange-100 text-orange-700'
            }`}
          >
            {results?.passed ? '✓ Passed' : 'Review'}
          </span>
        )}
      </div>

      {/* Results Summary (if submitted) */}
      {isSubmitted && results && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Your Score:</span>
            <span
              className={`text-2xl font-bold ${
                results.passed ? 'text-[#28B463]' : 'text-[#E67E22]'
              }`}
            >
              {results.percentage}%
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Points: {results.earnedPoints} / {results.totalPoints}</span>
            <span>Passing: {exam.passingScore}%</span>
          </div>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                results.passed ? 'bg-[#28B463]' : 'bg-[#E67E22]'
              }`}
              style={{ width: `${results.percentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Action Button */}
      <Link
        to={`/exam/${exam.id}`}
        className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
          isSubmitted
            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            : 'bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white hover:shadow-lg'
        }`}
      >
        {isSubmitted ? '📊 View Results' : '🚀 Start Exam'}
      </Link>
    </div>
  );
};

export default ExamCard;