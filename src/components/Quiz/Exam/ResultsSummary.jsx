// src/components/Quiz/Exam/ResultsSummary.jsx
import React from 'react';

/**
 * ResultsSummary
 * 
 * Displays exam results summary including:
 * - Student information header (if provided)
 * - Score percentage and pass/fail status
 * - Points breakdown
 * - Section-wise performance
 */
const ResultsSummary = ({
  exam,
  score,
  attemptNumber,
  studentDetails,
  questions,
  userAnswers,
}) => {
  const allDetailsFilled = 
    studentDetails.studentNumber &&
    studentDetails.studentName &&
    studentDetails.studentSurname &&
    studentDetails.institute &&
    studentDetails.campus;

  return (
    <>
      {/* Student Information Header (for print) */}
      {allDetailsFilled && (
        <div className="mb-8 pb-6 border-b-2 border-gray-300">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Student Information</h3>
              <div className="space-y-1 text-gray-700">
                <p><strong>Student Number:</strong> {studentDetails.studentNumber}</p>
                <p><strong>Name:</strong> {studentDetails.studentName} {studentDetails.studentSurname}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Institution Information</h3>
              <div className="space-y-1 text-gray-700">
                <p><strong>Institute:</strong> {studentDetails.institute}</p>
                <p><strong>Campus:</strong> {studentDetails.campus}</p>
              </div>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            <p><strong>Exam:</strong> {exam.title}</p>
            <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
            <p><strong>Attempt:</strong> #{attemptNumber || 1}</p>
          </div>
        </div>
      )}

      {/* Score Display */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {exam.title} - Results
        </h1>
        <div className="mb-4">
          <span className="inline-block bg-blue-100 border border-blue-300 px-4 py-1 rounded-full text-sm font-semibold text-blue-800">
            Attempt #{attemptNumber || 1}
          </span>
        </div>
        <div className={`text-6xl font-bold mb-4 ${
          score.percentage >= (exam.passingScore || 50) ? 'text-[#28B463]' : 'text-[#E67E22]'
        }`}>
          {score.percentage}%
        </div>
        <p className="text-xl text-gray-600 mb-2">
          {score.earnedPoints} / {score.totalPoints} points
        </p>
        <div className={`inline-block px-6 py-2 rounded-full text-white font-semibold ${
          score.percentage >= (exam.passingScore || 50) ? 'bg-[#28B463]' : 'bg-[#E67E22]'
        }`}>
          {score.percentage >= (exam.passingScore || 50) ? '✓ PASSED' : '✗ NEEDS IMPROVEMENT'}
        </div>
      </div>

      {/* Performance by Section */}
      {exam.sections && exam.sections.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Performance by Section
          </h3>
          {exam.sections.map(section => {
            const sectionQs = questions.filter(q => q.sectionId === section.id);
            let sectionCorrect = 0;
            let sectionTotal = 0;

            sectionQs.forEach(q => {
              const userAnswer = userAnswers[q.id] || "";
              const isCorrect = Array.isArray(q.correctAnswers)
                ? q.correctAnswers.includes(userAnswer)
                : q.correctAnswers === userAnswer;
              
              sectionTotal += q.points || 1;
              if (isCorrect) sectionCorrect += q.points || 1;
            });

            const sectionPercent = sectionTotal > 0 
              ? Math.round((sectionCorrect / sectionTotal) * 100)
              : 0;

            return (
              <div key={section.id} className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-gray-700">
                    {section.title}
                  </span>
                  <span className="text-gray-600">
                    {sectionCorrect}/{sectionTotal} ({sectionPercent}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#28B463] h-3 rounded-full transition-all duration-500"
                    style={{ width: `${sectionPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ResultsSummary;