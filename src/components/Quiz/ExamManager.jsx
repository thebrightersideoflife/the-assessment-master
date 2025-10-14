// src/components/Quiz/ExamManager.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import AnswerInput from './AnswerInput';
import ExamNavigation from './ExamNavigation';
import useStore from '../../store/useStore';
import { AnswerValidator } from '../../utils/answerValidator';
import { renderMath } from '../../utils/mathRenderer';

const ExamManager = ({ exam, onExit }) => {
  const navigate = useNavigate();
  const { getExamState, updateExamAnswer, submitExam, isExamSubmitted } = useStore();

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showReview, setShowReview] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);

  // Initialize timer if exam has a time limit
  useEffect(() => {
    if (exam.timeLimit && !isExamSubmitted(exam.id)) {
      const savedState = getExamState(exam.id);
      const startTime = savedState.startTime || Date.now();
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const totalSeconds = exam.timeLimit * 60;
      const remaining = Math.max(0, totalSeconds - elapsedSeconds);

      setTimeRemaining(remaining);
    }
  }, [exam.timeLimit, exam.id]);

  // Timer countdown
  useEffect(() => {
    if (timeRemaining === null || timeRemaining === 0 || showResults) return;

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

  // Load saved answers
  useEffect(() => {
    const savedState = getExamState(exam.id);
    if (savedState.answers) {
      setUserAnswers(savedState.answers);
    }
  }, [exam.id]);

  // Render math when question/section/review changes
  useEffect(() => {
    renderMath();
  }, [currentSectionIndex, currentQuestionIndex, showReview]);

  const currentSection = exam.sections[currentSectionIndex];
  const sectionQuestions = exam.questions.filter(
    q => q.sectionId === currentSection.id
  );
  const currentQuestion = sectionQuestions[currentQuestionIndex];

  // Handle answer change (typing/selecting)
  const handleAnswerChange = (answer) => {
    const questionId = currentQuestion.id;
    const newAnswers = { ...userAnswers, [questionId]: answer };
    setUserAnswers(newAnswers);
    updateExamAnswer(exam.id, questionId, answer);
  };

  // Handle submission event from Question.jsx
  const handleAnswerSubmit = (answer, questionId, containerRef) => {
    updateExamAnswer(exam.id, questionId, answer);
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < exam.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      const prevSectionId = exam.sections[currentSectionIndex - 1].id;
      const prevSectionQuestions = exam.questions.filter(
        q => q.sectionId === prevSectionId
      );
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentQuestionIndex(prevSectionQuestions.length - 1);
    }
  };

  const jumpToQuestion = (sectionIndex, questionIndex) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentQuestionIndex(questionIndex);
    setShowReview(false);
  };

  const getAllAnsweredQuestions = () => {
    return Object.keys(userAnswers).filter(qId => {
      const answer = userAnswers[qId];
      return answer && answer.trim() !== '';
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

    const validator = new AnswerValidator();
    let totalPoints = 0;
    let earnedPoints = 0;

    const gradedQuestions = exam.questions.map(question => {
      const userAnswer = userAnswers[question.id] || '';
      const validationResult = validator.validate(
        userAnswer,
        question.correctAnswers,
        question.options || {}
      );

      const isCorrect = validationResult?.equivalent === true;
      totalPoints += question.points || 0;
      if (isCorrect) earnedPoints += question.points || 0;

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
      answers: userAnswers,
      gradedQuestions,
      totalPoints,
      earnedPoints,
      percentage,
      passed: percentage >= exam.passingScore,
      submittedAt: Date.now()
    });

    setShowResults(true);
    renderMath();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  /** RESULTS VIEW **/
  if (showResults || isExamSubmitted(exam.id)) {
    const examState = getExamState(exam.id);
    const { gradedQuestions, totalPoints, earnedPoints, percentage, passed } = examState.results || {};

    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {exam.title} - Results
            </h1>
            <div className={`text-6xl font-bold mb-4 ${passed ? 'text-[#28B463]' : 'text-[#E67E22]'}`}>
              {percentage}%
            </div>
            <p className="text-xl text-gray-600 mb-2">
              {earnedPoints} / {totalPoints} points
            </p>
            <div className={`inline-block px-6 py-2 rounded-full text-white font-semibold ${passed ? 'bg-[#28B463]' : 'bg-[#E67E22]'}`}>
              {passed ? '✓ PASSED' : '✗ NEEDS IMPROVEMENT'}
            </div>
          </div>

          {/* Section Breakdown */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Performance by Section</h3>
            {exam.sections.map(section => {
              const sectionQs = gradedQuestions.filter(q => q.sectionId === section.id);
              const sectionCorrect = sectionQs.filter(q => q.isCorrect).length;
              const sectionTotal = sectionQs.length;
              const sectionPercent = Math.round((sectionCorrect / sectionTotal) * 100);

              return (
                <div key={section.id} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-700">{section.title}</span>
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

          {/* Detailed Review */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Detailed Review</h3>
            {exam.sections.map(section => {
              const sectionQs = gradedQuestions.filter(q => q.sectionId === section.id);
              return (
                <div key={section.id} className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">{section.title}</h4>
                  {sectionQs.map(question => (
                    <div
                      key={question.id}
                      className={`mb-6 p-4 rounded-lg border-2 ${
                        question.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-semibold text-gray-800">
                          Question {question.questionNumber}
                        </p>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            question.isCorrect ? 'bg-[#28B463] text-white' : 'bg-[#C0392B] text-white'
                          }`}
                        >
                          {question.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                      </div>

                      <div className="mb-3">
                        <Question question={question} questionNumber={question.questionNumber} showPoints={true} />
                      </div>

                      <div className="mb-2">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Your Answer:</p>
                        <p className={`font-mono ${question.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {question.userAnswer || '(No answer provided)'}
                        </p>
                      </div>

                      {!question.isCorrect && (
                        <div className="mb-2">
                          <p className="text-sm font-semibold text-gray-700 mb-1">Correct Answer:</p>
                          <p className="font-mono text-green-700">{question.correctAnswers[0]}</p>
                        </div>
                      )}

                      {question.explanation && (
                        <div className="mt-3 pt-3 border-t border-gray-300">
                          <p className="text-sm font-semibold text-gray-700 mb-2">💡 Explanation:</p>
                          <div className="text-sm text-gray-600 prose prose-sm max-w-none">
                            {question.explanation.split('\n').map((line, i) => (
                              <p key={i}>{line}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate(`/modules/${exam.moduleId}`)}
              className="bg-gradient-to-r from-[#4169E1] to-[#3498DB] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Back to {exam.moduleId}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /** REVIEW MODE **/
  if (showReview) {
    const answeredCount = getAllAnsweredQuestions().length;
    const totalQuestions = exam.questions.length;

    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📝 Review Your Answers</h2>

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
              const ans = userAnswers[q.id];
              return ans && ans.trim() !== '';
            }).length;

            return (
              <div key={section.id} className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {sectionAnswered} / {sectionQs.length} answered
                </p>

                <div className="grid grid-cols-5 gap-3">
                  {sectionQs.map((q, qIdx) => {
                    const isAnswered = userAnswers[q.id] && userAnswers[q.id].trim() !== '';
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

  /** EXAM MODE **/
  const answeredCount = getAllAnsweredQuestions().length;
  const currentAnswer = userAnswers[currentQuestion.id] || '';

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{exam.title}</h2>
            <p className="text-sm text-gray-600">
              Question {currentQuestion.questionNumber} of {exam.questions.length} • Section{' '}
              {currentSectionIndex + 1} of {exam.sections.length}
            </p>
          </div>
          <div className="text-right">
            {timeRemaining !== null && (
              <div
                className={`text-2xl font-bold mb-1 ${
                  timeRemaining < 300 ? 'text-red-600' : 'text-gray-800'
                }`}
              >
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
        <h3 className="text-lg font-bold text-gray-800 mb-1">{currentSection.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{currentSection.description}</p>
        {currentSection.instructions && (
          <p className="text-sm text-blue-700 italic">📌 {currentSection.instructions}</p>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
        <Question
          question={currentQuestion}
          questionNumber={currentQuestion.questionNumber}
          moduleId={exam.moduleId}
          weekId={currentSection.id}
          totalQuestions={exam.questions.length}
          onAnswerSubmit={handleAnswerSubmit}
          onNext={goToNextQuestion}
          showPoints={true}
        />

        <div className="mt-6">
          <AnswerInput
            question={currentQuestion}
            currentAnswer={currentAnswer}
            onAnswerChange={handleAnswerChange}
            showFeedback={false}
          />
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
