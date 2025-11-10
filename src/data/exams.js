export const exams = [
{
    id: "ITMTB_EXAM1",
    moduleId: "ITMTB",
    title: "Online Test 1 (Mock Test): Calculus of Integration (Hardest Subset)",
    description: "Week 1-3. Covers the most challenging problems from Riemann Sums, Advanced Integration Techniques (IBP, Partial Fractions), and Velocity Applications. Total Score: 100 Points.",
    examBy: "Mr Kwadwo Afrane-Okese",
    createdOn: "2025-10-20",
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
          "109/2",
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
          "We'll find **all constants** (A, B, C) algebraically for:\n\n" +
          "$\\frac{4x^{2}-19}{(x+3)^{2}(x-2)} = \\frac{A}{x-2} + \\frac{B}{x+3} + \\frac{C}{(x+3)^{2}}$\n\n" +
          "**Step 1: Clear denominators**\n\n" +
          "Multiply both sides by \\((x-2)(x+3)^2\\):\n\n" +
          "$4x^{2}-19 = A(x+3)^{2} + B(x-2)(x+3) + C(x-2)$\n\n" +
          "**Step 2: Use convenient roots (plugging values)**\n\n" +
          "**Plug \\(x = 2\\)** (terms with \\((x-2)\\) vanish):\n\n" +
          "$4(2)^2 - 19 = A(2+3)^2$\n\n" +
          "$16 - 19 = 25A$\n\n" +
          "$-3 = 25A \\quad\\Rightarrow\\quad A = -\\frac{3}{25}$\n\n" +
          "**Plug \\(x = -3\\)** (terms with \\((x+3)\\) vanish):\n\n" +
          "$4(-3)^2 - 19 = C(-3-2)$\n\n" +
          "$36 - 19 = -5C$\n\n" +
          "$17 = -5C \\quad\\Rightarrow\\quad C = -\\frac{17}{5}$\n\n" +
          "So far: \\(A = -\\frac{3}{25}\\), \\(C = -\\frac{17}{5}\\)\n\n" +
          "**Step 3: Solve for B by comparing coefficients**\n\n" +
          "Expand the right-hand side:\n\n" +
          "$A(x+3)^2 = A(x^2 + 6x + 9) = Ax^2 + 6Ax + 9A$\n\n" +
          "$B(x-2)(x+3) = B(x^2 + x - 6) = Bx^2 + Bx - 6B$\n\n" +
          "$C(x-2) = Cx - 2C$\n\n" +
          "Adding them:\n\n" +
          "$4x^{2} - 19 = (A+B)x^{2} + (6A+B+C)x + (9A-6B-2C)$\n\n" +
          "Match coefficients with \\(4x^{2} + 0x - 19\\):\n\n" +
          "| **Coefficient** | **Equation** |\n" +
          "|---|---|\n" +
          "| \\(x^2\\)-term | \\(A + B = 4\\) |\n" +
          "| \\(x\\)-term | \\(6A + B + C = 0\\) |\n" +
          "| constant | \\(9A - 6B - 2C = -19\\) |\n\n" +
          "From the \\(x^2\\) equation:\n\n" +
          "$B = 4 - A = 4 - \\left(-\\frac{3}{25}\\right) = 4 + \\frac{3}{25} = \\frac{100+3}{25} = \\frac{103}{25}$\n\n" +
          "**Verification (optional):**\n\n" +
          "Check \\(x\\)-term: \\(6\\left(-\\frac{3}{25}\\right) + \\frac{103}{25} + \\left(-\\frac{17}{5}\\right) = -\\frac{18}{25} + \\frac{103}{25} - \\frac{85}{25} = 0\\) ✓\n\n" +
          "Check constant: \\(9\\left(-\\frac{3}{25}\\right) - 6\\left(\\frac{103}{25}\\right) - 2\\left(-\\frac{17}{5}\\right) = -\\frac{27}{25} - \\frac{618}{25} + \\frac{170}{25} = -\\frac{475}{25} = -19\\) ✓\n\n" +
          "**Final values:**\n\n" +
          "$A = -\\frac{3}{25}, \\quad B = \\frac{103}{25}, \\quad C = -\\frac{17}{5}$\n\n" +
          "**Step 4: Integrate**\n\n" +
          "$\\int\\left(\\frac{-3/25}{x-2} + \\frac{103/25}{x+3} + \\frac{-17/5}{(x+3)^{2}}\\right)dx$\n\n" +
          "$= -\\frac{3}{25}\\ln|x-2| + \\frac{103}{25}\\ln|x+3| - \\frac{17}{5}\\int(x+3)^{-2}dx$\n\n" +
          "$= -\\frac{3}{25}\\ln|x-2| + \\frac{103}{25}\\ln|x+3| + \\frac{17}{5(x+3)} + C$\n\n" +
          "$= \\frac{103}{25}\\ln|x+3| - \\frac{3}{25}\\ln|x-2| + \\frac{17}{5(x+3)} + C$\n\n" +
          "**Answer: A**\n\n" +
          "**Key Concept - Standard Partial Fraction Setup:**\n\n" +
          "| **Denominator Type** | **Partial Fraction Form** | **Example** |\n" +
          "|---|---|---|\n" +
          "| Distinct linear factors: \\((x-a)(x-b)\\) | \\(\\frac{A}{x-a} + \\frac{B}{x-b}\\) | \\(\\frac{1}{(x-1)(x+2)}\\) |\n" +
          "| Repeated linear factor: \\((x-a)^n\\) | \\(\\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\cdots + \\frac{A_n}{(x-a)^n}\\) | \\(\\frac{1}{(x+3)^2}\\) |\n" +
          "| Irreducible quadratic: \\((x^2+bx+c)\\) | \\(\\frac{Ax+B}{x^2+bx+c}\\) | \\(\\frac{1}{x^2+4}\\) |\n\n" +
          "For repeated factors, you **must include one term for each power** up to the highest power."
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
    examBy: "The Brighter Side Team",
    createdOn: "2025-10-25",
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
  },
   {
    id: "ITMTB_EXAM4",
    moduleId: "ITMTB",
    title: "Week 6, Class Test: Applications of Integration",
    description: "Explores integration methods, area between curves, volumes by rotation, surface area, arc length, and conceptual comparisons.",
    examBy: "Mr. Mpho Nefale",
    createdOn: "2025-11-03",
    timeLimit: 75, // 1hr 15min
    passingScore: 70,
    
    sections: [
      {
        id: "section_1",
        title: "Section A: Integration Techniques",
        description: "Question 1 | Advanced algebraic manipulation and power rule integration",
        instructions: "Simplify the integrand completely before integrating. Express answers in exact form with constant of integration +C.",
      },
      {
        id: "section_2",
        title: "Section B: Area Between Curves",
        description: "Questions 2-4 | Finding areas and net differences between functions",
        instructions: "Set up integrals carefully, identifying top and bottom functions. For area, use absolute values where necessary. Express exact answers as fractions.",
      },
      {
        id: "section_3",
        title: "Section C: Volumes of Revolution",
        description: "Questions 5-9 | Disk/washer method and shell method for volumes",
        instructions: "Identify the axis of rotation and choose appropriate method. Find intersection points algebraically. Show complete setup before evaluating. Express volumes in exact form involving π.",
      },
      {
        id: "section_4",
        title: "Section D: Surface Area and Arc Length",
        description: "Questions 10-12 | Applications requiring derivatives and advanced integration",
        instructions: "Use the correct formulas for surface area and arc length. Simplify radicals before integrating. Include all substitution steps.",
      },
      {
        id: "section_5",
        title: "Section E: Conceptual Understanding",
        description: "Question 13 | Comparing volume methods",
        instructions: "Select the answer that best describes the conceptual difference between integration methods.",
      }
    ],
    
    questions: [
      // ============================================================
      // SECTION A: INTEGRATION TECHNIQUES (Q1)
      // ============================================================
      {
        id: "exam4_q1",
        sectionId: "section_1",
        questionNumber: 1,
        type: "multiple-choice",
        text: "Evaluate the integral:\n\n$$\\int\\left(\\frac{2 - x^{-1}}{x^{1/3}} - \\frac{3}{x^{4/3}} + \\frac{x^{-2} - 2x}{x^{4/3}}\\right)dx$$",
        options: [
          "A. \\( -\\frac{3}{7}x^{-7/3} + 12x^{-1/3} + C \\)",
          "B. \\( \\frac{3}{7}x^{-7/3} - 12x^{-1/3} + C \\)",
          "C. \\( -\\frac{7}{3}x^{-10/3} - 4x^{-4/3} + C \\)",
          "D. \\( x^{-10/3} - 4x^{-4/3} + C \\)"
        ],
        correctAnswers: ["A"],
        points: 4,
        explanation: "**Step 1 — Simplify the integrand algebraically**\n\n" +
          "We simplify term-by-term using laws of exponents. Recall \\( \\frac{x^a}{x^b} = x^{a-b} \\) and \\( x^{-a} = \\frac{1}{x^a} \\).\n\n" +
          "**First term:**\n" +
          "$$\\frac{2 - x^{-1}}{x^{1/3}} = 2x^{-1/3} - x^{-1} \\cdot x^{-1/3} = 2x^{-1/3} - x^{-4/3}$$\n\n" +
          "**Second term:**\n" +
          "$$-\\frac{3}{x^{4/3}} = -3x^{-4/3}$$\n\n" +
          "**Third term:**\n" +
          "$$\\frac{x^{-2} - 2x}{x^{4/3}} = x^{-2} \\cdot x^{-4/3} - 2x \\cdot x^{-4/3} = x^{-10/3} - 2x^{-1/3}$$\n\n" +
          "**Combine all terms:**\n" +
          "$$(2x^{-1/3} - x^{-4/3}) + (-3x^{-4/3}) + (x^{-10/3} - 2x^{-1/3})$$\n\n" +
          "Group like powers:\n" +
          "- The \\( 2x^{-1/3} \\) and \\( -2x^{-1/3} \\) **cancel**\n" +
          "- The \\( -x^{-4/3} - 3x^{-4/3} = -4x^{-4/3} \\)\n\n" +
          "Simplified integrand:\n" +
          "$$x^{-10/3} - 4x^{-4/3}$$\n\n" +
          "**Step 2 — Integrate term-by-term**\n\n" +
          "Using the power rule: \\( \\int x^m dx = \\frac{x^{m+1}}{m+1} \\) (for \\( m \\neq -1 \\))\n\n" +
          "**First term:** \\( m = -\\frac{10}{3} \\), so \\( m+1 = -\\frac{7}{3} \\)\n" +
          "$$\\int x^{-10/3}dx = \\frac{x^{-7/3}}{-7/3} = -\\frac{3}{7}x^{-7/3}$$\n\n" +
          "**Second term:** \\( m = -\\frac{4}{3} \\), so \\( m+1 = -\\frac{1}{3} \\)\n" +
          "$$\\int -4x^{-4/3}dx = -4 \\cdot \\frac{x^{-1/3}}{-1/3} = -4 \\cdot (-3)x^{-1/3} = 12x^{-1/3}$$\n\n" +
          "**Step 3 — Combine and add constant**\n\n" +
          "$$\\int\\left(\\frac{2 - x^{-1}}{x^{1/3}} - \\frac{3}{x^{4/3}} + \\frac{x^{-2} - 2x}{x^{4/3}}\\right)dx = -\\frac{3}{7}x^{-7/3} + 12x^{-1/3} + C$$\n\n" +
          "**Verification:** Differentiate the result to recover \\( x^{-10/3} - 4x^{-4/3} \\) ✓\n\n" +
          "**Answer: A. \\( -\\frac{3}{7}x^{-7/3} + 12x^{-1/3} + C \\)**"
      },
      
      // ============================================================
      // SECTION B: AREA BETWEEN CURVES (Q2-4)
      // ============================================================
      {
        id: "exam4_q2",
        sectionId: "section_2",
        questionNumber: 2,
        type: "open-ended",
        text: "The upper curve is \\( f(x) = x^2 - 4x + 3 \\) and the lower (mirrored) curve is \\( g(x) = -(x^2 - 4x + 3) \\) on the interval \\( [0, 3] \\).\n\nFind the **exact area** enclosed between the two curves.",
        correctAnswers: [
          "16/3",
          "5.333",
          "5.33"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.02,
          acceptedUnits: ["square units", "units^2"],
          requiredUnit: null
        },
        points: 3,
        explanation: "**Understanding the Setup:**\n\n" +
          "The vertical distance between curves at any \\( x \\) is:\n" +
          "$$\\text{distance} = f(x) - g(x) = f(x) - (-f(x)) = 2f(x)$$\n\n" +
          "But area requires absolute value: \\( |f(x) - g(x)| = 2|f(x)| \\)\n\n" +
          "**Step 1: Analyze where \\( f(x) \\) changes sign**\n\n" +
          "Factor \\( f(x) \\):\n" +
          "$$f(x) = x^2 - 4x + 3 = (x-1)(x-3)$$\n\n" +
          "Roots at \\( x = 1 \\) and \\( x = 3 \\)\n\n" +
          "| **Interval** | **Sign of \\( f(x) \\)** |\n" +
          "|---|---|\n" +
          "| \\( [0, 1] \\) | Positive (\\( f(0) = 3 > 0 \\)) |\n" +
          "| \\( (1, 3) \\) | Negative (\\( f(2) = -1 < 0 \\)) |\n\n" +
          "**Step 2: Set up integral with absolute values**\n\n" +
          "$$\\text{Area} = \\int_0^3 2|f(x)|dx = 2\\left(\\int_0^1 f(x)dx + \\int_1^3 (-f(x))dx\\right)$$\n\n" +
          "**Step 3: Find antiderivative**\n" +
          "$$\\int f(x)dx = \\int (x^2 - 4x + 3)dx = \\frac{x^3}{3} - 2x^2 + 3x$$\n\n" +
          "**Step 4: Evaluate on \\( [0, 1] \\)**\n" +
          "$$\\int_0^1 f(x)dx = \\left[\\frac{x^3}{3} - 2x^2 + 3x\\right]_0^1 = \\left(\\frac{1}{3} - 2 + 3\\right) - 0 = \\frac{4}{3}$$\n\n" +
          "**Step 5: Evaluate on \\( [1, 3] \\)**\n" +
          "$$\\int_1^3 f(x)dx = \\left[\\frac{x^3}{3} - 2x^2 + 3x\\right]_1^3$$\n" +
          "$$= \\left(9 - 18 + 9\\right) - \\left(\\frac{1}{3} - 2 + 3\\right) = 0 - \\frac{4}{3} = -\\frac{4}{3}$$\n\n" +
          "**Step 6: Calculate total area**\n" +
          "$$\\text{Area} = 2\\left(\\frac{4}{3} + \\left|-\\frac{4}{3}\\right|\\right) = 2\\left(\\frac{4}{3} + \\frac{4}{3}\\right) = 2 \\cdot \\frac{8}{3} = \\frac{16}{3}$$\n\n" +
          "**Answer: \\( \\frac{16}{3} \\) square units** ≈ 5.33"
      },
      
      {
        id: "exam4_q3",
        sectionId: "section_2",
        questionNumber: 3,
        type: "open-ended",
        text: "Question 2 continued: The upper curve is \\( f(x) = x^2 - 4x + 3 \\) and the lower (mirrored) curve is \\( g(x) = -(x^2 - 4x + 3) \\) on the interval \\( [0, 3] \\).\n\nDetermine the **net difference** \\( \\int_0^3 (g(x) - f(x))dx \\).",
        correctAnswers: [
          "0",
          "0.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 2,
        explanation: "**Computing Net Signed Area:**\n\n" +
          "**Step 1: Simplify the integrand**\n" +
          "$$g(x) - f(x) = -f(x) - f(x) = -2f(x)$$\n\n" +
          "Therefore:\n" +
          "$$\\int_0^3 (g(x) - f(x))dx = -2\\int_0^3 f(x)dx$$\n\n" +
          "**Step 2: Evaluate \\( \\int_0^3 f(x)dx \\)**\n\n" +
          "From Question 2, we know:\n" +
          "- \\( \\int_0^1 f(x)dx = \\frac{4}{3} \\) (positive area)\n" +
          "- \\( \\int_1^3 f(x)dx = -\\frac{4}{3} \\) (negative area)\n\n" +
          "By additivity:\n" +
          "$$\\int_0^3 f(x)dx = \\frac{4}{3} + \\left(-\\frac{4}{3}\\right) = 0$$\n\n" +
          "**Alternative verification:**\n" +
          "$$\\int_0^3 f(x)dx = \\left[\\frac{x^3}{3} - 2x^2 + 3x\\right]_0^3 = (9 - 18 + 9) - 0 = 0$$\n\n" +
          "**Step 3: Calculate net difference**\n" +
          "$$\\int_0^3 (g(x) - f(x))dx = -2 \\cdot 0 = 0$$\n\n" +
          "**Geometric Interpretation:**\n\n" +
          "The net signed area is **zero** because:\n" +
          "- On \\( [0, 1] \\): \\( f(x) > 0 \\), contributing \\( +\\frac{4}{3} \\)\n" +
          "- On \\( [1, 3] \\): \\( f(x) < 0 \\), contributing \\( -\\frac{4}{3} \\)\n" +
          "- The positive and negative regions **exactly cancel**\n\n" +
          "This is why **area** (Question 2) uses absolute values and gives \\( \\frac{16}{3} \\), while **net change** gives 0.\n\n" +
          "**Answer: 0**"
      },
      
      {
        id: "exam4_q4",
        sectionId: "section_2",
        questionNumber: 4,
        type: "multiple-choice",
        text: "Consider the region bounded by \\( y = 6 - x \\) and \\( y = x^2 + 2 \\), revolved about the x-axis.\n\nThe correct x-limits for the volume integral are:",
        options: [
          "A. \\( x = \\frac{-1 - \\sqrt{17}}{2} \\) to \\( x = \\frac{-1 + \\sqrt{17}}{2} \\)",
          "B. \\( x = -2 \\) to \\( x = 2 \\)",
          "C. \\( x = 0 \\) to \\( x = 4 \\)",
          "D. \\( x = 1 \\) to \\( x = 3 \\)"
        ],
        correctAnswers: ["A"],
        points: 2,
        explanation: "**Finding Intersection Points:**\n\n" +
          "**Step 1: Set the functions equal**\n" +
          "$$x^2 + 2 = 6 - x$$\n\n" +
          "**Step 2: Rearrange to standard form**\n" +
          "$$x^2 + x - 4 = 0$$\n\n" +
          "**Step 3: Apply quadratic formula**\n" +
          "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{-1 \\pm \\sqrt{1 + 16}}{2} = \\frac{-1 \\pm \\sqrt{17}}{2}$$\n\n" +
          "**Step 4: Identify the two intersection points**\n\n" +
          "| **Root** | **Value** | **Approximate** |\n" +
          "|---|---|---|\n" +
          "| Left | \\( x = \\frac{-1 - \\sqrt{17}}{2} \\) | ≈ -2.56 |\n" +
          "| Right | \\( x = \\frac{-1 + \\sqrt{17}}{2} \\) | ≈ 1.56 |\n\n" +
          "**Verification:**\n" +
          "At \\( x \\approx -2.56 \\):\n" +
          "- \\( y = 6 - (-2.56) \\approx 8.56 \\)\n" +
          "- \\( y = (-2.56)^2 + 2 \\approx 8.56 \\) ✓\n\n" +
          "**Geometric Interpretation:**\n\n" +
          "The region exists between these two intersection points where one curve is above the other.\n\n" +
          "For revolution about the x-axis, we integrate from the left intersection to the right intersection.\n\n" +
          "**Answer: A. \\( x = \\frac{-1 - \\sqrt{17}}{2} \\) to \\( x = \\frac{-1 + \\sqrt{17}}{2} \\)**"
      },
      
      // ============================================================
      // SECTION C: VOLUMES OF REVOLUTION (Q5-9)
      // ============================================================
      {
        id: "exam4_q5",
        sectionId: "section_3",
        questionNumber: 5,
        type: "multiple-choice",
        text: "Question 4 continued: Consider the region bounded by \\( y = 6 - x \\) and \\( y = x^2 + 2 \\), revolved about the x-axis.\n\nWhich setup is most appropriate for computing the volume when rotating about the x-axis?",
        options: [
          "A. Shell method: \\( V = 2\\pi\\int y(R(y) - r(y))dy \\)",
          "B. Washer method: \\( V = \\pi\\int [(6-x)^2 - (x^2+2)^2]dx \\)",
          "C. Disk method: \\( V = \\pi\\int (6-x)^2 dx \\)",
          "D. Shell method: \\( V = 2\\pi\\int x[(6-x) - (x^2+2)]dx \\)"
        ],
        correctAnswers: ["B"],
        points: 2,
        explanation: "**Choosing the Appropriate Method:**\n\n" +
          "**Analysis of the problem:**\n" +
          "- **Axis of rotation:** x-axis (horizontal)\n" +
          "- **Functions given:** \\( y = f(x) \\) form\n" +
          "- **Region:** Between two curves\n\n" +
          "**Step 1: Identify which curve is on top**\n\n" +
          "Test at \\( x = 0 \\) (between the intersection points):\n" +
          "- \\( y = 6 - 0 = 6 \\)\n" +
          "- \\( y = 0^2 + 2 = 2 \\)\n\n" +
          "Therefore \\( 6 - x \\) is the **upper curve** (outer radius)\n\n" +
          "**Step 2: Washer Method Setup**\n\n" +
          "When rotating about the x-axis with curves \\( y = R(x) \\) (outer) and \\( y = r(x) \\) (inner):\n\n" +
          "$$V = \\pi\\int_a^b [R(x)^2 - r(x)^2]dx$$\n\n" +
          "**For this problem:**\n" +
          "- Outer radius: \\( R(x) = 6 - x \\)\n" +
          "- Inner radius: \\( r(x) = x^2 + 2 \\)\n" +
          "- Limits: \\( x = \\frac{-1-\\sqrt{17}}{2} \\) to \\( x = \\frac{-1+\\sqrt{17}}{2} \\)\n\n" +
          "$$V = \\pi\\int_{\\frac{-1-\\sqrt{17}}{2}}^{\\frac{-1+\\sqrt{17}}{2}} [(6-x)^2 - (x^2+2)^2]dx$$\n\n" +
          "**Why not other methods?**\n\n" +
          "| **Method** | **Why not appropriate** |\n" +
          "|---|---|\n" +
          "| Shell (options A, D) | Shells are for rotation about a **parallel axis** using slices parallel to axis |\n" +
          "| Disk (option C) | Only works when region touches the axis (no hole) |\n" +
          "| Washer (option B) | **Correct** - region has outer and inner radii |\n\n" +
          "**Answer: B. Washer method with \\( V = \\pi\\int [(6-x)^2 - (x^2+2)^2]dx \\)**"
      },
      
      {
        id: "exam4_q6",
        sectionId: "section_3",
        questionNumber: 6,
        type: "multiple-choice",
        text: "Question 4 continued: Consider the region bounded by \\( y = 6 - x \\) and \\( y = x^2 + 2 \\), revolved about the x-axis.\n\nThe exact volume of the solid is:",
        options: [
          "A. \\( \\frac{136\\sqrt{17}\\pi}{5} \\)",
          "B. \\( \\frac{68\\sqrt{17}\\pi}{5} \\)",
          "C. \\( 136\\pi \\)",
          "D. \\( \\frac{272\\pi}{5} \\)"
        ],
        correctAnswers: ["A"],
        points: 4,
        explanation: "**Evaluating the Washer Integral:**\n\n" +
          "**Setup:**\n" +
          "$$V = \\pi\\int_a^b [(6-x)^2 - (x^2+2)^2]dx$$\n\n" +
          "where \\( a = \\frac{-1-\\sqrt{17}}{2} \\) and \\( b = \\frac{-1+\\sqrt{17}}{2} \\)\n\n" +
          "**Step 1: Expand the integrand**\n\n" +
          "$$(6-x)^2 = 36 - 12x + x^2$$\n" +
          "$$(x^2+2)^2 = x^4 + 4x^2 + 4$$\n\n" +
          "**Difference:**\n" +
          "$$(6-x)^2 - (x^2+2)^2 = (36 - 12x + x^2) - (x^4 + 4x^2 + 4)$$\n" +
          "$$= -x^4 - 3x^2 - 12x + 32$$\n\n" +
          "**Step 2: Find antiderivative**\n" +
          "$$\\int (-x^4 - 3x^2 - 12x + 32)dx = -\\frac{x^5}{5} - x^3 - 6x^2 + 32x$$\n\n" +
          "**Step 3: Evaluate at limits**\n\n" +
          "This requires careful algebra with the limits involving \\( \\sqrt{17} \\).\n\n" +
          "**Key observation:** The interval length is:\n" +
          "$$b - a = \\frac{-1+\\sqrt{17}}{2} - \\frac{-1-\\sqrt{17}}{2} = \\sqrt{17}$$\n\n" +
          "After exact evaluation (using properties of the quadratic roots and symmetry), the result simplifies to:\n\n" +
          "$$V = \\pi \\cdot \\frac{136\\sqrt{17}}{5} = \\frac{136\\sqrt{17}\\pi}{5}$$\n\n" +
          "**Numerical verification:**\n" +
          "$$\\frac{136\\sqrt{17}}{5} \\approx \\frac{136 \\times 4.123}{5} \\approx 112.15$$\n" +
          "$$V \\approx 112.15\\pi \\approx 352.3 \\text{ cubic units}$$\n\n" +
          "**Answer: A. \\( \\frac{136\\sqrt{17}\\pi}{5} \\)**"
      },
      
      {
        id: "exam4_q7",
        sectionId: "section_3",
        questionNumber: 7,
        type: "open-ended",
        text: "Consider the region bounded by \\( y = 7 - x^2 \\), \\( y = x + 1 \\), and \\( x = 0 \\), revolved about the y-axis.\n\nThe correct x-interval for the integral is \\( [a, b] \\). Find \\( b \\) (the right endpoint).",
        correctAnswers: [
          "2",
          "2.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 2,
        explanation: "**Finding the Integration Bounds:**\n\n" +
          "**Step 1: Find intersection of the two curves**\n\n" +
          "Set \\( 7 - x^2 = x + 1 \\):\n" +
          "$$7 - x^2 = x + 1$$\n" +
          "$$-x^2 - x + 6 = 0$$\n" +
          "$$x^2 + x - 6 = 0$$\n\n" +
          "**Step 2: Factor**\n" +
          "$$(x + 3)(x - 2) = 0$$\n\n" +
          "Solutions: \\( x = -3 \\) and \\( x = 2 \\)\n\n" +
          "**Step 3: Apply boundary constraints**\n\n" +
          "The problem states the region includes the vertical line \\( x = 0 \\) as a boundary.\n\n" +
          "**Analysis of the region:**\n" +
          "- Left boundary: \\( x = 0 \\) (given)\n" +
          "- Right boundary: intersection at \\( x = 2 \\)\n" +
          "- The intersection at \\( x = -3 \\) is to the **left** of \\( x = 0 \\)\n\n" +
          "**Visualization:**\n\n" +
          "| **x-value** | **Curve behavior** |\n" +
          "|---|---|\n" +
          "| \\( x = -3 \\) | Intersection (excluded - outside region) |\n" +
          "| \\( x = 0 \\) | Left boundary (given constraint) |\n" +
          "| \\( x = 2 \\) | Right boundary (intersection) |\n\n" +
          "**Verification at x = 0:**\n" +
          "- \\( y = 7 - 0^2 = 7 \\)\n" +
          "- \\( y = 0 + 1 = 1 \\)\n" +
          "- Parabola is above the line ✓\n\n" +
          "**Verification at x = 2:**\n" +
          "- \\( y = 7 - 4 = 3 \\)\n" +
          "- \\( y = 2 + 1 = 3 \\)\n" +
          "- Curves meet ✓\n\n" +
          "**Answer: b = 2**"
      },
      
      {
        id: "exam4_q8",
        sectionId: "section_3",
        questionNumber: 8,
        type: "multiple-choice",
        text: "Question 7 continued: Consider the region bounded by \\( y = 7 - x^2 \\), \\( y = x + 1 \\), and \\( x = 0 \\), revolved about the y-axis.\n\nWhich integral correctly represents the volume when rotating about the y-axis?",
        options: [
          "A. \\( \\pi\\int_0^2 [(7-x^2)^2 - (x+1)^2]dx \\)",
          "B. \\( 2\\pi\\int_0^2 x(6 - x - x^2)dx \\)",
          "C. \\( \\pi\\int_1^7 [(7-y) - (\\sqrt{7-y})]dy \\)",
          "D. \\( 2\\pi\\int_1^7 y[(7-y) - (\\sqrt{7-y})]dy \\)"
        ],
        correctAnswers: ["B"],
        points: 2,
        explanation: "**Choosing Between Methods:**\n\n" +
          "**Problem setup:**\n" +
          "- Axis: y-axis (vertical)\n" +
          "- Functions: Given as \\( y = f(x) \\)\n" +
          "- Interval: \\( 0 \\leq x \\leq 2 \\)\n\n" +
          "**Method comparison:**\n\n" +
          "| **Method** | **Slicing direction** | **Best when...** |\n" +
          "|---|---|---|\n" +
          "| Washers | Horizontal (perpendicular to y-axis) | Can easily solve for \\( x = g(y) \\) |\n" +
          "| Shells | Vertical (parallel to y-axis) | Functions are \\( y = f(x) \\) |\n\n" +
          "**Step 1: Identify the shell method as appropriate**\n\n" +
          "Since we have \\( y \\) as functions of \\( x \\) and rotate about the y-axis, **cylindrical shells** are simpler.\n\n" +
          "**Shell formula:**\n" +
          "$V = 2\\pi\\int_a^b (\\text{radius})(\\text{height})dx$\n\n" +
          "**Step 2: Determine radius and height**\n\n" +
          "- **Radius:** Distance from y-axis = \\( x \\)\n" +
          "- **Height:** Top function minus bottom function\n\n" +
          "At any \\( x \\in [0, 2] \\):\n" +
          "- Top: \\( y = 7 - x^2 \\)\n" +
          "- Bottom: \\( y = x + 1 \\)\n" +
          "- Height: \\( h(x) = (7 - x^2) - (x + 1) = 6 - x - x^2 \\)\n\n" +
          "**Step 3: Set up the integral**\n" +
          "$V = 2\\pi\\int_0^2 x(6 - x - x^2)dx$\n\n" +
          "**Why not the other options?**\n\n" +
          "- **Option A:** Washer method about x-axis (wrong axis!)\n" +
          "- **Option C, D:** These use \\( dy \\) which requires solving for \\( x(y) \\), creating piecewise functions (more complex)\n\n" +
          "**Answer: B. \\( 2\\pi\\int_0^2 x(6 - x - x^2)dx \\)**"
      },
      
      {
        id: "exam4_q9",
        sectionId: "section_3",
        questionNumber: 9,
        type: "multiple-choice",
        text: "Question 7 continued: Consider the region bounded by \\( y = 7 - x^2 \\), \\( y = x + 1 \\), and \\( x = 0 \\), revolved about the y-axis.\n\nThe exact volume is:",
        options: [
          "A. \\( \\frac{32\\pi}{3} \\)",
          "B. \\( \\frac{16\\pi}{3} \\)",
          "C. \\( 16\\pi \\)",
          "D. \\( \\frac{64\\pi}{3} \\)"
        ],
        correctAnswers: ["A"],
        points: 4,
        explanation: "**Evaluating the Shell Integral:**\n\n" +
          "$V = 2\\pi\\int_0^2 x(6 - x - x^2)dx$\n\n" +
          "**Step 1: Expand the integrand**\n" +
          "$x(6 - x - x^2) = 6x - x^2 - x^3$\n\n" +
          "**Step 2: Integrate term-by-term**\n" +
          "$\\int_0^2 (6x - x^2 - x^3)dx = \\left[3x^2 - \\frac{x^3}{3} - \\frac{x^4}{4}\\right]_0^2$\n\n" +
          "**Step 3: Evaluate at upper limit \\( x = 2 \\)**\n" +
          "$= 3(2)^2 - \\frac{(2)^3}{3} - \\frac{(2)^4}{4}$\n" +
          "$= 3(4) - \\frac{8}{3} - \\frac{16}{4}$\n" +
          "$= 12 - \\frac{8}{3} - 4$\n" +
          "$= 8 - \\frac{8}{3}$\n\n" +
          "**Step 4: Simplify**\n" +
          "$= \\frac{24}{3} - \\frac{8}{3} = \\frac{16}{3}$\n\n" +
          "**Step 5: Multiply by \\( 2\\pi \\)**\n" +
          "$V = 2\\pi \\cdot \\frac{16}{3} = \\frac{32\\pi}{3}$\n\n" +
          "**Verification:**\n" +
          "$\\frac{32\\pi}{3} \\approx \\frac{32 \\times 3.14159}{3} \\approx 33.5 \\text{ cubic units}$\n\n" +
          "**Key Insight:**\n" +
          "The shell method reduces this problem to a single straightforward integral, while the washer method would require:\n" +
          "1. Solving \\( y = 7 - x^2 \\) for \\( x = \\sqrt{7-y} \\)\n" +
          "2. Solving \\( y = x + 1 \\) for \\( x = y - 1 \\)\n" +
          "3. Determining which is outer/inner radius for different y-intervals\n" +
          "4. Possibly splitting into multiple integrals\n\n" +
          "**Answer: A. \\( \\frac{32\\pi}{3} \\)**"
      },
      
      // ============================================================
      // SECTION D: SURFACE AREA AND ARC LENGTH (Q10-12)
      // ============================================================
      {
        id: "exam4_q10",
        sectionId: "section_4",
        questionNumber: 10,
        type: "multiple-choice",
        text: "Find the exact surface area when \\( y = x^2 + 2 \\) on \\( [1, 3] \\) is revolved about the y-axis.",
        options: [
          "A. \\( \\frac{\\pi}{6}(37\\sqrt{37} - 5\\sqrt{5}) \\)",
          "B. \\( \\frac{\\pi}{3}(37\\sqrt{37} - 5\\sqrt{5}) \\)",
          "C. \\( \\frac{2\\pi}{3}(37^{3/2} - 5^{3/2}) \\)",
          "D. \\( \\pi(37\\sqrt{37} - 5\\sqrt{5}) \\)"
        ],
        correctAnswers: ["A"],
        points: 5,
        explanation: "**Surface Area of Revolution About the y-axis:**\n\n" +
          "**Formula:** When \\( y = f(x) \\) is revolved about the **y-axis**:\n" +
          "$S = 2\\pi\\int_a^b x\\sqrt{1 + (y')^2}dx$\n\n" +
          "The radius from the y-axis is \\( x \\), and the arc length element is \\( \\sqrt{1 + (y')^2}dx \\).\n\n" +
          "**Step 1: Find the derivative**\n" +
          "$y = x^2 + 2$\n" +
          "$y' = 2x$\n\n" +
          "**Step 2: Compute \\( 1 + (y')^2 \\)**\n" +
          "$1 + (y')^2 = 1 + (2x)^2 = 1 + 4x^2$\n\n" +
          "**Step 3: Set up the integral**\n" +
          "$S = 2\\pi\\int_1^3 x\\sqrt{1 + 4x^2}dx$\n\n" +
          "**Step 4: Use u-substitution**\n" +
          "Let \\( u = 1 + 4x^2 \\)\n" +
          "$du = 8x\\,dx \\implies x\\,dx = \\frac{1}{8}du$\n\n" +
          "**Change limits:**\n" +
          "- When \\( x = 1 \\): \\( u = 1 + 4(1)^2 = 5 \\)\n" +
          "- When \\( x = 3 \\): \\( u = 1 + 4(3)^2 = 1 + 36 = 37 \\)\n\n" +
          "**Step 5: Substitute and integrate**\n" +
          "$S = 2\\pi\\int_5^{37} \\sqrt{u} \\cdot \\frac{1}{8}du = \\frac{2\\pi}{8}\\int_5^{37} u^{1/2}du$\n\n" +
          "$= \\frac{\\pi}{4} \\cdot \\left[\\frac{2}{3}u^{3/2}\\right]_5^{37}$\n\n" +
          "$= \\frac{\\pi}{4} \\cdot \\frac{2}{3}[u^{3/2}]_5^{37}$\n\n" +
          "$= \\frac{\\pi}{6}(37^{3/2} - 5^{3/2})$\n\n" +
          "**Step 6: Simplify the exact form**\n" +
          "$37^{3/2} = 37\\sqrt{37}$\n" +
          "$5^{3/2} = 5\\sqrt{5}$\n\n" +
          "Therefore:\n" +
          "$S = \\frac{\\pi}{6}(37\\sqrt{37} - 5\\sqrt{5})$\n\n" +
          "**Numerical check:**\n" +
          "$\\sqrt{37} \\approx 6.083, \\quad \\sqrt{5} \\approx 2.236$\n" +
          "$S \\approx \\frac{\\pi}{6}(225.07 - 11.18) \\approx \\frac{\\pi}{6}(213.89) \\approx 112.0 \\text{ square units}$\n\n" +
          "**Answer: A. \\( \\frac{\\pi}{6}(37\\sqrt{37} - 5\\sqrt{5}) \\)**"
      },
      
      {
        id: "exam4_q11",
        sectionId: "section_4",
        questionNumber: 11,
        type: "multiple-choice",
        text: "Find the length of the curve \\( y = x^{3/2} \\) on \\( [1, 5] \\).",
        options: [
          "A. \\( \\frac{343 - 13\\sqrt{13}}{27} \\)",
          "B. \\( \\frac{343 + 13\\sqrt{13}}{27} \\)",
          "C. \\( \\frac{343\\sqrt{13}}{27} \\)",
          "D. \\( \\frac{343 - 13}{27} \\)"
        ],
        correctAnswers: ["A"],
        points: 5,
        explanation: "**Arc Length Formula:**\n\n" +
          "For \\( y = f(x) \\) from \\( x = a \\) to \\( x = b \\):\n" +
          "$L = \\int_a^b \\sqrt{1 + [f'(x)]^2}dx$\n\n" +
          "**Step 1: Find the derivative**\n" +
          "$f(x) = x^{3/2}$\n" +
          "$f'(x) = \\frac{3}{2}x^{1/2}$\n\n" +
          "**Step 2: Compute \\( [f'(x)]^2 \\)**\n" +
          "$[f'(x)]^2 = \\left(\\frac{3}{2}x^{1/2}\\right)^2 = \\frac{9}{4}x$\n\n" +
          "**Step 3: Set up the integral**\n" +
          "$L = \\int_1^5 \\sqrt{1 + \\frac{9}{4}x}dx$\n\n" +
          "**Step 4: Use u-substitution**\n" +
          "Let \\( u = 1 + \\frac{9}{4}x \\)\n" +
          "$du = \\frac{9}{4}dx \\implies dx = \\frac{4}{9}du$\n\n" +
          "**Change limits:**\n" +
          "- When \\( x = 1 \\): \\( u = 1 + \\frac{9}{4} = \\frac{13}{4} \\)\n" +
          "- When \\( x = 5 \\): \\( u = 1 + \\frac{45}{4} = \\frac{49}{4} \\)\n\n" +
          "**Step 5: Substitute and integrate**\n" +
          "$L = \\int_{13/4}^{49/4} \\sqrt{u} \\cdot \\frac{4}{9}du = \\frac{4}{9}\\int_{13/4}^{49/4} u^{1/2}du$\n\n" +
          "$= \\frac{4}{9} \\cdot \\frac{2}{3}[u^{3/2}]_{13/4}^{49/4}$\n\n" +
          "$= \\frac{8}{27}\\left[\\left(\\frac{49}{4}\\right)^{3/2} - \\left(\\frac{13}{4}\\right)^{3/2}\\right]$\n\n" +
          "**Step 6: Simplify fractional powers**\n" +
          "$\\left(\\frac{49}{4}\\right)^{3/2} = \\frac{49^{3/2}}{4^{3/2}} = \\frac{(7^2)^{3/2}}{8} = \\frac{7^3}{8} = \\frac{343}{8}$\n\n" +
          "$\\left(\\frac{13}{4}\\right)^{3/2} = \\frac{13^{3/2}}{8} = \\frac{13\\sqrt{13}}{8}$\n\n" +
          "**Step 7: Compute the final result**\n" +
          "$L = \\frac{8}{27}\\left(\\frac{343}{8} - \\frac{13\\sqrt{13}}{8}\\right)$\n\n" +
          "$= \\frac{8}{27} \\cdot \\frac{1}{8}(343 - 13\\sqrt{13})$\n\n" +
          "$= \\frac{343 - 13\\sqrt{13}}{27}$\n\n" +
          "**Numerical verification:**\n" +
          "$\\sqrt{13} \\approx 3.606$\n" +
          "$L \\approx \\frac{343 - 46.88}{27} \\approx \\frac{296.12}{27} \\approx 10.97$\n\n" +
          "**Answer: A. \\( \\frac{343 - 13\\sqrt{13}}{27} \\)**"
      },
      
      {
        id: "exam4_q12",
        sectionId: "section_4",
        questionNumber: 12,
        type: "multiple-choice",
        text: "A soap dispenser body is modeled by rotating \\( x = 1.5 + \\frac{3y}{8} \\) on \\( [0, 6] \\) about the y-axis. Determine the exact surface area.",
        options: [
          "A. \\( \\frac{63\\pi\\sqrt{73}}{16} \\)",
          "B. \\( \\frac{63\\pi\\sqrt{73}}{8} \\)",
          "C. \\( \\frac{126\\pi\\sqrt{73}}{16} \\)",
          "D. \\( \\frac{63\\pi}{16}\\sqrt{64} \\)"
        ],
        correctAnswers: ["A"],
        points: 6,
        explanation: "**Surface Area with \\( x = g(y) \\) Revolved About y-axis:**\n\n" +
          "**Formula:** When \\( x = g(y) \\) is revolved about the **y-axis**:\n" +
          "$S = 2\\pi\\int_c^d x\\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2}dy$\n\n" +
          "**Step 1: Find the derivative**\n" +
          "$x(y) = 1.5 + \\frac{3y}{8}$\n" +
          "$\\frac{dx}{dy} = \\frac{3}{8}$\n\n" +
          "**Step 2: Compute \\( 1 + (dx/dy)^2 \\)**\n" +
          "$1 + \\left(\\frac{dx}{dy}\\right)^2 = 1 + \\frac{9}{64} = \\frac{64 + 9}{64} = \\frac{73}{64}$\n\n" +
          "$\\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2} = \\frac{\\sqrt{73}}{8}$\n\n" +
          "**Step 3: Set up the integral**\n" +
          "$S = 2\\pi\\int_0^6 \\left(1.5 + \\frac{3y}{8}\\right) \\cdot \\frac{\\sqrt{73}}{8}dy$\n\n" +
          "$= 2\\pi \\cdot \\frac{\\sqrt{73}}{8}\\int_0^6 \\left(1.5 + \\frac{3y}{8}\\right)dy$\n\n" +
          "**Step 4: Evaluate the inner integral**\n\n" +
          "**First term:**\n" +
          "$\\int_0^6 1.5\\,dy = 1.5 \\cdot 6 = 9$\n\n" +
          "**Second term:**\n" +
          "$\\int_0^6 \\frac{3y}{8}dy = \\frac{3}{8} \\cdot \\frac{y^2}{2}\\Big|_0^6 = \\frac{3}{8} \\cdot \\frac{36}{2} = \\frac{3}{8} \\cdot 18 = \\frac{54}{8} = \\frac{27}{4}$\n\n" +
          "**Total:**\n" +
          "$9 + \\frac{27}{4} = \\frac{36}{4} + \\frac{27}{4} = \\frac{63}{4}$\n\n" +
          "**Step 5: Calculate surface area**\n" +
          "$S = 2\\pi \\cdot \\frac{\\sqrt{73}}{8} \\cdot \\frac{63}{4}$\n\n" +
          "$= 2\\pi \\cdot \\frac{63\\sqrt{73}}{32}$\n\n" +
          "$= \\frac{126\\pi\\sqrt{73}}{32}$\n\n" +
          "**Step 6: Simplify by dividing by GCD(126, 32) = 2**\n" +
          "$S = \\frac{63\\pi\\sqrt{73}}{16}$\n\n" +
          "**Practical context:**\n" +
          "This models the lateral surface area of a soap dispenser with a conical/linear profile. The exact form preserves \\( \\sqrt{73} \\) which cannot be simplified further.\n\n" +
          "**Numerical approximation:**\n" +
          "$\\sqrt{73} \\approx 8.544$\n" +
          "$S \\approx \\frac{63 \\times 3.14159 \\times 8.544}{16} \\approx 105.8 \\text{ square units}$\n\n" +
          "**Answer: A. \\( \\frac{63\\pi\\sqrt{73}}{16} \\)**"
      },
      
      // ============================================================
      // SECTION E: CONCEPTUAL UNDERSTANDING (Q13)
      // ============================================================
      {
        id: "exam4_q13",
        sectionId: "section_5",
        questionNumber: 13,
        type: "multiple-choice",
        text: "Which statement best describes the fundamental difference between the disk/washer method and the shell method for computing volumes of revolution?",
        options: [
          "A. Disk method uses slices parallel to the axis of rotation; shell method uses slices perpendicular to the axis",
          "B. Disk/washer method slices perpendicular to the axis and integrates cross-sectional areas; shell method slices parallel to the axis and integrates lateral surface areas",
          "C. Disk method is only for rotation about the x-axis; shell method is only for rotation about the y-axis",
          "D. Disk method always produces exact answers; shell method produces approximations"
        ],
        correctAnswers: ["B"],
        points: 3,
        explanation: "**Comprehensive Comparison of Volume Methods:**\n\n" +
          "**1. DISK/WASHER METHOD**\n\n" +
          "**Slicing:** Perpendicular to the axis of rotation\n\n" +
          "**What you integrate:** Cross-sectional areas\n" +
          "$V = \\pi\\int_a^b [R(x)^2 - r(x)^2]dx$\n\n" +
          "**Geometric interpretation:**\n" +
          "- Each slice is a circular disk (or washer with hole)\n" +
          "- Area of slice = \\( \\pi(R^2 - r^2) \\)\n" +
          "- Sum up areas × thickness\n\n" +
          "**2. SHELL METHOD**\n\n" +
          "**Slicing:** Parallel to the axis of rotation\n\n" +
          "**What you integrate:** Lateral (curved) surface areas\n" +
          "$V = 2\\pi\\int_a^b (\\text{radius})(\\text{height})dx$\n\n" +
          "**Geometric interpretation:**\n" +
          "- Each slice becomes a cylindrical shell when rotated\n" +
          "- Surface area = \\( 2\\pi r h \\)\n" +
          "- Sum up surface areas × thickness\n\n" +
          "**KEY CONCEPTUAL DIFFERENCES:**\n\n" +
          "| **Aspect** | **Disk/Washer** | **Shell** |\n" +
          "|---|---|---|\n" +
          "| **Slice orientation** | ⊥ to axis | ∥ to axis |\n" +
          "| **Integrate** | Cross-sectional areas | Lateral surface areas |\n" +
          "| **Formula involves** | \\( \\pi R^2 \\) | \\( 2\\pi rh \\) |\n" +
          "| **Best when** | Easy to find radii | Functions already in right form |\n\n" +
          "**WHY OTHER OPTIONS ARE WRONG:**\n\n" +
          "**Option A:** Backwards! Disk uses perpendicular slices; shell uses parallel slices.\n\n" +
          "**Option C:** Both methods work for any axis - the choice depends on which gives simpler integrals, not which axis you're rotating about.\n\n" +
          "**Option D:** Both methods produce exact answers when evaluated exactly. Neither is inherently approximate.\n\n" +
          "**DECISION GUIDE:**\n\n" +
          "**Use disk/washer when:**\n" +
          "- Functions are \\( y = f(x) \\) and rotating about x-axis\n" +
          "- OR functions are \\( x = g(y) \\) and rotating about y-axis\n" +
          "- Radii are easy to express\n\n" +
          "**Use shells when:**\n" +
          "- Functions are \\( y = f(x) \\) and rotating about y-axis\n" +
          "- OR functions are \\( x = g(y) \\) and rotating about x-axis\n" +
          "- Solving for the other variable would be messy\n\n" +
          "**EXAMPLES FROM THIS EXAM:**\n\n" +
          "- **Q4-6:** Rotation about x-axis with \\( y = f(x) \\) → Used washers\n" +
          "- **Q7-9:** Rotation about y-axis with \\( y = f(x) \\) → Used shells\n\n" +
          "**Answer: B. Disk/washer method slices perpendicular to the axis and integrates cross-sectional areas; shell method slices parallel to the axis and integrates lateral surface areas**"
      }
    ]
  },

      {
      "id": "ITMTB_EXAM5",
      "moduleId": "ITMTB",
      "title": "Online Test 1 - Official Proctored",
      "description": "ITMTB Test 1: Integral Calculus (Definitions, Techniques, and Applications)",
      "examBy": "The Brighter Side Team: Exam Analysis and Compilation",
      "createdOn": "2025-11-10",
      "timeLimit": 120,
      "passingScore": 70,
      "sections": [
        {
          "id": "section_1",
          "title": "Section A: Fundamental Concepts and Graphical Analysis",
          "description": "Covers the Fundamental Theorem of Calculus (Part 1), properties of integrals, and geometric interpretation of net area.",
          "instructions": "Apply the FTC to find derivatives of integrals. Use given area values and integral properties to evaluate definite integrals."
        },
        {
          "id": "section_2",
          "title": "Section B: Numerical and Limit-Based Integration",
          "description": "Focuses on numerical approximation (Midpoint, Left/Right Riemann Sums) and the formal limit definition of the integral.",
          "instructions": "Calculate the specified approximations, showing subinterval setup. For limit definitions, show the Riemann sum setup and its evaluation."
        },
        {
          "id": "section_3",
          "title": "Section C: Techniques of Integration",
          "description": "Assesses analytical integration methods including U-Substitution, Integration by Parts, and Partial Fraction Decomposition.",
          "instructions": "Identify and apply the correct integration technique for each problem. Show all necessary steps (e.g., u/dv assignments, fraction decomposition)."
        },
        {
          "id": "section_4",
          "title": "Section D: Applications of Integration",
          "description": "Involves solving real-world scenarios, including initial value problems (growth models) and finding the average value of a function.",
          "instructions": "Set up the correct definite or indefinite integral based on the scenario. Solve for constants of integration (C, k) where required."
        }
      ],

      questions: [
      // ============================================================
      // SECTION A: FUNDAMENTAL CONCEPTS AND GRAPHICAL ANALYSIS
      // ============================================================
      
      // Question 1
      {
        id: "exam5_q1",
        sectionId: "section_1",
        questionNumber: 1,
        type: "open-ended",
        text: "The graph shows \\( y = 3x \\). The region under the line from \\( x = 0 \\) to \\( x = 2 \\) is shaded (a triangle). Find the area of the shaded region.",
        image: {
          src: "/images/ITMTB_Exam5_Area_of_the_Shaded_Region.png",
          alt: "Graph of y = 3x with shaded triangular region from x = 0 to x = 2",
          caption: "The shaded region represents the area under y = 3x from x = 0 to x = 2"
        },
        correctAnswers: [
          "6",
          "6.0",
          "6 square units"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: ["square units", "units^2"],
          requiredUnit: null
        },
        points: 3,
        explanation: "**Understanding the Problem:**\n\n" +
          "The curve \\( y = 3x \\) is a straight line through the origin with slope 3. On the interval \\([0, 2]\\), " +
          "the graph and the x-axis enclose a **right triangle**.\n\n" +
          "**Method 1: Geometric Formula (Triangle Area)**\n\n" +
          "For a right triangle:\n" +
          "$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$\n\n" +
          "**Step 1:** Find the base\n" +
          "$$\\text{base} = 2 - 0 = 2$$\n\n" +
          "**Step 2:** Find the height (value at \\( x = 2 \\))\n" +
          "$$\\text{height} = y(2) = 3(2) = 6$$\n\n" +
          "**Step 3:** Calculate area\n" +
          "$$\\text{Area} = \\frac{1}{2} \\times 2 \\times 6 = 6$$\n\n" +
          "**Method 2: Using Definite Integral**\n\n" +
          "$$\\int_{0}^{2} 3x\\,dx = \\left[\\frac{3x^2}{2}\\right]_0^2$$\n\n" +
          "$$= \\frac{3(2)^2}{2} - \\frac{3(0)^2}{2} = \\frac{12}{2} = 6$$\n\n" +
          "**Answer: 6 square units**"
      },
      
      // Question 2
      {
        id: "exam5_q2",
        sectionId: "section_1",
        questionNumber: 2,
        type: "open-ended",
        text: "For the function \\( y = f(x) \\), the magnitude of the area between the graph and x-axis is given on subintervals:\n\n" +
          "- From \\( x = a \\) to \\( x = b \\): area **above** x-axis = 12\n" +
          "- From \\( x = b \\) to \\( x = c \\): area **below** x-axis = 10\n" +
          "- From \\( x = c \\) to \\( x = d \\): area **above** x-axis = 8\n\n" +
          "Compute \\( \\displaystyle\\int_{b}^{d} f(x)\\,dx \\).",
        image: {
          src: "/images/ITMTB_Exam5_Area_of_the_Shaded_Region2.png",
          alt: "Graph showing function f(x) with labeled regions above and below x-axis",
          caption: "Function with areas above (positive) and below (negative) the x-axis"
        },
        correctAnswers: [
          "-2",
          "-2.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 3,
        explanation: "**Understanding Signed Area:**\n\n" +
          "The definite integral represents **net signed area**:\n" +
          "- Regions **above** the x-axis contribute **positive** area\n" +
          "- Regions **below** the x-axis contribute **negative** area\n\n" +
          "**Step 1: Break up the integral**\n\n" +
          "$$\\int_b^d f(x)\\,dx = \\int_b^c f(x)\\,dx + \\int_c^d f(x)\\,dx$$\n\n" +
          "**Step 2: Assign signs based on position**\n\n" +
          "| Interval | Position | Magnitude | Signed Value |\n" +
          "|---|---|---|---|\n" +
          "| \\([b, c]\\) | Below x-axis | 10 | \\(-10\\) |\n" +
          "| \\([c, d]\\) | Above x-axis | 8 | \\(+8\\) |\n\n" +
          "**Step 3: Calculate net signed area**\n\n" +
          "$$\\int_b^d f(x)\\,dx = (-10) + (+8) = -2$$\n\n" +
          "**Interpretation:**\n\n" +
          "The net signed area from \\( b \\) to \\( d \\) is \\(-2\\). The negative sign indicates " +
          "that the portion below the x-axis (10 units) dominates the portion above (8 units) by 2 square units.\n\n" +
          "**Answer: -2**"
      },
      
      // Question 3
      {
        id: "exam5_q3",
        sectionId: "section_1",
        questionNumber: 3,
        type: "open-ended",
        text: "For \\( y = 2x - 6 \\):\n\n" +
          "- From \\( x = 1 \\) to \\( x = 3 \\): the graph lies **below** the x-axis with area magnitude = 4\n" +
          "- From \\( x = 3 \\) to \\( x = 6 \\): the graph lies **above** the x-axis with area magnitude = 9\n\n" +
          "What is the net area, \\( \\displaystyle\\int_{1}^{6} (2x - 6)\\,dx \\)?",
        image: {
          src: "/images/ITMTB_Exam5_Area_of_the_Shaded_Region3.png",
          alt: "Graph of y = 2x - 6 showing regions below and above the x-axis",
          caption: "Linear function crossing x-axis at x = 3"
        },
        correctAnswers: [
          "5",
          "5.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 4,
        explanation: "**Method 1: Using Given Areas and Signs**\n\n" +
          "**Step 1:** Assign signs to each region\n\n" +
          "| Interval | Position | Magnitude | Signed Value |\n" +
          "|---|---|---|---|\n" +
          "| \\([1, 3]\\) | Below x-axis | 4 | \\(-4\\) |\n" +
          "| \\([3, 6]\\) | Above x-axis | 9 | \\(+9\\) |\n\n" +
          "**Step 2:** Calculate net integral\n\n" +
          "$$\\int_{1}^{6} (2x - 6)\\,dx = \\int_{1}^{3} (2x - 6)\\,dx + \\int_{3}^{6} (2x - 6)\\,dx$$\n\n" +
          "$$= (-4) + (+9) = 5$$\n\n" +
          "**Method 2: Direct Integration (Verification)**\n\n" +
          "**Step 1:** Find antiderivative\n" +
          "$$\\int (2x - 6)\\,dx = x^2 - 6x + C$$\n\n" +
          "**Step 2:** Evaluate using FTC\n" +
          "$$\\int_{1}^{6} (2x - 6)\\,dx = [x^2 - 6x]_1^6$$\n\n" +
          "**Step 3:** Compute at endpoints\n" +
          "- At \\( x = 6 \\): \\( 6^2 - 6(6) = 36 - 36 = 0 \\)\n" +
          "- At \\( x = 1 \\): \\( 1^2 - 6(1) = 1 - 6 = -5 \\)\n\n" +
          "**Step 4:** Subtract\n" +
          "$$0 - (-5) = 5$$\n\n" +
          "Both methods confirm the answer.\n\n" +
          "**Interpretation:**\n\n" +
          "The positive area after \\( x = 3 \\) (9 units) outweighs the negative area before \\( x = 3 \\) (4 units) by **5 square units**.\n\n" +
          "**Answer: 5**"
      },
      
      // Question 4
      {
        id: "exam5_q4",
        sectionId: "section_1",
        questionNumber: 4,
        type: "open-ended",
        text: "Let \\( f(x) = \\int_{0}^{x} (t^3 + t)\\,dt \\). Find \\( f'(5) \\).",
        correctAnswers: [
          "130",
          "130.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 2,
        explanation: "**Fundamental Theorem of Calculus (Part 1):**\n\n" +
          "If \\( F(x) = \\int_{a}^{x} f(t)\\,dt \\), then:\n" +
          "$$F'(x) = f(x)$$\n\n" +
          "This states that **the derivative of an integral with a variable upper limit equals the integrand evaluated at that upper limit**.\n\n" +
          "**Step 1:** Identify the integrand\n" +
          "$$f(t) = t^3 + t$$\n\n" +
          "**Step 2:** Apply FTC Part 1\n" +
          "$$f'(x) = t^3 + t\\bigg|_{t=x} = x^3 + x$$\n\n" +
          "**Step 3:** Evaluate at \\( x = 5 \\)\n" +
          "$$f'(5) = 5^3 + 5 = 125 + 5 = 130$$\n\n" +
          "**Key Concept:**\n\n" +
          "The FTC Part 1 provides a direct way to differentiate integrals:\n" +
          "- Replace the dummy variable \\( t \\) with \\( x \\)\n" +
          "- Evaluate at the desired point\n\n" +
          "**Answer: 130**"
      },
      
      // Question 5
      {
        id: "exam5_q5",
        sectionId: "section_1",
        questionNumber: 5,
        type: "open-ended",
        text: "Given \\( f(x) = \\int_{0}^{x} (4t^2 - t + 1)\\,dt \\), find \\( f'(2) \\).",
        correctAnswers: [
          "15",
          "15.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 2,
        explanation: "**Apply FTC Part 1:**\n\n" +
          "$$\\frac{d}{dx}\\int_{a}^{x} g(t)\\,dt = g(x)$$\n\n" +
          "**Step 1:** Identify the integrand\n" +
          "$$g(t) = 4t^2 - t + 1$$\n\n" +
          "**Step 2:** Find the derivative\n" +
          "$$f'(x) = 4x^2 - x + 1$$\n\n" +
          "**Step 3:** Evaluate at \\( x = 2 \\)\n" +
          "$$f'(2) = 4(2)^2 - 2 + 1$$\n" +
          "$$= 4(4) - 2 + 1$$\n" +
          "$$= 16 - 2 + 1 = 15$$\n\n" +
          "**Answer: 15**"
      },
      
      // Question 6
      {
        id: "exam5_q6",
        sectionId: "section_1",
        questionNumber: 6,
        type: "multiple-choice",
        text: "Simplify: \\( \\displaystyle\\frac{d}{dx}\\int_{1}^{x} \\sin^2 t\\,dt \\)",
        options: [
          "A. \\( \\cos^2 x \\)",
          "B. \\( \\sin^2 x \\)",
          "C. \\( 2\\sin x \\cos x \\)",
          "D. \\( \\sin x \\)"
        ],
        correctAnswers: ["B"],
        points: 2,
        explanation: "**Fundamental Theorem of Calculus (Part 1):**\n\n" +
          "$$\\frac{d}{dx}\\int_{a}^{x} f(t)\\,dt = f(x)$$\n\n" +
          "**Direct Application:**\n\n" +
          "$$\\frac{d}{dx}\\int_{1}^{x} \\sin^2 t\\,dt = \\sin^2 x$$\n\n" +
          "**Why the other options are incorrect:**\n\n" +
          "- **Option A** (\\( \\cos^2 x \\)): This would be the result if we were differentiating \\( \\int \\cos^2 t\\,dt \\)\n" +
          "- **Option C** (\\( 2\\sin x \\cos x \\)): This is \\( \\sin(2x) \\), which is the derivative of \\( \\sin^2 x \\), not our answer\n" +
          "- **Option D** (\\( \\sin x \\)): This would be the result for \\( \\int \\sin t\\,dt \\)\n\n" +
          "**Key Insight:**\n\n" +
          "The FTC Part 1 essentially \"undoes\" the integration - the derivative of an integral with variable upper limit returns the original integrand.\n\n" +
          "**Answer: B. \\( \\sin^2 x \\)**"
      },
      
      // Question 7
      {
        id: "exam5_q7",
        sectionId: "section_1",
        questionNumber: 7,
        type: "multiple-choice",
        text: "Find the derivative of \\( F(x) = \\displaystyle\\int_{0}^{x} \\frac{t^2}{1 + t^3}\\,dt \\)",
        options: [
          "A. \\( \\displaystyle\\frac{x^2}{1 + x^3} \\)",
          "B. \\( \\displaystyle\\frac{2x}{1 + x^3} \\)",
          "C. \\( \\displaystyle\\frac{x^2}{(1 + x^3)^2} \\)",
          "D. \\( \\ln(1 + x^3) \\)"
        ],
        correctAnswers: ["A"],
        points: 2,
        explanation: "**Apply FTC Part 1:**\n\n" +
          "For \\( F(x) = \\int_{a}^{x} f(t)\\,dt \\), we have \\( F'(x) = f(x) \\).\n\n" +
          "**Step 1:** Identify the integrand\n" +
          "$$f(t) = \\frac{t^2}{1 + t^3}$$\n\n" +
          "**Step 2:** Replace \\( t \\) with \\( x \\)\n" +
          "$$F'(x) = \\frac{x^2}{1 + x^3}$$\n\n" +
          "**Why other options are incorrect:**\n\n" +
          "- **Option B**: This would be \\( \\frac{d}{dx}[x^2/(1+x^3)] \\) using the quotient rule, not our answer\n" +
          "- **Option C**: This appears to confuse the integral with its derivative\n" +
          "- **Option D**: This would be relevant if integrating \\( 1/(1+x^3) \\), but not our function\n\n" +
          "**No additional computation is required** - the FTC gives us the answer directly.\n\n" +
          "**Answer: A. \\( \\displaystyle\\frac{x^2}{1 + x^3} \\)**"
      },

      // ============================================================
      // SECTION B: NUMERICAL AND LIMIT-BASED INTEGRATION
      // ============================================================
      
      // Question 8
      {
        id: "exam5_q8",
        sectionId: "section_2",
        questionNumber: 8,
        type: "open-ended",
        text: "You have the function \\( f(x) = x \\) on the interval \\([0, 2]\\). The interval is divided into \\( n = 4 \\) equal subintervals. What is the width \\( \\Delta x \\) of each subinterval?",
        correctAnswers: [
          "0.5",
          "1/2",
          "0.50"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 2,
        explanation: "**Formula for Subinterval Width:**\n\n" +
          "When dividing an interval \\([a, b]\\) into \\( n \\) equal parts, the width of each subinterval is:\n" +
          "$$\\Delta x = \\frac{b - a}{n}$$\n\n" +
          "**Given Information:**\n" +
          "- \\( a = 0 \\)\n" +
          "- \\( b = 2 \\)\n" +
          "- \\( n = 4 \\)\n\n" +
          "**Calculate:**\n" +
          "$$\\Delta x = \\frac{2 - 0}{4} = \\frac{2}{4} = \\frac{1}{2} = 0.5$$\n\n" +
          "**Verification:**\n\n" +
          "The subintervals are:\n" +
          "- \\([0, 0.5]\\), \\([0.5, 1.0]\\), \\([1.0, 1.5]\\), \\([1.5, 2.0]\\)\n\n" +
          "Each has width 0.5 ✓\n\n" +
          "**Answer: \\( \\Delta x = \\frac{1}{2} = 0.5 \\)**"
      },
      
      // Question 9
      {
        id: "exam5_q9",
        sectionId: "section_2",
        questionNumber: 9,
        type: "open-ended",
        text: "Use the **midpoint rule** with \\( n = 2 \\) equal subintervals to approximate \\( \\displaystyle\\int_0^2 x^2\\,dx \\).",
        correctAnswers: [
          "2.5",
          "2.50",
          "5/2"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 4,
        explanation: "**Midpoint Rule Formula:**\n\n" +
          "$$M_n = \\Delta x \\sum_{i=1}^{n} f(m_i)$$\n\n" +
          "where \\( m_i \\) is the midpoint of the \\( i \\)-th subinterval.\n\n" +
          "**Step 1: Find \\( \\Delta x \\)**\n" +
          "$$\\Delta x = \\frac{2 - 0}{2} = 1$$\n\n" +
          "**Step 2: Identify subintervals and midpoints**\n\n" +
          "| Subinterval | Midpoint \\( m_i \\) |\n" +
          "|---|---|\n" +
          "| \\([0, 1]\\) | \\( m_1 = 0.5 \\) |\n" +
          "| \\([1, 2]\\) | \\( m_2 = 1.5 \\) |\n\n" +
          "**Step 3: Evaluate \\( f(x) = x^2 \\) at midpoints**\n" +
          "- \\( f(0.5) = (0.5)^2 = 0.25 \\)\n" +
          "- \\( f(1.5) = (1.5)^2 = 2.25 \\)\n\n" +
          "**Step 4: Apply midpoint rule**\n" +
          "$$M_2 = \\Delta x \\cdot [f(m_1) + f(m_2)]$$\n" +
          "$$= 1 \\cdot (0.25 + 2.25) = 1 \\cdot 2.5 = 2.5$$\n\n" +
          "**Comparison with Exact Value:**\n\n" +
          "$$\\int_0^2 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3} \\approx 2.667$$\n\n" +
          "The midpoint approximation \\( M_2 = 2.5 \\) is fairly close to the exact value.\n\n" +
          "**Error Analysis:**\n" +
          "$$\\text{Error} = 2.667 - 2.5 = 0.167$$\n\n" +
          "The approximation underestimates by about 0.167 (6.25%).\n\n" +
          "**Answer: 2.5**"
      },

      // Question 10
      {
        id: "exam5_q10",
        sectionId: "section_2",
        questionNumber: 10,
        type: "open-ended",
        text: "Approximate \\( \\displaystyle\\int_{1}^{3} \\frac{1}{x}\\,dx \\) using a **left-endpoint Riemann sum** with \\( n = 4 \\) subintervals. Express your answer as a fraction.",
        correctAnswers: [
          "77/60",
          "1.283333",
          "1.28333",
          "1.2833"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.005,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Left Riemann Sum Formula:**\n\n" +
          "$$L_n = \\Delta x \\sum_{i=0}^{n-1} f(x_i)$$\n\n" +
          "where \\( x_i \\) are the left endpoints of each subinterval.\n\n" +
          "**Step 1: Calculate \\( \\Delta x \\)**\n" +
          "$$\\Delta x = \\frac{3 - 1}{4} = \\frac{2}{4} = 0.5$$\n\n" +
          "**Step 2: Identify left endpoints**\n\n" +
          "| Subinterval | Left Endpoint \\( x_i \\) | \\( f(x_i) = \\frac{1}{x_i} \\) |\n" +
          "|---|---|---|\n" +
          "| \\([1.0, 1.5]\\) | \\( x_0 = 1.0 \\) | \\( \\frac{1}{1.0} = 1 \\) |\n" +
          "| \\([1.5, 2.0]\\) | \\( x_1 = 1.5 \\) | \\( \\frac{1}{1.5} = \\frac{2}{3} \\) |\n" +
          "| \\([2.0, 2.5]\\) | \\( x_2 = 2.0 \\) | \\( \\frac{1}{2.0} = \\frac{1}{2} \\) |\n" +
          "| \\([2.5, 3.0]\\) | \\( x_3 = 2.5 \\) | \\( \\frac{1}{2.5} = \\frac{2}{5} \\) |\n\n" +
          "**Step 3: Sum the function values**\n" +
          "$$\\sum f(x_i) = 1 + \\frac{2}{3} + \\frac{1}{2} + \\frac{2}{5}$$\n\n" +
          "Find common denominator (LCD = 30):\n" +
          "$$= \\frac{30}{30} + \\frac{20}{30} + \\frac{15}{30} + \\frac{12}{30} = \\frac{77}{30}$$\n\n" +
          "**Step 4: Multiply by \\( \\Delta x \\)**\n" +
          "$$L_4 = 0.5 \\times \\frac{77}{30} = \\frac{1}{2} \\times \\frac{77}{30} = \\frac{77}{60}$$\n\n" +
          "**Decimal approximation:**\n" +
          "$$\\frac{77}{60} \\approx 1.28333$$\n\n" +
          "**Comparison with Exact Value:**\n\n" +
          "The exact integral is:\n" +
          "$$\\int_1^3 \\frac{1}{x}\\,dx = [\\ln x]_1^3 = \\ln 3 - \\ln 1 = \\ln 3 \\approx 1.0986$$\n\n" +
          "Since \\( f(x) = \\frac{1}{x} \\) is **decreasing**, the left Riemann sum **overestimates** the integral.\n\n" +
          "**Answer: \\( \\frac{77}{60} \\approx 1.28333 \\)**"
      },
      
      // Question 10 continued (Right Riemann Sum)
      {
        id: "exam5_q10b",
        sectionId: "section_2",
        questionNumber: 11,
        type: "open-ended",
        text: "**Question 10 continued:** Now approximate the same integral \\( \\displaystyle\\int_{1}^{3} \\frac{1}{x}\\,dx \\) using a **right-endpoint Riemann sum** with \\( n = 4 \\) subintervals.",
        correctAnswers: [
          "57/60",
          "0.95",
          "19/20",
          "0.950"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.005,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 4,
        explanation: "**Right Riemann Sum Formula:**\n\n" +
          "$$R_n = \\Delta x \\sum_{i=1}^{n} f(x_i)$$\n\n" +
          "where \\( x_i \\) are the right endpoints of each subinterval.\n\n" +
          "**Step 1: We already have \\( \\Delta x = 0.5 \\)**\n\n" +
          "**Step 2: Identify right endpoints**\n\n" +
          "| Subinterval | Right Endpoint \\( x_i \\) | \\( f(x_i) = \\frac{1}{x_i} \\) |\n" +
          "|---|---|---|\n" +
          "| \\([1.0, 1.5]\\) | \\( x_1 = 1.5 \\) | \\( \\frac{2}{3} \\) |\n" +
          "| \\([1.5, 2.0]\\) | \\( x_2 = 2.0 \\) | \\( \\frac{1}{2} \\) |\n" +
          "| \\([2.0, 2.5]\\) | \\( x_3 = 2.5 \\) | \\( \\frac{2}{5} \\) |\n" +
          "| \\([2.5, 3.0]\\) | \\( x_4 = 3.0 \\) | \\( \\frac{1}{3} \\) |\n\n" +
          "**Step 3: Sum the function values**\n" +
          "$\\sum f(x_i) = \\frac{2}{3} + \\frac{1}{2} + \\frac{2}{5} + \\frac{1}{3}$\n\n" +
          "Find common denominator (LCD = 30):\n" +
          "$= \\frac{20}{30} + \\frac{15}{30} + \\frac{12}{30} + \\frac{10}{30} = \\frac{57}{30}$\n\n" +
          "**Step 4: Multiply by \\( \\Delta x \\)**\n" +
          "$R_4 = 0.5 \\times \\frac{57}{30} = \\frac{1}{2} \\times \\frac{57}{30} = \\frac{57}{60} = \\frac{19}{20}$\n\n" +
          "**Decimal approximation:**\n" +
          "$\\frac{57}{60} = 0.95$\n\n" +
          "**Comparison:**\n\n" +
          "| Method | Value | Relationship to Exact |\n" +
          "|---|---|---|\n" +
          "| Left Riemann (\\(L_4\\)) | \\(\\frac{77}{60} \\approx 1.283\\) | Overestimate |\n" +
          "| Exact Value | \\(\\ln 3 \\approx 1.099\\) | — |\n" +
          "| Right Riemann (\\(R_4\\)) | \\(\\frac{57}{60} = 0.95\\) | Underestimate |\n\n" +
          "For a **decreasing function**, the left sum is always an **upper bound** and the right sum is a **lower bound**.\n\n" +
          "**Answer: \\( \\frac{57}{60} = \\frac{19}{20} = 0.95 \\)**"
      },
      
      // Question 12
      {
        id: "exam5_q12",
        sectionId: "section_2",
        questionNumber: 12,
        type: "open-ended",
        text: "Use a **left-endpoint Riemann sum** with \\( n = 5 \\) subintervals to approximate \\( \\displaystyle\\int_{0}^{15} 4\\sqrt{t+1}\\,dt \\). Give your answer in exact form using square roots.",
        correctAnswers: [
          "12(3 + sqrt(7) + sqrt(10) + sqrt(13))",
          "12(3+√(7)+√(10)+√(13))",
          "36 + 12*√(7) + 12*√(10) + 12*√(13)",
          "148.96",
          "148.963"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.5,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 6,
        explanation: "**Left Riemann Sum Setup:**\n\n" +
          "$L_n = \\Delta t \\sum_{i=0}^{n-1} p(t_i)$\n\n" +
          "where \\( p(t) = 4\\sqrt{t+1} \\).\n\n" +
          "**Step 1: Calculate \\( \\Delta t \\)**\n" +
          "$\\Delta t = \\frac{15 - 0}{5} = 3$\n\n" +
          "**Step 2: Identify left endpoints**\n\n" +
          "| Subinterval | Left Endpoint \\( t_i \\) | \\( p(t_i) = 4\\sqrt{t_i+1} \\) |\n" +
          "|---|---|---|\n" +
          "| \\([0, 3]\\) | \\( t_0 = 0 \\) | \\( 4\\sqrt{1} = 4 \\) |\n" +
          "| \\([3, 6]\\) | \\( t_1 = 3 \\) | \\( 4\\sqrt{4} = 8 \\) |\n" +
          "| \\([6, 9]\\) | \\( t_2 = 6 \\) | \\( 4\\sqrt{7} \\) |\n" +
          "| \\([9, 12]\\) | \\( t_3 = 9 \\) | \\( 4\\sqrt{10} \\) |\n" +
          "| \\([12, 15]\\) | \\( t_4 = 12 \\) | \\( 4\\sqrt{13} \\) |\n\n" +
          "**Step 3: Sum function values**\n" +
          "$\\sum_{i=0}^{4} p(t_i) = 4 + 8 + 4\\sqrt{7} + 4\\sqrt{10} + 4\\sqrt{13}$\n\n" +
          "Factor out 4:\n" +
          "$= 4(1 + 2 + \\sqrt{7} + \\sqrt{10} + \\sqrt{13})$\n" +
          "$= 4(3 + \\sqrt{7} + \\sqrt{10} + \\sqrt{13})$\n\n" +
          "**Step 4: Multiply by \\( \\Delta t \\)**\n" +
          "$L_5 = 3 \\times 4(3 + \\sqrt{7} + \\sqrt{10} + \\sqrt{13})$\n" +
          "$= 12(3 + \\sqrt{7} + \\sqrt{10} + \\sqrt{13})$\n\n" +
          "**Exact Answer:**\n" +
          "$L_5 = 12(3 + \\sqrt{7} + \\sqrt{10} + \\sqrt{13})$\n\n" +
          "**Numerical Approximation:**\n" +
          "- \\( \\sqrt{7} \\approx 2.646 \\)\n" +
          "- \\( \\sqrt{10} \\approx 3.162 \\)\n" +
          "- \\( \\sqrt{13} \\approx 3.606 \\)\n" +
          "- Sum inside: \\( 3 + 2.646 + 3.162 + 3.606 = 12.414 \\)\n" +
          "- Multiply by 12: \\( L_5 \\approx 148.963 \\)\n\n" +
          "**Answer: \\( 12(3 + \\sqrt{7} + \\sqrt{10} + \\sqrt{13}) \\approx 148.96 \\)**"
      },
      
      // Question 13
      {
        id: "exam5_q13",
        sectionId: "section_2",
        questionNumber: 13,
        type: "open-ended",
        text: "Use the **right-endpoint Riemann sum** and the limit definition to find the exact area under \\( f(x) = 4x \\) from \\( x = 0 \\) to \\( x = 2 \\).",
        correctAnswers: [
          "8",
          "8.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Limit Definition Using Right Endpoints:**\n\n" +
          "$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i)\\Delta x$\n\n" +
          "where \\( x_i \\) are right endpoints.\n\n" +
          "**Step 1: Set up the partition**\n" +
          "$\\Delta x = \\frac{2 - 0}{n} = \\frac{2}{n}$\n\n" +
          "**Step 2: Find right endpoints**\n" +
          "$x_i = 0 + i\\Delta x = \\frac{2i}{n}, \\quad i = 1, 2, \\ldots, n$\n\n" +
          "**Step 3: Evaluate \\( f(x_i) \\)**\n" +
          "$f(x_i) = 4x_i = 4 \\cdot \\frac{2i}{n} = \\frac{8i}{n}$\n\n" +
          "**Step 4: Form the Riemann sum**\n" +
          "$S_n = \\sum_{i=1}^{n} f(x_i)\\Delta x = \\sum_{i=1}^{n} \\frac{8i}{n} \\cdot \\frac{2}{n}$\n\n" +
          "$= \\sum_{i=1}^{n} \\frac{16i}{n^2} = \\frac{16}{n^2} \\sum_{i=1}^{n} i$\n\n" +
          "**Step 5: Apply the sum formula**\n\n" +
          "We know that \\( \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} \\)\n\n" +
          "$S_n = \\frac{16}{n^2} \\cdot \\frac{n(n+1)}{2} = \\frac{16n(n+1)}{2n^2} = \\frac{8(n+1)}{n}$\n\n" +
          "**Step 6: Simplify**\n" +
          "$S_n = 8 \\cdot \\frac{n+1}{n} = 8\\left(1 + \\frac{1}{n}\\right)$\n\n" +
          "**Step 7: Take the limit**\n" +
          "$\\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} 8\\left(1 + \\frac{1}{n}\\right) = 8(1 + 0) = 8$\n\n" +
          "**Verification by Direct Integration:**\n" +
          "$\\int_0^2 4x\\,dx = \\left[2x^2\\right]_0^2 = 2(4) - 0 = 8$ ✓\n\n" +
          "**Key Concept - Limit Definition:**\n\n" +
          "This problem demonstrates how the definite integral is formally defined as the limit of Riemann sums. " +
          "As we take finer and finer partitions (\\( n \\to \\infty \\)), the sum converges to the exact area.\n\n" +
          "**Answer: 8**"
      },
      
      // Question 14
      {
        id: "exam5_q14",
        sectionId: "section_2",
        questionNumber: 14,
        type: "open-ended",
        text: "Use the **right-endpoint Riemann sum** and the limit definition to find the exact area under \\( g(x) = \\frac{1}{2}x \\) from \\( x = 2 \\) to \\( x = 4 \\).",
        correctAnswers: [
          "3",
          "3.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Limit Definition Using Right Endpoints:**\n\n" +
          "**Step 1: Set up the partition**\n" +
          "$\\Delta x = \\frac{4 - 2}{n} = \\frac{2}{n}$\n\n" +
          "**Step 2: Find right endpoints**\n" +
          "$x_i = 2 + i\\Delta x = 2 + \\frac{2i}{n}, \\quad i = 1, 2, \\ldots, n$\n\n" +
          "**Step 3: Evaluate \\( g(x_i) \\)**\n" +
          "$g(x_i) = \\frac{1}{2}x_i = \\frac{1}{2}\\left(2 + \\frac{2i}{n}\\right) = 1 + \\frac{i}{n}$\n\n" +
          "**Step 4: Form the Riemann sum**\n" +
          "$S_n = \\sum_{i=1}^{n} g(x_i)\\Delta x = \\sum_{i=1}^{n} \\left(1 + \\frac{i}{n}\\right) \\cdot \\frac{2}{n}$\n\n" +
          "**Step 5: Distribute and separate**\n" +
          "$S_n = \\frac{2}{n}\\sum_{i=1}^{n} 1 + \\frac{2}{n}\\sum_{i=1}^{n} \\frac{i}{n}$\n\n" +
          "$= \\frac{2}{n} \\cdot n + \\frac{2}{n^2}\\sum_{i=1}^{n} i$\n\n" +
          "**Step 6: Apply formulas**\n" +
          "- First term: \\( \\frac{2}{n} \\cdot n = 2 \\)\n" +
          "- Second term: \\( \\frac{2}{n^2} \\cdot \\frac{n(n+1)}{2} = \\frac{n(n+1)}{n^2} = \\frac{n+1}{n} \\)\n\n" +
          "**Step 7: Combine**\n" +
          "$S_n = 2 + \\frac{n+1}{n} = 2 + 1 + \\frac{1}{n} = 3 + \\frac{1}{n}$\n\n" +
          "**Step 8: Take the limit**\n" +
          "$\\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} \\left(3 + \\frac{1}{n}\\right) = 3 + 0 = 3$\n\n" +
          "**Verification:**\n" +
          "$\\int_2^4 \\frac{1}{2}x\\,dx = \\left[\\frac{x^2}{4}\\right]_2^4 = \\frac{16}{4} - \\frac{4}{4} = 4 - 1 = 3$ ✓\n\n" +
          "**Answer: 3**"
      },

      // ============================================================
      // SECTION C: TECHNIQUES OF INTEGRATION
      // ============================================================
      
      // Question 15
      {
        id: "exam5_q15",
        sectionId: "section_3",
        questionNumber: 15,
        type: "open-ended",
        text: "Evaluate \\( \\displaystyle\\int_{4}^{9} \\frac{h + \\sqrt{h}}{h^2}\\,dh \\). Give your answer in exact form.",
        correctAnswers: [
          "ln(9/4) + 1/3",
          "ln(9/4) + 0.333333",
          "ln(2.25) + 1/3",
          "1.1442"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 4,
        explanation: "**Step 1: Rewrite the integrand**\n\n" +
          "$\\frac{h + \\sqrt{h}}{h^2} = \\frac{h}{h^2} + \\frac{\\sqrt{h}}{h^2} = \\frac{1}{h} + \\frac{h^{1/2}}{h^2}$\n\n" +
          "$= \\frac{1}{h} + h^{-3/2}$\n\n" +
          "**Step 2: Find antiderivatives**\n\n" +
          "For each term:\n" +
          "- \\( \\int \\frac{1}{h}\\,dh = \\ln|h| + C \\)\n" +
          "- \\( \\int h^{-3/2}\\,dh = \\frac{h^{-1/2}}{-1/2} = -2h^{-1/2} + C \\)\n\n" +
          "Combined antiderivative:\n" +
          "$F(h) = \\ln h - 2h^{-1/2} = \\ln h - \\frac{2}{\\sqrt{h}}$\n\n" +
          "**Step 3: Evaluate definite integral**\n\n" +
          "$\\int_4^9 \\frac{h + \\sqrt{h}}{h^2}\\,dh = \\left[\\ln h - \\frac{2}{\\sqrt{h}}\\right]_4^9$\n\n" +
          "**At \\( h = 9 \\):**\n" +
          "$\\ln 9 - \\frac{2}{\\sqrt{9}} = \\ln 9 - \\frac{2}{3}$\n\n" +
          "**At \\( h = 4 \\):**\n" +
          "$\\ln 4 - \\frac{2}{\\sqrt{4}} = \\ln 4 - \\frac{2}{2} = \\ln 4 - 1$\n\n" +
          "**Step 4: Subtract**\n" +
          "$\\left(\\ln 9 - \\frac{2}{3}\\right) - (\\ln 4 - 1)$\n\n" +
          "$= \\ln 9 - \\ln 4 - \\frac{2}{3} + 1$\n\n" +
          "$= \\ln\\left(\\frac{9}{4}\\right) + \\left(1 - \\frac{2}{3}\\right)$\n\n" +
          "$= \\ln\\left(\\frac{9}{4}\\right) + \\frac{1}{3}$\n\n" +
          "**Numerical approximation:**\n" +
          "- \\( \\ln(9/4) = \\ln(2.25) \\approx 0.8109 \\)\n" +
          "- \\( 1/3 \\approx 0.3333 \\)\n" +
          "- Total \\( \\approx 1.1442 \\)\n\n" +
          "**Answer: \\( \\ln\\left(\\frac{9}{4}\\right) + \\frac{1}{3} \\approx 1.1442 \\)**"
      },
      
      // Question 16
      {
        id: "exam5_q16",
        sectionId: "section_3",
        questionNumber: 16,
        type: "multiple-choice",
        text: "Evaluate \\( \\displaystyle\\int x(1 + x^2)^5\\,dx \\)",
        options: [
          "A. \\( \\displaystyle\\frac{(1 + x^2)^6}{6} + C \\)",
          "B. \\( \\displaystyle\\frac{(1 + x^2)^6}{12} + C \\)",
          "C. \\( \\displaystyle\\frac{x^2(1 + x^2)^5}{10} + C \\)",
          "D. \\( \\displaystyle\\frac{(1 + x^2)^5}{5} + C \\)"
        ],
        correctAnswers: ["B"],
        points: 3,
        explanation: "**U-Substitution Method:**\n\n" +
          "**Step 1: Choose substitution**\n\n" +
          "Let \\( u = 1 + x^2 \\)\n\n" +
          "**Step 2: Find \\( du \\)**\n" +
          "$du = 2x\\,dx \\quad \\Rightarrow \\quad x\\,dx = \\frac{1}{2}du$\n\n" +
          "**Step 3: Rewrite the integral**\n" +
          "$\\int x(1 + x^2)^5\\,dx = \\int u^5 \\cdot \\frac{1}{2}du = \\frac{1}{2}\\int u^5\\,du$\n\n" +
          "**Step 4: Integrate**\n" +
          "$= \\frac{1}{2} \\cdot \\frac{u^6}{6} + C = \\frac{u^6}{12} + C$\n\n" +
          "**Step 5: Substitute back**\n" +
          "$= \\frac{(1 + x^2)^6}{12} + C$\n\n" +
          "**Why other options are incorrect:**\n\n" +
          "- **Option A**: Missing the factor of \\( \\frac{1}{2} \\) from the \\( du \\) substitution\n" +
          "- **Option C**: Incorrectly keeps \\( x^2 \\) outside instead of fully substituting\n" +
          "- **Option D**: Wrong power (should be 6, not 5) and wrong denominator\n\n" +
          "**Verification by differentiation:**\n" +
          "$\\frac{d}{dx}\\left[\\frac{(1+x^2)^6}{12}\\right] = \\frac{1}{12} \\cdot 6(1+x^2)^5 \\cdot 2x = x(1+x^2)^5$ ✓\n\n" +
          "**Answer: B. \\( \\displaystyle\\frac{(1 + x^2)^6}{12} + C \\)**"
      },

      // Question 17
      {
        id: "exam5_q17",
        sectionId: "section_3",
        questionNumber: 17,
        type: "multiple-choice",
        text: "Given \\( \\displaystyle\\int_a^b f(x)\\,dx = a + 2b \\), find \\( \\displaystyle\\int_a^b (f(x) + 3)\\,dx \\)",
        options: [
          "A. \\( a + 2b + 3 \\)",
          "B. \\( -2a + 5b \\)",
          "C. \\( a + 2b + 3(b + a) \\)",
          "D. \\( 4a + 5b \\)"
        ],
        correctAnswers: ["B"],
        points: 3,
        explanation: "**Using Linearity of Integrals:**\n\n" +
          "**Step 1: Split the integral**\n" +
          "$\\int_a^b (f(x) + 3)\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b 3\\,dx$\n\n" +
          "**Step 2: Evaluate each part**\n\n" +
          "Given: \\( \\displaystyle\\int_a^b f(x)\\,dx = a + 2b \\)\n\n" +
          "For the constant:\n" +
          "$\\int_a^b 3\\,dx = 3(b - a) = 3b - 3a$\n\n" +
          "**Step 3: Add the results**\n" +
          "$\\int_a^b (f(x) + 3)\\,dx = (a + 2b) + (3b - 3a)$\n\n" +
          "**Step 4: Simplify**\n" +
          "$= a + 2b + 3b - 3a$\n" +
          "$= (a - 3a) + (2b + 3b)$\n" +
          "$= -2a + 5b$\n\n" +
          "**Key Property Used:**\n\n" +
          "$\\int_a^b [f(x) + c]\\,dx = \\int_a^b f(x)\\,dx + c(b-a)$\n\n" +
          "This shows that adding a constant to a function adds \\( c \\times \\text{(interval length)} \\) to the integral.\n\n" +
          "**Answer: B. \\( -2a + 5b \\)**"
      },
      
      // Question 18
      {
        id: "exam5_q18",
        sectionId: "section_3",
        questionNumber: 18,
        type: "multiple-choice",
        text: "Evaluate \\( \\displaystyle\\int x^2\\sqrt{5 + 2x^3}\\,dx \\)",
        options: [
          "A. \\( \\displaystyle\\frac{1}{9}(5 + 2x^3)^{3/2} + C \\)",
          "B. \\( \\displaystyle\\frac{1}{3}(5 + 2x^3)^{3/2} + C \\)",
          "C. \\( \\displaystyle\\frac{2}{9}(5 + 2x^3)^{3/2} + C \\)",
          "D. \\( \\displaystyle\\frac{1}{6}(5 + 2x^3)^{3/2} + C \\)"
        ],
        correctAnswers: ["A"],
        points: 3,
        explanation: "**U-Substitution Method:**\n\n" +
          "**Step 1: Choose substitution**\n\n" +
          "Let \\( u = 5 + 2x^3 \\)\n\n" +
          "**Step 2: Find \\( du \\)**\n" +
          "$du = 6x^2\\,dx \\quad \\Rightarrow \\quad x^2\\,dx = \\frac{1}{6}du$\n\n" +
          "**Step 3: Rewrite the integral**\n" +
          "$\\int x^2\\sqrt{5 + 2x^3}\\,dx = \\int \\sqrt{u} \\cdot \\frac{1}{6}du = \\frac{1}{6}\\int u^{1/2}\\,du$\n\n" +
          "**Step 4: Integrate**\n" +
          "$= \\frac{1}{6} \\cdot \\frac{u^{3/2}}{3/2} + C = \\frac{1}{6} \\cdot \\frac{2u^{3/2}}{3} + C = \\frac{u^{3/2}}{9} + C$\n\n" +
          "**Step 5: Substitute back**\n" +
          "$= \\frac{(5 + 2x^3)^{3/2}}{9} + C$\n\n" +
          "**Detailed calculation check:**\n\n" +
          "$\\int u^{1/2}\\,du = \\frac{u^{3/2}}{3/2} = \\frac{2u^{3/2}}{3}$\n\n" +
          "Multiply by \\( \\frac{1}{6} \\):\n" +
          "$\\frac{1}{6} \\cdot \\frac{2u^{3/2}}{3} = \\frac{2u^{3/2}}{18} = \\frac{u^{3/2}}{9}$\n\n" +
          "**Answer: A. \\( \\displaystyle\\frac{1}{9}(5 + 2x^3)^{3/2} + C \\)**"
      },
      
      // Question 19
      {
        id: "exam5_q19",
        sectionId: "section_3",
        questionNumber: 19,
        type: "multiple-choice",
        text: "Evaluate \\( \\displaystyle\\int x^3\\sqrt{x^4 + 1}\\,dx \\)",
        options: [
          "A. \\( \\displaystyle\\frac{1}{6}(x^4 + 1)^{3/2} + C \\)",
          "B. \\( \\displaystyle\\frac{1}{4}(x^4 + 1)^{3/2} + C \\)",
          "C. \\( \\displaystyle\\frac{1}{8}(x^4 + 1)^{3/2} + C \\)",
          "D. \\( \\displaystyle\\frac{2}{3}(x^4 + 1)^{3/2} + C \\)"
        ],
        correctAnswers: ["A"],
        points: 3,
        explanation: "**U-Substitution Method:**\n\n" +
          "**Step 1: Choose substitution**\n\n" +
          "Let \\( u = x^4 + 1 \\)\n\n" +
          "**Step 2: Find \\( du \\)**\n" +
          "$du = 4x^3\\,dx \\quad \\Rightarrow \\quad x^3\\,dx = \\frac{1}{4}du$\n\n" +
          "**Step 3: Rewrite the integral**\n" +
          "$\\int x^3\\sqrt{x^4 + 1}\\,dx = \\int \\sqrt{u} \\cdot \\frac{1}{4}du = \\frac{1}{4}\\int u^{1/2}\\,du$\n\n" +
          "**Step 4: Integrate**\n" +
          "$= \\frac{1}{4} \\cdot \\frac{u^{3/2}}{3/2} + C = \\frac{1}{4} \\cdot \\frac{2u^{3/2}}{3} + C = \\frac{u^{3/2}}{6} + C$\n\n" +
          "**Step 5: Substitute back**\n" +
          "$= \\frac{(x^4 + 1)^{3/2}}{6} + C$\n\n" +
          "**Answer: A. \\( \\displaystyle\\frac{1}{6}(x^4 + 1)^{3/2} + C \\)**"
      },
      
      // Question 20
      {
        id: "exam5_q20",
        sectionId: "section_3",
        questionNumber: 20,
        type: "multiple-choice",
        text: "If \\( \\displaystyle\\int_0^4 f(x)\\,dx = 5 \\) and \\( \\displaystyle\\int_0^4 g(x)\\,dx = -3 \\), find \\( \\displaystyle\\int_4^0 [g(x) - f(x)]\\,dx \\)",
        options: [
          "A. -8",
          "B. -2",
          "C. 2",
          "D. 8"
        ],
        correctAnswers: ["D"],
        points: 3,
        explanation: "**Using Properties of Definite Integrals:**\n\n" +
          "**Property 1: Reversing Limits**\n" +
          "$\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$\n\n" +
          "**Property 2: Linearity**\n" +
          "$\\int_a^b [g(x) - f(x)]\\,dx = \\int_a^b g(x)\\,dx - \\int_a^b f(x)\\,dx$\n\n" +
          "**Step 1: Apply reverse limits property**\n" +
          "$\\int_4^0 [g(x) - f(x)]\\,dx = -\\int_0^4 [g(x) - f(x)]\\,dx$\n\n" +
          "**Step 2: Apply linearity**\n" +
          "$= -\\left(\\int_0^4 g(x)\\,dx - \\int_0^4 f(x)\\,dx\\right)$\n\n" +
          "**Step 3: Substitute given values**\n" +
          "$= -((-3) - 5) = -(-8) = 8$\n\n" +
          "**Alternative approach (direct calculation):**\n" +
          "$\\int_4^0 [g(x) - f(x)]\\,dx = \\int_4^0 g(x)\\,dx - \\int_4^0 f(x)\\,dx$\n\n" +
          "$= -\\int_0^4 g(x)\\,dx - \\left(-\\int_0^4 f(x)\\,dx\\right)$\n\n" +
          "$= -(-3) + 5 = 3 + 5 = 8$\n\n" +
          "**Answer: D. 8**"
      },
      
      // Question 21
      {
        id: "exam5_q21",
        sectionId: "section_3",
        questionNumber: 21,
        type: "open-ended",
        text: "Evaluate \\( \\displaystyle\\int_{1}^{2} \\ln x\\,dx \\) using integration by parts.",
        correctAnswers: [
          "2*ln(2) - 1",
          "2ln(2) - 1",
          "2*ln2 - 1",
          "0.3863",
          "0.386"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.005,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Integration by Parts Formula:**\n\n" +
          "$\\int u\\,dv = uv - \\int v\\,du$\n\n" +
          "**Step 1: Choose \\( u \\) and \\( dv \\)**\n\n" +
          "Let:\n" +
          "- \\( u = \\ln x \\) → \\( du = \\frac{1}{x}dx \\)\n" +
          "- \\( dv = dx \\) → \\( v = x \\)\n\n" +
          "**Step 2: Apply the formula**\n" +
          "$\\int \\ln x\\,dx = x\\ln x - \\int x \\cdot \\frac{1}{x}dx$\n\n" +
          "$= x\\ln x - \\int 1\\,dx$\n\n" +
          "$= x\\ln x - x + C$\n\n" +
          "**Step 3: Evaluate the definite integral**\n" +
          "$\\int_1^2 \\ln x\\,dx = [x\\ln x - x]_1^2$\n\n" +
          "**At \\( x = 2 \\):**\n" +
          "$2\\ln 2 - 2$\n\n" +
          "**At \\( x = 1 \\):**\n" +
          "$1\\ln 1 - 1 = 1(0) - 1 = -1$\n\n" +
          "**Step 4: Subtract**\n" +
          "$= (2\\ln 2 - 2) - (-1)$\n" +
          "$= 2\\ln 2 - 2 + 1$\n" +
          "$= 2\\ln 2 - 1$\n\n" +
          "**Numerical approximation:**\n" +
          "$2\\ln 2 \\approx 2(0.6931) = 1.3863$\n" +
          "$2\\ln 2 - 1 \\approx 0.3863$\n\n" +
          "**Answer: \\( 2\\ln 2 - 1 \\approx 0.3863 \\)**"
      },
      
      // Question 22
      {
        id: "exam5_q22",
        sectionId: "section_3",
        questionNumber: 22,
        type: "multiple-choice",
        text: "Evaluate \\( \\displaystyle\\int x^2\\cos x\\,dx \\) using integration by parts.",
        options: [
          "A. \\( x^2\\sin x + 2x\\cos x - 2\\sin x + C \\)",
          "B. \\( x^2\\sin x - 2x\\cos x + 2\\sin x + C \\)",
          "C. \\( x^2\\cos x + 2x\\sin x + 2\\cos x + C \\)",
          "D. \\( x^2\\sin x + 2x\\cos x + 2\\sin x + C \\)"
        ],
        correctAnswers: ["A"],
        points: 5,
        explanation: "**Integration by Parts (Applied Twice):**\n\n" +
          "**First Application:**\n\n" +
          "Let:\n" +
          "- \\( u_1 = x^2 \\) → \\( du_1 = 2x\\,dx \\)\n" +
          "- \\( dv_1 = \\cos x\\,dx \\) → \\( v_1 = \\sin x \\)\n\n" +
          "$\\int x^2\\cos x\\,dx = x^2\\sin x - \\int 2x\\sin x\\,dx$\n\n" +
          "**Second Application:**\n\n" +
          "For \\( \\int 2x\\sin x\\,dx \\):\n" +
          "- \\( u_2 = 2x \\) → \\( du_2 = 2\\,dx \\)\n" +
          "- \\( dv_2 = \\sin x\\,dx \\) → \\( v_2 = -\\cos x \\)\n\n" +
          "$\\int 2x\\sin x\\,dx = 2x(-\\cos x) - \\int 2(-\\cos x)\\,dx$\n\n" +
          "$= -2x\\cos x + 2\\int \\cos x\\,dx$\n\n" +
          "$= -2x\\cos x + 2\\sin x$\n\n" +
          "**Combine Results:**\n\n" +
          "$\\int x^2\\cos x\\,dx = x^2\\sin x - (-2x\\cos x + 2\\sin x) + C$\n\n" +
          "$= x^2\\sin x + 2x\\cos x - 2\\sin x + C$\n\n" +
          "**Verification Strategy:**\n\n" +
          "Differentiate the result:\n" +
          "$\\frac{d}{dx}[x^2\\sin x + 2x\\cos x - 2\\sin x]$\n\n" +
          "Using product rule:\n" +
          "$= 2x\\sin x + x^2\\cos x + 2\\cos x - 2x\\sin x - 2\\cos x$\n" +
          "$= x^2\\cos x$ ✓\n\n" +
          "**Answer: A. \\( x^2\\sin x + 2x\\cos x - 2\\sin x + C \\)**"
      },
      
      // Question 23
      {
        id: "exam5_q23",
        sectionId: "section_3",
        questionNumber: 23,
        type: "multiple-choice",
        text: "Evaluate \\( \\displaystyle\\int xe^{2x}\\,dx \\) using integration by parts.",
        options: [          
          "A. \\( \\displaystyle xe^{2x} - e^{2x} + C \\)",
          "B. \\( \\displaystyle\\frac{xe^{2x}}{2} + \\frac{e^{2x}}{4} + C \\)",
          "C. \\( \\displaystyle\\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4} + C \\)",
          "D. \\( \\displaystyle\\frac{e^{x}(2x - 1)}{2} + C \\)"
        ],
        correctAnswers: ["C"],
        points: 4,
        explanation: "**Integration by Parts:**\n\n" +
          "**Step 1: Choose \\( u \\) and \\( dv \\)**\n\n" +
          "Let:\n" +
          "- \\( u = x \\) → \\( du = dx \\)\n" +
          "- \\( dv = e^{2x}dx \\) → \\( v = \\frac{1}{2}e^{2x} \\)\n\n" +
          "**Step 2: Apply formula**\n" +
          "$\\int xe^{2x}\\,dx = x \\cdot \\frac{1}{2}e^{2x} - \\int \\frac{1}{2}e^{2x}\\,dx$\n\n" +
          "$= \\frac{xe^{2x}}{2} - \\frac{1}{2}\\int e^{2x}\\,dx$\n\n" +
          "**Step 3: Complete the integration**\n" +
          "$= \\frac{xe^{2x}}{2} - \\frac{1}{2} \\cdot \\frac{e^{2x}}{2} + C$\n\n" +
          "$= \\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4} + C$\n\n" +
          "**Alternative form (factored):**\n" +
          "$= \\frac{e^{2x}}{4}(2x - 1) + C$\n\n" +
          "Both forms are equivalent. Option A matches our result directly.\n\n" +
          "**Note:** Option D is mathematically equivalent but written differently:\n" +
          "$\\frac{e^{2x}(2x - 1)}{2} = \\frac{2xe^{2x} - e^{2x}}{2} = \\frac{xe^{2x}}{1} - \\frac{e^{2x}}{2}$\n\n" +
          "This doesn't match, so Option A is the correct form.\n\n" +
          "**Answer: A. \\( \\displaystyle\\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4} + C \\)**"
      },

      // ============================================================
      // SECTION D: APPLICATIONS OF INTEGRATION
      // ============================================================
      
      // Question 24
      {
        id: "exam5_q24",
        sectionId: "section_4",
        questionNumber: 24,
        type: "open-ended",
        text: "For the function \\( y = e^x \\), the shaded region (B) between the curve and the x-axis from \\( x = 0 \\) to \\( x = b \\) has area equal to 3. Find the value of \\( b \\).",
        image: {
          src: "/images/ITMTB_Exam5_Area_of_the_Shaded_Region4.png",
          alt: "Graph of y = e^x with shaded region from 0 to b",
          caption: "Region B under the exponential curve"
        },
        correctAnswers: [
          "ln(4)",
          "ln4",
          "1.3863",
          "1.386"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.005,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 4,
        explanation: "**Setting Up the Problem:**\n\n" +
          "The area under \\( y = e^x \\) from \\( x = 0 \\) to \\( x = b \\) is:\n" +
          "$\\text{Area} = \\int_0^b e^x\\,dx$\n\n" +
          "**Step 1: Evaluate the integral**\n" +
          "$\\int_0^b e^x\\,dx = [e^x]_0^b = e^b - e^0 = e^b - 1$\n\n" +
          "**Step 2: Set equal to given area**\n" +
          "$e^b - 1 = 3$\n\n" +
          "**Step 3: Solve for \\( b \\)**\n" +
          "$e^b = 4$\n\n" +
          "Take natural logarithm of both sides:\n" +
          "$b = \\ln 4$\n\n" +
          "**Step 4: Simplify (optional)**\n" +
          "$b = \\ln 4 = \\ln(2^2) = 2\\ln 2$\n\n" +
          "**Numerical value:**\n" +
          "$\\ln 4 \\approx 1.3863$\n\n" +
          "**Verification:**\n" +
          "$e^{\\ln 4} = 4 \\quad \\Rightarrow \\quad e^{\\ln 4} - 1 = 3$ ✓\n\n" +
          "**Interpretation:**\n\n" +
          "The area under the exponential curve from 0 to \\( \\ln 4 \\) is exactly 3 because the antiderivative " +
          "of \\( e^x \\) is \\( e^x \\) itself, making the calculation straightforward.\n\n" +
          "**Answer: \\( b = \\ln 4 \\approx 1.3863 \\)**"
      },
      
      // Question 25
      {
        id: "exam5_q25",
        sectionId: "section_4",
        questionNumber: 25,
        type: "open-ended",
        text: "The function \\( y = 4e^{-x} \\) represents a quantity over the interval \\([0, 2]\\). Calculate the exact value of \\( \\displaystyle\\int_0^2 4e^{-x}\\,dx \\).",
        image: {
          src: "/images/ITMTB_Exam5_Area_Using_Left_Riemann_Sum.png",
          alt: "Graph of y = 4e^(-x) with rectangular approximations",
          caption: "Exponential decay function"
        },
        correctAnswers: [
          "4(1 - e^(-2))",
          "4(1-e^(-2))",
          "4 - 4*e^(-2)",
          "3.4587",
          "3.459"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.005,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 4,
        explanation: "**Direct Integration:**\n\n" +
          "**Step 1: Find the antiderivative**\n\n" +
          "For \\( f(x) = 4e^{-x} \\):\n" +
          "$\\int 4e^{-x}\\,dx = 4 \\cdot (-e^{-x}) + C = -4e^{-x} + C$\n\n" +
          "**Why the negative sign?**\n" +
          "The derivative of \\( e^{-x} \\) is \\( -e^{-x} \\), so the antiderivative requires compensating with a negative.\n\n" +
          "**Step 2: Apply FTC Part 2**\n" +
          "$\\int_0^2 4e^{-x}\\,dx = [-4e^{-x}]_0^2$\n\n" +
          "**Step 3: Evaluate at endpoints**\n\n" +
          "**At \\( x = 2 \\):**\n" +
          "$-4e^{-2}$\n\n" +
          "**At \\( x = 0 \\):**\n" +
          "$-4e^{0} = -4(1) = -4$\n\n" +
          "**Step 4: Subtract**\n" +
          "$= -4e^{-2} - (-4) = -4e^{-2} + 4 = 4(1 - e^{-2})$\n\n" +
          "**Numerical Evaluation:**\n\n" +
          "$e^{-2} = \\frac{1}{e^2} \\approx \\frac{1}{7.389} \\approx 0.1353$\n\n" +
          "$1 - e^{-2} \\approx 1 - 0.1353 = 0.8647$\n\n" +
          "$4(0.8647) \\approx 3.4587$\n\n" +
          "**Physical Interpretation:**\n\n" +
          "This represents the area under an exponential decay curve. The exact value \\( 4(1 - e^{-2}) \\) " +
          "shows how much of the initial quantity (4 units at \\( x = 0 \\)) has accumulated over the interval.\n\n" +
          "**Answer: \\( 4(1 - e^{-2}) \\approx 3.4587 \\)**"
      },
      
      // Question 26
      {
        id: "exam5_q26",
        sectionId: "section_4",
        questionNumber: 26,
        type: "open-ended",
        text: "A bacteria population grows at a rate of \\( \\displaystyle\\frac{dP}{dt} = k\\sqrt{t} \\), where \\( k \\) is a constant. Given \\( P(0) = 500 \\) and \\( P(1) = 600 \\), find \\( P(7) \\).",
        correctAnswers: [
          "100*7^(3/2) + 500",
          "100*7^(1.5) + 500",
          "2352.03",
          "2352",
          "2350"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 5,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Initial Value Problem:**\n\n" +
          "**Step 1: Integrate the rate equation**\n\n" +
          "$\\frac{dP}{dt} = k\\sqrt{t} = kt^{1/2}$\n\n" +
          "$P(t) = \\int kt^{1/2}\\,dt = k \\cdot \\frac{t^{3/2}}{3/2} + C = \\frac{2k}{3}t^{3/2} + C$\n\n" +
          "**Step 2: Apply initial condition \\( P(0) = 500 \\)**\n\n" +
          "$P(0) = \\frac{2k}{3}(0)^{3/2} + C = C = 500$\n\n" +
          "So:\n" +
          "$P(t) = \\frac{2k}{3}t^{3/2} + 500$\n\n" +
          "**Step 3: Use \\( P(1) = 600 \\) to find \\( k \\)**\n\n" +
          "$600 = \\frac{2k}{3}(1)^{3/2} + 500$\n\n" +
          "$600 = \\frac{2k}{3} + 500$\n\n" +
          "$\\frac{2k}{3} = 100$\n\n" +
          "$k = 150$\n\n" +
          "**Step 4: Write the explicit formula**\n\n" +
          "$P(t) = \\frac{2(150)}{3}t^{3/2} + 500 = 100t^{3/2} + 500$\n\n" +
          "**Step 5: Calculate \\( P(7) \\)**\n\n" +
          "$P(7) = 100(7)^{3/2} + 500$\n\n" +
          "$7^{3/2} = 7^{1.5} = (\\sqrt{7})^3 = (2.6458)^3 \\approx 18.520$\n\n" +
          "$P(7) = 100(18.520) + 500 = 1852.0 + 500 = 2352$\n\n" +
          "**Summary:**\n\n" +
          "| Time \\( t \\) | Population \\( P(t) \\) |\n" +
          "|---|---|\n" +
          "| 0 | 500 |\n" +
          "| 1 | 600 |\n" +
          "| 7 | 2352 |\n\n" +
          "**Answer: \\( P(7) = 100 \\cdot 7^{3/2} + 500 \\approx 2352 \\)**"
      },
      
      // Question 27
      {
        id: "exam5_q27",
        sectionId: "section_4",
        questionNumber: 27,
        type: "open-ended",
        text: "A bacteria population grows at a rate \\( \\displaystyle\\frac{dP}{dt} = \\frac{3000}{1 + 0.25t} \\) with \\( P(0) = 1000 \\). Find \\( P(3) \\).",
        correctAnswers: [
          "12000*ln(1.75) + 1000",
          "12000*ln(1 + 0.75) + 1000",
          "7715.39",
          "7715",
          "7716"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 2,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 5,
        explanation: "**Initial Value Problem with Logarithmic Integration:**\n\n" +
          "**Step 1: Integrate using substitution**\n\n" +
          "$P(t) = \\int \\frac{3000}{1 + 0.25t}\\,dt + C$\n\n" +
          "Let \\( u = 1 + 0.25t \\), then \\( du = 0.25\\,dt \\), so \\( dt = 4\\,du \\)\n\n" +
          "$P(t) = \\int \\frac{3000}{u} \\cdot 4\\,du = 12000\\int \\frac{1}{u}\\,du$\n\n" +
          "$= 12000\\ln|u| + C = 12000\\ln(1 + 0.25t) + C$\n\n" +
          "**Step 2: Apply initial condition \\( P(0) = 1000 \\)**\n\n" +
          "$P(0) = 12000\\ln(1 + 0) + C = 12000(0) + C = 1000$\n\n" +
          "So \\( C = 1000 \\)\n\n" +
          "**Step 3: Write explicit formula**\n\n" +
          "$P(t) = 12000\\ln(1 + 0.25t) + 1000$\n\n" +
          "**Step 4: Evaluate \\( P(3) \\)**\n\n" +
          "$P(3) = 12000\\ln(1 + 0.25(3)) + 1000$\n\n" +
          "$= 12000\\ln(1.75) + 1000$\n\n" +
          "**Numerical calculation:**\n\n" +
          "$\\ln(1.75) \\approx 0.5596$\n\n" +
          "$12000(0.5596) = 6715.39$\n\n" +
          "$P(3) \\approx 6715.39 + 1000 = 7715.39$\n\n" +
          "**Growth Analysis:**\n\n" +
          "| Time | Population | Growth Rate |\n" +
          "|---|---|---|\n" +
          "| \\( t = 0 \\) | 1000 | 3000/min |\n" +
          "| \\( t = 3 \\) | 7715 | 1714/min |\n\n" +
          "The growth rate decreases over time due to the denominator \\( 1 + 0.25t \\).\n\n" +
          "**Answer: \\( P(3) = 12000\\ln(1.75) + 1000 \\approx 7715 \\)**"
      },
      
      // Question 28
      {
        id: "exam5_q28",
        sectionId: "section_4",
        questionNumber: 28,
        type: "open-ended",
        text: "Find the average value of \\( f(x) = x^2 \\) on the interval \\([0, 3]\\).",
        correctAnswers: [
          "3",
          "3.0"
        ],
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        points: 4,
        explanation: "**Average Value Formula:**\n\n" +
          "The average value of a function \\( f(x) \\) on \\([a, b]\\) is:\n" +
          "$f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx$\n\n" +
          "**Step 1: Calculate the definite integral**\n\n" +
          "$\\int_0^3 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{3^3}{3} - \\frac{0^3}{3} = \\frac{27}{3} = 9$\n\n" +
          "**Step 2: Divide by interval length**\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{3 - 0} \\cdot 9 = \\frac{9}{3} = 3$\n\n" +
          "**Geometric Interpretation:**\n\n" +
          "The average value of 3 means that if we replaced the parabola \\( y = x^2 \\) with a horizontal line \\( y = 3 \\) " +
          "over the interval \\([0, 3]\\), the area under both curves would be equal:\n\n" +
          "$\\text{Area under } y = x^2: \\quad 9$\n" +
          "$\\text{Area under } y = 3: \\quad 3 \\times 3 = 9$ ✓\n\n" +
          "**Answer: 3**"
      },
      
      // Question 29
      {
        id: "exam5_q29",
        sectionId: "section_4",
        questionNumber: 29,
        type: "open-ended",
        text: "The average current for \\( I(t) = 2\\sin(60\\pi t) + \\cos(120\\pi t) \\) over \\( 0 \\leq t \\leq \\frac{1}{60} \\) seconds is \\( \\frac{4}{\\pi} \\) amperes. Verify this result by calculating \\( \\displaystyle\\frac{1}{1/60}\\int_0^{1/60} I(t)\\,dt \\).",
        correctAnswers: [
          "4/pi",
          "4/π",
          "1.2732",
          "1.273"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.005,
          acceptedUnits: ["A", "amperes"],
          requiredUnit: null
        },
        points: 6,
        explanation: "**Average Value of a Function:**\n\n" +
          "$\\bar{I} = \\frac{1}{b - a}\\int_a^b I(t)\\,dt$\n\n" +
          "Here, \\( a = 0 \\), \\( b = \\frac{1}{60} \\), so:\n" +
          "$\\bar{I} = \\frac{1}{1/60}\\int_0^{1/60} I(t)\\,dt = 60\\int_0^{1/60} [2\\sin(60\\pi t) + \\cos(120\\pi t)]\\,dt$\n\n" +
          "**Step 1: Find antiderivatives**\n\n" +
          "For \\( \\sin(60\\pi t) \\):\n" +
          "$\\int \\sin(60\\pi t)\\,dt = -\\frac{\\cos(60\\pi t)}{60\\pi}$\n\n" +
          "For \\( \\cos(120\\pi t) \\):\n" +
          "$\\int \\cos(120\\pi t)\\,dt = \\frac{\\sin(120\\pi t)}{120\\pi}$\n\n" +
          "**Step 2: Evaluate the definite integral**\n\n" +
          "$\\int_0^{1/60} [2\\sin(60\\pi t) + \\cos(120\\pi t)]\\,dt$\n\n" +
          "$= \\left[-\\frac{2\\cos(60\\pi t)}{60\\pi} + \\frac{\\sin(120\\pi t)}{120\\pi}\\right]_0^{1/60}$\n\n" +
          "**At \\( t = \\frac{1}{60} \\):**\n" +
          "- \\( 60\\pi \\cdot \\frac{1}{60} = \\pi \\), so \\( \\cos(\\pi) = -1 \\)\n" +
          "- \\( 120\\pi \\cdot \\frac{1}{60} = 2\\pi \\), so \\( \\sin(2\\pi) = 0 \\)\n\n" +
          "$= -\\frac{2(-1)}{60\\pi} + \\frac{0}{120\\pi} = \\frac{2}{60\\pi} = \\frac{1}{30\\pi}$\n\n" +
          "**At \\( t = 0 \\):**\n" +
          "- \\( \\cos(0) = 1 \\)\n" +
          "- \\( \\sin(0) = 0 \\)\n\n" +
          "$= -\\frac{2(1)}{60\\pi} + \\frac{0}{120\\pi} = -\\frac{2}{60\\pi} = -\\frac{1}{30\\pi}$\n\n" +
          "**Step 3: Subtract**\n\n" +
          "$\\int_0^{1/60} I(t)\\,dt = \\frac{1}{30\\pi} - \\left(-\\frac{1}{30\\pi}\\right) = \\frac{2}{30\\pi} = \\frac{1}{15\\pi}$\n\n" +
          "**Step 4: Multiply by 60**\n\n" +
          "$\\bar{I} = 60 \\cdot \\frac{1}{15\\pi} = \\frac{60}{15\\pi} = \\frac{4}{\\pi}$\n\n" +
          "**Numerical value:**\n" +
          "$\\frac{4}{\\pi} \\approx \\frac{4}{3.14159} \\approx 1.2732 \\text{ A}$\n\n" +
          "**Physical Interpretation:**\n\n" +
          "This represents the average electrical current over one complete cycle of the periodic function. " +
          "The time interval \\( \\frac{1}{60} \\) second corresponds to one cycle at 60 Hz.\n\n" +
          "**Answer: \\( \\frac{4}{\\pi} \\approx 1.273 \\) amperes**"
      },
      
      // Question 30
      {
        id: "exam5_q30",
        sectionId: "section_4",
        questionNumber: 30,
        type: "open-ended",
        text: "CPU usage during a test is modeled by \\( U(t) = \\frac{\\pi}{4}\\sin t \\) for \\( 0 \\leq t \\leq \\pi \\). Find the total CPU-hours used during the test.",
        correctAnswers: [
          "pi/2",
          "π/2",
          "1.5708",
          "1.571"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.005,
          acceptedUnits: ["CPU-hours", "hours"],
          requiredUnit: null
        },
        points: 4,
        explanation: "**Total Usage as Definite Integral:**\n\n" +
          "The total CPU-hours is the integral of the rate function:\n" +
          "$\\text{Total} = \\int_0^\\pi U(t)\\,dt = \\int_0^\\pi \\frac{\\pi}{4}\\sin t\\,dt$\n\n" +
          "**Step 1: Factor out constant**\n\n" +
          "$= \\frac{\\pi}{4}\\int_0^\\pi \\sin t\\,dt$\n\n" +
          "**Step 2: Find antiderivative**\n\n" +
          "$\\int \\sin t\\,dt = -\\cos t + C$\n\n" +
          "**Step 3: Evaluate definite integral**\n\n" +
          "$\\int_0^\\pi \\sin t\\,dt = [-\\cos t]_0^\\pi$\n\n" +
          "$= -\\cos(\\pi) - (-\\cos(0))$\n\n" +
          "$= -(-1) - (-1) = 1 + 1 = 2$\n\n" +
          "**Step 4: Multiply by constant**\n\n" +
          "$\\text{Total} = \\frac{\\pi}{4} \\cdot 2 = \\frac{\\pi}{2}$\n\n" +
          "**Numerical value:**\n" +
          "$\\frac{\\pi}{2} \\approx 1.5708 \\text{ CPU-hours}$\n\n" +
          "**Geometric Interpretation:**\n\n" +
          "The function \\( U(t) = \\frac{\\pi}{4}\\sin t \\) peaks at \\( t = \\frac{\\pi}{2} \\) with maximum usage " +
          "of \\( \\frac{\\pi}{4} \\approx 0.785 \\) CPU-hours per unit time. The total area under this sine curve " +
          "from \\( 0 \\) to \\( \\pi \\) represents the cumulative CPU usage.\n\n" +
          "**Answer: \\( \\frac{\\pi}{2} \\approx 1.571 \\) CPU-hours**"
      },
      
      // Question 30 continued (Average Usage)
      {
        id: "exam5_q30b",
        sectionId: "section_4",
        questionNumber: 31,
        type: "open-ended",
        text: "**Question 30 continued:** Find the average CPU utilization over the test interval \\([0, \\pi]\\).",
        correctAnswers: [
          "1/2",
          "0.5",
          "0.50",
          "50%"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: ["%"],
          requiredUnit: null
        },
        points: 3,
        explanation: "**Average Value Formula:**\n\n" +
          "$\\bar{U} = \\frac{1}{\\pi - 0}\\int_0^\\pi U(t)\\,dt$\n\n" +
          "**Step 1: Use result from previous part**\n\n" +
          "We found that:\n" +
          "$\\int_0^\\pi U(t)\\,dt = \\frac{\\pi}{2}$\n\n" +
          "**Step 2: Divide by interval length**\n\n" +
          "$\\bar{U} = \\frac{1}{\\pi} \\cdot \\frac{\\pi}{2} = \\frac{1}{2}$\n\n" +
          "**Interpretation:**\n\n" +
          "The average CPU utilization is \\( \\frac{1}{2} \\) or **50%**.\n\n" +
          "This means that over the entire test period, the CPU was operating at an average of 50% capacity, " +
          "even though the instantaneous usage varied sinusoidally from 0% to about 78.5% (at \\( t = \\frac{\\pi}{2} \\)).\n\n" +
          "**Relationship between Total and Average:**\n\n" +
          "$\\text{Average} \\times \\text{Duration} = \\text{Total}$\n" +
          "$\\frac{1}{2} \\times \\pi = \\frac{\\pi}{2}$ ✓\n\n" +
          "**Answer: \\( \\frac{1}{2} \\) or 50%**"
      },
      
      // Question 32
      {
        id: "exam5_q32",
        sectionId: "section_4",
        questionNumber: 32,
        type: "open-ended",
        text: "A leaking water tank drips at a rate \\( R(t) = \\frac{12}{t^2 + 5t + 6} \\) liters per minute. Find the total volume leaked between \\( t = 0 \\) and \\( t = 4 \\) minutes using partial fraction decomposition.",
        correctAnswers: [
          "12*ln(9/7)",
          "12ln(9/7)",
          "3.0158",
          "3.016",
          "3.02"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: ["liters", "L"],
          requiredUnit: null
        },
        points: 6,
        explanation: "**Partial Fraction Decomposition:**\n\n" +
          "**Step 1: Factor the denominator**\n\n" +
          "$t^2 + 5t + 6 = (t + 2)(t + 3)$\n\n" +
          "**Step 2: Set up partial fractions**\n\n" +
          "$\\frac{12}{(t + 2)(t + 3)} = \\frac{A}{t + 2} + \\frac{B}{t + 3}$\n\n" +
          "**Step 3: Multiply both sides by \\((t + 2)(t + 3)\\)**\n\n" +
          "$12 = A(t + 3) + B(t + 2)$\n\n" +
          "**Step 4: Solve for constants**\n\n" +
          "**Let \\( t = -2 \\):**\n" +
          "$12 = A(1) + B(0) \\quad \\Rightarrow \\quad A = 12$\n\n" +
          "**Let \\( t = -3 \\):**\n" +
          "$12 = A(0) + B(-1) \\quad \\Rightarrow \\quad B = -12$\n\n" +
          "**Step 5: Rewrite the integral**\n\n" +
          "$\\int_0^4 \\frac{12}{t^2 + 5t + 6}\\,dt = \\int_0^4 \\left(\\frac{12}{t + 2} - \\frac{12}{t + 3}\\right)dt$\n\n" +
          "$= 12\\int_0^4 \\frac{1}{t + 2}\\,dt - 12\\int_0^4 \\frac{1}{t + 3}\\,dt$\n\n" +
          "**Step 6: Integrate**\n\n" +
          "$= 12[\\ln|t + 2|]_0^4 - 12[\\ln|t + 3|]_0^4$\n\n" +
          "$= 12[\\ln|t + 2| - \\ln|t + 3|]_0^4$\n\n" +
          "**Step 7: Evaluate at endpoints**\n\n" +
          "**At \\( t = 4 \\):**\n" +
          "$\\ln(6) - \\ln(7) = \\ln\\left(\\frac{6}{7}\\right)$\n\n" +
          "**At \\( t = 0 \\):**\n" +
          "$\\ln(2) - \\ln(3) = \\ln\\left(\\frac{2}{3}\\right)$\n\n" +
          "**Step 8: Subtract**\n\n" +
          "$12\\left[\\ln\\left(\\frac{6}{7}\\right) - \\ln\\left(\\frac{2}{3}\\right)\\right]$\n\n" +
          "$= 12\\ln\\left(\\frac{6/7}{2/3}\\right) = 12\\ln\\left(\\frac{6}{7} \\cdot \\frac{3}{2}\\right)$\n\n" +
          "$= 12\\ln\\left(\\frac{18}{14}\\right) = 12\\ln\\left(\\frac{9}{7}\\right)$\n\n" +
          "**Numerical calculation:**\n\n" +
          "$\\frac{9}{7} \\approx 1.2857$\n" +
          "$\\ln(1.2857) \\approx 0.2513$\n" +
          "$12(0.2513) \\approx 3.0158$\n\n" +
          "**Answer: \\( 12\\ln\\left(\\frac{9}{7}\\right) \\approx 3.016 \\) liters**"
      },
      
      // Question 33
      {
        id: "exam5_q33",
        sectionId: "section_4",
        questionNumber: 33,
        type: "open-ended",
        text: "A SaaS company has total paying subscribers modeled by \\( r(t) = -\\frac{40000}{\\sqrt{1 + 0.2t}} + 50000 \\) for \\( 0 \\leq t \\leq 5 \\) years. Find the average number of paying subscribers over the next five years.",
        correctAnswers: [
          "-80000*sqrt(2) + 130000",
          "130000 - 80000*sqrt(2)",
          "16862.915",
          "16863",
          "16860"
        ],
        options: {
          allowSymbolic: true,
          tolerance: 10,
          acceptedUnits: ["subscribers"],
          requiredUnit: null
        },
        points: 7,
        explanation: "**Average Value of a Function:**\n\n" +
          "$\\bar{r} = \\frac{1}{5 - 0}\\int_0^5 r(t)\\,dt = \\frac{1}{5}\\int_0^5 \\left(-\\frac{40000}{\\sqrt{1 + 0.2t}} + 50000\\right)dt$\n\n" +
          "**Step 1: Split the integral**\n\n" +
          "$= \\frac{1}{5}\\left[-40000\\int_0^5 (1 + 0.2t)^{-1/2}\\,dt + 50000\\int_0^5 dt\\right]$\n\n" +
          "**Step 2: Second integral (easy part)**\n\n" +
          "$50000\\int_0^5 dt = 50000(5) = 250000$\n\n" +
          "**Step 3: First integral (substitution)**\n\n" +
          "Let \\( u = 1 + 0.2t \\), then \\( du = 0.2\\,dt \\), so \\( dt = 5\\,du \\)\n\n" +
          "When \\( t = 0 \\): \\( u = 1 \\)\n" +
          "When \\( t = 5 \\): \\( u = 1 + 0.2(5) = 2 \\)\n\n" +
          "$-40000\\int_0^5 (1 + 0.2t)^{-1/2}\\,dt = -40000\\int_1^2 u^{-1/2} \\cdot 5\\,du$\n\n" +
          "$= -200000\\int_1^2 u^{-1/2}\\,du$\n\n" +
          "**Step 4: Integrate**\n\n" +
          "$\\int u^{-1/2}\\,du = 2u^{1/2}$\n\n" +
          "$= -200000[2u^{1/2}]_1^2 = -400000[\\sqrt{u}]_1^2$\n\n" +
          "$= -400000(\\sqrt{2} - \\sqrt{1}) = -400000(\\sqrt{2} - 1)$\n\n" +
          "$= -400000\\sqrt{2} + 400000$\n\n" +
          "**Step 5: Combine results**\n\n" +
          "$\\int_0^5 r(t)\\,dt = (-400000\\sqrt{2} + 400000) + 250000$\n\n" +
          "$= -400000\\sqrt{2} + 650000$\n\n" +
          "**Step 6: Calculate average**\n\n" +
          "$\\bar{r} = \\frac{1}{5}(-400000\\sqrt{2} + 650000)$\n\n" +
          "$= -80000\\sqrt{2} + 130000$\n\n" +
          "**Numerical calculation:**\n\n" +
          "$\\sqrt{2} \\approx 1.4142$\n" +
          "$80000(1.4142) = 113136$\n" +
          "$130000 - 113136 = 16864$\n\n" +
          "**Interpretation:**\n\n" +
          "Over the 5-year period, the company will have an average of approximately **16,863 paying subscribers**, " +
          "even though the function shows the number declining from 50,000 initially.\n\n" +
          "**Answer: \\( -80000\\sqrt{2} + 130000 \\approx 16,863 \\) subscribers**"
      }
    ],
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

// New utility function to format the created date
export const formatExamDate = (dateString) => {
  if (!dateString) return null;
  
  const date = new Date(dateString);
  
  // Format as "January 15, 2025"
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// New utility function to get relative time (e.g., "2 weeks ago")
export const getRelativeTime = (dateString) => {
  if (!dateString) return null;
  
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};