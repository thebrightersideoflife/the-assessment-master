export const questions = [
  {
    id: 1,
    question: "Solve for x: $2x + 5 = 13$",
    correctAnswers: ["4", "4.0", "4.00"],
    explanation: "To solve $2x + 5 = 13$, we subtract 5 from both sides to get $2x = 8$, then divide by 2 to get $x = 4$.",
    topic: "Linear Equations"
  },
  {
    id: 2,
    question: "What is the derivative of $f(x) = x^2 + 3x - 1$?",
    correctAnswers: ["2x + 3", "2x+3", "3+2x", "3 + 2x"],
    explanation: "Using the power rule, the derivative of $x^2$ is $2x$, the derivative of $3x$ is $3$, and the derivative of a constant is $0$. Therefore, $f'(x) = 2x + 3$.",
    topic: "Calculus"
  },
  {
    id: 3,
    question: "Express $\\frac{3}{4}$ as a decimal.",
    correctAnswers: ["0.75", ".75", "0.750", "75%"],
    explanation: "To convert $\\frac{3}{4}$ to a decimal, we divide 3 by 4: $3 ÷ 4 = 0.75$. This can also be expressed as 75%.",
    topic: "Fractions and Decimals"
  },
  {
    id: 4,
    question: "Find the limit: $\\lim_{x \\to 0} \\frac{\\sin x}{x}$",
    correctAnswers: ["1", "1.0", "1.00"],
    explanation: "This is a famous limit in calculus. Using L'Hôpital's rule or the squeeze theorem, we find that $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.",
    topic: "Limits"
  },
  {
    id: 5,
    question: "What is the area of a circle with radius $r = 3$?",
    correctAnswers: ["9π", "9*π", "9 * π", "9π", "28.27", "28.274", "9 pi"],
    explanation: "The area of a circle is $A = πr^2$. With $r = 3$, we get $A = π(3)^2 = 9π ≈ 28.27$ square units.",
    topic: "Geometry"
  }
];