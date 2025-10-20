import React, { useState } from 'react';
import ResultsSummary from './ResultsSummary';
import StudentDetailsForm from './StudentDetailsForm';
import ExamQuestion from '../ExamQuestion';
import ExamExplanation from '../ExamExplanation';
import { AnswerValidator } from '../../../utils/answerValidator';

/**
 * ExamResultsScreen
 * 
 * Complete results page with:
 * - Results summary (score, pass/fail)
 * - Section performance breakdown
 * - Detailed question review with explanations
 * - Student details form
 * - Print/Reset/Back buttons
 * 
 * ✅ FIXED: Now uses AnswerValidator for consistent validation
 */
const ExamResultsScreen = ({
  exam,
  questions,
  userAnswers,
  score,
  attemptNumber,
  handleReset,
}) => {
  const [studentDetails, setStudentDetails] = useState({
    studentNumber: '',
    studentName: '',
    studentSurname: '',
    institute: '',
    campus: ''
  });

  const allDetailsFilled = 
    studentDetails.studentNumber &&
    studentDetails.studentName &&
    studentDetails.studentSurname &&
    studentDetails.institute &&
    studentDetails.campus;

  return (
    <>
      {/* Print Styles */}
      <style>
        {`
          @media print {
            /* Show everything by default */
            body * {
              visibility: visible;
            }
            
            /* Hide only elements marked as no-print */
            .no-print {
              display: none !important;
            }
            
            /* Ensure printable content is positioned correctly */
            #printable-results {
              position: relative;
              width: 100%;
              margin: 0;
              padding: 20px;
            }
            
            /* Page breaks between sections */
            .page-break {
              page-break-before: always;
            }
            
            /* Avoid breaking inside question blocks */
            .avoid-break {
              page-break-inside: avoid;
            }
            
            /* Page margins */
            @page {
              margin: 1.5cm;
              size: A4;
            }
            
            /* Ensure colors print */
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto p-6">
        <div id="printable-results" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-6">
          
          {/* Results Summary Component */}
          <ResultsSummary
            exam={exam}
            score={score}
            attemptNumber={attemptNumber}
            studentDetails={studentDetails}
            questions={questions}
            userAnswers={userAnswers}
          />

          {/* Detailed Question Review */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📋 Detailed Review
            </h3>
            
            {exam.sections && exam.sections.length > 0 ? (
              // Organized by sections
              exam.sections.map((section, sectionIndex) => {
                const sectionQs = questions.filter(q => q.sectionId === section.id);
                
                return (
                  <div 
                    key={section.id} 
                    className={`border border-gray-200 rounded-lg p-6 ${sectionIndex > 0 ? 'page-break' : ''}`}
                  >
                    <h4 className="text-lg font-bold text-gray-800 mb-4">
                      {section.title}
                    </h4>
                    {sectionQs.map((question) => {
                      const userAnswer = userAnswers[question.id] || "";
                      
                      // ✅ CRITICAL FIX: Use AnswerValidator for consistent validation
                      // This ensures visual correctness matches the percentage calculation
                      const validationResult = AnswerValidator.validate(
                        userAnswer,
                        question.correctAnswers,
                        question.options || {}
                      );
                      const isCorrect = validationResult?.equivalent === true;

                      return (
                        <div key={question.id} className="mb-6 avoid-break">
                          <div className="flex items-start justify-between mb-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                              isCorrect
                                ? 'bg-[#28B463] text-white'
                                : 'bg-[#C0392B] text-white'
                            }`}>
                              {isCorrect ? '✓ Correct ' : '✗ Incorrect '} 
                              ({question.points || 1} {(question.points || 1) === 1 ? 'point' : 'points'})
                            </span>
                          </div>
                          <div className="mb-4">
                            <ExamQuestion 
                              question={question} 
                              questionNumber={question.questionNumber}
                              showPoints={false}
                            />
                          </div>
                          <ExamExplanation
                            question={question}
                            userAnswer={userAnswer}
                            isCorrect={isCorrect}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              // Simple list if no sections
              <div className="border border-gray-200 rounded-lg p-6">
                {questions.map((question, index) => {
                  const userAnswer = userAnswers[question.id] || "";
                  
                  // ✅ CRITICAL FIX: Use AnswerValidator for consistent validation
                  // This ensures visual correctness matches the percentage calculation
                  const validationResult = AnswerValidator.validate(
                    userAnswer,
                    question.correctAnswers,
                    question.options || {}
                  );
                  const isCorrect = validationResult?.equivalent === true;

                  return (
                    <div key={question.id} className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                          isCorrect
                            ? 'bg-[#28B463] text-white'
                            : 'bg-[#C0392B] text-white'
                        }`}>
                          {isCorrect ? '✓ Correct ' : '✗ Incorrect '} 
                          ({question.points || 1} {(question.points || 1) === 1 ? 'point' : 'points'})
                        </span>
                      </div>
                      <div className="mb-4">
                        <ExamQuestion 
                          question={question} 
                          questionNumber={question.questionNumber || index + 1}
                          showPoints={false}
                        />
                      </div>
                      <ExamExplanation
                        question={question}
                        userAnswer={userAnswer}
                        isCorrect={isCorrect}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Student Details Form Component */}
          <StudentDetailsForm
            studentDetails={studentDetails}
            setStudentDetails={setStudentDetails}
          />

          {/* Action Buttons */}
          <div className="no-print mt-6 flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              🔄 Reset Exam
            </button>
            <a
              href={`/modules/${exam.moduleId}`}
              className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-block"
            >
              ← Back to {exam.moduleId}
            </a>
          </div>

          {/* Footer Credit */}
          <div className="mt-6 text-center text-sm text-gray-500 italic">
            The pinnacle of Information Technology competency: 
            <a 
              href="https://the-assessment-master.vercel.app" 
              className="text-[#4169E1] hover:text-[#3498DB] underline font-semibold ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              the-assessment-master.vercel.app
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamResultsScreen;