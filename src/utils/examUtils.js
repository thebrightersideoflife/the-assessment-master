// src/utils/examUtils.js
import { AnswerValidator } from "./answerValidator";

/**
 * Format time in seconds to mm:ss format
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time string
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

/**
 * Grade an exam and return detailed results
 * @param {Object} exam - The exam object
 * @param {Object} confirmedAnswers - Object mapping questionId to user answers
 * @returns {Object} Results object with score, graded questions, etc.
 */
export const gradeExam = (exam, confirmedAnswers = {}) => {
  let totalPoints = 0;
  let earnedPoints = 0;

  const gradedQuestions = (exam.questions || []).map((question) => {
    const userAnswer = confirmedAnswers[question.id] || "";
    
    // Use AnswerValidator to check correctness
    const validationResult = AnswerValidator.validate(
      userAnswer,
      question.correctAnswers,
      question.options || {}
    );
    
    const isCorrect = validationResult?.equivalent === true;
    
    const points = question.points || 0;
    totalPoints += points;
    
    if (isCorrect) {
      earnedPoints += points;
    }

    return { 
      ...question, 
      userAnswer, 
      isCorrect,
      pointsEarned: isCorrect ? points : 0
    };
  });

  const percentage =
    totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;

  return {
    gradedQuestions,
    totalPoints,
    earnedPoints,
    percentage,
    passed: percentage >= (exam.passingScore || 50),
    // Legacy support
    correct: earnedPoints,
    total: totalPoints,
  };
};

/**
 * Validate student details before printing
 * @param {Object} studentDetails - Student information object
 * @returns {boolean} True if all required fields are filled
 */
export const validateStudentDetails = (studentDetails = {}) => {
  // Support multiple field sets
  const requiredSets = [
    ["studentNumber", "studentName", "studentSurname", "institute", "campus"], // Original format
    ["fullName", "studentId", "moduleCode"], // Alternative format
  ];

  // Determine which set applies
  const usingOriginalFields =
    studentDetails.studentNumber !== undefined || 
    studentDetails.studentName !== undefined ||
    studentDetails.studentSurname !== undefined;
  
  const required = usingOriginalFields ? requiredSets[0] : requiredSets[1];
  
  // Check if all required fields are filled
  const missing = required.filter((field) => !studentDetails[field]);
  
  return missing.length === 0;
};

/**
 * Handle print request with validation
 * @param {Object} studentDetails - Student information object
 * @returns {boolean} True if print was initiated
 */
export const handlePrintCheck = (studentDetails = {}) => {
  // Validate all required fields
  if (!validateStudentDetails(studentDetails)) {
    alert("⚠️ Please fill in all required student details before printing.");
    return false;
  }

  // Confirm printing action
  const confirmPrint = window.confirm(
    "🖨️ Ready to print your results?\nMake sure all your information is correct."
  );
  
  if (!confirmPrint) return false;

  // Trigger browser print
  window.print();
  return true;
};

/**
 * Calculate progress statistics
 * @param {number} answeredCount - Number of answered questions
 * @param {number} totalQuestions - Total number of questions
 * @returns {Object} Progress statistics
 */
export const calculateProgress = (answeredCount, totalQuestions) => {
  const percentage = totalQuestions > 0 
    ? Math.round((answeredCount / totalQuestions) * 100)
    : 0;
  
  return {
    answeredCount,
    totalQuestions,
    unanswered: totalQuestions - answeredCount,
    percentage,
    isComplete: answeredCount === totalQuestions,
  };
};

/**
 * Get list of answered question IDs
 * @param {Object} userAnswers - Object mapping questionId to answers
 * @returns {Array} Array of question IDs with valid answers
 */
export const getAnsweredQuestions = (userAnswers = {}) => {
  return Object.keys(userAnswers).filter(qId => {
    const answer = userAnswers[qId];
    return answer && answer.toString().trim() !== '';
  });
};

/**
 * Get list of unanswered question IDs
 * @param {Array} questions - Array of question objects
 * @param {Object} userAnswers - Object mapping questionId to answers
 * @returns {Array} Array of unanswered question objects
 */
export const getUnansweredQuestions = (questions = [], userAnswers = {}) => {
  return questions.filter(q => {
    const answer = userAnswers[q.id];
    return !answer || answer.toString().trim() === '';
  });
};

/**
 * Calculate section-wise performance
 * @param {Object} exam - The exam object
 * @param {Object} userAnswers - Object mapping questionId to answers
 * @returns {Object} Section performance statistics
 */
export const calculateSectionProgress = (exam, userAnswers = {}) => {
  if (!exam.sections || exam.sections.length === 0) {
    return {};
  }

  const sectionStats = {};

  exam.sections.forEach(section => {
    const sectionQuestions = exam.questions.filter(
      q => q.sectionId === section.id
    );
    
    const answered = sectionQuestions.filter(q => {
      const answer = userAnswers[q.id];
      return answer && answer.toString().trim() !== '';
    }).length;

    sectionStats[section.id] = {
      title: section.title,
      total: sectionQuestions.length,
      answered,
      unanswered: sectionQuestions.length - answered,
      percentage: sectionQuestions.length > 0
        ? Math.round((answered / sectionQuestions.length) * 100)
        : 0,
    };
  });

  return sectionStats;
};

/**
 * Check if time has expired
 * @param {number} timeRemaining - Time remaining in seconds
 * @returns {boolean} True if time has expired
 */
export const isTimeExpired = (timeRemaining) => {
  return timeRemaining <= 0;
};

/**
 * Calculate time remaining from start time and duration
 * @param {number} startTime - Start timestamp
 * @param {number} durationMinutes - Duration in minutes
 * @returns {number} Time remaining in seconds
 */
export const calculateTimeRemaining = (startTime, durationMinutes) => {
  const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
  const totalSeconds = durationMinutes * 60;
  return Math.max(0, totalSeconds - elapsedSeconds);
};

/**
 * Prepare data for printing
 * @param {Object} exam - The exam object
 * @param {Object} results - The graded results
 * @param {Object} studentDetails - Student information
 * @returns {Object} Formatted data for print
 */
export const preparePrintData = (exam, results, studentDetails) => {
  return {
    exam: {
      title: exam.title,
      moduleId: exam.moduleId,
      date: new Date().toLocaleDateString(),
    },
    student: {
      ...studentDetails,
      attemptNumber: results.attemptNumber || 1,
    },
    results: {
      percentage: results.percentage,
      earnedPoints: results.earnedPoints,
      totalPoints: results.totalPoints,
      passed: results.passed,
    },
    questions: results.gradedQuestions,
  };
};