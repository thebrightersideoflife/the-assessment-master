// src/data/questions.js
export const questions = [
  {
    id: "q1",
    moduleId: "ITMTA",
    weekId: "ITMTA_W1",
    type: "open-ended",
    text: "What is the domain of the function $f(x) = \\frac{1}{x-2}$?",
    correctAnswers: ["x \\neq 2", "all real numbers except 2"],
    explanation:
      "The function is undefined at $x = 2$ due to division by zero. The domain is all real numbers except $x = 2$.",
  },
  {
    id: "q2",
    moduleId: "ITMTA",
    weekId: "ITMTA_W1",
    type: "open-ended",
    text: "Does the graph $y = x^2$ represent a function? Use the vertical line test.",
    correctAnswers: ["Yes"],
    explanation:
      "The graph of $y = x^2$ passes the vertical line test, as no vertical line intersects it more than once.",
  },
  {
    id: "q3",
    moduleId: "ITMTA",
    weekId: "ITMTA_W2",
    type: "open-ended",
    text: "Evaluate $\\lim_{x \\to 2} \\frac{x^2-4}{x-2}$ using factorization.",
    correctAnswers: ["4"],
    explanation:
      "Factor numerator: $\\frac{(x-2)(x+2)}{x-2} = x+2$. Evaluate at $x=2$: 4.",
  },
  {
    id: "q4",
    moduleId: "ITMTA",
    weekId: "ITMTA_W3",
    type: "open-ended",
    text: "Find $\\lim_{x \\to \\infty} \\frac{3x^2+1}{2x^2+5}$.",
    correctAnswers: ["\\frac{3}{2}"],
    explanation:
      "Compare highest powers: $\\frac{3x^2}{2x^2} = \\frac{3}{2}$.",
  },
  {
    id: "q5",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text:
      "Approximate the area under $y = x^2$ from $x = 0$ to $x = 1$ using a left Riemann sum with 4 subintervals.",
    correctAnswers: ["0.21875"],
    explanation:
      "Divide $[0,1]$ into 4 subintervals, evaluate $y = x^2$ at left endpoints, sum areas.",
  },
  {
    id: "q6",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "open-ended",
    text: "Evaluate $\\int_0^2 x^3 \\, dx$ using the Fundamental Theorem of Calculus.",
    correctAnswers: ["4"],
    explanation:
      "Antiderivative: $\\frac{x^4}{4}$. Evaluate: $[\\frac{x^4}{4}]_0^2 = 4$.",
  },
  {
    id: "q7",
    moduleId: "ITMTB",
    weekId: "ITMTB_W3",
    type: "open-ended",
    text: "Use substitution to evaluate $\\int x \\cdot e^{x^2} \\, dx$.",
    correctAnswers: ["\\frac{1}{2}e^{x^2} + C"],
    explanation:
      "Let $u = x^2$, $du = 2x \\, dx$, integral becomes $\\frac{1}{2}\\int e^u \\, du$.",
  },
  {
    id: "q8",
    moduleId: "ITMTC",
    weekId: "ITMTC_W1",
    type: "multiple-choice",
    text: "Which of the following is the derivative of $f(x) = x^3$?",
    options: ["3x^2", "x^2", "x^3", "2x"],
    correctAnswers: ["3x^2"],
    explanation:
      "Power rule: $\\frac{d}{dx}(x^n) = n x^{n-1}$. For $x^3$, derivative is $3x^2$.",
  },
];
