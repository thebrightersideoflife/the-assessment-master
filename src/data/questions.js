// src/data/questions.js
export const questions = [
  {
    id: "q1",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "Estimate the area under the graph of \\( f(x) = \\frac{1}{x} \\) on the interval \\([1, 2]\\) using four rectangles and right endpoints. Is your estimate an underestimate or an overestimate?",
    correctAnswers: ["0.75", "0.6345", "underestimate"],
    explanation:
      "To estimate the area under the graph of $$f(x) = \\frac{1}{x}$$ on $$[1, 2]$$ using four rectangles with right endpoints:\n\n" +
      "**Step 1: Determine the width of each rectangle**\n" +
      "$$\\Delta x = \\frac{b - a}{n} = \\frac{2 - 1}{4} = 0.25$$\n\n" +
      "**Step 2: Identify the right endpoints**\n" +
      "The four subintervals are:\n" +
      "- $$[1, 1.25]$$ with right endpoint $$x_1 = 1.25$$\n" +
      "- $$[1.25, 1.5]$$ with right endpoint $$x_2 = 1.5$$\n" +
      "- $$[1.5, 1.75]$$ with right endpoint $$x_3 = 1.75$$\n" +
      "- $$[1.75, 2]$$ with right endpoint $$x_4 = 2$$\n\n" +
      "**Step 3: Evaluate the function at each right endpoint**\n" +
      "$$f(1.25) = \\frac{1}{1.25} = 0.8$$\n" +
      "$$f(1.5) = \\frac{1}{1.5} \\approx 0.6667$$\n" +
      "$$f(1.75) = \\frac{1}{1.75} \\approx 0.5714$$\n" +
      "$$f(2) = \\frac{1}{2} = 0.5$$\n\n" +
      "**Step 4: Calculate the Riemann sum**\n" +
      "$$\\text{Area} \\approx \\Delta x \\sum_{i=1}^{4} f(x_i)$$\n" +
      "$$= 0.25 \\times (0.8 + 0.6667 + 0.5714 + 0.5)$$\n" +
      "$$= 0.25 \\times 2.5381$$\n" +
      "$$\\approx 0.6345$$\n\n" +
      "**Step 5: Determine if this is an underestimate or overestimate**\n" +
      "Since $$f(x) = \\frac{1}{x}$$ is a **decreasing function** on $$[1, 2]$$:\n" +
      "- At each subinterval, the right endpoint gives the **smallest** function value\n" +
      "- The rectangles therefore lie **below** the curve\n" +
      "- This results in an **underestimate** of the true area\n\n" +
      "**Visual Interpretation:**\n" +
      "Imagine the curve $$y = \\frac{1}{x}$$ sloping downward from left to right. When we use the right endpoint (the lower point) to determine rectangle height, we're consistently choosing heights that are too short, causing our rectangles to miss the area between their tops and the curve.\n\n" +
      "**Note:** The exact area is $$\\int_1^2 \\frac{1}{x}\\,dx = \\ln(2) \\approx 0.6931$$, confirming our estimate of $$0.6345$$ is indeed an underestimate."
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
      "To understand why distance equals the area under the velocity curve:\n\n" +
      "**Conceptual Foundation:**\n" +
      "Distance is the accumulation of velocity over time. If an object moves at constant velocity $$v$$ for time $$\\Delta t$$, the distance is simply:\n" +
      "$$\\text{distance} = v \\times \\Delta t$$\n\n" +
      "**For Variable Velocity:**\n" +
      "When velocity changes, we must:\n" +
      "1. Divide the time interval $$[a, b]$$ into small subintervals $$\\Delta t$$\n" +
      "2. On each subinterval, velocity is approximately constant at $$v(t_i)$$\n" +
      "3. Distance in each subinterval: $$\\Delta s_i \\approx v(t_i) \\Delta t$$\n" +
      "4. Total distance: $$\\sum v(t_i) \\Delta t$$\n\n" +
      "**Taking the Limit:**\n" +
      "As we make the subintervals infinitely small:\n" +
      "$$\\text{Distance} = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} v(t_i) \\Delta t = \\int_a^b v(t)\\,dt$$\n\n" +
      "This is precisely the **area under the velocity curve** from $$t=a$$ to $$t=b$$.\n\n" +
      "**Why the other options are incorrect:**\n" +
      "- **Option A** (Derivative of velocity): This gives acceleration, not distance\n" +
      "- **Option C** (Slope of velocity): This is also acceleration, the rate of change of velocity\n" +
      "- **Option D** (Length of velocity vector): This is the magnitude of velocity at one instant, not accumulated distance\n\n" +
      "**Physical Interpretation:**\n" +
      "If you graph velocity vs. time, the area between the curve and the time axis represents how far you've traveled. A larger area means more distance covered.",
  },
  {
    id: "q3",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "Use six rectangles with midpoints to estimate the area under \\( f(x) = \\frac{1}{1+x^2} \\) on \\([-1,2]\\).",
    correctAnswers: ["1.901", "2.21", "approximately 1.9", "≈ 1.9"],
    explanation:
      "To estimate the area under $$f(x) = \\frac{1}{1 + x^2}$$ on $$[-1, 2]$$ using the **Midpoint Rule** with six rectangles:\n\n" +
      "**Step 1: Calculate the width of each rectangle**\n" +
      "$$\\Delta x = \\frac{b - a}{n} = \\frac{2 - (-1)}{6} = \\frac{3}{6} = 0.5$$\n\n" +
      "**Step 2: Identify the six subintervals**\n" +
      "- $$[-1, -0.5]$$\n" +
      "- $$[-0.5, 0]$$\n" +
      "- $$[0, 0.5]$$\n" +
      "- $$[0.5, 1]$$\n" +
      "- $$[1, 1.5]$$\n" +
      "- $$[1.5, 2]$$\n\n" +
      "**Step 3: Find the midpoint of each subinterval**\n" +
      "$$x_1^* = -0.75, \\quad x_2^* = -0.25, \\quad x_3^* = 0.25, \\quad x_4^* = 0.75, \\quad x_5^* = 1.25, \\quad x_6^* = 1.75$$\n\n" +
      "**Step 4: Evaluate** $$f(x)$$ **at each midpoint**\n" +
      "$$f(-0.75) = \\frac{1}{1 + (-0.75)^2} = \\frac{1}{1.5625} \\approx 0.640$$\n" +
      "$$f(-0.25) = \\frac{1}{1 + (-0.25)^2} = \\frac{1}{1.0625} \\approx 0.941$$\n" +
      "$$f(0.25) = \\frac{1}{1 + (0.25)^2} = \\frac{1}{1.0625} \\approx 0.941$$\n" +
      "$$f(0.75) = \\frac{1}{1 + (0.75)^2} = \\frac{1}{1.5625} \\approx 0.640$$\n" +
      "$$f(1.25) = \\frac{1}{1 + (1.25)^2} = \\frac{1}{2.5625} \\approx 0.390$$\n" +
      "$$f(1.75) = \\frac{1}{1 + (1.75)^2} = \\frac{1}{4.0625} \\approx 0.246$$\n\n" +
      "**Step 5: Calculate the Midpoint Rule approximation**\n" +
      "$$M_6 = \\Delta x \\sum_{i=1}^{6} f(x_i^*)$$\n" +
      "$$= 0.5 \\times (0.640 + 0.941 + 0.941 + 0.640 + 0.390 + 0.246)$$\n" +
      "$$= 0.5 \\times 3.798 = 1.899 \\approx 1.9$$\n\n" +
      "**Step 6: Compare with the exact value**\n" +
      "The exact integral is:\n" +
      "$$\\int_{-1}^{2} \\frac{1}{1 + x^2} \\, dx = [\\arctan(x)]_{-1}^{2} = \\arctan(2) - \\arctan(-1)$$\n" +
      "$$= \\arctan(2) + \\frac{\\pi}{4} \\approx 1.1071 + 0.7854 = 1.8925 \\approx 1.893$$\n\n" +
      "**Why the Midpoint Rule works well:**\n" +
      "- It balances overestimation and underestimation.\n" +
      "- For functions with consistent concavity, errors tend to cancel.\n" +
      "- Our estimate ($1.9$) is very close to the exact value ($1.893$)!",
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
      "To understand why a left Riemann sum **overestimates** the area under a decreasing function:\n\n" +
      "**Key Concept: Behavior of Decreasing Functions**\n" +
      "For a decreasing function $$f(x)$$:\n" +
      "- As $$x$$ increases, $$f(x)$$ decreases\n" +
      "- The **leftmost** point in any interval has the **largest** function value\n" +
      "- The **rightmost** point has the **smallest** function value\n\n" +
      "**Visual Analysis:**\n" +
      "Consider a subinterval $$[x_i, x_{i+1}]$$ on a decreasing function:\n" +
      "1. The left endpoint is $$x_i$$ with height $$f(x_i)$$\n" +
      "2. The right endpoint is $$x_{i+1}$$ with height $$f(x_{i+1})$$\n" +
      "3. Since the function is decreasing: $$f(x_i) > f(x_{i+1})$$\n\n" +
      "**Rectangle Positioning:**\n" +
      "When we use the **left endpoint** to determine rectangle height:\n" +
      "- We choose $$f(x_i)$$, the **larger** value\n" +
      "- The rectangle extends **above** the curve on most of the interval\n" +
      "- This creates **extra area** that isn't actually under the curve\n" +
      "- Result: **Overestimate**\n\n" +
      "**Mathematical Expression:**\n" +
      "$$L_n = \\sum_{i=1}^{n} f(x_i) \\Delta x > \\int_a^b f(x)\\,dx$$\n\n" +
      "**Concrete Example:**\n" +
      "For $$f(x) = \\frac{1}{x}$$ on $$[1, 2]$$ with 4 rectangles:\n" +
      "- Left endpoints: $$1, 1.25, 1.5, 1.75$$\n" +
      "- Left sum: $$0.25(1 + 0.8 + 0.667 + 0.571) \\approx 0.759$$\n" +
      "- Exact area: $$\\ln(2) \\approx 0.693$$\n" +
      "- Indeed, $$0.759 > 0.693$$ (overestimate confirmed!)\n\n" +
      "**Why other options are incorrect:**\n" +
      "- **Option A**: Riemann sums are approximations, never exact (unless the function is constant)\n" +
      "- **Option B**: This would be true for an **increasing** function, not decreasing\n" +
      "- **Option D**: Riemann sums always approximate the integral; they're never unrelated\n\n" +
      "**Memory Aid:**\n" +
      "For **decreasing** functions: **L**eft endpoint → **L**arger values → **L**arge estimate (overestimate)",
  },
    {
    id: "q5",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "multiple-choice",
    text: "Which of the following correctly expresses the area under \\( y = x^3 \\) from 0 to 1 as a limit of Riemann sums?",
    options: [
      "A. \\( \\lim_{n\\to\\infty} \\sum_{i=1}^n \\left( \\frac{i}{n} \\right)^3 \\frac{1}{n} \\)",
      "B. \\( \\lim_{n\\to\\infty} \\sum_{i=1}^n \\left( \\frac{i}{n} \\right)^2 \\frac{1}{n} \\)",
      "C. \\( \\lim_{n\\to\\infty} \\sum_{i=1}^n \\frac{i^3}{n^3} \\)",
      "D. \\( \\lim_{n\\to\\infty} \\sum_{i=0}^{n-1} \\left( \\frac{i}{n} \\right)^3 \\frac{1}{n} \\)"
    ],
    correctAnswers: ["A"],
    explanation:
      "To express the area under $$y = x^3$$ from $$0$$ to $$1$$ as a limit of Riemann sums:\n\n" +
      "**Step 1: Set up the partition**\n" +
      "Divide the interval $$[0, 1]$$ into $$n$$ equal subintervals:\n" +
      "$$\\Delta x = \\frac{b - a}{n} = \\frac{1 - 0}{n} = \\frac{1}{n}$$\n\n" +
      "**Step 2: Identify the sample points (using right endpoints)**\n" +
      "The right endpoint of the $$i$$-th subinterval is:\n" +
      "$$x_i = a + i \\cdot \\Delta x = 0 + i \\cdot \\frac{1}{n} = \\frac{i}{n}$$\n\n" +
      "where $$i = 1, 2, 3, \\ldots, n$$\n\n" +
      "**Step 3: Evaluate the function at each sample point**\n" +
      "$$f(x_i) = f\\left(\\frac{i}{n}\\right) = \\left(\\frac{i}{n}\\right)^3$$\n\n" +
      "**Step 4: Construct the Riemann sum**\n" +
      "$$R_n = \\sum_{i=1}^{n} f(x_i) \\Delta x = \\sum_{i=1}^{n} \\left(\\frac{i}{n}\\right)^3 \\cdot \\frac{1}{n}$$\n\n" +
      "**Step 5: Express as a limit**\n" +
      "The exact area is obtained by taking the limit as $$n \\to \\infty$$:\n" +
      "$$\\text{Area} = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} \\left(\\frac{i}{n}\\right)^3 \\cdot \\frac{1}{n}$$\n\n" +
      "This is **Option A**, which is correct.\n\n" +
      "**Why the other options are incorrect:**\n\n" +
      "**Option B:** $$\\lim_{n\\to\\infty} \\sum_{i=1}^n \\left( \\frac{i}{n} \\right)^2 \\frac{1}{n}$$\n" +
      "- This uses $$\\left(\\frac{i}{n}\\right)^2$$ instead of $$\\left(\\frac{i}{n}\\right)^3$$\n" +
      "- This would represent the area under $$y = x^2$$, not $$y = x^3$$\n" +
      "- The exponent must match the function being integrated\n\n" +
      "**Option C:** $$\\lim_{n\\to\\infty} \\sum_{i=1}^n \\frac{i^3}{n^3}$$\n" +
      "- This is missing the width factor $$\\Delta x = \\frac{1}{n}$$\n" +
      "- The correct form should have $$n^4$$ in the denominator: $$\\frac{i^3}{n^4}$$\n" +
      "- This simplifies to: $$\\left(\\frac{i}{n}\\right)^3 \\cdot \\frac{1}{n} = \\frac{i^3}{n^4}$$\n" +
      "- Missing the crucial $$\\frac{1}{n}$$ factor means this isn't a proper Riemann sum\n\n" +
      "**Option D:** $$\\lim_{n\\to\\infty} \\sum_{i=0}^{n-1} \\left( \\frac{i}{n} \\right)^3 \\frac{1}{n}$$\n" +
      "- This uses $$i = 0$$ to $$n-1$$ (left endpoints) instead of $$i = 1$$ to $$n$$ (right endpoints)\n" +
      "- While this would also converge to the correct value as $$n \\to \\infty$$, it represents a **left Riemann sum**\n" +
      "- The standard convention for expressing this limit uses right endpoints ($$i = 1$$ to $$n$$)\n" +
      "- Both left and right sums converge to the same value for continuous functions, but Option A is the more standard form\n\n" +
      "**Connection to the definite integral:**\n" +
      "By definition of the definite integral:\n" +
      "$$\\int_0^1 x^3\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} \\left(\\frac{i}{n}\\right)^3 \\cdot \\frac{1}{n}$$\n\n" +
      "**Note:** If we were to evaluate this, we would get:\n" +
      "$$\\int_0^1 x^3\\,dx = \\left[\\frac{x^4}{4}\\right]_0^1 = \\frac{1}{4}$$\n\n" +
      "**Answer: A**"
  },
  {
    id: "q6",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
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
      "The definite integral $$\\int_a^b f(x)\\,dx$$ is **defined** as the limit of Riemann sums:\n\n" +
      "**Formal Definition:**\n" +
      "$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x$$\n\n" +
      "where:\n" +
      "- $$\\Delta x = \\frac{b-a}{n}$$ is the width of each subinterval\n" +
      "- $$x_i^*$$ is any sample point in the $$i$$-th subinterval\n" +
      "- $$n$$ is the number of subintervals\n\n" +
      "**Conceptual Understanding:**\n\n" +
      "**The Process:**\n" +
      "1. **Partition**: Divide $$[a, b]$$ into $$n$$ pieces\n" +
      "2. **Sample**: Choose a point $$x_i^*$$ in each piece\n" +
      "3. **Multiply**: Calculate $$f(x_i^*) \\Delta x$$ (height × width)\n" +
      "4. **Sum**: Add all the products: $$\\sum f(x_i^*) \\Delta x$$\n" +
      "5. **Limit**: Let $$n \\to \\infty$$ (infinitely fine partition)\n\n" +
      "**Why This Definition Matters:**\n" +
      "- It's the **rigorous mathematical foundation** of integration\n" +
      "- It explains why integration gives area\n" +
      "- It connects discrete sums to continuous accumulation\n\n" +
      "**Why the other options are incorrect:**\n\n" +
      "**Option A** (Slope between $$a$$ and $$b$$):\n" +
      "- This would be $$\\frac{f(b) - f(a)}{b - a}$$, not an integral\n" +
      "- The integral doesn't measure steepness\n\n" +
      "**Option B** (Total change in $$f(x)$$):\n" +
      "- This is actually $$\\int_a^b f'(x)\\,dx = f(b) - f(a)$$ (Fundamental Theorem, Part 1)\n" +
      "- We're integrating $$f$$, not its derivative\n" +
      "- Close, but this describes the integral of the derivative, not the function itself\n\n" +
      "**Option D** (Average value):\n" +
      "- The average value is $$\\frac{1}{b-a} \\int_a^b f(x)\\,dx$$\n" +
      "- The integral gives the **total accumulation**, not the average\n" +
      "- You need to divide by $$(b-a)$$ to get the average\n\n" +
      "**Geometric Interpretation:**\n" +
      "When $$f(x) \\geq 0$$, this limit process:\n" +
      "- Approximates the area with rectangles\n" +
      "- Makes rectangles infinitely thin\n" +
      "- Converges to the exact area under the curve\n\n" +
      "**Historical Note:**\n" +
      "This definition was rigorously formalized by Bernhard Riemann in the 19th century, which is why we call them \"Riemann sums.\"",
  },
  {
    id: "q7",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "Evaluate \\( \\int_0^2 3x\\,dx \\) using the definition of the integral.",
    correctAnswers: ["6"],
    explanation:
      "To evaluate $$\\int_0^2 3x\\,dx$$ using the Fundamental Theorem of Calculus:\n\n" +
      "**Method 1: Using the Fundamental Theorem (Standard Approach)**\n\n" +
      "**Step 1: Find an antiderivative of $$f(x) = 3x$$**\n" +
      "We need a function $$F(x)$$ such that $$F'(x) = 3x$$.\n\n" +
      "Using the power rule for integration:\n" +
      "$$F(x) = \\int 3x\\,dx = 3 \\cdot \\frac{x^2}{2} = \\frac{3x^2}{2}$$\n\n" +
      "**Verification:** $$\\frac{d}{dx}\\left(\\frac{3x^2}{2}\\right) = \\frac{3 \\cdot 2x}{2} = 3x$$ ✓\n\n" +
      "**Step 2: Apply the Fundamental Theorem**\n" +
      "$$\\int_0^2 3x\\,dx = F(2) - F(0) = \\left[\\frac{3x^2}{2}\\right]_0^2$$\n\n" +
      "**Step 3: Evaluate at the bounds**\n" +
      "$$= \\frac{3(2)^2}{2} - \\frac{3(0)^2}{2}$$\n" +
      "$$= \\frac{3 \\cdot 4}{2} - 0$$\n" +
      "$$= \\frac{12}{2}$$\n" +
      "$$= 6$$\n\n" +
      "**Method 2: Using Riemann Sums (From First Principles)**\n\n" +
      "For those interested in seeing the limit definition:\n\n" +
      "**Step 1: Set up the partition**\n" +
      "$$\\Delta x = \\frac{2-0}{n} = \\frac{2}{n}$$\n\n" +
      "**Step 2: Choose right endpoints**\n" +
      "$$x_i = 0 + i \\cdot \\frac{2}{n} = \\frac{2i}{n}$$\n\n" +
      "**Step 3: Form the Riemann sum**\n" +
      "$$R_n = \\sum_{i=1}^{n} f(x_i) \\Delta x = \\sum_{i=1}^{n} 3\\left(\\frac{2i}{n}\\right) \\cdot \\frac{2}{n}$$\n" +
      "$$= \\sum_{i=1}^{n} \\frac{12i}{n^2} = \\frac{12}{n^2} \\sum_{i=1}^{n} i$$\n\n" +
      "**Step 4: Use the formula $$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$$**\n" +
      "$$= \\frac{12}{n^2} \\cdot \\frac{n(n+1)}{2} = \\frac{12n(n+1)}{2n^2} = \\frac{6(n+1)}{n}$$\n\n" +
      "**Step 5: Take the limit**\n" +
      "$$\\int_0^2 3x\\,dx = \\lim_{n \\to \\infty} \\frac{6(n+1)}{n} = \\lim_{n \\to \\infty} 6\\left(1 + \\frac{1}{n}\\right) = 6$$\n\n" +
      "**Geometric Interpretation:**\n" +
      "The graph of $$y = 3x$$ is a straight line through the origin with slope 3.\n" +
      "From $$x=0$$ to $$x=2$$, this forms a triangle with:\n" +
      "- Base: 2 units\n" +
      "- Height: $$3(2) = 6$$ units\n" +
      "- Area: $$\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2 \\times 6 = 6$$ ✓\n\n" +
      "**Both methods confirm:** $$\\int_0^2 3x\\,dx = 6$$",
  },
  {
    id: "q8",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "Use the Midpoint Rule with \\( n = 4 \\) to approximate \\( \\int_0^8 x^2 dx \\).",
    correctAnswers: ["168", "168.0"],
    explanation:
      "To approximate $$\\int_0^8 x^2\\,dx$$ using the Midpoint Rule with $$n = 4$$:\n\n" +
      "**Step 1: Calculate the width of each subinterval**\n" +
      "$$\\Delta x = \\frac{b - a}{n} = \\frac{8 - 0}{4} = 2$$\n\n" +
      "**Step 2: Identify the four subintervals**\n" +
      "- $$[0, 2]$$\n" +
      "- $$[2, 4]$$\n" +
      "- $$[4, 6]$$\n" +
      "- $$[6, 8]$$\n\n" +
      "**Step 3: Find the midpoint of each subinterval**\n" +
      "The midpoint of $$[a, b]$$ is $$\\frac{a+b}{2}$$:\n" +
      "$$x_1^* = \\frac{0+2}{2} = 1$$\n" +
      "$$x_2^* = \\frac{2+4}{2} = 3$$\n" +
      "$$x_3^* = \\frac{4+6}{2} = 5$$\n" +
      "$$x_4^* = \\frac{6+8}{2} = 7$$\n\n" +
      "**Step 4: Evaluate $$f(x) = x^2$$ at each midpoint**\n" +
      "$$f(1) = 1^2 = 1$$\n" +
      "$$f(3) = 3^2 = 9$$\n" +
      "$$f(5) = 5^2 = 25$$\n" +
      "$$f(7) = 7^2 = 49$$\n\n" +
      "**Step 5: Calculate the Midpoint Rule approximation**\n" +
      "$$M_4 = \\Delta x \\sum_{i=1}^{4} f(x_i^*)$$\n" +
      "$$= 2 \\times (1 + 9 + 25 + 49)$$\n" +
      "$$= 2 \\times 84$$\n" +
      "$$= 168$$\n\n" +
      "**Step 6: Compare with the exact value**\n" +
      "Using the Fundamental Theorem of Calculus:\n" +
      "$$\\int_0^8 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^8 = \\frac{8^3}{3} - 0 = \\frac{512}{3} \\approx 170.67$$\n\n" +
      "**Analysis of the approximation:**\n" +
      "- Our estimate: $$168$$\n" +
      "- Exact value: $$170.67$$\n" +
      "- Error: $$170.67 - 168 = 2.67$$\n" +
      "- Percentage error: $$\\frac{2.67}{170.67} \\times 100\\% \\approx 1.56\\%$$\n\n" +
      "**Why is this an underestimate?**\n" +
      "Since $$f(x) = x^2$$ is **concave up** ($$f''(x) = 2 > 0$$):\n" +
      "- The curve bends upward\n" +
      "- Midpoint rectangles touch the curve at the middle\n" +
      "- The curve rises above the rectangle tops near the endpoints\n" +
      "- Result: We miss some area, giving an underestimate\n\n" +
      "**Visual Insight:**\n" +
      "The parabola $$y = x^2$$ curves upward. When we place rectangles using midpoints, the rectangle tops cut through the middle of each segment, but the parabola curves above the rectangles at the edges of each subinterval.\n\n" +
      "**General Rule:**\n" +
      "- For **concave up** functions: Midpoint Rule gives an **underestimate**\n" +
      "- For **concave down** functions: Midpoint Rule gives an **overestimate**",

  },
  {
    id: "q9",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
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
        "To identify which integral corresponds to the limit $$\\lim_{n\\to\\infty} \\sum_{i=1}^n \\frac{5}{n} \\left( \\frac{i}{n} \\right)^2$$:\n\n" +
        "**Step 1: Identify the structure of a Riemann sum**\n" +
        "A Riemann sum has the form:\n" +
        "$$\\sum_{i=1}^{n} f(x_i) \\Delta x$$\n\n" +
        "where $$\\Delta x = \\frac{b-a}{n}$$ and $$x_i = a + i\\Delta x$$\n\n" +
        "**Step 2: Analyze the given expression**\n" +
        "$$\\sum_{i=1}^n \\frac{5}{n} \\left( \\frac{i}{n} \\right)^2$$\n\n" +
        "We can rewrite this as:\n" +
        "$$\\sum_{i=1}^n \\left[5 \\left( \\frac{i}{n} \\right)^2\\right] \\cdot \\frac{1}{n}$$\n\n" +
        "**Step 3: Identify each component**\n\n" +
        "**The width $$\\Delta x$$:**\n" +
        "$$\\Delta x = \\frac{1}{n}$$\n\n" +
        "This means $$\\frac{b-a}{n} = \\frac{1}{n}$$, so $$b - a = 1$$\n\n" +
        "**The sample points $$x_i$$:**\n" +
        "$$x_i = \\frac{i}{n}$$\n\n" +
        "Since $$x_i = a + i\\Delta x = a + \\frac{i}{n}$$, we must have $$a = 0$$\n\n" +
        "Therefore: $$a = 0$$ and $$b = 1$$, giving us the interval $$[0, 1]$$\n\n" +
        "**The function $$f(x)$$:**\n" +
        "$$f(x_i) = 5\\left(\\frac{i}{n}\\right)^2 = 5(x_i)^2$$\n\n" +
        "So $$f(x) = 5x^2$$\n\n" +
        "**Step 4: Write the integral**\n" +
        "$$\\lim_{n\\to\\infty} \\sum_{i=1}^n \\frac{5}{n} \\left( \\frac{i}{n} \\right)^2 = \\int_0^1 5x^2\\,dx$$\n\n" +
        "**Step 5: Verify by evaluating**\n" +
        "$$\\int_0^1 5x^2\\,dx = 5\\int_0^1 x^2\\,dx = 5\\left[\\frac{x^3}{3}\\right]_0^1 = 5 \\cdot \\frac{1}{3} = \\frac{5}{3}$$\n\n" +
        "**Why the other options are incorrect:**\n\n" +
        "**Option A: $$\\int_0^5 x^2 dx$$**\n" +
        "- This would require $$\\Delta x = \\frac{5}{n}$$ (not $$\\frac{1}{n}$$)\n" +
        "- And $$f(x) = x^2$$ (not $$5x^2$$)\n" +
        "- Wrong on both counts\n\n" +
        "**Option C: $$\\int_0^5 5x^2 dx$$**\n" +
        "- This would require $$\\Delta x = \\frac{5}{n}$$\n" +
        "- The coefficient 5 appears in both places, which would give $$\\frac{25}{n}$$ in the sum\n" +
        "- Incorrect interval\n\n" +
        "**Option D: $$\\int_0^1 x^2 dx$$**\n" +
        "- Correct interval $$[0, 1]$$\n" +
        "- But missing the coefficient 5 in the function\n" +
        "- This would be $$\\sum_{i=1}^n \\frac{1}{n}\\left(\\frac{i}{n}\\right)^2$$, not our expression\n\n" +
        "**Key Pattern Recognition:**\n" +
        "When you see $$\\sum_{i=1}^n \\frac{c}{n} \\left( \\frac{i}{n} \\right)^k$$:\n" +
        "- Interval: $$[0, 1]$$ (because $$x_i = \\frac{i}{n}$$ ranges from $$\\frac{1}{n}$$ to $$1$$)\n" +
        "- Function: $$f(x) = cx^k$$\n" +
        "- Integral: $$\\int_0^1 cx^k\\,dx$$\n\n" +
        "**Answer: B** $$\\int_0^1 5x^2 dx$$",

  },
  {
    id: "q10",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "Use properties of integrals to evaluate \\( \\int_1^3 (2e^x + 1)\\,dx \\).",
    correctAnswers: ["2(e^3 - e) + 2", "2e^3 - 2e + 2", "2e³ - 2e + 2"],
    options: {
      allowSymbolic: true,
      requireSimplifiedForm: false,
      tolerance: 0.0001,
      acceptedUnits: [],
    },
    explanation:
      "To evaluate $$\\int_1^3 (2e^x + 1)\\,dx$$ using properties of integrals:\n\n" +
      "**Step 1: Apply the Sum Rule for integrals**\n" +
      "The integral of a sum equals the sum of the integrals:\n" +
      "$$\\int_1^3 (2e^x + 1)\\,dx = \\int_1^3 2e^x\\,dx + \\int_1^3 1\\,dx$$\n\n" +
      "**Step 2: Apply the Constant Multiple Rule**\n" +
      "We can factor out constants:\n" +
      "$$= 2\\int_1^3 e^x\\,dx + \\int_1^3 1\\,dx$$\n\n" +
      "**Step 3: Evaluate the first integral**\n" +
      "The antiderivative of $$e^x$$ is $$e^x$$:\n" +
      "$$2\\int_1^3 e^x\\,dx = 2[e^x]_1^3 = 2(e^3 - e^1) = 2e^3 - 2e$$\n\n" +
      "**Step 4: Evaluate the second integral**\n" +
      "The antiderivative of 1 is $$x$$:\n" +
      "$$\\int_1^3 1\\,dx = [x]_1^3 = 3 - 1 = 2$$\n\n" +
      "**Step 5: Combine the results**\n" +
      "$$\\int_1^3 (2e^x + 1)\\,dx = (2e^3 - 2e) + 2 = 2e^3 - 2e + 2$$\n\n" +
      "**Alternative form (factored):**\n" +
      "$$= 2(e^3 - e) + 2 = 2(e^3 - e + 1)$$\n\n" +
      "**Step 6: Numerical approximation**\n" +
      "Using $$e \\approx 2.71828$$:\n" +
      "$$e^3 \\approx 20.0855$$\n" +
      "$$2(20.0855) - 2(2.71828) + 2$$\n" +
      "$$\\approx 40.171 - 5.436 + 2$$\n" +
      "$$\\approx 36.735$$\n\n" +
      "**Properties of Integrals Used:**\n\n" +
      "1. **Sum Rule**: $$\\int [f(x) + g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx$$\n\n" +
      "2. **Constant Multiple Rule**: $$\\int cf(x)\\,dx = c\\int f(x)\\,dx$$\n\n" +
      "3. **Fundamental Theorem of Calculus**: $$\\int_a^b f(x)\\,dx = F(b) - F(a)$$, where $$F'(x) = f(x)$$\n\n" +
      "**Key Antiderivatives Used:**\n" +
      "- $$\\int e^x\\,dx = e^x + C$$\n" +
      "- $$\\int 1\\,dx = x + C$$\n\n" +
      "**Verification Strategy:**\n" +
      "To check our answer, we can differentiate:\n" +
      "$$\\frac{d}{dx}[2e^x + x] = 2e^x + 1$$ ✓\n\n" +
      "This confirms our antiderivative is correct.\n\n" +
      "**Final Answer:** $$2e^3 - 2e + 2$$ or equivalently $$2(e^3 - e + 1)$$",
  },
  {
    id: "q11",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
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
      "To understand why continuous functions are integrable:\n\n" +
      "**The Fundamental Theorem About Continuous Functions:**\n\n" +
      "If $f$ is continuous on the closed interval $[a, b]$, then $f$ is **Riemann integrable** on $[a, b]$.\n\n" +
      "**Why This Works (Option A is Correct):**\n" +
      "Continuous functions are bounded (by the Extreme Value Theorem) and the difference between upper and lower Riemann sums tends to 0 as partitions refine.\n\n" +
      "Thus, $$\\int_a^b f(x) dx$$ exists.\n\n" +
      "**Answer:** A — Continuous functions are bounded and integrable",
  },
  {
    id: "q12",
    moduleId: "ITMTB",
    weekId: "ITMTB_W1",
    type: "open-ended",
    text: "The velocity graph of a car accelerating from rest to a speed of 120 km/h over a period of 30 seconds is shown. Estimate the distance traveled during this period.",
    correctAnswers: [
      "0.694",
      "0.7",
      "0.694 km",
      "0.69 km",
      "694.4 m",
      "694 m",
      "≈0.694",
      "≈694 m",
    ],
    options: {
      acceptedUnits: ["m", "km"],
      requireUnit: true,
      tolerance: 0.001,
      allowApproximationSymbol: true,
      convertToCanonicalUnit: true,
    },
    image: {
      src: "/images/ITMTB_Week 1_Quiz 3_Question 12.png",
      alt: "Velocity-time graph of a car accelerating from 0 to 120 km/h over 30 seconds",
      caption:
        "Velocities at t = 0, 10, 20, 30 s are approximately 0, 80, 110, 120 km/h respectively. Area under the curve ≈ distance traveled.",
    },
    explanation:
"To estimate the distance traveled using a velocity-time graph:\n\n" +
    "**The Fundamental Theorem of Calculus and Riemann Sums:**\n\n" +
    "The area under a velocity-time graph represents the total distance traveled. We approximate this area using Riemann sums.\n\n" +
    "**Step 1: Convert velocity units from km/h to m/s**\n\n" +
    "Since time is measured in seconds, we convert each velocity:\n" +
    "- $v_0 = 0 \\text{ km/h} = 0 \\text{ m/s}$\n" +
    "- $v_1 = 80 \\text{ km/h} = \\frac{80}{3.6} = 22.22 \\text{ m/s}$\n" +
    "- $v_2 = 110 \\text{ km/h} = \\frac{110}{3.6} = 30.56 \\text{ m/s}$\n" +
    "- $v_3 = 120 \\text{ km/h} = \\frac{120}{3.6} = 33.33 \\text{ m/s}$\n\n" +
    "**Step 2: Apply Midpoint Riemann Sum over three intervals of 10 seconds each**\n\n" +
    "We divide the time interval [0, 30] into three equal parts:\n\n" +
    "**Interval [0, 10]:**\n" +
    "- Midpoint velocity $\\approx \\frac{0 + 22.22}{2} = 11.11 \\text{ m/s}$\n" +
    "- Area $= 11.11 \\times 10 = 111.1 \\text{ m}$\n\n" +
    "**Interval [10, 20]:**\n" +
    "- Midpoint velocity $\\approx \\frac{22.22 + 30.56}{2} = 26.39 \\text{ m/s}$\n" +
    "- Area $= 26.39 \\times 10 = 263.9 \\text{ m}$\n\n" +
    "**Interval [20, 30]:**\n" +
    "- Midpoint velocity $\\approx \\frac{30.56 + 33.33}{2} = 31.95 \\text{ m/s}$\n" +
    "- Area $= 31.95 \\times 10 = 319.5 \\text{ m}$\n\n" +
    "**Step 3: Total Distance Traveled:**\n\n" +
    "Add the areas from each interval:\n" +
    "$$\\text{Total Distance} \\approx 111.1 + 263.9 + 319.5 = \\boxed{694.5 \\text{ meters}}$$\n\n" +
    "**Conclusion:**\n\n" +
    "Using the midpoint Riemann sum and the Fundamental Theorem of Calculus, we estimate that the car traveled approximately 694.5 meters in 30 seconds."
  },


  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    {
      id: "q13",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Use Part 1 of the Fundamental Theorem of Calculus to find the derivative of \\( g(x)=\\int_{0}^{x}\\sqrt{t+t^{3}}\\,dt \\).",
      correctAnswers: [
        "√(x+x³)",
        "sqrt(x+x^3)",
        "(x+x³)^(1/2)",
        "√(x+x³)",
        "sqrt(x + x^3)"
      ],
      explanation:
        "**Using Part 1 of the Fundamental Theorem of Calculus**\n\n" +
        "**Part 1 States:**\n" +
        "If \\( g(x) = \\int_a^x f(t)\\,dt \\) and \\( f \\) is continuous, then:\n" +
        "$$g'(x) = f(x)$$\n\n" +
        "In other words, **differentiating an integral with respect to its upper limit gives back the integrand** (with the variable replaced by the upper limit).\n\n" +
        "**Given:**\n" +
        "$$g(x) = \\int_{0}^{x}\\sqrt{t+t^{3}}\\,dt$$\n\n" +
        "**Step 1: Identify the components**\n" +
        "- Lower limit: \\( a = 0 \\) (constant)\n" +
        "- Upper limit: \\( x \\) (variable)\n" +
        "- Integrand: \\( f(t) = \\sqrt{t+t^{3}} \\)\n\n" +
        "**Step 2: Check if Part 1 applies**\n" +
        "- Is \\( f(t) = \\sqrt{t+t^{3}} \\) continuous on the domain we care about?\n" +
        "- For \\( t \\geq 0 \\), we have \\( t + t^3 \\geq 0 \\), so the square root is defined.\n" +
        "- Yes, \\( f(t) \\) is continuous for \\( t \\geq 0 \\).\n\n" +
        "**Step 3: Apply Part 1 of FTC**\n\n" +
        "By Part 1:\n" +
        "$$g'(x) = f(x) = \\sqrt{x+x^{3}}$$\n\n" +
        "**That's it!** We simply replace \\( t \\) with \\( x \\) in the integrand.\n\n" +
        "**Why this works:**\n\n" +
        "Think of \\( g(x) \\) as the accumulated area under \\( f(t) = \\sqrt{t+t^3} \\) from \\( 0 \\) to \\( x \\).\n\n" +
        "When we ask 'how fast is this area changing as \\( x \\) increases?', the answer is: at a rate equal to the **height of the function at \\( x \\)**, which is \\( f(x) = \\sqrt{x+x^3} \\).\n\n" +
        "**Verification (optional):**\n\n" +
        "We could verify this makes sense by checking dimensions:\n" +
        "- \\( g(x) \\) represents area, so it accumulates as \\( x \\) increases.\n" +
        "- \\( g'(x) \\) represents the rate of change of area.\n" +
        "- This rate equals the current height \\( f(x) \\), which makes geometric sense.\n\n" +
        "**Common Mistake to Avoid:**\n\n" +
        "Don't try to find the antiderivative of \\( \\sqrt{t+t^3} \\)! Part 1 says you don't need to.\n" +
        "The whole point is that you can find \\( g'(x) \\) **without** computing the integral.\n\n" +
        "**Answer:**\n" +
        "$$g'(x) = \\sqrt{x+x^{3}}$$"
    },
    {
      id: "q14",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Use Part 2 of the Fundamental Theorem of Calculus to evaluate \\( \\int_{1}^{3}(x^{2}+2x-4)\\,dx \\). Show all steps.",
      correctAnswers: [
        "26/3",
        "8.667",
        "8.66",
        "8⅔",
        "approximately 8.67"
      ],
      explanation:
        "**Using Part 2 of the Fundamental Theorem of Calculus**\n\n" +
        "**Part 2 States:**\n" +
        "If \\( f \\) is continuous on \\([a,b]\\) and \\( F \\) is any antiderivative of \\( f \\), then:\n" +
        "$$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$$\n\n" +
        "**Interpretation:**\n" +
        "To evaluate a definite integral, find an antiderivative and subtract its value at the lower limit from its value at the upper limit.\n\n" +
        "**Given:**\n" +
        "$$\\int_{1}^{3}(x^{2}+2x-4)\\,dx$$\n\n" +
        "**Step 1: Find the antiderivative \\( F(x) \\)**\n" +
        "We seek a function whose derivative is \\( x^2 + 2x - 4 \\).\n\n" +
        "Using the power rule for integration:\n" +
        "$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$$\n\n" +
        "Integrating each term:\n" +
        "- $$\\int x^2\\,dx = \\frac{x^3}{3}$$\n" +
        "- $$\\int 2x\\,dx = x^2$$\n" +
        "- $$\\int (-4)\\,dx = -4x$$\n\n" +
        "Therefore:\n" +
        "$$F(x) = \\frac{x^3}{3} + x^2 - 4x$$\n" +
        "(We can ignore the constant \\( C \\) since it cancels in definite integrals.)\n\n" +
        "**Step 2: Evaluate \\( F(x) \\) at the limits**\n" +
        "$$\\int_{1}^{3}(x^{2}+2x-4)\\,dx = \\left[\\frac{x^3}{3} + x^2 - 4x\\right]_1^3$$\n\n" +
        "**Compute \\( F(3) \\):**\n" +
        "$$F(3) = \\frac{3^3}{3} + 3^2 - 4(3) = 9 + 9 - 12 = 6$$\n\n" +
        "**Compute \\( F(1) \\):**\n" +
        "$$F(1) = \\frac{1^3}{3} + 1^2 - 4(1) = \\frac{1}{3} + 1 - 4 = -\\frac{8}{3}$$\n\n" +
        "**Step 3: Subtract to find the integral**\n" +
        "$$F(3) - F(1) = 6 - \\left(-\\frac{8}{3}\\right) = 6 + \\frac{8}{3} = \\frac{26}{3}$$\n\n" +
        "**Step 4: Convert to decimal (optional)**\n" +
        "$$\\frac{26}{3} \\approx 8.667$$\n\n" +
        "**Geometric Meaning:**\n" +
        "The integral represents the net area between the curve \\( y = x^2 + 2x - 4 \\) and the \\( x \\)-axis from 1 to 3.\n" +
        "Since the result is positive, the curve lies mostly above the axis on this interval.\n\n" +
        "**Verification:**\n" +
        "Differentiate \\( F(x) \\) to confirm:\n" +
        "$$F'(x) = x^2 + 2x - 4 = f(x)$$ ✓\n\n" +
        "**Answer:**\n" +
        "$$\\int_{1}^{3}(x^{2}+2x-4)\\,dx = \\frac{26}{3} \\approx 8.667$$"

    },
    {
      id: "q15",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "What is the difference between a definite integral \\( \\int_{a}^{b}f(x)\\,dx \\) and an indefinite integral \\( \\int f(x)\\,dx \\)? Calculate \\( \\int x^2\\,dx \\).",
      correctAnswers: [
        "x³/3 + C",
        "(x^3)/3 + C",
        "x^3/3 + C",
        "definite is a number, indefinite is a function"
      ],
    explanation:
        "**Definite vs. Indefinite Integrals: Point-Based Comparison**\n\n" +
        "**Step 1: Comparing Definite and Indefinite Integrals**\n\n" +
        "**Definite Integral:**\n\n" +
        "- **Notation:** $$\\int_a^b f(x)\\,dx$$\n" +
        "- **Definition:** Represents the net area under the curve $$y=f(x)$$ from $$x=a$$ to $$x=b$$.\n" +
        "- **Output:** Produces a numerical value (a number).\n" +
        "- **Limits:** Has specified limits of integration, $$a$$ and $$b$$.\n" +
        "- **Evaluation:** Uses the Fundamental Theorem of Calculus: $$\\int_a^b f(x)\\,dx = F(b) - F(a)$$, where $$F'(x) = f(x)$$.\n" +
        "- **Constant:** Does not include an arbitrary constant.\n" +
        "- **Example:** $$\\int_0^2 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3} - 0 = \\frac{8}{3}$$.\n\n" +
        "**Indefinite Integral:**\n\n" +
        "- **Notation:** $$\\int f(x)\\,dx$$\n" +
        "- **Definition:** Represents the family of all antiderivatives of $$f(x)$$.\n" +
        "- **Output:** Produces a function.\n" +
        "- **Limits:** Has no limits of integration.\n" +
        "- **Constant:** Includes an arbitrary constant of integration, $$C$$, since the derivative of a constant is zero.\n" +
        "- **Example:** $$\\int x^2\\,dx = \\frac{x^3}{3} + C$$.\n\n" +
        "**Step 2: Compute the Given Indefinite Integral**\n\n" +
        "To find $$\\int x^2\\,dx$$:\n\n" +
        "- Apply the power rule for integration: $$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$.\n" +
        "- For $$n=2$$: $$\\int x^2\\,dx = \\frac{x^{2+1}}{2+1} + C = \\frac{x^3}{3} + C$$.\n\n" +
        "**Step 3: Verify by Differentiation**\n\n" +
        "Differentiate the result to confirm:\n\n" +
        "$$\\frac{d}{dx}\\left(\\frac{x^3}{3} + C\\right) = x^2$$. ✓\n\n" +
        "**Step 4: Key Concept Summary**\n\n" +
        "- **Definite Integral:** Yields a specific numerical value representing an area.\n" +
        "- **Indefinite Integral:** Yields a general antiderivative function with a constant $$C$$.\n\n" +
        "**Final Answer:**\n" +
        "$$\\boxed{\\int x^2\\,dx = \\frac{x^3}{3} + C}$$"
    },
    {
      id: "q16",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Evaluate \\( \\int_{-1}^{1}x^{100}\\,dx \\) and explain which part of the Fundamental Theorem you used.",
      correctAnswers: [
        "2/101",
        "0.0198",
        "approximately 0.02",
        "2/101"
      ],
      explanation:
        "To evaluate $$\\int_{-1}^{1}x^{100}\\,dx$$ and identify which part of the Fundamental Theorem of Calculus applies:\n\n" +
        "**Step 1: Identify the type of integral**\n" +
        "This is a **definite integral** because it has limits of integration (from -1 to 1). It will yield a *numerical value*, not a function.\n\n" +
        "**Step 2: Examine the integrand**\n" +
        "The integrand is $$x^{100}$$.\n" +
        "- The exponent 100 is **even**, so $$x^{100}$$ is an **even function**.\n" +
        "- Recall that an even function satisfies $$f(-x)=f(x)$$ for all $$x$$.\n\n" +
        "**Step 3: Use the symmetry property of definite integrals**\n" +
        "For an **even function**:\n" +
        "$$\\int_{-a}^{a} f(x)\\,dx = 2\\int_{0}^{a} f(x)\\,dx.$$\n\n" +
        "Thus:\n" +
        "$$\\int_{-1}^{1}x^{100}\\,dx = 2\\int_{0}^{1}x^{100}\\,dx.$$\n\n" +
        "**Step 4: Apply the power rule for integration**\n" +
        "For any real number $$n\\neq -1$$:\n" +
        "$$\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1} + C.$$\n\n" +
        "Therefore:\n" +
        "$$\\int_{0}^{1}x^{100}\\,dx = \\left[\\frac{x^{101}}{101}\\right]_0^1 = \\frac{1^{101}}{101} - \\frac{0^{101}}{101} = \\frac{1}{101}.$$\n\n" +
        "**Step 5: Apply the factor of 2 from symmetry**\n" +
        "$$\\int_{-1}^{1}x^{100}\\,dx = 2\\left(\\frac{1}{101}\\right) = \\frac{2}{101}.$$\n\n" +
        "**Step 6: Identify which part of the Fundamental Theorem of Calculus is used**\n" +
        "We use the **Fundamental Theorem of Calculus, Part 2**, which states:\n" +
        "$$\\int_a^b f(x)\\,dx = F(b) - F(a), \\text{ where } F'(x) = f(x).$$\n\n" +
        "Here, the antiderivative of $$x^{100}$$ is $$F(x) = \\frac{x^{101}}{101}$$, and applying Part 2 gives:\n" +
        "$$\\int_{-1}^{1}x^{100}\\,dx = F(1) - F(-1) = \\frac{1^{101}}{101} - \\frac{(-1)^{101}}{101}.$$ \n\n" +
        "Since $$(-1)^{101} = -1$$, this gives:\n" +
        "$$= \\frac{1 - (-1)}{101} = \\frac{2}{101}.$$ ✓\n\n" +
        "**Step 7: Summary of reasoning**\n" +
        "- The integrand $$x^{100}$$ is even → integral symmetric about the y-axis.\n" +
        "- The antiderivative is $$\\frac{x^{101}}{101}$$.\n" +
        "- Evaluating from -1 to 1 using FTC Part 2 yields $$\\frac{2}{101}.$$\n\n" +
        "**Key Comparisons:**\n" +
        "- *Definite Integral*: Has limits → gives a number.\n" +
        "- *Indefinite Integral*: No limits → gives a function + C.\n" +
        "- *Even Function Property*: $$\\int_{-a}^{a} f(x)\\,dx = 2\\int_{0}^{a} f(x)\\,dx.$$\n" +
        "- *Odd Function Property*: $$\\int_{-a}^{a} f(x)\\,dx = 0.$$\n\n" +
        "**Final Answer:**\n" +
        "$$\\boxed{\\int_{-1}^{1}x^{100}\\,dx = \\frac{2}{101}}$$\n\n" +
        "**Part of the Fundamental Theorem Used:** *Part 2* — connects definite integrals to antiderivatives through $$F(b) - F(a).$$"
    },
    {
      id: "q17",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Evaluate the definite integral \\( \\int_{0}^{\\pi/3}\\sec \\theta \\tan \\theta\\,d\\theta \\).",
      correctAnswers: [
        "1",
        "1.0",
        "one"
      ],
      explanation:
        "**Evaluating \\( \\int_{0}^{\\pi/3}\\sec \\theta \\tan \\theta\\,d\\theta \\)**\n\n" +
        "We use **Part 2 of the Fundamental Theorem of Calculus**.\n\n" +
        "---\n\n" +
        "**Step 1: Recognize the antiderivative pattern**\n\n" +
        "We need to recall (or derive) that:\n" +
        "$\\frac{d}{d\\theta}[\\sec \\theta] = \\sec \\theta \\tan \\theta$\n\n" +
        "**Quick verification:**\n" +
        "$\\sec \\theta = \\frac{1}{\\cos \\theta}$\n\n" +
        "Using the quotient rule:\n" +
        "$\\frac{d}{d\\theta}\\left[\\frac{1}{\\cos \\theta}\\right] = \\frac{0 \\cdot \\cos \\theta - 1 \\cdot (-\\sin \\theta)}{\\cos^2 \\theta} = \\frac{\\sin \\theta}{\\cos^2 \\theta}$\n\n" +
        "$= \\frac{1}{\\cos \\theta} \\cdot \\frac{\\sin \\theta}{\\cos \\theta} = \\sec \\theta \\tan \\theta$ ✓\n\n" +
        "Therefore, the antiderivative is:\n" +
        "$F(\\theta) = \\sec \\theta$\n\n" +
        "---\n\n" +
        "**Step 2: Apply the Fundamental Theorem**\n\n" +
        "$\\int_{0}^{\\pi/3}\\sec \\theta \\tan \\theta\\,d\\theta = [\\sec \\theta]_{0}^{\\pi/3}$\n\n" +
        "**Step 3: Evaluate at the upper limit (\\( \\theta = \\pi/3 \\))**\n\n" +
        "$\\sec\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{\\cos(\\pi/3)}$\n\n" +
        "Recall that \\( \\cos(\\pi/3) = \\frac{1}{2} \\):\n" +
        "$\\sec\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{1/2} = 2$\n\n" +
        "**Step 4: Evaluate at the lower limit (\\( \\theta = 0 \\))**\n\n" +
        "$\\sec(0) = \\frac{1}{\\cos(0)} = \\frac{1}{1} = 1$\n\n" +
        "**Step 5: Calculate the difference**\n\n" +
        "$\\int_{0}^{\\pi/3}\\sec \\theta \\tan \\theta\\,d\\theta = \\sec\\left(\\frac{\\pi}{3}\\right) - \\sec(0)$\n" +
        "$= 2 - 1 = 1$\n\n" +
        "---\n\n" +
        "**Geometric Interpretation:**\n\n" +
        "This integral represents the signed area under the curve \\( y = \\sec \\theta \\tan \\theta \\) from \\( \\theta = 0 \\) to \\( \\theta = \\pi/3 \\).\n\n" +
        "Since \\( \\sec \\theta > 0 \\) and \\( \\tan \\theta > 0 \\) in the interval \\( (0, \\pi/3) \\), the integrand is positive, so the area is positive.\n\n" +
        "---\n\n" +
        "**Common Trigonometric Antiderivatives to Remember:**\n\n" +
        "- \\( \\int \\sec \\theta \\tan \\theta\\,d\\theta = \\sec \\theta + C \\)\n" +
        "- \\( \\int \\csc \\theta \\cot \\theta\\,d\\theta = -\\csc \\theta + C \\)\n" +
        "- \\( \\int \\sec^2 \\theta\\,d\\theta = \\tan \\theta + C \\)\n" +
        "- \\( \\int \\csc^2 \\theta\\,d\\theta = -\\cot \\theta + C \\)\n\n" +
        "---\n\n" +
        "**Answer:**\n" +
        "$\\int_{0}^{\\pi/3}\\sec \\theta \\tan \\theta\\,d\\theta = 1$"
    },
    {
      id: "q18",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Calculate the area of the region enclosed by the curve \\( y=4-x^2 \\) and the \\( x \\)-axis.",
      correctAnswers: [
        "32/3",
        "10.667",
        "10.66",
        "10⅔",
        "approximately 10.67"
      ],
      explanation:
        "**Finding the Area Between \\( y = 4 - x^2 \\) and the \\( x \\)-axis**\n\n" +
        "To find the area enclosed by a curve and the \\( x \\)-axis, we:\n" +
        "1. Find where the curve intersects the \\( x \\)-axis (the limits)\n" +
        "2. Integrate the function over that interval\n" +
        "3. Take the absolute value if the curve is below the \\( x \\)-axis\n\n" +
        "---\n\n" +
        "**Step 1: Find the \\( x \\)-intercepts**\n\n" +
        "The curve intersects the \\( x \\)-axis where \\( y = 0 \\):\n" +
        "$4 - x^2 = 0$\n" +
        "$x^2 = 4$\n" +
        "$x = \\pm 2$\n\n" +
        "So the curve crosses the \\( x \\)-axis at \\( x = -2 \\) and \\( x = 2 \\).\n\n" +
        "---\n\n" +
        "**Step 2: Check if the function is positive on the interval**\n\n" +
        "For \\( x \\in [-2, 2] \\), is \\( y = 4 - x^2 \\geq 0 \\)?\n\n" +
        "- At \\( x = 0 \\): \\( y = 4 - 0 = 4 > 0 \\) ✓\n" +
        "- At \\( x = 1 \\): \\( y = 4 - 1 = 3 > 0 \\) ✓\n" +
        "- Since \\( x^2 \\leq 4 \\) for \\( x \\in [-2, 2] \\), we have \\( 4 - x^2 \\geq 0 \\) ✓\n\n" +
        "The curve is **above** the \\( x \\)-axis on this interval, so the area equals the definite integral.\n\n" +
        "---\n\n" +
        "**Step 3: Set up the integral**\n\n" +
        "$\\text{Area} = \\int_{-2}^{2}(4-x^2)\\,dx$\n\n" +
        "**Step 4: Find the antiderivative**\n\n" +
        "$F(x) = 4x - \\frac{x^3}{3}$\n\n" +
        "**Step 5: Evaluate at the limits**\n\n" +
        "$\\text{Area} = \\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2}$\n\n" +
        "**Evaluate at \\( x = 2 \\):**\n" +
        "$F(2) = 4(2) - \\frac{(2)^3}{3} = 8 - \\frac{8}{3} = \\frac{24}{3} - \\frac{8}{3} = \\frac{16}{3}$\n\n" +
        "**Evaluate at \\( x = -2 \\):**\n" +
        "$F(-2) = 4(-2) - \\frac{(-2)^3}{3} = -8 - \\frac{-8}{3} = -8 + \\frac{8}{3}$\n" +
        "$= -\\frac{24}{3} + \\frac{8}{3} = -\\frac{16}{3}$\n\n" +
        "**Step 6: Calculate the difference**\n\n" +
        "$\\text{Area} = F(2) - F(-2) = \\frac{16}{3} - \\left(-\\frac{16}{3}\\right)$\n" +
        "$= \\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}$\n\n" +
        "---\n\n" +
        "**Alternative Method: Using Symmetry**\n\n" +
        "Notice that \\( f(x) = 4 - x^2 \\) is an **even function**:\n" +
        "$f(-x) = 4 - (-x)^2 = 4 - x^2 = f(x)$\n\n" +
        "The curve is symmetric about the \\( y \\)-axis, so:\n" +
        "$\\text{Area} = 2\\int_{0}^{2}(4-x^2)\\,dx$\n\n" +
        "$= 2\\left[4x - \\frac{x^3}{3}\\right]_0^2$\n" +
        "$= 2\\left(\\frac{16}{3} - 0\\right) = 2 \\cdot \\frac{16}{3} = \\frac{32}{3}$ ✓\n\n" +
        "---\n\n" +
        "**Step 7: Convert to decimal (optional)**\n\n" +
        "$\\frac{32}{3} \\approx 10.667 \\text{ square units}$\n\n" +
        "---\n\n" +
        "**Visualization:**\n\n" +
        "The curve \\( y = 4 - x^2 \\) is a **downward-opening parabola** with:\n" +
        "- Vertex at \\( (0, 4) \\)\n" +
        "- \\( x \\)-intercepts at \\( (-2, 0) \\) and \\( (2, 0) \\)\n\n" +
        "The region enclosed is the area under this parabola from \\( x = -2 \\) to \\( x = 2 \\).\n\n" +
        "---\n\n" +
        "**Answer:**\n" +
        "$\\text{Area} = \\frac{32}{3} \\text{ square units} \\approx 10.667 \\text{ square units}$"
    },
    {
      id: "q19",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Rewrite \\( F(x)=\\int_{x}^{0}\\sqrt{1+\\sec t}\\,dt \\) so that the lower limit is constant, then find \\( F'(x) \\) using Part 1 of the FTC.",
      correctAnswers: [
        "-√(1+sec x)",
        "-sqrt(1+sec x)",
        "-(1+sec x)^(1/2)",
        "-√(1+sec(x))"
      ],
      explanation:
        "**Rewriting and Differentiating \\( F(x)=\\int_{x}^{0}\\sqrt{1+\\sec t}\\,dt \\)**\n\n" +
        "The challenge here is that the variable \\( x \\) appears as the **lower limit** instead of the upper limit. Part 1 of the FTC applies when \\( x \\) is the **upper limit**.\n\n" +
        "---\n\n" +
        "**Step 1: Use the property of definite integrals to swap limits**\n\n" +
        "**Property:** \\( \\int_a^b f(t)\\,dt = -\\int_b^a f(t)\\,dt \\)\n\n" +
        "Applying this property:\n" +
        "$F(x) = \\int_{x}^{0}\\sqrt{1+\\sec t}\\,dt = -\\int_{0}^{x}\\sqrt{1+\\sec t}\\,dt$\n\n" +
        "Now the lower limit is constant (0) and the upper limit is variable (\\( x \\))!\n\n" +
        "---\n\n" +
        "**Step 2: Apply Part 1 of the Fundamental Theorem**\n\n" +
        "**Part 1 states:** If \\( g(x) = \\int_a^x f(t)\\,dt \\) and \\( f \\) is continuous, then:\n" +
        "$g'(x) = f(x)$\n\n" +
        "For our rewritten function:\n" +
        "$F(x) = -\\int_{0}^{x}\\sqrt{1+\\sec t}\\,dt$\n\n" +
        "We can write:\n" +
        "$F(x) = -g(x) \\quad \\text{where} \\quad g(x) = \\int_{0}^{x}\\sqrt{1+\\sec t}\\,dt$\n\n" +
        "---\n\n" +
        "**Step 3: Differentiate using the chain rule**\n\n" +
        "$F'(x) = \\frac{d}{dx}\\left[-\\int_{0}^{x}\\sqrt{1+\\sec t}\\,dt\\right]$\n\n" +
        "$= -\\frac{d}{dx}\\int_{0}^{x}\\sqrt{1+\\sec t}\\,dt$\n\n" +
        "By Part 1 of the FTC:\n" +
        "$\\frac{d}{dx}\\int_{0}^{x}\\sqrt{1+\\sec t}\\,dt = \\sqrt{1+\\sec x}$\n\n" +
        "Therefore:\n" +
        "$F'(x) = -\\sqrt{1+\\sec x}$\n\n" +
        "---\n\n" +
        "**Understanding the Negative Sign:**\n\n" +
        "The negative sign comes from having \\( x \\) in the **lower limit** instead of the upper limit.\n\n" +
        "**General rule:**\n" +
        "- \\( \\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x) \\) (positive)\n" +
        "- \\( \\frac{d}{dx}\\int_x^a f(t)\\,dt = -f(x) \\) (negative)\n\n" +
        "**Intuitive explanation:**\n" +
        "- When \\( x \\) is the upper limit and increases, we're **adding** area, so the derivative is positive\n" +
        "- When \\( x \\) is the lower limit and increases, we're **removing** area from the interval, so the derivative is negative\n\n" +
        "---\n\n" +
        "**Step-by-Step Summary:**\n\n" +
        "1. **Original:** \\( F(x)=\\int_{x}^{0}\\sqrt{1+\\sec t}\\,dt \\)\n\n" +
        "2. **Rewritten:** \\( F(x) = -\\int_{0}^{x}\\sqrt{1+\\sec t}\\,dt \\)\n\n" +
        "3. **Derivative:** \\( F'(x) = -\\sqrt{1+\\sec x} \\)\n\n" +
        "---\n\n" +
        "**Verification (optional):**\n\n" +
        "We can verify this makes sense by considering small changes:\n" +
        "- As \\( x \\) increases from \\( x \\) to \\( 0 \\), the interval \\([x, 0]\\) becomes smaller\n" +
        "- So \\( F(x) = \\int_x^0 \\sqrt{1+\\sec t}\\,dt \\) decreases\n" +
        "- Therefore \\( F'(x) < 0 \\), which matches our result ✓\n\n" +
        "---\n\n" +
        "**Answer:**\n\n" +
        "**Rewritten form:** \\( F(x) = -\\int_{0}^{x}\\sqrt{1+\\sec t}\\,dt \\)\n\n" +
        "**Derivative:** \\( F'(x) = -\\sqrt{1+\\sec x} \\)"
    },
    {
      id: "q20",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "multiple-choice",
      text: "Before the Fundamental Theorem of Calculus was discovered, what types of problems were considered extremely difficult? How did Newton and Leibniz's work change mathematics?",
      options: [
        "A. Finding areas, volumes, and curve lengths required genius-level geometric intuition; Newton and Leibniz created a systematic method making these problems accessible to everyone",
        "B. Solving differential equations and optimization problems were impossible; Newton and Leibniz invented notation that made symbolic manipulation possible for the first time",
        "C. Computing limits and studying continuity lacked rigor; Newton and Leibniz formalized epsilon-delta definitions that made analysis mathematically precise",
        "D. Algebraic equations of degree five or higher couldn't be solved; Newton and Leibniz developed series methods that provided approximate solutions to polynomial equations",
      ],
      correctAnswers: ["A"],
      explanation:
        "**The Revolutionary Impact of the Fundamental Theorem of Calculus**\n\n" +
        "---\n\n" +
        "**Before the Fundamental Theorem:**\n\n" +
        "Prior to the discovery of the Fundamental Theorem of Calculus, the following types of problems were considered **extraordinarily difficult**:\n\n" +
        "1. **Finding Areas** — Calculating the area under curves or between curves\n" +
        "2. **Finding Volumes** — Determining volumes of complex 3D shapes\n" +
        "3. **Finding Lengths of Curves** — Computing arc lengths of curved paths\n\n" +
        "**Why were these so difficult?**\n\n" +
        "- These problems required **exhaustion methods** (predecessors to integration) used by ancient Greek mathematicians like Archimedes\n" +
        "- Each problem required **clever, custom geometric arguments**\n" +
        "- Only mathematical **geniuses** could solve them\n" +
        "- Even then, solutions existed only for **very special cases**\n" +
        "- There was **no general systematic method** to approach these problems\n\n" +
        "**Example:** Archimedes could find the area under a parabola, but it took extraordinary ingenuity and geometric insight. Each new curve required a completely new approach.\n\n" +
        "---\n\n" +
        "**The Revolutionary Change: Newton and Leibniz**\n\n" +
        "In the late 17th century, **Isaac Newton** (1642-1727) and **Gottfried Wilhelm Leibniz** (1646-1716) independently developed calculus and formulated the **Fundamental Theorem of Calculus**.\n\n" +
        "**What they discovered:**\n\n" +
        "The Fundamental Theorem revealed that:\n" +
        "1. **Integration** (finding areas) and **differentiation** (finding rates of change) are **inverse processes**\n" +
        "2. To find an area, you just need to find an **antiderivative** and evaluate it at the boundaries\n" +
        "3. Problems that once required genius-level geometric intuition could now be solved using **algebraic manipulation**\n\n" +
        "---\n\n" +
        "**How It Changed Mathematics:**\n\n" +
        "**1. Democratization of Problem-Solving**\n" +
        "- Problems that only geniuses could solve became **accessible to everyone** with proper training\n" +
        "- Students could learn a systematic method rather than relying on individual brilliance\n\n" +
        "**2. A Systematic Method**\n" +
        "Newton and Leibniz fashioned a **systematic, algorithmic approach**:\n\n" +
        "```\n" +
        "To find area under f(x) from a to b:\n" +
        "1. Find an antiderivative F(x) where F'(x) = f(x)\n" +
        "2. Calculate F(b) - F(a)\n" +
        "3. Done!\n" +
        "```\n\n" +
        "No geometric genius required — just follow the method!\n\n" +
        "**3. Rapid Scientific Progress**\n" +
        "The systematic nature of calculus enabled:\n" +
        "- Physics: Newton used calculus to formulate his laws of motion\n" +
        "- Engineering: Bridge design, fluid dynamics, electrical circuits\n" +
        "- Economics: Optimization problems, marginal analysis\n" +
        "- Biology: Population dynamics, spread of diseases\n\n" +
        "**4. Unification of Concepts**\n" +
        "The FTC showed that seemingly different problems (finding tangent lines vs. finding areas) were actually **two sides of the same coin**.\n\n" +
        "---\n\n" +
        "**Why the other options are INCORRECT:**\n\n" +
        "**Option B: 'Solving differential equations and optimization problems were impossible'**\n" +
        "- **Anachronistic!** Differential equations as a formal concept didn't exist before calculus\n" +
        "- While Newton and Leibniz did develop important notation (\\( \\frac{dy}{dx} \\) by Leibniz, fluxions by Newton), this wasn't the main historical difficulty\n" +
        "- Optimization problems in the modern sense also didn't exist yet\n" +
        "- The notation came alongside the FTC, but the revolutionary part was the systematic method, not just notation\n\n" +
        "**Option C: 'Computing limits and studying continuity lacked rigor'**\n" +
        "- **Historically backwards!** Epsilon-delta definitions came much later (19th century with Cauchy, Weierstrass)\n" +
        "- Newton and Leibniz actually didn't have rigorous limit definitions—they used infinitesimals intuitively\n" +
        "- The formalization of analysis happened 150+ years after Newton and Leibniz\n" +
        "- Rigor was added by later mathematicians to clean up what Newton and Leibniz pioneered\n\n" +
        "**Option D: 'Algebraic equations of degree five or higher couldn't be solved'**\n" +
        "- **Completely wrong topic!** This refers to the Abel-Ruffini theorem (early 1800s) about polynomial solvability\n" +
        "- Newton did work on numerical methods and series, but this wasn't the main impact of calculus\n" +
        "- The FTC has nothing to do with solving polynomial equations\n" +
        "- This confuses calculus with abstract algebra\n\n" +
        "---\n\n" +
        "**A Historical Example:**\n\n" +
        "**Before FTC:**\n" +
        "Finding the area under \\( y = x^2 \\) from 0 to 1 required clever geometric decomposition and limits.\n\n" +
        "**After FTC:**\n" +
        "$$\\int_0^1 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3} - 0 = \\frac{1}{3}$$\n\n" +
        "Done in seconds!\n\n" +
        "---\n\n" +
        "**The Cultural Impact:**\n\n" +
        "The Fundamental Theorem of Calculus is often called one of the **greatest intellectual achievements** in human history because:\n\n" +
        "1. It connected two apparently unrelated operations (differentiation and integration)\n" +
        "2. It transformed impossible problems into routine calculations\n" +
        "3. It launched the **Scientific Revolution** and the modern technological age\n" +
        "4. It showed the power of **abstract mathematical thinking**\n\n" +
        "---\n\n" +
        "**Answer: A** — Finding areas, volumes, and curve lengths required genius-level geometric intuition; Newton and Leibniz created a systematic method making these problems accessible to everyone"
    },
    {
      id: "q21",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Use the Fundamental Theorem of Calculus, Part 1, combined with the Chain Rule, to find the derivative of the function $$y = \\int_{0}^{\\tan x} e^{-t^{2}}\\,dt$$.",
      correctAnswers: ["e^(-tan^2 x) * sec^2 x", "e^(-(tan(x))^2) * sec^2(x)"],
      explanation:
        "We apply the **Fundamental Theorem of Calculus, Part 1 (FTC1)** together with the **Chain Rule**:\n\n" +
        "FTC1 states:\n" +
        "$$\\frac{d}{dx}\\int_{a}^{x} f(t)\\,dt = f(x)$$\n\n" +
        "For $$y = \\int_{0}^{u} f(t)\\,dt$$ where $$u = \\tan x$$ and $$f(t) = e^{-t^2}$$, we have:\n\n" +
        "**Step 1: Differentiate with respect to u (FTC1)**\n" +
        "$$\\frac{dy}{du} = e^{-u^2}$$\n\n" +
        "**Step 2: Differentiate u with respect to x (Chain Rule)**\n" +
        "$$u = \\tan x \\implies \\frac{du}{dx} = \\sec^2 x$$\n\n" +
        "**Step 3: Apply the Chain Rule**\n" +
        "$$\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = e^{-u^2}\\sec^2 x$$\n\n" +
        "Substitute back $$u = \\tan x$$:\n" +
        "$$\\frac{dy}{dx} = e^{-(\\tan x)^2}\\sec^2 x$$\n\n" +
        "**Final Answer:**\n" +
        "$$\\frac{dy}{dx} = e^{-\\tan^2 x}\\sec^2 x$$",
    },
    {
      id: "q22",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Evaluate the integral $$\\int_{-1}^{2} x^{3}\\,dx$$ and interpret the result as an area or a difference of areas.",
      correctAnswers: ["15/4", "3.75", "3 3/4"],
      explanation:
        "**Step 1: Evaluate the integral**\n\n" +
        "Using the **Fundamental Theorem of Calculus, Part 2**:\n" +
        "$$\\int_{-1}^{2} x^{3}\\,dx = \\left[\\frac{x^{4}}{4}\\right]_{-1}^{2}$$\n" +
        "$$= \\frac{(2)^4}{4} - \\frac{(-1)^4}{4}$$\n" +
        "$$= \\frac{16}{4} - \\frac{1}{4} = 4 - \\frac{1}{4} = \\frac{15}{4}$$\n\n" +
        "**Step 2: Interpretation**\n\n" +
        "The result $$\\frac{15}{4}$$ represents the **net signed area** under $$f(x) = x^3$$ from $$x = -1$$ to $$x = 2$$.\n\n" +
        "- On $$[-1, 0]$$, $$f(x) = x^3$$ is **negative**, contributing area $$A_1$$ below the x-axis.\n" +
        "- On $$[0, 2]$$, $$f(x) = x^3$$ is **positive**, contributing area $$A_2$$ above the x-axis.\n\n" +
        "The integral computes:\n" +
        "$$\\int_{-1}^{2} x^3\\,dx = A_2 - A_1$$\n" +
        "$$A_2 - A_1 = \\frac{15}{4}$$\n\n" +
        "**Key Concept:** A definite integral gives the **net signed area**, i.e., area above the x-axis minus area below.",
    },
    {
    id: "q23",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "If a function \\( f(x) \\) is measured in newtons (N) and the variable \\( x \\) is measured in meters (m), what are the units for the definite integral \\( \\int_{0}^{100}f(x)\\,dx \\)?",
    options: [
      "A. Newtons (N)",
      "B. Meters (m)",
      "C. Newton-meters (N·m)",
      "D. No units, the result is dimensionless",
    ],
    correctAnswers: ["C"],
    explanation:
        "To determine the **units** of a definite integral, analyze what happens during integration:\n\n" +
        "**Step 1: Recall what a definite integral represents**\n" +
        "The integral $$\\int_a^b f(x)\\,dx$$ can be thought of as:\n" +
        "- The *sum of infinitely many small rectangles* of height $$f(x)$$ and width $$dx$$.\n" +
        "- Each small term $$f(x)\\,dx$$ has units equal to the product of the units of $$f(x)$$ and $$x$$.\n\n" +
        "**Step 2: Apply this to the given physical quantities**\n" +
        "- $$f(x)$$ is measured in **newtons (N)** → this represents **force**.\n" +
        "- $$x$$ is measured in **meters (m)** → this represents **distance**.\n\n" +
        "Therefore, each differential element $$f(x)\\,dx$$ has units:\n" +
        "$$[f(x)] \\times [dx] = (N) \\times (m) = N·m.$$\n\n" +
        "**Step 3: Interpret the physical meaning**\n" +
        "- The quantity $$\\int f(x)\\,dx$$ represents the *accumulated product* of force and distance.\n" +
        "- In physics, the integral of force over distance gives **work done**.\n" +
        "- Hence, the units of the integral correspond to **work or energy**.\n\n" +
        "**Step 4: Connect to known physical quantities**\n" +
        "- Work and energy are both measured in **joules (J)**.\n" +
        "- By definition, $$1\\text{ joule} = 1\\text{ newton} \\cdot 1\\text{ meter}.$$\n" +
        "- Thus, the result of the integral $$\\int_0^{100} f(x)\\,dx$$ has **units of N·m = J**.\n\n" +
        "**Step 5: Why the other options are incorrect**\n\n" +
        "- **Option A: N (Newtons)** → Incorrect. The integral adds up force *over distance*, giving an extra meter factor.\n" +
        "- **Option B: m (Meters)** → Incorrect. That would be true only if we were summing distances, not forces.\n" +
        "- **Option D: Dimensionless** → Incorrect. Both $$f(x)$$ and $$x$$ carry units, so the product $$f(x)dx$$ does too.\n\n" +
        "**Key Idea:**\n" +
        "- The unit of a definite integral is always the **product of the units of the integrand and the variable of integration.**\n" +
        "- Symbolically: $$[\\int f(x)dx] = [f(x)]\\times[x].$$\n\n" +
        "**Final Answer:**\n" +
        "$$\\boxed{\\text{Units: Newton-meters (N*m), which are equivalent to joules (J)}}$$"
      },

      {
    id: "q24",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "If \\( r(t) \\) is the rate at which oil leaks from a tank in liters per minute at time \\( t \\), what does the definite integral \\( \\int_{0}^{120} r(t)\\,dt \\) represent?",
    options: [
      "A. The instantaneous rate of leakage at \\( t = 120 \\) minutes",
      "B. The total amount of oil leaked from the tank during the 120 minutes",
      "C. The average leakage rate of oil over the 120 minutes",
      "D. The remaining amount of oil in the tank after 120 minutes",
    ],
    correctAnswers: ["B"],
    explanation:
        "To interpret the meaning of the integral $$\\int_{0}^{120}r(t)\\,dt$$, we connect it to the **Net Change Theorem**, which relates a rate of change to the total change in the corresponding quantity.\n\n" +
        "**Step 1: Identify what each symbol represents**\n" +
        "- $$r(t)$$ = rate of oil leakage (liters per minute)\n" +
        "- $$t$$ = time (minutes)\n" +
        "- The product $$r(t)\\,dt$$ therefore has units of: $$(\\text{liters/minute}) \\times (\\text{minutes}) = \\text{liters}.$$\n\n" +
        "**Step 2: Recall the Net Change Theorem**\n" +
        "If a quantity $$Q(t)$$ changes at a rate $$r(t) = Q'(t)$$, then:\n" +
        "$$\\int_a^b r(t)\\,dt = Q(b) - Q(a).$$\n" +
        "→ In words, *the integral of a rate of change equals the net change of the original quantity over the interval* $[a,b]$.\n\n" +
        "**Step 3: Apply this to the given situation**\n" +
        "- $$r(t)$$ measures the **rate of oil leaking** from the tank.\n" +
        "- Therefore, $$\\int_0^{120} r(t)\\,dt$$ gives the **total quantity of oil that has leaked** from the tank between 0 and 120 minutes.\n\n" +
        "**Step 4: Interpret physically**\n" +
        "- The tank is losing oil continuously.\n" +
        "- Integrating the rate $$r(t)$$ over the 120-minute interval sums up *all* the small amounts of oil leaked in each tiny time increment.\n" +
        "- The result represents the **total leakage (in liters)** during that period.\n\n" +
        "**Step 5: Clarify units and meaning**\n" +
        "- $$[r(t)] = \\text{liters/minute}$$\n" +
        "- $$[dt] = \\text{minutes}$$\n" +
        "- $$[r(t)dt] = \\text{liters}$$\n" +
        "- Thus, $$\\int_0^{120} r(t)\\,dt$$ has units of **liters**, representing a *total volume of oil*.\n\n" +
        "**Step 6: Why other options are incorrect**\n" +
        "- **Option A:** Instantaneous rate → corresponds to $$r(120)$$, *not* the integral.\n" +
        "- **Option C:** Average rate → would be $$\\frac{1}{120}\\int_0^{120} r(t)\\,dt$$.\n" +
        "- **Option D:** Remaining oil → would depend on the *initial amount* and *total leaked*, not just the integral.\n\n" +
        "**Key Concept:**\n" +
        "- The integral of a rate function always gives the *accumulated quantity* of what is changing.\n" +
        "- Symbolically: $$\\int_a^b (\\text{rate})\\,dt = \\text{total change in quantity}.$$\n\n" +
        "**Final Answer:**\n" +
        "$$\\boxed{\\int_0^{120} r(t)\\,dt \\text{ represents the total amount of oil (in liters) that leaked from the tank over the first 120 minutes.}}$$"
    },

    {
    id: "q25",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "open-ended",
    text: "Evaluate the definite integral \\( \\int_{1}^{3} \\left(\\frac{3x^2 + 4x + 1}{x}\\right) dx \\).",
    correctAnswers: ["19 + 3ln(3)", "19 + 3ln3", "19 + 3 ln(3)"],
    explanation:
        "To evaluate $$\\int_{1}^{3}\\left(\\frac{3x^2+4x+1}{x}\\right)dx$$, we simplify and integrate term by term.\n\n" +
        "**Step 1: Simplify the integrand**\n" +
        "Divide each term in the numerator by $$x$$:\n" +
        "$$\\frac{3x^2}{x} + \\frac{4x}{x} + \\frac{1}{x} = 3x + 4 + \\frac{1}{x}.$$\n\n" +
        "So the integral becomes:\n" +
        "$$\\int_{1}^{3} (3x + 4 + \\frac{1}{x})\\,dx.$$\n\n" +
        "**Step 2: Separate into simpler integrals**\n" +
        "$$= \\int_{1}^{3} 3x\\,dx + \\int_{1}^{3} 4\\,dx + \\int_{1}^{3} \\frac{1}{x}\\,dx.$$\n\n" +
        "**Step 3: Evaluate each term**\n\n" +
        "1. $$\\int_{1}^{3} 3x\\,dx = 3\\left[\\frac{x^2}{2}\\right]_1^3 = 3\\left(\\frac{9}{2} - \\frac{1}{2}\\right) = 3(4) = 12.$$ \n\n" +
        "2. $$\\int_{1}^{3} 4\\,dx = 4[x]_1^3 = 4(3 - 1) = 8.$$ \n\n" +
        "3. $$\\int_{1}^{3} \\frac{1}{x}\\,dx = [\\ln|x|]_1^3 = \\ln(3) - \\ln(1) = \\ln(3).$$\n\n" +
        "**Step 4: Combine all results**\n" +
        "$$12 + 8 + \\ln(3) = 20 + \\ln(3).$$\n\n" +
        "**Step 5: Check simplification carefully**\n" +
        "Wait—verify the earlier term calculations:\n" +
        "- For the first term: $$3\\int x dx = 3[\\frac{x^2}{2}]_1^3 = \\frac{3}{2}(9-1)=\\frac{3}{2}(8)=12.$$ ✓\n" +
        "- For the constant term: $$4(3-1)=8.$$ ✓\n" +
        "- For $$\\ln(3)$$: correct. ✓\n\n" +
        "**Final Result:**\n" +
        "$$\\boxed{20 + \\ln(3)}$$\n\n" +
        "**Correction (Rechecking the integrand’s simplification)**\n" +
        "Wait—let’s confirm: $$3x^2 + 4x + 1$$ divided by $$x$$ is $$3x + 4 + 1/x$$, yes. So no missing factor.\n\n" +
        "However, let's double-check the coefficient results again for consistency with typical multiple-choice structure.\n\n" +
        "If the integral limits were substituted incorrectly, recompute explicitly:\n" +
        "$$\\int_1^3 (3x + 4 + \\frac{1}{x}) dx = [\\frac{3x^2}{2} + 4x + \\ln|x|]_1^3$$\n" +
        "$$= \\left(\\frac{3(9)}{2} + 12 + \\ln(3)\\right) - \\left(\\frac{3(1)}{2} + 4 + 0\\right)$$\n" +
        "$$= (13.5 + 12 + \\ln(3)) - (1.5 + 4)$$\n" +
        "$$= 25.5 - 5.5 + \\ln(3) = 20 + \\ln(3).$$ ✓\n\n" +
        "**Step 6: Identify the theorem used**\n" +
        "This uses the **Fundamental Theorem of Calculus, Part 2**, which states:\n" +
        "$$\\int_a^b f(x)\\,dx = F(b) - F(a),$$ where $$F'(x) = f(x).$$\n\n" +
        "**Key Insight:**\n" +
        "- Always simplify rational expressions before integrating.\n" +
        "- Combine terms carefully after evaluating.\n" +
        "- Verify with substitution at the limits.\n\n" +
        "**Final Answer:**\n" +
        "$$\\boxed{\\int_{1}^{3}\\left(\\frac{3x^2+4x+1}{x}\\right)dx = 20 + \\ln(3)}$$"
  }
]