// src/components/Quiz/ExamScreens.jsx
import React, { useEffect, useState } from "react";
import ExamQuestion from "./ExamQuestion";
import ExamAnswerInput from "./ExamAnswerInput";
import ExamExplanation from "./ExamExplanation";
import { renderMath } from "../../utils/mathRenderer";
import { handlePrintCheck } from "../../utils/examUtils";

/**
 * ExamScreens
 * 
 * Comprehensive UI component for all exam screens:
 * - START: Warning screen with attempt counter
 * - EXAM: Active exam with timer, questions, and navigation
 * - REVIEW: Check answers before final submission
 * - RESULTS: Score breakdown, question review, student form, and print
 */
const ExamScreens = (props) => {
  const {
    mode,
    exam,
    questions,
    currentQuestionIndex,
    currentQuestion,
    userAnswers,
    score,
    timeLeft,
    formatTime,
    isLastQuestion,
    attemptNumber,
    handleStart,
    handleAnswerChange,
    handleNext,
    handlePrev,
    handleShowResults,
    handleConfirmSubmit,
    handleReset,
  } = props;

  // Local state for answer confirmation and student details
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);
  const [studentDetails, setStudentDetails] = useState({
    fullName: "",
    studentId: "",
    moduleCode: "",
  });

  // Ensure math renders on every mode/question change
  useEffect(() => {
    renderMath();
  }, [currentQuestionIndex, mode]);

  // Reset answer confirmation when question changes
  useEffect(() => {
    setIsAnswerConfirmed(false);
  }, [currentQuestionIndex]);

  // ============================================================================
  // ========== START SCREEN (Warning + Instructions) ==========
  // ============================================================================
  if (mode === "start") {
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
  }

  // ============================================================================
  // ========== EXAM HEADER (Timer + Progress) ==========
  // ============================================================================
  const ExamHeader = () => {
    const timeWarning = timeLeft < 300; // Less than 5 minutes

    return (
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {exam.title}
            </h2>
            <p className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
              {exam.sections && currentQuestion.sectionId && (
                <> • {exam.sections.find(s => s.id === currentQuestion.sectionId)?.title}</>
              )}
            </p>
          </div>
          <div className="text-right">
            {exam.timeLimit && (
              <div className={`text-2xl font-bold mb-1 ${
                timeWarning ? 'text-red-600 animate-pulse' : 'text-gray-800'
              }`}>
                ⏱️ {formatTime}
              </div>
            )}
            <p className="text-sm text-gray-600">
              {Object.keys(userAnswers).filter(qId => userAnswers[qId] && userAnswers[qId].toString().trim() !== '').length} / {questions.length} answered
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#4169E1] h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` 
            }}
          />
        </div>
      </div>
    );
  };

  // ============================================================================
  // ========== ACTIVE EXAM SCREEN (Question Display + Navigation) ==========
  // ============================================================================
  if (mode === "exam") {
    const userAnswer = userAnswers[currentQuestion.id] || "";
    const hasAnswerContent = userAnswer && userAnswer.toString().trim() !== '';

    // Get current section info
    const currentSection = exam.sections?.find(s => s.id === currentQuestion.sectionId);

    return (
      <>
        <ExamHeader />

        {/* Section Information (if applicable) */}
        {currentSection && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              {currentSection.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {currentSection.description}
            </p>
            {currentSection.instructions && (
              <p className="text-sm text-blue-700 italic">
                📌 {currentSection.instructions}
              </p>
            )}
          </div>
        )}

        {/* Question Display Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
          <ExamQuestion
            question={currentQuestion}
            questionNumber={currentQuestion.questionNumber || currentQuestionIndex + 1}
            showPoints={true}
          />

          {/* Answer Input */}
          <div className="mt-6">
            <ExamAnswerInput
              question={currentQuestion}
              value={userAnswer}
              onChange={(val) => handleAnswerChange(currentQuestion.id, val)}
            />
          </div>

          {/* Confirm Answer Button */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => setIsAnswerConfirmed(true)}
              disabled={!hasAnswerContent || isAnswerConfirmed}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                hasAnswerContent && !isAnswerConfirmed
                  ? 'bg-gradient-to-r from-[#28B463] to-[#27AE60] text-white hover:from-[#27AE60] hover:to-[#229954]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isAnswerConfirmed ? '✓ Answer Confirmed' : 'Confirm Answer'}
            </button>
            {isAnswerConfirmed && (
              <div className="flex items-center gap-2 text-green-700 animate-fade-in">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Answer recorded! You may proceed.</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-4">
          {/* Previous Button */}
          {currentQuestionIndex > 0 ? (
            <button
              onClick={() => {
                handlePrev();
                setIsAnswerConfirmed(false);
              }}
              className="bg-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl shadow hover:bg-gray-300 transition-all"
            >
              ← Previous
            </button>
          ) : (
            <div />
          )}

          {/* Next / Review Button */}
          <button
            onClick={() => {
              if (isLastQuestion) {
                handleShowResults();
              } else {
                handleNext();
                setIsAnswerConfirmed(false);
              }
            }}
            className="bg-[#4169E1] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-600 transition-all"
          >
            {isLastQuestion ? "Review Answers →" : "Next Question →"}
          </button>
        </div>
      </>
    );
  }

  // ============================================================================
  // ========== REVIEW SCREEN (Check Answers Before Submit) ==========
  // ============================================================================
  if (mode === "review") {
    const answeredQuestions = Object.keys(userAnswers).filter(qId => {
      const answer = userAnswers[qId];
      return answer && answer.toString().trim() !== '';
    });
    const unansweredCount = questions.length - answeredQuestions.length;

    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            📝 Review Your Answers
          </h2>

          {/* Progress Summary */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-lg font-semibold text-gray-800">
              Progress: {answeredQuestions.length} / {questions.length} questions answered
            </p>
            {unansweredCount > 0 && (
              <p className="text-sm text-orange-600 mt-2">
                ⚠️ You have {unansweredCount} unanswered question(s)
              </p>
            )}
          </div>

          {/* Section-by-Section Review */}
          {exam.sections && exam.sections.length > 0 ? (
            exam.sections.map((section) => {
              const sectionQs = questions.filter(q => q.sectionId === section.id);
              const sectionAnswered = sectionQs.filter(q => {
                const ans = userAnswers[q.id];
                return ans && ans.toString().trim() !== '';
              }).length;

              return (
                <div key={section.id} className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {sectionAnswered} / {sectionQs.length} answered
                  </p>
                  <div className="space-y-4">
                    {sectionQs.map((q) => {
                      const userAnswer = userAnswers[q.id];
                      const hasAnswer = userAnswer && userAnswer.toString().trim() !== '';
                      
                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-lg border-2 ${
                            hasAnswer
                              ? 'bg-green-50 border-green-300'
                              : 'bg-gray-50 border-gray-300'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-800">
                              Question {q.questionNumber || questions.indexOf(q) + 1}
                            </h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              hasAnswer
                                ? 'bg-green-200 text-green-800'
                                : 'bg-gray-200 text-gray-600'
                            }`}>
                              {hasAnswer ? '✓ Answered' : '⚠️ Not Answered'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">
                            {q.questionText || q.question}
                          </p>
                          <div className="mt-2 p-3 bg-white rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-600">
                              <strong>Your Answer:</strong> {hasAnswer ? userAnswer : "(Not answered)"}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            // Simple list if no sections
            <div className="space-y-4 mb-8">
              {questions.map((q, index) => {
                const userAnswer = userAnswers[q.id];
                const hasAnswer = userAnswer && userAnswer.toString().trim() !== '';
                
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-2 ${
                      hasAnswer
                        ? 'bg-green-50 border-green-300'
                        : 'bg-gray-50 border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">
                        Question {q.questionNumber || index + 1}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        hasAnswer
                          ? 'bg-green-200 text-green-800'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {hasAnswer ? '✓ Answered' : '⚠️ Not Answered'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      {q.questionText || q.question}
                    </p>
                    <div className="mt-2 p-3 bg-white rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Your Answer:</strong> {hasAnswer ? userAnswer : "(Not answered)"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                // Return to exam mode but stay on last question
                handlePrev();
              }}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
            >
              ← Continue Exam
            </button>
            <button
              onClick={() => {
                if (unansweredCount > 0) {
                  const confirmSubmit = window.confirm(
                    `⚠️ You have ${unansweredCount} unanswered question(s).\n\nAre you sure you want to submit?`
                  );
                  if (confirmSubmit) {
                    handleConfirmSubmit();
                  }
                } else {
                  handleConfirmSubmit();
                }
              }}
              className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Submit Exam ✓
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // ========== RESULTS SCREEN ==========
  // ============================================================================
  if (mode === "results") {
    const allDetailsFilled = 
      studentDetails.fullName && 
      studentDetails.studentId && 
      studentDetails.moduleCode;

    return (
      <>
        {/* Print Styles */}
        <style>
          {`
            @media print {
              body * {
                visibility: hidden;
              }
              #printable-results, #printable-results * {
                visibility: visible;
              }
              #printable-results {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
              }
              .no-print {
                display: none !important;
              }
              .page-break {
                page-break-before: always;
              }
            }
          `}
        </style>

        <div className="max-w-6xl mx-auto p-6">
          <div id="printable-results" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-6">
            
            {/* --- STUDENT INFORMATION (Print Header) --- */}
            {allDetailsFilled && (
              <div className="mb-8 pb-6 border-b-2 border-gray-300">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Student Information</h3>
                    <div className="space-y-1 text-gray-700">
                      <p><strong>Student ID:</strong> {studentDetails.studentId}</p>
                      <p><strong>Name:</strong> {studentDetails.fullName}</p>
                      <p><strong>Module:</strong> {studentDetails.moduleCode}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Exam Information</h3>
                    <div className="space-y-1 text-gray-700">
                      <p><strong>Exam:</strong> {exam.title}</p>
                      <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                      <p><strong>Attempt:</strong> #{attemptNumber || 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- RESULTS SUMMARY --- */}
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
                {score.earnedPoints || score.correct} / {score.totalPoints || score.total} points
              </p>
              <div className={`inline-block px-6 py-2 rounded-full text-white font-semibold ${
                score.percentage >= (exam.passingScore || 50) ? 'bg-[#28B463]' : 'bg-[#E67E22]'
              }`}>
                {score.percentage >= (exam.passingScore || 50) ? '✓ PASSED' : '✗ NEEDS IMPROVEMENT'}
              </div>
            </div>

            {/* --- PERFORMANCE BY SECTION --- */}
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

            {/* --- DETAILED QUESTION REVIEW --- */}
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
                      {sectionQs.map((question, qIndex) => {
                        const userAnswer = userAnswers[question.id] || "";
                        const isCorrect = Array.isArray(question.correctAnswers)
                          ? question.correctAnswers.includes(userAnswer)
                          : question.correctAnswers === userAnswer;

                        return (
                          <div key={question.id} className="mb-6">
                            <div className="flex items-start justify-between mb-4">
                              <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                                isCorrect
                                  ? 'bg-[#28B463] text-white'
                                  : 'bg-[#C0392B] text-white'
                              }`}>
                                {isCorrect ? '✓ Correct' : '✗ Incorrect'} 
                                ({question.points || 1} {(question.points || 1) === 1 ? 'point' : 'points'})
                              </span>
                            </div>
                            <div className="mb-4">
                              <ExamQuestion 
                                question={question} 
                                questionNumber={question.questionNumber || qIndex + 1}
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
                    const isCorrect = Array.isArray(question.correctAnswers)
                      ? question.correctAnswers.includes(userAnswer)
                      : question.correctAnswers === userAnswer;

                    return (
                      <div key={question.id} className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                            isCorrect
                              ? 'bg-[#28B463] text-white'
                              : 'bg-[#C0392B] text-white'
                          }`}>
                            {isCorrect ? '✓ Correct' : '✗ Incorrect'} 
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

            {/* --- STUDENT DETAILS FORM --- */}
            <div className="no-print mt-8 pt-6 border-t-2 border-gray-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                📝 Enter Details for Certificate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={studentDetails.fullName}
                    onChange={(e) => setStudentDetails({...studentDetails, fullName: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student ID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your student ID"
                    value={studentDetails.studentId}
                    onChange={(e) => setStudentDetails({...studentDetails, studentId: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course/Module Code
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., INFO1234"
                    value={studentDetails.moduleCode}
                    onChange={(e) => setStudentDetails({...studentDetails, moduleCode: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => handlePrintCheck(studentDetails)}
                  disabled={!allDetailsFilled}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    allDetailsFilled
                      ? 'bg-gradient-to-r from-[#28B463] to-[#27AE60] text-white hover:shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  🖨️ Print Results
                </button>
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
  }

  // ============================================================================
  // ========== FALLBACK (Loading State) ==========
  // ============================================================================
  return (
    <div className="text-center text-gray-500 py-10">
      Loading exam data...
    </div>
  );
};

export default ExamScreens;