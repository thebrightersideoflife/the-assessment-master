import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ExamQuestion from './ExamQuestion';
import ExamAnswerInput from './ExamAnswerInput';
import ExamExplanation from './ExamExplanation';
import ExamNavigation from './ExamNavigation';
import useStore from '../../store/useStore';
import { AnswerValidator } from '../../utils/answerValidator';
import { renderMath } from '../../utils/mathRenderer';

const ExamManager = ({ exam, onExit }) => {
  const navigate = useNavigate();
  const { getExamState, updateExamAnswer, submitExam, isExamSubmitted, initializeExam, resetExam, getExamAttemptCount } = useStore();
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [confirmedAnswers, setConfirmedAnswers] = useState({});
  const [showReview, setShowReview] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [showStartWarning, setShowStartWarning] = useState(true);
  
  const [studentDetails, setStudentDetails] = useState({
    studentNumber: '',
    studentName: '',
    studentSurname: '',
    institute: '',
    campus: ''
  });

  const printRef = useRef(null);
  const attemptNumber = getExamAttemptCount(exam.id);

  useEffect(() => {
    const examState = getExamState(exam.id);
    if (examState.startTime) {
      setShowStartWarning(false);
    }
  }, [exam.id]);

  useEffect(() => {
    if (!showStartWarning && !isExamSubmitted(exam.id)) {
      initializeExam(exam.id);
    }
  }, [exam.id, showStartWarning]);

  useEffect(() => {
    if (exam.timeLimit && !isExamSubmitted(exam.id) && !showStartWarning) {
      const savedState = getExamState(exam.id);
      const startTime = savedState.startTime || Date.now();
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const totalSeconds = exam.timeLimit * 60;
      const remaining = Math.max(0, totalSeconds - elapsedSeconds);
      setTimeRemaining(remaining);
    }
  }, [exam.timeLimit, exam.id, isExamSubmitted, showStartWarning]);

  useEffect(() => {
    if (timeRemaining === null || timeRemaining === 0 || showResults || isExamSubmitted(exam.id)) return;
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining, showResults]);

  useEffect(() => {
    const savedState = getExamState(exam.id);
    if (savedState.answers) {
      setConfirmedAnswers(savedState.answers);
      const currentQ = getCurrentQuestion();
      if (currentQ) {
        setCurrentAnswer(savedState.answers[currentQ.id] || '');
      }
    }
  }, [exam.id, currentSectionIndex, currentQuestionIndex]);

  useEffect(() => {
    renderMath();
  }, [currentSectionIndex, currentQuestionIndex, showReview, showResults]);

  const getCurrentSection = () => exam.sections[currentSectionIndex];
  const getSectionQuestions = (sectionIndex = currentSectionIndex) => {
    const section = exam.sections[sectionIndex];
    return exam.questions.filter(q => q.sectionId === section.id);
  };
  const getCurrentQuestion = () => {
    const sectionQuestions = getSectionQuestions();
    return sectionQuestions[currentQuestionIndex];
  };

  const handleAnswerChange = (answer) => {
    setCurrentAnswer(answer);
    setShowConfirmationMessage(false);
  };

  const handleConfirmAnswer = () => {
    const question = getCurrentQuestion();
    if (!question) return;
    updateExamAnswer(exam.id, question.id, currentAnswer);
    setConfirmedAnswers(prev => ({
      ...prev,
      [question.id]: currentAnswer
    }));
    setShowConfirmationMessage(true);
    setTimeout(() => {
      setShowConfirmationMessage(false);
    }, 2000);
  };

  const goToNextQuestion = () => {
    const sectionQuestions = getSectionQuestions();
    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < exam.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    }
    setShowConfirmationMessage(false);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      const prevSectionQuestions = getSectionQuestions(currentSectionIndex - 1);
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentQuestionIndex(prevSectionQuestions.length - 1);
    }
    setShowConfirmationMessage(false);
  };

  const jumpToQuestion = (sectionIndex, questionIndex) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentQuestionIndex(questionIndex);
    setShowReview(false);
    setShowConfirmationMessage(false);
  };

  const getAllAnsweredQuestions = () => {
    return Object.keys(confirmedAnswers).filter(qId => {
      const answer = confirmedAnswers[qId];
      return answer && (answer + '').trim() !== '';
    });
  };

  const handleReviewClick = () => {
    setShowReview(true);
    renderMath();
  };

  const handleAutoSubmit = () => {
    if (isExamSubmitted(exam.id)) return;
    alert('⏰ Time is up! Your exam will be submitted automatically.');
    handleFinalSubmit();
  };

  const handleFinalSubmit = () => {
    if (isExamSubmitted(exam.id)) {
      alert('This exam has already been submitted.');
      return;
    }
    const unanswered = exam.questions.length - getAllAnsweredQuestions().length;
    if (unanswered > 0) {
      const confirmSubmit = window.confirm(
        `⚠️ You have ${unanswered} unanswered question(s).\n\nAre you sure you want to submit?`
      );
      if (!confirmSubmit) return;
    }
    let totalPoints = 0;
    let earnedPoints = 0;
    const gradedQuestions = exam.questions.map(question => {
      const userAnswer = confirmedAnswers[question.id] || '';
      const validationResult = AnswerValidator.validate(
        userAnswer,
        question.correctAnswers,
        question.options || {}
      );
      const isCorrect = validationResult?.equivalent === true;
      totalPoints += question.points || 0;
      if (isCorrect) {
        earnedPoints += question.points || 0;
      }
      return {
        ...question,
        userAnswer,
        isCorrect
      };
    });
    const percentage = totalPoints > 0 
      ? Math.round((earnedPoints / totalPoints) * 100)
      : 0;
    submitExam(exam.id, {
      answers: confirmedAnswers,
      gradedQuestions,
      totalPoints,
      earnedPoints,
      percentage,
      passed: percentage >= exam.passingScore,
      submittedAt: Date.now(),
      attemptNumber: attemptNumber
    });
    setShowResults(true);
    renderMath();
  };

  const handleResetExam = () => {
    const nextAttempt = attemptNumber + 1;
    const confirmReset = window.confirm(
      `⚠️ WARNING: Resetting will permanently record an additional attempt.\n\n` +
      `This will be recorded as ATTEMPT #${nextAttempt}.\n\n` +
      'Your previous results will be lost, and this action cannot be undone.\n\n' +
      'Do you want to proceed?'
    );
    if (confirmReset) {
      resetExam(exam.id);
      setCurrentSectionIndex(0);
      setCurrentQuestionIndex(0);
      setCurrentAnswer('');
      setConfirmedAnswers({});
      setShowReview(false);
      setShowResults(false);
      setTimeRemaining(null);
      setShowConfirmationMessage(false);
      setShowStartWarning(true);
      setStudentDetails({
        studentNumber: '',
        studentName: '',
        studentSurname: '',
        institute: '',
        campus: ''
      });
    }
  };

  const handlePrint = () => {
    if (!studentDetails.studentNumber || !studentDetails.studentName || !studentDetails.studentSurname) {
      alert('⚠️ Please fill in your student details before printing.');
      return;
    }
    if (!studentDetails.institute || !studentDetails.campus) {
      alert('⚠️ Please fill in your school details before printing.');
      return;
    }
    window.print();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isCurrentAnswerConfirmed = () => {
    const question = getCurrentQuestion();
    if (!question) return false;
    const confirmedAnswer = confirmedAnswers[question.id];
    return confirmedAnswer !== undefined && confirmedAnswer === currentAnswer;
  };

  const hasAnswerContent = () => {
    return currentAnswer && currentAnswer.trim() !== '';
  };

  if (showStartWarning) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white border-2 border-orange-300 rounded-xl p-8 shadow-lg">
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
                <span><strong>Total Questions:</strong> {exam.questions.length}</span>
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
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate(`/modules/${exam.moduleId}`)}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
            >
              ← Go Back
            </button>
            <button
              onClick={() => setShowStartWarning(false)}
              className="px-8 py-3 bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              I Understand - Start Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults || isExamSubmitted(exam.id)) {
    const examState = getExamState(exam.id);
    const { gradedQuestions, totalPoints, earnedPoints, percentage, passed, attemptNumber: currentAttempt } = examState.results || {};
    const allDetailsFilled = studentDetails.studentNumber && 
                            studentDetails.studentName && 
                            studentDetails.studentSurname &&
                            studentDetails.institute &&
                            studentDetails.campus;

    return (
      <>
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
          <div id="printable-results" ref={printRef} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-6">
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
                  <p><strong>Date:</strong> {new Date(examState.results.submittedAt).toLocaleString()}</p>
                  <p><strong>Attempt:</strong> #{currentAttempt || 1}</p>
                </div>
              </div>
            )}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {exam.title} - Results
              </h1>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 border border-blue-300 px-4 py-1 rounded-full text-sm font-semibold text-blue-800">
                  Attempt #{currentAttempt || 1}
                </span>
              </div>
              <div className={`text-6xl font-bold mb-4 ${
                passed ? 'text-[#28B463]' : 'text-[#E67E22]'
              }`}>
                {percentage}%
              </div>
              <p className="text-xl text-gray-600 mb-2">
                {earnedPoints} / {totalPoints} points
              </p>
              <div className={`inline-block px-6 py-2 rounded-full text-white font-semibold ${
                passed ? 'bg-[#28B463]' : 'bg-[#E67E22]'
              }`}>
                {passed ? '✓ PASSED' : '✗ NEEDS IMPROVEMENT'}
              </div>
            </div>
            <div className="mb-6">
              <div className="text-center mb-4 text-sm text-gray-600 italic">
                The pinnacle of Information Technology competency: <a href="https://the-assessment-master.vercel.app" className="text-[#4169E1] hover:text-[#3498DB] underline font-semibold">https://the-assessment-master.vercel.app</a>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Performance by Section
              </h3>
              {exam.sections.map(section => {
                const sectionQs = gradedQuestions.filter(q => q.sectionId === section.id);
                const sectionCorrect = sectionQs.filter(q => q.isCorrect).length;
                const sectionTotal = sectionQs.length;
                const sectionPercent = sectionTotal > 0 ? Math.round((sectionCorrect / sectionTotal) * 100) : 0;
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
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                📋 Detailed Review
              </h3>
              {exam.sections.map((section, sectionIndex) => {
                const sectionQs = gradedQuestions.filter(q => q.sectionId === section.id);
                return (
                  <div key={section.id} className={`border border-gray-200 rounded-lg p-6 ${sectionIndex > 0 ? 'page-break' : ''}`}>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">
                      {section.title}
                    </h4>
                    {sectionQs.map(question => (
                      <div key={question.id} className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                            question.isCorrect
                              ? 'bg-[#28B463] text-white'
                              : 'bg-[#C0392B] text-white'
                          }`}>
                            {question.isCorrect ? '✓ Correct ' : '✗ Incorrect '} 
                            ({question.points} {question.points === 1 ? 'point' : 'points'})
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
                          userAnswer={question.userAnswer}
                          isCorrect={question.isCorrect}
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            <div className="no-print mt-8 pt-6 border-t-2 border-gray-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                📝 Enter Details for Certificate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">Student Credentials</h4>
                  <input
                    type="text"
                    placeholder="Student Number"
                    value={studentDetails.studentNumber}
                    onChange={(e) => setStudentDetails({...studentDetails, studentNumber: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    value={studentDetails.studentName}
                    onChange={(e) => setStudentDetails({...studentDetails, studentName: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    value={studentDetails.studentSurname}
                    onChange={(e) => setStudentDetails({...studentDetails, studentSurname: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-700">School Credentials</h4>
                  <input
                    type="text"
                    placeholder="Institute (School Name)"
                    value={studentDetails.institute}
                    onChange={(e) => setStudentDetails({...studentDetails, institute: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Campus"
                    value={studentDetails.campus}
                    onChange={(e) => setStudentDetails({...studentDetails, campus: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#4169E1] focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handlePrint}
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
                  onClick={handleResetExam}
                  className="px-6 py-3 bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  🔄 Reset Exam
                </button>
                <button
                  onClick={() => navigate(`/modules/${exam.moduleId}`)}
                  className="px-6 py-3 bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  ← Back to {exam.moduleId}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (showReview) {
    const answeredCount = getAllAnsweredQuestions().length;
    const totalQuestions = exam.questions.length;
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            📝 Review Your Answers
          </h2>
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-lg font-semibold text-gray-800">
              Progress: {answeredCount} / {totalQuestions} questions answered
            </p>
            {answeredCount < totalQuestions && (
              <p className="text-sm text-orange-600 mt-2">
                ⚠️ You have {totalQuestions - answeredCount} unanswered question(s)
              </p>
            )}
          </div>
          {exam.sections.map((section, sectionIdx) => {
            const sectionQs = exam.questions.filter(q => q.sectionId === section.id);
            const sectionAnswered = sectionQs.filter(q => {
              const ans = confirmedAnswers[q.id];
              return ans && (ans + '').trim() !== '';
            }).length;
            return (
              <div key={section.id} className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {sectionAnswered} / {sectionQs.length} answered
                </p>
                <div className="grid grid-cols-5 gap-3">
                  {sectionQs.map((q, qIdx) => {
                    const isAnswered = confirmedAnswers[q.id] && (confirmedAnswers[q.id] + '').trim() !== '';
                    return (
                      <button
                        key={q.id}
                        onClick={() => jumpToQuestion(sectionIdx, qIdx)}
                        className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                          isAnswered
                            ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100'
                            : 'bg-gray-50 border-gray-300 text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        Q{q.questionNumber}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowReview(false)}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
            >
              ← Continue Exam
            </button>
            <button
              onClick={handleFinalSubmit}
              className="bg-gradient-to-r from-[#FFC300] to-[#E67E22] text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Submit Exam ✓
            </button>
          </div>
        </div>
      </div>
    );
  }

  const answeredCount = getAllAnsweredQuestions().length;
  const currentQuestion = getCurrentQuestion();
  const currentSection = getCurrentSection();
  const sectionQuestions = getSectionQuestions();

  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <p className="text-red-700">Error loading question. Please try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {exam.title}
            </h2>
            <p className="text-sm text-gray-600">
              Question {currentQuestion.questionNumber} of {exam.questions.length} •
              Section {currentSectionIndex + 1} of {exam.sections.length}
            </p>
          </div>
          <div className="text-right">
            {timeRemaining !== null && (
              <div className={`text-2xl font-bold mb-1 ${
                timeRemaining < 300 ? 'text-red-600 animate-pulse' : 'text-gray-800'
              }`}>
                ⏱️ {formatTime(timeRemaining)}
              </div>
            )}
            <p className="text-sm text-gray-600">
              {answeredCount} / {exam.questions.length} answered
            </p>
          </div>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#4169E1] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / exam.questions.length) * 100}%` }}
          />
        </div>
      </div>
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
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <ExamQuestion 
          question={currentQuestion}
          questionNumber={currentQuestion.questionNumber}
          showPoints={true}
        />
        <div className="mt-6">
          <ExamAnswerInput
            question={currentQuestion}
            value={currentAnswer}
            onChange={handleAnswerChange}
          />
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handleConfirmAnswer}
            disabled={!hasAnswerContent()}
            className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
              hasAnswerContent()
                ? 'bg-gradient-to-r from-[#28B463] to-[#27AE60] text-white hover:from-[#27AE60] hover:to-[#229954]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isCurrentAnswerConfirmed() ? '✓ Answer Confirmed' : 'Confirm Answer'}
          </button>
          {showConfirmationMessage && (
            <div className="flex items-center gap-2 text-green-700 animate-fade-in">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">Answer recorded! You may proceed.</span>
            </div>
          )}
        </div>
      </div>
      <ExamNavigation
        currentSectionIndex={currentSectionIndex}
        currentQuestionIndex={currentQuestionIndex}
        totalSections={exam.sections.length}
        sectionQuestionsCount={sectionQuestions.length}
        onPrevious={goToPreviousQuestion}
        onNext={goToNextQuestion}
        onReview={handleReviewClick}
        onExit={onExit}
        isFirstQuestion={currentSectionIndex === 0 && currentQuestionIndex === 0}
        isLastQuestion={
          currentSectionIndex === exam.sections.length - 1 &&
          currentQuestionIndex === sectionQuestions.length - 1
        }
      />
    </div>
  );
};

export default ExamManager;