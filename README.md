# 🧮 The Assessment Master

> **Transform how university students master IT mathematics through interactive, gamified learning experiences.**

An advanced educational platform inspired by Siyavula's pedagogical approach, featuring intelligent answer validation, formal exam systems, comprehensive progress tracking, and adaptive gamification. Built with React, Vite, Tailwind CSS, and Zustand.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://the-assessment-master.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8.svg)](https://tailwindcss.com)

![The Assessment Master Banner](https://via.placeholder.com/1200x400/4169E1/ffffff?text=The+Assessment+Master+-+Learn+%7C+Practice+%7C+Excel)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Live Demo](#-live-demo)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Core Systems](#-core-systems)
- [Adding Content](#-adding-content)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**The Assessment Master** bridges the gap between traditional textbook learning and interactive digital education for university-level IT mathematics. Designed specifically for South African institutions (Eduvos and similar curricula), it transforms static content into engaging, self-paced learning experiences with instant feedback and comprehensive progress tracking.

### 🌟 What Makes It Special

- **No Login Required**: Privacy-first approach - jump straight into learning
- **Curriculum-Aligned**: Content synced with Eduvos IT mathematics modules
- **Intelligent Validation**: Accepts multiple answer formats (fractions, decimals, percentages, symbolic expressions)
- **Formal Exam System**: Complete exam lifecycle with section-aware navigation, timed assessments, and detailed results
- **Comprehensive Analytics**: Track progress across quizzes, exams, weeks, and modules
- **Gamification**: Sound effects, confetti, achievements, and streak tracking
- **Accessibility-First**: WCAG 2.1 AA compliant with full keyboard navigation

---

## ✨ Key Features

### 🎓 Dual Learning Modes

#### 📝 Practice Quizzes

- **Chunked Learning**: Questions automatically split into 5-question segments for focused practice
- **Flexible Navigation**: Jump between questions, review answers, retry unlimited times
- **Instant Feedback**: Immediate validation with detailed explanations
- **Progress Tracking**: Per-quiz, per-week, and per-module statistics

#### 📋 Formal Exams

- **Complete Exam System**: Start screen → Active exam → Review → Results
- **Section-Based Organization**: Multi-section exams with specific instructions per section
- **Timed Assessments**: Optional time limits with 5-minute warnings and auto-submit
- **Attempt Tracking**: Permanent record of all exam attempts
- **Professional Results**: Printable certificates with student details and performance breakdown
- **Print Options**:
  - Print blank exam papers (questions only)
  - Print full results with answers and explanations

### 🧠 Advanced Answer Validation

#### Multi-Strategy Validation System

1. **Numeric Comparison**: Handles scientific notation, tolerance-based matching
2. **Unit-Based Validation**: SI unit conversions (length, mass, time, area, volume)
3. **Symbolic Expression Matching**: Algebraic expressions with variable detection
4. **Text Normalization**: Case-insensitive, whitespace-agnostic

#### Supported Formats

- **Fractions**: `3/4`, `¾`, `0.75` all accepted
- **Percentages**: `75%`, `0.75` equivalent
- **Mathematical Constants**: `9π`, `9*π`, `28.27` recognized
- **Temperature Units**: Celsius, Fahrenheit, Kelvin with proper handling
- **Unicode Support**: `½`, `¼`, `⅓`, superscripts (x², x³)
- **Symbolic Answers**: `x^2+c`, `2x+k1`, `sqrt(x)` for calculus/algebra

#### Smart Hint Generation

- Variable mismatch detection
- Missing constant of integration warnings
- Sign error identification
- Unit error explanations
- Numerical proximity feedback

### 🎮 Comprehensive Gamification

#### Sound System

- **Correct Answer**: Uplifting chime
- **Incorrect Answer**: Gentle buzzer
- **Achievements**:
  - 80%+: "Good Job" melody
  - 90%+: "Excellent" celebration
  - 100%: "Perfect" fanfare
- **5-Minute Warning**: Alert tone for timed exams
- **Volume Control**: Adjustable from 0-100%
- **Fallback**: Web Audio API tones if MP3s unavailable

#### Visual Feedback

- **Confetti Animations**: Intensity scales with performance (low/medium/high)
- **Achievement Badges**: Color-coded completion indicators
- **Progress Bars**: Animated with gradient fills
- **Shake Effects**: Gentle animation on incorrect answers
- **Glow Effects**: Pulsing highlights for achievements

#### Streak System

- **Daily Tracking**: Current streak and longest streak
- **Automatic Detection**: Tracks consecutive days of activity
- **Persistence**: Synced via Zustand with LocalStorage

#### Settings Panel

- Toggle sound effects on/off
- Adjust volume (0-100%)
- Enable/disable visual effects
- Control haptic feedback (vibration)
- Test achievement sounds

### 📊 Analytics & Progress Dashboard

#### Individual Quiz Statistics

- Questions attempted vs. total
- Correct/incorrect breakdown
- Accuracy percentage
- Completion status

#### Week-Level Aggregation

- Total quizzes vs. completed
- Overall accuracy across all segments
- Visual progress bars with color coding

#### Module-Level Overview

- Exam completion tracking
- Attempt counters
- Pass/fail status with percentages
- Recent exam results timeline

#### Exam Analytics

- Section-wise performance breakdown
- Points earned vs. total points
- Percentage score with pass/fail threshold
- Historical attempt records

#### Data Management

- **Export Progress**: Download as JSON backup
- **Import Progress**: Restore from previous backup
- **Reset Options**: Clear individual quizzes, weeks, or all progress

### 🎨 Modern, Accessible Design

#### Responsive Layout

- **Mobile**: Single-column, touch-optimized (44px targets)
- **Tablet**: 2-column grid with collapsible sidebar
- **Desktop**: 3-column grid with persistent navigation
- **Print-Friendly**: Optimized exam paper and results layouts

#### Accessibility Features

- ARIA labels on all interactive elements
- Keyboard navigation (Tab, Enter, Arrow keys)
- Screen reader tested (NVDA, JAWS compatible)
- High contrast mode support
- Focus indicators
- Semantic HTML structure
- Reduced motion respect (`prefers-reduced-motion`)

#### Visual Hierarchy

- Clear typography with Georgia/Times New Roman for readability
- Color-coded feedback (green=correct, red=incorrect, blue=neutral, yellow=warning)
- Consistent spacing with Tailwind utilities
- Smooth animations (300ms duration standard)

### 📚 Content Management

#### Formula Sheets

- Per-module reference sheets
- LaTeX math rendering
- Organized by sections
- Print-optimized layouts
- Accessible via sidebar and week pages

#### Video Integration

- Embedded YouTube tutorials per topic
- Responsive iframe scaling
- Optional supplementary content

#### Rich Text Rendering

- **KaTeX Math**: Inline (`$...$`) and display (`$$...$$`) modes
- **Markdown Tables**: Full GitHub-flavored markdown support
- **Bold Text**: `**text**` syntax
- **Images**: Zoom-enabled question images with captions

---

## 🌐 Live Demo

**[https://the-assessment-master.vercel.app](https://the-assessment-master.vercel.app)**

### Demo Content

- **ITMTA (Calculus Part 1)**: Derivatives
- **ITMTB (Calculus Part 2)**: Integrals, Application of Derivatives and Integrals

### Test Features

1. **Practice Mode**: Navigate to Quizzes → ITMTA → Week 1
2. **Exam Mode**: Navigate to Modules → ITMTA → Final Exam
3. **Dashboard**: View your progress and statistics
4. **Settings**: Test gamification features (sound, confetti)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 8+ or **yarn** 1.22+
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

### Installation

```bash
# Clone repository
git clone https://github.com/thebrightersideoflife/the-assessment-master.git
cd the-assessment-master

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Development

```bash
npm run dev          # Start dev server with hot reload
npm run build        # Production build
npm run preview      # Preview production build locally
npm run test         # Run test suite
npm run lint         # ESLint check
npm run format       # Prettier formatting
```

---

## 📁 Project Structure

```
the-assessment-master/
├── public/
│   ├── sounds/                      # Audio files for gamification
│   │   ├── correct.mp3              # Correct answer sound
│   │   ├── incorrect.mp3            # Incorrect answer sound
│   │   ├── good-job.mp3             # 80%+ achievement
│   │   ├── excellent.mp3            # 90%+ achievement
│   │   ├── perfect.mp3              # 100% achievement
│   │   └── time-remaining-alert.mp3 # 5-minute warning
│   ├── logo.png                     # Application logo
│   ├── favicon.png                  # Browser favicon
│   └── manifest.json                # PWA manifest
│
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx           # Main layout wrapper
│   │   │   ├── Sidebar.jsx          # Navigation sidebar with module filtering
│   │   │   ├── Header.jsx           # Top header with branding
│   │   │   └── Footer.jsx           # Footer with copyright
│   │   │
│   │   ├── Quiz/
│   │   │   ├── Exam/                # 📋 Exam System Components
│   │   │   │   ├── ExamManagerCore.jsx      # Main exam orchestrator
│   │   │   │   ├── ExamStartScreen.jsx      # Pre-exam warning & instructions
│   │   │   │   ├── ExamActiveScreen.jsx     # Active exam interface
│   │   │   │   ├── ExamHeader.jsx           # Timer & progress header
│   │   │   │   ├── ExamReviewScreen.jsx     # Pre-submit review grid
│   │   │   │   ├── ExamResultsScreen.jsx    # Results with print options
│   │   │   │   ├── ResultsSummary.jsx       # Score breakdown
│   │   │   │   ├── StudentDetailsForm.jsx   # Certificate info form
│   │   │   │   ├── ExamQuestion.jsx         # Clean question display
│   │   │   │   ├── ExamAnswerInput.jsx      # Answer input (no feedback)
│   │   │   │   └── ExamExplanation.jsx      # Post-submit explanations
│   │   │   │
│   │   │   ├── QuizManager.jsx      # Practice quiz controller
│   │   │   ├── Question.jsx         # Interactive question component
│   │   │   ├── AnswerInput.jsx      # Answer input with real-time feedback
│   │   │   ├── GamificationSettings.jsx # Settings modal
│   │   │   ├── Explanation.jsx      # Detailed solution renderer
│   │   │   ├── MathSymbolPalette.jsx # Quick math symbol insertion
│   │   │   └── ProgressBar.jsx      # Visual progress indicator
│   │   │
│   │   └── UI/
│   │       ├── Breadcrumb.jsx       # Navigation breadcrumbs
│   │       ├── VideoEmbed.jsx       # YouTube video wrapper
│   │       ├── LoadingSpinner.jsx   # Loading states
│   │       ├── ErrorBoundary.jsx    # Error handling boundary
│   │       └── ScrollToTop.jsx      # Scroll restoration
│   │
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page with overview
│   │   ├── Modules.jsx              # Module listing & selection
│   │   ├── Week.jsx                 # Week content with topics
│   │   ├── Quiz.jsx                 # Practice quiz wrapper
│   │   ├── Exam.jsx                 # Exam page wrapper
│   │   ├── Quizzes.jsx              # Module quiz overview
│   │   ├── QuizzesLanding.jsx       # All quizzes landing
│   │   ├── Dashboard.jsx            # Progress analytics dashboard
│   │   ├── FormulaSheetPage.jsx     # Printable formula sheets
│   │   └── WeekQuizzes.jsx          # Week quiz grid component
│   │
│   ├── data/
│   │   ├── questions.js             # 📝 Question bank (900+ questions)
│   │   ├── exams.js                 # 📋 Exam definitions
│   │   ├── modules.js               # Curriculum structure
│   │   ├── formulaSheets.js         # Reference sheets
│   │   └── topics.js                # Topic metadata
│   │
│   ├── hooks/
│   │   ├── useQuiz.js               # Practice quiz state management
│   │   ├── useExamManager.js        # Exam lifecycle management
│   │   └── useLocalStorage.js       # LocalStorage wrapper
│   │
│   ├── utils/
│   │   ├── answerValidator.js       # 🧠 Core validation logic
│   │   ├── examUtils.js             # Exam grading & utilities
│   │   ├── mathRenderer.js          # KaTeX rendering
│   │   ├── textRenderer.jsx         # Rich text with tables
│   │   ├── gamificationUtils.js     # Sound, confetti, animations
│   │   ├── chunkQuestions.js        # Quiz segmentation
│   │   └── printUtils.js            # Exam printing utilities
│   │
│   ├── store/
│   │   └── useStore.js              # Zustand state (quizzes, exams, streaks)
│   │
│   ├── styles/
│   │   └── tailwind.css             # Global styles & animations
│   │
│   ├── App.jsx                      # Main app with routing
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Base CSS imports
│
├── .env                             # Environment variables
├── .gitignore                       # Git ignore rules
├── index.html                       # HTML entry point
├── package.json                     # Dependencies & scripts
├── vite.config.js                   # Vite configuration
├── tailwind.config.cjs              # Tailwind customization
├── postcss.config.cjs               # PostCSS setup
├── jsconfig.json                    # JavaScript config
├── vercel.json                      # Vercel deployment config
└── README.md                        # This file
```

---

## ⚙️ Core Systems

### 1. Answer Validation System (`answerValidator.js`)

#### Validation Strategies (in order of precedence)

```javascript
// 1. Pure Numeric (for simple numbers)
AnswerValidator.validate("0.75", ["0.75", "3/4"], {
  tolerance: 0.001, // 0.1% tolerance
});
// Returns: { equivalent: true, method: 'numeric' }

// 2. Unit-Based (with conversions)
AnswerValidator.validate("100 cm", ["1 m"], {
  acceptedUnits: ["cm", "m", "mm"],
});
// Returns: { equivalent: true, method: 'unit' }

// 3. Symbolic (algebraic expressions)
AnswerValidator.validate("x^2+c", ["x^2+C", "x²+c"], {
  allowSymbolic: true,
  strictSymbolic: true,
});
// Returns: { equivalent: true, method: 'symbolic' }

// 4. Text Fallback (case-insensitive)
AnswerValidator.validate("Pi", ["pi", "π"]);
// Returns: { equivalent: true, method: 'text' }
```

#### Symbolic Expression Normalization

**Handles:**

- Exponent formats: `x^2`, `x²`, `x**2` → `x^2`
- Square roots: `sqrt(x)`, `√x` → `x^(1/2)`
- Constants: `C`, `c`, `K`, `k` → normalized
- Term ordering: `x+c` and `c+x` are equivalent
- Sign detection: Catches `-x^2` vs `x^2` errors

**Example Transformations:**

```javascript
// Input: "x² + C"
// Normalized: "x^2+c"

// Input: "2x + k1"
// Normalized: "2x+k1"

// Input: "√(x) + c"
// Normalized: "x^(1/2)+c"
```

#### Unit Conversion Table

| Category    | Units              | SI Base             |
| ----------- | ------------------ | ------------------- |
| Length      | mm, cm, m, km      | meter (m)           |
| Mass        | mg, g, kg          | kilogram (kg)       |
| Time        | s, sec, min, h, hr | second (s)          |
| Area        | m², cm², km²       | square meter (m²)   |
| Volume      | ml, l              | cubic meter (m³)    |
| Temperature | °C, °F, K          | (direct comparison) |

### 2. Quiz Chunking System (`chunkQuestions.js`)

```javascript
import { chunkQuestions, QUIZ_CHUNK_SIZE } from "./utils/chunkQuestions";

// Default: 5 questions per quiz
const chunks = chunkQuestions(questions, QUIZ_CHUNK_SIZE);

// Example: 23 questions → 5 quizzes
// Quiz 1: Q1-5
// Quiz 2: Q6-10
// Quiz 3: Q11-15
// Quiz 4: Q16-20
// Quiz 5: Q21-23 (partial, labeled "Final Quiz")
```

**Benefits:**

- Prevents cognitive overload
- Encourages completion (smaller milestones)
- Better progress tracking
- Reduces session time pressure

### 3. Exam System Architecture

#### Exam Lifecycle Flow

```
┌─────────────────┐
│  ExamStartScreen│  (Warning + Instructions)
└────────┬────────┘
         │ handleStart()
         v
┌─────────────────┐
│ ExamActiveScreen│  (Questions + Timer)
└────────┬────────┘
         │ handleReviewClick()
         v
┌─────────────────┐
│ ExamReviewScreen│  (Grid Navigation)
└────────┬────────┘
         │ handleConfirmSubmit()
         v
┌─────────────────┐
│ExamResultsScreen│  (Score + Print Options)
└─────────────────┘
```

#### State Management (Zustand)

```javascript
// Store structure
{
  exams: {
    "exam-id": {
      startTime: 1234567890,
      answers: { "q1": "answer1", "q2": "answer2" },
      submitted: false,
      results: null
    }
  },
  examAttempts: {
    "exam-id": 2  // Number of attempts
  }
}
```

#### Section-Aware Navigation

```javascript
// Navigate between sections automatically
const handleNext = () => {
  if (currentQuestionIndex < sectionQuestions.length - 1) {
    // Move to next question in current section
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else if (currentSectionIndex < sections.length - 1) {
    // Move to first question of next section
    setCurrentSectionIndex(currentSectionIndex + 1);
    setCurrentQuestionIndex(0);
  }
};
```

### 4. Gamification System (`gamificationUtils.js`)

#### Sound Manager

```javascript
import { soundManager } from "./utils/gamificationUtils";

// Play sounds
soundManager.playCorrectSound(); // Simple chime
soundManager.playIncorrectSound(); // Gentle buzzer
soundManager.playAchievementSound(85); // Good job (80%+)
soundManager.playAchievementSound(95); // Excellent (90%+)
soundManager.playAchievementSound(100); // Perfect (100%)

// Control
soundManager.setVolume(0.5); // 50% volume
soundManager.toggle(); // Enable/disable
```

#### Confetti System

```javascript
import {
  createConfetti,
  createAchievementConfetti,
} from "./utils/gamificationUtils";

// Simple burst
createConfetti(element);

// Scaled to performance
createAchievementConfetti(element, "low"); // 80%+
createAchievementConfetti(element, "medium"); // 90%+
createAchievementConfetti(element, "high"); // 100%
```

### 5. State Persistence (Zustand + LocalStorage)

```javascript
// Zustand store with persistence middleware
const useStore = create(
  persist(
    (set, get) => ({
      quizzes: {}, // Quiz progress
      exams: {}, // Exam state
      streaks: {
        // Activity tracking
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: null,
      },
    }),
    {
      name: "quiz-storage",
      version: 6, // Schema version
      partialize: (state) => ({
        quizzes: state.quizzes,
        exams: state.exams,
        streaks: state.streaks,
      }),
    }
  )
);
```

**Migration System:**

```javascript
migrate: (persistedState, version) => {
  if (version < 6) {
    // Handle schema changes
    return transformedState;
  }
  return persistedState;
};
```

---

## 📝 Adding Content

### Adding Practice Questions

Edit `src/data/questions.js`:

```javascript
export const questions = [
  {
    id: "q-calculus-001", // Unique ID (kebab-case)
    moduleId: "ITMTA", // Module identifier
    weekId: "1", // Week number

    text: "Find $\\frac{d}{dx}(x^2)$", // LaTeX supported

    correctAnswers: [
      // All acceptable formats
      "2x",
      "2*x",
      "2 x",
    ],

    explanation: `                     // Multi-line with LaTeX
      Using the power rule: 
      $$\\frac{d}{dx}(x^n) = nx^{n-1}$$
      Therefore: $\\frac{d}{dx}(x^2) = 2x^{2-1} = 2x$
    `,

    type: "open-ended", // or "multiple-choice"

    // Optional: Answer validation options
    options: {
      allowSymbolic: true, // Accept algebraic expressions
      tolerance: 0.01, // 1% numeric tolerance
      requiredUnit: null, // e.g., "m" for meters
      acceptedUnits: [], // e.g., ["cm", "m", "km"]
    },
  },
];
```

#### Multiple Choice Questions

```javascript
{
  id: "q-algebra-mc-001",
  moduleId: "ITMTB",
  weekId: "2",
  text: "What is the determinant of $\\begin{bmatrix}2 & 1\\\\4 & 3\\end{bmatrix}$?",

  correctAnswers: ["A"],               // Just the letter

  options: [                           // Include letter prefix
    "A. 2",
    "B. 4",
    "C. 6",
    "D. 10"
  ],

  explanation: "Determinant = $2(3) - 1(4) = 6 - 4 = 2$",
  type: "multiple-choice"
}
```

### Adding Exams

Edit `src/data/exams.js`:

```javascript
export const exams = [
  {
    id: "itmta-final",
    title: "ITMTA Final Exam",
    description: "Comprehensive calculus assessment",
    moduleId: "ITMTA",

    examBy: "Dr. John Smith", // Lecturer credit
    createdOn: "2024-12-15", // YYYY-MM-DD format

    timeLimit: 120, // Minutes (optional)
    passingScore: 50, // Percentage (0-100)

    sections: [
      // Optional: multi-section exams
      {
        id: "section-1",
        title: "Differentiation",
        description: "Questions on derivatives",
        instructions: "Show all work for full credit",
        sectionNumber: 1,
      },
      {
        id: "section-2",
        title: "Integration",
        description: "Questions on integrals",
        instructions: "Remember to add constants of integration",
        sectionNumber: 2,
      },
    ],

    questions: [
      // Inline or reference questions.js
      {
        id: "exam-q1",
        sectionId: "section-1", // Links to section
        questionNumber: 1, // Display number
        points: 5, // Point value
        text: "Differentiate $x^3 + 2x$",
        correctAnswers: ["3x^2+2", "3x²+2"],
        explanation: "...",
        type: "open-ended",

        // Optional: Add image
        image: {
          src: "/images/graph-example.png",
          alt: "Graph of function",
          caption: "Figure 1: Example graph",
        },
      },
    ],
  },
];
```

### Adding Modules

Edit `src/data/modules.js`:

```javascript
export const modules = [
  {
    id: "ITMTA",
    name: "Calculus",
    isVisible: true, // Toggle visibility

    weeks: [
      {
        id: "1",
        name: "Week 1",
        title: "Introduction to Derivatives",
        topics: [
          {
            id: "derivatives-intro",
            name: "What are Derivatives?",
            competency: "Understand rate of change",

            explanation: `
              A derivative measures how a function changes...
              
              | Function | Derivative |
              |----------|------------|
              | $x^2$    | $2x$       |
              | $x^3$    | $3x^2$     |
            `,

            example: "Find $\\frac{d}{dx}(x^2)$ ...",

            studyTip:
              "**Tip:** Remember the power rule: $\\frac{d}{dx}(x^n) = nx^{n-1}$",

            videoUrl: "https://youtube.com/watch?v=...", // Optional
          },
        ],
      },
    ],

    exams: [
      // Module exams
      {
        id: "itmta-midterm",
        title: "Midterm Exam",
        // ... exam definition
      },
    ],

    formulaSheet: {
      available: true,
      title: "Calculus Formula Sheet",
      path: "/formula-sheets/ITMTA",
    },
  },
];
```

### Adding Formula Sheets

Edit `src/data/formulaSheets.js`:

```javascript
export const formulaSheets = [
  {
    moduleId: "ITMTA",
    sections: [
      {
        title: "Differentiation Rules",
        items: [
          "Power rule: $\\frac{d}{dx}(x^n) = nx^{n-1}$",
          "Product rule: $(uv)' = u'v + uv'$",

          // Tables are supported
          `| Function | Derivative |
           |----------|------------|
           | $\\sin x$ | $\\cos x$ |
           | $\\cos x$ | $-\\sin x$ |`,
        ],
      },
    ],
  },
];
```

---

## 🎨 Customization

### Tailwind Theme

Edit `tailwind.config.cjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          darkBlue: "#4169E1", // Primary
          blue: "#3498DB", // Secondary
          yellow: "#FFC300", // Accent
          orange: "#E67E22", // Warning
          green: "#28B463", // Success
          red: "#C0392B", // Error
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in",
        "slide-down": "slideDown 0.3s ease-out",
        shine: "shine 2s infinite",
      },
    },
  },
};
```

### Quiz Chunk Size

Edit `src/utils/chunkQuestions.js`:

```javascript
// Change from 5 to desired size
export const QUIZ_CHUNK_SIZE = 5; // ← Modify this

export const chunkQuestions = (questions, chunkSize = QUIZ_CHUNK_SIZE) => {
  // Chunking logic...
};
```

### Validation Tolerance

Edit validation options in `src/hooks/useQuiz.js`:

```javascript
const result = AnswerValidator.validate(userAnswer, correctAnswers, {
  tolerance: 0.001, // 0.1% tolerance (default)
  allowSymbolic: true, // Accept algebraic expressions
  strictSymbolic: true, // Enforce strict matching
});
```

### Sound Volume

Users can adjust in Settings panel, or set default in `src/utils/gamificationUtils.js`:

```javascript
class SoundManager {
  constructor() {
    this.volume = parseFloat(
      localStorage.getItem("gamification-volume") || "0.3" // ← 30% default
    );
  }
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

#### Method 1: CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Method 2: GitHub Integration

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Vercel auto-detects Vite config
5. Deploy!

**Configuration** (`vercel.json`):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify

#### Method 1: Drag & Drop

```bash
npm run build
# Drag 'dist' folder to Netlify dashboard
```

#### Method 2: GitHub Integration

1. Connect GitHub repository
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy!

**Configuration** (`netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables

Create `.env` file (add to `.gitignore`):

```bash
# API Configuration
VITE_API_URL=https://api.example.com

# Analytics
VITE_ANALYTICS_ID=G-XXXXXXXXXX

# Feature Flags
VITE_ENABLE_EXAMS=true
VITE_ENABLE_ANALYTICS=true
```

Access in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🧪 Testing

### Run Tests

```bash
npm test                    # Run all tests
npm run test:coverage       # Generate coverage report
npm run test:watch          # Watch mode
npm run test:ui             # Interactive UI (if using Vitest)
```

### Test Structure

```javascript
// Example: answerValidator.test.js
import { AnswerValidator } from "../utils/answerValidator";

describe("AnswerValidator", () => {
  it("should accept equivalent fractions", () => {
    const result = AnswerValidator.validate("3/4", ["0.75", "3/4"]);
    expect(result.equivalent).toBe(true);
  });

  it("should handle symbolic expressions", () => {
    const result = AnswerValidator.validate("x^2+c", ["x²+C"], {
      allowSymbolic: true,
    });
    expect(result.equivalent).toBe(true);
  });
});
```

---

## 🔧 Configuration Files

### `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": ["zustand", "katex", "canvas-confetti"],
        },
      },
    },
  },
});
```

### `tailwind.config.cjs`

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          darkBlue: "#4169E1",
          blue: "#3498DB",
          yellow: "#FFC300",
          orange: "#E67E22",
          green: "#28B463",
          red: "#C0392B",
        },
      },
    },
  },
  plugins: [],
};
```

---

## 📱 Progressive Web App (PWA)

### Manifest Configuration

Edit `public/manifest.json`:

```json
{
  "name": "The Assessment Master",
  "short_name": "Assessment Master",
  "description": "Interactive IT Mathematics Learning Platform",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#4169E1",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/logo.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/logo.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🔐 Security Best Practices

### Content Security Policy

Add to `index.html`:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:; 
               font-src 'self' data:;"
/>
```

### Input Sanitization

Answer validation automatically sanitizes:

- LaTeX delimiters
- Unicode characters
- HTML entities
- Script tags

---

## ♿ Accessibility Checklist

- [x] Semantic HTML (`<nav>`, `<main>`, `<article>`)
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation (Tab, Enter, Arrow keys)
- [x] Focus indicators visible
- [x] Color contrast ratio > 4.5:1
- [x] Screen reader tested (NVDA, JAWS)
- [x] Alt text on images
- [x] Captions on videos
- [x] Skip-to-content link
- [x] `prefers-reduced-motion` respected

### Testing Tools

```bash
# Install accessibility testing
npm install --save-dev @axe-core/react eslint-plugin-jsx-a11y

# Run Lighthouse
npm install -g lighthouse
lighthouse http://localhost:5173 --view
```

---

## 🌍 Internationalization (Future)

### Structure

```
src/
├── locales/
│   ├── en.json          # English
│   ├── af.json          # Afrikaans
│   └── zu.json          # Zulu
```

### Implementation Roadmap

1. Extract hardcoded strings to `locales/en.json`
2. Install `react-i18next`
3. Create language switcher in Header
4. Add RTL support for future languages

---

## 📊 Analytics Integration

### Google Analytics 4

```javascript
// src/utils/analytics.js
export const trackEvent = (eventName, parameters) => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === "true") {
    window.gtag("event", eventName, parameters);
  }
};

// Usage
trackEvent("quiz_completed", {
  module_id: "ITMTA",
  accuracy: 85,
  time_spent: 420,
});
```

### Custom Events

- `quiz_started`
- `quiz_completed`
- `exam_started`
- `exam_submitted`
- `answer_correct`
- `answer_incorrect`
- `achievement_unlocked`

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR-USERNAME/the-assessment-master.git
cd the-assessment-master
npm install
```

### 2. Create Feature Branch

```bash
git checkout -b feature/add-chemistry-module
```

### 3. Make Changes

- Follow existing code style (Prettier config included)
- Add JSDoc comments for utilities
- Update tests if applicable
- Test on mobile (Chrome DevTools responsive mode)

### 4. Commit with Conventional Commits

```bash
git commit -m "feat: add chemistry module with 50 questions"
git commit -m "fix: correct answer validation for symbolic pi"
git commit -m "docs: update README with new features"
```

**Commit Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (no code change)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

### 5. Push & Create PR

```bash
git push origin feature/add-chemistry-module
```

Then open a Pull Request on GitHub with:

- Clear description of changes
- Screenshots/GIFs if UI changes
- Test results
- Related issue numbers

### Code Style Guidelines

```javascript
// ✅ Good
const calculateAccuracy = (correct, total) => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

// ❌ Avoid
function calc_acc(c, t) {
  return t == 0 ? 0 : Math.round((c / t) * 100);
}
```

### Pull Request Checklist

- [ ] Code follows project style
- [ ] All tests pass
- [ ] No console errors in dev tools
- [ ] Mobile responsive (tested on 320px, 768px, 1920px)
- [ ] Accessibility checked (keyboard navigation works)
- [ ] README updated if needed
- [ ] No hardcoded credentials or API keys

---

## 🐛 Bug Reports

### How to Report

1. Check [existing issues](https://github.com/thebrightersideoflife/the-assessment-master/issues)
2. Create new issue with:
   - **Title**: Brief, descriptive
   - **Description**: Steps to reproduce
   - **Expected behavior**: What should happen
   - **Actual behavior**: What actually happens
   - **Screenshots**: If applicable
   - **Environment**: Browser, OS, device

### Issue Template

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**

1. Go to '...'
2. Click on '...'
3. Enter '...'
4. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**

- Browser: Chrome 120
- OS: Windows 11
- Device: Desktop
- Screen Size: 1920x1080

**Screenshots**
[Attach images]
```

---

## 📈 Roadmap

### Version 1.1 (Q1 2025)

- [ ] User authentication (optional accounts)
- [ ] Cloud progress sync
- [ ] Leaderboards (weekly, monthly)
- [ ] AI-powered hint system
- [ ] Mobile app (React Native)

### Version 1.2 (Q2 2025)

- [ ] Collaborative study rooms
- [ ] Live exam proctoring
- [ ] Video explanations for each question
- [ ] Advanced analytics dashboard
- [ ] Instructor portal

### Version 2.0 (Q3 2025)

- [ ] Adaptive learning paths
- [ ] Content authoring CMS
- [ ] Multi-language support
- [ ] Offline mode (PWA)
- [ ] API for integrations

---

## 📄 License

**MIT License**

Copyright (c) 2024 The Brighter Side of Life

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🙏 Acknowledgments

### Inspiration

- **[Siyavula](https://www.siyavula.com)** - Pedagogical approach and open education philosophy
- **[Khan Academy](https://www.khanacademy.org)** - Interactive learning paradigm
- **[Eduvos](https://www.eduvos.com)** - Curriculum content and academic foundation

### Technologies

- **[React](https://react.dev)** - UI framework
- **[Vite](https://vitejs.dev)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com)** - Styling framework
- **[Zustand](https://github.com/pmndrs/zustand)** - State management
- **[KaTeX](https://katex.org)** - Math rendering
- **[React Router](https://reactrouter.com)** - Routing
- **[Canvas Confetti](https://github.com/catdad/canvas-confetti)** - Animations
- **[React Tooltip](https://react-tooltip.com)** - Tooltips
- **[date-fns](https://date-fns.org)** - Date utilities

### Contributors

- **Development Team**: The Brighter Side of Life
- **Content Creators**: Eduvos Faculty
- **Beta Testers**: Eduvos Students (2024 cohort)

### Special Thanks

- All students who provided feedback during development
- Lecturers who contributed content and validation
- Open-source community for amazing tools

---

## 📞 Support & Contact

### Get Help

- **Documentation**: This README + inline code comments
- **Issues**: [GitHub Issues](https://github.com/thebrightersideoflife/the-assessment-master/issues)
- **Discussions**: [GitHub Discussions](https://github.com/thebrightersideoflife/the-assessment-master/discussions)
- **Email**: thebrightersideoflife.tbsol@gmail.com

### Community

- **Discord**: [Join our server](https://discord.gg/assessment-master) _(coming soon)_
- **Twitter**: [@AssessmentMaster](https://twitter.com/AssessmentMaster) _(coming soon)_

### Report Security Vulnerabilities

Email: security@assessment-master.com with details. We'll respond within 48 hours.

---

## 📚 Additional Resources

### For Students

- [User Guide](docs/USER_GUIDE.md) _(coming soon)_
- [Study Tips](docs/STUDY_TIPS.md) _(coming soon)_
- [FAQ](docs/FAQ.md) _(coming soon)_

### For Developers

- [API Documentation](docs/API.md) _(coming soon)_
- [Architecture Guide](docs/ARCHITECTURE.md) _(coming soon)_
- [Contributing Guide](CONTRIBUTING.md) _(coming soon)_

### For Educators

- [Content Creation Guide](docs/CONTENT_GUIDE.md) _(coming soon)_
- [Integration Guide](docs/INTEGRATION.md) _(coming soon)_
- [Analytics Guide](docs/ANALYTICS.md) _(coming soon)_

---

## 🎓 Pedagogical Philosophy

The Assessment Master is built on evidence-based learning principles:

1. **Immediate Feedback**: Research shows instant feedback improves retention by 30-40% ([Hattie & Timperley, 2007](https://www.tandfonline.com/doi/abs/10.3102/003465430298487))

2. **Spaced Repetition**: Breaking content into 5-question chunks follows cognitive load theory ([Sweller, 1988](https://link.springer.com/article/10.1007/BF00288782))

3. **Active Recall**: Quiz-based learning is more effective than passive reading ([Roediger & Karpicke, 2006](https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2006.01693.x))

4. **Mastery-Based Progression**: Students advance only after demonstrating competency (80%+ accuracy recommended)

5. **Low-Stakes Practice**: Removes performance anxiety while building confidence

---

## 🌟 Success Stories

> "The Assessment Master helped me improve my calculus grade from 52% to 78%. The instant feedback made all the difference!" - **Student, Eduvos Sandton**

> "My students are more engaged since we started using this platform. The gamification really works!" - **Lecturer, ITMTA Module**

> "I can finally practice math problems on my phone during my commute. The mobile experience is excellent." - **Part-time Student**

_(Add your success story via GitHub Discussions!)_

---

## 🔮 Vision

Our mission is to **democratize quality IT mathematics education** across South Africa and beyond. We envision a future where:

- Every student has access to interactive, engaging math resources
- Learning is self-paced, judgment-free, and adaptive
- Technology empowers educators rather than replacing them
- Open education resources are the norm, not the exception

**Join us in building the future of math education!**

---

<div align="center">

**Built with ❤️ by The Brighter Side of Life**

[Website](https://the-assessment-master.vercel.app) • [GitHub](https://github.com/thebrightersideoflife/the-assessment-master) • [Email](mailto:thebrightersideoflife.tbsol@gmail.com)

[![Star on GitHub](https://img.shields.io/github/stars/thebrightersideoflife/the-assessment-master?style=social)](https://github.com/thebrightersideoflife/the-assessment-master)

**Learn | Practice | Excel** 🚀

</div>
