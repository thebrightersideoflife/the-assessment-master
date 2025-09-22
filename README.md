# 🧮 The Assessment Master

An interactive educational quiz platform with flexible answer validation, math rendering, and mobile-friendly design. Built with modern web technologies and inspired by Siyavula's educational approach.

![Quiz Demo](https://via.placeholder.com/800x400/4f46e5/ffffff?text=The+Assessment+Master)

---

## ✨ Features

### 🎯 Smart Answer Validation ✅ _Implemented_

- Multiple formats accepted: `3/4`, `0.75`, `75%`, `0,75`
- π expressions: `9π`, `9 * π`, `28.27`
- Fractions and decimals: auto-converted and compared with tolerance
- Percentage and symbolic math: normalized and evaluated
- _(Planned)_ Mixed numbers, scientific notation, thousands separators, and text numbers

### 📚 Interactive Learning ✅ _Partially Implemented_

- ✅ Immediate feedback: Correct/incorrect with visual cues
- ✅ Detailed explanations: Toggleable step-by-step solutions
- ✅ Progress tracking: Stats and progress bar
- ❌ Dropdown questions: Not yet implemented

### 🎨 Modern Design ✅ _Implemented_

- Mobile-first responsive layout
- Accessible: Focus indicators, ARIA roles, keyboard navigation
- Math rendering via KaTeX
- Smooth animations and transitions

### 🔧 Developer Friendly ✅ _Partially Implemented_

- Modular architecture: Validator, quiz manager, UI separated
- Extensible: Easy to add new questions and formats
- ❌ TypeScript ready: Currently JavaScript only
- ❌ Well documented: Documentation in progress

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

1. **Installation**:

````bash
git clone https://github.com/thebrightersideoflife/the-assessment-master
cd the-assessment-master
npm install


2. **Run development server**:

```bash
npm run dev
````

3. **Open in browser**: http://localhost:3000

### Build for production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
the-assessment-master/
├─ public/
│  ├─ favicon.ico
│  └─ manifest.json
├─ src/
│  ├─ components/
│  │  ├─ Layout/
│  │  │  ├─ Layout.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ Footer.jsx
│  │  ├─ Quiz/
│  │  │  ├─ QuizManager.jsx
│  │  │  ├─ Question.jsx
│  │  │  ├─ AnswerInput.jsx
│  │  │  ├─ Explanation.jsx
│  │  │  └─ ProgressBar.jsx
│  │  ├─ UI/
│  │  │  ├─ Button.jsx
│  │  │  ├─ Modal.jsx
│  │  │  ├─ LoadingSpinner.jsx
│  │  │  └─ ErrorBoundary.jsx
│  │  └─ Auth/
│  │     ├─ Login.jsx
│  │     └─ Register.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Topics.jsx
│  │  ├─ Quiz.jsx
│  │  ├─ Dashboard.jsx
│  │  └─ Profile.jsx
│  ├─ data/
│  │  ├─ questions.js
│  │  ├─ topics.js
│  │  └─ validationRules.js
│  ├─ hooks/
│  │  ├─ useLocalStorage.js
│  │  ├─ useValidation.js
│  │  └─ useQuiz.js
│  ├─ utils/
│  │  ├─ answerValidator.js
│  │  ├─ mathRenderer.js
│  │  └─ localStorage.js
│  ├─ store/
│  │  └─ useStore.js
│  ├─ styles/
│  │  └─ tailwind.css
│  ├─ App.jsx
│  ├─ App.test.js
│  ├─ index.css
│  ├─ main.jsx
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

## 🎓 Adding Questions

Questions are stored in `src/data/questions.js`. Each question follows this format:

```javascript
{
  id: 1,
  question: "What is $$\\frac{3}{4}$$ as a decimal?",
  correctAnswers: ["0.75", "3/4", "75%", "0,75"],
  explanation: "To convert $$\\frac{3}{4}$$ to decimal: $$3 ÷ 4 = 0.75$$",
  type: "fraction_conversion",
  difficulty: "easy",
  tags: ["fractions", "decimals"]
}
```

### Question Properties

| Property         | Type   | Required | Description                     |
| ---------------- | ------ | -------- | ------------------------------- |
| `id`             | number | ✅       | Unique question identifier      |
| `question`       | string | ✅       | Question text (supports LaTeX)  |
| `correctAnswers` | array  | ✅       | All acceptable answer formats   |
| `explanation`    | string | ✅       | Detailed solution explanation   |
| `type`           | string | ❌       | Question category for analytics |
| `difficulty`     | string | ❌       | 'easy', 'medium', 'hard'        |
| `tags`           | array  | ❌       | Topic tags for filtering        |

## 🔧 Configuration

Modify settings in `src/main.js`:

```javascript
const CONFIG = {
  randomizeQuestions: false, // Randomize question order
  questionCount: null, // Limit questions (null = all)
  enableAnalytics: false, // Track quiz events
  theme: "light", // 'light' or 'dark'
  animationSpeed: "normal", // 'fast', 'normal', 'slow'
};
```

## 🎨 Customization

### Styling

- **Colors**: Modify Tailwind config in `tailwind.config.cjs`
- **Components**: Edit CSS classes in `src/styles/main.css`
- **Layout**: Adjust HTML structure in UI components

### Answer Validation

Add new formats in `src/components/AnswerValidator.js`:

```javascript
static normalize(answer) {
  return answer
    .replace(/pi/g, 'π')      // Add π symbol support
    .replace(/sqrt/g, '√')    // Add √ symbol support
    // ... your custom formats
}
```

## 📱 Mobile Experience

The quiz is optimized for mobile devices with:

- **Touch-friendly buttons**: 44px minimum touch targets
- **Responsive typography**: Scales appropriately
- **Keyboard support**: Virtual keyboard integration
- **Viewport optimization**: Prevents zoom issues

## ♿ Accessibility Features

- **Keyboard navigation**: Full keyboard support
- **Screen readers**: Proper ARIA labels and roles
- **High contrast**: Respects user preferences
- **Reduced motion**: Honors accessibility preferences
- **Focus indicators**: Clear visual focus states

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📊 Analytics Integration

Add analytics tracking by modifying the `trackEvent` function in `src/main.js`:

```javascript
trackEvent(eventName, properties) {
  // Google Analytics
  gtag('event', eventName, properties);

  // Mixpanel
  mixpanel.track(eventName, properties);

  // Custom analytics
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({ event: eventName, ...properties })
  });
}
```

## 🚀 Deployment

### Netlify

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style
- Add tests for new features
- Update documentation
- Test on mobile devices

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **KaTeX** for beautiful math rendering
- **Tailwind CSS** for utility-first styling
- **Siyavula** for educational inspiration
- **Vite** for fast development experience

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/the-assessment-master/issues)
- **Discussions**: [GitHub Discussions](https://https://github.com/thebrightersideoflife/the-assessment-master/discussions)
- **Email**: thebrightersideoflife.tbsol@gmail.com

---

**Made with ❤️ for better math education**
