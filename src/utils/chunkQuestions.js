// src/utils/chunkQuestions.js

// ✅ Global constant — change this once to update everywhere
export const QUIZ_CHUNK_SIZE = 5;

/**
 * Splits an array of questions into chunks of a specified size
 * @param {Array} questions - Array of question objects
 * @param {number} size - Size of each chunk (default: QUIZ_CHUNK_SIZE)
 * @returns {Array<Array>} - Array of question chunks
 * 
 * @example
 * const questions = [...]; // 47 questions
 * const chunks = chunkQuestions(questions, 15);
 * // Returns: [
 * //   [q1...q15],   // Quiz 1
 * //   [q16...q30],  // Quiz 2
 * //   [q31...q45],  // Quiz 3
 * //   [q46, q47]    // Quiz 4
 * // ]
 */
export const chunkQuestions = (questions, size = QUIZ_CHUNK_SIZE) => {
  if (!Array.isArray(questions)) {
    console.error('chunkQuestions: Expected an array, received:', typeof questions);
    return [];
  }

  if (questions.length === 0) return [];
  if (size <= 0) {
    console.error('chunkQuestions: Chunk size must be greater than 0');
    return [questions];
  }

  const chunks = [];
  for (let i = 0; i < questions.length; i += size) {
    chunks.push(questions.slice(i, i + size));
  }

  return chunks;
};

/**
 * Gets metadata about quiz segments for a given week
 */
export const getQuizSegmentMetadata = (questions, moduleId, weekId, chunkSize = QUIZ_CHUNK_SIZE) => {
  const weekQuestions = questions.filter(
    q => q.moduleId === moduleId && q.weekId === weekId
  );

  const chunks = chunkQuestions(weekQuestions, chunkSize);

  return {
    totalQuestions: weekQuestions.length,
    totalQuizzes: chunks.length,
    quizzes: chunks.map((chunk, index) => ({
      quizIndex: index,
      questionCount: chunk.length,
      startQuestion: index * chunkSize + 1,
      endQuestion: index * chunkSize + chunk.length,
      isPartial: chunk.length < chunkSize,
      label: `Quiz ${index + 1}`,
      description: `Questions ${index * chunkSize + 1}-${index * chunkSize + chunk.length}`,
    })),
  };
};

/**
 * Get a specific quiz chunk by index
 */
export const getQuizChunk = (questions, moduleId, weekId, quizIndex, chunkSize = QUIZ_CHUNK_SIZE) => {
  const weekQuestions = questions.filter(
    q => q.moduleId === moduleId && q.weekId === weekId
  );

  const chunks = chunkQuestions(weekQuestions, chunkSize);
  return chunks[quizIndex] || [];
};

/**
 * Calculate overall progress for a week's quizzes
 */
export const calculateWeekProgress = (quizState, moduleId, weekId, totalQuizzes) => {
  let completedCount = 0;
  let totalCorrect = 0;
  let totalAnswered = 0;

  for (let i = 0; i < totalQuizzes; i++) {
    const key = `${moduleId}-${weekId}-${i}`;
    const quiz = quizState[key];

    if (quiz?.completed) completedCount++;

    if (quiz?.stats) {
      totalCorrect += quiz.stats.correct;
      totalAnswered += quiz.stats.total;
    }
  }

  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const completionPercentage =
    totalQuizzes > 0 ? Math.round((completedCount / totalQuizzes) * 100) : 0;

  return {
    completedQuizzes: completedCount,
    totalQuizzes,
    completionPercentage,
    totalCorrect,
    totalAnswered,
    overallAccuracy,
    isComplete: completedCount === totalQuizzes,
  };
};

/**
 * Validate quiz index
 */
export const isValidQuizIndex = (quizIndex, totalQuizzes) => {
  return quizIndex >= 0 && quizIndex < totalQuizzes;
};

/**
 * Get next quiz index (for navigation)
 */
export const getNextQuizIndex = (currentIndex, totalQuizzes) => {
  const nextIndex = currentIndex + 1;
  return nextIndex < totalQuizzes ? nextIndex : null;
};

/**
 * Get previous quiz index (for navigation)
 */
export const getPreviousQuizIndex = (currentIndex) => {
  const prevIndex = currentIndex - 1;
  return prevIndex >= 0 ? prevIndex : null;
};
