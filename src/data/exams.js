export const exams = [
{
    id: "ITMTB_EXAM1",
    moduleId: "ITMTB",
    title: "ITMTB Midterm Exam: Calculus of Integration (Hardest Subset)",
    description: "Week 1-3. Covers the most challenging problems from Riemann Sums, Advanced Integration Techniques (IBP, Partial Fractions), and Velocity Applications. Total Score: 100 Points.",
    timeLimit: 120,
    passingScore: 70,
    
    sections: [
      {
        id: "section_A",
        title: "Section A: Riemann Sums & Definite Integrals (4 Questions, 40 Points)",
        description: "Focuses on complex approximations (Midpoint/Left Sums with logs/trig/exponentials) and finding exact areas, including one requiring Integration by Parts.",
        instructions: "For exact areas, provide the answer in simplest exact form (e.g., fraction or in terms of \\( e \\)). For approximations, use the specified number of rectangles and round your final answer to two decimal places.",
      },
      {
        id: "section_B",
        title: "Section B: Indefinite Integrals: Techniques (5 Questions, 50 Points)",
        description: "Covers complex u-substitution (nested functions), double and cyclic Integration by Parts, and Partial Fraction Decomposition with repeated linear factors.",
        instructions: "Show all substitution or integration by parts steps. For indefinite integrals, include the constant of integration, \\( +C \\). Express answers in exact form.",
      },
      {
        id: "section_C",
        title: "Section C: Applications: Velocity & Distance (2 Questions, 10 Points)",
        description: "Application problems requiring the calculation of both Displacement and Total Distance Traveled. One problem involves sign change, and one involves u-substitution.",
        instructions: "Clearly distinguish between Distance and Displacement. Show the process of finding roots if necessary. Include appropriate units in your final answers.",
      }
    ],
    
    questions: [
      // ============================================================
      // SECTION A: RIEMANN SUMS & DEFINITE INTEGRALS (Q1-Q8)
      // ============================================================
      
      // Question A1.1
      {
        id: "exam1_q1",
        sectionId: "section_A",
        questionNumber: 1,
        type: "open-ended",
        text: "Find the area for the function \\( f(x) = 27 - x^3 \\) over the interval \\( [-1, 1] \\) using the **Left Riemann Sum** \\( (L_n) \\) with \\( n = 4 \\) rectangles.",
        correctAnswers: [
          "54.5",
          "54.50"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Left Riemann Sum with \\( n = 4 \\):**\n\n" +
          "**Step 1:** Calculate width \\( \\Delta x \\)\n" +
          "$$\\Delta x = \\frac{b-a}{n} = \\frac{1-(-1)}{4} = \\frac{2}{4} = 0.5$$\n\n" +
          "**Step 2:** Determine partition points\n" +
          "The interval \\( [-1, 1] \\) is divided into 4 sub-intervals:\n" +
          "$$[-1, -0.5], [-0.5, 0], [0, 0.5], [0.5, 1]$$\n\n" +
          "**Step 3:** Left endpoints (sample points)\n" +
          "$$c_1 = -1, \\quad c_2 = -0.5, \\quad c_3 = 0, \\quad c_4 = 0.5$$\n\n" +
          "**Step 4:** Calculate \\( f(c_i) \\)\n" +
          "- \\( f(-1) = 27 - (-1)^3 = 27 + 1 = 28 \\)\n" +
          "- \\( f(-0.5) = 27 - (-0.5)^3 = 27 + 0.125 = 27.125 \\)\n" +
          "- \\( f(0) = 27 - 0^3 = 27 \\)\n" +
          "- \\( f(0.5) = 27 - (0.5)^3 = 27 - 0.125 = 26.875 \\)\n\n" +
          "**Step 5:** Calculate \\( L_4 \\)\n" +
          "$$L_4 = \\Delta x [f(-1) + f(-0.5) + f(0) + f(0.5)]$$\n" +
          "$$L_4 = 0.5 [28 + 27.125 + 27 + 26.875]$$\n" +
          "$$L_4 = 0.5 \\times 109 = 54.5$$\n\n" +
          "**Answer: 54.5**"
      },
      
      // Question A1.2
      {
        id: "exam1_q2",
        sectionId: "section_A",
        questionNumber: 2,
        type: "open-ended",
        text: "**Question 1 continued:** Now find the **exact area** for \\( f(x) = 27 - x^3 \\) over \\( [-1, 1] \\) using definite integration.",
        correctAnswers: [
          "54",
          "54.0",
          "54.00"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Exact Area using Definite Integration:**\n\n" +
          "$$\\text{Area} = \\int_{-1}^{1} (27 - x^3) \\, dx$$\n\n" +
          "**Step 1:** Find the antiderivative\n" +
          "$$F(x) = 27x - \\frac{x^4}{4}$$\n\n" +
          "**Step 2:** Apply the Fundamental Theorem of Calculus\n" +
          "$$\\text{Area} = F(1) - F(-1)$$\n" +
          "$$= \\left(27(1) - \\frac{1^4}{4}\\right) - \\left(27(-1) - \\frac{(-1)^4}{4}\\right)$$\n" +
          "$$= \\left(27 - \\frac{1}{4}\\right) - \\left(-27 - \\frac{1}{4}\\right)$$\n" +
          "$$= 27 - \\frac{1}{4} + 27 + \\frac{1}{4}$$\n" +
          "$$= 54$$\n\n" +
          "**Answer: 54**"
      },
      
      // Question A2.1
      {
        id: "exam1_q3",
        sectionId: "section_A",
        questionNumber: 3,
        type: "open-ended",
        text: "Approximate the area for the function \\( f(x) = x^2 \\ln(x) \\) over the interval \\( [1, e] \\) using the **Midpoint Riemann Sum** \\( (M_n) \\) with \\( n = 2 \\) rectangles.",
        correctAnswers: [
          "4.35",
          "4.3529",
          "4.353"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.02,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Midpoint Riemann Sum with \\( n = 2 \\):**\n\n" +
          "**Step 1:** Calculate width \\( \\Delta x \\)\n" +
          "$$\\Delta x = \\frac{e - 1}{2} \\approx \\frac{2.718 - 1}{2} = 0.859$$\n\n" +
          "**Step 2:** Determine partition points\n" +
          "$$[1, 1.859] \\text{ and } [1.859, 2.718]$$\n\n" +
          "**Step 3:** Find midpoints\n" +
          "- \\( c_1 = 1 + \\frac{\\Delta x}{2} \\approx 1.4295 \\)\n" +
          "- \\( c_2 = e - \\frac{\\Delta x}{2} \\approx 2.2885 \\)\n\n" +
          "**Step 4:** Calculate \\( f(c_i) \\)\n" +
          "- \\( f(c_1) = (1.4295)^2 \\ln(1.4295) \\approx 2.0434 \\times 0.3573 \\approx 0.7303 \\)\n" +
          "- \\( f(c_2) = (2.2885)^2 \\ln(2.2885) \\approx 5.2372 \\times 0.8278 \\approx 4.3359 \\)\n\n" +
          "**Step 5:** Calculate \\( M_2 \\)\n" +
          "$$M_2 = \\Delta x [f(c_1) + f(c_2)]$$\n" +
          "$$M_2 \\approx 0.859 [0.7303 + 4.3359]$$\n" +
          "$$M_2 \\approx 0.859 \\times 5.0662 \\approx 4.35$$\n\n" +
          "**Answer: 4.35**"
      },
      
      // Question A2.2
      {
        id: "exam1_q4",
        sectionId: "section_A",
        questionNumber: 4,
        type: "multiple-choice",
        text: "**Question 3 continued:** Find the **exact area** for \\( f(x) = x^2 \\ln(x) \\) over \\( [1, e] \\) using definite integration with Integration by Parts.",
        options: [
          "A. \\( \\frac{e^3 + 1}{9} \\)",
          "B. \\( \\frac{2e^3 + 1}{9} \\)",
          "C. \\( \\frac{e^3 - 1}{3} \\)",
          "D. \\( \\frac{2e^3}{9} \\)"
        ],
        correctAnswers: ["B"],
        points: 5,
        explanation: "**Exact Area using Integration by Parts:**\n\n" +
          "$$\\text{Area} = \\int_{1}^{e} x^2 \\ln(x) \\, dx$$\n\n" +
          "**Step 1:** Choose \\( u \\) and \\( dv \\) (LIATE rule)\n" +
          "$$u = \\ln(x) \\implies du = \\frac{1}{x} dx$$\n" +
          "$$dv = x^2 dx \\implies v = \\frac{x^3}{3}$$\n\n" +
          "**Step 2:** Apply Integration by Parts formula\n" +
          "$$\\int u \\, dv = uv - \\int v \\, du$$\n" +
          "$$\\int x^2 \\ln(x) \\, dx = \\frac{x^3}{3} \\ln(x) - \\int \\frac{x^3}{3} \\cdot \\frac{1}{x} dx$$\n" +
          "$$= \\frac{x^3}{3} \\ln(x) - \\frac{1}{3} \\int x^2 dx$$\n" +
          "$$= \\frac{x^3}{3} \\ln(x) - \\frac{x^3}{9}$$\n\n" +
          "**Step 3:** Evaluate from 1 to \\( e \\)\n" +
          "$$\\text{Area} = \\left[\\frac{x^3}{3} \\ln(x) - \\frac{x^3}{9}\\right]_1^e$$\n" +
          "$$= \\left(\\frac{e^3}{3} \\ln(e) - \\frac{e^3}{9}\\right) - \\left(\\frac{1}{3} \\ln(1) - \\frac{1}{9}\\right)$$\n\n" +
          "Since \\( \\ln(e) = 1 \\) and \\( \\ln(1) = 0 \\):\n" +
          "$$= \\left(\\frac{e^3}{3} - \\frac{e^3}{9}\\right) - \\left(0 - \\frac{1}{9}\\right)$$\n" +
          "$$= \\frac{3e^3 - e^3}{9} + \\frac{1}{9} = \\frac{2e^3}{9} + \\frac{1}{9}$$\n" +
          "$$= \\frac{2e^3 + 1}{9}$$\n\n" +
          "**Answer: B. \\( \\frac{2e^3 + 1}{9} \\)**"
      },
      
      // Question A3
      {
        id: "exam1_q5",
        sectionId: "section_A",
        questionNumber: 5,
        type: "open-ended",
        text: "Approximate the area for the function \\( f(x) = 4\\cos(2x) \\) over the interval \\( [\\frac{\\pi}{4}, \\frac{\\pi}{2}] \\) using the **Midpoint Riemann Sum** \\( (M_n) \\) with \\( n = 5 \\) rectangles.",
        correctAnswers: [
          "-2.23",
          "-2.2335",
          "-2.234"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.02,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 10,
        explanation: "**Midpoint Riemann Sum with \\( n = 5 \\):**\n\n" +
          "**Step 1:** Calculate width \\( \\Delta x \\)\n" +
          "$$\\Delta x = \\frac{\\frac{\\pi}{2} - \\frac{\\pi}{4}}{5} = \\frac{\\frac{\\pi}{4}}{5} = \\frac{\\pi}{20} \\approx 0.1571$$\n\n" +
          "**Step 2:** Find midpoints \\( c_i = a + (i - \\frac{1}{2})\\Delta x \\)\n" +
          "- \\( c_1 = \\frac{\\pi}{4} + \\frac{\\pi}{40} = \\frac{11\\pi}{40} \\approx 0.8639 \\)\n" +
          "- \\( c_2 = \\frac{13\\pi}{40} \\approx 1.0210 \\)\n" +
          "- \\( c_3 = \\frac{3\\pi}{8} \\approx 1.1781 \\)\n" +
          "- \\( c_4 = \\frac{17\\pi}{40} \\approx 1.3352 \\)\n" +
          "- \\( c_5 = \\frac{19\\pi}{40} \\approx 1.4923 \\)\n\n" +
          "**Step 3:** Calculate \\( f(c_i) = 4\\cos(2c_i) \\)\n" +
          "- \\( f(c_1) = 4\\cos(\\frac{11\\pi}{20}) \\approx -1.0964 \\)\n" +
          "- \\( f(c_2) = 4\\cos(\\frac{13\\pi}{20}) \\approx -2.5976 \\)\n" +
          "- \\( f(c_3) = 4\\cos(\\frac{3\\pi}{4}) = 4(-\\frac{\\sqrt{2}}{2}) \\approx -2.8284 \\)\n" +
          "- \\( f(c_4) = 4\\cos(\\frac{17\\pi}{20}) \\approx -3.7588 \\)\n" +
          "- \\( f(c_5) = 4\\cos(\\frac{19\\pi}{20}) \\approx -3.9508 \\)\n\n" +
          "**Step 4:** Calculate \\( M_5 \\)\n" +
          "$$M_5 = \\frac{\\pi}{20}[f(c_1) + f(c_2) + f(c_3) + f(c_4) + f(c_5)]$$\n" +
          "$$M_5 \\approx 0.1571[-1.0964 - 2.5976 - 2.8284 - 3.7588 - 3.9508]$$\n" +
          "$$M_5 \\approx 0.1571 \\times (-14.232) \\approx -2.23$$\n\n" +
          "**Answer: -2.23**"
      },
      
      // Question A4
      {
        id: "exam1_q6",
        sectionId: "section_A",
        questionNumber: 6,
        type: "open-ended",
        text: "Approximate the area for the function \\( f(x) = 1 - e^{-x} \\) over the interval \\( [0, 10] \\) using the **Left Riemann Sum** \\( (L_n) \\) with \\( n = 10 \\) rectangles.",
        correctAnswers: [
          "7.42",
          "7.4182",
          "7.418"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.02,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 10,
        explanation: "**Left Riemann Sum with \\( n = 10 \\):**\n\n" +
          "**Step 1:** Calculate width \\( \\Delta x \\)\n" +
          "$$\\Delta x = \\frac{10 - 0}{10} = 1$$\n\n" +
          "**Step 2:** Left endpoints\n" +
          "$$c_i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9$$\n\n" +
          "**Step 3:** Calculate \\( f(c_i) = 1 - e^{-c_i} \\)\n" +
          "- \\( f(0) = 0 \\)\n" +
          "- \\( f(1) \\approx 0.6321 \\)\n" +
          "- \\( f(2) \\approx 0.8647 \\)\n" +
          "- \\( f(3) \\approx 0.9502 \\)\n" +
          "- \\( f(4) \\approx 0.9817 \\)\n" +
          "- \\( f(5) \\approx 0.9933 \\)\n" +
          "- \\( f(6) \\approx 0.9975 \\)\n" +
          "- \\( f(7) \\approx 0.9991 \\)\n" +
          "- \\( f(8) \\approx 0.9997 \\)\n" +
          "- \\( f(9) \\approx 0.9999 \\)\n\n" +
          "**Step 4:** Calculate \\( L_{10} \\)\n" +
          "$$L_{10} = 1 \\times [0 + 0.6321 + 0.8647 + 0.9502 + 0.9817 + 0.9933 + 0.9975 + 0.9991 + 0.9997 + 0.9999]$$\n" +
          "$$L_{10} = 7.4182 \\approx 7.42$$\n\n" +
          "**Note:** Since \\( f(x) \\) is increasing, the left sum underestimates the true area.\n\n" +
          "**Exact area:** \\( \\int_0^{10} (1-e^{-x})dx = 9 + e^{-10} \\approx 9.00 \\)\n\n" +
          "**Answer: 7.42**"
      },
      
      // ============================================================
      // SECTION B: INDEFINITE INTEGRALS: TECHNIQUES (Q7-Q11)
      // ============================================================
      
      // Question B1
      {
        id: "exam1_q7",
        sectionId: "section_B",
        questionNumber: 7,
        type: "multiple-choice",
        text: "Solve the indefinite integral using **u-substitution**: \\( \\int e^{x} \\cos\\left(\\frac{e^{x}}{3}-1\\right)dx \\).",
        options: [
          "A. \\( 3\\sin\\left(\\frac{e^{x}}{3}-1\\right) + C \\)",
          "B. \\( \\sin\\left(\\frac{e^{x}}{3}-1\\right) + C \\)",
          "C. \\( \\frac{1}{3}\\sin\\left(\\frac{e^{x}}{3}-1\\right) + C \\)",
          "D. \\( 3\\cos\\left(\\frac{e^{x}}{3}-1\\right) + C \\)"
        ],
        correctAnswers: ["A"],
        points: 10,
        explanation: "**U-Substitution Strategy:**\n\n" +
          "**Step 1:** Identify \\( u \\) as the inside function of cosine\n" +
          "$u = \\frac{e^{x}}{3}-1$\n\n" +
          "**Step 2:** Find \\( du \\)\n" +
          "$du = \\frac{d}{dx}\\left(\\frac{e^{x}}{3}-1\\right)dx = \\frac{e^{x}}{3}dx$\n\n" +
          "From this, we get: \\( e^x dx = 3du \\)\n\n" +
          "**Step 3:** Substitute into the integral\n" +
          "$\\int e^{x} \\cos\\left(\\frac{e^{x}}{3}-1\\right)dx = \\int \\cos(u)(3du)$\n" +
          "$= 3\\int \\cos(u)du$\n\n" +
          "**Step 4:** Integrate\n" +
          "$= 3\\sin(u) + C$\n\n" +
          "**Step 5:** Substitute \\( u \\) back\n" +
          "$= 3\\sin\\left(\\frac{e^{x}}{3}-1\\right) + C$\n\n" +
          "**Answer: A. \\( 3\\sin\\left(\\frac{e^{x}}{3}-1\\right) + C \\)**"
      },
      
      // Question B2
      {
        id: "exam1_q8",
        sectionId: "section_B",
        questionNumber: 8,
        type: "multiple-choice",
        text: "Solve the indefinite integral using **u-substitution**: \\( \\int\\left(12x^{3}+\\frac{3}{x}-6\\sin x\\right)\\sqrt{x^{4}+\\ln x+2\\cos x}\\,dx \\).",
        options: [
          "A. \\( \\left(x^{4}+\\ln x+2\\cos x\\right)^{3/2} + C \\)",
          "B. \\( 2\\left(x^{4}+\\ln x+2\\cos x\\right)^{3/2} + C \\)",
          "C. \\( \\frac{2}{3}\\left(x^{4}+\\ln x+2\\cos x\\right)^{3/2} + C \\)",
          "D. \\( 6\\left(x^{4}+\\ln x+2\\cos x\\right)^{3/2} + C \\)"
        ],
        correctAnswers: ["B"],
        points: 10,
        explanation: "**Complex U-Substitution:**\n\n" +
          "**Step 1:** Let \\( u \\) be the expression under the radical\n" +
          "$u = x^{4}+\\ln x+2\\cos x$\n\n" +
          "**Step 2:** Find \\( du \\)\n" +
          "$du = \\left(4x^{3}+\\frac{1}{x}-2\\sin x\\right)dx$\n\n" +
          "**Step 3:** Factor the coefficient outside the radical\n" +
          "$12x^{3}+\\frac{3}{x}-6\\sin x = 3\\left(4x^{3}+\\frac{1}{x}-2\\sin x\\right) = 3du$\n\n" +
          "**Step 4:** Substitute\n" +
          "$\\int \\sqrt{u}(3du) = 3\\int u^{1/2}du$\n\n" +
          "**Step 5:** Integrate using power rule\n" +
          "$= 3 \\cdot \\frac{u^{3/2}}{3/2} + C = 3 \\cdot \\frac{2}{3}u^{3/2} + C = 2u^{3/2} + C$\n\n" +
          "**Step 6:** Substitute \\( u \\) back\n" +
          "$= 2\\left(x^{4}+\\ln x+2\\cos x\\right)^{3/2} + C$\n\n" +
          "**Answer: B. \\( 2\\left(x^{4}+\\ln x+2\\cos x\\right)^{3/2} + C \\)**"
      },
      
      // Question B3
      {
        id: "exam1_q9",
        sectionId: "section_B",
        questionNumber: 9,
        type: "multiple-choice",
        text: "Solve the indefinite integral using **Integration by Parts (twice)**: \\( \\int x^{2}e^{x}dx \\).",
        options: [
          "A. \\( e^x(x^2 - 2x + 2) + C \\)",
          "B. \\( e^x(x^2 + 2x + 2) + C \\)",
          "C. \\( e^x(x^2 - 2x - 2) + C \\)",
          "D. \\( e^x(x^2 - x + 1) + C \\)"
        ],
        correctAnswers: ["A"],
        points: 10,
        explanation: "**Double Integration by Parts:**\n\n" +
          "**First Application:**\n\n" +
          "Let \\( u_1 = x^2 \\implies du_1 = 2x\\,dx \\)\n" +
          "Let \\( dv_1 = e^x dx \\implies v_1 = e^x \\)\n\n" +
          "Using \\( \\int u\\,dv = uv - \\int v\\,du \\):\n" +
          "$\\int x^{2}e^{x}dx = x^2 e^x - \\int e^x(2x)dx$\n" +
          "$= x^2 e^x - 2\\int xe^x dx$\n\n" +
          "**Second Application (on \\( \\int xe^x dx \\)):**\n\n" +
          "Let \\( u_2 = x \\implies du_2 = dx \\)\n" +
          "Let \\( dv_2 = e^x dx \\implies v_2 = e^x \\)\n\n" +
          "$\\int xe^x dx = xe^x - \\int e^x dx = xe^x - e^x$\n\n" +
          "**Substitute back:**\n" +
          "$\\int x^{2}e^{x}dx = x^2 e^x - 2[xe^x - e^x] + C$\n" +
          "$= x^2 e^x - 2xe^x + 2e^x + C$\n" +
          "$= e^x(x^2 - 2x + 2) + C$\n\n" +
          "**Answer: A. \\( e^x(x^2 - 2x + 2) + C \\)**"
      },
      
      // Question B4
      {
        id: "exam1_q10",
        sectionId: "section_B",
        questionNumber: 10,
        type: "multiple-choice",
        text: "Solve the indefinite integral using **Integration by Parts (cyclic)**: \\( \\int e^{x}\\cos x\\,dx \\).",
        options: [
          "A. \\( \\frac{e^{x}}{2}(\\cos x + \\sin x) + C \\)",
          "B. \\( \\frac{e^{x}}{2}(\\cos x - \\sin x) + C \\)",
          "C. \\( e^{x}(\\cos x + \\sin x) + C \\)",
          "D. \\( \\frac{e^{x}}{2}(\\sin x - \\cos x) + C \\)"
        ],
        correctAnswers: ["A"],
        points: 10,
        explanation: "**Cyclic Integration by Parts:**\n\n" +
          "Let \\( I = \\int e^{x}\\cos x\\,dx \\)\n\n" +
          "**First Application:**\n\n" +
          "Let \\( u_1 = \\cos x \\implies du_1 = -\\sin x\\,dx \\)\n" +
          "Let \\( dv_1 = e^x dx \\implies v_1 = e^x \\)\n\n" +
          "$I = e^x\\cos x - \\int e^x(-\\sin x)dx$\n" +
          "$I = e^x\\cos x + \\int e^x\\sin x\\,dx \\quad \\text{...(Eq. 1)}$\n\n" +
          "**Second Application (on \\( \\int e^x\\sin x\\,dx \\)):**\n\n" +
          "Let \\( u_2 = \\sin x \\implies du_2 = \\cos x\\,dx \\)\n" +
          "Let \\( dv_2 = e^x dx \\implies v_2 = e^x \\)\n\n" +
          "$\\int e^x\\sin x\\,dx = e^x\\sin x - \\int e^x\\cos x\\,dx$\n" +
          "$= e^x\\sin x - I$\n\n" +
          "**Substitute back into Eq. 1:**\n" +
          "$I = e^x\\cos x + [e^x\\sin x - I]$\n" +
          "$I = e^x\\cos x + e^x\\sin x - I$\n" +
          "$2I = e^x(\\cos x + \\sin x)$\n" +
          "$I = \\frac{e^{x}}{2}(\\cos x + \\sin x) + C$\n\n" +
          "**Answer: A. \\( \\frac{e^{x}}{2}(\\cos x + \\sin x) + C \\)**"
      },
      
      // Question B5
      {
        id: "exam1_q11",
        sectionId: "section_B",
        questionNumber: 11,
        type: "multiple-choice",
        text: "Solve the indefinite integral using **Partial Fraction Decomposition**: \\( \\int\\frac{4x^{2}-19}{(x+3)^{2}(x-2)}dx \\).",
        options: [
          "A. \\( \\frac{103}{25}\\ln|x+3| - \\frac{3}{25}\\ln|x-2| + \\frac{17}{5(x+3)} + C \\)",
          "B. \\( \\frac{3}{25}\\ln|x+3| - \\frac{103}{25}\\ln|x-2| + \\frac{17}{5(x+3)} + C \\)",
          "C. \\( \\frac{103}{25}\\ln|x+3| - \\frac{3}{25}\\ln|x-2| - \\frac{17}{5(x+3)} + C \\)",
          "D. \\( \\frac{103}{25}\\ln|x-2| - \\frac{3}{25}\\ln|x+3| + \\frac{17}{5(x+3)} + C \\)"
        ],
        correctAnswers: ["A"],
        points: 10,
        explanation: "**Partial Fraction Decomposition with Repeated Factor:**\n\n" +
          "**Step 1:** Set up the decomposition\n" +
          "$\\frac{4x^{2}-19}{(x+3)^{2}(x-2)} = \\frac{A}{x-2} + \\frac{B}{x+3} + \\frac{C}{(x+3)^{2}}$\n\n" +
          "**Step 2:** Clear denominators\n" +
          "$4x^{2}-19 = A(x+3)^2 + B(x-2)(x+3) + C(x-2)$\n\n" +
          "**Step 3:** Find constants using root method\n\n" +
          "Set \\( x = 2 \\) to find \\( A \\):\n" +
          "$4(4) - 19 = A(25) \\implies -3 = 25A \\implies A = -\\frac{3}{25}$\n\n" +
          "Set \\( x = -3 \\) to find \\( C \\):\n" +
          "$4(9) - 19 = C(-5) \\implies 17 = -5C \\implies C = -\\frac{17}{5}$\n\n" +
          "Set \\( x = 0 \\) to find \\( B \\):\n" +
          "$-19 = 9A - 6B - 2C$\n" +
          "$-19 = 9\\left(-\\frac{3}{25}\\right) - 6B - 2\\left(-\\frac{17}{5}\\right)$\n" +
          "$-19 = -\\frac{27}{25} - 6B + \\frac{34}{5}$\n\n" +
          "Converting to common denominator and solving:\n" +
          "$B = \\frac{103}{25}$\n\n" +
          "**Step 4:** Integrate\n" +
          "$\\int\\left(\\frac{-3/25}{x-2} + \\frac{103/25}{x+3} + \\frac{-17/5}{(x+3)^{2}}\\right)dx$\n\n" +
          "$= -\\frac{3}{25}\\ln|x-2| + \\frac{103}{25}\\ln|x+3| - \\frac{17}{5}\\int(x+3)^{-2}dx$\n\n" +
          "$= \\frac{103}{25}\\ln|x+3| - \\frac{3}{25}\\ln|x-2| + \\frac{17}{5(x+3)} + C$\n\n" +
          "**Answer: A**"
      },
      
      // ============================================================
      // SECTION C: APPLICATIONS: VELOCITY & DISTANCE (Q12-Q15)
      // ============================================================
      
      // Question C1.1: Displacement
      {
        id: "exam1_q12",
        sectionId: "section_C",
        questionNumber: 12,
        type: "open-ended",
        text: "A particle has velocity \\( v(t) = 27t - 9t^2 \\) m/s. Calculate the **Displacement** from \\( t = 1 \\) second to \\( t = 5 \\) seconds.",
        correctAnswers: [
          "-48",
          "-48.0",
          "-48 m",
          "-48m"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.1,
          acceptedUnits: ["m", "meters"],
          requiredUnit: null
        },
        points: 2.5,
        explanation: "**Displacement Calculation:**\n\n" +
          "Displacement is the definite integral of velocity over \\([1, 5]\\):\n" +
          "$\\text{Displacement} = \\int_{1}^{5} (27t - 9t^2) dt$\n\n" +
          "**Step 1:** Find the antiderivative\n" +
          "$F(t) = \\frac{27t^2}{2} - \\frac{9t^3}{3} = \\frac{27}{2}t^2 - 3t^3$\n\n" +
          "**Step 2:** Evaluate using FTC\n" +
          "$\\text{Displacement} = F(5) - F(1)$\n\n" +
          "$F(5) = \\frac{27}{2}(25) - 3(125) = \\frac{675}{2} - 375 = \\frac{675 - 750}{2} = -\\frac{75}{2}$\n\n" +
          "$F(1) = \\frac{27}{2}(1) - 3(1) = \\frac{27}{2} - 3 = \\frac{27 - 6}{2} = \\frac{21}{2}$\n\n" +
          "$\\text{Displacement} = -\\frac{75}{2} - \\frac{21}{2} = -\\frac{96}{2} = -48 \\text{ m}$\n\n" +
          "The negative value indicates the particle ends up 48 meters behind its starting position at \\( t = 1 \\).\n\n" +
          "**Answer: -48 m**"
      },
      
      // Question C1.2: Total Distance
      {
        id: "exam1_q13",
        sectionId: "section_C",
        questionNumber: 13,
        type: "open-ended",
        text: "**Question 12 continued:** Calculate the **Total Distance Traveled** for the same particle with \\( v(t) = 27t - 9t^2 \\) m/s from \\( t = 1 \\) to \\( t = 5 \\) seconds.",
        correctAnswers: [
          "108",
          "108.0",
          "108 m",
          "108m"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.1,
          acceptedUnits: ["m", "meters"],
          requiredUnit: null
        },
        points: 2.5,
        explanation: "**Total Distance Calculation:**\n\n" +
          "Total distance requires integrating \\( |v(t)| \\), so we must find when \\( v(t) = 0 \\).\n\n" +
          "**Step 1:** Find roots of \\( v(t) \\)\n" +
          "$27t - 9t^2 = 0$\n" +
          "$9t(3 - t) = 0$\n" +
          "$t = 0 \\text{ or } t = 3$\n\n" +
          "**Step 2:** Determine sign of \\( v(t) \\) on intervals\n" +
          "- On \\([1, 3]\\): \\( v(2) = 54 - 36 = 18 > 0 \\) (positive)\n" +
          "- On \\([3, 5]\\): \\( v(4) = 108 - 144 = -36 < 0 \\) (negative)\n\n" +
          "**Step 3:** Split the integral\n" +
          "$\\text{Distance} = \\int_{1}^{3} v(t)\\,dt + \\int_{3}^{5} |v(t)|\\,dt$\n" +
          "$= \\int_{1}^{3} v(t)\\,dt - \\int_{3}^{5} v(t)\\,dt$\n\n" +
          "**Part 1:** \\([1, 3]\\)\n" +
          "$F(3) = \\frac{27}{2}(9) - 3(27) = \\frac{243}{2} - 81 = \\frac{81}{2}$\n" +
          "$F(1) = \\frac{21}{2}$\n" +
          "$\\text{Distance}_1 = \\frac{81}{2} - \\frac{21}{2} = 30 \\text{ m}$\n\n" +
          "**Part 2:** \\([3, 5]\\)\n" +
          "$F(5) = -\\frac{75}{2}, \\quad F(3) = \\frac{81}{2}$\n" +
          "$\\int_{3}^{5} v(t)\\,dt = -\\frac{75}{2} - \\frac{81}{2} = -78$\n" +
          "$\\text{Distance}_2 = |-78| = 78 \\text{ m}$\n\n" +
          "**Step 4:** Sum the distances\n" +
          "$\\text{Total Distance} = 30 + 78 = 108 \\text{ m}$\n\n" +
          "**Answer: 108 m**"
      },
      
      // Question C2.1: Displacement (same as distance)
      {
        id: "exam1_q14",
        sectionId: "section_C",
        questionNumber: 14,
        type: "open-ended",
        text: "A particle has velocity \\( v(t) = t\\sqrt{100 - t^2} \\) m/s. Calculate the **Displacement** for the first 7 seconds (over \\([0, 7]\\)).",
        correctAnswers: [
          "211.93",
          "211.9",
          "212",
          "(1000-51*sqrt(51))/3",
          "(1000-51√51)/3"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.5,
          acceptedUnits: ["m", "meters"],
          requiredUnit: null
        },
        points: 2.5,
        explanation: "**Displacement Calculation using U-Substitution:**\n\n" +
          "**Step 1:** Check if \\( v(t) \\) changes sign on \\([0, 7]\\)\n" +
          "- \\( t \\geq 0 \\) on \\([0, 7]\\)\n" +
          "- \\( \\sqrt{100 - t^2} \\) is real and positive when \\( t \\leq 10 \\)\n" +
          "- Since \\( 7 < 10 \\), \\( v(t) \\geq 0 \\) throughout \\([0, 7]\\)\n\n" +
          "Therefore: **Displacement = Total Distance**\n\n" +
          "**Step 2:** Set up integral\n" +
          "$\\text{Displacement} = \\int_{0}^{7} t\\sqrt{100 - t^2}\\,dt$\n\n" +
          "**Step 3:** Use u-substitution\n" +
          "Let \\( u = 100 - t^2 \\)\n" +
          "$du = -2t\\,dt \\implies t\\,dt = -\\frac{1}{2}du$\n\n" +
          "**Step 4:** Change limits\n" +
          "- When \\( t = 0 \\): \\( u = 100 \\)\n" +
          "- When \\( t = 7 \\): \\( u = 100 - 49 = 51 \\)\n\n" +
          "**Step 5:** Substitute and integrate\n" +
          "$\\int_{100}^{51} \\sqrt{u}\\left(-\\frac{1}{2}\\right)du = \\frac{1}{2}\\int_{51}^{100} u^{1/2}\\,du$\n\n" +
          "$= \\frac{1}{2} \\cdot \\frac{2}{3}[u^{3/2}]_{51}^{100} = \\frac{1}{3}[u\\sqrt{u}]_{51}^{100}$\n\n" +
          "$= \\frac{1}{3}[100\\sqrt{100} - 51\\sqrt{51}]$\n\n" +
          "$= \\frac{1}{3}[1000 - 51\\sqrt{51}]$\n\n" +
          "**Exact answer:** \\( \\frac{1000 - 51\\sqrt{51}}{3} \\) meters\n\n" +
          "**Approximate:** \\( \\sqrt{51} \\approx 7.1414 \\)\n" +
          "$\\approx \\frac{1000 - 364.21}{3} \\approx 211.93 \\text{ m}$\n\n" +
          "**Answer: 211.93 m** (or exact form)"
      },
      
      // Question C2.2: Total Distance (same as displacement)
      {
        id: "exam1_q15",
        sectionId: "section_C",
        questionNumber: 15,
        type: "multiple-choice",
        text: "**Question 14 continued:** What is the relationship between Displacement and Total Distance for this particle?",
        options: [
          "A. Total Distance > Displacement (particle changed direction)",
          "B. Total Distance = Displacement (particle never changed direction)",
          "C. Total Distance < Displacement (not physically possible)",
          "D. Cannot be determined without more information"
        ],
        correctAnswers: ["B"],
        points: 2.5,
        explanation: "**Analysis:**\n\n" +
          "Since \\( v(t) = t\\sqrt{100 - t^2} \\geq 0 \\) for all \\( t \\in [0, 7] \\):\n\n" +
          "- The particle **never changes direction** (velocity never becomes negative)\n" +
          "- The particle moves continuously in one direction\n" +
          "- Therefore: \\( |v(t)| = v(t) \\) throughout the interval\n\n" +
          "**Mathematical relationship:**\n" +
          "$\\text{Total Distance} = \\int_{0}^{7} |v(t)|\\,dt = \\int_{0}^{7} v(t)\\,dt = \\text{Displacement}$\n\n" +
          "**Conclusion:**\n" +
          "Total Distance = Displacement = \\( \\frac{1000 - 51\\sqrt{51}}{3} \\) m ≈ 211.93 m\n\n" +
          "**Answer: B. Total Distance = Displacement (particle never changed direction)**"
      }
    ]
  },

  //************************************************************************************************************************** */

{
    id: "ITMTB_EXAM2",
    moduleId: "ITMTB",
    title: "ITMTB Final Exam",
    description: "Not yet set",
    timeLimit: 1, // minutes (optional, set to null for no limit)
    passingScore: 70, // percentage
    
    // Sections organize the exam
    sections: [
      {
        id: "section_1",
        title: "Section A: Not yet set",
        description: "Coming soon...",
        instructions: "Contact the founder for more info.",
      },
    ],
    
        questions: [
      {
        id: "exam2_q1",
        sectionId: "section_1",
        questionNumber: 1,
        type: "multiple-choice",
        text: "Coming soon...",
        options: [
          "Coming soon...",
        ],
        correctAnswers: ["B"],
        points: 2,
        explanation: "The definite integral represents the **signed area** between the curve and the x-axis:\n\n" +
          "- Area **above** the x-axis is positive\n" +
          "- Area **below** the x-axis is negative\n\n" +
          "$$\\int_{a}^{b} f(x) \\, dx = \\text{(Signed Area)}$$\n\n" +
          "**Answer: B**"
      },
    ]
  },

  {
    id: "ITMTB_EXAM3",
    moduleId: "ITMTB",
    title: "ITMTB Practice Questions (Unlimited)",
    description: "Not yet set",
    timeLimit: 1, // minutes (optional, set to null for no limit)
    passingScore: 70, // percentage
    
    // Sections organize the exam
    sections: [
      {
        id: "section_1",
        title: "Section A: Not yet set",
        description: "Coming soon...",
        instructions: "Contact the founder for more info.",
      },
    ],
    
        questions: [
      {
        id: "exam3_q1",
        sectionId: "section_1",
        questionNumber: 1,
        type: "multiple-choice",
        text: "Coming soon...",
        options: [
          "Coming soon...",
        ],
        correctAnswers: ["B"],
        points: 2,
        explanation: "The definite integral represents the **signed area** between the curve and the x-axis:\n\n" +
          "- Area **above** the x-axis is positive\n" +
          "- Area **below** the x-axis is negative\n\n" +
          "$$\\int_{a}^{b} f(x) \\, dx = \\text{(Signed Area)}$$\n\n" +
          "**Answer: B**"
      },
    ]
  }

];

// Export utility functions for working with exams
export const getExamById = (examId) => {
  return exams.find(exam => exam.id === examId);
};

export const getExamQuestions = (examId) => {
  const exam = getExamById(examId);
  return exam ? exam.questions : [];
};

export const getExamSection = (examId, sectionId) => {
  const exam = getExamById(examId);
  if (!exam) return null;
  
  const section = exam.sections.find(s => s.id === sectionId);
  const questions = exam.questions.filter(q => q.sectionId === sectionId);
  
  return section ? { ...section, questions } : null;
};

export const getTotalPoints = (examId) => {
  const exam = getExamById(examId);
  if (!exam) return 0;
  
  return exam.questions.reduce((total, q) => total + (q.points || 0), 0);
};