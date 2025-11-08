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