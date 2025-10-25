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
    correctAnswers: ["1.901", "≈1.893", "approximately 1.9", "≈ 1.9"],
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
    text: "Use properties of integrals to evaluate \\( \\int_1^3 (2e^x + 1)\\,dx \\). Give your answer in terms of $\\mathbf{e}$",
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
      text: "Use Part 2 of the Fundamental Theorem of Calculus to evaluate \\( \\int_{1}^{3}(x^{2}+2x-4)\\,dx \\).",
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
      correctAnswers: ["e^(-tan^2 x) * sec^2 x", "e^(-(tan(x))^2) * sec^2(x)","sec^2 (x) * e^(-tan(x)^2)","sec^2 (x) * e^(-tan^2 (x))"],
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
    },
    {
      id: "q26",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "The acceleration function (in m/s²) for a particle moving along a line is given by \\( a(t) = t + 4 \\), and the initial velocity is \\( v(0) = 5 \\). Find the **velocity at time \\( t \\)**. Express your answer as a function of \\( t \\).",
      
      correctAnswers: [
        "t^2/2 + 4t + 5",
        "(1/2)t^2 + 4t + 5",
        "0.5t^2 + 4t + 5",
        "t^2/2+4t+5",
        "(t^2)/2 + 4t + 5"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "To find velocity from acceleration, we need to integrate the acceleration function and use the initial condition.\n\n" +
        "**Step 1: Understand the relationship between acceleration and velocity**\n\n" +
        "Velocity \\( v(t) \\) is the antiderivative of acceleration \\( a(t) \\):\n\n" +
        "$$v(t) = \\int a(t)\\,dt$$\n\n" +
        "**Step 2: Integrate the acceleration function**\n\n" +
        "Given \\( a(t) = t + 4 \\):\n\n" +
        "$$v(t) = \\int (t + 4)\\,dt$$\n\n" +
        "Apply the Power Rule to each term:\n\n" +
        "$$v(t) = \\frac{t^2}{2} + 4t + C$$\n\n" +
        "where \\( C \\) is the constant of integration.\n\n" +
        "**Step 3: Use the initial condition to find \\( C \\)**\n\n" +
        "We're given that \\( v(0) = 5 \\). Substitute \\( t = 0 \\) into our velocity function:\n\n" +
        "$$v(0) = \\frac{(0)^2}{2} + 4(0) + C = 5$$\n\n" +
        "$$0 + 0 + C = 5$$\n\n" +
        "$$C = 5$$\n\n" +
        "**Step 4: Write the complete velocity function**\n\n" +
        "Substitute \\( C = 5 \\) back into the velocity equation:\n\n" +
        "$$v(t) = \\frac{t^2}{2} + 4t + 5$$\n\n" +
        "This can also be written as:\n\n" +
        "$$v(t) = \\frac{1}{2}t^2 + 4t + 5 \\text{ m/s}$$\n\n" +
        "**Answer: \\( v(t) = \\frac{t^2}{2} + 4t + 5 \\)**"
    },

    {
      id: "q27",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "The acceleration function (in m/s²) for a particle moving along a line is given by \\( a(t) = t + 4 \\), and the initial velocity is \\( v(0) = 5 \\). Find the **distance traveled** during the time interval \\( 0 \\le t \\le 10 \\). Express your answer as a simplified fraction or decimal rounded to two decimal places.",
      
      correctAnswers: [
        "1250/3",
        "416.67",
        "416.7",
        "417",
        "≈416.67"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.02,
        acceptedUnits: ["m"],
        requiredUnit: null
      },
      
      explanation: "Distance traveled is found by integrating the speed (absolute value of velocity) over the time interval.\n\n" +
        "**Step 1: Find the velocity function**\n\n" +
        "From the previous part, we found:\n\n" +
        "$$v(t) = \\frac{t^2}{2} + 4t + 5$$\n\n" +
        "**Step 2: Determine if velocity changes sign on \\([0, 10]\\)**\n\n" +
        "To find distance (not displacement), we need \\( \\int_{0}^{10} |v(t)|\\,dt \\). First, check if \\( v(t) \\) is always positive or if it changes sign.\n\n" +
        "The velocity function \\( v(t) = \\frac{1}{2}t^2 + 4t + 5 \\) is a parabola opening upward (since the coefficient of \\( t^2 \\) is positive).\n\n" +
        "At \\( t = 0 \\): \\( v(0) = 5 > 0 \\)\n\n" +
        "The vertex occurs at \\( t = -\\frac{b}{2a} = -\\frac{4}{2(1/2)} = -\\frac{4}{1} = -4 \\)\n\n" +
        "Since the vertex is at \\( t = -4 \\) (outside our interval \\([0, 10]\\)) and the parabola opens upward with \\( v(0) = 5 > 0 \\), the velocity is **always positive** on \\([0, 10]\\).\n\n" +
        "Therefore: \\( |v(t)| = v(t) \\) on this interval.\n\n" +
        "**Step 3: Calculate the distance**\n\n" +
        "$$\\text{Distance} = \\int_{0}^{10} v(t)\\,dt = \\int_{0}^{10} \\left(\\frac{t^2}{2} + 4t + 5\\right)dt$$\n\n" +
        "**Step 4: Find the antiderivative**\n\n" +
        "$$F(t) = \\frac{1}{2} \\cdot \\frac{t^3}{3} + 4 \\cdot \\frac{t^2}{2} + 5t$$\n\n" +
        "$$F(t) = \\frac{t^3}{6} + 2t^2 + 5t$$\n\n" +
        "**Step 5: Evaluate at the limits**\n\n" +
        "$$\\text{Distance} = \\left[\\frac{t^3}{6} + 2t^2 + 5t\\right]_{0}^{10}$$\n\n" +
        "$$= \\left(\\frac{1000}{6} + 2(100) + 5(10)\\right) - (0)$$\n\n" +
        "$$= \\frac{1000}{6} + 200 + 50$$\n\n" +
        "Convert to a common denominator:\n\n" +
        "$$= \\frac{1000}{6} + \\frac{1200}{6} + \\frac{300}{6}$$\n\n" +
        "$$= \\frac{2500}{6} = \\frac{1250}{3}$$\n\n" +
        "$$\\approx 416.67 \\text{ meters}$$\n\n" +
        "**Answer: \\( \\frac{1250}{3} \\) meters or approximately 416.67 meters**"
    },
    {
    id: "q28",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "Which statement about the area under a curve is correct?",
    options: [
      "A. A left Riemann sum always equals the exact area under any increasing function.",
      "B. A right Riemann sum always equals the exact area under any decreasing function.",
      "C. The exact area under \\( y = f(x) \\) on \\([a, b]\\) is given by \\( \\int_a^b f(x)\\,dx \\) when \\( f \\) is integrable.",
      "D. The midpoint sum is always less accurate than the left sum.",
      "E. The trapezoidal rule never equals the exact area."
    ],
    correctAnswers: ["C"],
    explanation:
      "✅ **Correct (C)**: The exact area under \\(y=f(x)\\) on \\([a,b]\\) is given by the definite integral \\(\\int_a^b f(x)\\,dx\\) when \\(f\\) is integrable.\n\n" +
      "**Explanation of each option:**\n\n" +
      "- **(A)** Left Riemann sum \\(L_n\\) is an *approximation* and underestimates for increasing functions; only equals the true area as \\(n \\to \\infty\\).\n" +
      "- **(B)** Right Riemann sum \\(R_n\\) is also approximate; for decreasing functions, it's an *underestimate*, not exact.\n" +
      "- **(C)** Correct: by definition of the definite integral, \\(\\int_a^b f(x)\\,dx\\) gives the exact (signed) area when \\(f\\) is integrable.\n" +
      "- **(D)** Midpoint rule is typically *more accurate* than left or right sums, not less.\n" +
      "- **(E)** The trapezoidal rule *can* be exact if \\(f(x)\\) is linear."
    },
    {
    id: "q29",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "Which statement about displacement on \\([t_1, t_2]\\) is correct?",
    options: [
      "A. Displacement is always nonnegative because distance is nonnegative.",
      "B. Displacement can be negative; it equals \\( \\int_{t_1}^{t_2} v(t)\\,dt \\).",
      "C. Displacement equals total distance travelled.",
      "D. Displacement is the derivative of velocity.",
      "E. Displacement is the area under \\(|v(t)|\\)."
    ],
    correctAnswers: ["B"],
    explanation:
      "✅ **Correct (B)**: Displacement can be negative and is given by \\(\\int_{t_1}^{t_2} v(t)\\,dt\\). This integral gives the *signed area* under the velocity–time curve.\n\n" +
      "**Explanation of each option:**\n\n" +
      "- **(A)** False — displacement can be negative; distance is always nonnegative.\n" +
      "- **(B)** Correct — it represents net change in position and can be negative when motion is backward.\n" +
      "- **(C)** False — displacement equals distance *only* when motion is in one direction.\n" +
      "- **(D)** False — the derivative of velocity is acceleration.\n" +
      "- **(E)** False — \\(\\int |v(t)|\\,dt\\) gives total *distance*, not displacement."
    },
    {
    id: "q30",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "Which statement best distinguishes the two parts of the Fundamental Theorem of Calculus (FTC)?",
    options: [
      "A. FTC 1 evaluates definite integrals; FTC 2 differentiates accumulations.",
      "B. FTC 1 links differentiation and accumulation (\\(\\frac{d}{dx}\\int_a^x f = f\\)); FTC 2 evaluates \\(\\int_a^b f\\) via an antiderivative.",
      "C. Both theorems provide numerical approximation schemes.",
      "D. FTC 1 concerns improper integrals; FTC 2 concerns Riemann sums.",
      "E. They are identical statements."
    ],
    correctAnswers: ["B"],
    explanation:
      "✅ **Correct (B)**: FTC 1 connects differentiation and integration, stating that \\(\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)\\). FTC 2 provides a method for evaluating definite integrals using antiderivatives: \\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\).\n\n" +
      "**Explanation of each option:**\n\n" +
      "- **(A)** Reversed — FTC 1 differentiates, FTC 2 evaluates.\n" +
      "- **(B)** Correct — distinguishes the two roles accurately.\n" +
      "- **(C)** False — FTCs are exact, not approximations.\n" +
      "- **(D)** False — both deal with proper definite integrals.\n" +
      "- **(E)** False — they are distinct but related statements."
    },

    {
    id: "q31",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "Why do we add '+C' after computing an indefinite integral?",
    options: [
      "A. To make the answer look complete.",
      "B. Because antiderivatives differ by a constant; \\(\\frac{d}{dx}(C) = 0\\).",
      "C. Because definite integrals need a constant.",
      "D. Because integrals are always improper.",
      "E. To cancel units."
    ],
    correctAnswers: ["B"],
    explanation:
      "✅ **Correct (B)**: All antiderivatives of \\(f(x)\\) differ by a constant, since \\(\\frac{d}{dx}(C)=0\\). The '+C' accounts for this family of functions.\n\n" +
      "**Explanation of each option:**\n\n" +
      "- **(A)** False — not aesthetic, it’s mathematical.\n" +
      "- **(B)** Correct — captures the general solution set.\n" +
      "- **(C)** False — definite integrals produce a single number, no constant.\n" +
      "- **(D)** False — many integrals are proper.\n" +
      "- **(E)** False — constants don’t affect units."
    },
    {
    id: "q32",
    moduleId: "ITMTB",
    weekId: "ITMTB_W2",
    type: "multiple-choice",
    text: "Which integral gives an exact accumulated value on an interval when \\(f\\) is integrable?",
    options: [
      "A. An indefinite integral \\(\\int f(x)\\,dx\\).",
      "B. A left Riemann sum with \\(n = 4\\).",
      "C. A right Riemann sum with \\(n = 10\\).",
      "D. The definite integral \\(\\int_a^b f(x)\\,dx\\).",
      "E. A midpoint sum with any \\(n\\)."
    ],
    correctAnswers: ["D"],
    explanation:
      "✅ **Correct (D)**: The definite integral \\(\\int_a^b f(x)\\,dx\\) gives the *exact accumulated value* (net area or change) when \\(f\\) is integrable.\n\n" +
      "**Explanation of each option:**\n\n" +
      "- **(A)** Indefinite integrals give a family of antiderivatives, not a numeric value.\n" +
      "- **(B)** and **(C)** Riemann sums with finite \\(n\\) are approximations.\n" +
      "- **(D)** Correct — the definite integral equals the limit of Riemann sums as \\(n \\to \\infty\\).\n" +
      "- **(E)** Midpoint sum approximates, not exact unless \\(f(x)\\) is linear."
    },
    {
      id: "q33",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Let \\( f(x) = x^2 + 2 \\). On \\([0, 6]\\), use a **left Riemann sum** with \\( n = 4 \\) subintervals to approximate the area under \\( f \\). Round your answer to two decimal places if needed.",
      
      correctAnswers: [
        "59.25",
        "59.3",
        "59",
        "60"
      ],
      
      options: {
        allowSymbolic: false,
        tolerance: 0.02,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "To approximate the area under \\( f(x) = x^2 + 2 \\) using a left Riemann sum, we follow these steps:\n\n" +
        "**Step 1: Determine the width of each subinterval (\\( \\Delta x \\))**\n\n" +
        "The interval is \\([a, b] = [0, 6]\\) and we're dividing it into \\( n = 4 \\) subintervals.\n\n" +
        "$$\\Delta x = \\frac{b - a}{n} = \\frac{6 - 0}{4} = \\frac{6}{4} = 1.5$$\n\n" +
        "**Step 2: Identify the subintervals and left endpoints**\n\n" +
        "Starting at \\( x_0 = 0 \\) and increasing by \\( \\Delta x = 1.5 \\), we get the endpoints:\n\n" +
        "- \\( x_0 = 0 \\)\n" +
        "- \\( x_1 = 1.5 \\)\n" +
        "- \\( x_2 = 3.0 \\)\n" +
        "- \\( x_3 = 4.5 \\)\n" +
        "- \\( x_4 = 6.0 \\)\n\n" +
        "The four subintervals are: \\([0, 1.5]\\), \\([1.5, 3.0]\\), \\([3.0, 4.5]\\), \\([4.5, 6.0]\\).\n\n" +
        "For a **left Riemann sum**, we use the **left endpoints**: \\( 0, 1.5, 3.0, 4.5 \\).\n\n" +
        "**Step 3: Calculate the height of each rectangle**\n\n" +
        "Evaluate \\( f(x) \\) at each left endpoint:\n\n" +
        "$$f(0) = (0)^2 + 2 = 2$$\n\n" +
        "$$f(1.5) = (1.5)^2 + 2 = 2.25 + 2 = 4.25$$\n\n" +
        "$$f(3.0) = (3.0)^2 + 2 = 9 + 2 = 11$$\n\n" +
        "$$f(4.5) = (4.5)^2 + 2 = 20.25 + 2 = 22.25$$\n\n" +
        "**Step 4: Compute the left Riemann sum**\n\n" +
        "The left Riemann sum is the sum of the areas of the four rectangles:\n\n" +
        "$$L_4 = \\Delta x \\cdot [f(0) + f(1.5) + f(3.0) + f(4.5)]$$\n\n" +
        "$$L_4 = 1.5 \\cdot [2 + 4.25 + 11 + 22.25]$$\n\n" +
        "$$L_4 = 1.5 \\cdot [39.5]$$\n\n" +
        "$$L_4 = 59.25$$\n\n" +
        "**Answer: 59.25 square units**"
    },

    {
      id: "q34",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Using the definition \\( \\int_{0}^{1} x^2 dx = \\lim_{n\\to\\infty} \\sum_{i=1}^{n} f(x_{i}^{*}) \\Delta x \\) with right endpoints \\( x_{i}^{*} = \\frac{i}{n} \\) and \\( \\Delta x = \\frac{1}{n} \\), evaluate the integral. Express your answer as a simplified fraction.",
      
      correctAnswers: [
        "1/3",
        "0.333",
        "0.33",
        ".333",
        ".33"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.01,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "We'll evaluate this integral using the limit definition of the definite integral with right endpoints.\n\n" +
        "**Step 1: Set up the Riemann sum**\n\n" +
        "Given \\( f(x) = x^2 \\) on the interval \\([0, 1]\\), with:\n" +
        "- Right endpoints: \\( x_i^* = \\frac{i}{n} \\)\n" +
        "- Width of each subinterval: \\( \\Delta x = \\frac{1}{n} \\)\n\n" +
        "Evaluate \\( f \\) at each right endpoint:\n\n" +
        "$$f(x_i^*) = f\\left(\\frac{i}{n}\\right) = \\left(\\frac{i}{n}\\right)^2 = \\frac{i^2}{n^2}$$\n\n" +
        "The Riemann sum becomes:\n\n" +
        "$$\\sum_{i=1}^{n} f(x_i^*) \\Delta x = \\sum_{i=1}^{n} \\frac{i^2}{n^2} \\cdot \\frac{1}{n} = \\sum_{i=1}^{n} \\frac{i^2}{n^3}$$\n\n" +
        "**Step 2: Factor out the constant**\n\n" +
        "Since \\( \\frac{1}{n^3} \\) is constant with respect to \\( i \\), we can factor it out:\n\n" +
        "$$\\sum_{i=1}^{n} \\frac{i^2}{n^3} = \\frac{1}{n^3} \\sum_{i=1}^{n} i^2$$\n\n" +
        "**Step 3: Apply the summation formula**\n\n" +
        "We use the formula for the sum of the first \\( n \\) squares:\n\n" +
        "$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$\n\n" +
        "Substituting this:\n\n" +
        "$$\\frac{1}{n^3} \\cdot \\frac{n(n+1)(2n+1)}{6} = \\frac{n(n+1)(2n+1)}{6n^3}$$\n\n" +
        "**Step 4: Simplify the expression**\n\n" +
        "Expand the numerator:\n\n" +
        "$$n(n+1)(2n+1) = n(2n^2 + 3n + 1) = 2n^3 + 3n^2 + n$$\n\n" +
        "So:\n\n" +
        "$$\\frac{2n^3 + 3n^2 + n}{6n^3}$$\n\n" +
        "**Step 5: Evaluate the limit as \\( n \\to \\infty \\)**\n\n" +
        "$$\\int_{0}^{1} x^2 dx = \\lim_{n\\to\\infty} \\frac{2n^3 + 3n^2 + n}{6n^3}$$\n\n" +
        "Divide each term in the numerator by \\( n^3 \\):\n\n" +
        "$$= \\lim_{n\\to\\infty} \\frac{2n^3}{6n^3} + \\frac{3n^2}{6n^3} + \\frac{n}{6n^3}$$\n\n" +
        "$$= \\lim_{n\\to\\infty} \\left(\\frac{2}{6} + \\frac{3}{6n} + \\frac{1}{6n^2}\\right)$$\n\n" +
        "As \\( n \\to \\infty \\), the terms \\( \\frac{3}{6n} \\) and \\( \\frac{1}{6n^2} \\) approach zero:\n\n" +
        "$$= \\frac{2}{6} = \\frac{1}{3}$$\n\n" +
        "**Answer: \\( \\frac{1}{3} \\)**"
    },

    {
      id: "q35",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "A particle moves along a line with velocity \\( v(t) = t^2 - 4t \\) (m/s), for \\( t \\in [0, 6] \\) (seconds). Compute the **displacement** over \\([0, 6]\\). Express your answer in meters.",
      
      correctAnswers: [
        "0",
        "0 m",
        "0m",
        "0.0"
      ],
      
      options: {
        allowSymbolic: false,
        tolerance: 0.001,
        acceptedUnits: ["m"],
        requiredUnit: null
      },
      
      explanation: "**Displacement** is the net change in position, calculated by integrating the velocity function over the time interval.\n\n" +
        "$$\\text{Displacement} = \\int_{0}^{6} v(t)\\,dt = \\int_{0}^{6} (t^2 - 4t)\\,dt$$\n\n" +
        "**Step 1: Find the antiderivative**\n\n" +
        "$$F(t) = \\int (t^2 - 4t)\\,dt = \\frac{t^3}{3} - 4 \\cdot \\frac{t^2}{2} = \\frac{t^3}{3} - 2t^2$$\n\n" +
        "**Step 2: Apply the Fundamental Theorem of Calculus**\n\n" +
        "Evaluate \\( F(t) \\) at the boundaries:\n\n" +
        "$$\\text{Displacement} = F(6) - F(0)$$\n\n" +
        "Calculate \\( F(6) \\):\n\n" +
        "$$F(6) = \\frac{6^3}{3} - 2(6^2) = \\frac{216}{3} - 2(36) = 72 - 72 = 0$$\n\n" +
        "Calculate \\( F(0) \\):\n\n" +
        "$$F(0) = \\frac{0^3}{3} - 2(0^2) = 0$$\n\n" +
        "**Step 3: Compute the displacement**\n\n" +
        "$$\\text{Displacement} = 0 - 0 = 0\\text{ meters}$$\n\n" +
        "**Interpretation:** A displacement of 0 meters means the particle returned to its starting position after 6 seconds.\n\n" +
        "**Answer: 0 meters**"
    },

    {
      id: "q36",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "A particle moves along a line with velocity \\( v(t) = t^2 - 4t \\) (m/s), for \\( t \\in [0, 6] \\) (seconds). Compute the **total distance travelled** over \\([0, 6]\\). Express your answer as a simplified fraction or decimal rounded to two decimal places.",
      
      correctAnswers: [
        "64/3",
        "21.33",
        "21.3",
        "21",
        "≈21.33"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.05,
        acceptedUnits: ["m"],
        requiredUnit: null
      },
      
      explanation: "**Total distance travelled** is the accumulation of the particle's speed (absolute value of velocity) over time.\n\n" +
        "$$\\text{Distance} = \\int_{0}^{6} |v(t)|\\,dt$$\n\n" +
        "**Step 1: Find where velocity changes sign**\n\n" +
        "Set \\( v(t) = 0 \\):\n\n" +
        "$$t^2 - 4t = 0$$\n\n" +
        "$$t(t - 4) = 0$$\n\n" +
        "The roots are \\( t = 0 \\) and \\( t = 4 \\).\n\n" +
        "This divides \\([0, 6]\\) into two intervals: \\([0, 4]\\) and \\([4, 6]\\).\n\n" +
        "**Step 2: Determine the sign of \\( v(t) \\) on each interval**\n\n" +
        "- **On \\([0, 4]\\):** Test \\( t = 1 \\): \\( v(1) = 1 - 4 = -3 < 0 \\). Velocity is **negative** (moving backward).\n" +
        "- **On \\([4, 6]\\):** Test \\( t = 5 \\): \\( v(5) = 25 - 20 = 5 > 0 \\). Velocity is **positive** (moving forward).\n\n" +
        "**Step 3: Set up the integral with absolute values**\n\n" +
        "Since \\( v(t) \\) is negative on \\([0, 4]\\), we negate it to get speed:\n\n" +
        "$$\\text{Distance} = \\int_{0}^{4} -(t^2 - 4t)\\,dt + \\int_{4}^{6} (t^2 - 4t)\\,dt$$\n\n" +
        "$$= \\int_{0}^{4} (4t - t^2)\\,dt + \\int_{4}^{6} (t^2 - 4t)\\,dt$$\n\n" +
        "**Step 4: Evaluate the first integral (backward motion on \\([0, 4]\\))**\n\n" +
        "$$D_1 = \\int_{0}^{4} (4t - t^2)\\,dt = \\left[2t^2 - \\frac{t^3}{3}\\right]_{0}^{4}$$\n\n" +
        "$$= \\left(2(16) - \\frac{64}{3}\\right) - 0$$\n\n" +
        "$$= 32 - \\frac{64}{3} = \\frac{96}{3} - \\frac{64}{3} = \\frac{32}{3}$$\n\n" +
        "**Step 5: Evaluate the second integral (forward motion on \\([4, 6]\\))**\n\n" +
        "$$D_2 = \\int_{4}^{6} (t^2 - 4t)\\,dt = \\left[\\frac{t^3}{3} - 2t^2\\right]_{4}^{6}$$\n\n" +
        "$$= \\left(\\frac{216}{3} - 2(36)\\right) - \\left(\\frac{64}{3} - 2(16)\\right)$$\n\n" +
        "$$= (72 - 72) - \\left(\\frac{64}{3} - 32\\right)$$\n\n" +
        "$$= 0 - \\left(\\frac{64}{3} - \\frac{96}{3}\\right)$$\n\n" +
        "$$= 0 - \\left(-\\frac{32}{3}\\right) = \\frac{32}{3}$$\n\n" +
        "**Step 6: Calculate total distance**\n\n" +
        "$$\\text{Total Distance} = D_1 + D_2 = \\frac{32}{3} + \\frac{32}{3} = \\frac{64}{3} \\approx 21.33\\text{ meters}$$\n\n" +
        "**Answer: \\( \\frac{64}{3} \\) meters or approximately 21.33 meters**"
    },

    {
      id: "q37",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Define \\( G(x) = \\int_{2}^{x^3} \\frac{1}{1+t^2}\\,dt \\). Find \\( G'(x) \\). Express your answer in simplified form.",
      
      correctAnswers: [
        "3x^2/(1+x^6)",
        "(3x^2)/(1+x^6)",
        "3x^2/(1 + x^6)",
        "3*x^2/(1+x^6)"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "This problem requires the **Fundamental Theorem of Calculus (FTC), Part 1**, combined with the **Chain Rule**.\n\n" +
        "**FTC Part 1 (with Chain Rule):** If \\( G(x) = \\int_{a}^{u(x)} f(t)\\,dt \\), then:\n\n" +
        "$$G'(x) = f(u(x)) \\cdot u'(x)$$\n\n" +
        "**Step 1: Identify the components**\n\n" +
        "- Integrand: \\( f(t) = \\frac{1}{1+t^2} \\)\n" +
        "- Upper limit: \\( u(x) = x^3 \\)\n" +
        "- Lower limit: constant (2)\n\n" +
        "**Step 2: Find the derivative of the upper limit**\n\n" +
        "$$u'(x) = \\frac{d}{dx}(x^3) = 3x^2$$\n\n" +
        "**Step 3: Evaluate the integrand at the upper limit**\n\n" +
        "Substitute \\( t = u(x) = x^3 \\) into \\( f(t) \\):\n\n" +
        "$$f(u(x)) = f(x^3) = \\frac{1}{1 + (x^3)^2} = \\frac{1}{1 + x^6}$$\n\n" +
        "**Step 4: Apply the Chain Rule formula**\n\n" +
        "$$G'(x) = f(u(x)) \\cdot u'(x)$$\n\n" +
        "$$G'(x) = \\frac{1}{1 + x^6} \\cdot 3x^2$$\n\n" +
        "$$G'(x) = \\frac{3x^2}{1 + x^6}$$\n\n" +
        "**Answer: \\( \\frac{3x^2}{1 + x^6} \\)**"
    },

    {
      id: "q38",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Evaluate the definite integral \\( \\int_{0}^{2} (4x - 1)\\,dx \\) using an antiderivative.",
      
      correctAnswers: [
        "6",
        "6.0"
      ],
      
      options: {
        allowSymbolic: false,
        tolerance: 0.001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "We use the **Fundamental Theorem of Calculus (FTC), Part 2**, which states:\n\n" +
        "$$\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$$\n\n" +
        "where \\( F(x) \\) is any antiderivative of \\( f(x) \\).\n\n" +
        "**Step 1: Find the antiderivative**\n\n" +
        "For \\( f(x) = 4x - 1 \\), we integrate term by term:\n\n" +
        "$$F(x) = \\int (4x - 1)\\,dx = 4 \\cdot \\frac{x^2}{2} - x = 2x^2 - x$$\n\n" +
        "(Note: We don't need the constant \\( +C \\) for definite integrals since it cancels out.)\n\n" +
        "**Step 2: Evaluate at the limits of integration**\n\n" +
        "$$\\int_{0}^{2} (4x - 1)\\,dx = [2x^2 - x]_{0}^{2}$$\n\n" +
        "$$= F(2) - F(0)$$\n\n" +
        "**Step 3: Calculate \\( F(2) \\)**\n\n" +
        "$$F(2) = 2(2)^2 - 2 = 2(4) - 2 = 8 - 2 = 6$$\n\n" +
        "**Step 4: Calculate \\( F(0) \\)**\n\n" +
        "$$F(0) = 2(0)^2 - 0 = 0$$\n\n" +
        "**Step 5: Compute the difference**\n\n" +
        "$$\\int_{0}^{2} (4x - 1)\\,dx = 6 - 0 = 6$$\n\n" +
        "**Answer: 6**"
    },

    {
      id: "q39",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Let \\( h(x) = x^2 + 1 \\) and \\( g(x) = x + 1 \\). Evaluate \\( I(x) = \\int_{g(x)}^{h(x)} (6t^2 - 4t + 1)\\,dt \\) as a simplified function of \\( x \\).",
      
      correctAnswers: [
        "2x^6 + 4x^4 - 2x^3 - x^2 - 3x",
        "2x^6+4x^4-2x^3-x^2-3x",
        "2*x^6 + 4*x^4 - 2*x^3 - x^2 - 3*x"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "This integral has limits that are functions of \\( x \\). We'll find the antiderivative and then evaluate it at both limits.\n\n" +
        "**Step 1: Find the antiderivative of the integrand**\n\n" +
        "For \\( f(t) = 6t^2 - 4t + 1 \\):\n\n" +
        "$$F(t) = \\int (6t^2 - 4t + 1)\\,dt = 6 \\cdot \\frac{t^3}{3} - 4 \\cdot \\frac{t^2}{2} + t$$\n\n" +
        "$$F(t) = 2t^3 - 2t^2 + t$$\n\n" +
        "**Step 2: Apply FTC with function limits**\n\n" +
        "$$I(x) = [F(t)]_{g(x)}^{h(x)} = F(h(x)) - F(g(x))$$\n\n" +
        "where \\( h(x) = x^2 + 1 \\) and \\( g(x) = x + 1 \\).\n\n" +
        "**Step 3: Evaluate \\( F(h(x)) \\)**\n\n" +
        "Substitute \\( t = x^2 + 1 \\):\n\n" +
        "$$F(x^2+1) = 2(x^2+1)^3 - 2(x^2+1)^2 + (x^2+1)$$\n\n" +
        "Expand \\( (x^2+1)^3 = x^6 + 3x^4 + 3x^2 + 1 \\):\n\n" +
        "$$= 2(x^6 + 3x^4 + 3x^2 + 1) - 2(x^4 + 2x^2 + 1) + x^2 + 1$$\n\n" +
        "$$= 2x^6 + 6x^4 + 6x^2 + 2 - 2x^4 - 4x^2 - 2 + x^2 + 1$$\n\n" +
        "$$= 2x^6 + 4x^4 + 3x^2 + 1$$\n\n" +
        "**Step 4: Evaluate \\( F(g(x)) \\)**\n\n" +
        "Substitute \\( t = x + 1 \\):\n\n" +
        "$$F(x+1) = 2(x+1)^3 - 2(x+1)^2 + (x+1)$$\n\n" +
        "Expand \\( (x+1)^3 = x^3 + 3x^2 + 3x + 1 \\):\n\n" +
        "$$= 2(x^3 + 3x^2 + 3x + 1) - 2(x^2 + 2x + 1) + x + 1$$\n\n" +
        "$$= 2x^3 + 6x^2 + 6x + 2 - 2x^2 - 4x - 2 + x + 1$$\n\n" +
        "$$= 2x^3 + 4x^2 + 3x + 1$$\n\n" +
        "**Step 5: Compute \\( I(x) = F(h(x)) - F(g(x)) \\)**\n\n" +
        "$$I(x) = (2x^6 + 4x^4 + 3x^2 + 1) - (2x^3 + 4x^2 + 3x + 1)$$\n\n" +
        "$$= 2x^6 + 4x^4 + 3x^2 + 1 - 2x^3 - 4x^2 - 3x - 1$$\n\n" +
        "$$= 2x^6 + 4x^4 - 2x^3 - x^2 - 3x$$\n\n" +
        "**Answer: \\( 2x^6 + 4x^4 - 2x^3 - x^2 - 3x \\)**"
    },
    {
      id: "q40",
      moduleId: "ITMTB",
      weekId: "ITMTB_W2",
      type: "open-ended",
      text: "Compute \\( \\int (3x^2 - 2x + 5)\\,dx \\). Include the constant of integration in your answer (use C for the constant).",
      
      correctAnswers: [
        "x^3 - x^2 + 5x + C",
        "x^3-x^2+5x+C",
        "x^3 - x^2 + 5x + c",
        "x^3-x^2+5x+c"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "This is an **indefinite integral**, which means we're finding the general antiderivative (a family of functions). We must include the constant of integration \\( +C \\).\n\n" +
        "**Step 1: Integrate term by term**\n\n" +
        "We'll use the **Sum Rule** for integration, which allows us to integrate each term separately:\n\n" +
        "$$\\int (3x^2 - 2x + 5)\\,dx = \\int 3x^2\\,dx - \\int 2x\\,dx + \\int 5\\,dx$$\n\n" +
        "**Step 2: Apply the Power Rule**\n\n" +
        "The Power Rule for integration states: \\( \\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\) (for \\( n \\neq -1 \\)).\n\n" +
        "**First term:** \\( \\int 3x^2\\,dx \\)\n\n" +
        "$$= 3 \\int x^2\\,dx = 3 \\cdot \\frac{x^{2+1}}{2+1} = 3 \\cdot \\frac{x^3}{3} = x^3$$\n\n" +
        "**Second term:** \\( \\int 2x\\,dx \\)\n\n" +
        "$$= 2 \\int x\\,dx = 2 \\cdot \\frac{x^{1+1}}{1+1} = 2 \\cdot \\frac{x^2}{2} = x^2$$\n\n" +
        "**Third term:** \\( \\int 5\\,dx \\)\n\n" +
        "$$= 5x$$\n\n" +
        "(Remember: \\( \\int k\\,dx = kx \\) for any constant \\( k \\))\n\n" +
        "**Step 3: Combine the terms and add the constant of integration**\n\n" +
        "$$\\int (3x^2 - 2x + 5)\\,dx = x^3 - x^2 + 5x + C$$\n\n" +
        "The \\( +C \\) represents the constant of integration, which accounts for the fact that the derivative of any constant is zero.\n\n" +
        "**Answer: \\( x^3 - x^2 + 5x + C \\)**"
    },

    {
      id: "q41",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "Evaluate the indefinite integral \\( \\int (3x^2 + 1)^4 (6x)\\,dx \\).",
      
      correctAnswers: [
        "(1/5)*(3x^2 + 1)^5 + C",
        "(3x^2 + 1)^5/5 + C",
        "0.2*(3x^2 + 1)^5 + C",
        "(1/5)(3x^2 + 1)^5 + C"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Identify \\( u \\) and \\( du \\):** The integrand contains a composite function, \\( (3x^2 + 1)^4 \\). We choose the inner function as \\( u \\).\n\n" +
        "- Let **\\( u = 3x^2 + 1 \\)**\n\n" +
        "**2. Differentiate \\( u \\) to find \\( du \\):** Take the derivative of \\( u \\) with respect to \\( x \\) and attach \\( dx \\).\n\n" +
        "- \\( \\frac{du}{dx} = 6x \\)\n" +
        "- **\\( du = 6x\\,dx \\)**\n\n" +
        "**3. Substitute:** Notice that the term \\( 6x\\,dx \\) is perfectly matched by \\( du \\). The integral simplifies completely.\n\n" +
        "$$\\int (3x^2 + 1)^4 (6x)\\,dx = \\int u^4\\,du$$\n\n" +
        "**4. Integrate:** Use the simple power rule: \\( \\int u^n\\,du = \\frac{u^{n+1}}{n+1} \\).\n\n" +
        "$$\\int u^4\\,du = \\frac{u^5}{5} + C$$\n\n" +
        "**5. Re-substitute \\( x \\):** Replace \\( u \\) with the original expression \\( 3x^2 + 1 \\) to get the final answer.\n\n" +
        "$$\\frac{1}{5}(3x^2 + 1)^5 + C$$"
    },

    {
      id: "q42",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "Evaluate the indefinite integral \\( \\int x \\cos(4x^2)\\,dx \\).",
      
      correctAnswers: [
        "(1/8)*sin(4x^2) + C",
        "sin(4x^2)/8 + C",
        "0.125*sin(4x^2) + C",
        "(1/8)sin(4x^2) + C"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Identify \\( u \\) and \\( du \\):** The cosine function is acting on \\( 4x^2 \\), making it the inner function.\n\n" +
        "- Let **\\( u = 4x^2 \\)**\n\n" +
        "**2. Differentiate \\( u \\) to find \\( du \\):**\n\n" +
        "- \\( \\frac{du}{dx} = 8x \\)\n" +
        "- \\( du = 8x\\,dx \\)\n\n" +
        "**3. Adjust for the Missing Constant:** The original integral has \\( x\\,dx \\), but we need \\( 8x\\,dx \\). We can solve the \\( du \\) equation for the term we actually have:\n\n" +
        "- \\( x\\,dx = \\frac{1}{8}du \\)\n\n" +
        "**4. Substitute:** Replace \\( 4x^2 \\) with \\( u \\) and \\( x\\,dx \\) with \\( \\frac{1}{8}du \\).\n\n" +
        "$$\\int \\cos(4x^2)(x\\,dx) = \\int \\cos(u)\\left(\\frac{1}{8}du\\right) = \\frac{1}{8}\\int \\cos(u)\\,du$$\n\n" +
        "**5. Integrate:** The integral of \\( \\cos(u) \\) is \\( \\sin(u) \\).\n\n" +
        "$$\\frac{1}{8}\\int \\cos(u)\\,du = \\frac{1}{8}\\sin(u) + C$$\n\n" +
        "**6. Re-substitute \\( x \\):**\n\n" +
        "$$\\frac{1}{8}\\sin(4x^2) + C$$"
    },

    {
      id: "q43",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "Evaluate the definite integral \\( \\int_{0}^{1} x e^{-x^2}\\,dx \\).",
      
      correctAnswers: [
        "(1/2)*(1 - e^(-1))",
        "0.5*(1 - e^(-1))",
        "(1/2)*(1 - 1/e)",
        "0.5*(1 - 1/e)",
        "0.316",
        "0.3161"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.01,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Identify \\( u \\) and \\( du \\):** Let \\( u \\) be the exponent.\n\n" +
        "- Let **\\( u = -x^2 \\)**\n\n" +
        "**2. Differentiate \\( u \\) and Adjust:**\n\n" +
        "- \\( du = -2x\\,dx \\)\n" +
        "- Since we only have \\( x\\,dx \\), we solve for it: **\\( x\\,dx = -\\frac{1}{2}du \\)**\n\n" +
        "**3. Change the Limits of Integration:** When dealing with definite integrals, you **must** change the limits from \\( x \\) values to \\( u \\) values.\n\n" +
        "- **Lower Limit (\\( x=0 \\)):** \\( u = -(0)^2 = 0 \\)\n" +
        "- **Upper Limit (\\( x=1 \\)):** \\( u = -(1)^2 = -1 \\)\n\n" +
        "**4. Substitute and Integrate:** Substitute \\( u \\), \\( du \\), and the new limits.\n\n" +
        "$$\\int_{0}^{1} x e^{-x^2}\\,dx = \\int_{0}^{-1} e^u\\left(-\\frac{1}{2}du\\right) = -\\frac{1}{2}\\int_{0}^{-1} e^u\\,du$$\n\n" +
        "The integral of \\( e^u \\) is \\( e^u \\).\n\n" +
        "$$-\\frac{1}{2}[e^u]_{0}^{-1}$$\n\n" +
        "**5. Evaluate:**\n\n" +
        "$$-\\frac{1}{2}(e^{-1} - e^0) = -\\frac{1}{2}(e^{-1} - 1) = -\\frac{1}{2}\\left(\\frac{1}{e} - 1\\right)$$\n\n" +
        "$$= -\\frac{1}{2e} + \\frac{1}{2} = \\frac{1}{2}\\left(1 - \\frac{1}{e}\\right) = \\frac{1}{2}(1 - e^{-1})$$\n\n" +
        "This equals approximately **0.316**."
    },

    {
      id: "q44",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "Evaluate the indefinite integral \\( \\int \\frac{\\sec^2(\\ln x)}{x}\\,dx \\).",
      
      correctAnswers: [
        "tan(ln(x)) + C",
        "tan(ln x) + C",
        "tan(log(x)) + C"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Identify \\( u \\) and \\( du \\):** The secant squared function is operating on \\( \\ln x \\).\n\n" +
        "- Let **\\( u = \\ln x \\)**\n\n" +
        "**2. Differentiate \\( u \\) and find \\( du \\):**\n\n" +
        "- \\( \\frac{du}{dx} = \\frac{1}{x} \\)\n" +
        "- \\( du = \\frac{1}{x}dx \\)\n\n" +
        "**3. Substitute:** The term \\( \\frac{1}{x}dx \\) is perfectly matched by \\( du \\).\n\n" +
        "$$\\int \\sec^2(\\ln x)\\left(\\frac{1}{x}dx\\right) = \\int \\sec^2(u)\\,du$$\n\n" +
        "**4. Integrate:** The integral of \\( \\sec^2(u) \\) is \\( \\tan(u) \\) (since \\( \\frac{d}{du}[\\tan u] = \\sec^2 u \\)).\n\n" +
        "$$\\int \\sec^2(u)\\,du = \\tan(u) + C$$\n\n" +
        "**5. Re-substitute \\( x \\):**\n\n" +
        "$$\\tan(\\ln x) + C$$"
    },

    {
      id: "q45",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "Evaluate the indefinite integral \\( \\int \\frac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx \\). (Hint: This function is \\( \\tanh(x) \\))",
      
      correctAnswers: [
        "ln|e^x + e^(-x)| + C",
        "ln(e^x + e^(-x)) + C",
        "ln|exp(x) + exp(-x)| + C"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Identify \\( u \\) and \\( du \\):** This is a quotient where the derivative of the denominator looks suspiciously like the numerator. We choose the entire denominator as \\( u \\).\n\n" +
        "- Let **\\( u = e^x + e^{-x} \\)**\n\n" +
        "**2. Differentiate \\( u \\) and find \\( du \\):**\n\n" +
        "- \\( \\frac{d}{dx}[e^x] = e^x \\)\n" +
        "- \\( \\frac{d}{dx}[e^{-x}] = -e^{-x} \\) (using the chain rule with \\( v=-x \\))\n" +
        "- \\( du = (e^x - e^{-x})dx \\)\n\n" +
        "**3. Substitute:** The term \\( (e^x - e^{-x})dx \\) is an **exact match** for \\( du \\).\n\n" +
        "$$\\int \\frac{(e^x - e^{-x})dx}{e^x + e^{-x}} = \\int \\frac{du}{u}$$\n\n" +
        "**4. Integrate:** The integral of \\( \\frac{1}{u} \\) is \\( \\ln|u| \\).\n\n" +
        "$$\\int \\frac{1}{u}\\,du = \\ln|u| + C$$\n\n" +
        "**5. Re-substitute \\( x \\):**\n\n" +
        "$$\\ln|e^x + e^{-x}| + C$$\n\n" +
        "**Note:** Since \\( e^x + e^{-x} \\) is always positive for all real \\( x \\), the absolute value bars can technically be dropped, but it's good practice to include them."
    },

    {
      id: "q46",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "Find the value of \\( c \\) guaranteed by the Mean Value Theorem for Integrals for the function \\( f(x) = 2x + 1 \\) over the interval \\( [0, 4] \\).",
      
      correctAnswers: [
        "2",
        "2.0"
      ],
      
      options: {
        allowSymbolic: false,
        tolerance: 0.001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Calculate the Average Value (\\( f_{\\text{avg}} \\)):**\n\n" +
        "$$f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx$$\n\n" +
        "$$f_{\\text{avg}} = \\frac{1}{4-0}\\int_{0}^{4}(2x+1)\\,dx = \\frac{1}{4}[x^2 + x]_{0}^{4}$$\n\n" +
        "$$f_{\\text{avg}} = \\frac{1}{4}\\left((4^2 + 4) - (0)\\right) = \\frac{1}{4}(16 + 4) = \\frac{20}{4} = 5$$\n\n" +
        "**2. Apply MVT-I:** The theorem states that \\( f(c) = f_{\\text{avg}} \\).\n\n" +
        "Set the original function equal to the average value: \\( f(c) = 5 \\)\n\n" +
        "$$2c + 1 = 5$$\n\n" +
        "**3. Solve for \\( c \\):**\n\n" +
        "$$2c = 4$$\n\n" +
        "$$c = 2$$\n\n" +
        "Since \\( 2 \\) is within the interval \\( [0, 4] \\), the solution is valid and satisfies the theorem.\n\n" +
        "**Verification:** \\( f(2) = 2(2) + 1 = 5 = f_{\\text{avg}} \\) ✓"
    },

    {
      id: "q47",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "The integral \\( I = \\int e^x \\sin x\\,dx \\) is a cyclic integral. State the final result after applying integration by parts twice and solving algebraically.",
      
      correctAnswers: [
        "(1/2)*e^x*(sin(x) - cos(x)) + C",
        "0.5*e^x*(sin x - cos x) + C",
        "(e^x/2)*(sin(x) - cos(x)) + C",
        "e^x*(sin(x) - cos(x))/2 + C"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Application 1:** Let \\( u = \\sin x \\) and \\( dv = e^x dx \\).\n\n" +
        "- \\( du = \\cos x\\,dx \\) and \\( v = e^x \\)\n" +
        "- \\( I = e^x \\sin x - \\int e^x \\cos x\\,dx \\)\n\n" +
        "**2. Application 2 (on \\( \\int e^x \\cos x\\,dx \\)):** Let \\( u = \\cos x \\) and \\( dv = e^x dx \\).\n\n" +
        "- \\( du = -\\sin x\\,dx \\) and \\( v = e^x \\)\n" +
        "- \\( \\int e^x \\cos x\\,dx = e^x \\cos x - \\int e^x(-\\sin x)\\,dx = e^x \\cos x + \\int e^x \\sin x\\,dx \\)\n\n" +
        "**3. Substitution and Algebraic Solution:** Substitute the result of Application 2 back into the result of Application 1. Note that the original integral \\( I \\) reappears on the right side.\n\n" +
        "$$I = e^x \\sin x - (e^x \\cos x + I)$$\n\n" +
        "$$I = e^x \\sin x - e^x \\cos x - I$$\n\n" +
        "**4. Solve for \\( I \\):** Move the \\( I \\) term from the right to the left.\n\n" +
        "$$2I = e^x(\\sin x - \\cos x)$$\n\n" +
        "$$I = \\frac{1}{2}e^x(\\sin x - \\cos x) + C$$\n\n" +
        "**Key Insight:** This is called a \"cyclic\" integral because the original integral reappears after two applications of integration by parts, allowing us to solve for it algebraically."
    },

    {
      id: "q48",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "multiple-choice",
      text: "For the integral \\( \\int \\frac{x^3 + x}{x^2 - 4}\\,dx \\), what is the necessary algebraic preparation before setting up the partial fraction decomposition?",
      
      options: [
        "A. Factor both numerator and denominator completely",
        "B. Perform polynomial long division because the fraction is improper (degree of numerator ≥ degree of denominator)",
        "C. Use u-substitution with \\( u = x^2 - 4 \\)",
        "D. Multiply numerator and denominator by \\( (x^2 - 4) \\)"
      ],
      
      correctAnswers: ["B"],
      
      explanation: "The integral is an **improper rational function** because the degree of the numerator (3) is greater than the degree of the denominator (2). Therefore, the necessary preliminary step is to perform **Polynomial Long Division** to rewrite the fraction as a quotient plus a proper remainder.\n\n" +
        "**1. Long Division:** Divide \\( x^3 + x \\) by \\( x^2 - 4 \\).\n\n" +
        "$$\\frac{x^3 + x}{x^2 - 4} = x + \\frac{5x}{x^2 - 4}$$\n\n" +
        "(The quotient is \\( x \\), and the remainder is \\( 5x \\))\n\n" +
        "**2. Rewrite the Integral:**\n\n" +
        "$$\\int \\frac{x^3 + x}{x^2 - 4}\\,dx = \\int\\left(x + \\frac{5x}{x^2 - 4}\\right)dx$$\n\n" +
        "**3. Decomposition:** The integral is split into two parts:\n" +
        "- \\( \\int x\\,dx \\) (a simple integral using power rule)\n" +
        "- \\( \\int \\frac{5x}{x^2 - 4}\\,dx \\) (now a **proper fraction** that can use partial fractions)\n\n" +
        "The second part can be solved by factoring the denominator: \\( x^2 - 4 = (x-2)(x+2) \\).\n\n" +
        "This ensures the Partial Fraction rules are applied correctly only to the rational part.\n\n" +
        "**Answer: B**"
    },

    {
      id: "q49",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "Use the partial fraction method to evaluate the integral \\( \\int \\frac{5x-1}{(x+1)(x-2)}\\,dx \\).",
      
      correctAnswers: [
        "2*ln|x+1| + 3*ln|x-2| + C",
        "2ln|x+1| + 3ln|x-2| + C",
        "ln|x+1|^2 + ln|x-2|^3 + C",
        "ln|(x+1)^2*(x-2)^3| + C"
      ],
      
      options: {
        allowSymbolic: true,
        tolerance: 0.0001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Decomposition Setup:** The denominator has distinct linear factors:\n\n" +
        "$$\\frac{5x-1}{(x+1)(x-2)} = \\frac{A}{x+1} + \\frac{B}{x-2}$$\n\n" +
        "**2. Clear Fractions:** \\( 5x-1 = A(x-2) + B(x+1) \\)\n\n" +
        "**3. Solve for Coefficients (using Substitution/Cover-Up Method):**\n\n" +
        "**To find \\( A \\):** Set \\( x = -1 \\) (the root of the \\( A \\)'s denominator)\n\n" +
        "$$5(-1)-1 = A(-1-2) + B(0)$$\n" +
        "$$-6 = -3A \\Rightarrow A = 2$$\n\n" +
        "**To find \\( B \\):** Set \\( x = 2 \\) (the root of the \\( B \\)'s denominator)\n\n" +
        "$$5(2)-1 = A(0) + B(2+1)$$\n" +
        "$$9 = 3B \\Rightarrow B = 3$$\n\n" +
        "**4. Integrate:** Substitute \\( A=2 \\) and \\( B=3 \\) back into the integral.\n\n" +
        "$$\\int\\left(\\frac{2}{x+1} + \\frac{3}{x-2}\\right)dx$$\n\n" +
        "$$= 2\\int\\frac{1}{x+1}dx + 3\\int\\frac{1}{x-2}dx$$\n\n" +
        "**5. Final Result (using \\( \\int \\frac{1}{u}\\,du = \\ln|u| \\)):**\n\n" +
        "$$2\\ln|x+1| + 3\\ln|x-2| + C$$\n\n" +
        "**Alternative form using log properties:**\n\n" +
        "$$\\ln|(x+1)^2(x-2)^3| + C$$"
    },

    {
      id: "q50",
      moduleId: "ITMTB",
      weekId: "ITMTB_W3",
      type: "open-ended",
      text: "Evaluate the definite integral \\( \\int_{1}^{e} \\ln(x^2)\\,dx \\).",
      
      correctAnswers: [
        "2",
        "2.0"
      ],
      
      options: {
        allowSymbolic: false,
        tolerance: 0.001,
        acceptedUnits: [],
        requiredUnit: null
      },
      
      explanation: "**1. Simplify First (Log Property):** Use the logarithmic property \\( \\ln(x^a) = a\\ln x \\) to simplify the integral:\n\n" +
        "$$\\int_{1}^{e} \\ln(x^2)\\,dx = 2\\int_{1}^{e} \\ln x\\,dx$$\n\n" +
        "**2. Integration by Parts (on \\( \\int \\ln x\\,dx \\)):**\n\n" +
        "- Choose \\( u = \\ln x \\) and \\( dv = dx \\)\n" +
        "- \\( du = \\frac{1}{x}dx \\) and \\( v = x \\)\n\n" +
        "$$\\int \\ln x\\,dx = uv - \\int v\\,du = x\\ln x - \\int x\\left(\\frac{1}{x}dx\\right) = x\\ln x - \\int 1\\,dx$$\n\n" +
        "$$\\int \\ln x\\,dx = x\\ln x - x$$\n\n" +
        "**3. Evaluate the Definite Integral:**\n\n" +
        "$$2\\int_{1}^{e} \\ln x\\,dx = 2[x\\ln x - x]_{1}^{e}$$\n\n" +
        "$$= 2\\left[(e\\ln e - e) - (1\\ln 1 - 1)\\right]$$\n\n" +
        "**4. Final Calculation:** Since \\( \\ln e = 1 \\) and \\( \\ln 1 = 0 \\):\n\n" +
        "$$= 2\\left[(e(1) - e) - (1(0) - 1)\\right]$$\n\n" +
        "$$= 2\\left[(e - e) - (-1)\\right]$$\n\n" +
        "$$= 2[0 - (-1)] = 2(1) = 2$$"
    },

    {
        id: "q51",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "What is the formula for finding the average value of a continuous function \\( f(x) \\) over a closed interval \\( [a, b] \\)?",
        
        options: [
          "A. \\( f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx \\)",
          "B. \\( f_{\\text{avg}} = (b-a)\\int_{a}^{b}f(x)\\,dx \\)",
          "C. \\( f_{\\text{avg}} = \\int_{a}^{b}f(x)\\,dx \\)",
          "D. \\( f_{\\text{avg}} = \\frac{1}{2}\\int_{a}^{b}f(x)\\,dx \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "The correct formula for the average value of a function \\( f(x) \\) on the closed interval \\( [a, b] \\) is:\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx$\n\n" +
          "**Understanding the Formula:**\n\n" +
          "This formula is analogous to finding the average of a list of numbers. When you find the average of numbers like 3, 5, 7, you add them up and divide by how many numbers you have: \\( \\frac{3+5+7}{3} = 5 \\).\n\n" +
          "For a continuous function:\n" +
          "- The **integral** \\( \\int_{a}^{b}f(x)\\,dx \\) adds up all the function values (like summing the numbers)\n" +
          "- The **length of the interval** \\( (b-a) \\) represents how many values we're averaging over (like the count of numbers)\n" +
          "- **Dividing** the integral by \\( (b-a) \\) gives us the average\n\n" +
          "**Geometric Interpretation:**\n\n" +
          "Imagine the area under the curve of \\( f(x) \\) from \\( a \\) to \\( b \\). If you were to \"flatten\" this area into a rectangle with the same base \\( (b-a) \\), the height of that rectangle would be \\( f_{\\text{avg}} \\).\n\n" +
          "In other words, \\( f_{\\text{avg}} \\) is the **constant height** that produces the **same total area** as the original function over that interval.\n\n" +
          "**Why the other options are wrong:**\n" +
          "- **Option B** multiplies by \\( (b-a) \\) instead of dividing, which would give you the total area, not the average\n" +
          "- **Option C** is just the integral (total area), not the average\n" +
          "- **Option D** divides by 2, which has no mathematical basis for finding averages\n\n" +
          "**Answer: A**"
      },

      {
        id: "q52",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Calculate the average value of the function \\( f(x) = \\ln x \\) over the interval \\( [1, e] \\). Express your answer as a fraction.",
        
        correctAnswers: [
          "1/(e-1)",
          "1/(e - 1)",
          "(e-1)^(-1)",
          "(e-1)^-1"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Apply the Average Value Formula**\n\n" +
          "We start with the formula for average value:\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx$\n\n" +
          "In this problem:\n" +
          "- \\( f(x) = \\ln x \\)\n" +
          "- \\( a = 1 \\) (lower limit)\n" +
          "- \\( b = e \\) (upper limit)\n\n" +
          "Substituting these values:\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{e-1}\\int_{1}^{e}\\ln x\\,dx$\n\n" +
          "**Step 2: Integrate \\( \\int \\ln x\\,dx \\) using Integration by Parts**\n\n" +
          "The integral of \\( \\ln x \\) requires integration by parts. Recall the formula:\n\n" +
          "$\\int u\\,dv = uv - \\int v\\,du$\n\n" +
          "We choose:\n" +
          "- \\( u = \\ln x \\) → then \\( du = \\frac{1}{x}dx \\) (derivative of \\( \\ln x \\))\n" +
          "- \\( dv = dx \\) → then \\( v = x \\) (integral of 1)\n\n" +
          "Applying the formula:\n\n" +
          "$\\int \\ln x\\,dx = (\\ln x)(x) - \\int x \\cdot \\frac{1}{x}dx$\n\n" +
          "Notice that \\( x \\cdot \\frac{1}{x} = 1 \\), so:\n\n" +
          "$\\int \\ln x\\,dx = x \\ln x - \\int 1\\,dx$\n\n" +
          "$\\int \\ln x\\,dx = x \\ln x - x + C$\n\n" +
          "**Step 3: Evaluate the Definite Integral**\n\n" +
          "Now we evaluate from 1 to \\( e \\):\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{e-1}[x \\ln x - x]_{1}^{e}$\n\n" +
          "**Upper limit** (\\( x = e \\)):\n\n" +
          "$e \\ln e - e = e(1) - e = e - e = 0$\n\n" +
          "(Remember: \\( \\ln e = 1 \\) because \\( e \\) is the natural logarithm base)\n\n" +
          "**Lower limit** (\\( x = 1 \\)):\n\n" +
          "$1 \\ln 1 - 1 = 1(0) - 1 = 0 - 1 = -1$\n\n" +
          "(Remember: \\( \\ln 1 = 0 \\) because \\( e^0 = 1 \\))\n\n" +
          "**Subtract lower from upper:**\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{e-1}[0 - (-1)] = \\frac{1}{e-1}(1) = \\frac{1}{e-1}$\n\n" +
          "**Final Answer:** \\( \\displaystyle\\frac{1}{e-1} \\approx 0.582 \\)"
      },

      {
        id: "q53",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Set up the integral expression to find the average value of \\( f(x) = \\sin x \\) over the interval \\( [0, \\pi] \\). (Write the complete expression with limits)",
        
        correctAnswers: [
          "f_avg = (1/pi) * integral from 0 to pi of sin(x) dx",
          "favg = (1/pi) * int(sin x, 0, pi)",
          "(1/pi) * integral(sin(x), 0, pi)",
          "1/pi * int_0^pi sin(x) dx",
          "(1/(pi-0)) * integral from 0 to pi of sin x dx",
          "integral(sin x, 0, pi) / pi",
          "int(sin(x), 0, pi) / pi"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.0001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Understanding the Setup:**\n\n" +
          "To find the average value of a function, we use the formula:\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx$\n\n" +
          "This question asks us to **set up** the expression, not evaluate it yet.\n\n" +
          "**Identifying the Components:**\n\n" +
          "For \\( f(x) = \\sin x \\) on the interval \\( [0, \\pi] \\):\n\n" +
          "- **Function:** \\( f(x) = \\sin x \\)\n" +
          "- **Lower limit:** \\( a = 0 \\)\n" +
          "- **Upper limit:** \\( b = \\pi \\)\n" +
          "- **Interval length:** \\( b - a = \\pi - 0 = \\pi \\)\n\n" +
          "**Substituting into the Formula:**\n\n" +
          "Replace each part of the general formula with our specific values:\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{\\pi - 0}\\int_{0}^{\\pi}\\sin x\\,dx$\n\n" +
          "This simplifies to:\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{\\pi}\\int_{0}^{\\pi}\\sin x\\,dx$\n\n" +
          "**What this means:**\n\n" +
          "- The \\( \\frac{1}{\\pi} \\) outside the integral is the reciprocal of the interval length\n" +
          "- The integral \\( \\int_{0}^{\\pi}\\sin x\\,dx \\) calculates the total area under the sine curve from 0 to \\( \\pi \\)\n" +
          "- Multiplying these gives the average height of the sine function over this interval\n\n" +
          "**Note:** If we were to evaluate this integral, we would get \\( f_{\\text{avg}} = \\frac{2}{\\pi} \\), but the question only asks for the setup."
      },

      {
        id: "q54",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "What is the primary purpose of using the Integration by Parts technique?",
        
        options: [
          "A. To integrate rational functions with polynomial denominators",
          "B. To integrate products of functions, especially when one becomes simpler when differentiated",
          "C. To find the average value of a function over an interval",
          "D. To evaluate definite integrals with infinite limits"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "**Integration by Parts** is a technique used to **integrate products of functions**.\n\n" +
          "It's particularly useful when the integrand is a product of two functions, one of which **becomes simpler when differentiated**.\n\n" +
          "**The Formula:**\n\n" +
          "$\\int u\\,dv = uv - \\int v\\,du$\n\n" +
          "**Why do we need this technique?**\n\n" +
          "Some integrals cannot be solved using basic integration rules. For example, \\( \\int x \\sin x\\,dx \\) or \\( \\int x e^x\\,dx \\) are products of two functions, and no simple rule exists to integrate them directly.\n\n" +
          "Integration by Parts transforms a difficult integral into (hopefully) an easier one.\n\n" +
          "**Connection to the Product Rule:**\n\n" +
          "Integration by Parts is actually the **reverse of the product rule** for differentiation. The product rule states:\n\n" +
          "$\\frac{d}{dx}[u \\cdot v] = u\\frac{dv}{dx} + v\\frac{du}{dx}$\n\n" +
          "When we integrate both sides and rearrange, we get the Integration by Parts formula.\n\n" +
          "**Choosing \\( u \\) and \\( dv \\) (The LIATE Rule):**\n\n" +
          "Success depends on choosing the right function for \\( u \\). A helpful guideline is **LIATE**:\n\n" +
          "- **L**ogarithmic (\\( \\ln x \\))\n" +
          "- **I**nverse trig (\\( \\arcsin x \\), \\( \\arctan x \\))\n" +
          "- **A**lgebraic (\\( x \\), \\( x^2 \\))\n" +
          "- **T**rigonometric (\\( \\sin x \\), \\( \\cos x \\))\n" +
          "- **E**xponential (\\( e^x \\))\n\n" +
          "Choose \\( u \\) as the function that appears **earliest** in this list, and \\( dv \\) as what remains.\n\n" +
          "**Why Option B is correct:**\n\n" +
          "Integration by Parts specifically handles **products of functions** where one becomes simpler through differentiation. This distinguishes it from:\n" +
          "- Partial fractions (for rational functions)\n" +
          "- Average value formulas (for finding averages over intervals)\n" +
          "- Improper integrals (for infinite limits)\n\n" +
          "**Answer: B**"
      },

      {
        id: "q55",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Integrate \\( \\int x e^{-x}\\,dx \\) using integration by parts. Express your answer in simplest form.",
        
        correctAnswers: [
          "-x*e^(-x) - e^(-x) + C",
          "-xe^(-x) - e^(-x) + C",
          "-x*exp(-x) - exp(-x) + C",
          "-(x+1)*e^(-x) + C",
          "-(x+1)e^(-x) + C",
          "-e^(-x)*(x+1) + C",
          "-e^(-x)(x+1) + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.0001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Choose \\( u \\) and \\( dv \\)**\n\n" +
          "- Let \\( u = x \\) (simplifies when differentiated)\n" +
          "- Let \\( dv = e^{-x}dx \\)\n\n" +
          "**Step 2: Calculate \\( du \\) and \\( v \\)**\n\n" +
          "- \\( du = dx \\)\n" +
          "- \\( v = \\int e^{-x}dx = -e^{-x} \\)\n\n" +
          "**Step 3: Apply Integration by Parts Formula**\n\n" +
          "$$\\int u\\,dv = uv - \\int v\\,du$$\n\n" +
          "$$\\int x e^{-x}dx = (x)(-e^{-x}) - \\int (-e^{-x})(dx)$$\n\n" +
          "$$= -xe^{-x} + \\int e^{-x}dx$$\n\n" +
          "**Step 4: Evaluate the Remaining Integral**\n\n" +
          "$$\\int e^{-x}dx = -e^{-x}$$\n\n" +
          "**Final Answer:**\n\n" +
          "$$\\int x e^{-x}dx = -xe^{-x} - e^{-x} + C$$\n\n" +
          "This can also be factored as: \\( -(x+1)e^{-x} + C \\)"
      },

      {
        id: "q56",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "What type of functions is the Integration by Partial Fractions method primarily used for?",
        
        options: [
          "A. Trigonometric functions involving products of sine and cosine",
          "B. Rational functions (where numerator and denominator are polynomials)",
          "C. Exponential functions with polynomial exponents",
          "D. Logarithmic functions with polynomial arguments"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "**Integration by Partial Fractions** is a method used to evaluate integrals of **rational functions**.\n\n" +
          "**What is a Rational Function?**\n\n" +
          "A rational function is a fraction where both the numerator and denominator are polynomials:\n\n" +
          "$\\frac{P(x)}{Q(x)} = \\frac{\\text{polynomial}}{\\text{polynomial}}$\n\n" +
          "For example: \\( \\displaystyle\\frac{x+1}{x^2-4} \\), \\( \\displaystyle\\frac{3x-5}{(x-1)(x+2)} \\)\n\n" +
          "**Why Do We Need This Method?**\n\n" +
          "Rational functions with complex denominators are often difficult or impossible to integrate directly. For example, try integrating \\( \\displaystyle\\int\\frac{4x-3}{x^2+x-2}dx \\) using basic rules—you can't!\n\n" +
          "**The Main Idea:**\n\n" +
          "Break apart (decompose) the complicated fraction into a **sum of simpler fractions** that we can integrate easily.\n\n" +
          "For example:\n" +
          "$\\frac{4x-3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$\n\n" +
          "Each simpler fraction on the right can be integrated using the formula:\n" +
          "$\\int\\frac{1}{x-a}dx = \\ln|x-a| + C$\n\n" +
          "**The Process (Overview):**\n\n" +
          "1. **Check if proper:** Degree of numerator < degree of denominator (if not, do long division first)\n" +
          "2. **Factor the denominator:** Break \\( Q(x) \\) into simpler factors like \\( (x-1)(x+2) \\)\n" +
          "3. **Set up partial fractions:** Write as a sum with unknown constants \\( A, B, C, \\ldots \\)\n" +
          "4. **Solve for constants:** Use algebra to find the values of \\( A, B, C, \\ldots \\)\n" +
          "5. **Integrate:** Each simple fraction integrates to a logarithm\n\n" +
          "**Why Other Options Are Wrong:**\n\n" +
          "- **Option A:** Trigonometric products use different techniques (like trig identities)\n" +
          "- **Option C:** Exponential functions with polynomial exponents don't require partial fractions\n" +
          "- **Option D:** Logarithmic functions with polynomial arguments use substitution or other methods\n\n" +
          "**Answer: B** - Partial fractions specifically handles rational functions (polynomial over polynomial)."
      },

      {
        id: "q57",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "For the rational function \\( \\frac{4x-3}{(x-1)(x+2)} \\), what is the initial setup for its partial fraction decomposition? (Express as an equation with constants A and B)",
        
        correctAnswers: [
          "(4x-3)/((x-1)(x+2)) = A/(x-1) + B/(x+2)",
          "(4x-3)/[(x-1)(x+2)] = A/(x-1) + B/(x+2)",
          "A/(x-1) + B/(x+2)",
          "A/(x-1) + B/(x+2) = (4x-3)/((x-1)(x+2))"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.0001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Partial Fraction Decomposition Setup:**\n\n" +
          "The function \\( \\frac{4x-3}{(x-1)(x+2)} \\) has a denominator already factored into **two distinct linear factors**:\n" +
          "- \\( (x-1) \\)\n" +
          "- \\( (x+2) \\)\n\n" +
          "**Rule for Distinct Linear Factors:**\n" +
          "Each distinct linear factor gets its own fraction with a constant numerator.\n\n" +
          "**Setup:**\n\n" +
          "$$\\frac{4x-3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$$\n\n" +
          "Where:\n" +
          "- \\( A \\) is the constant for factor \\( (x-1) \\)\n" +
          "- \\( B \\) is the constant for factor \\( (x+2) \\)\n\n" +
          "The next step would be to solve for \\( A \\) and \\( B \\) by clearing fractions and equating coefficients."
      },

      {
        id: "q58",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "When integrating \\( \\int\\frac{4x-3}{(x-1)(x+2)}dx \\) with decomposition \\( \\frac{A}{x-1}+\\frac{B}{x+2} \\), after multiplying both sides by \\( (x-1)(x+2) \\) and expanding, what are the two equations used to solve for \\( A \\) and \\( B \\)?",
        
        options: [
          "A. \\( A+B=4 \\) and \\( A-B=-3 \\)",
          "B. \\( A+B=4 \\) and \\( 2A-B=-3 \\)",
          "C. \\( A-B=4 \\) and \\( 2A+B=-3 \\)",
          "D. \\( 2A+2B=4 \\) and \\( A-B=-3 \\)"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "**Step-by-Step Solution:**\n\n" +
          "**Step 1: Start with the decomposition**\n\n" +
          "$$\\frac{4x-3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$$\n\n" +
          "**Step 2: Clear fractions** by multiplying both sides by \\( (x-1)(x+2) \\):\n\n" +
          "$$4x-3 = A(x+2) + B(x-1)$$\n\n" +
          "**Step 3: Expand the right side**\n\n" +
          "$$4x-3 = Ax + 2A + Bx - B$$\n\n" +
          "**Step 4: Group by powers of \\( x \\)**\n\n" +
          "$$4x-3 = (A+B)x + (2A-B)$$\n\n" +
          "**Step 5: Equate coefficients**\n\n" +
          "For the polynomials to be equal for all \\( x \\):\n\n" +
          "- **Coefficient of \\( x \\):** \\( A + B = 4 \\)\n" +
          "- **Constant term:** \\( 2A - B = -3 \\)\n\n" +
          "Solving this system gives \\( A = \\frac{1}{3} \\) and \\( B = \\frac{11}{3} \\)\n\n" +
          "**Answer: B**"
      },

      {
        id: "q59",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Given the decomposition \\( \\frac{4x-3}{(x-1)(x+2)} = \\frac{1/3}{x-1} + \\frac{11/3}{x+2} \\), what is the final result of the integral \\( \\int\\frac{4x-3}{(x-1)(x+2)}dx \\)? (Include the constant of integration)",
        
        correctAnswers: [
          "(1/3)*ln|x-1| + (11/3)*ln|x+2| + C",
          "1/3*ln|x-1| + 11/3*ln|x+2| + C",
          "(1/3)ln|x-1| + (11/3)ln|x+2| + C",
          "ln|x-1|/3 + 11*ln|x+2|/3 + C",
          "ln|x-1|/3 + (11/3)ln|x+2| + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.0001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Substitute the Partial Fractions**\n\n" +
          "$$I = \\int\\left(\\frac{1/3}{x-1} + \\frac{11/3}{x+2}\\right)dx$$\n\n" +
          "**Step 2: Split and Factor Constants**\n\n" +
          "$$I = \\frac{1}{3}\\int\\frac{dx}{x-1} + \\frac{11}{3}\\int\\frac{dx}{x+2}$$\n\n" +
          "**Step 3: Integrate**\n\n" +
          "Recall that \\( \\int\\frac{1}{u}du = \\ln|u| + C \\)\n\n" +
          "$$\\int\\frac{dx}{x-1} = \\ln|x-1|$$\n\n" +
          "$$\\int\\frac{dx}{x+2} = \\ln|x+2|$$\n\n" +
          "**Final Result:**\n\n" +
          "$$I = \\frac{1}{3}\\ln|x-1| + \\frac{11}{3}\\ln|x+2| + C$$\n\n" +
          "This can also be written as:\n\n" +
          "$$I = \\frac{1}{3}\\left[\\ln|x-1| + 11\\ln|x+2|\\right] + C$$"
      },

      {
        id: "q60",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "Before applying Integration by Partial Fractions, what condition must a rational function satisfy, and what must be done if it doesn't meet this condition?",
        
        options: [
          "A. The numerator must be linear; if not, factor it completely",
          "B. The fraction must be proper (degree of numerator < degree of denominator); if not, perform polynomial long division first",
          "C. The denominator must be completely factored; if not, use the quadratic formula",
          "D. Both numerator and denominator must have the same degree; if not, multiply by a constant"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "**Critical Requirement for Partial Fractions:**\n\n" +
          "The fraction must be **proper**, meaning:\n" +
          "- **Degree of numerator < Degree of denominator**\n\n" +
          "**If the fraction is NOT proper** (degree of numerator ≥ degree of denominator):\n\n" +
          "**Step 1: Perform Polynomial Long Division**\n\n" +
          "This rewrites the improper fraction as:\n\n" +
          "$$\\frac{P(x)}{Q(x)} = \\text{Polynomial}(x) + \\frac{\\text{Remainder}(x)}{Q(x)}$$\n\n" +
          "**Step 2: Split the Integration**\n\n" +
          "- Integrate the polynomial part using the power rule\n" +
          "- Apply partial fractions to the proper fraction \\( \\frac{\\text{Remainder}(x)}{Q(x)} \\)\n\n" +
          "**Why This Matters:**\n" +
          "The partial fractions decomposition technique only works for proper rational functions. Polynomial long division converts improper fractions into a form where partial fractions can be applied.\n\n" +
          "**Answer: B**"
      },
      {
        id: "q61",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Find the average value of the function \\( f(x) = 3x + 2 \\) over the interval \\( [0, 5] \\).",
        
        correctAnswers: [
          "9.5",
          "9.50",
          "19/2",
          "9 1/2"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**1. Formula:** We use the average value formula: \\( f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx \\)\n\n" +
          "**2. Setup:** Substitute \\( f(x) = 3x + 2 \\), \\( a = 0 \\), and \\( b = 5 \\):\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{5-0}\\int_{0}^{5}(3x+2)\\,dx = \\frac{1}{5}\\int_{0}^{5}(3x+2)\\,dx$\n\n" +
          "**3. Integration:** Find the antiderivative of \\( 3x+2 \\):\n\n" +
          "$\\int(3x+2)\\,dx = 3\\frac{x^2}{2} + 2x = \\frac{3x^2}{2} + 2x$\n\n" +
          "**4. Evaluate Definite Integral (Fundamental Theorem of Calculus):**\n\n" +
          "$\\int_{0}^{5}(3x+2)\\,dx = \\left[\\frac{3}{2}x^2 + 2x\\right]_{0}^{5}$\n\n" +
          "$= \\left(\\frac{3}{2}(5)^2 + 2(5)\\right) - \\left(\\frac{3}{2}(0)^2 + 2(0)\\right)$\n\n" +
          "$= \\left(\\frac{3}{2}(25) + 10\\right) - (0) = \\frac{75}{2} + 10 = 37.5 + 10 = 47.5$\n\n" +
          "**5. Final Average Value:** Divide the integral result by the interval length \\( (b-a) = 5 \\):\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{5} \\times 47.5 = 9.5$"
      },

      {
        id: "q62",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Calculate the average value of \\( f(x) = \\sin x \\) over the interval \\( [0, \\pi] \\).",
        
        correctAnswers: [
          "2/pi",
          "2/π",
          "2 / pi",
          "0.6366",
          "0.637"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**1. Formula Setup:** Using \\( f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx \\) with \\( f(x) = \\sin x \\), \\( a = 0 \\), and \\( b = \\pi \\):\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{\\pi-0}\\int_{0}^{\\pi}\\sin x\\,dx$\n\n" +
          "**2. Integration:** The integral of \\( \\sin x \\) is \\( -\\cos x \\):\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{\\pi}[-\\cos x]_{0}^{\\pi}$\n\n" +
          "**3. Evaluate Limits:**\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{\\pi}\\left((-\\cos \\pi) - (-\\cos 0)\\right)$\n\n" +
          "Since \\( \\cos \\pi = -1 \\) and \\( \\cos 0 = 1 \\):\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{\\pi}\\left((-(-1)) - (-(1))\\right)$\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{\\pi}(1 + 1) = \\frac{2}{\\pi}$\n\n" +
          "This is approximately \\( 0.6366 \\)."
      },

      {
        id: "q63",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "When integrating \\( \\int x \\ln x\\,dx \\) using integration by parts (\\( \\int u\\,dv = uv - \\int v\\,du \\)), which functions should be chosen for \\( u \\) and \\( dv \\), and why?",
        
        options: [
          "A. \\( u = x \\) and \\( dv = \\ln x\\,dx \\), because \\( x \\) is easier to differentiate",
          "B. \\( u = \\ln x \\) and \\( dv = x\\,dx \\), because \\( \\ln x \\) simplifies when differentiated",
          "C. \\( u = x \\ln x \\) and \\( dv = dx \\), to keep the product together",
          "D. Either choice works equally well"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "The strategy for Integration by Parts is to choose \\( u \\) and \\( dv \\) such that \\( \\int v\\,du \\) is simpler to integrate than the original \\( \\int u\\,dv \\). The **LIATE** mnemonic (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) helps prioritize the choice for \\( u \\):\n\n" +
          "**\\( u \\) (function to differentiate):** We choose \\( u = \\ln x \\) because the derivative of \\( \\ln x \\) is \\( du = \\frac{1}{x}dx \\), which is an algebraic function that simplifies the product in the next integral, \\( \\int v\\,du \\). Logarithmic functions are usually the top priority for \\( u \\) because they simplify upon differentiation.\n\n" +
          "**\\( dv \\) (function to integrate):** We choose \\( dv = x\\,dx \\) because it's the remaining part, and its integral \\( v = \\frac{x^2}{2} \\) is easy to find.\n\n" +
          "**Why other options are wrong:**\n" +
          "- **Option A:** While \\( x \\) is easy to differentiate, \\( \\ln x \\) is extremely difficult to integrate directly\n" +
          "- **Option C:** This doesn't separate the product properly for the integration by parts formula\n" +
          "- **Option D:** The choices are not equivalent; option B leads to a solvable integral while option A does not\n\n" +
          "**Answer: B**"
      },

      {
        id: "q64",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Apply the integration by parts formula to set up the problem \\( \\int x \\ln x\\,dx \\). Express the result after applying the formula once (you don't need to evaluate the remaining integral).",
        
        correctAnswers: [
          "(x^2/2)*ln(x) - integral of (x^2/2)*(1/x) dx",
          "(x^2/2)*ln x - int((x^2/2)*(1/x), x)",
          "x^2*ln(x)/2 - integral(x/2, x)",
          "(1/2)*x^2*ln(x) - int(x/2 dx)"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.0001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**1. Selections:**\n" +
          "- \\( u = \\ln x \\)\n" +
          "- \\( dv = x\\,dx \\)\n\n" +
          "**2. Derivatives/Integrals:**\n" +
          "- \\( du = \\frac{1}{x}dx \\)\n" +
          "- \\( v = \\int x\\,dx = \\frac{x^2}{2} \\)\n\n" +
          "**3. Formula Application:** Apply \\( \\int u\\,dv = uv - \\int v\\,du \\):\n\n" +
          "$\\int x \\ln x\\,dx = (\\ln x)\\left(\\frac{x^2}{2}\\right) - \\int \\left(\\frac{x^2}{2}\\right)\\left(\\frac{1}{x}dx\\right)$\n\n" +
          "**4. Simplification:**\n\n" +
          "$\\int x \\ln x\\,dx = \\frac{x^2}{2}\\ln x - \\int \\frac{x}{2}dx$\n\n" +
          "The final result (after evaluating the remaining integral) is \\( \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C \\)."
      },

      {
        id: "q65",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "If you are asked to integrate \\( \\int x^2 e^x\\,dx \\), explain why you would likely need to apply the integration by parts formula more than once.",
        
        options: [
          "A. Because \\( e^x \\) doesn't have a simple antiderivative",
          "B. Because \\( x^2 \\) is a polynomial of degree 2, requiring two differentiations to reduce it to a constant",
          "C. Because the formula only works for linear terms",
          "D. Because integration by parts always requires multiple applications"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "You would need to apply the formula multiple times because the chosen \\( u \\) is a polynomial (\\( u = x^2 \\)), and its derivative only reduces the power by one degree with each application. Since \\( x^2 \\) is a second-degree polynomial, it takes **two successive differentiations** for it to become a constant (\\( du = 2x\\,dx \\), then the next \\( du \\) is \\( 2\\,dx \\)), which is when the second integral (\\( \\int v\\,du \\)) becomes trivial to solve.\n\n" +
          "**Explanation:**\n\n" +
          "**1. First Application:** Choose \\( u = x^2 \\) and \\( dv = e^x dx \\). The formula yields:\n\n" +
          "$\\int x^2 e^x dx = x^2 e^x - \\int 2x e^x dx$\n\n" +
          "The new integral, \\( \\int 2x e^x dx \\), is still a product of two functions (a linear polynomial and an exponential), so it still requires integration by parts.\n\n" +
          "**2. Second Application:** For \\( \\int 2x e^x dx \\), choose \\( u = 2x \\) and \\( dv = e^x dx \\). This application will simplify the integral down to \\( \\int 2e^x dx \\), which can be solved directly.\n\n" +
          "The final result involves terms corresponding to the original function, its first derivative, and its second derivative, multiplied by \\( e^x \\): \\( e^x(x^2 - 2x + 2) + C \\).\n\n" +
          "**Answer: B**"
      },

      {
        id: "q66",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "In the method of Integration by Partial Fractions, what is the crucial second step, and why is it necessary?",
        
        options: [
          "A. Integrate the numerator first to simplify the fraction",
          "B. Completely factor the denominator into linear or quadratic factors",
          "C. Set all coefficients equal to zero and solve",
          "D. Convert the fraction to a decimal approximation"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "The crucial second step is to **completely factor the denominator** into linear or quadratic factors. This is necessary because the partial fraction decomposition is set up based on the **specific factors** of the denominator. If the denominator is not fully factored, you cannot correctly determine the form of the simpler fractions (the partial fractions).\n\n" +
          "**Explanation:**\n\n" +
          "The partial fraction technique relies entirely on decomposing the rational expression back into the simpler terms that would have been combined to form it.\n\n" +
          "- For example, if the denominator is \\( x^2 + 3x + 2 \\), you must factor it as \\( (x+1)(x+2) \\).\n" +
          "- If you don't factor it, you won't know to set up the decomposition as \\( \\frac{A}{x+1} + \\frac{B}{x+2} \\).\n\n" +
          "Different factor types (distinct linear, repeated linear, irreducible quadratic) lead to different forms for the numerators in the decomposition.\n\n" +
          "**Answer: B**"
      },

      {
        id: "q67",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "Why is it necessary to check if a rational function is \"proper\" before proceeding with Partial Fractions, and what defines a proper fraction?",
        
        options: [
          "A. A fraction is proper if the numerator has no constants; division is needed to remove them",
          "B. A fraction is proper if the degree of the numerator is less than the degree of the denominator; if not, perform polynomial long division first",
          "C. A fraction is proper if both numerator and denominator are prime; factoring is needed otherwise",
          "D. A fraction is proper if it evaluates to a number less than 1; scaling is needed otherwise"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "It's necessary because the algebraic method of setting up the partial fraction decomposition only works for **proper fractions**. A rational function is defined as **proper** if the **degree of the numerator is less than the degree of the denominator**. If it's not proper, you must perform polynomial long division first.\n\n" +
          "**Explanation:**\n\n" +
          "If a fraction is improper (degree of numerator ≥ degree of denominator), it contains an inherent polynomial part that must be extracted before the remaining rational part can be decomposed.\n\n" +
          "For example, for \\( \\int\\frac{x^2+4x+7}{x^2+3x+2}dx \\), the degrees are equal (both 2). This is improper. Although it's sometimes possible to attempt a direct decomposition, it is best practice to first divide. If we were to divide, we would get a quotient of 1 and a remainder, which would simplify the setup.\n\n" +
          "**Answer: B**"
      },

      {
        id: "q68",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Consider the setup for the integral \\( \\int\\frac{5x+7}{(x-2)(x+3)}dx \\):\n$5x+7 = A(x+3) + B(x-2)$\nSolve for \\( A \\) and \\( B \\) using strategic substitution (the \"cover-up\" method). Enter your answer as: A=value, B=value",
        
        correctAnswers: [
          "A=17/5, B=8/5",
          "A = 17/5, B = 8/5",
          "A=3.4, B=1.6",
          "A = 3.4, B = 1.6"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "The strategy of strategic substitution, often called the Heaviside Cover-Up Method, allows us to quickly find coefficients when the factors are distinct linear terms:\n\n" +
          "**1. To find A, set \\( x \\) equal to the root that makes the \\( B \\) term zero:** \\( x = 2 \\).\n\n" +
          "Substitute \\( x = 2 \\) into the equation \\( 5x+7 = A(x+3) + B(x-2) \\):\n\n" +
          "$5(2)+7 = A(2+3) + B(2-2)$\n" +
          "$10+7 = 5A + 0$\n" +
          "$17 = 5A \\Rightarrow A = \\frac{17}{5} = 3.4$\n\n" +
          "**2. To find B, set \\( x \\) equal to the root that makes the \\( A \\) term zero:** \\( x = -3 \\).\n\n" +
          "Substitute \\( x = -3 \\) into the equation:\n\n" +
          "$5(-3)+7 = A(-3+3) + B(-3-2)$\n" +
          "$-15+7 = 0 + B(-5)$\n" +
          "$-8 = -5B \\Rightarrow B = \\frac{8}{5} = 1.6$\n\n" +
          "This results in the final integral form: \\( \\frac{17}{5}\\ln|x-2| + \\frac{8}{5}\\ln|x+3| + C \\)."
      },

      {
        id: "q69",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "Once the partial fraction decomposition for \\( \\int\\frac{4x-3}{(x-1)(x+2)}dx \\) is solved as \\( I = \\int\\left(\\frac{1/3}{x-1} + \\frac{11/3}{x+2}\\right)dx \\), what is the fundamental integration rule used to evaluate these simpler terms?",
        
        options: [
          "A. \\( \\int u\\,du = \\frac{u^2}{2} + C \\)",
          "B. \\( \\int e^u\\,du = e^u + C \\)",
          "C. \\( \\int \\frac{1}{u}\\,du = \\ln|u| + C \\)",
          "D. \\( \\int \\sin u\\,du = -\\cos u + C \\)"
        ],
        
        correctAnswers: ["C"],
        
        explanation: "The fundamental integration rule used is \\( \\int \\frac{1}{u}\\,du = \\ln|u| + C \\).\n\n" +
          "**Explanation:**\n\n" +
          "The whole purpose of the partial fraction decomposition is to break down a complex rational function into a sum of terms that fit this simple integration pattern.\n\n" +
          "**1. For the first term, \\( \\frac{1}{3}\\int\\frac{dx}{x-1} \\):**\n\n" +
          "Let \\( u = x-1 \\), then \\( du = dx \\). The integral is:\n\n" +
          "$\\frac{1}{3}\\int\\frac{1}{u}du = \\frac{1}{3}\\ln|u| = \\frac{1}{3}\\ln|x-1|$\n\n" +
          "**2. For the second term, \\( \\frac{11}{3}\\int\\frac{dx}{x+2} \\):**\n\n" +
          "Let \\( u = x+2 \\), then \\( du = dx \\). The integral is:\n\n" +
          "$\\frac{11}{3}\\int\\frac{1}{u}du = \\frac{11}{3}\\ln|u| = \\frac{11}{3}\\ln|x+2|$\n\n" +
          "Combining these gives the final result:\n\n" +
          "$I = \\frac{1}{3}\\ln|x-1| + \\frac{11}{3}\\ln|x+2| + C$\n\n" +
          "**Answer: C**"
      },

      {
        id: "q70",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "Describe the general relationship between \\( f_{\\text{avg}} \\) and the integral \\( \\int_{a}^{b}f(x)\\,dx \\).",
        
        options: [
          "A. \\( f_{\\text{avg}} \\) is always larger than the integral value",
          "B. The integral represents the total area, and \\( f_{\\text{avg}} \\) is this area distributed evenly across the interval width",
          "C. \\( f_{\\text{avg}} \\) is the derivative of the integral",
          "D. They are unrelated quantities"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "The integral \\( \\int_{a}^{b}f(x)\\,dx \\) represents the **total accumulated quantity** or the **net area** under the curve \\( f(x) \\) over the interval \\( [a, b] \\). The average value, \\( f_{\\text{avg}} \\), is this total net area **distributed evenly** across the width of the interval \\( (b-a) \\), effectively giving the **mean height** of the function over that span.\n\n" +
          "**Explanation:**\n\n" +
          "The definition of the average value is:\n\n" +
          "$f_{\\text{avg}} \\times (b-a) = \\int_{a}^{b}f(x)\\,dx$\n\n" +
          "**Integral (Right Side):** The product of all function values \\( f(x) \\) and the infinitesimal change \\( dx \\), summed up. This is the **total area**.\n\n" +
          "**Average Value (Left Side):** \\( f_{\\text{avg}} \\) is a constant height. Multiplying it by the base \\( (b-a) \\) also gives an area (a rectangle's area).\n\n" +
          "The equation shows that the area of the rectangle with height \\( f_{\\text{avg}} \\) is **exactly equal** to the area under the curve \\( f(x) \\). Therefore, \\( f_{\\text{avg}} \\) is the constant height required to achieve the same total accumulated change over the interval.\n\n" +
          "**Answer: B**"
      },

      {
        id: "q71",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "The average value of a function \\( f_{\\text{avg}} \\) is closely related to the Mean Value Theorem for Integrals. If \\( f(x) \\) is continuous on \\( [a, b] \\), what does this theorem state about the existence of a value \\( c \\)?",
        
        options: [
          "A. There exists a value \\( c \\) where \\( f(c) = 0 \\)",
          "B. There exists a value \\( c \\) where \\( f(c) = f_{\\text{avg}} \\), meaning the function's height equals its average height",
          "C. There exists a value \\( c \\) where \\( f'(c) = f_{\\text{avg}} \\)",
          "D. There exists a value \\( c \\) where \\( f(c) \\) is maximum"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "The Mean Value Theorem for Integrals states that if \\( f(x) \\) is continuous on a closed interval \\( [a, b] \\), then there exists at least one number \\( c \\) in that interval \\( (a < c < b) \\) such that:\n\n" +
          "$$f(c) = f_{\\text{avg}}$$\n\n" +
          "Geometrically, this means there is a point \\( c \\) in the interval where the function's height, \\( f(c) \\), is **exactly equal** to the average height of the function, \\( f_{\\text{avg}} \\), over that interval.\n\n" +
          "**Explanation:**\n\n" +
          "The theorem guarantees that the constant function of height \\( f_{\\text{avg}} \\) (which has the same area as \\( f(x) \\)) must intersect the original function \\( f(x) \\) at least once. Since \\( f(x) \\) is continuous, it must take on every value between its minimum and maximum on the interval, including its own average value.\n\n" +
          "**Formulaically:** Since \\( f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx \\), the theorem is often written as:\n\n" +
          "$$\\int_{a}^{b}f(x)\\,dx = f(c)(b-a)$$\n\n" +
          "This shows that the **area under the curve** (\\( \\int f(x)\\,dx \\)) equals the **area of the average rectangle** (\\( f(c) \\cdot (b-a) \\)).\n\n" +
          "**Answer: B**"
      },

      {
        id: "q72",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Calculate the average value of the function \\( f(x) = 3x + 2 \\) over the interval \\( [0, 5] \\).",
        
        correctAnswers: [
          "9.5",
          "9.50",
          "19/2",
          "9 1/2"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**1. Set up the Average Value Formula:** We use \\( f_{\\text{avg}} = \\frac{1}{b-a}\\int_{a}^{b}f(x)\\,dx \\).\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{5-0}\\int_{0}^{5}(3x+2)\\,dx = \\frac{1}{5}\\int_{0}^{5}(3x+2)\\,dx$$\n\n" +
          "**2. Integrate the Function:** Find the antiderivative:\n\n" +
          "$$\\int(3x+2)\\,dx = \\frac{3x^2}{2} + 2x$$\n\n" +
          "**3. Apply Limits of Integration:** Evaluate the definite integral:\n\n" +
          "$$\\int_{0}^{5}(3x+2)\\,dx = \\left[\\frac{3}{2}x^2 + 2x\\right]_{0}^{5}$$\n\n" +
          "$$= \\left(\\frac{3}{2}(5)^2 + 2(5)\\right) - \\left(\\frac{3}{2}(0)^2 + 2(0)\\right)$$\n\n" +
          "$$= \\left(\\frac{75}{2} + 10\\right) - 0 = 37.5 + 10 = 47.5$$\n\n" +
          "**4. Final Average Value:** Divide by the interval length:\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{5} \\times 47.5 = 9.5$$"
      },

      {
        id: "q73",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "Explain the relationship between the Product Rule for Differentiation and the Integration by Parts formula. What is the widely used mnemonic for choosing the function \\( u \\) to differentiate?",
        
        options: [
          "A. They are unrelated; the mnemonic is PEMDAS",
          "B. Integration by Parts is the integral form of the Product Rule; the mnemonic is LIATE",
          "C. Integration by Parts is the derivative of the Product Rule; the mnemonic is BODMAS",
          "D. They use the same formula; the mnemonic is FOIL"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "Integration by Parts is the **integral form** of the Product Rule for Differentiation. It allows us to integrate a product of functions by reversing the differentiation process.\n\n" +
          "**The Product Rule states:**\n\n" +
          "$$\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$$\n\n" +
          "**Integrating both sides** with respect to \\( x \\) gives:\n\n" +
          "$$uv = \\int u\\,dv + \\int v\\,du$$\n\n" +
          "**Rearranging this formula** yields the Integration by Parts formula:\n\n" +
          "$$\\int u\\,dv = uv - \\int v\\,du$$\n\n" +
          "**The LIATE Mnemonic:**\n\n" +
          "The mnemonic used for choosing \\( u \\) is **LIATE**, which prioritizes the function types in this order for \\( u \\):\n\n" +
          "1. **L**ogarithmic (\\( \\ln x \\))\n" +
          "2. **I**nverse Trigonometric (\\( \\arctan x \\), \\( \\arcsin x \\))\n" +
          "3. **A**lgebraic (Polynomials like \\( x^2 \\), \\( x^3 \\))\n" +
          "4. **T**rigonometric (\\( \\sin x \\), \\( \\cos x \\))\n" +
          "5. **E**xponential (\\( e^x \\))\n\n" +
          "Choose \\( u \\) as the function that appears **earliest** in this list, and \\( dv \\) as what remains.\n\n" +
          "**Answer: B**"
      },

      {
        id: "q74",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Use the method of Integration by Parts to evaluate the integral \\( \\int x^2 e^x\\,dx \\). Express in factored form.",
        
        correctAnswers: [
          "e^x(x^2 - 2x + 2) + C",
          "e^x*(x^2 - 2x + 2) + C",
          "exp(x)*(x^2 - 2x + 2) + C",
          "(x^2 - 2x + 2)*e^x + C",
          "e^x(x^2-2x+2) + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.0001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "Since \\( u = x^2 \\) is a polynomial of degree 2, we must apply Integration by Parts twice.\n\n" +
          "**Application 1:** \\( \\int x^2 e^x\\,dx \\)\n\n" +
          "- Choose \\( u = x^2 \\) and \\( dv = e^x dx \\)\n" +
          "- \\( du = 2x\\,dx \\) and \\( v = e^x \\)\n\n" +
          "$$\\int x^2 e^x\\,dx = uv - \\int v\\,du = x^2 e^x - \\int e^x (2x)\\,dx = x^2 e^x - 2\\int x e^x\\,dx$$\n\n" +
          "**Application 2:** Evaluate the new integral, \\( -2\\int x e^x\\,dx \\)\n\n" +
          "- Choose \\( u = x \\) and \\( dv = e^x dx \\)\n" +
          "- \\( du = dx \\) and \\( v = e^x \\)\n\n" +
          "$$-2\\int x e^x\\,dx = -2\\left[xe^x - \\int e^x\\,dx\\right] = -2\\left[xe^x - e^x\\right] = -2xe^x + 2e^x$$\n\n" +
          "**Final Result:** Substitute the result of Application 2 back into Application 1:\n\n" +
          "$$\\int x^2 e^x\\,dx = x^2 e^x + (-2xe^x + 2e^x) + C$$\n\n" +
          "$$= x^2 e^x - 2xe^x + 2e^x + C$$\n\n" +
          "**Factoring out \\( e^x \\):**\n\n" +
          "$$= e^x(x^2 - 2x + 2) + C$$"
      },

      {
        id: "q75",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "In Integration by Partial Fractions, the first step is to ensure the fraction is proper. If you are asked to integrate an improper rational function, such as \\( \\int\\frac{P(x)}{Q(x)}dx \\) where \\( \\text{deg}(P(x)) \\geq \\text{deg}(Q(x)) \\), what specific preliminary step must you take, and why?",
        
        options: [
          "A. Factor the numerator first to simplify the expression",
          "B. Perform polynomial long division to obtain a proper fraction remainder",
          "C. Multiply numerator and denominator by the leading coefficient",
          "D. Use substitution to change the variable"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "The necessary preliminary step is to perform **polynomial long division**.\n\n" +
          "**Explanation:**\n\n" +
          "Polynomial long division is essential because the partial fraction decomposition method is only valid for **proper fractions** (where the degree of the numerator is less than the degree of the denominator).\n\n" +
          "- If the fraction is improper, division must be performed until a remainder, \\( R(x) \\), is obtained such that \\( \\text{deg}(R(x)) < \\text{deg}(Q(x)) \\).\n\n" +
          "- The original integral is then split into two parts:\n\n" +
          "$$\\int\\frac{P(x)}{Q(x)}dx = \\int\\left(\\text{Quotient}(x) + \\frac{R(x)}{Q(x)}\\right)dx$$\n\n" +
          "- The integral of the \\( \\text{Quotient}(x) \\) (a polynomial) is straightforward using the power rule.\n\n" +
          "- The integral of the **remainder term** \\( \\frac{R(x)}{Q(x)} \\) is now a proper rational function and can be solved using the Partial Fractions method.\n\n" +
          "**Example:**\n\n" +
          "For \\( \\frac{x^3 + 2x}{x^2 - 1} \\), the numerator degree (3) ≥ denominator degree (2), so it's improper. After polynomial division:\n\n" +
          "$$\\frac{x^3 + 2x}{x^2 - 1} = x + \\frac{3x}{x^2 - 1}$$\n\n" +
          "Now we can integrate \\( x \\) directly and apply partial fractions to \\( \\frac{3x}{x^2 - 1} \\).\n\n" +
          "**Answer: B**"
      },

      {
        id: "q76",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "For a proper rational function \\( \\frac{P(x)}{Q(x)} \\) where the denominator \\( Q(x) \\) can be factored into \\( n \\) distinct linear factors \\( (x-a_1)(x-a_2)\\dots(x-a_n) \\), write the general form of the partial fraction decomposition. (Use A1, A2, ..., An for coefficients)",
        
        correctAnswers: [
          "A1/(x-a1) + A2/(x-a2) + ... + An/(x-an)",
          "A1/(x-a1) + A2/(x-a2) + An/(x-an)",
          "sum of Ai/(x-ai) for i=1 to n"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.0001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "The general form of the decomposition is a sum of \\( n \\) simpler fractions, where each distinct linear factor gets a constant numerator:\n\n" +
          "$$\\frac{P(x)}{(x-a_1)(x-a_2)\\dots(x-a_n)} = \\frac{A_1}{x-a_1} + \\frac{A_2}{x-a_2} + \\dots + \\frac{A_n}{x-a_n}$$\n\n" +
          "Where \\( A_1, A_2, \\dots, A_n \\) are the unknown constant coefficients to be solved for.\n\n" +
          "**Explanation:**\n\n" +
          "This setup is based on the principle that the simplest forms of rational functions whose integrals we know are those with linear denominators (since \\( \\int \\frac{A}{x-a}\\,dx = A \\ln|x-a| + C \\)).\n\n" +
          "By decomposing the original complex fraction into this sum, we transform one difficult integral into a sum of several easy ones.\n\n" +
          "**Example:**\n\n" +
          "For \\( \\frac{5x+7}{(x-2)(x+3)} \\), the decomposition would be:\n\n" +
          "$$\\frac{5x+7}{(x-2)(x+3)} = \\frac{A_1}{x-2} + \\frac{A_2}{x+3}$$"
      },

      {
        id: "q77",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "For the integral \\( \\int\\frac{4x-3}{(x-1)(x+2)}dx \\), the decomposition leads to the equation \\( 4x-3 = (A+B)x + (2A-B) \\). Solve for the coefficients \\( A \\) and \\( B \\) by equating coefficients. Enter your answer as: A=value, B=value",
        
        correctAnswers: [
          "A=1/3, B=11/3",
          "A = 1/3, B = 11/3",
          "A=0.333, B=3.667",
          "A = 0.333, B = 3.667"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "We equate the coefficients of the terms on both sides of the identity:\n\n" +
          "**1. Coefficients of \\( x \\):** \\( A + B = 4 \\)\n\n" +
          "**2. Constant terms:** \\( 2A - B = -3 \\)\n\n" +
          "**Step 1: Eliminate \\( B \\) (by adding equations):**\n\n" +
          "$$(A+B) + (2A-B) = 4 + (-3)$$\n\n" +
          "$$3A = 1 \\Rightarrow A = \\frac{1}{3}$$\n\n" +
          "**Step 2: Solve for \\( B \\) (by substituting \\( A \\) into Eq. 1):**\n\n" +
          "$$A + B = 4$$\n\n" +
          "$$\\frac{1}{3} + B = 4$$\n\n" +
          "$$B = 4 - \\frac{1}{3} = \\frac{12}{3} - \\frac{1}{3} = \\frac{11}{3}$$\n\n" +
          "**Verification:**\n\n" +
          "Check with the second equation:\n\n" +
          "$$2A - B = 2\\left(\\frac{1}{3}\\right) - \\frac{11}{3} = \\frac{2}{3} - \\frac{11}{3} = -\\frac{9}{3} = -3$$ ✓"
      },

      {
        id: "q78",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "What is the general antiderivative formula for the rational function \\( \\frac{1}{ax+b} \\), and how does this relate to the final step in Integration by Partial Fractions?",
        
        options: [
          "A. \\( \\int \\frac{1}{ax+b}dx = \\ln(ax+b) + C \\); it's used occasionally",
          "B. \\( \\int \\frac{1}{ax+b}dx = \\frac{1}{a}\\ln|ax+b| + C \\); every decomposed partial fraction term uses this formula",
          "C. \\( \\int \\frac{1}{ax+b}dx = \\frac{(ax+b)^2}{2a} + C \\); it's unrelated to partial fractions",
          "D. \\( \\int \\frac{1}{ax+b}dx = \\arctan(ax+b) + C \\); it's used for quadratic factors"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "The general antiderivative formula is:\n\n" +
          "$$\\int \\frac{1}{ax+b}dx = \\frac{1}{a}\\ln|ax+b| + C$$\n\n" +
          "**Explanation:**\n\n" +
          "This formula is derived using a simple u-substitution where \\( u = ax+b \\), so \\( du = a\\,dx \\), which means \\( dx = \\frac{1}{a}du \\).\n\n" +
          "$$\\int \\frac{1}{u}\\left(\\frac{1}{a}du\\right) = \\frac{1}{a}\\int \\frac{1}{u}du = \\frac{1}{a}\\ln|u| + C$$\n\n" +
          "**Connection to Partial Fractions:**\n\n" +
          "This formula is the fundamental reason why Partial Fractions works: every decomposed term, \\( \\frac{A}{x-a} \\), is a special case of \\( \\frac{1}{ax+b} \\) (where \\( a=1 \\) and \\( b=-a \\)), making the final integration step for all partial fractions trivial and always resulting in a \\( \\ln|...| \\) term.\n\n" +
          "**Example:**\n\n" +
          "For \\( \\frac{5}{x-2} \\):\n\n" +
          "$$\\int \\frac{5}{x-2}dx = 5\\ln|x-2| + C$$\n\n" +
          "(Here \\( a=1 \\), so the \\( \\frac{1}{a} \\) factor is just 1)\n\n" +
          "**Answer: B**"
      },

      {
        id: "q79",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "multiple-choice",
        text: "When the denominator of a rational function has a repeated linear factor, such as \\( (x-a)^2 \\), how is the partial fraction decomposition set up according to the rules, and why?",
        
        options: [
          "A. \\( \\frac{A}{(x-a)^2} \\) only, because it covers all cases",
          "B. \\( \\frac{A}{x-a} + \\frac{B}{(x-a)^2} \\), to account for all possible rational functions with this denominator",
          "C. \\( \\frac{A+B}{(x-a)^2} \\), combining the constants",
          "D. \\( \\frac{A}{x-a} \\) only, ignoring the square"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "When a linear factor \\( (x-a) \\) is repeated \\( k \\) times (e.g., \\( (x-a)^k \\)), the decomposition requires \\( k \\) separate partial fractions. For a repeated factor squared, \\( (x-a)^2 \\), the setup is:\n\n" +
          "$$\\frac{P(x)}{(x-a)^2} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2}$$\n\n" +
          "**Explanation:**\n\n" +
          "This setup is necessary because the common denominator of the two fractions on the right is \\( (x-a)^2 \\).\n\n" +
          "- If we only used \\( \\frac{B}{(x-a)^2} \\), we could only represent numerators that resulted *directly* from that single factor.\n\n" +
          "- By including the fraction \\( \\frac{A}{x-a} \\), we account for any original rational function that resulted from combining two fractions where one had a denominator of \\( (x-a) \\) and the other had \\( (x-a)^2 \\).\n\n" +
          "This ensures that **all possible** rational functions with a denominator of \\( (x-a)^2 \\) can be represented.\n\n" +
          "**Example:**\n\n" +
          "For \\( \\frac{3x+5}{(x-1)^2} \\), we write:\n\n" +
          "$$\\frac{3x+5}{(x-1)^2} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2}$$\n\n" +
          "**General Rule:**\n\n" +
          "For \\( (x-a)^3 \\): \\( \\frac{A}{x-a} + \\frac{B}{(x-a)^2} + \\frac{C}{(x-a)^3} \\)\n\n" +
          "**Answer: B**"
      },

      {
        id: "q80",
        moduleId: "ITMTB",
        weekId: "ITMTB_W3",
        type: "open-ended",
        text: "Briefly state the final result for the integral \\( \\int x^3 \\sin x\\,dx \\) using Integration by Parts.",
        
        correctAnswers: [
          "-x^3*cos(x) + 3x^2*sin(x) + 6x*cos(x) - 6*sin(x) + C",
          "-x^3*cos x + 3x^2*sin x + 6x*cos x - 6*sin x + C",
          "-cos(x)*x^3 + sin(x)*3x^2 + cos(x)*6x - sin(x)*6 + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.0001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "The integral \\( \\int x^3 \\sin x\\,dx \\) must be solved by applying Integration by Parts **three times** consecutively, as the polynomial \\( x^3 \\) only reduces its degree by one with each application.\n\n" +
          "**The final result is:**\n\n" +
          "$$I = -x^3\\cos x + 3x^2\\sin x + 6x\\cos x - 6\\sin x + C$$\n\n" +
          "**Explanation:**\n\n" +
          "The general approach uses the Tabular Method (DI method) due to the multiple repetitions:\n\n" +
          "**1. Differentiate (\\( u \\)):**\n" +
          "$$x^3 \\rightarrow 3x^2 \\rightarrow 6x \\rightarrow 6 \\rightarrow 0$$\n\n" +
          "**2. Integrate (\\( dv \\)):**\n" +
          "$$\\sin x \\rightarrow -\\cos x \\rightarrow -\\sin x \\rightarrow \\cos x \\rightarrow \\sin x$$\n\n" +
          "**3. Combine:** The terms are multiplied diagonally, alternating signs (\\( +, -, +, -, \\dots \\)):\n\n" +
          "- \\( +(x^3)(-\\cos x) = -x^3\\cos x \\)\n" +
          "- \\( -(3x^2)(-\\sin x) = +3x^2\\sin x \\)\n" +
          "- \\( +(6x)(\\cos x) = +6x\\cos x \\)\n" +
          "- \\( -(6)(\\sin x) = -6\\sin x \\)\n\n" +
          "Summing these products yields the final answer, plus the constant of integration \\( C \\)."
      },

]