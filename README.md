# 🧮 The Assessment Master

An interactive educational quiz platform with intelligent answer validation, segmented quizzes, math rendering, and gamification. Built with React, Vite, and Tailwind CSS, inspired by Siyavula's pedagogical approach.

![Quiz Demo](https://via.placeholder.com/800x400/4f46e5/ffffff?text=The+Assessment+Master)

---

## ✨ Features

### 🎯 Smart Answer Validation ✅ _Fully Implemented_

- **Multiple formats**: Accepts `3/4`, `0.75`, `75%`, `0,75` as equivalent
- **π expressions**: Handles `9π`, `9 * π`, `28.27` automatically
- **Fractions & decimals**: Auto-converts with configurable tolerance (default: 1%)
- **Percentages**: Normalizes `75%` to `0.75` for comparison
- **Unit-agnostic**: Compares values regardless of units
- **Text numbers**: Converts "twelve" → `12`
- **Unicode support**: `½`, `¼`, `⅓` properly parsed

### 📚 Quiz Segmentation ✅ _Fully Implemented_

- **15-question chunks**: Long quizzes split into manageable segments
- **Independent progress**: Each segment tracks separately
- **Visual grid**: Card-based interface showing all quiz segments
- **Completion badges**: Color-coded by accuracy (90%+ green, 70%+ orange)
- **Flexible navigation**: Jump between segments freely
- **Automatic partitioning**: Handles any question count (e.g., 47 questions → 4 quizzes)

### 🎮 Gamification ✅ _Fully Implemented_

- **Sound effects**: Correct/incorrect/achievement audio feedback
- **Confetti animations**: Celebration effects on completion
- **Achievement system**: Badges for perfect scores (100%), excellent (90%+), good (80%+)
- **Streak tracking**: Daily activity streaks with persistence
- **Progress visualization**: Real-time accuracy and completion stats
- **Settings panel**: Toggle sound/effects preferences

### 🎨 Modern Design ✅ _Fully Implemented_

- **Mobile-first**: Responsive grid layout (1/2/3 columns)
- **Accessible**: ARIA labels, keyboard navigation, screen reader support
- **KaTeX rendering**: Beautiful LaTeX math expressions
- **Smooth animations**: Transitions, hover effects, progress bars
- **Dark mode ready**: Theme infrastructure in place

### 📊 Analytics & Progress ✅ _Fully Implemented_

- **Per-segment tracking**: Stats for each 15-question quiz
- **Week-level aggregation**: Overall progress across all segments
- **Module-level overview**: Complete curriculum progress
- **Export/import**: JSON-based progress backup
- **LocalStorage persistence**: Automatic state saving via Zustand

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/thebrightersideoflife/the-assessment-master
cd the-assessment-master
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
the-assessment-master/
├─ public/
│  ├─ sounds/
│  │  ├─ correct.mp3
│  │  ├─ incorrect.mp3
│  │  ├─ good-job.mp3
│  │  ├─ excellent.mp3
│  │  └─ perfect.mp3
│  ├─ favicon.png
│  └─ manifest.json
├─ src/
│  ├─ components/
│  │  ├─ Layout/
│  │  │  ├─ Layout.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ Footer.jsx
│  │  ├─ Quiz/
│  │  │  ├─ QuizManager.jsx          # Main quiz controller
│  │  │  ├─ Question.jsx              # Question renderer
│  │  │  ├─ AnswerInput.jsx           # Answer input with validation
│  │  │  ├─ WeekQuizzes.jsx           # Quiz grid view
│  │  │  ├─ GamificationSettings.jsx  # Sound/effects settings
│  │  │  ├─ Explanation.jsx           # Solution explanations
│  │  │  ├─ MathSymbolPalette.jsx     # Math input helper
│  │  │  └─ ProgressBar.jsx           # Progress visualization
│  │  └─ UI/
│  │     ├─ Button.jsx
│  │     ├─ Modal.jsx
│  │     ├─ ModuleContainer.jsx
│  │     ├─ LoadingSpinner.jsx
│  │     ├─ ErrorBoundary.jsx
│  │     ├─ Breadcrumb.jsx
│  │     └─ VideoEmbed.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Topics.jsx
│  │  ├─ Week.jsx                     # Week content + quiz grid
│  │  ├─ Quiz.jsx                     # Quiz page wrapper
│  │  ├─ Quizzes.jsx
│  │  ├─ Dashboard.jsx                # Progress analytics
│  │  ├─ Modules.jsx
│  │  ├─ ModuleQuizzes.jsx
│  │  └─ Profile.jsx
│  ├─ data/
│  │  ├─ questions.js                 # Question bank
│  │  ├─ modules.js                   # Curriculum structure
│  │  ├─ topics.js
│  │  └─ validationRules.js
│  ├─ hooks/
│  │  ├─ useLocalStorage.js
│  │  ├─ useValidation.js
│  │  └─ useQuiz.js                   # Quiz state management
│  ├─ utils/
│  │  ├─ answerValidator.js           # Core validation logic
│  │  ├─ mathRenderer.js              # KaTeX integration
│  │  ├─ gamificationUtils.js         # Sound/confetti effects
│  │  └─ chunkQuestions.js            # Quiz segmentation utility
│  ├─ store/
│  │  └─ useStore.js                  # Zustand store (default export)
│  ├─ styles/
│  │  └─ tailwind.css
│  ├─ App.jsx
│  ├─ App.test.js
│  ├─ index.css
│  └─ main.jsx
├─ .env
├─ .gitignore
├─ index.html
├─ package.json
├─ vite.config.cjs
├─ tailwind.config.cjs
├─ postcss.config.cjs
├─ jsconfig.json
├─ README.md
└─ vercel.json
```

---

## 🎓 Adding Questions

Questions are stored in `src/data/questions.js`. Each question follows this format:

```javascript
{
  id: "q1",
  moduleId: "ITMTB",
  weekId: "1",
  text: "What is $\\frac{3}{4}$ as a decimal?",
  correctAnswers: ["0.75", "3/4", "75%", "0,75"],
  explanation: "To convert $\\frac{3}{4}$ to decimal: $3 ÷ 4 = 0.75$",
  type: "open-ended", // or "multiple-choice"
  options: [], // Only for multiple-choice
}
```

### Question Properties

| Property         | Type   | Required | Description                             |
| ---------------- | ------ | -------- | --------------------------------------- |
| `id`             | string | ✅       | Unique question identifier              |
| `moduleId`       | string | ✅       | Module identifier (e.g., "ITMTB")       |
| `weekId`         | string | ✅       | Week identifier (e.g., "1")             |
| `text`           | string | ✅       | Question text (supports LaTeX with `$`) |
| `correctAnswers` | array  | ✅       | All acceptable answer formats           |
| `explanation`    | string | ✅       | Detailed solution (supports LaTeX)      |
| `type`           | string | ✅       | "open-ended" or "multiple-choice"       |
| `options`        | array  | ❌       | Multiple-choice options (if applicable) |

### Quiz Segmentation

Questions are automatically split into 15-question quizzes:

- Week with 47 questions → Quiz 1 (Q1-15), Quiz 2 (Q16-30), Quiz 3 (Q31-45), Quiz 4 (Q46-47)
- Partial quizzes are labeled "Final Quiz"

---

## 🔧 Configuration

### Answer Validation Tolerance

Modify in `useQuiz.js`:

```javascript
const result = AnswerValidator.checkAnswer(normalizedAnswer, correctAnswers, {
  caseSensitive: false,
  allowPartialCredit: false,
  tolerance: 0.01, // 1% tolerance for numeric answers
});
```

### Quiz Segment Size

Change in `chunkQuestions.js`:

```javascript
export const chunkQuestions = (questions, size = 15) => {
  // Change size to 10, 20, etc.
};
```

### Gamification Settings

Users can toggle sound/effects in the settings panel (accessible from sidebar).

---

## 🎨 Customization

### Tailwind Colors

Edit `tailwind.config.cjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4169E1',    // Royal Blue
      secondary: '#3498DB',  // Sky Blue
      accent: '#FFC300',     // Golden Yellow
      success: '#28B463',    // Green
      danger: '#C0392B',     // Red
    }
  }
}
```

### Adding New Validation Rules

Extend `answerValidator.js`:

```javascript
static normalize(answer) {
  return answer
    .replace(/sqrt/g, '√')    // Add √ support
    .replace(/cbrt/g, '∛')    // Add ∛ support
    // ... custom formats
}
```

---

## 📱 Mobile Experience

Optimized for touch devices:

- 44px minimum touch targets
- Virtual keyboard friendly
- Responsive grid (1 column → 3 columns)
- Swipe-friendly navigation
- No horizontal scroll

---

## ♿ Accessibility

- **WCAG 2.1 AA compliant**
- Full keyboard navigation
- Screen reader tested (NVDA, JAWS)
- High contrast mode support
- Reduced motion respect
- Focus indicators
- Semantic HTML

---

## 🧪 Testing

```bash
npm test                 # Run tests
npm run test:coverage    # Coverage report
npm run test:watch       # Watch mode
```

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo to Vercel dashboard.

### Netlify

1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

### Environment Variables

Create `.env` file:

```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add quiz analytics'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Code Style

- Use Prettier for formatting
- Follow existing component structure
- Add JSDoc comments for utilities
- Test on mobile before submitting

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file.

---

## 🙏 Acknowledgments

- **KaTeX** - Math rendering
- **Zustand** - State management
- **Tailwind CSS** - Styling framework
- **Vite** - Build tool
- **React Router** - Navigation
- **Canvas Confetti** - Celebration effects
- **Siyavula** - Educational inspiration

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/thebrightersideoflife/the-assessment-master/issues)
- **Discussions**: [GitHub Discussions](https://github.com/thebrightersideoflife/the-assessment-master/discussions)
- **Email**: thebrightersideoflife.tbsol@gmail.com

---

**Built for better math education** • [Live Demo](https://the-assessment-master.vercel.app)
