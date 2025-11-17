// src/utils/printUtils.js
/**
 * Print utility functions for exam system
 * Professional standardized test format
 */

/**
 * Print only the exam questions (blank exam paper)
 */
export const printQuestionsOnly = (exam, questions) => {
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    alert('Please allow pop-ups to print the exam questions.');
    return;
  }

  const htmlContent = generateQuestionsOnlyHTML(exam, questions);
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  printWindow.onload = () => {
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };
};

/**
 * Print full results with answers and explanations
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
  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 1), 0);
  const testCode = generateTestCode(exam.id);
  
  const questionsBySection = exam.sections && exam.sections.length > 0
    ? groupQuestionsBySections(exam.sections, questions)
    : [{ title: 'Section 1', questions }];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${exam.title}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Times New Roman', Times, serif;
      line-height: 1.6;
      color: #000;
      padding: 1.5cm;
      background: white;
      font-size: 13pt;
    }
    
    @page {
      size: A4;
      margin: 1.5cm;
    }
    
    @media print {
      body { padding: 0; }
      .page-break { page-break-before: always; }
      .avoid-break { page-break-inside: avoid; }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }
    
    /* Header Section */
    .test-header {
      border-bottom: 3px solid #000;
      padding-bottom: 15px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .header-logo {
      height: 60px;
      width: auto;
      margin-bottom: 8px;
    }
    
    .header-brand-name {
      font-size: 16pt;
      font-weight: bold;
      color: #4169E1;
      letter-spacing: 0.5px;
      margin-bottom: 15px;
    }
    
    .test-title {
      font-size: 20pt;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
      text-transform: uppercase;
    }
    
    .test-code {
      font-size: 11pt;
      color: #333;
      font-family: 'Courier New', monospace;
      letter-spacing: 2px;
      margin-top: 5px;
    }
    
    /* Administrative Box */
    .admin-section {
      border: 2px solid #000;
      padding: 15px;
      margin-bottom: 25px;
      background: #fafafa;
    }
    
    .admin-title {
      font-size: 12pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
      border-bottom: 1px solid #000;
      padding-bottom: 5px;
    }
    
    .admin-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      font-size: 11pt;
    }
    
    .admin-field {
      display: flex;
      align-items: baseline;
      gap: 8px;
    }
    
    .admin-label {
      font-weight: bold;
      white-space: nowrap;
      min-width: 110px;
    }
    
    .admin-line {
      flex: 1;
      border-bottom: 1px solid #000;
      min-height: 18px;
    }
    
    /* Test Information Box */
    .test-info {
      background: #f5f5f5;
      border: 1px solid #000;
      padding: 12px;
      margin-bottom: 20px;
      font-size: 11pt;
    }
    
    .test-info-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      text-align: center;
    }
    
    .info-item {
      border-right: 1px solid #ccc;
      padding: 0 10px;
    }
    
    .info-item:last-child {
      border-right: none;
    }
    
    .info-label {
      font-size: 10pt;
      color: #555;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .info-value {
      font-weight: bold;
      font-size: 13pt;
      margin-top: 2px;
    }
    
    /* Directions Box */
    .directions {
      border: 2px solid #000;
      background: white;
      padding: 15px;
      margin-bottom: 25px;
    }
    
    .directions-title {
      font-size: 13pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
    
    .directions-content {
      font-size: 11pt;
      line-height: 1.7;
    }
    
    .directions-content ul {
      margin-left: 20px;
      margin-top: 8px;
    }
    
    .directions-content li {
      margin: 6px 0;
    }
    
    /* Section Header */
    .section {
      margin-bottom: 30px;
    }
    
    .section-header {
      background: #e0e0e0;
      color: #000;
      padding: 10px 15px;
      margin-bottom: 20px;
      margin-top: 20px;
      border: 1px solid #000;
    }
    
    .section-title {
      font-size: 14pt;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    .section-subtitle {
      font-size: 11pt;
      margin-top: 3px;
      opacity: 0.9;
    }
    
    .section-instructions {
      font-size: 11pt;
      font-style: italic;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid #666;
    }
    
    /* Question Styles */
    .question {
      margin-bottom: 25px;
      padding-left: 0;
    }
    
    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 10px;
    }
    
    .question-number {
      font-weight: bold;
      font-size: 13pt;
    }
    
    .question-points {
      font-size: 11pt;
      color: #444;
      font-style: italic;
    }
    
    .question-text {
      font-size: 13pt;
      line-height: 1.7;
      margin-bottom: 12px;
      color: #000;
    }
    
    .question-image {
      text-align: center;
      margin: 15px 0;
      page-break-inside: avoid;
    }
    
    .question-image img {
      max-width: 100%;
      max-height: 350px;
      border: 1px solid #ccc;
    }
    
    .question-image figcaption {
      font-size: 10pt;
      color: #555;
      margin-top: 5px;
      font-style: italic;
    }
    
    /* Multiple Choice Options */
    .options {
      margin-top: 10px;
      margin-left: 25px;
    }
    
    .option {
      display: flex;
      align-items: flex-start;
      margin: 6px 0;
      font-size: 12pt;
    }
    
    .option-letter {
      font-weight: bold;
      min-width: 30px;
      margin-right: 8px;
    }
    
    .option-bubble {
      width: 18px;
      height: 18px;
      border: 2px solid #000;
      border-radius: 50%;
      margin-right: 10px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    
    .option-text {
      color: #000;
    }
    
    /* Answer Space for Written Response */
    .answer-space {
      margin-top: 15px;
      border: 1px solid #000;
      min-height: 300px;
      padding: 10px;
      background: white;
      background-image: repeating-linear-gradient(
        transparent,
        transparent 23px,
        #ddd 23px,
        #ddd 24px
      );
    }
    
    .answer-space-header {
      background: white;
      display: inline-block;
      padding: 3px 8px;
      font-size: 10pt;
      font-weight: bold;
      border: 1px solid #000;
      margin-bottom: 10px;
    }
    
    /* Notice/Warning Boxes */
    .notice {
      border-left: 3px solid #000;
      background: #f9f9f9;
      padding: 8px 12px;
      margin: 10px 0;
      font-size: 11pt;
    }
    
    .notice-label {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 10pt;
      letter-spacing: 0.5px;
    }
    
    /* Footer */
    .test-footer {
      margin-top: 40px;
      padding-top: 15px;
      border-top: 2px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10pt;
      color: #555;
    }
    
    .footer-security {
      margin-top: 8px;
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
      width: 100%;
    }
    
    /* Cover Page */
    .cover-page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
      page-break-after: always;
    }
    
    .cover-logo {
      height: 100px;
      width: auto;
      margin-bottom: 20px;
    }
    
    .cover-brand {
      font-size: 24pt;
      font-weight: bold;
      color: #4169E1;
      margin-bottom: 40px;
      letter-spacing: 1px;
    }
    
    .cover-title {
      font-size: 32pt;
      font-weight: bold;
      margin-bottom: 15px;
      color: #000;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    
    .cover-code {
      font-size: 13pt;
      color: #555;
      font-family: 'Courier New', monospace;
      letter-spacing: 2px;
      margin-top: 20px;
      padding: 10px 20px;
      border: 1px solid #000;
      display: inline-block;
    }
    
    .cover-metadata {
      margin-top: 40px;
      font-size: 12pt;
      color: #666;
    }
    
    .cover-metadata p {
      margin: 8px 0;
    }
    
    /* Answer Sheet */
    .answer-sheet {
      background: #f9f9f9;
      border: 2px solid #000;
      padding: 20px;
      margin-top: 30px;
      page-break-before: always;
    }
    
    .answer-sheet-title {
      font-size: 14pt;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 20px;
      letter-spacing: 1px;
    }
    
    .bubble-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 10px;
      margin-top: 15px;
    }
    
    .bubble-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11pt;
      padding: 5px;
      background: white;
      border: 1px solid #ddd;
    }
    
    .bubble-question-num {
      font-weight: bold;
      min-width: 25px;
    }
    
    .bubble-options {
      display: flex;
      gap: 12px;
    }
    
    .bubble-option {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
    }
    
    .bubble-option-letter {
      font-size: 10pt;
      font-weight: bold;
    }
    
    .bubble {
      width: 16px;
      height: 16px;
      border: 2px solid #000;
      border-radius: 50%;
    }
    
    /* Tables */
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 10px 0;
      font-size: 11pt;
    }
    
    table th,
    table td {
      border: 1px solid #000;
      padding: 6px 8px;
      text-align: left;
    }
    
    table th {
      background: #e0e0e0;
      font-weight: bold;
    }
    
    table tr:nth-child(even) {
      background: #f5f5f5;
    }
    
    /* Markdown support */
    strong { font-weight: bold; }
    em { font-style: italic; }
    
    /* KaTeX styling */
    .katex { font-size: 1.1em !important; }
    .katex-display { margin: 0.8em 0 !important; }
  </style>
</head>
<body>
  <!-- Cover Page -->
  <div class="cover-page">
    <img src="/logo.png" alt="Logo" class="cover-logo" />
    <div class="cover-brand">The Assessment Master</div>
    <h1 class="cover-title">${exam.title}</h1>
    ${exam.description ? `<p style="font-size: 14pt; color: #666; margin-top: 10px;">${exam.description}</p>` : ''}
    <div class="cover-code">Test Code: ${testCode}</div>
    <div class="cover-metadata">
      ${exam.examBy ? `<p><strong>Exam by:</strong> ${exam.examBy}</p>` : ''}
      <p><strong>Total Questions:</strong> ${questions.length} | <strong>Total Points:</strong> ${totalPoints}</p>
      ${exam.timeLimit ? `<p><strong>Time Limit:</strong> ${exam.timeLimit} minutes</p>` : ''}
      <p><strong>Passing Score:</strong> ${exam.passingScore}%</p>
    </div>
  </div>

  <!-- Test Header -->
  <div class="test-header avoid-break">
    <img src="/logo.png" alt="Logo" class="header-logo" />
    <div class="header-brand-name">The Assessment Master</div>
    <div class="test-title">${exam.title}</div>
    <div class="test-code">Test Code: ${testCode}</div>
  </div>

  <!-- Administrative Information -->
  <div class="admin-section avoid-break">
    <div class="admin-title">Examinee Information</div>
    <div class="admin-grid">
      <div class="admin-field">
        <span class="admin-label">Student Number:</span>
        <div class="admin-line"></div>
      </div>
      <div class="admin-field">
        <span class="admin-label">Test Date:</span>
        <div class="admin-line"></div>
      </div>
      <div class="admin-field">
        <span class="admin-label">Last Name:</span>
        <div class="admin-line"></div>
      </div>
      <div class="admin-field">
        <span class="admin-label">First Name:</span>
        <div class="admin-line"></div>
      </div>
      <div class="admin-field">
        <span class="admin-label">Institution:</span>
        <div class="admin-line"></div>
      </div>
      <div class="admin-field">
        <span class="admin-label">Campus:</span>
        <div class="admin-line"></div>
      </div>
    </div>
  </div>

  <!-- Test Information -->
  <div class="test-info avoid-break">
    <div class="test-info-grid">
      <div class="info-item">
        <div class="info-label">Questions</div>
        <div class="info-value">${questions.length}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Total Points</div>
        <div class="info-value">${totalPoints}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Passing Score</div>
        <div class="info-value">${exam.passingScore}%</div>
      </div>
      <div class="info-item">
        <div class="info-label">Time Limit</div>
        <div class="info-value">${exam.timeLimit || 'N/A'} min</div>
      </div>
    </div>
  </div>

  <!-- Directions -->
  <div class="directions avoid-break">
    <div class="directions-title">General Directions</div>
    <div class="directions-content">
      <p>This examination booklet contains ${questionsBySection.length} section${questionsBySection.length > 1 ? 's' : ''} with a total of ${questions.length} questions. Read all instructions carefully before beginning.</p>
      <ul>
        <li>Use a No. 2 pencil or black/blue pen for all responses.</li>
        <li>Ensure your name and student identification number are clearly written in the space provided above.</li>
        <li>For multiple-choice questions, completely fill in the corresponding bubble on the answer sheet.</li>
        <li>For constructed-response questions, show all work in the space provided. Partial credit may be awarded.</li>
        ${exam.timeLimit ? `<li>You have ${exam.timeLimit} minutes to complete this examination.</li>` : ''}
        <li>Do not make any stray marks on this booklet or answer sheet.</li>
        <li>Questions left blank will receive no credit.</li>
      </ul>
    </div>
  </div>

  <!-- Questions by Section -->
  ${questionsBySection.map((section, idx) => `
    ${idx > 0 ? '<div class="page-break"></div>' : ''}
    <div class="section">
      <div class="section-header avoid-break">
        <div class="section-title">${section.title}</div>
        ${section.description ? `<div class="section-subtitle">${section.description}</div>` : ''}
        ${section.instructions ? `<div class="section-instructions">Instructions: ${section.instructions}</div>` : ''}
      </div>
      
      ${section.questions.map(question => generateQuestionHTML(question)).join('')}
    </div>
  `).join('')}

  <!-- Answer Sheet -->
  ${generateAnswerSheet(questions)}

  <!-- Footer -->
  <div class="test-footer">
    <div>
      <div>The Assessment Master | Standardized Testing Platform</div>
      <div style="margin-top: 4px;">https://the-assessment-master.vercel.app</div>
    </div>
    <div>
      <div><strong>Test Date:</strong> ${formatExamDate(new Date().toISOString())}</div>
      <div style="margin-top: 4px;"><strong>Generated:</strong> ${new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      })}</div>
    </div>
  </div>
  <div class="footer-security">
    This examination is the property of the issuing institution. Unauthorized reproduction or distribution is prohibited.
  </div>

  <script>
    // Render KaTeX math when page loads
    document.addEventListener('DOMContentLoaded', function() {
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '\\\\[', right: '\\\\]', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\\\(', right: '\\\\)', display: false}
        ],
        throwOnError: false
      });
    });
  </script>
</body>
</html>
  `;
};

/**
 * Generate a unique test code
 */
const generateTestCode = (examId) => {
  const hash = examId ? examId.substring(0, 8).toUpperCase() : 'XXXXXXXX';
  const date = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  return `TAM-${date}-${hash}`;
};

/**
 * Group questions by sections
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
 * Process text for rendering - handles math and markdown
 */
const processText = (text) => {
  if (!text) return '';
  
  // Handle bold markdown
  let processed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Handle tables
  if (text.includes('|') && text.split('\n').some(line => line.trim().startsWith('|'))) {
    const lines = text.split('\n');
    let tableHTML = '<table>';
    let inHeader = true;
    
    for (const line of lines) {
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        // Check if separator
        if (/^[\|\-:\s]+$/.test(line) && line.includes('---')) {
          continue; // Skip separator
        }
        
        const cells = line.split('|').slice(1, -1).map(c => c.trim());
        const tag = inHeader ? 'th' : 'td';
        tableHTML += '<tr>' + cells.map(cell => `<${tag}>${cell}</${tag}>`).join('') + '</tr>';
        inHeader = false;
      }
    }
    tableHTML += '</table>';
    return tableHTML;
  }
  
  return processed;
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
        <span class="question-number">${questionNumber}.</span>
        <span class="question-points">(${points} point${points === 1 ? '' : 's'})</span>
      </div>
      
      ${question.image?.src ? `
        <figure class="question-image">
          <img src="${question.image.src}" alt="${question.image.alt || 'Question image'}" />
          ${question.image.caption ? `<figcaption>Figure ${questionNumber}: ${question.image.caption}</figcaption>` : ''}
        </figure>
      ` : ''}
      
      <div class="question-text">
        ${processText(question.text)}
      </div>
      
      ${!isMultipleChoice && question.options?.requiredUnit ? `
        <div class="notice">
          <span class="notice-label">Note:</span> Express your answer in ${question.options.requiredUnit}.
        </div>
      ` : ''}
      
      ${!isMultipleChoice && !question.options?.requiredUnit && question.options?.acceptedUnits?.length > 0 ? `
        <div class="notice">
          <span class="notice-label">Acceptable Units:</span> ${question.options.acceptedUnits.join(', ')}
        </div>
      ` : ''}
      
      ${isMultipleChoice ? generateOptionsHTML(question.options, questionNumber) : generateAnswerSpaceHTML(questionNumber)}
    </div>
  `;
};

/**
 * Generate HTML for multiple choice options
 */
const generateOptionsHTML = (options, questionNum) => {
  if (!options || !Array.isArray(options)) return '';
  
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  
  return `
    <div class="options">
      ${options.map((option, idx) => `
        <div class="option">
          <div class="option-bubble"></div>
          <span class="option-letter">${letters[idx]}.</span>
          <span class="option-text">${processText(option)}</span>
        </div>
      `).join('')}
    </div>
  `;
};

/**
 * Generate HTML for answer space
 */
const generateAnswerSpaceHTML = (questionNum) => {
  return `
    <div class="answer-space">
      <div class="answer-space-header">RESPONSE SPACE FOR QUESTION ${questionNum}</div>
    </div>
  `;
};

/**
 * Generate bubble sheet for multiple choice questions
 */
const generateAnswerSheet = (questions) => {
  const mcQuestions = questions.filter(q => q.type === 'multiple-choice');
  
  if (mcQuestions.length === 0) return '';
  
  const letters = ['A', 'B', 'C', 'D', 'E'];
  
  return `
    <div class="answer-sheet">
      <div class="answer-sheet-title">Multiple Choice Answer Sheet</div>
      <div class="bubble-grid">
        ${mcQuestions.map(q => `
          <div class="bubble-row">
            <span class="bubble-question-num">${q.questionNumber}.</span>
            <div class="bubble-options">
              ${letters.slice(0, q.options?.length || 4).map(letter => `
                <div class="bubble-option">
                  <span class="bubble-option-letter">${letter}</span>
                  <div class="bubble"></div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

/**
 * Format exam date
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