// src/utils/printUtils.js

/**
 * Print utility functions for exam system
 * Handles different print modes: questions-only and full results
 */

/**
 * Print only the exam questions (blank exam paper)
 * Opens a new window with clean question layout
 */
export const printQuestionsOnly = (exam, questions) => {
  // Create a new window for printing
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    alert('Please allow pop-ups to print the exam questions.');
    return;
  }

  // Generate the HTML content for questions-only view
  const htmlContent = generateQuestionsOnlyHTML(exam, questions);
  
  // Write content to the new window
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Wait for content to load, then print
  printWindow.onload = () => {
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      // Optional: Close after printing (uncomment if desired)
      // printWindow.onafterprint = () => printWindow.close();
    }, 250);
  };
};

/**
 * Print full results with answers and explanations
 * Checks if student details are filled before printing
 */
export const handlePrintCheck = (studentDetails) => {
  const allDetailsFilled = 
    studentDetails.studentNumber &&
    studentDetails.studentName &&
    studentDetails.studentSurname &&
    studentDetails.institute &&
    studentDetails.campus;

  if (!allDetailsFilled) {
    alert('Please fill in all student details before printing.');
    return;
  }

  window.print();
};

/**
 * Generate HTML content for questions-only print view
 */
const generateQuestionsOnlyHTML = (exam, questions) => {
  // Calculate total points
  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 1), 0);
  
  // Group questions by sections if they exist
  const questionsBySection = exam.sections && exam.sections.length > 0
    ? groupQuestionsBySections(exam.sections, questions)
    : [{ title: 'Questions', questions }];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${exam.title} - Question Paper</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      line-height: 1.6;
      color: #333;
      padding: 2cm;
      background: white;
    }
    
    @page {
      size: A4;
      margin: 2cm;
    }
    
    @media print {
      body {
        padding: 0;
      }
      
      .page-break {
        page-break-before: always;
      }
      
      .avoid-break {
        page-break-inside: avoid;
      }
    }
    
    /* Header Styles */
    .exam-header {
      text-align: center;
      border-bottom: 3px double #333;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    
    .exam-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #1a1a1a;
    }
    
    .exam-metadata {
      font-size: 14px;
      color: #555;
      margin-top: 10px;
    }
    
    .exam-metadata p {
      margin: 5px 0;
    }
    
    /* Student Info Section */
    .student-info {
      border: 2px solid #333;
      padding: 20px;
      margin-bottom: 30px;
      background: #f9f9f9;
    }
    
    .student-info h3 {
      font-size: 16px;
      margin-bottom: 15px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    
    .info-field {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .info-field label {
      font-weight: bold;
      min-width: 140px;
      font-size: 13px;
    }
    
    .info-field .fill-line {
      flex: 1;
      border-bottom: 1px solid #333;
      min-height: 20px;
    }
    
    /* Instructions Box */
    .instructions {
      background: #fff9e6;
      border: 2px solid #ffcc00;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 30px;
    }
    
    .instructions h3 {
      font-size: 16px;
      margin-bottom: 10px;
      color: #cc6600;
    }
    
    .instructions ul {
      padding-left: 25px;
    }
    
    .instructions li {
      margin: 8px 0;
      font-size: 14px;
    }
    
    /* Section Styles */
    .section {
      margin-bottom: 40px;
    }
    
    .section-header {
      background: #e8e8e8;
      padding: 15px;
      border-left: 5px solid #333;
      margin-bottom: 20px;
    }
    
    .section-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .section-description {
      font-size: 14px;
      color: #555;
      margin-top: 5px;
    }
    
    .section-instructions {
      font-size: 13px;
      color: #666;
      font-style: italic;
      margin-top: 8px;
      padding-left: 15px;
      border-left: 3px solid #999;
    }
    
    /* Question Styles */
    .question {
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background: white;
    }
    
    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
    
    .question-number {
      font-size: 16px;
      font-weight: bold;
    }
    
    .question-points {
      font-size: 13px;
      background: #f0f0f0;
      padding: 5px 12px;
      border-radius: 20px;
      font-weight: 600;
    }
    
    .question-text {
      font-size: 15px;
      line-height: 1.8;
      margin-bottom: 15px;
    }
    
    .question-image {
      text-align: center;
      margin: 20px 0;
    }
    
    .question-image img {
      max-width: 100%;
      max-height: 400px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    
    .question-image figcaption {
      font-size: 12px;
      color: #666;
      margin-top: 8px;
      font-style: italic;
    }
    
    /* Answer Options */
    .options {
      margin-top: 15px;
    }
    
    .option {
      padding: 10px;
      margin: 8px 0;
      border: 1px solid #ddd;
      border-radius: 4px;
      display: flex;
      align-items: center;
    }
    
    .option-checkbox {
      width: 20px;
      height: 20px;
      border: 2px solid #333;
      margin-right: 12px;
      flex-shrink: 0;
    }
    
    /* Answer Space */
    .answer-space {
      margin-top: 20px;
      padding: 20px;
      border: 2px solid #333;
      min-height: 650px;
      background: white;
      background-image: 
        repeating-linear-gradient(
          transparent,
          transparent 29px,
          #e0e0e0 29px,
          #e0e0e0 30px
        );
      background-size: 100% 30px;
    }
    
    .answer-space-label {
      font-size: 14px;
      color: #333;
      margin-bottom: 15px;
      font-weight: bold;
      background: white;
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #333;
    }
    
    /* Notice Boxes */
    .notice {
      background: #e3f2fd;
      border-left: 4px solid #2196f3;
      padding: 12px;
      margin: 15px 0;
      font-size: 13px;
    }
    
    .notice strong {
      color: #1976d2;
    }
    
    /* Footer */
    .exam-footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #333;
      font-size: 12px;
      color: #666;
    }
    
    /* MathJax styling */
    .MathJax_Display {
      margin: 1em 0 !important;
    }
  </style>
</head>
<body>
  <!-- Exam Header -->
  <div class="exam-header">
    <h1 class="exam-title">${exam.title}</h1>
    <div class="exam-metadata">
      ${exam.examBy ? `<p><strong>Exam by:</strong> ${exam.examBy}</p>` : ''}
      ${exam.createdOn ? `<p><strong>Created:</strong> ${formatExamDate(exam.createdOn)}</p>` : ''}
      <p><strong>Total Questions:</strong> ${questions.length} | <strong>Total Points:</strong> ${totalPoints} | <strong>Passing Score:</strong> ${exam.passingScore}%</p>
      ${exam.timeLimit ? `<p><strong>Time Limit:</strong> ${exam.timeLimit} minutes</p>` : ''}
    </div>
  </div>
  
  <!-- Student Information Section -->
  <div class="student-info avoid-break">
    <h3>Student Information</h3>
    <div class="info-grid">
      <div class="info-field">
        <label>Student Number:</label>
        <div class="fill-line"></div>
      </div>
      <div class="info-field">
        <label>Name:</label>
        <div class="fill-line"></div>
      </div>
      <div class="info-field">
        <label>Surname:</label>
        <div class="fill-line"></div>
      </div>
      <div class="info-field">
        <label>Date:</label>
        <div class="fill-line"></div>
      </div>
      <div class="info-field">
        <label>Institute:</label>
        <div class="fill-line"></div>
      </div>
      <div class="info-field">
        <label>Campus:</label>
        <div class="fill-line"></div>
      </div>
    </div>
  </div>
  
  <!-- Instructions -->
  <div class="instructions avoid-break">
    <h3>⚠️ Important Instructions</h3>
    <ul>
      <li>Read all questions carefully before answering</li>
      <li>Show all your work for full credit</li>
      <li>Write clearly and legibly</li>
      ${exam.timeLimit ? `<li>You have ${exam.timeLimit} minutes to complete this exam</li>` : ''}
      <li>Answer all questions to the best of your ability</li>
      <li>Check your work before submitting</li>
    </ul>
  </div>
  
  <!-- Questions by Section -->
  ${questionsBySection.map((section, idx) => `
    ${idx > 0 ? '<div class="page-break"></div>' : ''}
    <div class="section">
      <div class="section-header avoid-break">
        <div class="section-title">${section.title}</div>
        ${section.description ? `<div class="section-description">${section.description}</div>` : ''}
        ${section.instructions ? `<div class="section-instructions">📌 ${section.instructions}</div>` : ''}
      </div>
      
      ${section.questions.map(question => generateQuestionHTML(question)).join('')}
    </div>
  `).join('')}
  
  <!-- Footer -->
  <div class="exam-footer">
    <p>Generated by The Assessment Master</p>
    <p>https://the-assessment-master.vercel.app</p>
  </div>
  
  <script>
    // Trigger MathJax rendering after page loads
    if (typeof MathJax !== 'undefined') {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
  </script>
</body>
</html>
  `;
};

/**
 * Group questions by their sections
 */
const groupQuestionsBySections = (sections, questions) => {
  return sections.map(section => ({
    title: section.title,
    description: section.description,
    instructions: section.instructions,
    questions: questions.filter(q => q.sectionId === section.id)
  }));
};

/**
 * Generate HTML for a single question
 */
const generateQuestionHTML = (question) => {
  const questionNumber = question.questionNumber;
  const points = question.points || 1;
  const isMultipleChoice = question.type === 'multiple-choice';
  
  return `
    <div class="question avoid-break">
      <div class="question-header">
        <span class="question-number">Question ${questionNumber}</span>
        <span class="question-points">${points} ${points === 1 ? 'point' : 'points'}</span>
      </div>
      
      ${question.image?.src ? `
        <figure class="question-image">
          <img src="${question.image.src}" alt="${question.image.alt || 'Question image'}" />
          ${question.image.caption ? `<figcaption>${question.image.caption}</figcaption>` : ''}
        </figure>
      ` : ''}
      
      <div class="question-text">
        ${question.text}
      </div>
      
      ${question.options?.requiredUnit ? `
        <div class="notice">
          <strong>ℹ️ Note:</strong> Please express your answer in <strong>${question.options.requiredUnit}</strong>
        </div>
      ` : ''}
      
      ${!question.options?.requiredUnit && question.options?.acceptedUnits?.length > 0 ? `
        <div class="notice">
          <strong>ℹ️ Note:</strong> Acceptable units: <strong>${question.options.acceptedUnits.join(', ')}</strong>
        </div>
      ` : ''}
      
      ${isMultipleChoice ? generateOptionsHTML(question.options) : generateAnswerSpaceHTML()}
    </div>
  `;
};

/**
 * Generate HTML for multiple choice options
 */
const generateOptionsHTML = (options) => {
  if (!options || !Array.isArray(options)) return '';
  
  return `
    <div class="options">
      ${options.map(option => `
        <div class="option">
          <div class="option-checkbox"></div>
          <span>${option}</span>
        </div>
      `).join('')}
    </div>
  `;
};

/**
 * Generate HTML for answer space (open-ended questions)
 */
const generateAnswerSpaceHTML = () => {
  return `
    <div class="answer-space">
      <div class="answer-space-label">Your Answer:</div>
    </div>
  `;
};

/**
 * Format exam date for display
 */
const formatExamDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};