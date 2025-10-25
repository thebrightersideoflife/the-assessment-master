export const exams = [
{
    id: "ITMTB_EXAM1",
    moduleId: "ITMTB",
    title: "ITMTB Midterm Exam: Calculus of Integration (Hardest Subset)",
    description: "Week 1-3. Covers the most challenging problems from Riemann Sums, Advanced Integration Techniques (IBP, Partial Fractions), and Velocity Applications. Total Score: 100 Points.",
    examBy: "Mr Kwadwo Afrane-Okese",
    timeLimit: 150,
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
      },
      {
        id: "section_D",
        title: "Section D: Fundamental Theorem of Calculus, Part 1 (5 Questions, 50 Points)",
        description: "Covers the differentiation of definite integrals with variable limits, requiring the Chain Rule and substitution.",
        instructions: "Apply FTC Part 1 carefully. For integrals with both variable upper and lower limits, split the integral at a constant. Remember to use the Chain Rule when differentiating the limits of integration.",
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
        explanation: "**1. Find the Rectangle Width (\\( \\Delta x \\))**\n" +
          "The interval is \\( [a, b] = [1, e] \\) and \\( n = 2 \\) rectangles.\n" +
          "$$ \\Delta x = \\frac{b - a}{n} = \\frac{e - 1}{2} $$" +
          "Using \\( e \\approx 2.71828 \\), we get \\( \\Delta x \\approx \\frac{2.71828 - 1}{2} \\approx 0.85914 $$" +
          "\n" +
          "**2. Determine Subintervals and Midpoints (\\( c_i \\))**\n" +
          "First, find the partition points \\( x_0, x_1, x_2 \\):\n" +
          "\\( x_0 = a = 1 \\)\n" +
          "\\( x_1 = a + \\Delta x = 1 + \\frac{e - 1}{2} = \\frac{1 + e}{2} \\approx 1.85914 \\)\n" +
          "\\( x_2 = a + 2\\Delta x = 1 + 2(\\frac{e - 1}{2}) = e \\approx 2.71828 \\)\n\n" +
          "The subintervals are \\( [1, \\frac{1+e}{2}] \\) and \\( [\\frac{1+e}{2}, e] \\). Now find their midpoints:\n" +
          "**Midpoint 1 (\\( c_1 \\)):**\n" +
          "$$ c_1 = \\frac{x_0 + x_1}{2} = \\frac{1 + (\\frac{1 + e}{2})}{2} = \\frac{(\\frac{2 + 1 + e}{2})}{2} = \\frac{3 + e}{4} \\approx 1.42957 $$" +
          "**Midpoint 2 (\\( c_2 \\)):**\n" +
          "$$ c_2 = \\frac{x_1 + x_2}{2} = \\frac{(\\frac{1 + e}{2}) + e}{2} = \\frac{(\\frac{1 + e + 2e}{2})}{2} = \\frac{1 + 3e}{4} \\approx 2.28871 $$" +
          "\n" +
          "**3. Evaluate the Function at the Midpoints (\\( f(c_i) \\))**\n" +
          "The function is \\( f(x) = x^2 \\ln(x) \\).\n" +
          "$$ f(c_1) = f(\\frac{3 + e}{4}) \\approx f(1.42957) = (1.42957)^2 \\ln(1.42957) \\approx 0.73039 $$" +
          "$$ f(c_2) = f(\\frac{1 + 3e}{4}) \\approx f(2.28871) = (2.28871)^2 \\ln(2.28871) \\approx 4.33745 $$" +
          "\n" +
          "**4. Calculate the Midpoint Sum (\\( M_2 \\))**\n" +
          "The sum is the total area of the rectangles: \\( M_n = \\Delta x \\sum_{i=1}^{n} f(c_i) \\).\n" +
          "$$ M_2 = \\Delta x [f(c_1) + f(c_2)] $$" +
          "$$ M_2 \\approx 0.85914 \\times [0.73039 + 4.33745] $$" +
          "$$ M_2 \\approx 0.85914 \\times [5.06784] $$" +
          "$$ M_2 \\approx 4.3538 $$" +
          "\n" +
          "Rounding to two decimal places gives **4.35**. More precise answers like **4.353** are also correct."
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
          "-2.01",
          "-2.008",
          "-2.0082"
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
          "$$\\Delta x = \\frac{\\frac{\\pi}{2} - \\frac{\\pi}{4}}{5} = \\frac{\\pi}{20} \\approx 0.1571$$\n\n" +
          "**Step 2:** Find midpoints \\( c_i = a + (i - \\frac{1}{2})\\Delta x \\)\n" +
          "- \\( c_1 = \\frac{11\\pi}{40} \\approx 0.8639 \\)\n" +
          "- \\( c_2 = \\frac{13\\pi}{40} \\approx 1.0210 \\)\n" +
          "- \\( c_3 = \\frac{15\\pi}{40} = \\frac{3\\pi}{8} \\approx 1.1781 \\)\n" +
          "- \\( c_4 = \\frac{17\\pi}{40} \\approx 1.3352 \\)\n" +
          "- \\( c_5 = \\frac{19\\pi}{40} \\approx 1.4923 \\)\n\n" +
          "**Step 3:** Calculate \\( f(c_i) = 4\\cos(2c_i) \\)\n" +
          "- \\( f(c_1) = 4\\cos(\\frac{11\\pi}{20}) \\approx -0.6257 \\)\n" +
          "- \\( f(c_2) = 4\\cos(\\frac{13\\pi}{20}) \\approx -1.8160 \\)\n" +
          "- \\( f(c_3) = 4\\cos(\\frac{3\\pi}{4}) = -2.8284 \\)\n" +
          "- \\( f(c_4) = 4\\cos(\\frac{17\\pi}{20}) \\approx -3.5640 \\)\n" +
          "- \\( f(c_5) = 4\\cos(\\frac{19\\pi}{20}) \\approx -3.9508 \\)\n\n" +
          "**Step 4:** Calculate \\( M_5 \\)\n" +
          "$$M_5 = \\frac{\\pi}{20}[f(c_1) + f(c_2) + f(c_3) + f(c_4) + f(c_5)]$$\n" +
          "$$M_5 \\approx 0.1571[-0.6257 - 1.8160 - 2.8284 - 3.5640 - 3.9508]$$\n" +
          "$$M_5 \\approx 0.1571 \\times (-12.7079) \\approx -2.01$$\n\n" +
          "**Answer: -2.01**"
      },

      
      // Question A4
      {
        id: "exam1_q6",
        sectionId: "section_A",
        questionNumber: 6,
        type: "open-ended",
        text: "Approximate the area for the function \\( f(x) = 1 - e^{-x} \\) over the interval \\( [0, 10] \\) using the **Left Riemann Sum** \\( (L_n) \\) with \\( n = 10 \\) rectangles.",
        correctAnswers: [
          "8.4180951148",
          "8.4181",
          "8.42"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.02,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 10,
        explanation: "**Extensively elaborated solution — Left Riemann Sum with \\( n = 10 \\):**\n\n" +
          "**Overview / strategy:** We partition the interval \\([0,10]\\) into \\(n=10\\) equal subintervals, use the left endpoint of each subinterval to evaluate \\(f(x)=1-e^{-x}\\), multiply each value by the width \\(\\Delta x\\), and sum. Since \\(f(x)\\) is increasing on \\([0,10]\\), the left Riemann sum will be an underestimate of the exact integral.\n\n" +
          "**Step 1 — width of each rectangle:**\n\n" +
          "$$\\Delta x = \\frac{10-0}{10} = 1.$$ \n\n" +
          "**Step 2 — left endpoints (ten of them):**\n\n" +
          "$$x_0=0,\\; x_1=1,\\; x_2=2,\\; x_3=3,\\; x_4=4,\\; x_5=5,\\; x_6=6,\\; x_7=7,\\; x_8=8,\\; x_9=9.$$ \n\n" +
          "**Step 3 — evaluate \\(f(x_i)=1-e^{-x_i}\\) at left endpoints (more digits shown):**\n" +
          "- \\(f(0)=1-e^{0}=0.0000000000\\)\n" +
          "- \\(f(1)=1-e^{-1}\\approx 0.6321205588\\)\n" +
          "- \\(f(2)=1-e^{-2}\\approx 0.8646647168\\)\n" +
          "- \\(f(3)=1-e^{-3}\\approx 0.9502129316\\)\n" +
          "- \\(f(4)=1-e^{-4}\\approx 0.9816843611\\)\n" +
          "- \\(f(5)=1-e^{-5}\\approx 0.9932620530\\)\n" +
          "- \\(f(6)=1-e^{-6}\\approx 0.9975212471\\)\n" +
          "- \\(f(7)=1-e^{-7}\\approx 0.9990889488\\)\n" +
          "- \\(f(8)=1-e^{-8}\\approx 0.9996645374\\)\n" +
          "- \\(f(9)=1-e^{-9}\\approx 0.9998766054\\)\n\n" +
          "These are the values we will sum and multiply by \\(\\Delta x=1\\).\n\n" +
          "**Step 4 — compute the left Riemann sum directly:**\n\n" +
          "$$L_{10} = \\sum_{i=0}^{9} f(x_i)\\Delta x = \\sum_{i=0}^{9}\\big(1-e^{-x_i}\\big) \\cdot 1 = \\sum_{i=0}^9 1 - \\sum_{i=0}^9 e^{-i}.$$ \n\n" +
          "There are ten 1's, so the first sum is 10. The second sum is a geometric series:\n\n" +
          "$$\\sum_{i=0}^{9} e^{-i} = 1 + e^{-1} + e^{-2} + \\cdots + e^{-9} = \\frac{1-e^{-10}}{1-e^{-1}}.$$ \n\n" +
          "Hence an exact closed form is\n\n" +
          "$$L_{10} = 10 - \\frac{1-e^{-10}}{1-e^{-1}}. $$\n\n" +
          "**Step 5 — numerical evaluation (high precision):**\n\n" +
          "Using the listed \\(f(x_i)\\) values, the sum\n\n" +
          "$$S = \\sum_{i=0}^9 f(x_i) \\approx 0 + 0.6321205588 + 0.8646647168 + 0.9502129316 + 0.9816843611 + 0.9932620530 + 0.9975212471 + 0.9990889488 + 0.9996645374 + 0.9998766054 $$\n\n" +
          "$$S \\approx 8.4180951148.$$ \n\n" +
          "Multiplying by \\(\\Delta x=1\\) gives\n\n" +
          "$$L_{10} \\approx 8.4180951148.$$ \n\n" +
          "(Equivalently evaluating the closed form yields the same number.)\n\n" +
          "**Step 6 — comparison with the exact integral and error comment:**\n\n" +
          "The exact definite integral is\n\n" +
          "$$\\int_0^{10} (1-e^{-x})\\,dx = \\big[x + e^{-x}\\big]_0^{10} = (10 + e^{-10}) - (0 + 1) = 9 + e^{-10} \\approx 9.0000453999.$$\n\n" +
          "Because \\(f\\) is increasing on \\([0,10]\\), the left Riemann sum underestimates the true area. The numerical underestimate here is about\n\n" +
          "$$\\text{error} = (9 + e^{-10}) - L_{10} \\approx 9.0000453999 - 8.4180951148 \\approx 0.5819502851.$$\n\n" +
          "This error is expected and fairly sizable because the interval is long (length 10) and we used only 10 rectangles (each of width 1). Increasing \\(n\\) will reduce the error.\n\n" +
          "**Final numeric answer (rounded as requested):**\n\n" +
          "$$\\boxed{L_{10} \\approx 8.4180951148}\\quad(\\text{rounded }\\approx 8.4181\\text{ or }8.42).$$"
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
      },
      
      // ============================================================
      // SECTION D: FUNDAMENTAL THEOREM OF CALCULUS, PART 1 (Q16-Q20)
      // ============================================================
      
      // Question D1
      {
        id: "exam1_q16",
        sectionId: "section_D",
        questionNumber: 16,
        type: "multiple-choice",
        text: "Find the derivative: \\( F(x) = \\int_{\\ln(2x^2-7x+3)}^{\\sin(x^4)} \\cos(t)\\,dt \\).",
        options: [
          "A. \\( 4x^3\\cos(x^4)\\cos(\\sin(x^4)) - \\frac{4x-7}{2x^2-7x+3}\\cos(\\ln(2x^2-7x+3)) \\)",
          "B. \\( \\cos(\\sin(x^4)) - \\cos(\\ln(2x^2-7x+3)) \\)",
          "C. \\( 4x^3\\cos(\\sin(x^4)) - (4x-7)\\cos(\\ln(2x^2-7x+3)) \\)",
          "D. \\( \\sin(\\sin(x^4)) - \\sin(\\ln(2x^2-7x+3)) \\)"
        ],
        correctAnswers: ["A"],
        points: 10,
        explanation: "**FTC1 with Variable Limits on Both Bounds:**\n\n" +
          "When both limits are variable, split the integral at a constant (e.g., 0).\n\n" +
          "**Step 1:** Split the integral\n" +
          "$F(x) = \\int_{\\ln(2x^2-7x+3)}^{0} \\cos(t)\\,dt + \\int_{0}^{\\sin(x^4)} \\cos(t)\\,dt$\n" +
          "$= -\\int_{0}^{\\ln(2x^2-7x+3)} \\cos(t)\\,dt + \\int_{0}^{\\sin(x^4)} \\cos(t)\\,dt$\n\n" +
          "**Step 2:** Apply FTC1 and Chain Rule\n\n" +
          "For \\( G(x) = \\int_a^{g(x)} f(t)\\,dt \\): \\( G'(x) = f(g(x)) \\cdot g'(x) \\)\n\n" +
          "$F'(x) = -\\cos(\\ln(2x^2-7x+3)) \\cdot \\frac{d}{dx}[\\ln(2x^2-7x+3)]$\n" +
          "$\\quad + \\cos(\\sin(x^4)) \\cdot \\frac{d}{dx}[\\sin(x^4)]$\n\n" +
          "**Step 3:** Calculate derivatives of limits\n" +
          "$\\frac{d}{dx}[\\ln(2x^2-7x+3)] = \\frac{4x-7}{2x^2-7x+3}$\n\n" +
          "$\\frac{d}{dx}[\\sin(x^4)] = \\cos(x^4) \\cdot 4x^3 = 4x^3\\cos(x^4)$\n\n" +
          "**Step 4:** Combine\n" +
          "$F'(x) = -\\cos(\\ln(2x^2-7x+3)) \\cdot \\frac{4x-7}{2x^2-7x+3}$\n" +
          "$\\quad + \\cos(\\sin(x^4)) \\cdot 4x^3\\cos(x^4)$\n\n" +
          "$= 4x^3\\cos(x^4)\\cos(\\sin(x^4)) - \\frac{4x-7}{2x^2-7x+3}\\cos(\\ln(2x^2-7x+3))$\n\n" +
          "**Answer: A**"
      },
      
      // Question D2
      {
        id: "exam1_q17",
        sectionId: "section_D",
        questionNumber: 17,
        type: "multiple-choice",
        text: "Find the derivative: \\( F(x) = \\int_{x^4-7x}^{\\cos^2 x} \\frac{1}{t}\\,dt \\).",
        options: [
          "A. \\( \\frac{7-4x^3}{x^4-7x} - 2\\tan x \\)",
          "B. \\( \\frac{4x^3-7}{x^4-7x} + 2\\tan x \\)",
          "C. \\( \\frac{1}{\\cos^2 x} - \\frac{1}{x^4-7x} \\)",
          "D. \\( \\frac{7-4x^3}{x^4-7x} + 2\\tan x \\)"
        ],
        correctAnswers: ["A"],
        points: 10,
        explanation: "**FTC1 with Variable Limits on Both Bounds:**\n\n" +
          "**Step 1:** Split the integral at 0\n" +
          "$F(x) = -\\int_{0}^{x^4-7x} \\frac{1}{t}\\,dt + \\int_{0}^{\\cos^2 x} \\frac{1}{t}\\,dt$\n\n" +
          "**Step 2:** Apply FTC1 and Chain Rule\n" +
          "$F'(x) = -\\frac{1}{x^4-7x} \\cdot \\frac{d}{dx}(x^4-7x) + \\frac{1}{\\cos^2 x} \\cdot \\frac{d}{dx}(\\cos^2 x)$\n\n" +
          "**Step 3:** Calculate derivatives of limits\n" +
          "$\\frac{d}{dx}(x^4-7x) = 4x^3 - 7$\n\n" +
          "$\\frac{d}{dx}(\\cos^2 x) = 2\\cos x \\cdot (-\\sin x) = -2\\sin x\\cos x = -\\sin(2x)$\n\n" +
          "**Step 4:** Substitute\n" +
          "$F'(x) = -\\frac{1}{x^4-7x}(4x^3-7) + \\frac{1}{\\cos^2 x}(-2\\sin x\\cos x)$\n\n" +
          "$= -\\frac{4x^3-7}{x^4-7x} - \\frac{2\\sin x}{\\cos x}$\n\n" +
          "$= \\frac{7-4x^3}{x^4-7x} - 2\\tan x$\n\n" +
          "**Answer: A. \\( \\frac{7-4x^3}{x^4-7x} - 2\\tan x \\)**"
      },
      
      // Question D3
      {
        id: "exam1_q18",
        sectionId: "section_D",
        questionNumber: 18,
        type: "multiple-choice",
        text: "Find the derivative: \\( F(x) = \\int_{\\ln 3}^{e^{x^2+2x}} \\ln t\\,dt \\).",
        options: [
          "A. \\( (x^2+2x)e^{x^2+2x} \\)",
          "B. \\( 2x(x+2)(x+1)e^{x^2+2x} \\)",
          "C. \\( (2x+2)e^{x^2+2x} \\)",
          "D. \\( (x^2+2x)(2x+2) \\)"
        ],
        correctAnswers: ["B"],
        points: 10,
        explanation: "**FTC1 with Constant Lower Limit:**\n\n" +
          "**Step 1:** Apply FTC1 and Chain Rule\n\n" +
          "For \\( F(x) = \\int_a^{g(x)} f(t)\\,dt \\): \\( F'(x) = f(g(x)) \\cdot g'(x) \\)\n\n" +
          "The constant lower limit \\( \\ln 3 \\) differentiates to 0.\n\n" +
          "$F'(x) = \\ln(e^{x^2+2x}) \\cdot \\frac{d}{dx}(e^{x^2+2x})$\n\n" +
          "**Step 2:** Simplify \\( f(g(x)) \\)\n" +
          "$\\ln(e^{x^2+2x}) = x^2+2x$\n\n" +
          "**Step 3:** Calculate \\( g'(x) \\)\n" +
          "$\\frac{d}{dx}(e^{x^2+2x}) = e^{x^2+2x} \\cdot (2x+2)$\n\n" +
          "**Step 4:** Combine\n" +
          "$F'(x) = (x^2+2x) \\cdot e^{x^2+2x} \\cdot (2x+2)$\n\n" +
          "**Step 5:** Factor\n" +
          "$= x(x+2) \\cdot e^{x^2+2x} \\cdot 2(x+1)$\n" +
          "$= 2x(x+2)(x+1)e^{x^2+2x}$\n\n" +
          "**Answer: B. \\( 2x(x+2)(x+1)e^{x^2+2x} \\)**"
      },
      
      // Question D4
      {
        id: "exam1_q19",
        sectionId: "section_D",
        questionNumber: 19,
        type: "multiple-choice",
        text: "Find the derivative: \\( F(x) = \\int_{x}^{\\ln x} \\sqrt{e^{3t} + \\sin t}\\,dt \\).",
        options: [
          "A. \\( \\sqrt{x^3 + \\sin(\\ln x)} - \\sqrt{e^{3x} + \\sin x} \\)",
          "B. \\( \\frac{1}{x}\\sqrt{x^3 + \\sin(\\ln x)} - \\sqrt{e^{3x} + \\sin x} \\)",
          "C. \\( \\sqrt{e^{3\\ln x} + \\sin(\\ln x)} - \\sqrt{e^{3x} + \\sin x} \\)",
          "D. \\( \\frac{1}{x}\\sqrt{e^{3\\ln x} + \\sin x} - \\sqrt{e^{3x} + \\sin x} \\)"
        ],
        correctAnswers: ["B"],
        points: 10,
        explanation: "**FTC1 with Variable Limits on Both Bounds:**\n\n" +
          "**Step 1:** Split the integral at 0\n" +
          "$F(x) = -\\int_{0}^{x} \\sqrt{e^{3t} + \\sin t}\\,dt + \\int_{0}^{\\ln x} \\sqrt{e^{3t} + \\sin t}\\,dt$\n\n" +
          "**Step 2:** Apply FTC1 and Chain Rule\n\n" +
          "First term (upper limit \\( x \\)):\n" +
          "$\\frac{d}{dx}(x) = 1$\n\n" +
          "Second term (upper limit \\( \\ln x \\)):\n" +
          "$\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$\n\n" +
          "$F'(x) = -\\sqrt{e^{3x} + \\sin x} \\cdot 1 + \\sqrt{e^{3(\\ln x)} + \\sin(\\ln x)} \\cdot \\frac{1}{x}$\n\n" +
          "**Step 3:** Simplify \\( e^{3\\ln x} \\)\n" +
          "$e^{3\\ln x} = e^{\\ln(x^3)} = x^3$\n\n" +
          "**Step 4:** Final answer\n" +
          "$F'(x) = \\frac{1}{x}\\sqrt{x^3 + \\sin(\\ln x)} - \\sqrt{e^{3x} + \\sin x}$\n\n" +
          "**Answer: B. \\( \\frac{1}{x}\\sqrt{x^3 + \\sin(\\ln x)} - \\sqrt{e^{3x} + \\sin x} \\)**"
      },
      
      // Question D5
      {
        id: "exam1_q20",
        sectionId: "section_D",
        questionNumber: 20,
        type: "multiple-choice",
        text: "Find the derivative: \\( F(x) = \\cos\\left(\\int_{1}^{x} 2t^2 e^{t^3}\\,dt\\right) \\).",
        options: [
          "A. \\( -2x^2 e^{x^3}\\sin\\left(\\int_{1}^{x} 2t^2 e^{t^3}\\,dt\\right) \\)",
          "B. \\( 2x^2 e^{x^3}\\cos\\left(\\int_{1}^{x} 2t^2 e^{t^3}\\,dt\\right) \\)",
          "C. \\( -\\sin\\left(\\int_{1}^{x} 2t^2 e^{t^3}\\,dt\\right) \\)",
          "D. \\( -2x^2 e^{x^3} \\)"
        ],
        correctAnswers: ["A"],
        points: 10,
        explanation: "**Chain Rule on Outer Function:**\n\n" +
          "The integral is the **argument** of the cosine function.\n\n" +
          "**Step 1:** Let \\( G(x) = \\int_{1}^{x} 2t^2 e^{t^3}\\,dt \\)\n\n" +
          "Then \\( F(x) = \\cos(G(x)) \\)\n\n" +
          "**Step 2:** Apply outer Chain Rule\n" +
          "$F'(x) = \\frac{d}{dx}[\\cos(G(x))] = -\\sin(G(x)) \\cdot G'(x)$\n\n" +
          "**Step 3:** Find \\( G'(x) \\) using FTC1\n\n" +
          "Upper limit is \\( x \\), lower limit is constant (1):\n" +
          "$G'(x) = 2x^2 e^{x^3} \\cdot \\frac{d}{dx}(x) = 2x^2 e^{x^3}$\n\n" +
          "**Step 4:** Substitute back\n" +
          "$F'(x) = -\\sin(G(x)) \\cdot 2x^2 e^{x^3}$\n\n" +
          "$= -2x^2 e^{x^3}\\sin\\left(\\int_{1}^{x} 2t^2 e^{t^3}\\,dt\\right)$\n\n" +
          "**Answer: A. \\( -2x^2 e^{x^3}\\sin\\left(\\int_{1}^{x} 2t^2 e^{t^3}\\,dt\\right) \\)**"
      }
    ]
  },

  {
    id: "ITMTB_EXAM3",
    moduleId: "ITMTB",
    title: "ITMTB Exam: Interpreting Graphs",
    description: "Applications of Integration: Covers reading graph data to answer questions.",
    examBy: "Mr Kwadwo Afrane-Okese",
    timeLimit: null,
    passingScore: 10,
    
    // Sections array removed as new questions do not map to it.
    sections: [], 
    
    questions: [
      // ============================================================
      // SECTION A: Graph Interpretation
      // ============================================================
      
      // Question 1
      {
        id: "exam3_q1",
        moduleId: "ITMTB",
        weekId: "ITMTB_W_Exam3",
        type: "open-ended",
        text: "The figure shows graphs of the temperatures for an East Coast city (blue curve) and a West Coast city (red curve) over a 24-hour period. Which city had the highest temperature that day?",
        image: {
          src: "/images/ITMTB_Exam_East_And_West_Coast_Temp.png",
          alt: "Graphs of East Coast (blue) and West Coast (red) temperatures over a 24-hour period.",
          caption: "Temperature (T in °C) vs. Time (t in hours). The blue curve is the East Coast, and the red curve is the West Coast."
        },
        correctAnswers: [
          "West Coast",
          "West",
          "The West Coast",
          "Red",
          "Red Curve"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 2,
        explanation: "To find the highest temperature, we look for the peak (absolute maximum) of both curves on the interval \\( [0, 24] \\).\n\n" +
          "- The **East Coast (blue curve)** reaches its maximum temperature of approximately **22°C** at $t \\approx 10$ hours.\n" +
          "- The **West Coast (red curve)** reaches its maximum temperature of approximately **25°C** at $t \\approx 13$ hours.\n\n" +
          "Since 25°C > 22°C, the **West Coast** had the highest temperature."
      },
      
      // Question 2
      {
        id: "exam3_q2",
        moduleId: "ITMTB",
        weekId: "ITMTB_W_Exam3",
        type: "open-ended",
        text: "Using the **Midpoint Rule** with \\( n = 12 \\) subintervals, estimate the average temperature for the **East Coast** city (blue curve). (Provide a numerical answer in °C).",
        image: {
          src: "/images/ITMTB_Exam_East_And_West_Coast_Temp.png",
          alt: "Graphs of East Coast (blue) and West Coast (red) temperatures over a 24-hour period.",
          caption: "Temperature (T in °C) vs. Time (t in hours). The blue curve is the East Coast, and the red curve is the West Coast."
        },
        correctAnswers: [
          "17.5",
          "17.5 C",
          "17.5°C"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.2,
          acceptedUnits: ["C", "°C"],
          requiredUnit: false,
          convertToCanonicalUnit: false
        },
        points: 5,
        explanation: "**1. Find Interval Width (\\( \\Delta t \\))**\n" +
          "The total time is 24 hours and \\( n = 12 \\) intervals.\n" +
          "$$ \\Delta t = \\frac{b - a}{n} = \\frac{24 - 0}{12} = 2 \\text{ hours} $$" +
          "\n" +
          "**2. Find Midpoints (\\( t_i \\))**\n" +
          "The intervals are [0, 2], [2, 4], ..., [22, 24]. The midpoints are:\n" +
          "\\( t_1=1, t_2=3, t_3=5, t_4=7, t_5=9, t_6=11, t_7=13, t_8=15, t_9=17, t_{10}=19, t_{11}=21, t_{12}=23 \\)\n\n" +
          "**3. Estimate \\( T(t_i) \\) for East Coast (Blue Curve)**\n" +
          "We read the approximate temperature values from the blue curve at each midpoint:\n" +
          "- $T(1) \\approx 15$\n" +
          "- $T(3) \\approx 15$\n" +
          "- $T(5) \\approx 16$\n" +
          "- $T(7) \\approx 18$\n" +
          "- $T(9) \\approx 21$\n" +
          "- $T(11) \\approx 22$\n" +
          "- $T(13) \\approx 19$\n" +
          "- $T(15) \\approx 20$\n" +
          "- $T(17) \\approx 14$\n" +
          "- $T(19) \\approx 18$\n" +
          "- $T(21) \\approx 17$\n" +
          "- $T(23) \\approx 15$\n\n" +
          "**4. Calculate the Average Temperature**\n" +
          "The average temperature is $T_{\\text{avg}} = \\frac{1}{b-a} \\int_{a}^{b} T(t) \\,dt \\approx \\frac{1}{24} \\left[ \\Delta t \\sum_{i=1}^{12} T(t_i) \\right]$\n" +
          "$$ T_{\\text{avg}} = \\frac{1}{24} \\left[ 2 \\times (15+15+16+18+21+22+19+20+14+18+17+15) \\right] $$" +
          "$$ T_{\\text{avg}} = \\frac{1}{12} \\left[ 210 \\right] $$" +
          "$$ T_{\\text{avg}} = \\boxed{17.5^\\circ\\text{C}} $$"
      },
      
      // Question 3
      {
        id: "exam3_q3",
        moduleId: "ITMTB",
        weekId: "ITMTB_W_Exam3",
        type: "multiple-choice",
        text: "An identical Midpoint Rule calculation (\\( n=12 \\)) for the **West Coast** city (red curve) yields an average temperature of approximately **14.4°C**. Given that the East Coast's average was **17.5°C**, which statement is the correct interpretation?",
        image: {
          src: "/images/ITMTB_Exam_East_And_West_Coast_Temp.png",
          alt: "Graphs of East Coast (blue) and West Coast (red) temperatures over a 24-hour period.",
          caption: "Temperature (T in °C) vs. Time (t in hours). The blue curve is the East Coast, and the red curve is the West Coast."
        },
        options: [
            "A. The East Coast was warmer overall because its average temperature was higher.",
            "B. The West Coast was warmer overall because its maximum temperature was higher.",
            "C. The West Coast was warmer overall because its average temperature was higher.",
            "D. Both cities were equally warm, as the maximum and average temperatures cancel out."
          ],
        correctAnswers: [
          "A"
        ],
        points: 3,
        explanation: "The **average temperature** (the average value of the function over the interval) is the correct measure for which city was 'warmer overall' during the 24-hour period.\n\n" +
          "- **East Coast $T_{\\text{avg}} \\approx 17.5^\\circ\\text{C}$**\n" +
          "- **West Coast $T_{\\text{avg}} \\approx 14.4^\\circ\\text{C}$**\n\n" +
          "Although the West Coast had a higher *peak* temperature (≈25°C), its temperatures were much lower during the night and morning, bringing its average down.\n\n" +
          "Since $17.5^\\circ\\text{C} > 14.4^\\circ\\text{C}$, the **East Coast was warmer overall**."
      }
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