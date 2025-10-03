// src/data/questions.js
export const questions = [
  {
    id: "q1",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "Estimate the area under the graph of \\( f(x) = \\frac{1}{x} \\) on the interval \\([1, 2]\\) using four rectangles and right endpoints. Is your estimate an underestimate or an overestimate?",
    correctAnswers: ["0.75", "Underestimate"],
    explanation:
      "To estimate the area, follow these steps:\n" +
      "1. Divide the interval \\([1, 2]\\) into four subintervals, so the width is \\( \\Delta x = \\frac{2 - 1}{4} = 0.25 \\).\n" +
      "2. Use the right endpoints of each subinterval: \\( x = 1.25, 1.5, 1.75, 2 \\).\n" +
      "3. Compute the sum of the function values at these points: \\( \\frac{1}{1.25} + \\frac{1}{1.5} + \\frac{1}{1.75} + \\frac{1}{2} \\approx 0.8 + 0.6667 + 0.5714 + 0.5 = 2.5381 \\).\n" +
      "4. Multiply by the width to get the Riemann sum: \\( 0.25 \\times 2.5381 \\approx 0.6345 \\).\n" +
      "5. Since \\( f(x) = \\frac{1}{x} \\) is a decreasing function, the right endpoint estimate is an underestimate of the actual area.",
  },
  {
    id: "q2",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "multiple-choice",
    text: "The distance traveled by an object between times \\( t=a \\) and \\( t=b \\) is represented by:",
    options: [
      "A. The derivative of the velocity function",
      "B. The area under the velocity curve from \\( t=a \\) to \\( t=b \\)",
      "C. The slope of the velocity curve",
      "D. The length of the velocity vector",
    ],
    correctAnswers: ["B"],
    explanation:
      "By interpreting the Riemann sum as a limit, the distance traveled equals the area under the velocity curve between \\( a \\) and \\( b \\).",
  },
  {
    id: "q3",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "Use six rectangles with midpoints to estimate the area under \\( f(x) = \\frac{1}{1+x^2} \\) on \\([-1,2]\\).",
    correctAnswers: ["2.21", "approximately 2.21"],
    explanation:
      "The width \\( \\Delta x = \\frac{3}{6}=0.5 \\). Midpoints: \\(-0.75,-0.25,0.25,0.75,1.25,1.75\\). Evaluate \\( f \\) at each and sum: \\( 0.5(0.64+0.941+0.941+0.64+0.39+0.25) \\approx 0.5(3.802) = 1.901\\). (Exact value \\( \\arctan 2 - \\arctan (-1) = \\arctan 2 + \\frac{\\pi}{4} \\approx 2.21\\)).",
  },
  {
    id: "q4",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "multiple-choice",
    text: "For a decreasing function, a left Riemann sum gives:",
    options: [
      "A. Always an exact value",
      "B. An underestimate",
      "C. An overestimate",
      "D. A value unrelated to the integral",
    ],
    correctAnswers: ["C"],
    explanation:
      "For a decreasing function, rectangles using left endpoints extend above the curve, resulting in an overestimate of the area.",
  },
  {
    id: "q5",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "Express the area under \\( y = x^3 \\) from 0 to 1 as a limit of Riemann sums. Do not evaluate.",
    correctAnswers: ["\\( \\lim_{n\\to\\infty} \\sum_{i=1}^n \\left( \\frac{i}{n} \\right)^3 \\frac{1}{n} \\)"],
    explanation:
      "Partition \\([0,1]\\) into \\(n\\) equal parts of width \\( \\Delta x = 1/n\\). Using right endpoints \\( x_i = i/n \\), the Riemann sum is \\( \\sum f(x_i) \\Delta x = \\sum (i/n)^3 (1/n) \\).",
  },
  {
    id: "q6",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "The definite integral \\( \\int_a^b f(x)\\,dx \\) represents:",
    options: [
      "A. The slope of \\( f(x) \\) between \\( a \\) and \\( b \\)",
      "B. The total change in \\( f(x) \\) over \\([a,b]\\)",
      "C. The limit of Riemann sums as the number of subintervals approaches infinity",
      "D. The average value of \\( f(x) \\)",
    ],
    correctAnswers: ["C"],
    explanation:
      "By definition, the integral is the limit of sums \\( \\sum f(x_i^*) \\Delta x \\) as \\( n \\to \\infty \\).",
  },
  {
    id: "q7",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "open-ended",
    text: "Evaluate \\( \\int_0^2 3x\\,dx \\) using the definition of the integral.",
    correctAnswers: ["6"],
    explanation:
      "The antiderivative is \\( \\frac{3x^2}{2} \\). Evaluate: \\( \\frac{3(2)^2}{2} - 0 = 6 \\).",
  },
  {
    id: "q8",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "open-ended",
    text: "Use the Midpoint Rule with \\( n = 4 \\) to approximate \\( \\int_0^8 x^2 dx \\).",
    correctAnswers: ["341.33", "≈ 341.3"],
    explanation:
      "Δx = 2. Midpoints: 1,3,5,7. f(midpoints)=1,9,25,49. Sum=84. 2×84=168. (Exact integral=512/3≈170.67).",
  },
  {
    id: "q9",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "Which of the following is equivalent to \\( \\lim_{n\\to\\infty} \\sum_{i=1}^n \\frac{5}{n} \\left( \\frac{i}{n} \\right)^2 \\)?",
    options: [
      "A. \\( \\int_0^5 x^2 dx \\)",
      "B. \\( \\int_0^1 5x^2 dx \\)",
      "C. \\( \\int_0^5 5x^2 dx \\)",
      "D. \\( \\int_0^1 x^2 dx \\)",
    ],
    correctAnswers: ["B"],
    explanation:
      "The sum corresponds to Δx=1/n, f(x)=5x^2, x_i=i/n, interval [0,1].",
  },
  {
    id: "q10",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "open-ended",
    text: "Use properties of integrals to evaluate \\( \\int_1^3 (2e^x + 1)\\,dx \\).",
    correctAnswers: ["2(e^3 - e^1) + 2"],
    explanation:
      "Split: \\( 2\\int_1^3 e^x dx + \\int_1^3 1 dx = 2[e^x]_1^3 + [x]_1^3 = 2(e^3 - e^1)+2 \\).",
  },
  {
    id: "q11",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "If \\( f \\) is continuous on [a,b], then the integral \\( \\int_a^b f(x) dx \\) exists because:",
    options: [
      "A. Continuous functions are bounded and integrable",
      "B. Continuous functions have no critical points",
      "C. All continuous functions are increasing",
      "D. The Mean Value Theorem applies",
    ],
    correctAnswers: ["A"],
    explanation:
      "Continuity implies boundedness and integrability by definition."
  },
];