// src/data/modules.js
export const modules = [
  {
    id: "ITMTA",
    name: "ITMTA",
    isVisible: false, // Hide ITMTA
    exams: [
      { id: 'ITMTA_EXAM1', name: 'Final Exam', description: 'Comprehensive exam covering all ITMTA topics.' }
    ],
    weeks: [
      {
        id: "ITMTA_W1",
        name: "Week 1",
        title: "Functions and Models / The Tangent and Velocity",
        topics: [
          {
            id: "ITMTA_W1_T1",
            name: "Functions: Multiple Perspectives",
            competency: "AC 1.1",
            explanation: "Functions model phenomena by relating inputs to outputs. Interpret them through algebraic expressions (e.g., $f(x) = 2x + 3$), numerical tables ($x = 1, 2, 3$), graphs on coordinate axes, and verbal descriptions ('cost increases by 2 units per item plus a base fee of 3').",
            example: "For $f(x) = 2x + 3$, compute $f(1)$, $f(2)$; plot points; describe as 'linear cost function.'",
            studyTip: "Use 'A.N.G.V.' mnemonic: Algebraic, Numerical, Graphical, Verbal.",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T2",
            name: "Domain and Range",
            competency: "AC 1.2",
            explanation: "Domain: all possible inputs. Range: all possible outputs. For $f(x) = \\sqrt{x}$, domain is $x \\geq 0$, range is $y \\geq 0$.",
            example: "Find domain and range of $f(x) = \\frac{1}{x-2}$. Domain: $x \\neq 2$, Range: $y \\neq 0$.",
            studyTip: "Remember: 'D goes with x, R goes with y.'",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T3",
            name: "Vertical Line Test",
            competency: "AC 1.3",
            explanation: "A graph is a function if no vertical line intersects it more than once. A circle ($x^2 + y^2 = 1$) fails this test.",
            example: "Does $y = x^2$ pass the vertical line test? Yes, it's a function.",
            studyTip: "Mnemonic: 'One x, one y.'",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T4",
            name: "Symmetries",
            competency: "AC 1.4",
            explanation: "Even functions: $f(-x) = f(x)$ (y-axis symmetry, e.g., $x^2$). Odd functions: $f(-x) = -f(x)$ (origin symmetry, e.g., $x^3$).",
            example: "Is $f(x) = x^2$ even or odd? Even, since $f(-x) = f(x)$.",
            studyTip: "Even → mirror on y-axis, Odd → rotate 180°.",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T5",
            name: "Types of Functions",
            competency: "AC 1.5",
            explanation: "Learn linear (line), quadratic (parabola), exponential (rapid growth), logarithmic (slow growth), piecewise (split rules). Know their graphs and properties.",
            example: "Sketch $f(x) = x^2$ and identify vertex, intercepts.",
            studyTip: "Build a 'function zoo' notebook with sketches + 2 properties each.",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T6",
            name: "Transformations",
            competency: "AC 1.6",
            explanation: "$f(x) + c$ shifts up, $f(x-c)$ shifts right, $-f(x)$ reflects over x-axis.",
            example: "Transform $f(x) = x^2$ to $f(x-2) + 3$. Shift right 2, up 3.",
            studyTip: "Inside affects x, outside affects y.",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T7",
            name: "Combining Functions",
            competency: "AC 1.7",
            explanation: "Combine using sums, differences, products, quotients. E.g., $f(x) = x^2$, $g(x) = x+1$ → $f+g = x^2 + x + 1$.",
            example: "Compute $(f \\cdot g)(x)$ for $f(x) = x^2$, $g(x) = x+1$.",
            studyTip: "Practice arithmetic operations with simple functions.",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T8",
            name: "Verbal Modelling",
            competency: "AC 1.8",
            explanation: "Translate verbal descriptions into functions. E.g., 'Population doubles every 10 years' → exponential.",
            example: "Model 'cost is $5 per unit plus $10 fixed' as $f(x) = 5x + 10$.",
            studyTip: "Connect to real-world: exponential = bacteria, quadratic = projectile.",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T9",
            name: "Tangent and Velocity",
            competency: "AC 2.1",
            explanation: "Limits find the slope of a tangent line, which represents instantaneous velocity in physics.",
            example: "Find the tangent slope of $f(x) = x^2$ at $x = 1$ using limit definition.",
            studyTip: "Visualize tangent as a line touching curve at one point.",
            videoUrl: "",
            quizId: "ITMTA_W1_Quiz"
          }
        ]
      },
      {
        id: "ITMTA_W2",
        name: "Week 2",
        title: "The Limit of a Function / Calculating Limits Using the Limit Laws",
        topics: [
          {
            id: "ITMTA_W2_T1",
            name: "Graphical & Numerical Limits",
            competency: "AC 2.2",
            explanation: "Evaluate limits by observing graphs or tables. E.g., as $x \\to 2$, $f(x) = x^2 \\to 4$.",
            example: "Use a table to estimate $\\lim_{x \\to 2} x^2$. Values approach 4.",
            studyTip: "Sketch graph and check table for confirmation.",
            videoUrl: "",
            quizId: "ITMTA_W2_Quiz"
          },
          {
            id: "ITMTA_W2_T2",
            name: "One-Sided and Two-Sided Limits",
            competency: "AC 2.3",
            explanation: "One-sided: $\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$, $\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$. Two-sided requires both to match.",
            example: "Evaluate $\\lim_{x \\to 0} \\frac{1}{x}$. Does not exist (one-sided limits differ).",
            studyTip: "Check left and right approaches separately.",
            videoUrl: "",
            quizId: "ITMTA_W2_Quiz"
          },
          {
            id: "ITMTA_W2_T3",
            name: "Limit Laws",
            competency: "AC 2.4",
            explanation: "Sum: $\\lim (f+g) = \\lim f + \\lim g$. Quotient: $\\lim \\frac{f}{g} = \\frac{\\lim f}{\\lim g}$ (if denominator $\\neq 0$).",
            example: "Use limit laws: $\\lim_{x \\to 1} (x^2 + 2x) = \\lim x^2 + \\lim 2x = 3$.",
            studyTip: "Memorize: Sum, Difference, Product, Quotient, Power.",
            videoUrl: "",
            quizId: "ITMTA_W2_Quiz"
          },
          {
            id: "ITMTA_W2_T4",
            name: "Limits Failing to Exist",
            competency: "AC 2.5",
            explanation: "Limits fail due to jumps (piecewise), oscillation ($\\sin(1/x)$), or infinite divergence.",
            example: "$\\lim_{x \\to 0} \\sin(1/x)$ oscillates, does not exist.",
            studyTip: "Identify failure type: jump, oscillation, or infinity.",
            videoUrl: "",
            quizId: "ITMTA_W2_Quiz"
          },
          {
            id: "ITMTA_W2_T5",
            name: "Evaluation Techniques",
            competency: "AC 2.6",
            explanation: "Use direct substitution, factorization, or rationalization to evaluate limits.",
            example: "$\\lim_{x \\to 2} \\frac{x^2-4}{x-2} \\to$ factor $\\to 4$.",
            studyTip: "Mnemonic: SFR = Substitute, Factor, Rationalize.",
            videoUrl: "",
            quizId: "ITMTA_W2_Quiz"
          }
        ]
      },
      {
        id: "ITMTA_W3",
        name: "Week 3",
        title: "Limits at Infinity / Derivatives & Rates of Change",
        topics: [
          {
            id: "ITMTA_W3_T1",
            name: "Limits at Infinity",
            competency: "AC 2.7",
            explanation: "Evaluate limits as $x \\to \\pm \\infty$ by comparing highest powers.",
            example: "$\\lim_{x \\to \\infty} \\frac{3x^2+1}{2x^2+5} = \\frac{3}{2}$.",
            studyTip: "Focus on highest-degree terms.",
            videoUrl: "",
            quizId: "ITMTA_W3_Quiz"
          },
          {
            id: "ITMTA_W3_T2",
            name: "Derivatives via Limits",
            competency: "AC 2.8",
            explanation: "Derivative: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$.",
            example: "For $f(x) = x^2$, compute $f'(x) = 2x$.",
            studyTip: "Visualize as tangent slope.",
            videoUrl: "",
            quizId: "ITMTA_W3_Quiz"
          },
          {
            id: "ITMTA_W3_T3",
            name: "Derivatives as Rates of Change",
            competency: "AC 3.1",
            explanation: "Derivatives measure rates like velocity or marginal cost.",
            example: "If $s(t) = t^2$, velocity $v(t) = s'(t) = 2t$.",
            studyTip: "Use tangent slope animations.",
            videoUrl: "",
            quizId: "ITMTA_W3_Quiz"
          }
        ]
      },
      {
        id: "ITMTA_W4",
        name: "Week 4",
        title: "Derivatives as Functions / Polynomial & Exponential Derivatives",
        topics: [
          {
            id: "ITMTA_W4_T1",
            name: "Derivatives as Functions",
            competency: "AC 2.8",
            explanation: "The derivative itself is a function, e.g., $f(x) = x^3 \\to f'(x) = 3x^2$.",
            example: "Find $f'(x)$ for $f(x) = x^3$.",
            studyTip: "Sketch $f$ and $f'$ together.",
            videoUrl: "",
            quizId: "ITMTA_W4_Quiz"
          },
          {
            id: "ITMTA_W4_T2",
            name: "Polynomial and Exponential Derivatives",
            competency: "AC 3.1-3.2",
            explanation: "Power Rule: $(x^n)' = nx^{n-1}$. Exponential: $(e^x)' = e^x$.",
            example: "Differentiate $f(x) = x^3 + e^x \\to f'(x) = 3x^2 + e^x$.",
            studyTip: "Memorize power and exponential rules.",
            videoUrl: "",
            quizId: "ITMTA_W4_Quiz"
          }
        ]
      },
      {
        id: "ITMTA_W5",
        name: "Week 5",
        title: "Product, Quotient, Chain Rule / Max & Min Values",
        topics: [
          {
            id: "ITMTA_W5_T1",
            name: "Product and Quotient Rules",
            competency: "AC 3.2",
            explanation: "Product: $(fg)' = f'g + fg'$. Quotient: $(f/g)' = \\frac{f'g - fg'}{g^2}$.",
            example: "Differentiate $\\frac{x^2}{x+1}$.",
            studyTip: "Practice with simple pairs: $f(x) = x$, $g(x) = x^2$.",
            videoUrl: "",
            quizId: "ITMTA_W5_Quiz"
          },
          {
            id: "ITMTA_W5_T2",
            name: "Chain Rule",
            competency: "AC 3.2",
            explanation: "$(f(g(x)))' = f'(g(x)) \\cdot g'(x)$.",
            example: "Differentiate $f(x) = \\sin(x^2)$.",
            studyTip: "Mnemonic: Outside times inside.",
            videoUrl: "",
            quizId: "ITMTA_W5_Quiz"
          },
          {
            id: "ITMTA_W5_T3",
            name: "Max and Min Values",
            competency: "AC 4.1",
            explanation: "Set $f'(x) = 0$, test with first/second derivative.",
            example: "Find max/min of $f(x) = x^3 - 3x$.",
            studyTip: "Use first derivative test for critical points.",
            videoUrl: "",
            quizId: "ITMTA_W5_Quiz"
          }
        ]
      },
      {
        id: "ITMTA_W6",
        name: "Week 6",
        title: "The Mean Value Theorem / How Derivatives Affect the Shape of a Graph",
        topics: [
          {
            id: "ITMTA_W6_T1",
            name: "Mean Value Theorem",
            competency: "AC 4.2",
            explanation: "For continuous $f$ on $[a,b]$, there exists $c$ where $f'(c) = \\frac{f(b)-f(a)}{b-a}$.",
            example: "Verify MVT for $f(x) = x^2$ on $[0,2]$.",
            studyTip: "Visualize secant vs. tangent slopes.",
            videoUrl: "",
            quizId: "ITMTA_W6_Quiz"
          },
          {
            id: "ITMTA_W6_T2",
            name: "Derivatives and Graph Shape",
            competency: "AC 4.1, 4.3",
            explanation: "$f'(x) > 0$: increasing, $f'(x) < 0$: decreasing. $f''(x)$ for concavity.",
            example: "Analyze $f(x) = x^3 - 3x$ for increasing/decreasing intervals.",
            studyTip: "Sketch $f$, $f'$, $f''$ together.",
            videoUrl: "",
            quizId: "ITMTA_W6_Quiz"
          }
        ]
      },
      {
        id: "ITMTA_W7",
        name: "Week 7",
        title: "Optimization Problems / The Area Problem",
        topics: [
          {
            id: "ITMTA_W7_T1",
            name: "Optimization",
            competency: "AC 4.4, 4.5",
            explanation: "Maximize/minimize functions like revenue $R(x) = x \\cdot p(x)$ or material usage.",
            example: "Maximize area of rectangle with fixed perimeter 100.",
            studyTip: "Set up equation, differentiate, find critical points.",
            videoUrl: "",
            quizId: "ITMTA_W7_Quiz"
          },
          {
            id: "ITMTA_W7_T2",
            name: "Area Under Curve",
            competency: "AC 5.1-5.2",
            explanation: "Area = $\\int_a^b f(x) \\, dx$. Use integration rules to compute.",
            example: "Find area under $f(x) = x^2$ from $x=0$ to $x=1$.",
            studyTip: "Visualize area as sum of rectangles.",
            videoUrl: "",
            quizId: "ITMTA_W7_Quiz"
          }
        ]
      }
    ]
  },

  //----------------------------------------------------------------------------------------------------------------------------------------

  {
    id: "ITMTB",
    name: "ITMTB",
    isVisible: true, // Show ITMTB
    formulaSheet: {
      available: true,
      path: '/formula-sheets/itmtb',
      title: 'ITMTB Formula Sheet'
    },

    exams: [
      { 
        id: 'ITMTB_EXAM3', 
        name: 'ITMTB Exam: Interpreting Graphs', 
        description: 'Applications of Integration: Covers reading graph data to answer questions.',
        examBy: 'The Brighter Side Team',
        createdOn: '2025-10-25',
      },      
      { 
        id: 'ITMTB_EXAM1', 
        name: 'Online Test 1 (Mock Test)', 
        description: 'ITMTB Test 1 Prep: Calculus of Integration (Hardest Subset)', 
        examBy: 'Mr Kwadwo Afrane-Okese', 
        createdOn: '2025-10-20',
      },
      { 
        id: 'ITMTB_EXAM5', 
        name: 'Online Test 1 - Official Proctored', 
        description: 'ITMTB Test 1: Integral Calculus (Definitions, Techniques, and Applications)', 
        examBy: 'The Brighter Side Team: Exam Analysis and Compilation', 
        createdOn: '2025-11-10',
      },            
      { 
        id: 'ITMTB_EXAM4', 
        name: 'Midterm Assessment (Week 1-6)', 
        description: 'Explores integration methods, area between curves, volumes by rotation, surface area, arc length, and conceptual comparisons.', 
        examBy: 'Mr. Mpho Nefale', 
        createdOn: '2025-11-03',
      }, 
      { 
        id: 'ITMTB_EXAM2', 
        name: 'Final Exam', 
        description: 'Not yet set. Contact founder for more info.' 
      },
    ],

    weeks: [
      {
        id: "ITMTB_W1",
        name: "Week 1",
        title: "Integrals: Area & Distance Problems, Definite Integrals",
        topics: [
      {
          id: "ITMTB_W1_T1",
          name: "Lesson 1: Area & Distance Interpretation",
          competency: "Assessment Coverage: 5.1 (Prescribed Textbook)",
          explanation: "Interpret integrals or sums geometrically: area under curve or distance traveled over time.",
          example: "If velocity is v(t) = t² on [0,2], area under v(t) is total distance.",
          studyTip: "Draw the velocity graph and think ‘area = distance’.",
          videoUrl: "https://www.youtube.com/watch?v=XrMSfljzBRg",  // 5.1 Areas & Distances video :contentReference[oaicite:7]{index=7}
          quizId: "ITMTB_W1_Quiz"
        },
        {
          id: "ITMTB_W1_T2",
          name: "Lesson 1: Riemann Sums (Left, Right, Midpoint)",
          competency: "Assessment Coverage: 5.1 (Prescribed Textbook)",
          explanation: "Approximate area by summing rectangles using left endpoints, right endpoints, or midpoints.",
          example: "Approximate ∫₀² x² dx using 4 rectangles and midpoint rule.",
          studyTip: "Start with small n, compare left/right/midpoint to see which is better.",
          videoUrl: "https://www.youtube.com/watch?v=AkUa9Fkz2rw",  // Riemann Sums tutorial :contentReference[oaicite:8]{index=8}
          quizId: "ITMTB_W1_Quiz"
        },
        {
          id: "ITMTB_W1_T3",
          name: "Lesson 1: Definite Integral via Limit of Riemann Sums",
          competency: "Assessment Coverage: 5.1 (Prescribed Textbook)",
          explanation: "Define the definite integral as the limit of Riemann sums as partition norm → 0.",
          example: "Show limₙ→∞ Σ f(xᵢ*) Δx = ∫ₐᵇ f(x) dx for f(x)=x² on [0,1].",
          studyTip: "Really link the sum notation to integral notation step by step.",
          videoUrl: "https://www.youtube.com/watch?v=8W3gEuaj_0s",  // Riemann Sums → Definite Integrals video :contentReference[oaicite:9]{index=9}
          quizId: "ITMTB_W1_Quiz"
        },
        {
          id: "ITMTB_W1_T4",
          name: "Lesson 1: Fundamental Theorem of Calculus",
          competency: "Assessment Coverage: 5.1 (Prescribed Textbook)",
          explanation: "Relates antiderivatives and definite integrals, enabling evaluation of integrals via antiderivatives.",
          example: "Compute ∫₀¹ x² dx by finding F(x)=x³/3 and using F(1)–F(0).",
          studyTip: "Memorize the statement: ∫ₐᵇ f(x) dx = F(b) – F(a) when F′(x)=f(x).",
          videoUrl: "https://www.youtube.com/watch?v=aeB5BWY0RlE",  // FTC Part 1 video :contentReference[oaicite:10]{index=10}
          quizId: "ITMTB_W1_Quiz"
        },
        {
          id: "ITMTB_W1_T5",
          name: "Lesson 2: Definition of the Definite Integral",
          competency: "Assessment Coverage: Section 5.2 (Prescribed Textbook)",
          explanation: "The definite integral $\\int_a^b f(x)\\,dx$ is defined as the limit of Riemann sums as the number of subintervals approaches infinity and their width approaches zero. It formalizes the idea of summing infinitely many small products $f(x_i^*)\\Delta x$ to find total accumulation over $[a,b]$.",
          example: "For $f(x)=x^2$ on $[0,1]$, divide into $n$ subintervals of width $\\frac{1}{n}$. The Riemann sum using right endpoints is $\\sum \\left(\\frac{i}{n}\\right)^2 \\left(\\frac{1}{n}\\right)$. Taking the limit as $n \\to \\infty$ gives $\\frac{1}{3}$, so $\\int_0^1 x^2\\,dx = \\frac{1}{3}$.",
          studyTip: "Visualize Riemann sums with rectangles. As you increase $n$, the rectangles fit the curve more closely — this helps build intuition before working with formal limits.",
          videoUrl: "https://www.youtube.com/watch?v=Gc3QvUB0PkI",
          quizId: "ITMTB_W1_Quiz"
        },
        {
          id: "ITMTB_W1_T6",
          name: "Lesson 2: Interpreting Definite Integrals as Net Area",
          competency: "Assessment Coverage: Section 5.2 (Prescribed Textbook)",
          explanation: "A definite integral can be viewed as net signed area between the curve $y=f(x)$ and the $x$-axis over $[a,b]$. Regions above the axis contribute positive area; regions below contribute negative area. The integral equals $A_1 - A_2$, where $A_1$ is area above and $A_2$ is area below the axis.",
          example: "For $f(x)=x^3-6x$ on $[0,3]$, parts of the curve lie above and below the axis. $\\int_0^3 (x^3-6x)\\,dx$ equals the positive area above minus the area below, yielding $-26.75$.",
          studyTip: "Sketch the function before integrating to identify where it's positive or negative. This makes it easier to interpret the integral geometrically.",
          videoUrl: "https://www.youtube.com/watch?v=FnJqaIESC2s",
          quizId: "ITMTB_W1_Quiz"
        },
        {
          id: "ITMTB_W1_T7",
          name: "Lesson 2: Evaluating Definite Integrals Using Limits",
          competency: "Assessment Coverage: Section 5.2 (Prescribed Textbook)",
          explanation: "By Theorem 4, if $f$ is integrable on $[a,b]$, then $\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum f(x_i) \\Delta x$ using right endpoints. This allows us to convert complicated sums to integrals, and vice versa, recognizing patterns in limits.",
          example: "$\\lim_{n \\to \\infty} \\sum_{i=1}^n [x_i^3 + x_i \\sin x_i] \\Delta x$ on $[0,\\pi]$ equals $\\int_0^\\pi (x^3+x \\sin x)\\,dx$ by matching the Riemann sum structure.",
          studyTip: "When faced with a sum in a limit, look for $\\Delta x = \\frac{b-a}{n}$ and $x_i = a + i\\Delta x$. If they match, rewrite as an integral — it simplifies the problem enormously.",
          videoUrl: "https://www.youtube.com/watch?v=rZaZTgUQO_E",
          quizId: "ITMTB_W1_Quiz"
        },
        {
          id: "ITMTB_W1_T8",
          name: "Lesson 2: The Midpoint Rule",
          competency: "Assessment Coverage: Section 5.2 (Prescribed Textbook)",
          explanation: "The Midpoint Rule approximates $\\int_a^b f(x)\\,dx$ by sampling at midpoints of subintervals instead of left or right endpoints. This usually gives a better estimate with fewer rectangles because it balances over- and underestimation.",
          example: "To approximate $\\int_1^2 \\frac{1}{x}\\,dx$ with $n=5$ subintervals, use midpoints $1.1, 1.3, 1.5, 1.7, 1.9$ and width $\\Delta x=0.2$. The Midpoint Rule gives approximately $0.692$, close to the exact $\\ln(2) \\approx 0.6931$.",
          studyTip: "For numeric integration without antiderivatives, midpoints usually outperform left or right sums. Use this method for faster, more accurate approximations.",
          videoUrl: "",
          quizId: "ITMTB_W2_Quiz"
        },
        {
          id: "ITMTB_W1_T9",
          name: "Lesson 2: Properties of the Definite Integral",
          competency: "Assessment Coverage: Section 5.2 (Prescribed Textbook)",
          explanation: "Properties like linearity, additivity over intervals, and reversal of limits simplify integration. For example, $\\int_a^b c\\,dx = c(b-a)$; $\\int_a^b [f(x)+g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$; and $\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$.",
          example: "$\\int_0^1 [4+3x^2]\\,dx = \\int_0^1 4\\,dx + 3\\int_0^1 x^2\\,dx = 4(1) + 3\\left(\\frac{1}{3}\\right) = 5$.",
          studyTip: "Memorize these core properties — they let you break complicated integrals into simpler pieces and avoid unnecessary calculations.",
          videoUrl: "https://www.youtube.com/watch?v=QcHz3h81U-s",
          quizId: "ITMTB_W1_Quiz"
        },
        {
          id: "ITMTB_W1_T10",
          name: "Lesson 2: Comparison Properties and Estimation",
          competency: "Assessment Coverage: Section 5.2 (Prescribed Textbook)",
          explanation: "Comparison properties bound integrals using min and max values. If $m \\leq f(x) \\leq M$ on $[a,b]$, then $m(b-a) \\leq \\int_a^b f(x)\\,dx \\leq M(b-a)$. These are useful for quick estimates without full calculation.",
          example: "For $f(x)=e^{-x^2}$ on $[0,1]$, $m=f(1)=e^{-1}$, $M=f(0)=1$. So $e^{-1} \\leq \\int_0^1 e^{-x^2}\\,dx \\leq 1$, giving $0.367 < \\int_0^1 e^{-x^2}\\,dx < 1$.",
          studyTip: "This property is a fast way to check whether your computed integral is reasonable — especially useful on exams when you're unsure of your arithmetic.",
          videoUrl: "https://www.youtube.com/watch?v=NdwDdXD20P0",
          quizId: "ITMTB_W1_Quiz"
        }
        ]
      },
      {
        id: "ITMTB_W2",
        name: "Week 2",
        title: "Integrals: Concluding Definite Integrals. Introducing Indefinite Integrals and the Net Change Theorem",
        topics: [
          {
            id: "ITMTB_W2_T1",
            name: "Functions Defined as the Definite Integral of Another Function",
            competency: "Assessment Coverage: 5.3 (Prescribed Textbook)",
            explanation: "FTC1 establishes that differentiation and integration are inverse processes. If $g(x) = \\int_{a}^{x} f(t) \\, dt$ where $f$ is continuous, then $g'(x) = f(x)$. The derivative of a definite integral with respect to its upper limit is the integrand evaluated at the upper limit. When the upper limit is a function $u(x)$, apply the Chain Rule: $\\frac{d}{dx} \\int_{a}^{u(x)} f(t) \\, dt = f(u(x)) \\cdot u'(x)$.",
            example: "For a car with velocity $v(t)$, the position function $s(x) = \\int_{0}^{x} v(t) \\, dt$ represents total displacement. FTC1 gives $s'(x) = v(x)$, confirming that the derivative of position is velocity. For the Fresnel function $S(x) = \\int_{0}^{x} \\sin(\\pi t^2/2) \\, dt$, we get $S'(x) = \\sin(\\pi x^2/2)$ instantly.",
            studyTip: "Verbalize: 'The derivative of the integral from a constant to $x$ is the integrand in terms of $x$.' For composite upper limits like $x^4$, remember the Chain Rule: multiply by the derivative of the upper limit. Sketch $f(t)$ and its area function $g(x)$ to visually confirm that $g'(x)$ matches the sign of $f(x)$.",
            videoUrl: "https://youtu.be/aeB5BWY0RlE",
            quizId: "ITMTB_W2_Quiz"
          },
          {
            id: "ITMTB_W2_T2",
            name: "Evaluating Definite Integrals",
            competency: "Assessment Coverage: 5.3 (Prescribed Textbook)",
            explanation: "The Fundamental Theorem of Calculus states that if $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ (meaning $F'(x) = f(x)$), then $\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)$. This provides a simple method for evaluating definite integrals without computing limits of Riemann sums, connecting the area problem directly to antiderivatives.",
            example: "If $v(t)$ is velocity and $s(t)$ is position (antiderivative of velocity), total distance traveled from $t=a$ to $t=b$ is $\\int_{a}^{b} v(t) \\, dt = s(b) - s(a)$. For water flowing into a tank at rate $r(t)$ with volume $V(t)$, change in volume from $t=3$ to $t=6$ is $\\int_{3}^{6} r(t) \\, dt = V(6) - V(3)$.",
            studyTip: "Always verify $f(x)$ is continuous on $[a, b]$ before applying FTC1—discontinuities invalidate the theorem. Use three steps: (1) Find any antiderivative $F(x)$, (2) Evaluate $F(b)$ and $F(a)$, (3) Subtract using notation $F(x)]_{a}^{b}$. Master common antiderivatives with flashcards: $x^n$, $\\sin x$, $\\cos x$, $e^x$, $1/x$.",
            videoUrl: "https://youtu.be/rfG8ce4nNh0",
            quizId: "ITMTB_W2_Quiz"
          },
          {
            id: "ITMTB_W2_T3",
            name: "Indefinite Integrals",
            competency: "Assessment Coverage: 5.4 (Prescribed Textbook)",
            explanation: "The indefinite integral $\\int f(x) \\, dx$ represents the family of all antiderivatives of $f(x)$. If $\\int f(x) \\, dx = F(x)$, then $F'(x) = f(x)$. The general antiderivative includes an arbitrary constant $C$ (constant of integration) since the derivative of a constant is zero. The indefinite integral is a function (or family of functions), distinguished from the definite integral $\\int_{a}^{b} f(x) \\, dx$, which is a number.",
            example: "Velocity to Position: If $v(t)$ is a car's velocity, then $\\int v(t) \\, dt$ gives the position $s(t)$, where $C$ represents initial position. Marginal Cost to Total Cost: If $C'(x)$ is marginal cost, then $\\int C'(x) \\, dx$ gives total cost $C(x)$, where $C$ represents fixed costs. Common formulas: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ (for $n \\neq -1$), $\\int e^x \\, dx = e^x + C$.",
            studyTip: "Memorize the table of core indefinite integral formulas using flashcards—they're the reverse of derivatives. Practice rewriting complex integrands into simpler forms that match table formulas. Always check your answer by differentiating the result to verify you get the original integrand.",
            videoUrl: "https://youtu.be/xaCPDMEkbig",
            quizId: "ITMTB_W2_Quiz"
          },
          {
            id: "ITMTB_W2_T4",
            name: "Definite Integrals and FTC2",
            competency: "Assessment Coverage: 5.4 (Prescribed Textbook)",
            explanation: "FTC2 provides a method for evaluating definite integrals: if $F(x)$ is any antiderivative of continuous function $f(x)$ on $[a,b]$, then $\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)$. The definite integral represents the net area bounded by the graph of $f(x)$, the x-axis, and vertical lines $x=a$ and $x=b$. Areas above the x-axis contribute positively, areas below contribute negatively.",
            example: "Calculating Area: FTC2 allows exact calculation of area under curves. Energy Consumption: If $P(t)$ is power consumption (megawatts) over time, then $\\int_{0}^{24} P(t) \\, dt$ calculates total energy consumed (megawatt-hours) during 24 hours. The integral of power (rate of energy use) is total energy used.",
            studyTip: "Practice the evaluation process: (1) Find antiderivative $F(x)$ (no $C$ needed—it cancels), (2) Evaluate $F(b)$, (3) Evaluate $F(a)$, (4) Subtract $F(b) - F(a)$. Understand net area vs. total area: sketch functions that cross the x-axis. Example: $\\int_{-1}^{1} x^3 \\, dx = 0$ (net area), but total area is positive.",
            videoUrl: "https://youtu.be/ns8N1UuXl4w",
            quizId: "ITMTB_W2_Quiz"          
          },
          {
            id: "ITMTB_W2_T5",
            name: "The Net Change Theorem",
            competency: "Assessment Coverage: 5.4 (Prescribed Textbook)",
            explanation: "The Net Change Theorem is a restatement of FTC2 for rates of change: $\\int_{a}^{b} F'(x) \\, dx = F(b) - F(a)$. The integral of a rate of change $F'(x)$ over $[a,b]$ gives the net change in the original function $F(x)$ between $x=a$ and $x=b$. Net change accounts for both increases and decreases in the quantity $F(x)$.",
            example: "Displacement vs. Distance: If $v(t)$ is velocity, $\\int_{t_1}^{t_2} v(t) \\, dt$ is displacement (net change in position), while $\\int_{t_1}^{t_2} |v(t)| \\, dt$ is total distance traveled. Volume Flow: If $V'(t)$ is water flow rate into a reservoir, $\\int_{t_1}^{t_2} V'(t) \\, dt$ is change in water volume. Population: If $dn/dt$ is population growth rate, $\\int_{t_1}^{t_2} \\frac{dn}{dt} \\, dt$ is net population change.",
            studyTip: "Understand Rate → Net Change: if the integrand is a rate, the integral's value is accumulated amount (net change). Distinguish displacement ($\\int v(t) \\, dt$) from total distance ($\\int |v(t)| \\, dt$)—identify where the rate is negative and split the integral. Always verify units: integral result units = (integrand units) × (variable units). Example: (megawatts) × (hours) = megawatt-hours.",
            videoUrl: "https://youtu.be/GOjde4xOarw",
            quizId: "ITMTB_W2_Quiz"
          }
        ]
      },

 //----------------------------------------------------------------------------------------------------------------------------------------

      {
        id: "ITMTB_W3",
        name: "Week 3",
        title: "Average Value of a Function, Integration by Parts, and Integration by Partial Fractions",
        topics: [

          {
            id: "ITMTB_W3_T1",
            name: "U-Substitution: The Complete Guide",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "When to Use U-Substitution: Look for an integrand that fits one of these patterns: $\\mathbf{(1) A Composite Function:}$ $\\int f(g(x))g'(x)\\,dx$. $\\mathbf{(2) A Quotient}$: Where the numerator is the derivative of the denominator (e.g., $\\int \\frac{g'(x)}{g(x)}\\,dx$). In both cases, you let $\\mathbf{u} = g(x)$, which simplifies the entire integral into a basic power rule or logarithmic form.",
            example: "Example: $\\int 2x(x^2+1)^5\\,dx$. Let $u = x^2+1$, so $du = 2x\\,dx$. The integral becomes $\\int u^5\\,du = \\frac{u^6}{6} + C = \\frac{(x^2+1)^6}{6} + C$.",
            studyTip: "When identifying $u$, look for a function nested inside another or one whose derivative appears elsewhere in the integrand.",
            videoUrl: "https://www.youtube.com/watch?v=sdYdnpYn-1o&t=891s",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T2",
            name: "U-Substitution Explained",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "U-substitution is a change of variable method that simplifies an integral by replacing a complicated inner function with a single variable $u$. It reverses the chain rule from differentiation, turning complex expressions into standard integral forms.",
            example: "Example: $\\int \\sin(3x)\\,dx$. Let $u = 3x$, then $du = 3\\,dx \\Rightarrow dx = \\frac{du}{3}$. Substitute to get $\\frac{1}{3}\\int \\sin(u)\\,du = -\\frac{1}{3}\\cos(u) + C = -\\frac{1}{3}\\cos(3x) + C$.",
            studyTip: "Always change both $dx$ and $x$ terms into $u$ terms before integrating, then substitute back to $x$ at the end.",
            videoUrl: "https://www.youtube.com/watch?v=sci1pls4Lc8",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T3",
            name: "Average Value of a Function on an Interval",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "The average value of a continuous function $f(x)$ over $[a,b]$ is the constant value that produces the same total area as $f(x)$ over that interval. It’s defined by $f_{avg} = \\frac{1}{b-a} \\int_a^b f(x)\\,dx$.",
            example: "Example: Find the average value of $f(x) = x^2$ on $[0,2]$. $f_{avg} = \\frac{1}{2-0}\\int_0^2 x^2\\,dx = \\frac{1}{2}\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{1}{2}\\left(\\frac{8}{3}\\right) = \\frac{4}{3}$.",
            studyTip: "Think of the average value as the ‘height’ of a rectangle with the same area under the curve on $[a,b]$. This helps visualize it as a balancing height.",
            videoUrl: "http://www.youtube.com/watch?v=K-H86pxiBlk",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T4",
            name: "The Mean Value Theorem For Integrals: Average Value of a Function",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "The Mean Value Theorem for Integrals states that if $f$ is continuous on $[a,b]$, then there exists at least one $c$ in $(a,b)$ such that $f(c) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$. This means the function takes on its average value at some point in the interval.",
            example: "Example: For $f(x) = x^2$ on $[0,3]$, $f_{avg} = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3}\\left[\\frac{x^3}{3}\\right]_0^3 = 3$. So $f(c) = 3 \\Rightarrow c^2 = 3 \\Rightarrow c = \\sqrt{3}$.",
            studyTip: "Always check continuity before applying the theorem. The existence of $c$ depends on $f$ being continuous on the entire interval.",
            videoUrl: "http://www.youtube.com/watch?v=56-JCZIkDVU",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T5",
            name: "Integration By Parts",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "Integration by Parts is based on the Product Rule for differentiation. It allows us to integrate products of functions using the formula $\\int u\\,dv = uv - \\int v\\,du$. Choose $u$ and $dv$ such that differentiating $u$ simplifies the expression.",
            example: "Example: $\\int x e^x\\,dx$. Let $u = x$, $dv = e^x dx$. Then $du = dx$, $v = e^x$. Applying the formula: $\\int x e^x\\,dx = x e^x - \\int e^x\\,dx = e^x(x - 1) + C$.",
            studyTip: "Use the LIATE rule to choose $u$: Logarithmic, Inverse trig, Algebraic, Trig, Exponential — in that order of preference.",
            videoUrl: "http://www.youtube.com/watch?v=sWSLLO3DS1I",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T6",
            name: "Integration By Parts (continued)",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "When one application of Integration by Parts still leaves another product, you may need to apply it repeatedly or rearrange to solve for the original integral. This often happens with powers of $x$ and trigonometric or exponential functions.",
            example: "Example: $\\int x^2 e^x\\,dx$. Let $u = x^2$, $dv = e^x dx$. Then $du = 2x\\,dx$, $v = e^x$. So $\\int x^2 e^x\\,dx = x^2 e^x - \\int 2x e^x\\,dx$. Apply integration by parts again on $\\int 2x e^x\\,dx$ to get the final answer $e^x(x^2 - 2x + 2) + C$.",
            studyTip: "If your first integration by parts produces another product, don’t panic—just apply the formula again systematically until the integral simplifies.",
            videoUrl: "http://www.youtube.com/watch?v=zNU8iK8sGD0",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T7",
            name: "Integration by parts, DI method.",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "The DI (Derivative–Integral) method is a shortcut for repeated Integration by Parts. List derivatives of one function (D column) and integrals of the other (I column), then multiply diagonally with alternating signs to find the result.",
            example: "Example: $\\int x^2 e^x\\,dx$. D column: $x^2$, $2x$, $2$, $0$. I column: $e^x$, $e^x$, $e^x$. Multiply diagonally with alternating signs: $x^2 e^x - 2x e^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$.",
            studyTip: "Use DI tables when the derivative column eventually becomes zero — it’s faster and reduces errors compared to repeating the full formula.",
            videoUrl: "http://www.youtube.com/watch?v=2I-_SV8cwsw",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T8",
            name: "Integration By Partial Fractions",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "Partial Fraction Decomposition breaks a rational function into simpler fractions that are easier to integrate. It applies when the numerator’s degree is less than the denominator’s. Each term corresponds to a simpler integral form (logarithmic or arctangent).",
            example: "Example: $\\int \\frac{3x+5}{x^2 - x - 2}\\,dx$. Factor the denominator: $(x-2)(x+1)$. Write $\\frac{3x+5}{x^2 - x - 2} = \\frac{A}{x-2} + \\frac{B}{x+1}$. Solving gives $A=\\frac{11}{3}$, $B=-2$. Integrate each term to get $\\frac{11}{3}\\ln|x-2| - 2\\ln|x+1| + C$.",
            studyTip: "Always factor the denominator completely before decomposing. Check the degree of the numerator — if it’s not smaller, perform polynomial long division first.",
            videoUrl: "http://www.youtube.com/watch?v=6rXByMcuAyI",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T9",
            name: "Integration By Partial Fractions (Heaviside Cover-Up Method)",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "The Heaviside Cover-Up Method provides a quick way to find coefficients in partial fractions when the denominator factors into distinct linear terms. You 'cover up' each factor and substitute its root to find its corresponding coefficient.",
            example: "Example: Decompose $\\frac{5x+3}{(x-1)(x+2)}$. Cover $(x-1)$: set $x=1$, giving $A = \\frac{5(1)+3}{1+2} = \\frac{8}{3}$. Cover $(x+2)$: set $x=-2$, giving $B = \\frac{5(-2)+3}{-2-1} = \\frac{-7}{-3} = \\frac{7}{3}$. So $\\frac{5x+3}{(x-1)(x+2)} = \\frac{8/3}{x-1} + \\frac{7/3}{x+2}$.",
            studyTip: "This method only works for non-repeated linear factors — use algebraic methods for repeated or quadratic factors.",
            videoUrl: "http://www.youtube.com/watch?v=aF4o_c46VnI",
            quizId: "ITMTB_W3_Quiz"
          },

          {
            id: "ITMTB_W3_T10",
            name: "Process of Setting Up and Solving Integrals Using Partial Fractions.",
            competency: "Assessment Coverage: 6 (Prescribed Textbook)",
            explanation: "The general process: (1) Check if the numerator’s degree is less than the denominator’s. If not, perform long division. (2) Factor the denominator completely. (3) Decompose into partial fractions. (4) Solve for unknown constants. (5) Integrate each simpler term individually.",
            example: "Example: $\\int \\frac{x^2 + 3x + 2}{x^3 - x}\\,dx = \\int \\frac{x^2 + 3x + 2}{x(x-1)(x+1)}\\,dx$. Decompose as $\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+1}$. Solving gives $A=2$, $B=1$, $C=0$. Integrate to get $2\\ln|x| + \\ln|x-1| + C$.",
            studyTip: "Write out each step carefully. The accuracy of your decomposition determines how easy your integration will be — errors in constants can cascade.",
            videoUrl: "http://www.youtube.com/watch?v=Mt92Ozs7aJg",
            quizId: "ITMTB_W3_Quiz"
          }

        ]
      },

//----------------------------------------------------------------------------------------------------------------------------------------

      {
        id: "ITMTB_W4",
        name: "Week 4",
        title: "Techniques and Applications of Integration",
        topics: [
          {
            id: "ITMTB_W4_T1",
            name: "Lesson 1: Area Between Curves",
            competency: "Assessment Coverage: MyLMS 9.1",
            explanation: "This lesson covers how to find the area enclosed between two curves. The key idea is that area is the integral of the vertical (or horizontal) distance between the curves. If $y = f(x)$ lies above $y = g(x)$ over an interval $[a, b]$, then the area is given by $A = \\int_a^b [f(x) - g(x)]\\,dx$. When the region is better described by horizontal slices, we integrate with respect to $y$: $A = \\int_c^d [f(y) - g(y)]\\,dy$.",
            example: "Example 1 (with respect to $x$): Find the area bounded by $y = x^2$ and $y = 2x$ between $x = 0$ and $x = 2$. Here, the upper curve is $y = 2x$ and the lower is $y = x^2$. Thus, \n\n$A = \\int_0^2 (2x - x^2)\\,dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}.$\n\nExample 2 (with respect to $y$): Find the area between $x = y^2$ and $x = y + 2$. Intersections occur when $y^2 = y + 2 \\Rightarrow y = -1, 2$. For $-1 \\le y \\le 2$, the right curve is $x = y + 2$, and the left curve is $x = y^2$. So \n\n$A = \\int_{-1}^2 [(y + 2) - y^2]\\,dy = [\\tfrac{1}{2}y^2 + 2y - \\tfrac{1}{3}y^3]_{-1}^2 = \\tfrac{9}{2}.$",
            studyTip: "Always sketch the curves first to see which one is on top (or right). Find intersection points to determine limits of integration. Remember: area must be positive — if your integral gives a negative number, take the absolute value.",
            videoUrl: "https://youtu.be/kgg5Rspf1Js",
            quizId: "ITMTB_W4_Quiz"
          },
          {
            id: "ITMTB_W4_T2",
            name: "Lesson 2: Average Value of a Function",
            competency: "Assessment Coverage: 6.5 (Prescribed Textbook)",
            explanation: "The average value of a continuous function $f(x)$ on $[a, b]$ represents the constant value that would give the same area under the curve as $f(x)$ itself. It is defined as \n\n$f_{avg} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx.$\n\nThe Mean Value Theorem for Integrals states that if $f$ is continuous on $[a, b]$, then there exists at least one $c \\in (a, b)$ such that $f(c) = f_{avg}$. In other words, somewhere on the interval, the function actually takes on its average value.",
            example: "Example 1: Find the average value of $f(x) = 3x^2$ on $[0, 2]$.\n\n$f_{avg} = \\frac{1}{2 - 0} \\int_0^2 3x^2\\,dx = \\tfrac{1}{2}[x^3]_0^2 = \\tfrac{1}{2}(8) = 4.$\n\nExample 2 (Mean Value Theorem): For $f(x) = 3x^2$ on $[0, 2]$, we have $f_{avg} = 4$. Find $c$ such that $f(c) = 4 \\Rightarrow 3c^2 = 4 \\Rightarrow c = \\sqrt{\\tfrac{4}{3}} \\approx 1.155.$\n\nThus, at $x \\approx 1.155$, $f(x)$ equals its average value.\n\nExample: Find the average value of $f(x) = x^2$ on $[0,2]$. \n\n$f_{avg} = \\frac{1}{2-0}\\int_0^2 x^2\\,dx = \\frac{1}{2}\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{1}{2}\\left(\\frac{8}{3}\\right) = \\frac{4}{3}.$",
            studyTip: "Think of $f_{avg}$ as the 'height' of a rectangle whose area equals the area under $f(x)$. For continuous functions, this average always exists and is guaranteed by the Mean Value Theorem for Integrals.",
            videoUrl: "https://youtu.be/K-H86pxiBlk",
            quizId: "ITMTB_W4_Quiz"
          },
          {
            id: "ITMTB_W4_T3",
            name: "Lesson 3: Integration by Parts",
            competency: "Assessment Coverage: 7.1 (Prescribed Textbook)",
            explanation: "Integration by parts is derived from the product rule for differentiation: $\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$. Integrating both sides gives the formula \n\n$\\int u\\,dv = uv - \\int v\\,du.$\n\nIt is used when the integrand is a product of two functions, one that becomes simpler upon differentiation and one that is easy to integrate.\n\nWhen applied to definite integrals, the formula becomes \n\n$\\int_a^b u\\,dv = [uv]_a^b - \\int_a^b v\\,du.$\n\nSometimes, integration by parts must be repeated or rearranged to solve for the original integral (cyclic cases).",
            example: "Example 1: $\\int x e^x\\,dx$. Choose $u = x$ (so $du = dx$) and $dv = e^x\\,dx$ (so $v = e^x$). Then\n\n$\\int x e^x\\,dx = x e^x - \\int e^x\\,dx = e^x(x - 1) + C.$\n\nExample 2 (Definite Integral): $\\int_0^{\\pi/2} x\\sin x\\,dx$. Let $u = x$, $dv = \\sin x\\,dx$. Then $du = dx$, $v = -\\cos x$. So \n\n$\\int_0^{\\pi/2} x\\sin x\\,dx = [-x\\cos x]_0^{\\pi/2} + \\int_0^{\\pi/2} \\cos x\\,dx = (0 - 0) + [\\sin x]_0^{\\pi/2} = 1.$\n\nAnother example: $\\int 2x(x^2+1)^5\\,dx$. Let $u = x^2+1$, so $du = 2x\\,dx$. The integral becomes $\\int u^5\\,du = \\frac{u^6}{6} + C = \\frac{(x^2+1)^6}{6} + C.$\n\n$\\int \\sin(3x)\\,dx$: Let $u = 3x$, then $du = 3\\,dx \\Rightarrow dx = \\frac{du}{3}$. Substitute to get $\\frac{1}{3}\\int \\sin(u)\\,du = -\\frac{1}{3}\\cos(u) + C = -\\frac{1}{3}\\cos(3x) + C.$",
            studyTip: "Use the LIATE rule (Logarithmic, Inverse Trig, Algebraic, Trig, Exponential) to choose $u$. Always check if the result after applying integration by parts simplifies the problem — if not, try swapping $u$ and $dv$.",
            videoUrl: "https://youtu.be/sWSLLO3DS1I",
            quizId: "ITMTB_W4_Quiz"
          },
          {
            id: "ITMTB_W4_T4",
            name: "Lesson 4: Integration of Rational Functions by Partial Fractions",
            competency: "Assessment Coverage: 7.4 (Prescribed Textbook)",
            explanation: "To integrate a rational function $\\frac{P(x)}{Q(x)}$, first ensure the degree of the numerator is less than that of the denominator. If not, use polynomial long division. Then factor the denominator $Q(x)$ into linear and/or irreducible quadratic factors and express the fraction as a sum of simpler 'partial fractions'. Each term is integrated separately.\n\nCommon decomposition forms:\n1. Distinct linear factors: $\\frac{A}{x−a} + \\frac{B}{x−b}$\n2. Repeated linear factors: $\\frac{A}{x−a} + \\frac{B}{(x−a)^2} + …$\n3. Irreducible quadratic factors: $\\frac{Ax + B}{x^2 + px + q}$\n\nAfter finding the constants ($A$, $B$, …) via substitution or comparison, integrate each term using standard logarithmic or arctangent formulas.",
            example: "Example 1: $\\int \\frac{2x + 3}{x^2 + x - 2}\\,dx$. Factor denominator: $x^2 + x - 2 = (x + 2)(x - 1)$. Decompose: \n\n$\\frac{2x + 3}{(x + 2)(x - 1)} = \\frac{A}{x + 2} + \\frac{B}{x - 1}.$\n\nSolve for $A$ and $B$: $2x + 3 = A(x - 1) + B(x + 2)$ → $A = 1$, $B = 1$. So integral $= \\int \\left(\\frac{1}{x + 2} + \\frac{1}{x - 1}\\right)dx = \\ln|x + 2| + \\ln|x - 1| + C.$\n\nExample 2 (Improper Rational Function): $\\int \\frac{x^2 + x + 1}{x - 1}\\,dx = \\int (x + 2) + \\frac{3}{x - 1}\\,dx = \\tfrac{1}{2}x^2 + 2x + 3\\ln|x - 1| + C.$",
            studyTip: "Always check if the fraction is proper before decomposing. For distinct linear factors, the cover-up method quickly finds constants. For quadratic factors, remember $\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) + C.$",
            videoUrl: "https://youtu.be/UBaDS1Sc7qM",
            quizId: "ITMTB_W4_Quiz"
          }
        ]
      },
      {
        id: "ITMTB_W5",
        name: "Week 5",
        title: "Volumes, Arc Length, and Surface Area",
        topics: [
          {
            id: "ITMTB_W5_T1",
            name: "Lesson 1: Volumes of Solids of Revolution (Disk and Washer Methods)",
            competency: "Assessment Coverage: MyLMS 10.1",
            explanation: "When a region in the plane is rotated around a line (axis of rotation), it generates a 3D solid. The volume of this solid can be found using integration. The **disk method** applies when the solid has no hole, while the **washer method** is used when there is a hollow region in the center.",
            example: "Example (Disk Method): Find the volume formed by rotating the curve $y = x^2$ around the x-axis for $0 \\le x \\le 1$. Using the disk method, each cross-section is a disk with radius $y = x^2$. So, \n\n$V = \\int_0^1 \\pi [f(x)]^2 dx = \\pi \\int_0^1 (x^2)^2 dx = \\pi \\int_0^1 x^4 dx = \\pi [\\tfrac{x^5}{5}]_0^1 = \\tfrac{\\pi}{5}.$\n\nExample (Washer Method): The region between $y = \\sqrt{x}$ and $y = x$ from $x = 0$ to $x = 1$ is revolved around the x-axis. \n\n$V = \\pi \\int_0^1 [(\\sqrt{x})^2 - (x)^2] dx = \\pi \\int_0^1 (x - x^2) dx = \\pi [\\tfrac{x^2}{2} - \\tfrac{x^3}{3}]_0^1 = \\tfrac{\\pi}{6}.$",
            studyTip: "Always sketch the region and axis of rotation first! Decide whether to use the disk or washer method depending on whether the solid has a hole (washer) or not (disk).",
            videoUrl: "https://www.youtube.com/watch?v=qzj17dEMkyg",
            quizId: "ITMTB_W5_Quiz"
          },
          {
            id: "ITMTB_W5_T1.2",
            name: "Lesson 1: Volumes of Solids of Revolution (Continued)",
            competency: "Assessment Coverage: MyLMS 10.1",
            explanation: "",
            example: "",
            studyTip: "",
            videoUrl: "https://youtu.be/KozIM2VMFPI",
            quizId: "ITMTB_W5_Quiz"
          },
          {
            id: "ITMTB_W5_T2",
            name: "Lesson 2: Volumes of Solids of Revolution (Cylindrical Shells)",
            competency: "Assessment Coverage: MyLMS 11.1",
            explanation: "The **cylindrical shells method** is used when integrating **perpendicular** to the axis of rotation. Each shell has radius $r$, height $h$, and thickness $dx$ or $dy$. The volume of each shell is $2\\pi r h$, and the total volume is found by integration. For rotation about the y-axis: $V = \\int_a^b 2\\pi x f(x) dx$. For rotation about the x-axis: $V = \\int_c^d 2\\pi y g(y) dy$.",
            example: "Example: Find the volume formed when the region under $y = x^2$ from $x = 0$ to $x = 1$ is rotated about the y-axis.\n\nUsing shells: $V = \\int_0^1 2\\pi x f(x) dx = 2\\pi \\int_0^1 x(x^2) dx = 2\\pi \\int_0^1 x^3 dx = 2\\pi [\\tfrac{x^4}{4}]_0^1 = \\tfrac{\\pi}{2}.$",
            studyTip: "Use the shell method when rotating **around the opposite axis** (e.g., function in terms of $x$ rotated around the y-axis). It often simplifies the setup when the other methods become complicated.",
            videoUrl: "https://youtu.be/D5sT1br9soI?si=XiwPT4LnPil_YTvH",
            quizId: "ITMTB_W5_Quiz"
          },
          {
            id: "ITMTB_W5_T3",
            name: "Lesson 3: Arc Length",
            competency: "Assessment Coverage: 8.1 (Prescribed Textbook)",
            explanation: "The **arc length** of a smooth curve $y = f(x)$ from $x = a$ to $x = b$ is the total distance along the curve. Starting from a polygonal approximation and taking the limit, we get the formula:\n\n$L = \\int_a^b \\sqrt{1 + [f'(x)]^2} dx.$\n\nIf the curve is given by $x = g(y)$, then $L = \\int_c^d \\sqrt{1 + [g'(y)]^2} dy.$\n\nBecause these integrals can be hard to evaluate, numerical methods such as Simpson’s Rule are sometimes used.",
            example: "Example: Find the length of the curve $y = \\tfrac{1}{3}x^{3/2}$ from $x = 0$ to $x = 4$.\n\nWe have $f'(x) = \\tfrac{1}{2}x^{1/2}$. So \n\n$L = \\int_0^4 \\sqrt{1 + (\\tfrac{1}{2}x^{1/2})^2} dx = \\int_0^4 \\sqrt{1 + \\tfrac{x}{4}} dx.$\n\nLet $u = 1 + \\tfrac{x}{4}$, so $du = \\tfrac{1}{4}dx$ → $dx = 4du$. Then\n\n$L = 4 \\int_1^2 \\sqrt{u} du = 4[\\tfrac{2}{3}u^{3/2}]_1^2 = \\tfrac{8}{3}(2\\sqrt{2} - 1).$",
            studyTip: "Memorize the formula $L = \\int \\sqrt{1 + (f'(x))^2}\\,dx$. To reduce errors, always compute $f'(x)$ separately and square it before substitution.",
            videoUrl: "https://youtu.be/DNDAwWIL5FY?si=_WSV5oGdFjOB8XyM",
            quizId: "ITMTB_W5_Quiz"
          },
          {
            id: "ITMTB_W5_T3.1",
            name: "Lesson 3: Arc Length (Continued)",
            competency: "Assessment Coverage: 8.1 (Prescribed Textbook)",
            explanation: "",
            example: "",
            studyTip: "",
            videoUrl: "https://www.youtube.com/watch?v=PK7HZiFG_VI",
            quizId: "ITMTB_W5_Quiz"
          },
          {
            id: "ITMTB_W5_T4",
            name: "Lesson 4: Area of a Surface of Revolution",
            competency: "Assessment Coverage: 8.2 (Prescribed Textbook)",
            explanation: "The **surface area** of a solid formed by rotating a curve about an axis is found by summing the areas of small bands generated by the curve’s rotation. For rotation about the x-axis, if $y = f(x)$, then:\n\n$S = \\int_a^b 2\\pi f(x) \\sqrt{1 + [f'(x)]^2} dx.$\n\nFor rotation about the y-axis (if $x = g(y)$):\n\n$S = \\int_c^d 2\\pi g(y) \\sqrt{1 + [g'(y)]^2} dy.$",
            example: "Example: Find the surface area generated by rotating $y = \\sqrt{x}$ about the x-axis for $0 \\le x \\le 4$.\n\nWe have $f'(x) = \\tfrac{1}{2\\sqrt{x}}$. Then\n\n$S = \\int_0^4 2\\pi f(x) \\sqrt{1 + [f'(x)]^2} dx = 2\\pi \\int_0^4 \\sqrt{x} \\sqrt{1 + \\tfrac{1}{4x}} dx.$\n\nSimplify inside the square root: $\\sqrt{1 + \\tfrac{1}{4x}} = \\tfrac{\\sqrt{4x + 1}}{2\\sqrt{x}}$, giving\n\n$S = \\pi \\int_0^4 \\sqrt{4x + 1} dx = \\pi [\\tfrac{(4x + 1)^{3/2}}{6}]_0^4 = \\tfrac{\\pi}{6}[(17)^{3/2} - 1].$",
            studyTip: "Surface area formulas are similar to arc length formulas—just multiply by $2\\pi$ times the radius ($f(x)$ or $g(y)$). Always check which axis the rotation occurs around.",
            videoUrl: "https://www.youtube.com/watch?v=lQM-0Nqs9Pg",
            quizId: "ITMTB_W5_Quiz"
          },
          {
            id: "ITMTB_W5_T4",
            name: "Lesson 4: Area of a Surface of Revolution (Continued)",
            competency: "Assessment Coverage: 8.2 (Prescribed Textbook)",
            explanation: "",
            example: "",
            studyTip: "",
            videoUrl: "https://youtu.be/L36Nu16FXZw",
            quizId: "ITMTB_W5_Quiz"
          }
        ]
      },

//Week 6: The Primary Template -----------------------------------------------------------------------------------------------------------------

      {
        id: "ITMTB_W6",
        name: "Week 6",
        title: "Continuation: Calculating Arc Length and Surface Area of Revolution",
        topics: [
              {
                id: "ITMTB_W6_T1",
                name: "Lesson 1: Arc Length — Definition & Basic Formula",
                competency: "Assessment Coverage: 8.1 (Arc length definition & basic formula)",
                explanation: "The **arc length** measures the distance along a smooth curve between two points. For a function $y = f(x)$ with a continuous derivative on $[a,b]$, we divide the curve into many small line segments and take the limit as the segment lengths approach zero. The resulting integral is the arc length formula:\n\n$$L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dx.$$",
                example: "Example: Find the arc length of $y = \\tfrac{1}{3}x^{3/2}$ on $[1,4]$.\n\n1. Derivative: $\\dfrac{dy}{dx} = \\tfrac{1}{2}x^{1/2}$.\n2. Square it: $[\\dfrac{dy}{dx}]^2 = \\tfrac{1}{4}x$.\n3. Substitute into the formula: $L = \\int_1^4 \\sqrt{1 + \\tfrac{1}{4}x}\\,dx$.\n4. Let $u = 4 + x$ (or integrate directly): $L = \\tfrac{1}{2}\\int_{5}^{8} u^{1/2}\\,du = \\tfrac{1}{3}(8^{3/2} - 5^{3/2})$.\n\nApproximation: $L \\approx 3.82.$",
                studyTip: "Follow this 3-step process every time: (1) find $f'(x)$, (2) form $\\sqrt{1 + [f'(x)]^2}$, (3) integrate or approximate. If the expression inside the square root simplifies to a perfect square, the integral becomes much easier.",
                videoUrl: "https://www.youtube.com/watch?v=DNDAwWIL5FY",
                quizId: "ITMTB_W6_Quiz"
              },
              {
                id: "ITMTB_W6_T2",
                name: "Lesson 2: Arc Length — Derivation, Functions of y, and Arc-Length Functions",
                competency: "Assessment Coverage: 8.1 (Derivation, x- and y-forms, arc-length function)",
                explanation: "The arc length formula is derived by approximating a curve with straight segments. Using the distance formula $|P_{i-1}P_i| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$ and applying the Mean Value Theorem ($\\Delta y \\approx f'(x_i^*)\\Delta x$), we take the limit to obtain:\n\n$$L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx.$$ \n\nFor curves written as $x = g(y)$ on $[c,d]$:\n\n$$L = \\int_c^d \\sqrt{1 + [g'(y)]^2}\\,dy = \\int_c^d \\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2}\\,dy.$$ \n\nThe **arc-length function** from a fixed start point $a$ to a variable $x$ is defined by\n\n$$s(x) = \\int_a^x \\sqrt{1 + [f'(t)]^2}\\,dt, \\quad \\text{so that} \\quad \\frac{ds}{dx} = \\sqrt{1 + [f'(x)]^2}.$$",
                example: "Example: Given $f(x) = x^2 - \\tfrac{1}{8}\\ln x$ with start point $x = 1$.\n\n1. Compute $f'(x) = 2x - \\tfrac{1}{8x}$.\n2. Simplify: $1 + [f'(x)]^2 = (2x + \\tfrac{1}{8x})^2$ (a perfect square!).\n3. Then $\\sqrt{1 + [f'(x)]^2} = 2x + \\tfrac{1}{8x}$.\n4. Integrate: $s(x) = \\int_1^x (2t + \\tfrac{1}{8t})\\,dt = x^2 + \\tfrac{1}{8}\\ln x - 1.$\n\nThis gives an explicit arc-length function for any $x \\ge 1.$",
                studyTip: "Look for algebraic simplifications in $1 + [f'(x)]^2$. If it becomes a perfect square, integration is simple. If not, use substitution or numerical methods (e.g. Simpson’s Rule).",
                videoUrl: "https://youtu.be/yfJB4n-IzBE",
                quizId: "ITMTB_W6_Quiz"
              },
              {
                id: "ITMTB_W6_T3",
                name: "Lesson 3: Surface Area of a Revolution — Definition & Formula",
                competency: "Assessment Coverage: 8.2, Week 6 (Surface area definitions & derivation for rotation about axes)",
                explanation: "A **surface of revolution** is formed when a curve is revolved about an axis (usually the x- or y-axis). By rotating each small segment, we generate a frustum (a thin band). Summing these and taking the limit gives the surface area formula.\n\nFor a nonnegative $y = f(x)$ on $[a,b]$ rotated about the x-axis:\n\n$$S = \\int_a^b 2\\pi f(x) \\sqrt{1 + [f'(x)]^2}\\,dx.$$ \n\nFor rotation about the y-axis (or if $x = g(y)$):\n\n$$S = \\int_c^d 2\\pi g(y) \\sqrt{1 + [g'(y)]^2}\\,dy.$$",
                example: "Example: Find the surface area when $y = x^3$ is rotated about the x-axis for $0 \\le x \\le 2$.\n\n1. $y = x^3$, so $y' = 3x^2$ and $(y')^2 = 9x^4$.\n2. Setup: $S = \\int_0^2 2\\pi x^3 \\sqrt{1 + 9x^4}\\,dx$.\n3. Let $u = 1 + 9x^4$, then $du = 36x^3\\,dx$.\n4. Substituting gives $S = \\dfrac{\\pi}{18} \\int_1^{145} u^{1/2}\\,du = \\dfrac{\\pi}{27}(145^{3/2} - 1).$",
                studyTip: "Choose to integrate with respect to the variable that simplifies the expression. If the radius is naturally $y$, use $dx$; if it’s $x$, use $dy$. Look for substitutions where $du$ matches the polynomial under the square root.",
                videoUrl: "https://youtu.be/zUzan1Ma9nE",
                quizId: "ITMTB_W6_Quiz"
              },
              {
                id: "ITMTB_W6_T4",
                name: "Lesson 4: Surface Area — Worked Methods, Axis Choices & Numerical Approaches",
                competency: "Assessment Coverage: 8.2 (Multiple methods for rotation, frustum derivation, numerical approximation)",
                explanation: "Surface-area problems can be solved in more than one way — by integrating with respect to $x$ or $y$. The general mnemonic is:\n\n$$S = \\int 2\\pi (\\text{radius})\\,ds,$$ \n\nwhere $ds = \\sqrt{1 + (dy/dx)^2}\\,dx$ or $ds = \\sqrt{1 + (dx/dy)^2}\\,dy$. Some integrals can be evaluated exactly; others require numerical methods.",
                example: "Example: Find the area generated by rotating $y = x^2$ from $x = 1$ to $x = 2$ about the y-axis.\n\n**Method A (integrate w.r.t. $x$):**\n\n$S = \\int_1^2 2\\pi x \\sqrt{1 + (2x)^2}\\,dx = 2\\pi \\int_1^2 x\\sqrt{1 + 4x^2}\\,dx.$\n\nLet $u = 1 + 4x^2$, $du = 8x\\,dx$.\n\n**Method B (integrate w.r.t. $y$):**\n\n$x = \\sqrt{y}$, so for $x:1\\to2$, $y:1\\to4$.\n\n$S = \\int_1^4 2\\pi x \\sqrt{1 + (\\tfrac{dx}{dy})^2}\\,dy = 2\\pi \\int_1^4 \\sqrt{y}\\sqrt{1 + \\tfrac{1}{4y}}\\,dy.$\n\nBoth methods yield the same numerical value when computed correctly.",
                studyTip: "Try both $x$- and $y$-integrals to check your setup—they must agree. For complicated integrals (e.g. $y = e^x$ on $[0,1]$ rotated about the x-axis), use numerical integration (e.g. Simpson’s Rule).",
                videoUrl: "https://www.youtube.com/watch?v=lQM-0Nqs9Pg",
                quizId: "ITMTB_W6_Quiz"
              }
        ]
      },
      {
        id: "ITMTB_W7",
        name: "Week 7",
        title: "Methods of Solving First-Order Differential Equations",
        topics: [
              {
                id: "ITMTB_W7_T1",
                name: "Lesson 1: General First-Order Linear Differential Equations",
                ompetency: "Assessment Coverage: MyLMS 14.1",
                explanation: "A **first-order linear differential equation** is an equation of the form\n\n$$\\frac{dy}{dx} + P(x)y = Q(x),$$\n\nwhere $P(x)$ and $Q(x)$ are known functions of $x$. These equations are called *linear* because $y$ and $\\dfrac{dy}{dx}$ appear only to the first power. To solve such equations, we use the **method of integrating factors (I.F.)**.\n\n**Solution Steps:**\n1. Identify $P(x)$ and $Q(x)$ by comparing with the standard form.\n2. Compute the integrating factor:\n\n$$I(x) = e^{\\int P(x)\\,dx}.$$\n\n3. Multiply the whole equation by $I(x)$ to make the left-hand side an exact derivative:\n\n$$\\frac{d}{dx}[I(x)y] = I(x)Q(x).$$\n\n4. Integrate both sides with respect to $x$:\n\n$$I(x)y = \\int I(x)Q(x)\\,dx + C.$$\n\n5. Solve for $y$:\n\n$$y = \\frac{1}{I(x)}\\left(\\int I(x)Q(x)\\,dx + C\\right).$$",
                example: "Example: Solve $\\dfrac{dy}{dx} + 2y = e^{-x}.$\n\n1. Identify: $P(x) = 2$, $Q(x) = e^{-x}$.\n2. Compute I.F.: $I(x) = e^{\\int 2\\,dx} = e^{2x}$.\n3. Multiply through by $e^{2x}$:\n\n$$e^{2x}\\frac{dy}{dx} + 2e^{2x}y = e^{x}.$$\n\n4. Recognize the left-hand side as a derivative:\n\n$$\\frac{d}{dx}(e^{2x}y) = e^{x}.$$\n\n5. Integrate both sides:\n\n$$e^{2x}y = e^{x} + C.$$\n\n6. Solve for $y$:\n\n$$y = e^{-x} + Ce^{-2x}.$$",
                studyTip: "Always check that your differential equation is in standard form $\\frac{dy}{dx} + P(x)y = Q(x)$ before starting. This ensures that $P(x)$ and $Q(x)$ are identified correctly for the integrating factor.",
                videoUrl: "https://youtu.be/gd1FYn86P0c",
                quizId: "ITMTB_W7_Quiz"
              },
              {
                id: "ITMTB_W7_T1",
                name: "Lesson 1: General First-Order Linear Differential Equations (Continued)",
                ompetency: "Assessment Coverage: MyLMS 14.1",
                explanation: "",
                example: "",
                studyTip: "",
                videoUrl: "https://youtu.be/v5C0CtRAK10",
                quizId: "ITMTB_W7_Quiz"
              },
              {
                id: "ITMTB_W7_T2",
                name: "Lesson 2: Applications of First-Order Linear Equations",
                competency: "Assessment Coverage: MyLMS 14.1",
                explanation: "First-order linear equations frequently model real-world phenomena where a quantity changes at a rate proportional to itself or to an external influence.\n\n**Common Applications:**\n\n(a) **Radioactive Decay**\n\n$$\\frac{dN}{dt} + \\lambda N = 0,$$\n\nwhere $N$ is the number of radioactive atoms and $\\lambda$ is the decay constant.\n\n(b) **Newton’s Law of Cooling**\n\n$$\\frac{dT}{dt} + k(T - T_a) = 0,$$\n\nwhere $T$ is the temperature of the object, $T_a$ is the ambient temperature, and $k$ is the cooling rate.\n\n(c) **RL Circuits**\n\n$$L\\frac{dI}{dt} + RI = E,$$\n\nwhere $I$ is current, $R$ is resistance, $L$ is inductance, and $E$ is applied voltage.",
                example: "Example: Radioactive Decay.\n\n$$\\frac{dN}{dt} + \\lambda N = 0.$$\n\n1. Separate variables: $\\frac{dN}{N} = -\\lambda\\,dt.$\n2. Integrate: $\\ln|N| = -\\lambda t + C.$\n3. Exponentiate: $N = N_0 e^{-\\lambda t}.$\n\nThis shows that the quantity of radioactive material decreases exponentially over time.",
                studyTip: "For application problems, identify the constants (like $k$, $\\lambda$, or $R/L$) and what they represent physically. It helps you check if your final formula makes sense (e.g., decays, cooling, or current flow).",
                videoUrl: "https://www.youtube.com/watch?v=b53nhCEXlGI",
                quizId: "ITMTB_W7_Quiz"
              },
              {
                id: "ITMTB_W7_T2",
                name: "Lesson 2: Applications of First-Order Linear Equations (Continued)",
                ompetency: "Assessment Coverage: MyLMS 14.1",
                explanation: "",
                example: "",
                studyTip: "",
                videoUrl: "https://www.youtube.com/watch?v=_bAjWNsNrQA",
                quizId: "ITMTB_W7_Quiz"
              },
              {
                id: "ITMTB_W7_T2",
                name: "Lesson 2: Applications of First-Order Linear Equations (Continued)",
                ompetency: "Assessment Coverage: MyLMS 14.1",
                explanation: "",
                example: "",
                studyTip: "",
                videoUrl: "https://www.youtube.com/watch?v=zsOQ4lbeiWI",
                quizId: "ITMTB_W7_Quiz"
              },
              {
                id: "ITMTB_W7_T3",
                name: "Lesson 3: Separable Differential Equations — Definition & General Solution",
                competency: "Assessment Coverage: MyLMS 14.1",
                explanation: "A **separable differential equation** is a first-order equation that can be written as:\n\n$$\\frac{dy}{dx} = g(x)h(y),$$\n\nwhere $g(x)$ is a function of $x$ only and $h(y)$ is a function of $y$ only. These equations are *separable* because the variables can be separated to opposite sides of the equation, allowing direct integration.",
                example: "Example 1: Solve $\\dfrac{dy}{dx} = xy.$\n\n1. Rewrite in separable form: $\\dfrac{dy}{y} = x\\,dx.$\n2. Integrate both sides:\n\n$$\\int \\frac{1}{y}\\,dy = \\int x\\,dx.$$ \n\n3. Simplify: $\\ln|y| = \\dfrac{x^2}{2} + C.$\n4. Exponentiate both sides: $y = Ce^{x^2/2}.$",
                studyTip: "Always rearrange carefully to isolate $dy$ and $dx$. Once the variables are separated, integration is straightforward — but mixing $x$ and $y$ terms is a common source of errors.",
                videoUrl: "http://www.youtube.com/watch?v=C7nuJcJriWM",
                quizId: "ITMTB_W7_Quiz"
              },
              {
                id: "ITMTB_W7_T4",
                name: "Lesson 4: Separable Equations — Initial Conditions & Applied Problems",
                competency: "Assessment Coverage: MyLMS 14.1",
                explanation: "This part applies the separable-equation method to problems that include **initial conditions** or practical scenarios. An initial condition like $y(x_0) = y_0$ allows determination of the constant $C$, giving a *particular solution* instead of a general one.",
                example: "Example 2: Solve $\\dfrac{dy}{dx} = x$, with $y(1) = 2.$\n\n1. Integrate directly: $\\int dy = \\int x\\,dx.$\n2. Simplify: $y = \\dfrac{x^2}{2} + C.$\n3. Apply initial condition: $2 = \\dfrac{1}{2} + C \\Rightarrow C = \\dfrac{3}{2}.$\n4. Hence, $y = \\dfrac{x^2}{2} + \\dfrac{3}{2}.$\n\nThis satisfies $y(1) = 2.$",
                studyTip: "When using an initial condition, substitute it right after integration. This reduces mistakes and helps interpret the physical meaning of $C$ (e.g., initial population, temperature, or voltage).",
                videoUrl: "https://www.youtube.com/watch?v=kwGukY_2qWQ",
                quizId: "ITMTB_W7_Quiz"
              }
        ]
      }
    ]
  }
];