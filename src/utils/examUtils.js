// src/utils/examUtils.js
import { AnswerValidator } from './answerValidator';

/** ⏱️ Format time as mm:ss */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/** 🧮 Calculate score & grade */
export const gradeExam = (exam, confirmedAnswers) => {
  let totalPoints = 0;
  let earnedPoints = 0;

  const gradedQuestions = exam.questions.map((question) => {
    const userAnswer = confirmedAnswers[question.id] || '';
    const validationResult = AnswerValidator.validate(
      userAnswer,
      question.correctAnswers,
      question.options || {}
    );
    const isCorrect = validationResult?.equivalent === true;
    totalPoints += question.points || 0;
    if (isCorrect) earnedPoints += question.points || 0;

    return { ...question, userAnswer, isCorrect };
  });

  const percentage = totalPoints > 0
    ? Math.round((earnedPoints / totalPoints) * 100)
    : 0;

  return {
    gradedQuestions,
    totalPoints,
    earnedPoints,
    percentage,
    passed: percentage >= exam.passingScore
  };
};

/** 🖨️ Validate before print */
export const handlePrintCheck = (studentDetails) => {
  const required = ['studentNumber', 'studentName', 'studentSurname', 'institute', 'campus'];
  const missing = required.filter((field) => !studentDetails[field]);

  if (missing.length > 0) {
    alert('⚠️ Please fill in all student and institute details before printing.');
    return false;
  }
  window.print();
  return true;
};
