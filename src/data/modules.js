export const modules = [
  {
    id: "ITMTA",
    name: "ITMTA",
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
            videoUrl: "https://www.youtube.com/watch?v=1x0rdY-uW94",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T2",
            name: "Domain and Range",
            competency: "AC 1.2",
            explanation: "Domain: all possible inputs. Range: all possible outputs. For $f(x) = \\sqrt{x}$, domain is $x \\geq 0$, range is $y \\geq 0$.",
            example: "Find domain and range of $f(x) = \\frac{1}{x-2}$. Domain: $x \\neq 2$, Range: $y \\neq 0$.",
            studyTip: "Remember: 'D goes with x, R goes with y.'",
            videoUrl: "https://www.youtube.com/watch?v=TyV0N02v6lA",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T3",
            name: "Vertical Line Test",
            competency: "AC 1.3",
            explanation: "A graph is a function if no vertical line intersects it more than once. A circle ($x^2 + y^2 = 1$) fails this test.",
            example: "Does $y = x^2$ pass the vertical line test? Yes, it’s a function.",
            studyTip: "Mnemonic: 'One x, one y.'",
            videoUrl: "https://www.youtube.com/watch?v=EPBWO4DIA0U",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T4",
            name: "Symmetries",
            competency: "AC 1.4",
            explanation: "Even functions: $f(-x) = f(x)$ (y-axis symmetry, e.g., $x^2$). Odd functions: $f(-x) = -f(x)$ (origin symmetry, e.g., $x^3$).",
            example: "Is $f(x) = x^2$ even or odd? Even, since $f(-x) = f(x)$.",
            studyTip: "Even → mirror on y-axis, Odd → rotate 180°.",
            videoUrl: "https://www.youtube.com/watch?v=5q_3RuhWArA",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T5",
            name: "Types of Functions",
            competency: "AC 1.5",
            explanation: "Learn linear (line), quadratic (parabola), exponential (rapid growth), logarithmic (slow growth), piecewise (split rules). Know their graphs and properties.",
            example: "Sketch $f(x) = x^2$ and identify vertex, intercepts.",
            studyTip: "Build a 'function zoo' notebook with sketches + 2 properties each.",
            videoUrl: "https://www.youtube.com/watch?v=kH6w1q5Mt9g",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T6",
            name: "Transformations",
            competency: "AC 1.6",
            explanation: "$f(x) + c$ shifts up, $f(x-c)$ shifts right, $-f(x)$ reflects over x-axis.",
            example: "Transform $f(x) = x^2$ to $f(x-2) + 3$. Shift right 2, up 3.",
            studyTip: "Inside affects x, outside affects y.",
            videoUrl: "https://www.youtube.com/watch?v=8m0-2kF6Qyk",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T7",
            name: "Combining Functions",
            competency: "AC 1.7",
            explanation: "Combine using sums, differences, products, quotients. E.g., $f(x) = x^2$, $g(x) = x+1$ → $f+g = x^2 + x + 1$.",
            example: "Compute $(f \\cdot g)(x)$ for $f(x) = x^2$, $g(x) = x+1$.",
            studyTip: "Practice arithmetic operations with simple functions.",
            videoUrl: "https://www.youtube.com/watch?v=8y0N4pnZ-Dw",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T8",
            name: "Verbal Modelling",
            competency: "AC 1.8",
            explanation: "Translate verbal descriptions into functions. E.g., 'Population doubles every 10 years' → exponential.",
            example: "Model 'cost is $5 per unit plus $10 fixed' as $f(x) = 5x + 10$.",
            studyTip: "Connect to real-world: exponential = bacteria, quadratic = projectile.",
            videoUrl: "https://www.youtube.com/watch?v=1x0rdY-uW94",
            quizId: "ITMTA_W1_Quiz"
          },
          {
            id: "ITMTA_W1_T9",
            name: "Tangent and Velocity",
            competency: "AC 2.1",
            explanation: "Limits find the slope of a tangent line, which represents instantaneous velocity in physics.",
            example: "Find the tangent slope of $f(x) = x^2$ at $x = 1$ using limit definition.",
            studyTip: "Visualize tangent as a line touching curve at one point.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
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
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W2_Quiz"
          },
          {
            id: "ITMTA_W2_T2",
            name: "One-Sided and Two-Sided Limits",
            competency: "AC 2.3",
            explanation: "One-sided: $\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$, $\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$. Two-sided requires both to match.",
            example: "Evaluate $\\lim_{x \\to 0} \\frac{1}{x}$. Does not exist (one-sided limits differ).",
            studyTip: "Check left and right approaches separately.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W2_Quiz"
          },
          {
            id: "ITMTA_W2_T3",
            name: "Limit Laws",
            competency: "AC 2.4",
            explanation: "Sum: $\\lim (f+g) = \\lim f + \\lim g$. Quotient: $\\lim \\frac{f}{g} = \\frac{\\lim f}{\\lim g}$ (if denominator $\\neq 0$).",
            example: "Use limit laws: $\\lim_{x \\to 1} (x^2 + 2x) = \\lim x^2 + \\lim 2x = 3$.",
            studyTip: "Memorize: Sum, Difference, Product, Quotient, Power.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W2_Quiz"
          },
          {
            id: "ITMTA_W2_T4",
            name: "Limits Failing to Exist",
            competency: "AC 2.5",
            explanation: "Limits fail due to jumps (piecewise), oscillation ($\\sin(1/x)$), or infinite divergence.",
            example: "$\\lim_{x \\to 0} \\sin(1/x)$ oscillates, does not exist.",
            studyTip: "Identify failure type: jump, oscillation, or infinity.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W2_Quiz"
          },
          {
            id: "ITMTA_W2_T5",
            name: "Evaluation Techniques",
            competency: "AC 2.6",
            explanation: "Use direct substitution, factorization, or rationalization to evaluate limits.",
            example: "$\\lim_{x \\to 2} \\frac{x^2-4}{x-2} \\to$ factor $\\to 4$.",
            studyTip: "Mnemonic: SFR = Substitute, Factor, Rationalize.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
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
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W3_Quiz"
          },
          {
            id: "ITMTA_W3_T2",
            name: "Derivatives via Limits",
            competency: "AC 2.8",
            explanation: "Derivative: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$.",
            example: "For $f(x) = x^2$, compute $f'(x) = 2x$.",
            studyTip: "Visualize as tangent slope.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W3_Quiz"
          },
          {
            id: "ITMTA_W3_T3",
            name: "Derivatives as Rates of Change",
            competency: "AC 3.1",
            explanation: "Derivatives measure rates like velocity or marginal cost.",
            example: "If $s(t) = t^2$, velocity $v(t) = s'(t) = 2t$.",
            studyTip: "Use tangent slope animations.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
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
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W4_Quiz"
          },
          {
            id: "ITMTA_W4_T2",
            name: "Polynomial and Exponential Derivatives",
            competency: "AC 3.1-3.2",
            explanation: "Power Rule: $(x^n)' = nx^{n-1}$. Exponential: $(e^x)' = e^x$.",
            example: "Differentiate $f(x) = x^3 + e^x \\to f'(x) = 3x^2 + e^x$.",
            studyTip: "Memorize power and exponential rules.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
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
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W5_Quiz"
          },
          {
            id: "ITMTA_W5_T2",
            name: "Chain Rule",
            competency: "AC 3.2",
            explanation: "$(f(g(x)))' = f'(g(x)) \\cdot g'(x)$.",
            example: "Differentiate $f(x) = \\sin(x^2)$.",
            studyTip: "Mnemonic: Outside times inside.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W5_Quiz"
          },
          {
            id: "ITMTA_W5_T3",
            name: "Max and Min Values",
            competency: "AC 4.1",
            explanation: "Set $f'(x) = 0$, test with first/second derivative.",
            example: "Find max/min of $f(x) = x^3 - 3x$.",
            studyTip: "Use first derivative test for critical points.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
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
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W6_Quiz"
          },
          {
            id: "ITMTA_W6_T2",
            name: "Derivatives and Graph Shape",
            competency: "AC 4.1, 4.3",
            explanation: "$f'(x) > 0$: increasing, $f'(x) < 0$: decreasing. $f''(x)$ for concavity.",
            example: "Analyze $f(x) = x^3 - 3x$ for increasing/decreasing intervals.",
            studyTip: "Sketch $f$, $f'$, $f''$ together.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
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
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W7_Quiz"
          },
          {
            id: "ITMTA_W7_T2",
            name: "Area Under Curve",
            competency: "AC 5.1-5.2",
            explanation: "Area = $\\int_a^b f(x) \\, dx$. Use integration rules to compute.",
            example: "Find area under $f(x) = x^2$ from $x=0$ to $x=1$.",
            studyTip: "Visualize area as sum of rectangles.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTA_W7_Quiz"
          }
        ]
      }
    ]
  },
  {
    id: "ITMTB",
    name: "ITMTB",
    weeks: [
      {
        id: "ITMTB_W1",
        name: "Week 1",
        title: "Integral: Area & Distance Problems, Definite Integrals",
        topics: [
          {
            id: "ITMTB_W1_T1",
            name: "Area and Distance Problems",
            competency: "AC 1.1",
            explanation: "Integration solves area under curves and distance traveled. Connect geometric and analytical ideas.",
            example: "Find distance traveled from velocity $v(t) = t^2$ over $[0,1]$.",
            studyTip: "Sketch curve to visualize area/distance.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W1_Quiz"
          },
          {
            id: "ITMTB_W1_T2",
            name: "Riemann Sums",
            competency: "AC 1.2-1.3",
            explanation: "Approximate areas using left, right, midpoint Riemann sums.",
            example: "Compute left Riemann sum for $f(x) = x^2$, $[0,1]$, $n=4$.",
            studyTip: "Practice sums with small $n$ first.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W1_Quiz"
          },
          {
            id: "ITMTB_W1_T3",
            name: "Definite Integrals via Limits",
            competency: "AC 1.4",
            explanation: "Definite integral as limit of Riemann sums.",
            example: "Evaluate $\\int_0^1 x^2 \\, dx$ using limit of Riemann sums.",
            studyTip: "Link sums to integral definition.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W1_Quiz"
          },
          {
            id: "ITMTB_W1_T4",
            name: "Midpoint Rule",
            competency: "AC 1.5",
            explanation: "Approximate integrals using midpoints of subintervals.",
            example: "Use Midpoint Rule for $\\int_0^1 x^2 \\, dx$, $n=4$.",
            studyTip: "Midpoints often give better accuracy.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W1_Quiz"
          },
          {
            id: "ITMTB_W1_T5",
            name: "Fundamental Theorem of Calculus",
            competency: "AC 1.6",
            explanation: "Links antiderivatives to definite integrals.",
            example: "Evaluate $\\int_0^1 x^2 \\, dx$ using FTC.",
            studyTip: "Memorize: FTC connects differentiation and integration.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W1_Quiz"
          }
        ]
      },
      {
        id: "ITMTB_W2",
        name: "Week 2",
        title: "Fundamental Theorem of Calculus, Indefinite Integrals & Net Change",
        topics: [
          {
            id: "ITMTB_W2_T1",
            name: "Fundamental Theorem of Calculus",
            competency: "AC 1.7",
            explanation: "Evaluate definite integrals using antiderivatives.",
            example: "$\\int_0^2 x^3 \\, dx = [\\frac{x^4}{4}]_0^2 = 4$.",
            studyTip: "Practice finding antiderivatives first.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W2_Quiz"
          },
          {
            id: "ITMTB_W2_T2",
            name: "Indefinite Integrals",
            dependency: "AC 1.8",
            explanation: "Compute general antiderivatives, e.g., $\\int x^2 \\, dx = \\frac{x^3}{3} + C$.",
            example: "Find $\\int (x^2 + 2x) \\, dx$.",
            studyTip: "Always add $+C$ for indefinite integrals.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W2_Quiz"
          },
          {
            id: "ITMTB_W2_T3",
            name: "Net Change Theorem",
            competency: "AC 1.9",
            explanation: "$\\int_a^b f'(x) \\, dx = f(b) - f(a)$.",
            example: "If $v(t) = t$, find displacement from $t=0$ to $t=2$.",
            studyTip: "Think: Integral of rate = total change.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W2_Quiz"
          }
        ]
      },
      {
        id: "ITMTB_W3",
        name: "Week 3",
        title: "Substitution Rule, Techniques of Integration, Average Value",
        topics: [
          {
            id: "ITMTB_W3_T1",
            name: "Substitution Rule",
            competency: "AC 1.10",
            explanation: "Replace complex integrals with simpler ones via substitution.",
            example: "$\\int x \\cdot e^{x^2} \\, dx$, let $u = x^2$.",
            studyTip: "Choose $u$ to simplify the integrand.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W3_Quiz"
          },
          {
            id: "ITMTB_W3_T2",
            name: "Integration by Parts",
            competency: "AC 1.11",
            explanation: "$\\int u \\, dv = uv - \\int v \\, du$.",
            example: "$\\int x \\cdot e^x \\, dx$, let $u = x$, $dv = e^x \\, dx$.",
            studyTip: "Choose $u$ to simplify when differentiated.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W3_Quiz"
          },
          {
            id: "ITMTB_W3_T3",
            name: "Partial Fractions",
            competency: "AC 1.12",
            explanation: "Integrate rational functions by decomposing into simpler fractions.",
            example: "$\\int \\frac{1}{x^2-1} \\, dx$.",
            studyTip: "Factor denominator, solve for coefficients.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W3_Quiz"
          },
          {
            id: "ITMTB_W3_T4",
            name: "Average Value of a Function",
            competency: "AC 1.13",
            explanation: "Average = $\\frac{1}{b-a} \\int_a^b f(x) \\, dx$.",
            example: "Find average of $f(x) = x^2$ on $[0,1]$.",
            studyTip: "Think: Integral divided by interval length.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W3_Quiz"
          }
        ]
      },
      {
        id: "ITMTB_W4",
        name: "Week 4",
        title: "Applications of Integration: Areas Between Curves",
        topics: [
          {
            id: "ITMTB_W4_T1",
            name: "Areas Between Curves",
            competency: "AC 1.10",
            explanation: "Area = $\\int_a^b |f(x) - g(x)| \\, dx$ for curves $f(x)$, $g(x)$.",
            example: "Find area between $y = x^2$ and $y = x$ from $x=0$ to $x=1$.",
            studyTip: "Sketch curves to find intersection points.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W4_Quiz"
          }
        ]
      },
      {
        id: "ITMTB_W5",
        name: "Week 5",
        title: "Volumes (Disk/Washer Method, Cylindrical Shells)",
        topics: [
          {
            id: "ITMTB_W5_T1",
            name: "Disk/Washer Method",
            competency: "AC 2.2",
            explanation: "Volume = $\\int_a^b \\pi [f(x)^2 - g(x)^2] \\, dx$ for rotation around x-axis.",
            example: "Find volume of solid from $y = x^2$, $x=0$ to $x=1$, rotated about x-axis.",
            studyTip: "Visualize cross-sections as disks or washers.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W5_Quiz"
          },
          {
            id: "ITMTB_W5_T2",
            name: "Cylindrical Shells",
            competency: "AC 2.3-2.4",
            explanation: "Volume = $\\int_a^b 2\\pi x f(x) \\, dx$ for rotation around y-axis.",
            example: "Find volume of $y = x^2$, $x=0$ to $x=1$, rotated about y-axis.",
            studyTip: "Shells use height and radius.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W5_Quiz"
          }
        ]
      },
      {
        id: "ITMTB_W6",
        name: "Week 6",
        title: "Arc Length, Area of Surfaces of Revolution",
        topics: [
          {
            id: "ITMTB_W6_T1",
            name: "Arc Length",
            competency: "AC 2.5",
            explanation: "Arc length = $\\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx$.",
            example: "Find arc length of $y = x^2$ from $x=0$ to $x=1$.",
            studyTip: "Compute derivative first, then integrate.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W6_Quiz"
          },
          {
            id: "ITMTB_W6_T2",
            name: "Surface Area of Revolution",
            competency: "AC 2.6",
            explanation: "Surface area = $\\int_a^b 2\\pi f(x) \\sqrt{1 + [f'(x)]^2} \\, dx$.",
            example: "Find surface area of $y = x^2$, $x=0$ to $x=1$, rotated about x-axis.",
            studyTip: "Similar to arc length, multiply by $2\\pi f(x)$.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W6_Quiz"
          }
        ]
      },
      {
        id: "ITMTB_W7",
        name: "Week 7",
        title: "Differential Equations (First-Order Linear & Separable)",
        topics: [
          {
            id: "ITMTB_W7_T1",
            name: "Separable Differential Equations",
            competency: "AC 3.1",
            explanation: "Solve by separating variables: $\\frac{dy}{dx} = f(x)g(y)$.",
            example: "Solve $\\frac{dy}{dx} = \\frac{x}{y}$.",
            studyTip: "Isolate $y$ terms on one side, $x$ on the other.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W7_Quiz"
          },
          {
            id: "ITMTB_W7_T2",
            name: "First-Order Linear Differential Equations",
            competency: "AC 3.2",
            explanation: "Solve $\\frac{dy}{dx} + P(x)y = Q(x)$ using integrating factor $e^{\\int P(x) \\, dx}$.",
            example: "Solve $\\frac{dy}{dx} + 2y = x$.",
            studyTip: "Memorize integrating factor formula.",
            videoUrl: "https://www.youtube.com/watch?v=8y0-2kF6Qyk",
            quizId: "ITMTB_W7_Quiz"
          }
        ]
      }
    ]
  }
];