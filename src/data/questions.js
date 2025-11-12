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
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      {
        id: "q81",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "What is the average value of the function \\( f(x) = 3x^2 + 8x \\) on the interval \\( [-1, 2] \\)?",
        
        correctAnswers: [
          "7",
          "7.0",
          "7.00"
        ],
        
        options: {
          allowSymbolic: false,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "To find the average value of a function on an interval \\([a, b]\\), we use the formula:\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{b-a} \\int_{a}^{b} f(x)\\,dx$$\n\n" +
          "**Step 1: Set up the integral**\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{2 - (-1)} \\int_{-1}^{2} (3x^2 + 8x)\\,dx$$\n\n" +
          "$$= \\frac{1}{3} \\int_{-1}^{2} (3x^2 + 8x)\\,dx$$\n\n" +
          "**Step 2: Find the antiderivative**\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{3} \\left[x^3 + 4x^2\\right]_{-1}^{2}$$\n\n" +
          "**Step 3: Evaluate using the Fundamental Theorem of Calculus**\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{3} \\left[(2^3 + 4(2)^2) - ((-1)^3 + 4(-1)^2)\\right]$$\n\n" +
          "$$= \\frac{1}{3} \\left[(8 + 16) - (-1 + 4)\\right]$$\n\n" +
          "$$= \\frac{1}{3} (24 - 3)$$\n\n" +
          "$$= \\frac{1}{3}(21) = 7$$\n\n" +
          "**Answer: 7**\n\n" +
          "**Key Concept:** The average value formula integrates the function over the interval and divides by the interval length. This gives the constant value that would produce the same total area under the curve."
      },

      {
        id: "q82",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Find the average value of \\( f(x) = \\sqrt{x} \\) on the interval \\( [0, 4] \\).",
        
        correctAnswers: [
          "4/3",
          "4 / 3",
          "1.333",
          "1.33",
          "1.3333",
          "≈1.33"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.01,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Set up the integral**\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{4 - 0} \\int_{0}^{4} \\sqrt{x}\\,dx = \\frac{1}{4} \\int_{0}^{4} x^{1/2}\\,dx$$\n\n" +
          "**Step 2: Find the antiderivative using the power rule**\n\n" +
          "For \\( x^{1/2} \\), we add 1 to the exponent and divide by the new exponent:\n\n" +
          "$$\\int x^{1/2}\\,dx = \\frac{x^{3/2}}{3/2} = \\frac{2}{3}x^{3/2}$$\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{4} \\left[\\frac{2}{3}x^{3/2}\\right]_{0}^{4}$$\n\n" +
          "**Step 3: Evaluate**\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{4} \\left(\\frac{2}{3}(4)^{3/2} - \\frac{2}{3}(0)^{3/2}\\right)$$\n\n" +
          "Note: \\( (4)^{3/2} = (\\sqrt{4})^3 = 2^3 = 8 \\)\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{4} \\left(\\frac{2}{3} \\cdot 8 - 0\\right)$$\n\n" +
          "$$= \\frac{1}{4} \\cdot \\frac{16}{3} = \\frac{16}{12} = \\frac{4}{3}$$\n\n" +
          "**Answer: \\( \\frac{4}{3} \\approx 1.33 \\)**\n\n" +
          "**Key Concept:** When working with radical functions, convert to exponential form (\\(\\sqrt{x} = x^{1/2}\\)) to apply the power rule for integration."
      },

      {
        id: "q83",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Find the average value of \\( g(x) = 3\\cos x \\) on the interval \\( \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] \\).",
        
        correctAnswers: [
          "6/π",
          "6/pi",
          "6 / π",
          "6 / pi",
          "1.909",
          "1.91",
          "≈1.91"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.02,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Set up the integral**\n\n" +
          "$$g_{\\text{avg}} = \\frac{1}{\\pi/2 - (-\\pi/2)} \\int_{-\\pi/2}^{\\pi/2} 3\\cos x\\,dx$$\n\n" +
          "$$= \\frac{1}{\\pi} \\int_{-\\pi/2}^{\\pi/2} 3\\cos x\\,dx$$\n\n" +
          "**Step 2: Find the antiderivative**\n\n" +
          "The antiderivative of \\( \\cos x \\) is \\( \\sin x \\):\n\n" +
          "$$g_{\\text{avg}} = \\frac{3}{\\pi} \\left[\\sin x\\right]_{-\\pi/2}^{\\pi/2}$$\n\n" +
          "**Step 3: Evaluate**\n\n" +
          "$$g_{\\text{avg}} = \\frac{3}{\\pi} \\left(\\sin\\left(\\frac{\\pi}{2}\\right) - \\sin\\left(-\\frac{\\pi}{2}\\right)\\right)$$\n\n" +
          "Recall: \\( \\sin(\\pi/2) = 1 \\) and \\( \\sin(-\\pi/2) = -1 \\)\n\n" +
          "$$g_{\\text{avg}} = \\frac{3}{\\pi}(1 - (-1))$$\n\n" +
          "$$= \\frac{3}{\\pi}(2) = \\frac{6}{\\pi}$$\n\n" +
          "**Answer: \\( \\frac{6}{\\pi} \\approx 1.91 \\)**\n\n" +
          "**Key Concept:** For trigonometric functions, remember the fundamental antiderivatives. The symmetry of cosine on this interval (symmetric about \\(x = 0\\)) contributes to the clean result."
      },

      {
        id: "q84",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Find the average value of \\( f(x) = \\frac{x^2}{(x^3+3)^2} \\) on the interval \\( [-1, 1] \\).",
        
        correctAnswers: [
          "1/24",
          "1 / 24",
          "0.04167",
          "0.0417",
          "≈0.042"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Set up the integral**\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{1 - (-1)} \\int_{-1}^{1} \\frac{x^2}{(x^3+3)^2}\\,dx$$\n\n" +
          "$$= \\frac{1}{2} \\int_{-1}^{1} (x^3+3)^{-2} \\cdot x^2\\,dx$$\n\n" +
          "**Step 2: Use u-substitution**\n\n" +
          "Let \\( u = x^3 + 3 \\)\n\n" +
          "Then \\( du = 3x^2\\,dx \\), so \\( x^2\\,dx = \\frac{du}{3} \\)\n\n" +
          "**Change limits:**\n" +
          "- When \\( x = -1 \\): \\( u = (-1)^3 + 3 = 2 \\)\n" +
          "- When \\( x = 1 \\): \\( u = (1)^3 + 3 = 4 \\)\n\n" +
          "**Step 3: Rewrite and solve the integral**\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{2} \\int_{2}^{4} u^{-2} \\cdot \\frac{du}{3}$$\n\n" +
          "$$= \\frac{1}{6} \\int_{2}^{4} u^{-2}\\,du$$\n\n" +
          "$$= \\frac{1}{6} \\left[\\frac{u^{-1}}{-1}\\right]_{2}^{4}$$\n\n" +
          "$$= -\\frac{1}{6} \\left[\\frac{1}{u}\\right]_{2}^{4}$$\n\n" +
          "**Step 4: Evaluate**\n\n" +
          "$$f_{\\text{avg}} = -\\frac{1}{6}\\left(\\frac{1}{4} - \\frac{1}{2}\\right)$$\n\n" +
          "$$= -\\frac{1}{6}\\left(-\\frac{1}{4}\\right) = \\frac{1}{24}$$\n\n" +
          "**Answer: \\( \\frac{1}{24} \\approx 0.042 \\)**\n\n" +
          "**Key Concept:** U-substitution is essential when you see a function and its derivative (or a multiple of it) in the integrand. Here, \\( x^2 \\) is related to the derivative of \\( x^3 + 3 \\), making substitution straightforward."
      },

      {
        id: "q85",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "The velocity graph of an accelerating car is shown. Use the Midpoint Rule with 3 subintervals (\\(n=3\\)) to estimate the average velocity of the car during the first 12 seconds. Express your answer in km/h.",
        
        image: {
          src: "/images/ITMTB_Week 4_Quiz 1_Question 5.png",
          alt: "Velocity-time graph showing car acceleration from 0 to approximately 80 km/h over 12 seconds",
          caption: "Velocity (km/h) vs Time (seconds) graph"
        },
        
        correctAnswers: [
          "45 km/h",
          "45km/h",
          "45",
          "≈45 km/h"
        ],
        
        options: {
          allowSymbolic: false,
          tolerance: 2,
          acceptedUnits: ["km/h"],
          requiredUnit: null
        },
        
        explanation: "**Understanding Average Velocity:**\n\n" +
          "The average velocity is given by:\n\n" +
          "$$v_{\\text{avg}} = \\frac{1}{12-0} \\int_{0}^{12} v(t)\\,dt$$\n\n" +
          "We estimate the integral using the **Midpoint Rule**.\n\n" +
          "**Step 1: Set up the Midpoint Rule (n=3)**\n\n" +
          "- Total interval: \\([0, 12]\\)\n" +
          "- Width of each subinterval: \\( \\Delta t = \\frac{12 - 0}{3} = 4 \\) seconds\n" +
          "- Subintervals: \\([0, 4]\\), \\([4, 8]\\), \\([8, 12]\\)\n" +
          "- Midpoints: \\( t_1 = 2 \\), \\( t_2 = 6 \\), \\( t_3 = 10 \\)\n\n" +
          "**Step 2: Read velocities from the graph**\n\n" +
          "- \\( v(2) \\approx 20 \\) km/h\n" +
          "- \\( v(6) \\approx 50 \\) km/h\n" +
          "- \\( v(10) \\approx 65 \\) km/h\n\n" +
          "**Step 3: Calculate the integral estimate**\n\n" +
          "The Midpoint Rule formula:\n\n" +
          "$$\\int_{0}^{12} v(t)\\,dt \\approx \\Delta t \\left[v(t_1) + v(t_2) + v(t_3)\\right]$$\n\n" +
          "$$\\int_{0}^{12} v(t)\\,dt \\approx 4[20 + 50 + 65]$$\n\n" +
          "$$= 4 \\times 135 = 540$$\n\n" +
          "**Step 4: Calculate average velocity**\n\n" +
          "$$v_{\\text{avg}} \\approx \\frac{1}{12}(540) = 45 \\text{ km/h}$$\n\n" +
          "**Answer: 45 km/h**\n\n" +
          "**Key Concept:** The Midpoint Rule estimates an integral by evaluating the function at the midpoint of each subinterval. It generally provides better accuracy than left or right endpoint approximations because it balances overestimation and underestimation."
      },

      {
        id: "q86",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "**Question continued:** Based on the velocity graph and the estimated average velocity of 45 km/h (from Quiz 1, Question 5), at what time was the instantaneous velocity equal to the average velocity? Express your answer in seconds.",
        
        image: {
          src: "/images/ITMTB_Week 4_Quiz 1_Question 5.png",
          alt: "Velocity-time graph showing car acceleration",
          caption: "Find where v(t) = 45 km/h"
        },
        
        correctAnswers: [
          "5",
          "5 s",
          "5s",
          "5 seconds",
          "≈5",
          "≈5 s"
        ],
        
        options: {
          allowSymbolic: false,
          tolerance: 0.5,
          acceptedUnits: ["s", "seconds"],
          requiredUnit: null
        },
        
        explanation: "This question applies the **Mean Value Theorem for Integrals**.\n\n" +
          "**The Mean Value Theorem for Integrals states:**\n\n" +
          "If \\( f \\) is continuous on \\([a, b]\\), then there exists at least one point \\( c \\) in \\([a, b]\\) where:\n\n" +
          "$$f(c) = f_{\\text{avg}} = \\frac{1}{b-a} \\int_{a}^{b} f(x)\\,dx$$\n\n" +
          "**Application to this problem:**\n\n" +
          "We need to find when \\( v(t) = 45 \\) km/h.\n\n" +
          "**Step 1: Locate 45 km/h on the graph**\n\n" +
          "- Find 45 km/h on the vertical axis (velocity)\n" +
          "- This is midway between 40 and 50 km/h\n\n" +
          "**Step 2: Find where the curve crosses this line**\n\n" +
          "- Draw a horizontal line at \\( v = 45 \\) km/h\n" +
          "- Find where this line intersects the velocity curve\n" +
          "- Read the corresponding time on the horizontal axis\n\n" +
          "**Step 3: Read the time**\n\n" +
          "The curve \\( v(t) \\) crosses \\( v = 45 \\) km/h at approximately **\\( t = 5 \\) seconds**.\n\n" +
          "**Answer: 5 seconds**\n\n" +
          "**Key Concept:** The Mean Value Theorem guarantees that for a continuous function, the average value is actually attained somewhere in the interval. This point \\( c \\) represents where the instantaneous rate equals the average rate."
      },

      {
        id: "q87",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "If \\( f \\) is continuous and \\( \\displaystyle\\int_{1}^{3} f(x)\\,dx = 8 \\), what can we conclude about the value of \\( f \\) on the interval \\([1, 3]\\)?",
        
        options: [
          "A. \\( f \\) must equal 4 at every point in \\([1, 3]\\)",
          "B. \\( f \\) takes on the value 4 at least once in \\([1, 3]\\)",
          "C. \\( f \\) has a maximum value of 4 in \\([1, 3]\\)",
          "D. \\( f \\) must be increasing on \\([1, 3]\\)"
        ],
        
        correctAnswers: ["B"],
        
        explanation: "This is a direct application of the **Mean Value Theorem for Integrals**.\n\n" +
          "**Step 1: Find the average value**\n\n" +
          "The average value of \\( f \\) on \\([1, 3]\\) is:\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{3-1} \\int_{1}^{3} f(x)\\,dx$$\n\n" +
          "Given that \\( \\displaystyle\\int_{1}^{3} f(x)\\,dx = 8 \\):\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{2}(8) = 4$$\n\n" +
          "**Step 2: Apply the Mean Value Theorem**\n\n" +
          "The Mean Value Theorem for Integrals states:\n\n" +
          "*If \\( f \\) is continuous on \\([a, b]\\), then there exists at least one number \\( c \\) in \\([a, b]\\) such that:*\n\n" +
          "$$f(c) = f_{\\text{avg}}$$\n\n" +
          "**Step 3: Conclusion**\n\n" +
          "Since \\( f \\) is continuous on \\([1, 3]\\) and its average value is 4, the theorem **guarantees** that there is at least one point \\( c \\) in \\([1, 3]\\) where:\n\n" +
          "$$f(c) = 4$$\n\n" +
          "**Why other options are wrong:**\n\n" +
          "- **Option A**: The function doesn't need to equal 4 everywhere, just at least once\n" +
          "- **Option C**: 4 is the average value, not necessarily the maximum\n" +
          "- **Option D**: There's no information about whether \\( f \\) is increasing or decreasing\n\n" +
          "**Answer: B**\n\n" +
          "**Key Concept:** The Mean Value Theorem for Integrals is the integral analog of the Mean Value Theorem for derivatives. It guarantees that a continuous function achieves its average value at least once in the interval."
      },

      {
        id: "q88",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Find the numbers \\( b \\) such that the average value of \\( f(x) = 2 + 6x - 3x^2 \\) on the interval \\([0, b]\\) is equal to 3. Express your answer(s) in the form \\( \\frac{a \\pm \\sqrt{c}}{d} \\).",
        
        correctAnswers: [
          "(3+√5)/2",
          "(3 + √5)/2",
          "(3+sqrt(5))/2",
          "(3 + sqrt(5))/2",
          "2.618",
          "≈2.62"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.02,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Set up the average value equation**\n\n" +
          "$$f_{\\text{avg}} = \\frac{1}{b - 0} \\int_{0}^{b} (2 + 6x - 3x^2)\\,dx = 3$$\n\n" +
          "**Step 2: Integrate**\n\n" +
          "$$\\frac{1}{b} \\left[2x + 3x^2 - x^3\\right]_{0}^{b} = 3$$\n\n" +
          "**Step 3: Evaluate the integral**\n\n" +
          "$$\\frac{1}{b}\\left[(2b + 3b^2 - b^3) - 0\\right] = 3$$\n\n" +
          "**Step 4: Simplify**\n\n" +
          "Multiply both sides by \\( b \\):\n\n" +
          "$$2b + 3b^2 - b^3 = 3b$$\n\n" +
          "Rearrange:\n\n" +
          "$$-b^3 + 3b^2 + 2b - 3b = 0$$\n\n" +
          "$$-b^3 + 3b^2 - b = 0$$\n\n" +
          "Multiply by \\(-1\\):\n\n" +
          "$$b^3 - 3b^2 + b = 0$$\n\n" +
          "Wait, let me recalculate:\n\n" +
          "$$2b + 3b^2 - b^3 = 3b$$\n\n" +
          "$$3b^2 - b^3 = 3b - 2b = b$$\n\n" +
          "$$-b^3 + 3b^2 - b = 0$$\n\n" +
          "Multiply by \\(-1\\):\n\n" +
          "$$b^3 - 3b^2 + b = 0$$\n\n" +
          "Actually, dividing by \\(b\\) gives:\n\n" +
          "$$\\frac{2b + 3b^2 - b^3}{b} = 3$$\n\n" +
          "$$2 + 3b - b^2 = 3$$\n\n" +
          "$$-b^2 + 3b - 1 = 0$$\n\n" +
          "$$b^2 - 3b + 1 = 0$$\n\n" +
          "**Step 5: Use the quadratic formula**\n\n" +
          "For \\( b^2 - 3b + 1 = 0 \\):\n\n" +
          "$$b = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4(1)(1)}}{2(1)}$$\n\n" +
          "$$b = \\frac{3 \\pm \\sqrt{9 - 4}}{2}$$\n\n" +
          "$$b = \\frac{3 \\pm \\sqrt{5}}{2}$$\n\n" +
          "**Step 6: Check both solutions**\n\n" +
          "Both values are positive:\n" +
          "- \\( b = \\frac{3 + \\sqrt{5}}{2} \\approx 2.618 \\)\n" +
          "- \\( b = \\frac{3 - \\sqrt{5}}{2} \\approx 0.382 \\)\n\n" +
          "Both are valid endpoints for the interval \\([0, b]\\).\n\n" +
          "**Answer: \\( b = \\frac{3 \\pm \\sqrt{5}}{2} \\)**\n\n" +
          "(The larger value \\( \\frac{3 + \\sqrt{5}}{2} \\approx 2.618 \\) is typically the primary answer)\n\n" +
          "**Key Concept:** When solving for an interval boundary given average value, you often end up with a quadratic equation. Both positive solutions are mathematically valid, representing different interval lengths that yield the same average."
      },

      {
        id: "q89",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "In a certain city, the temperature (in °C) \\( t \\) hours after 9 AM was modeled by \\( T(t) = 10 + 4\\sin\\left(\\frac{\\pi t}{12}\\right) \\). Find the average temperature during the period from 9 AM to 9 PM. Express your answer in the form \\( a + \\frac{b}{\\pi} \\).",
        
        correctAnswers: [
          "10 + 8/π",
          "10 + 8/pi",
          "10+8/π",
          "10+8/pi",
          "12.55",
          "≈12.55",
          "12.5"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.1,
          acceptedUnits: ["°C", "C"],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Identify the interval**\n\n" +
          "From 9 AM to 9 PM is 12 hours, so we find the average on \\([0, 12]\\).\n\n" +
          "**Step 2: Set up the average value integral**\n\n" +
          "$$T_{\\text{avg}} = \\frac{1}{12 - 0} \\int_{0}^{12} \\left(10 + 4\\sin\\left(\\frac{\\pi t}{12}\\right)\\right)dt$$\n\n" +
          "$$= \\frac{1}{12} \\int_{0}^{12} \\left(10 + 4\\sin\\left(\\frac{\\pi t}{12}\\right)\\right)dt$$\n\n" +
          "**Step 3: Integrate term by term**\n\n" +
          "For the sine term, use substitution: if \\( u = \\frac{\\pi t}{12} \\), then \\( du = \\frac{\\pi}{12}dt \\)\n\n" +
          "The antiderivative of \\( \\sin\\left(\\frac{\\pi t}{12}\\right) \\) is \\( -\\frac{12}{\\pi}\\cos\\left(\\frac{\\pi t}{12}\\right) \\)\n\n" +
          "$$T_{\\text{avg}} = \\frac{1}{12}\\left[10t - \\frac{48}{\\pi}\\cos\\left(\\frac{\\pi t}{12}\\right)\\right]_{0}^{12}$$\n\n" +
          "**Step 4: Evaluate at the bounds**\n\n" +
          "At \\( t = 12 \\):\n\n" +
          "$10(12) - \\frac{48}{\\pi}\\cos\\left(\\frac{12\\pi}{12}\\right) = 120 - \\frac{48}{\\pi}\\cos(\\pi)$\n\n" +
          "Since \\( \\cos(\\pi) = -1 \\):\n\n" +
          "$120 - \\frac{48}{\\pi}(-1) = 120 + \\frac{48}{\\pi}$\n\n" +
          "At \\( t = 0 \\):\n\n" +
          "$10(0) - \\frac{48}{\\pi}\\cos(0) = 0 - \\frac{48}{\\pi}(1) = -\\frac{48}{\\pi}$\n\n" +
          "**Step 5: Calculate the difference**\n\n" +
          "$T_{\\text{avg}} = \\frac{1}{12}\\left[\\left(120 + \\frac{48}{\\pi}\\right) - \\left(-\\frac{48}{\\pi}\\right)\\right]$\n\n" +
          "$= \\frac{1}{12}\\left(120 + \\frac{48}{\\pi} + \\frac{48}{\\pi}\\right)$\n\n" +
          "$= \\frac{1}{12}\\left(120 + \\frac{96}{\\pi}\\right)$\n\n" +
          "$= 10 + \\frac{8}{\\pi}$\n\n" +
          "**Numerical value:** \\( 10 + \\frac{8}{\\pi} \\approx 10 + 2.55 \\approx 12.55°\\text{C} \\)\n\n" +
          "**Answer: \\( 10 + \\frac{8}{\\pi} \\)°C ≈ 12.55°C**\n\n" +
          "**Key Concept:** When integrating trigonometric functions with coefficients inside the argument, remember to apply the chain rule in reverse. The period of the sine function is \\( 2\\pi \\), but here it's been adjusted to match a 24-hour cycle, making \\( T(12) \\) represent one half-period."
      },

      {
        id: "q90",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Find the second positive value of \\( b \\) such that the average value of \\( f(x) = 2 + 6x - 3x^2 \\) on the interval \\([0, b]\\) is equal to 3. (This is the smaller solution from Question 88.)",
        
        correctAnswers: [
          "(3-√5)/2",
          "(3 - √5)/2",
          "(3-sqrt(5))/2",
          "(3 - sqrt(5))/2",
          "0.382",
          "0.38",
          "≈0.38"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.02,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "From Question 88, we found that the average value equation led to:\n\n" +
          "$b^2 - 3b + 1 = 0$\n\n" +
          "Using the quadratic formula:\n\n" +
          "$b = \\frac{3 \\pm \\sqrt{5}}{2}$\n\n" +
          "This gives us **two positive solutions**:\n\n" +
          "1. \\( b = \\frac{3 + \\sqrt{5}}{2} \\approx 2.618 \\) (larger solution)\n" +
          "2. \\( b = \\frac{3 - \\sqrt{5}}{2} \\approx 0.382 \\) (smaller solution)\n\n" +
          "**This question asks for the smaller solution:**\n\n" +
          "$b = \\frac{3 - \\sqrt{5}}{2} \\approx 0.382$\n\n" +
          "**Why are there two solutions?**\n\n" +
          "The function \\( f(x) = 2 + 6x - 3x^2 \\) is a downward-opening parabola. As the interval \\([0, b]\\) grows:\n\n" +
          "- Initially (small \\(b\\)), the average value increases\n" +
          "- At \\( b \\approx 0.382 \\), the average value reaches 3 for the first time\n" +
          "- The average continues to increase and peaks somewhere in the middle\n" +
          "- At \\( b \\approx 2.618 \\), the average value equals 3 again on its way down\n\n" +
          "**Answer: \\( \\frac{3 - \\sqrt{5}}{2} \\approx 0.382 \\)**\n\n" +
          "**Key Concept:** When a continuous function is not monotonic (doesn't always increase or decrease), the average value over \\([0, b]\\) can equal a given target at multiple values of \\(b\\)."
      },

      {
        id: "q91",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "The linear density in a rod 8 m long is \\( \\rho(x) = \\frac{12}{\\sqrt{x+1}} \\) kg/m, where \\( x \\) is measured in meters from one end. Find the average density of the rod. Express your answer in kg/m.",
        
        correctAnswers: [
          "6",
          "6.0",
          "6 kg/m",
          "6.0 kg/m"
        ],
        
        options: {
          allowSymbolic: false,
          tolerance: 0.01,
          acceptedUnits: ["kg/m"],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Identify the function and interval**\n\n" +
          "We need the average value of the density function:\n\n" +
          "$\\rho(x) = \\frac{12}{\\sqrt{x+1}}$\n\n" +
          "on the interval \\([0, 8]\\) (since the rod is 8 m long).\n\n" +
          "**Step 2: Set up the average value integral**\n\n" +
          "$\\rho_{\\text{avg}} = \\frac{1}{8 - 0} \\int_{0}^{8} \\frac{12}{\\sqrt{x+1}}\\,dx$\n\n" +
          "$= \\frac{12}{8} \\int_{0}^{8} (x+1)^{-1/2}\\,dx$\n\n" +
          "$= \\frac{3}{2} \\int_{0}^{8} (x+1)^{-1/2}\\,dx$\n\n" +
          "**Step 3: Integrate using the power rule**\n\n" +
          "For \\( (x+1)^{-1/2} \\), the antiderivative is:\n\n" +
          "$\\int (x+1)^{-1/2}\\,dx = \\frac{(x+1)^{1/2}}{1/2} = 2(x+1)^{1/2} = 2\\sqrt{x+1}$\n\n" +
          "Therefore:\n\n" +
          "$\\rho_{\\text{avg}} = \\frac{3}{2} \\left[2\\sqrt{x+1}\\right]_{0}^{8}$\n\n" +
          "$= 3\\left[\\sqrt{x+1}\\right]_{0}^{8}$\n\n" +
          "**Step 4: Evaluate at the bounds**\n\n" +
          "$\\rho_{\\text{avg}} = 3\\left(\\sqrt{8+1} - \\sqrt{0+1}\\right)$\n\n" +
          "$= 3\\left(\\sqrt{9} - \\sqrt{1}\\right)$\n\n" +
          "$= 3(3 - 1)$\n\n" +
          "$= 3(2) = 6$\n\n" +
          "**Answer: 6 kg/m**\n\n" +
          "**Physical Interpretation:**\n\n" +
          "- The density is highest at \\( x = 0 \\): \\( \\rho(0) = \\frac{12}{\\sqrt{1}} = 12 \\) kg/m\n" +
          "- The density decreases as \\( x \\) increases\n" +
          "- At \\( x = 8 \\): \\( \\rho(8) = \\frac{12}{\\sqrt{9}} = 4 \\) kg/m\n" +
          "- The average density of 6 kg/m falls between these extremes\n\n" +
          "**Key Concept:** Average density (or any average value of a varying quantity) represents a uniform distribution that would have the same total effect. If the rod had uniform density of 6 kg/m throughout its 8 m length, it would have the same total mass as the actual variable-density rod."
      },

      {
        id: "q92",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "Evaluate the integral \\( \\displaystyle\\int xe^{2x}\\,dx \\) using integration by parts with \\( u = x \\) and \\( dv = e^{2x}\\,dx \\).",
        
        options: [
          "A. \\( \\frac{1}{2}xe^{2x} - \\frac{1}{4}e^{2x} + C \\)",
          "B. \\( xe^{2x} - \\frac{1}{2}e^{2x} + C \\)",
          "C. \\( \\frac{1}{2}xe^{2x} - e^{2x} + C \\)",
          "D. \\( 2xe^{2x} - e^{2x} + C \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "**Integration by Parts Formula:**\n\n" +
          "$\\int u\\,dv = uv - \\int v\\,du$\n\n" +
          "**Step 1: Identify the parts**\n\n" +
          "Given:\n" +
          "- \\( u = x \\) → \\( du = dx \\)\n" +
          "- \\( dv = e^{2x}\\,dx \\) → \\( v = \\int e^{2x}\\,dx = \\frac{1}{2}e^{2x} \\)\n\n" +
          "**Step 2: Apply the formula**\n\n" +
          "$\\int xe^{2x}\\,dx = x \\cdot \\frac{1}{2}e^{2x} - \\int \\frac{1}{2}e^{2x}\\,dx$\n\n" +
          "$= \\frac{1}{2}xe^{2x} - \\frac{1}{2}\\int e^{2x}\\,dx$\n\n" +
          "**Step 3: Integrate the remaining term**\n\n" +
          "$= \\frac{1}{2}xe^{2x} - \\frac{1}{2} \\cdot \\frac{1}{2}e^{2x} + C$\n\n" +
          "$= \\frac{1}{2}xe^{2x} - \\frac{1}{4}e^{2x} + C$\n\n" +
          "**Can be factored as:**\n\n" +
          "$= \\frac{e^{2x}}{4}(2x - 1) + C$\n\n" +
          "**Answer: \\( \\frac{1}{2}xe^{2x} - \\frac{1}{4}e^{2x} + C \\)**\n\n" +
          "**Key Concept - LIATE Rule:** When choosing \\(u\\) and \\(dv\\), use the LIATE priority:\n" +
          "- **L**ogarithmic\n" +
          "- **I**nverse trigonometric\n" +
          "- **A**lgebraic (polynomials)\n" +
          "- **T**rigonometric\n" +
          "- **E**xponential\n\n" +
          "Here, \\(x\\) (algebraic) comes before \\(e^{2x}\\) (exponential), so we let \\(u = x\\)."
      },

      {
        id: "q93",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "Evaluate the integral \\( \\displaystyle\\int \\sin^{-1}x\\,dx \\) using integration by parts with \\( u = \\sin^{-1}x \\) and \\( dv = dx \\).",
        
        options: [
          "A. \\( x\\sin^{-1}x + \\sqrt{1-x^2} + C \\)",
          "B. \\( x\\sin^{-1}x - \\sqrt{1-x^2} + C \\)",
          "C. \\( \\sin^{-1}x + x\\sqrt{1-x^2} + C \\)",
          "D. \\( x\\sin^{-1}x + \\frac{1}{\\sqrt{1-x^2}} + C \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "**Step 1: Set up integration by parts**\n\n" +
          "Given:\n" +
          "- \\( u = \\sin^{-1}x \\) → \\( du = \\frac{1}{\\sqrt{1-x^2}}\\,dx \\)\n" +
          "- \\( dv = dx \\) → \\( v = x \\)\n\n" +
          "**Step 2: Apply the formula**\n\n" +
          "$\\int \\sin^{-1}x\\,dx = x\\sin^{-1}x - \\int x \\cdot \\frac{1}{\\sqrt{1-x^2}}\\,dx$\n\n" +
          "$= x\\sin^{-1}x - \\int \\frac{x}{\\sqrt{1-x^2}}\\,dx$\n\n" +
          "**Step 3: Solve the remaining integral using substitution**\n\n" +
          "Let \\( w = 1 - x^2 \\)\n\n" +
          "Then \\( dw = -2x\\,dx \\), so \\( x\\,dx = -\\frac{1}{2}dw \\)\n\n" +
          "$\\int \\frac{x}{\\sqrt{1-x^2}}\\,dx = \\int \\frac{1}{\\sqrt{w}} \\cdot \\left(-\\frac{1}{2}\\right)dw$\n\n" +
          "$= -\\frac{1}{2}\\int w^{-1/2}\\,dw$\n\n" +
          "$= -\\frac{1}{2} \\cdot 2w^{1/2} = -\\sqrt{w}$\n\n" +
          "$= -\\sqrt{1-x^2}$\n\n" +
          "**Step 4: Combine the results**\n\n" +
          "$\\int \\sin^{-1}x\\,dx = x\\sin^{-1}x - (-\\sqrt{1-x^2}) + C$\n\n" +
          "$= x\\sin^{-1}x + \\sqrt{1-x^2} + C$\n\n" +
          "**Answer: \\( x\\sin^{-1}x + \\sqrt{1-x^2} + C \\)**\n\n" +
          "**Key Concept:** For inverse trigonometric functions, we typically let \\(u\\) be the inverse trig function and \\(dv = dx\\). This transforms the problem into an algebraic integral that can be solved with substitution."
      },

      {
        id: "q94",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "Evaluate the integral \\( \\displaystyle\\int t^2\\sin(\\beta t)\\,dt \\) where \\( \\beta \\) is a constant.",
        
        options: [
          "A. \\( -\\frac{t^2}{\\beta}\\cos(\\beta t) + \\frac{2t}{\\beta^2}\\sin(\\beta t) + \\frac{2}{\\beta^3}\\cos(\\beta t) + C \\)",
          "B. \\( -\\frac{t^2}{\\beta}\\sin(\\beta t) + \\frac{2t}{\\beta^2}\\cos(\\beta t) + \\frac{2}{\\beta^3}\\sin(\\beta t) + C \\)",
          "C. \\( \\frac{t^2}{\\beta}\\cos(\\beta t) + \\frac{2t}{\\beta^2}\\sin(\\beta t) - \\frac{2}{\\beta^3}\\cos(\\beta t) + C \\)",
          "D. \\( -\\frac{t^2}{\\beta^2}\\cos(\\beta t) + \\frac{2t}{\\beta}\\sin(\\beta t) + \\frac{2}{\\beta^2}\\cos(\\beta t) + C \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "This integral requires **repeated integration by parts** (twice).\n\n" +
          "**First Integration by Parts:**\n\n" +
          "Let \\( u = t^2 \\) and \\( dv = \\sin(\\beta t)\\,dt \\)\n\n" +
          "Then:\n" +
          "- \\( du = 2t\\,dt \\)\n" +
          "- \\( v = -\\frac{1}{\\beta}\\cos(\\beta t) \\)\n\n" +
          "$\\int t^2\\sin(\\beta t)\\,dt = t^2 \\cdot \\left(-\\frac{1}{\\beta}\\cos(\\beta t)\\right) - \\int \\left(-\\frac{1}{\\beta}\\cos(\\beta t)\\right)(2t)\\,dt$\n\n" +
          "$= -\\frac{t^2}{\\beta}\\cos(\\beta t) + \\frac{2}{\\beta}\\int t\\cos(\\beta t)\\,dt$\n\n" +
          "**Second Integration by Parts** (for \\(\\int t\\cos(\\beta t)\\,dt\\)):\n\n" +
          "Let \\( u = t \\) and \\( dv = \\cos(\\beta t)\\,dt \\)\n\n" +
          "Then:\n" +
          "- \\( du = dt \\)\n" +
          "- \\( v = \\frac{1}{\\beta}\\sin(\\beta t) \\)\n\n" +
          "$\\int t\\cos(\\beta t)\\,dt = t \\cdot \\frac{1}{\\beta}\\sin(\\beta t) - \\int \\frac{1}{\\beta}\\sin(\\beta t)\\,dt$\n\n" +
          "$= \\frac{t}{\\beta}\\sin(\\beta t) - \\frac{1}{\\beta}\\left(-\\frac{1}{\\beta}\\cos(\\beta t)\\right)$\n\n" +
          "$= \\frac{t}{\\beta}\\sin(\\beta t) + \\frac{1}{\\beta^2}\\cos(\\beta t)$\n\n" +
          "**Combine both results:**\n\n" +
          "$\\int t^2\\sin(\\beta t)\\,dt = -\\frac{t^2}{\\beta}\\cos(\\beta t) + \\frac{2}{\\beta}\\left[\\frac{t}{\\beta}\\sin(\\beta t) + \\frac{1}{\\beta^2}\\cos(\\beta t)\\right] + C$\n\n" +
          "$= -\\frac{t^2}{\\beta}\\cos(\\beta t) + \\frac{2t}{\\beta^2}\\sin(\\beta t) + \\frac{2}{\\beta^3}\\cos(\\beta t) + C$\n\n" +
          "**Answer: \\( -\\frac{t^2}{\\beta}\\cos(\\beta t) + \\frac{2t}{\\beta^2}\\sin(\\beta t) + \\frac{2}{\\beta^3}\\cos(\\beta t) + C \\)**\n\n" +
          "**Key Concept:** When integrating products of polynomials with trig/exponential functions, we may need to apply integration by parts multiple times. Each application reduces the degree of the polynomial by 1."
      },

      {
        id: "q95",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "Evaluate the integral \\( \\displaystyle\\int e^{2\\theta}\\sin(3\\theta)\\,d\\theta \\) using the \"looping\" method.",
        
        options: [
          "A. \\( \\frac{e^{2\\theta}}{13}\\left[2\\sin(3\\theta) - 3\\cos(3\\theta)\\right] + C \\)",
          "B. \\( \\frac{e^{2\\theta}}{13}\\left[3\\sin(3\\theta) - 2\\cos(3\\theta)\\right] + C \\)",
          "C. \\( \\frac{e^{2\\theta}}{13}\\left[2\\sin(3\\theta) + 3\\cos(3\\theta)\\right] + C \\)",
          "D. \\( \\frac{e^{2\\theta}}{5}\\left[2\\sin(3\\theta) - 3\\cos(3\\theta)\\right] + C \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "The \"looping\" method is used when integration by parts brings us back to the original integral.\n\n" +
          "Let \\( I = \\displaystyle\\int e^{2\\theta}\\sin(3\\theta)\\,d\\theta \\)\n\n" +
          "**First Integration by Parts:**\n\n" +
          "- \\( u = e^{2\\theta} \\), \\( dv = \\sin(3\\theta)\\,d\\theta \\)\n" +
          "- \\( du = 2e^{2\\theta}\\,d\\theta \\), \\( v = -\\frac{1}{3}\\cos(3\\theta) \\)\n\n" +
          "$I = e^{2\\theta}\\left(-\\frac{1}{3}\\cos(3\\theta)\\right) - \\int \\left(-\\frac{1}{3}\\cos(3\\theta)\\right)(2e^{2\\theta})\\,d\\theta$\n\n" +
          "$I = -\\frac{1}{3}e^{2\\theta}\\cos(3\\theta) + \\frac{2}{3}\\int e^{2\\theta}\\cos(3\\theta)\\,d\\theta$\n\n" +
          "**Second Integration by Parts** (on the new integral):\n\n" +
          "- \\( u = e^{2\\theta} \\), \\( dv = \\cos(3\\theta)\\,d\\theta \\)\n" +
          "- \\( du = 2e^{2\\theta}\\,d\\theta \\), \\( v = \\frac{1}{3}\\sin(3\\theta) \\)\n\n" +
          "$\\int e^{2\\theta}\\cos(3\\theta)\\,d\\theta = e^{2\\theta}\\left(\\frac{1}{3}\\sin(3\\theta)\\right) - \\int \\frac{1}{3}\\sin(3\\theta)(2e^{2\\theta})\\,d\\theta$\n\n" +
          "$= \\frac{1}{3}e^{2\\theta}\\sin(3\\theta) - \\frac{2}{3}\\int e^{2\\theta}\\sin(3\\theta)\\,d\\theta$\n\n" +
          "$= \\frac{1}{3}e^{2\\theta}\\sin(3\\theta) - \\frac{2}{3}I$\n\n" +
          "**Substitute back into the first equation:**\n\n" +
          "$I = -\\frac{1}{3}e^{2\\theta}\\cos(3\\theta) + \\frac{2}{3}\\left[\\frac{1}{3}e^{2\\theta}\\sin(3\\theta) - \\frac{2}{3}I\\right]$\n\n" +
          "$I = -\\frac{1}{3}e^{2\\theta}\\cos(3\\theta) + \\frac{2}{9}e^{2\\theta}\\sin(3\\theta) - \\frac{4}{9}I$\n\n" +
          "**Solve for \\(I\\):**\n\n" +
          "$I + \\frac{4}{9}I = \\frac{13}{9}I = -\\frac{1}{3}e^{2\\theta}\\cos(3\\theta) + \\frac{2}{9}e^{2\\theta}\\sin(3\\theta)$\n\n" +
          "$I = \\frac{9}{13}\\left[-\\frac{1}{3}e^{2\\theta}\\cos(3\\theta) + \\frac{2}{9}e^{2\\theta}\\sin(3\\theta)\\right] + C$\n\n" +
          "$I = -\\frac{3}{13}e^{2\\theta}\\cos(3\\theta) + \\frac{2}{13}e^{2\\theta}\\sin(3\\theta) + C$\n\n" +
          "**Answer: \\( \\frac{e^{2\\theta}}{13}\\left[2\\sin(3\\theta) - 3\\cos(3\\theta)\\right] + C \\)**\n\n" +
          "**Key Concept:** When integrating products of exponentials and trig functions, the integral \"loops back\" to itself. We collect all terms with the original integral on one side and solve algebraically."
      },

      {
        id: "q96",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Evaluate \\( \\displaystyle\\int e^{\\sqrt{x}}\\,dx \\) by first making a substitution and then using integration by parts.",
        
        correctAnswers: [
          "2√x*e^(√x) - 2e^(√x) + C",
          "2e^(√x)(√x - 1) + C",
          "2e^(√x)√x - 2e^(√x) + C",
          "2√(x)e^(√x) - 2e^(√x) + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Make a substitution**\n\n" +
          "Let \\( w = \\sqrt{x} \\)\n\n" +
          "Then:\n" +
          "- \\( w^2 = x \\)\n" +
          "- \\( 2w\\,dw = dx \\)\n\n" +
          "Substituting:\n\n" +
          "$\\int e^{\\sqrt{x}}\\,dx = \\int e^w \\cdot 2w\\,dw = 2\\int we^w\\,dw$\n\n" +
          "**Step 2: Use integration by parts on \\(\\int we^w\\,dw\\)**\n\n" +
          "- \\( u = w \\), \\( dv = e^w\\,dw \\)\n" +
          "- \\( du = dw \\), \\( v = e^w \\)\n\n" +
          "$\\int we^w\\,dw = we^w - \\int e^w\\,dw$\n\n" +
          "$= we^w - e^w + C$\n\n" +
          "**Step 3: Multiply by 2 and substitute back**\n\n" +
          "$2\\int we^w\\,dw = 2(we^w - e^w) + C$\n\n" +
          "$= 2we^w - 2e^w + C$\n\n" +
          "Substitute \\( w = \\sqrt{x} \\) back:\n\n" +
          "$= 2\\sqrt{x}\\,e^{\\sqrt{x}} - 2e^{\\sqrt{x}} + C$\n\n" +
          "**Can be factored as:**\n\n" +
          "$= 2e^{\\sqrt{x}}(\\sqrt{x} - 1) + C$\n\n" +
          "**Answer: \\( 2\\sqrt{x}\\,e^{\\sqrt{x}} - 2e^{\\sqrt{x}} + C \\)**\n\n" +
          "**Key Concept:** Sometimes an integral requires **both substitution and integration by parts**. The substitution simplifies the form, making integration by parts applicable. Always look for ways to simplify before applying integration techniques."
      },

      {
        id: "q97",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Evaluate the definite integral \\( \\displaystyle\\int_{0}^{1/2} \\theta\\sin(3\\pi\\theta)\\,d\\theta \\).",
        
        correctAnswers: [
          "-1/(9π^2)",
          "-1/(9pi^2)",
          "-1/(9π²)",
          "-0.01126",
          "≈-0.011"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Find the antiderivative using integration by parts**\n\n" +
          "- \\( u = \\theta \\), \\( dv = \\sin(3\\pi\\theta)\\,d\\theta \\)\n" +
          "- \\( du = d\\theta \\), \\( v = -\\frac{1}{3\\pi}\\cos(3\\pi\\theta) \\)\n\n" +
          "$\\int \\theta\\sin(3\\pi\\theta)\\,d\\theta = \\theta\\left(-\\frac{1}{3\\pi}\\cos(3\\pi\\theta)\\right) - \\int \\left(-\\frac{1}{3\\pi}\\cos(3\\pi\\theta)\\right)d\\theta$\n\n" +
          "$= -\\frac{\\theta}{3\\pi}\\cos(3\\pi\\theta) + \\frac{1}{3\\pi}\\int \\cos(3\\pi\\theta)\\,d\\theta$\n\n" +
          "$= -\\frac{\\theta}{3\\pi}\\cos(3\\pi\\theta) + \\frac{1}{3\\pi} \\cdot \\frac{1}{3\\pi}\\sin(3\\pi\\theta)$\n\n" +
          "$= -\\frac{\\theta}{3\\pi}\\cos(3\\pi\\theta) + \\frac{1}{9\\pi^2}\\sin(3\\pi\\theta)$\n\n" +
          "**Step 2: Evaluate using the Fundamental Theorem of Calculus**\n\n" +
          "$\\left[-\\frac{\\theta}{3\\pi}\\cos(3\\pi\\theta) + \\frac{1}{9\\pi^2}\\sin(3\\pi\\theta)\\right]_{0}^{1/2}$\n\n" +
          "**At \\(\\theta = 1/2\\):**\n\n" +
          "$-\\frac{1/2}{3\\pi}\\cos\\left(\\frac{3\\pi}{2}\\right) + \\frac{1}{9\\pi^2}\\sin\\left(\\frac{3\\pi}{2}\\right)$\n\n" +
          "Note: \\( \\cos(3\\pi/2) = 0 \\) and \\( \\sin(3\\pi/2) = -1 \\)\n\n" +
          "$= -\\frac{1}{6\\pi}(0) + \\frac{1}{9\\pi^2}(-1) = -\\frac{1}{9\\pi^2}$\n\n" +
          "**At \\(\\theta = 0\\):**\n\n" +
          "$-\\frac{0}{3\\pi}\\cos(0) + \\frac{1}{9\\pi^2}\\sin(0) = 0 + 0 = 0$\n\n" +
          "**Step 3: Subtract**\n\n" +
          "$-\\frac{1}{9\\pi^2} - 0 = -\\frac{1}{9\\pi^2}$\n\n" +
          "**Answer: \\( -\\frac{1}{9\\pi^2} \\approx -0.0113 \\)**\n\n" +
          "**Key Concept:** For definite integrals with integration by parts, find the antiderivative first, then apply the Fundamental Theorem. Remember key trig values: \\(\\cos(3\\pi/2) = 0\\), \\(\\sin(3\\pi/2) = -1\\)."
      },

      {
        id: "q98",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Use the trigonometric identity to show that \\( \\displaystyle\\int \\sin^2 x\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C \\).",
        
        correctAnswers: [
          "x/2 - sin(2x)/4 + C",
          "x/2 - (sin(2x))/4 + C",
          "0.5x - 0.25sin(2x) + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Use the power-reducing identity**\n\n" +
          "The power-reducing identity for sine is:\n\n" +
          "$\\sin^2 x = \\frac{1 - \\cos(2x)}{2}$\n\n" +
          "**Step 2: Substitute into the integral**\n\n" +
          "$\\int \\sin^2 x\\,dx = \\int \\frac{1 - \\cos(2x)}{2}\\,dx$\n\n" +
          "**Step 3: Split the integral**\n\n" +
          "$= \\frac{1}{2}\\int 1\\,dx - \\frac{1}{2}\\int \\cos(2x)\\,dx$\n\n" +
          "**Step 4: Integrate each term**\n\n" +
          "$\\frac{1}{2}\\int 1\\,dx = \\frac{x}{2}$\n\n" +
          "For the second term:\n\n" +
          "$\\int \\cos(2x)\\,dx = \\frac{\\sin(2x)}{2}$\n\n" +
          "So:\n\n" +
          "$-\\frac{1}{2} \\cdot \\frac{\\sin(2x)}{2} = -\\frac{\\sin(2x)}{4}$\n\n" +
          "**Step 5: Combine**\n\n" +
          "$\\int \\sin^2 x\\,dx = \\frac{x}{2} - \\frac{\\sin(2x)}{4} + C$\n\n" +
          "**Answer: \\( \\frac{x}{2} - \\frac{\\sin(2x)}{4} + C \\) ✓**\n\n" +
          "**Key Concept - Power-Reducing Identities:**\n\n" +
          "These identities are essential for integrating even powers of trig functions:\n" +
          "- \\( \\sin^2 x = \\frac{1 - \\cos(2x)}{2} \\)\n" +
          "- \\( \\cos^2 x = \\frac{1 + \\cos(2x)}{2} \\)\n\n" +
          "They convert powers into linear combinations of trig functions, which are easier to integrate."
      },

      {
        id: "q99",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "**Question 98 continued:** Using the reduction formula and the result from Question 98, evaluate \\( \\displaystyle\\int \\sin^4 x\\,dx \\).",
        
        options: [
          "A. \\( -\\frac{1}{4}\\cos x\\sin^3 x + \\frac{3x}{8} - \\frac{3\\sin 2x}{16} + C \\)",
          "B. \\( -\\frac{1}{4}\\cos x\\sin^3 x + \\frac{3x}{8} + \\frac{3\\sin 2x}{16} + C \\)",
          "C. \\( \\frac{1}{4}\\cos x\\sin^3 x + \\frac{3x}{8} - \\frac{3\\sin 2x}{16} + C \\)",
          "D. \\( -\\frac{1}{4}\\cos x\\sin^3 x + \\frac{x}{2} - \\frac{3\\sin 2x}{16} + C \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "**The Reduction Formula for \\(\\sin^n x\\):**\n\n" +
          "$\\int \\sin^n x\\,dx = -\\frac{1}{n}\\cos x\\sin^{n-1}x + \\frac{n-1}{n}\\int \\sin^{n-2}x\\,dx$\n\n" +
          "From Question 98, we have:\n\n" +
          "$\\int \\sin^2 x\\,dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$\n\n" +
          "**Step 1: Apply the reduction formula for \\(n = 4\\)**\n\n" +
          "$\\int \\sin^4 x\\,dx = -\\frac{1}{4}\\cos x\\sin^{4-1}x + \\frac{4-1}{4}\\int \\sin^{4-2}x\\,dx$\n\n" +
          "$= -\\frac{1}{4}\\cos x\\sin^3 x + \\frac{3}{4}\\int \\sin^2 x\\,dx$\n\n" +
          "**Step 2: Substitute the result from Question 98**\n\n" +
          "$= -\\frac{1}{4}\\cos x\\sin^3 x + \\frac{3}{4}\\left(\\frac{x}{2} - \\frac{\\sin 2x}{4}\\right) + C$\n\n" +
          "**Step 3: Simplify**\n\n" +
          "$= -\\frac{1}{4}\\cos x\\sin^3 x + \\frac{3x}{8} - \\frac{3\\sin 2x}{16} + C$\n\n" +
          "**Answer: \\( -\\frac{1}{4}\\cos x\\sin^3 x + \\frac{3x}{8} - \\frac{3\\sin 2x}{16} + C \\)**\n\n" +
          "**Key Concept - Reduction Formulas:**\n\n" +
          "Reduction formulas recursively express \\(\\int \\sin^n x\\,dx\\) in terms of \\(\\int \\sin^{n-2}x\\,dx\\). This allows us to:\n" +
          "1. Reduce higher powers step-by-step\n" +
          "2. Eventually reach \\(\\sin^2 x\\) or \\(\\sin x\\), which we can integrate directly\n" +
          "3. Build complex integrals from simpler ones\n\n" +
          "The formula comes from integration by parts with \\(u = \\sin^{n-1}x\\) and \\(dv = \\sin x\\,dx\\)."
      },

      {
        id: "q100",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Calculate the average value of \\( f(x) = x\\sec^2 x \\) on the interval \\( \\left[0, \\frac{\\pi}{4}\\right] \\).",
        
        correctAnswers: [
          "1 - 2ln(2)/π",
          "1 - 2ln(2)/pi",
          "1 - (2ln(2))/π",
          "1 - (2ln(2))/pi",
          "0.5586",
          "≈0.56"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.02,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Set up the average value formula**\n\n" +
          "$f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx = \\frac{1}{\\pi/4 - 0}\\int_0^{\\pi/4} x\\sec^2 x\\,dx$\n\n" +
          "$= \\frac{4}{\\pi}\\int_0^{\\pi/4} x\\sec^2 x\\,dx$\n\n" +
          "**Step 2: Integrate by parts**\n\n" +
          "For \\( \\int x\\sec^2 x\\,dx \\):\n\n" +
          "- \\( u = x \\), \\( dv = \\sec^2 x\\,dx \\)\n" +
          "- \\( du = dx \\), \\( v = \\tan x \\)\n\n" +
          "$\\int x\\sec^2 x\\,dx = x\\tan x - \\int \\tan x\\,dx$\n\n" +
          "Recall: \\( \\int \\tan x\\,dx = \\ln|\\sec x| + C \\) (or \\( -\\ln|\\cos x| + C \\))\n\n" +
          "$= x\\tan x - \\ln|\\sec x| + C$\n\n" +
          "**Step 3: Evaluate the definite integral**\n\n" +
          "$\\left[x\\tan x - \\ln|\\sec x|\\right]_0^{\\pi/4}$\n\n" +
          "**At \\( x = \\pi/4 \\):**\n\n" +
          "$\\frac{\\pi}{4}\\tan\\left(\\frac{\\pi}{4}\\right) - \\ln\\left|\\sec\\left(\\frac{\\pi}{4}\\right)\\right|$\n\n" +
          "Note: \\( \\tan(\\pi/4) = 1 \\) and \\( \\sec(\\pi/4) = \\sqrt{2} \\)\n\n" +
          "$= \\frac{\\pi}{4}(1) - \\ln(\\sqrt{2})$\n\n" +
          "$= \\frac{\\pi}{4} - \\ln(2^{1/2})$\n\n" +
          "$= \\frac{\\pi}{4} - \\frac{1}{2}\\ln(2)$\n\n" +
          "**At \\( x = 0 \\):**\n\n" +
          "$0 \\cdot \\tan(0) - \\ln|\\sec(0)| = 0 - \\ln(1) = 0$\n\n" +
          "**Step 4: Calculate the average value**\n\n" +
          "$f_{\\text{avg}} = \\frac{4}{\\pi}\\left[\\frac{\\pi}{4} - \\frac{1}{2}\\ln(2) - 0\\right]$\n\n" +
          "$= \\frac{4}{\\pi}\\left[\\frac{\\pi}{4} - \\frac{\\ln(2)}{2}\\right]$\n\n" +
          "$= 1 - \\frac{2\\ln(2)}{\\pi}$\n\n" +
          "**Numerical value:** \\( 1 - \\frac{2\\ln(2)}{\\pi} \\approx 1 - 0.4413 \\approx 0.5587 \\)\n\n" +
          "**Answer: \\( 1 - \\frac{2\\ln(2)}{\\pi} \\approx 0.559 \\)**\n\n" +
          "**Key Concept:** This problem combines integration by parts with the average value formula. Remember that \\(\\sec^2 x\\) is the derivative of \\(\\tan x\\), making it a natural choice for \\(dv\\)."
      },

      {
        id: "q101",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Suppose \\( f(1) = 2 \\), \\( f(4) = 7 \\), \\( f'(1) = 5 \\), \\( f'(4) = 3 \\), and \\( f'' \\) is continuous. Find the value of \\( \\displaystyle\\int_1^4 xf''(x)\\,dx \\).",
        
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
        
        explanation: "**Step 1: Use integration by parts**\n\n" +
          "For \\( \\displaystyle\\int_1^4 xf''(x)\\,dx \\):\n\n" +
          "- Let \\( u = x \\) and \\( dv = f''(x)\\,dx \\)\n" +
          "- Then \\( du = dx \\) and \\( v = f'(x) \\)\n\n" +
          "Using the formula \\( \\displaystyle\\int_a^b u\\,dv = [uv]_a^b - \\int_a^b v\\,du \\):\n\n" +
          "$\\int_1^4 xf''(x)\\,dx = \\left[xf'(x)\\right]_1^4 - \\int_1^4 f'(x)\\,dx$\n\n" +
          "**Step 2: Evaluate \\( \\left[xf'(x)\\right]_1^4 \\)**\n\n" +
          "$\\left[xf'(x)\\right]_1^4 = 4f'(4) - 1f'(1)$\n\n" +
          "Given \\( f'(4) = 3 \\) and \\( f'(1) = 5 \\):\n\n" +
          "$= 4(3) - 1(5) = 12 - 5 = 7$\n\n" +
          "**Step 3: Evaluate \\( \\displaystyle\\int_1^4 f'(x)\\,dx \\) using the Fundamental Theorem**\n\n" +
          "By the Fundamental Theorem of Calculus:\n\n" +
          "$\\int_1^4 f'(x)\\,dx = f(4) - f(1)$\n\n" +
          "Given \\( f(4) = 7 \\) and \\( f(1) = 2 \\):\n\n" +
          "$= 7 - 2 = 5$\n\n" +
          "**Step 4: Combine the results**\n\n" +
          "$\\int_1^4 xf''(x)\\,dx = 7 - 5 = 2$\n\n" +
          "**Answer: 2**\n\n" +
          "**Key Concept - Theoretical Integration by Parts:**\n\n" +
          "This problem demonstrates that integration by parts works even when we don't have explicit formulas. Key insights:\n\n" +
          "1. **Integration by parts** converts \\( \\int xf''(x)\\,dx \\) into boundary terms and \\( \\int f'(x)\\,dx \\)\n" +
          "2. **Fundamental Theorem** tells us \\( \\int f'(x)\\,dx = f(b) - f(a) \\)\n" +
          "3. We only need **function values at endpoints**, not the explicit form of \\( f \\)\n\n" +
          "This technique is powerful for working with abstract functions given only their values and derivatives at specific points."
      },

      {
        id: "q102",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "In the proof of the reduction formula for \\( \\displaystyle\\int \\sin^n x\\,dx \\), what trigonometric identity is used to rewrite the integral \\( (n-1)\\displaystyle\\int \\sin^{n-2}x\\cos^2 x\\,dx \\)?",
        
        options: [
          "A. \\( \\cos^2 x = 1 - \\sin^2 x \\)",
          "B. \\( \\sin^2 x = 1 - \\cos^2 x \\)",
          "C. \\( \\sin(2x) = 2\\sin x\\cos x \\)",
          "D. \\( \\cos(2x) = \\cos^2 x - \\sin^2 x \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "**Understanding the Reduction Formula Proof**\n\n" +
          "The reduction formula for \\( \\displaystyle\\int \\sin^n x\\,dx \\) is derived using integration by parts. During the proof, we encounter:\n\n" +
          "$(n-1)\\int \\sin^{n-2}x\\cos^2 x\\,dx$\n\n" +
          "**Step 1: Apply the Pythagorean identity**\n\n" +
          "We use the identity:\n\n" +
          "$\\cos^2 x = 1 - \\sin^2 x$\n\n" +
          "**Step 2: Transform the integral**\n\n" +
          "$(n-1)\\int \\sin^{n-2}x(1 - \\sin^2 x)\\,dx$\n\n" +
          "$= (n-1)\\int \\sin^{n-2}x\\,dx - (n-1)\\int \\sin^n x\\,dx$\n\n" +
          "**Why this step is crucial:**\n\n" +
          "This transformation **reintroduces the original integral** \\( \\displaystyle\\int \\sin^n x\\,dx \\) on the right side with a coefficient \\( -(n-1) \\).\n\n" +
          "**Step 3: Algebraic manipulation**\n\n" +
          "We can now move this term to the left side:\n\n" +
          "$\\int \\sin^n x\\,dx + (n-1)\\int \\sin^n x\\,dx = \\text{[other terms]}$\n\n" +
          "$n\\int \\sin^n x\\,dx = \\text{[other terms]}$\n\n" +
          "Dividing by \\( n \\) gives us the reduction formula:\n\n" +
          "$\\int \\sin^n x\\,dx = -\\frac{1}{n}\\cos x\\sin^{n-1}x + \\frac{n-1}{n}\\int \\sin^{n-2}x\\,dx$\n\n" +
          "**Answer: A. \\( \\cos^2 x = 1 - \\sin^2 x \\)**\n\n" +
          "**Why other options are incorrect:**\n\n" +
          "- **Option B**: While true, we need to eliminate \\(\\cos^2 x\\), not \\(\\sin^2 x\\)\n" +
          "- **Option C**: This double-angle identity isn't used in this part of the proof\n" +
          "- **Option D**: Another double-angle identity, not applicable here\n\n" +
          "**Key Concept:** The Pythagorean identity \\( \\cos^2 x = 1 - \\sin^2 x \\) is essential for deriving reduction formulas because it allows us to express everything in terms of powers of sine, creating an equation we can solve for the original integral."
      },
      {
        id: "q103",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "Write out the form of the partial fraction decomposition for the function \\( f(x) = \\frac{x^5+1}{(x^2-x)(x^4+2x^2+1)} \\). Do not determine the numerical values of the coefficients.",
        
        options: [
          "A. \\( \\frac{A}{x} + \\frac{B}{x-1} + \\frac{Cx+D}{x^2+1} + \\frac{Ex+F}{(x^2+1)^2} \\)",
          "B. \\( \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x^2+1} + \\frac{D}{(x^2+1)^2} \\)",
          "C. \\( \\frac{Ax+B}{x^2-x} + \\frac{Cx+D}{x^2+1} + \\frac{Ex+F}{(x^2+1)^2} \\)",
          "D. \\( \\frac{A}{x} + \\frac{B}{x-1} + \\frac{Cx+D}{x^2+1} \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "**Step 1: Factor the denominator completely**\n\n" +
          "$x^2 - x = x(x-1)$\n\n" +
          "$x^4 + 2x^2 + 1 = (x^2)^2 + 2(x^2)(1) + 1^2 = (x^2+1)^2$\n\n" +
          "The complete factorization is:\n\n" +
          "$x(x-1)(x^2+1)^2$\n\n" +
          "**Step 2: Identify each type of factor**\n\n" +
          "1. **\\(x\\)**: Distinct linear factor → \\( \\frac{A}{x} \\)\n\n" +
          "2. **\\(x-1\\)**: Distinct linear factor → \\( \\frac{B}{x-1} \\)\n\n" +
          "3. **\\((x^2+1)^2\\)**: Irreducible quadratic factor with multiplicity 2\n\n" +
          "**Step 3: Set up terms for the repeated quadratic factor**\n\n" +
          "For an irreducible quadratic \\((x^2+1)\\) repeated twice, we need:\n\n" +
          "- \\( \\frac{Cx+D}{x^2+1} \\) (for the first power)\n" +
          "- \\( \\frac{Ex+F}{(x^2+1)^2} \\) (for the second power)\n\n" +
          "**Note:** Each irreducible quadratic term requires a **linear numerator** (\\(Cx+D\\), not just \\(C\\)).\n\n" +
          "**Step 4: Combine all terms**\n\n" +
          "$\\frac{x^5+1}{x(x-1)(x^2+1)^2} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{Cx+D}{x^2+1} + \\frac{Ex+F}{(x^2+1)^2}$\n\n" +
          "**Answer: A**\n\n" +
          "**Key Concept - Partial Fraction Rules:**\n\n" +
          "1. **Distinct linear factor** \\((ax+b)\\): Use \\( \\frac{A}{ax+b} \\)\n" +
          "2. **Repeated linear factor** \\((ax+b)^n\\): Use \\( \\frac{A_1}{ax+b} + \\frac{A_2}{(ax+b)^2} + \\cdots + \\frac{A_n}{(ax+b)^n} \\)\n" +
          "3. **Distinct irreducible quadratic** \\((ax^2+bx+c)\\): Use \\( \\frac{Ax+B}{ax^2+bx+c} \\)\n" +
          "4. **Repeated irreducible quadratic** \\((ax^2+bx+c)^n\\): Use \\( \\frac{A_1x+B_1}{ax^2+bx+c} + \\frac{A_2x+B_2}{(ax^2+bx+c)^2} + \\cdots \\)"
      },

      {
        id: "q104",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Write out the form of the partial fraction decomposition for the function \\( f(x) = \\frac{x^2}{x^2+x-6} \\). Do not determine the numerical values of the coefficients.",
        
        correctAnswers: [
          "1 + A/(x+3) + B/(x-2)",
          "1 + A/(x+3) + B/(x-2)",
          "1+A/(x+3)+B/(x-2)"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Check if the fraction is proper or improper**\n\n" +
          "The degree of the numerator (2) equals the degree of the denominator (2), so this is an **improper fraction**.\n\n" +
          "**Step 2: Perform polynomial long division**\n\n" +
          "$\\frac{x^2}{x^2+x-6}$\n\n" +
          "Dividing \\(x^2\\) by \\(x^2+x-6\\):\n\n" +
          "$x^2 \\div (x^2+x-6) = 1 \\text{ with remainder } -x+6$\n\n" +
          "Therefore:\n\n" +
          "$\\frac{x^2}{x^2+x-6} = 1 + \\frac{-x+6}{x^2+x-6}$\n\n" +
          "**Step 3: Factor the denominator of the remainder**\n\n" +
          "$x^2+x-6 = (x+3)(x-2)$\n\n" +
          "**Step 4: Set up partial fractions for the proper fraction**\n\n" +
          "$\\frac{-x+6}{(x+3)(x-2)} = \\frac{A}{x+3} + \\frac{B}{x-2}$\n\n" +
          "**Step 5: Write the complete decomposition**\n\n" +
          "$f(x) = 1 + \\frac{A}{x+3} + \\frac{B}{x-2}$\n\n" +
          "**Answer: \\( 1 + \\frac{A}{x+3} + \\frac{B}{x-2} \\)**\n\n" +
          "**Key Concept - Improper Fractions:**\n\n" +
          "When the degree of the numerator ≥ degree of the denominator:\n" +
          "1. First perform polynomial long division\n" +
          "2. Get: (polynomial) + (proper fraction)\n" +
          "3. Then apply partial fraction decomposition only to the proper fraction part\n\n" +
          "**Rule of thumb:** Always check degrees first! If improper, divide before decomposing."
      },

      {
        id: "q105",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "Evaluate the integral \\( \\displaystyle\\int \\frac{5x+1}{(2x+1)(x-1)}\\,dx \\).",
        
        options: [
          "A. \\( \\frac{1}{2}\\ln|2x+1| + 2\\ln|x-1| + C \\)",
          "B. \\( \\ln|2x+1| + 2\\ln|x-1| + C \\)",
          "C. \\( \\frac{1}{2}\\ln|2x+1| + \\ln|x-1| + C \\)",
          "D. \\( 2\\ln|2x+1| + \\frac{1}{2}\\ln|x-1| + C \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "**Step 1: Set up the partial fraction decomposition**\n\n" +
          "$\\frac{5x+1}{(2x+1)(x-1)} = \\frac{A}{2x+1} + \\frac{B}{x-1}$\n\n" +
          "Multiply both sides by \\((2x+1)(x-1)\\):\n\n" +
          "$5x+1 = A(x-1) + B(2x+1)$\n\n" +
          "**Step 2: Solve for coefficients using strategic values**\n\n" +
          "**Let \\(x = 1\\):**\n\n" +
          "$5(1)+1 = A(0) + B(2(1)+1)$\n\n" +
          "$6 = 3B$\n\n" +
          "$B = 2$\n\n" +
          "**Let \\(x = -\\frac{1}{2}\\):**\n\n" +
          "$5\\left(-\\frac{1}{2}\\right)+1 = A\\left(-\\frac{1}{2}-1\\right) + B(0)$\n\n" +
          "$-\\frac{5}{2}+1 = A\\left(-\\frac{3}{2}\\right)$\n\n" +
          "$-\\frac{3}{2} = -\\frac{3}{2}A$\n\n" +
          "$A = 1$\n\n" +
          "**Step 3: Rewrite the integral**\n\n" +
          "$\\int \\left(\\frac{1}{2x+1} + \\frac{2}{x-1}\\right)dx$\n\n" +
          "**Step 4: Integrate each term**\n\n" +
          "$\\int \\frac{1}{2x+1}\\,dx = \\frac{1}{2}\\ln|2x+1|$\n\n" +
          "(Use substitution \\(u = 2x+1\\), \\(du = 2\\,dx\\))\n\n" +
          "$\\int \\frac{2}{x-1}\\,dx = 2\\ln|x-1|$\n\n" +
          "**Step 5: Combine**\n\n" +
          "$= \\frac{1}{2}\\ln|2x+1| + 2\\ln|x-1| + C$\n\n" +
          "**Answer: A**\n\n" +
          "**Key Concept - Cover-Up Method:**\n\n" +
          "To find coefficients quickly:\n" +
          "1. Set \\(x\\) equal to values that make denominators zero (one at a time)\n" +
          "2. This eliminates all other terms, leaving just one coefficient\n" +
          "3. Solve directly for that coefficient\n\n" +
          "This is faster than expanding and comparing coefficients!"
      },

      {
        id: "q106",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Evaluate the integral \\( \\displaystyle\\int \\frac{3t-2}{t+1}\\,dt \\).",
        
        correctAnswers: [
          "3t - 5ln|t+1| + C",
          "3t - 5*ln|t+1| + C",
          "3t-5ln|t+1|+C",
          "3t - 5ln(t+1) + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Check if the fraction is proper**\n\n" +
          "The degree of the numerator (1) equals the degree of the denominator (1), so this is **improper**.\n\n" +
          "**Step 2: Perform polynomial long division**\n\n" +
          "$\\frac{3t-2}{t+1}$\n\n" +
          "Divide \\(3t\\) by \\(t\\): quotient is \\(3\\)\n\n" +
          "$3(t+1) = 3t + 3$\n\n" +
          "Subtract from numerator:\n\n" +
          "$(3t-2) - (3t+3) = -5$\n\n" +
          "Therefore:\n\n" +
          "$\\frac{3t-2}{t+1} = 3 - \\frac{5}{t+1}$\n\n" +
          "**Step 3: Integrate**\n\n" +
          "$\\int \\left(3 - \\frac{5}{t+1}\\right)dt$\n\n" +
          "$= \\int 3\\,dt - \\int \\frac{5}{t+1}\\,dt$\n\n" +
          "$= 3t - 5\\ln|t+1| + C$\n\n" +
          "**Answer: \\( 3t - 5\\ln|t+1| + C \\)**\n\n" +
          "**Key Concept - Quick Division for Linear Terms:**\n\n" +
          "For \\( \\frac{ax+b}{cx+d} \\), you can quickly perform division:\n\n" +
          "1. Divide leading coefficients: \\( \\frac{a}{c} \\) is the quotient\n" +
          "2. Multiply back and subtract to find remainder\n" +
          "3. Result: \\( \\frac{a}{c} + \\frac{\\text{remainder}}{cx+d} \\)\n\n" +
          "**Example verification:**\n" +
          "$3 - \\frac{5}{t+1} = \\frac{3(t+1) - 5}{t+1} = \\frac{3t+3-5}{t+1} = \\frac{3t-2}{t+1}$ ✓"
      },

      {
        id: "q107",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "Evaluate the integral \\( \\displaystyle\\int \\frac{10}{(x-1)(x^2+9)}\\,dx \\).",
        
        options: [
          "A. \\( \\ln|x-1| - \\frac{1}{2}\\ln(x^2+9) - \\frac{1}{3}\\tan^{-1}\\left(\\frac{x}{3}\\right) + C \\)",
          "B. \\( \\ln|x-1| + \\frac{1}{2}\\ln(x^2+9) + \\frac{1}{3}\\tan^{-1}\\left(\\frac{x}{3}\\right) + C \\)",
          "C. \\( \\ln|x-1| - \\frac{1}{2}\\ln(x^2+9) + \\frac{1}{3}\\tan^{-1}\\left(\\frac{x}{3}\\right) + C \\)",
          "D. \\( \\ln|x-1| + \\ln(x^2+9) - \\frac{1}{3}\\tan^{-1}\\left(\\frac{x}{3}\\right) + C \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "**Step 1: Set up partial fraction decomposition**\n\n" +
          "Since \\(x^2+9\\) is irreducible (no real roots), we use:\n\n" +
          "$\\frac{10}{(x-1)(x^2+9)} = \\frac{A}{x-1} + \\frac{Bx+C}{x^2+9}$\n\n" +
          "Multiply by \\((x-1)(x^2+9)\\):\n\n" +
          "$10 = A(x^2+9) + (Bx+C)(x-1)$\n\n" +
          "**Step 2: Solve for coefficients**\n\n" +
          "**Let \\(x = 1\\):**\n\n" +
          "$10 = A(1+9) + 0$\n\n" +
          "$10 = 10A \\implies A = 1$\n\n" +
          "**Expand and compare coefficients:**\n\n" +
          "$10 = Ax^2 + 9A + Bx^2 - Bx + Cx - C$\n\n" +
          "$10 = (A+B)x^2 + (C-B)x + (9A-C)$\n\n" +
          "With \\(A = 1\\):\n" +
          "- Coefficient of \\(x^2\\): \\(0 = 1+B \\implies B = -1\\)\n" +
          "- Constant term: \\(10 = 9-C \\implies C = -1\\)\n" +
          "- Check \\(x\\) term: \\(C-B = -1-(-1) = 0\\) ✓\n\n" +
          "**Step 3: Rewrite and integrate**\n\n" +
          "$\\int \\left(\\frac{1}{x-1} + \\frac{-x-1}{x^2+9}\\right)dx$\n\n" +
          "$= \\int \\frac{1}{x-1}\\,dx - \\int \\frac{x}{x^2+9}\\,dx - \\int \\frac{1}{x^2+9}\\,dx$\n\n" +
          "**First integral:**\n\n" +
          "$\\int \\frac{1}{x-1}\\,dx = \\ln|x-1|$\n\n" +
          "**Second integral** (use \\(u = x^2+9\\), \\(du = 2x\\,dx\\)):\n\n" +
          "$\\int \\frac{x}{x^2+9}\\,dx = \\frac{1}{2}\\ln(x^2+9)$\n\n" +
          "**Third integral** (use formula \\(\\int \\frac{1}{x^2+a^2}\\,dx = \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right)\\) with \\(a=3\\)):\n\n" +
          "$\\int \\frac{1}{x^2+9}\\,dx = \\frac{1}{3}\\tan^{-1}\\left(\\frac{x}{3}\\right)$\n\n" +
          "**Step 4: Combine**\n\n" +
          "$= \\ln|x-1| - \\frac{1}{2}\\ln(x^2+9) - \\frac{1}{3}\\tan^{-1}\\left(\\frac{x}{3}\\right) + C$\n\n" +
          "**Answer: A**\n\n" +
          "**Key Concept - Irreducible Quadratics:**\n\n" +
          "When you have \\(\\frac{Bx+C}{x^2+a^2}\\), split it:\n" +
          "- \\(\\frac{Bx}{x^2+a^2}\\): Use substitution (leads to logarithm)\n" +
          "- \\(\\frac{C}{x^2+a^2}\\): Use arctangent formula\n\n" +
          "**Important formula:** \\(\\displaystyle\\int \\frac{1}{x^2+a^2}\\,dx = \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) + C\\)"
      },

      {
        id: "q108",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Evaluate the integral \\( \\displaystyle\\int \\frac{e^{2x}}{e^{2x}+3e^x+2}\\,dx \\).",
        
        correctAnswers: [
          "-ln|e^x+1| + 2ln|e^x+2| + C",
          "-ln(e^x+1) + 2ln(e^x+2) + C",
          "2ln(e^x+2) - ln(e^x+1) + C",
          "ln[(e^x+2)^2/(e^x+1)] + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Make a substitution**\n\n" +
          "Let \\( u = e^x \\), then \\( du = e^x\\,dx \\), which means \\( dx = \\frac{du}{e^x} = \\frac{du}{u} \\)\n\n" +
          "Also: \\( e^{2x} = (e^x)^2 = u^2 \\)\n\n" +
          "The integral becomes:\n\n" +
          "$\\int \\frac{e^x \\cdot e^x\\,dx}{(e^x)^2 + 3e^x + 2} = \\int \\frac{u \\cdot du}{u^2 + 3u + 2}$\n\n" +
          "**Step 2: Factor and set up partial fractions**\n\n" +
          "$u^2 + 3u + 2 = (u+1)(u+2)$\n\n" +
          "$\\frac{u}{(u+1)(u+2)} = \\frac{A}{u+1} + \\frac{B}{u+2}$\n\n" +
          "$u = A(u+2) + B(u+1)$\n\n" +
          "**Let \\(u = -1\\):** \\(-1 = A(1) \\implies A = -1\\)\n\n" +
          "**Let \\(u = -2\\):** \\(-2 = B(-1) \\implies B = 2\\)\n\n" +
          "**Step 3: Integrate in terms of \\(u\\)**\n\n" +
          "$\\int \\left(\\frac{-1}{u+1} + \\frac{2}{u+2}\\right)du$\n\n" +
          "$= -\\ln|u+1| + 2\\ln|u+2| + C$\n\n" +
          "**Step 4: Substitute back \\(u = e^x\\)**\n\n" +
          "$= -\\ln|e^x+1| + 2\\ln|e^x+2| + C$\n\n" +
          "Since \\(e^x > 0\\) always, \\(e^x+1\\) and \\(e^x+2\\) are always positive, so we can drop absolute values:\n\n" +
          "$= -\\ln(e^x+1) + 2\\ln(e^x+2) + C$\n\n" +
          "**Alternative form using logarithm properties:**\n\n" +
          "$= \\ln\\left(\\frac{(e^x+2)^2}{e^x+1}\\right) + C$\n\n" +
          "**Answer: \\( -\\ln(e^x+1) + 2\\ln(e^x+2) + C \\)**\n\n" +
          "**Key Concept - Exponential Substitution:**\n\n" +
          "When you see expressions like \\(e^{2x} + ae^x + b\\), use \\(u = e^x\\):\n" +
          "1. Converts exponential to polynomial in \\(u\\)\n" +
          "2. Makes the problem algebraic/rational\n" +
          "3. Remember: \\(du = e^x\\,dx\\), so you need an \\(e^x\\) factor in the numerator\n\n" +
          "This technique also works for similar patterns like \\(\\sin^2 x + a\\sin x + b\\) with \\(u = \\sin x\\)."
      },

      {
        id: "q109",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Evaluate the integral \\( \\displaystyle\\int \\frac{\\sec^2 t}{\\tan^2 t + 3\\tan t + 2}\\,dt \\).",
        
        correctAnswers: [
          "ln|(tan(t)+1)/(tan(t)+2)| + C",
          "ln|tan(t)+1| - ln|tan(t)+2| + C",
          "ln|(tan t+1)/(tan t+2)| + C"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "**Step 1: Make a trigonometric substitution**\n\n" +
          "Let \\( u = \\tan t \\)\n\n" +
          "Then \\( du = \\sec^2 t\\,dt \\)\n\n" +
          "The integral becomes:\n\n" +
          "$\\int \\frac{du}{u^2 + 3u + 2}$\n\n" +
          "**Step 2: Factor the denominator**\n\n" +
          "$u^2 + 3u + 2 = (u+1)(u+2)$\n\n" +
          "**Step 3: Set up partial fractions**\n\n" +
          "$\\frac{1}{(u+1)(u+2)} = \\frac{A}{u+1} + \\frac{B}{u+2}$\n\n" +
          "$1 = A(u+2) + B(u+1)$\n\n" +
          "**Let \\(u = -1\\):** \\(1 = A(1) \\implies A = 1\\)\n\n" +
          "**Let \\(u = -2\\):** \\(1 = B(-1) \\implies B = -1\\)\n\n" +
          "**Step 4: Integrate in terms of \\(u\\)**\n\n" +
          "$\\int \\left(\\frac{1}{u+1} - \\frac{1}{u+2}\\right)du$\n\n" +
          "$= \\ln|u+1| - \\ln|u+2| + C$\n\n" +
          "Using logarithm properties:\n\n" +
          "$= \\ln\\left|\\frac{u+1}{u+2}\\right| + C$\n\n" +
          "**Step 5: Substitute back \\(u = \\tan t\\)**\n\n" +
          "$= \\ln\\left|\\frac{\\tan t + 1}{\\tan t + 2}\\right| + C$\n\n" +
          "**Answer: \\( \\ln\\left|\\frac{\\tan t + 1}{\\tan t + 2}\\right| + C \\)**\n\n" +
          "**Key Concept - Trigonometric Substitutions:**\n\n" +
          "When you see expressions involving trigonometric functions, look for substitutions:\n\n" +
          "| **If you see...** | **Try substitution** | **Because** |\n" +
          "|---|---|---|\n" +
          "| \\(\\sec^2 x\\) with \\(\\tan x\\) | \\(u = \\tan x\\) | \\(du = \\sec^2 x\\,dx\\) |\n" +
          "| \\(\\sin x\\) with \\(\\cos x\\) | \\(u = \\sin x\\) or \\(u = \\cos x\\) | Derivatives match |\n" +
          "| \\(\\sec x \\tan x\\) with \\(\\sec x\\) | \\(u = \\sec x\\) | \\(du = \\sec x \\tan x\\,dx\\) |\n\n" +
          "The key is recognizing when the derivative of one trig function appears with another."
      },

      {
        id: "q110",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "multiple-choice",
        text: "Evaluate the integral \\( \\displaystyle\\int\\frac{1}{\\sqrt{x}-\\sqrt[3]{x}}\\,dx \\) using the substitution \\( u=\\sqrt[6]{x} \\). Which of the following is the correct result?",
        
        options: [
          "A. \\( 2\\sqrt{x} + 3\\sqrt[3]{x} + 6\\sqrt[6]{x} + 6\\ln|\\sqrt[6]{x}-1| + C \\)",
          "B. \\( 2\\sqrt{x} - 3\\sqrt[3]{x} + 6\\sqrt[6]{x} + 6\\ln|\\sqrt[6]{x}-1| + C \\)",
          "C. \\( 2\\sqrt{x} + 3\\sqrt[3]{x} - 6\\sqrt[6]{x} + 6\\ln|\\sqrt[6]{x}-1| + C \\)",
          "D. \\( \\sqrt{x} + 3\\sqrt[3]{x} + 6\\sqrt[6]{x} + 6\\ln|\\sqrt[6]{x}-1| + C \\)"
        ],
        
        correctAnswers: ["A"],
        
        explanation: "This problem uses a **radical substitution** to eliminate fractional exponents and create a rational function.\n\n" +
          "### Step 1: Apply the substitution\n" +
          "Let \\( u = \\sqrt[6]{x} = x^{1/6} \\), then:\n" +
          "- \\( x = u^6 \\)\n" +
          "- \\( dx = 6u^5 \\, du \\)\n" +
          "- \\( \\sqrt{x} = (u^6)^{1/2} = u^3 \\)\n" +
          "- \\( \\sqrt[3]{x} = (u^6)^{1/3} = u^2 \\)\n\n" +
          "**Why this substitution?** The LCM of the indices (2 and 3) is 6, so \\( u = x^{1/6} \\) will eliminate both radicals.\n\n" +
          "### Step 2: Transform the integral\n" +
          "$$\\int \\frac{1}{\\sqrt{x}-\\sqrt[3]{x}}\\,dx = \\int \\frac{1}{u^3 - u^2} \\cdot 6u^5 \\, du$$\n\n" +
          "$$= \\int \\frac{6u^5}{u^2(u-1)} \\, du = \\int \\frac{6u^3}{u-1} \\, du$$\n\n" +
          "### Step 3: Polynomial long division\n" +
          "Since the degree of the numerator (3) is greater than the denominator (1), we use long division:\n\n" +
          "$$\\frac{6u^3}{u-1} = 6u^2 + 6u + 6 + \\frac{6}{u-1}$$\n\n" +
          "**Verification:** \\( (u-1)(6u^2 + 6u + 6) + 6 = 6u^3 - 6u^2 + 6u^2 - 6u + 6u - 6 + 6 = 6u^3 \\) ✓\n\n" +
          "### Step 4: Integrate\n" +
          "$$\\int \\left(6u^2 + 6u + 6 + \\frac{6}{u-1}\\right) du$$\n\n" +
          "$$= 2u^3 + 3u^2 + 6u + 6\\ln|u-1| + C$$\n\n" +
          "### Step 5: Substitute back \\( u = \\sqrt[6]{x} \\)\n" +
          "$$= 2(\\sqrt[6]{x})^3 + 3(\\sqrt[6]{x})^2 + 6\\sqrt[6]{x} + 6\\ln|\\sqrt[6]{x}-1| + C$$\n\n" +
          "Simplify the exponents:\n" +
          "- \\( (\\sqrt[6]{x})^3 = x^{3/6} = x^{1/2} = \\sqrt{x} \\)\n" +
          "- \\( (\\sqrt[6]{x})^2 = x^{2/6} = x^{1/3} = \\sqrt[3]{x} \\)\n\n" +
          "$$\\boxed{2\\sqrt{x} + 3\\sqrt[3]{x} + 6\\sqrt[6]{x} + 6\\ln|\\sqrt[6]{x}-1| + C}$$\n\n" +
          "**Answer: A**\n\n" +
          "**Key Strategy:** For integrals with multiple radicals, substitute \\( u = x^{1/n} \\) where \\( n \\) is the LCM of all radical indices."
      },

      {
        id: "q111",
        moduleId: "ITMTB",
        weekId: "ITMTB_W4",
        type: "open-ended",
        text: "Find the volume of the solid generated by rotating the region under the curve \\( y=\\frac{1}{x^{2}+3x+2} \\) from \\( x=0 \\) to \\( x=1 \\) about the y-axis. Express your answer in terms of \\( \\pi \\) and natural logarithms.",
        
        correctAnswers: [
          "2π*ln(9/8)",
          "2π*ln(9/8)",
          "2pi*ln(9/8)",
          "2*π*ln(9/8)",
          "2*pi*ln(9/8)",
          "(2π)ln(9/8)",
          "2πln(9/8)",
          "2*π*(ln(9) - ln(8))",
          "2π(ln(9) - ln(8))",
          "2π(2ln(3) - 3ln(2))",
          "2*pi*(ln(9) - ln(8))",
          "2pi(ln(9) - ln(8))"
        ],
        
        options: {
          allowSymbolic: true,
          tolerance: 0.001,
          acceptedUnits: [],
          requiredUnit: null
        },
        
        explanation: "This problem uses the **method of cylindrical shells** to find a volume of revolution about the y-axis.\n\n" +
          "### Step 1: Choose the method\n" +
          "When rotating about the **y-axis**, cylindrical shells are often easier than washers.\n\n" +
          "**Shell Method Formula:**\n" +
          "$$V = 2\\pi \\int_{a}^{b} x \\cdot f(x) \\, dx$$\n\n" +
          "where \\( x \\) is the **radius** of each shell and \\( f(x) \\) is the **height**.\n\n" +
          "### Step 2: Set up the integral\n" +
          "$$V = 2\\pi \\int_{0}^{1} x \\cdot \\frac{1}{x^2+3x+2} \\, dx = 2\\pi \\int_{0}^{1} \\frac{x}{x^2+3x+2} \\, dx$$\n\n" +
          "### Step 3: Factor the denominator\n" +
          "$$x^2 + 3x + 2 = (x+1)(x+2)$$\n\n" +
          "So the integral becomes:\n" +
          "$$V = 2\\pi \\int_{0}^{1} \\frac{x}{(x+1)(x+2)} \\, dx$$\n\n" +
          "### Step 4: Partial fraction decomposition\n" +
          "$$\\frac{x}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$$\n\n" +
          "Multiply both sides by \\( (x+1)(x+2) \\):\n" +
          "$$x = A(x+2) + B(x+1)$$\n\n" +
          "**Find A:** Let \\( x = -1 \\):\n" +
          "$$-1 = A(1) \\implies A = -1$$\n\n" +
          "**Find B:** Let \\( x = -2 \\):\n" +
          "$$-2 = B(-1) \\implies B = 2$$\n\n" +
          "### Step 5: Integrate\n" +
          "$$\\int_{0}^{1} \\left(\\frac{-1}{x+1} + \\frac{2}{x+2}\\right) dx$$\n\n" +
          "$$= \\left[-\\ln|x+1| + 2\\ln|x+2|\\right]_0^1$$\n\n" +
          "**Evaluate at upper limit** \\( x = 1 \\):\n" +
          "$$-\\ln(2) + 2\\ln(3)$$\n\n" +
          "**Evaluate at lower limit** \\( x = 0 \\):\n" +
          "$$-\\ln(1) + 2\\ln(2) = 0 + 2\\ln(2) = 2\\ln(2)$$\n\n" +
          "**Subtract:**\n" +
          "$$(-\\ln(2) + 2\\ln(3)) - (2\\ln(2)) = 2\\ln(3) - 3\\ln(2)$$\n\n" +
          "### Step 6: Simplify using logarithm properties\n" +
          "$$2\\ln(3) - 3\\ln(2) = \\ln(3^2) - \\ln(2^3) = \\ln(9) - \\ln(8) = \\ln\\left(\\frac{9}{8}\\right)$$\n\n" +
          "### Step 7: Final volume\n" +
          "$$\\boxed{V = 2\\pi \\ln\\left(\\frac{9}{8}\\right)}$$\n\n" +
          "**Numerical approximation:** \\( V \\approx 2\\pi(0.1178) \\approx 0.740 \\) cubic units\n\n" +
          "**Key Concept:** For rotation about the y-axis, shells often simplify the calculation compared to the washer method, especially when the function is given as \\( y = f(x) \\)."
      },
      // Question 112: Volume of Revolution - Disk Method
        {
          id: "q112",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the volume of the solid obtained by rotating the curve \\( y = \\sqrt{x} \\) from \\( x = 0 \\) to \\( x = 4 \\) about the \\( x \\)-axis.",
          
          correctAnswers: [
            "8π",
            "8*π",
            "8*pi",
            "8pi",
            "8 π",
            "8 pi",
            "25.13",
            "≈25.13",
            "≈8π"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "This problem uses the **disk method**, which is ideal when rotating a region about an axis with no hollow interior.\n\n" +
            "**Formula for Disk Method (rotating about the \\( x \\)-axis):**\n\n" +
            "$$V = \\int_{a}^{b} \\pi[f(x)]^2 \\, dx$$\n\n" +
            "where \\( f(x) \\) is the radius of each disk.\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "- Function (radius): \\( f(x) = \\sqrt{x} \\)\n" +
            "- Interval: \\( a = 0 \\) to \\( b = 4 \\)\n\n" +
            "**Step 2: Set Up the Integral**\n\n" +
            "$$V = \\int_{0}^{4} \\pi (\\sqrt{x})^2 \\, dx$$\n\n" +
            "**Step 3: Simplify the Integrand**\n\n" +
            "The square and square root cancel:\n\n" +
            "$$V = \\pi \\int_{0}^{4} x \\, dx$$\n\n" +
            "**Step 4: Integrate**\n\n" +
            "The antiderivative of \\( x \\) is \\( \\frac{x^2}{2} \\):\n\n" +
            "$$V = \\pi \\left[ \\frac{x^2}{2} \\right]_{0}^{4}$$\n\n" +
            "**Step 5: Evaluate (Apply Limits)**\n\n" +
            "$$V = \\pi \\left( \\frac{4^2}{2} - \\frac{0^2}{2} \\right)$$\n\n" +
            "$$V = \\pi \\left( \\frac{16}{2} - 0 \\right) = \\pi(8) = 8\\pi$$\n\n" +
            "**Answer: \\( 8\\pi \\) cubic units** (approximately 25.13 cubic units)\n\n" +
            "---\n\n" +
            "**Key Concept - Disk Method:**\n\n" +
            "| **When to Use** | **Formula** | **Key Idea** |\n" +
            "|---|---|---|\n" +
            "| Rotating about \\( x \\)-axis | \\( V = \\int_{a}^{b} \\pi[f(x)]^2 \\, dx \\) | Stack circular disks perpendicular to axis |\n" +
            "| Rotating about \\( y \\)-axis | \\( V = \\int_{c}^{d} \\pi[g(y)]^2 \\, dy \\) | Integrate along axis of rotation |\n" +
            "| No hole in solid | Use disk method | Each cross-section is a full circle |\n\n" +
            "The disk method is like slicing the solid into thin circular disks and adding up their volumes."
        },

        // Question 113: Volume of Revolution - Washer Method
        {
          id: "q113",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the volume of the solid that results when the region \\( R \\), bounded by the graphs of \\( f(x) = \\sqrt{x} \\) and \\( g(x) = x^2 \\), is revolved about the \\( x \\)-axis.",
          
          correctAnswers: [
            "3π/10",
            "3*π/10",
            "3*pi/10",
            "3pi/10",
            "(3/10)π",
            "(3/10)*π",
            "(3/10)*pi",
            "0.3π",
            "0.3*π",
            "0.3pi",
            "0.942",
            "≈0.942",
            "≈3π/10"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "This problem requires the **washer method** because the region has a hole in the middle when rotated.\n\n" +
            "**Formula for Washer Method (rotating about \\( x \\)-axis):**\n\n" +
            "$$V = \\int_{a}^{b} \\pi \\left( [R(x)]^2 - [r(x)]^2 \\right) dx$$\n\n" +
            "where \\( R(x) \\) is the **outer radius** and \\( r(x) \\) is the **inner radius**.\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "First, find where the curves intersect:\n\n" +
            "$$\\sqrt{x} = x^2$$\n" +
            "$$x = x^4$$\n" +
            "$$x^4 - x = 0$$\n" +
            "$$x(x^3 - 1) = 0$$\n\n" +
            "Intersection points: \\( x = 0 \\) and \\( x = 1 \\)\n\n" +
            "Between these points, \\( \\sqrt{x} \\) is above \\( x^2 \\), so:\n" +
            "- **Outer radius:** \\( R(x) = \\sqrt{x} \\)\n" +
            "- **Inner radius:** \\( r(x) = x^2 \\)\n" +
            "- **Limits:** \\( a = 0 \\) to \\( b = 1 \\)\n\n" +
            "**Step 2: Set Up the Integral**\n\n" +
            "$$V = \\int_{0}^{1} \\pi \\left( (\\sqrt{x})^2 - (x^2)^2 \\right) dx$$\n\n" +
            "**Step 3: Simplify**\n\n" +
            "$$V = \\pi \\int_{0}^{1} (x - x^4) \\, dx$$\n\n" +
            "**Step 4: Integrate**\n\n" +
            "$$V = \\pi \\left[ \\frac{x^2}{2} - \\frac{x^5}{5} \\right]_{0}^{1}$$\n\n" +
            "**Step 5: Evaluate**\n\n" +
            "$$V = \\pi \\left( \\frac{1}{2} - \\frac{1}{5} - 0 \\right)$$\n\n" +
            "$$V = \\pi \\left( \\frac{5 - 2}{10} \\right) = \\frac{3\\pi}{10}$$\n\n" +
            "**Answer: \\( \\frac{3\\pi}{10} \\) cubic units** (approximately 0.942 cubic units)\n\n" +
            "---\n\n" +
            "**Key Concept - Washer vs Disk Method:**\n\n" +
            "| **Method** | **When to Use** | **Formula Pattern** |\n" +
            "|---|---|---|\n" +
            "| Disk | Solid shape (no hole) | \\( \\pi R^2 \\) |\n" +
            "| Washer | Hollow shape (has hole) | \\( \\pi(R^2 - r^2) \\) |\n\n" +
            "Think of washers as \"donuts\" - you subtract the inner circle from the outer circle to get the washer area."
        },

        // Question 114: Volume of Revolution - Cylindrical Shell Method
        {
          id: "q114",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the volume of the solid formed when the region between \\( x = y^3 \\) and \\( x = 1 \\) is rotated about the \\( x \\)-axis.",
          image: {
            src: "/images/ITMTB_Week 5_Quiz 1_Question 3.png",
            alt: "Region in the xy plane bounded by the curve x = y^3 and the line x = 1.",
            caption: "Region bounded by (x = y^3) and (x = 1)."
          },
          correctAnswers: [
            "3π/5",
            "3*π/5",
            "3*pi/5",
            "3pi/5",
            "(3/5)π",
            "(3/5)*π",
            "(3/5)*pi",
            "0.6π",
            "0.6*π",
            "0.6pi",
            "1.885",
            "≈1.885",
            "≈3π/5"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
            explanation: "This problem is best solved using the **cylindrical shell method**. Although we're rotating about the x-axis, it's easier to integrate with respect to y.\n\n" +
            "**Formula for Shell Method (rotating about x-axis, integrating with y):**\n\n" +
            "$$V = \\int_{c}^{d} 2\\pi y \\cdot h(y) \\, dy$$\n\n" +
            "where y is the **radius** and h(y) is the **height** of each shell.\n\n" +
            "**Step 1: Identify Components (in terms of y)**\n\n" +
            "- **Radius:** Distance from x-axis to point at height y is just y\n" +
            "- **Height:** Rightmost curve minus leftmost curve\n" +
            "  - Right: x = 1\n" +
            "  - Left: x = y^3\n" +
            "  - Height: h(y) = 1 - y^3\n" +
            "- **Limits:** The curves intersect when y^3 = 1, so y = 1\n" +
            "  - From c = 0 to d = 1\n\n" +
            "**Step 2: Set Up the Integral**\n\n" +
            "$$V = \\int_{0}^{1} 2\\pi y (1 - y^3) \\, dy$$\n\n" +
            "**Step 3: Simplify**\n\n" +
            "$$V = 2\\pi \\int_{0}^{1} (y - y^4) \\, dy$$\n\n" +
            "**Step 4: Integrate**\n\n" +
            "$$V = 2\\pi \\left[ \\frac{y^2}{2} - \\frac{y^5}{5} \\right]_{0}^{1}$$\n\n" +
            "**Step 5: Evaluate**\n\n" +
            "$$V = 2\\pi \\left( \\frac{1}{2} - \\frac{1}{5} - 0 \\right)$$\n\n" +
            "$$V = 2\\pi \\left( \\frac{3}{10} \\right) = \\frac{6\\pi}{10} = \\frac{3\\pi}{5}$$\n\n" +
            "**Answer: \\( \\frac{3\\pi}{5} \\)** cubic units (≈ 1.885 cubic units)\n\n" +
            "---\n\n" +
            "**Alternative Solution — Disk/Washer Method**\n\n" +
            "We can also solve this using the **disk/washer method** by integrating with respect to x.\n\n" +
            "**Step 1:** Express y in terms of x:  \\( y = x^{1/3} \\)\n\n" +
            "The radius of each disk (distance from x-axis to curve) is y = x^{1/3}.\n\n" +
            "**Step 2:** Use the washer formula (no hole, since region starts at y=0):\n\n" +
            "$$V = \\pi \\int_{0}^{1} [R(x)]^2 \\, dx$$\n\n" +
            "Here, \\( R(x) = x^{1/3} \\)\n\n" +
            "**Step 3:** Substitute and integrate:\n\n" +
            "$$V = \\pi \\int_{0}^{1} (x^{1/3})^2 \\, dx = \\pi \\int_{0}^{1} x^{2/3} \\, dx$$\n\n" +
            "$$V = \\pi \\left[ \\frac{x^{5/3}}{5/3} \\right]_{0}^{1} = \\pi \\cdot \\frac{3}{5} = \\frac{3\\pi}{5}$$\n\n" +
            "**Same Result:** \\( V = \\frac{3\\pi}{5} \\)\n\n" +
            "---\n\n" +
            "**Key Concept - When to Use Each Method:**\n\n" +
            "| **Scenario** | **Best Method** | **Why?** |\n" +
            "|---|---|---|\n" +
            "| Rotating about x-axis, function is y = f(x) | Disk/Washer | Natural to integrate with dx |\n" +
            "| Rotating about x-axis, function is x = g(y) | Shell Method | Easier to integrate with dy |\n" +
            "| Rotating about y-axis, function is x = g(y) | Disk/Washer | Natural to integrate with dy |\n" +
            "| Rotating about y-axis, function is y = f(x) | Shell Method | Easier to integrate with dx |\n\n" +
            "**Shell Method Intuition:** Each thin horizontal strip at height y forms a cylindrical shell when rotated — like nested cans. Volume = circumference × height × thickness:\n" +
            "$$dV = 2\\pi r \\cdot h \\cdot dr$$"
        },

        // Question 116: Arc Length - Perfect Square Problem
        {
          id: "q116",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the exact length of the curve \\( y = \\frac{x^3}{3} + \\frac{1}{4x} \\) for \\( 1 \\le x \\le 2 \\).",
          
          correctAnswers: [
            "59/24",
            "59 / 24",
            "(59/24)",
            "2.458",
            "2.4583",
            "≈59/24",
            "≈2.458"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "This is a classic **perfect square** arc length problem - designed so \\( 1 + (y')^2 \\) simplifies beautifully.\n\n" +
            "**Step 1: Find the Derivative**\n\n" +
            "Rewrite as \\( y = \\frac{1}{3}x^3 + \\frac{1}{4}x^{-1} \\):\n\n" +
            "$$y' = \\frac{1}{3}(3x^2) + \\frac{1}{4}(-x^{-2}) = x^2 - \\frac{1}{4x^2}$$\n\n" +
            "**Step 2: Find \\( 1 + (y')^2 \\)**\n\n" +
            "Square the derivative using \\( (a - b)^2 = a^2 - 2ab + b^2 \\):\n\n" +
            "$$(y')^2 = \\left( x^2 - \\frac{1}{4x^2} \\right)^2 = x^4 - 2(x^2)\\left(\\frac{1}{4x^2}\\right) + \\frac{1}{16x^4}$$\n\n" +
            "$$(y')^2 = x^4 - \\frac{1}{2} + \\frac{1}{16x^4}$$\n\n" +
            "Now add 1 (this flips the sign of the middle term!):\n\n" +
            "$$1 + (y')^2 = x^4 + \\frac{1}{2} + \\frac{1}{16x^4}$$\n\n" +
            "**Step 3: Recognize the Perfect Square**\n\n" +
            "This is \\( (a + b)^2 = a^2 + 2ab + b^2 \\) with \\( a = x^2 \\) and \\( b = \\frac{1}{4x^2} \\):\n\n" +
            "$$1 + (y')^2 = \\left( x^2 + \\frac{1}{4x^2} \\right)^2$$\n\n" +
            "**Step 4: Set Up the Integral**\n\n" +
            "$$L = \\int_{1}^{2} \\sqrt{\\left( x^2 + \\frac{1}{4x^2} \\right)^2} \\, dx$$\n\n" +
            "**Step 5: Simplify and Integrate**\n\n" +
            "The square root and square cancel (the expression is always positive):\n\n" +
            "$$L = \\int_{1}^{2} \\left( x^2 + \\frac{1}{4x^2} \\right) dx$$\n\n" +
            "$$L = \\left[ \\frac{x^3}{3} - \\frac{1}{4x} \\right]_{1}^{2}$$\n\n" +
            "**Step 6: Evaluate**\n\n" +
            "$$L = \\left( \\frac{8}{3} - \\frac{1}{8} \\right) - \\left( \\frac{1}{3} - \\frac{1}{4} \\right)$$\n\n" +
            "$$L = \\frac{8}{3} - \\frac{1}{8} - \\frac{1}{3} + \\frac{1}{4}$$\n\n" +
            "$$L = \\left( \\frac{8 - 1}{3} \\right) + \\left( \\frac{2 - 1}{8} \\right) = \\frac{7}{3} + \\frac{1}{8}$$\n\n" +
            "Finding common denominator (24):\n\n" +
            "$$L = \\frac{56}{24} + \\frac{3}{24} = \\frac{59}{24}$$\n\n" +
            "**Answer: \\( \\frac{59}{24} \\)** (approximately 2.458)\n\n" +
            "---\n\n" +
            "**Key Concept - Perfect Square Pattern:**\n\n" +
            "Some arc length problems are designed so \\( 1 + (y')^2 \\) becomes a perfect square:\n\n" +
            "| **If \\( y' \\) has form** | **Then \\( 1 + (y')^2 \\) simplifies to** |\n" +
            "|---|---|\n" +
            "| \\( x^n - \\frac{k}{x^n} \\) | \\( \\left( x^n + \\frac{k}{x^n} \\right)^2 \\) |\n" +
            "| \\( \\sinh(x) \\) | \\( \\cosh^2(x) \\) |\n" +
            "| \\( \\tan(x) \\) | \\( \\sec^2(x) \\) |\n\n" +
            "**Why does adding 1 flip the sign?**\n\n" +
            "When you have \\( (a - b)^2 = a^2 - 2ab + b^2 \\) and add 1:\n\n" +
            "$$1 + (a^2 - 2ab + b^2) = a^2 + 2ab + b^2 = (a + b)^2$$\n\n" +
            "The middle term changes from \\( -2ab \\) to \\( +2ab \\), giving us the perfect square!"
        },

        // Question 117: Surface Area of Revolution
        {
          id: "q117",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the exact area of the surface obtained by rotating the curve \\( y = x^3 \\) for \\( 0 \\le x \\le 2 \\) about the \\( x \\)-axis.",
          
          correctAnswers: [
            "π(145√145 - 1)/27",
            "π(145*√145 - 1)/27",
            "π(145sqrt(145) - 1)/27",
            "(π/27)(145√145 - 1)",
            "(π/27)(145*sqrt(145) - 1)",
            "199.48",
            "≈199.48",
            "≈π(145√145 - 1)/27"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.02,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "This problem finds the surface area when rotating a curve, which requires integrating the circumference along the arc length.\n\n" +
            "**Surface Area Formula (rotating about \\( x \\)-axis):**\n\n" +
            "$$S = \\int_{a}^{b} 2\\pi y \\sqrt{1 + (y')^2} \\, dx$$\n\n" +
            "Think of it as: **Circumference** \\( \\times \\) **Arc Length Element**\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "- Function: \\( y = x^3 \\)\n" +
            "- Derivative: \\( y' = 3x^2 \\)\n" +
            "- Bounds: \\( a = 0, b = 2 \\)\n\n" +
            "**Step 2: Find \\( 1 + (y')^2 \\)**\n\n" +
            "$$(y')^2 = (3x^2)^2 = 9x^4$$\n\n" +
            "$$1 + (y')^2 = 1 + 9x^4$$\n\n" +
            "**Step 3: Set Up the Integral**\n\n" +
            "$$S = \\int_{0}^{2} 2\\pi (x^3) \\sqrt{1 + 9x^4} \\, dx$$\n\n" +
            "**Step 4: Use u-Substitution**\n\n" +
            "This integral is perfect for substitution:\n\n" +
            "- Let \\( u = 1 + 9x^4 \\)\n" +
            "- Then \\( du = 36x^3 \\, dx \\)\n" +
            "- Solving for \\( x^3 dx \\): \\( x^3 dx = \\frac{du}{36} \\)\n\n" +
            "**Change the limits:**\n" +
            "- When \\( x = 0 \\): \\( u = 1 + 9(0)^4 = 1 \\)\n" +
            "- When \\( x = 2 \\): \\( u = 1 + 9(2)^4 = 1 + 9(16) = 145 \\)\n\n" +
            "**Step 5: Substitute and Integrate**\n\n" +
            "$S = 2\\pi \\int_{1}^{145} \\sqrt{u} \\cdot \\frac{du}{36}$\n\n" +
            "$S = \\frac{2\\pi}{36} \\int_{1}^{145} u^{1/2} \\, du = \\frac{\\pi}{18} \\int_{1}^{145} u^{1/2} \\, du$\n\n" +
            "$S = \\frac{\\pi}{18} \\left[ \\frac{u^{3/2}}{3/2} \\right]_{1}^{145} = \\frac{\\pi}{18} \\cdot \\frac{2}{3} \\left[ u^{3/2} \\right]_{1}^{145}$\n\n" +
            "$S = \\frac{\\pi}{27} \\left[ u^{3/2} \\right]_{1}^{145}$\n\n" +
            "**Step 6: Evaluate**\n\n" +
            "$S = \\frac{\\pi}{27} \\left( 145^{3/2} - 1^{3/2} \\right)$\n\n" +
            "Since \\( 145^{3/2} = 145\\sqrt{145} \\):\n\n" +
            "$S = \\frac{\\pi}{27} (145\\sqrt{145} - 1)$\n\n" +
            "**Answer: \\( \\frac{\\pi}{27}(145\\sqrt{145} - 1) \\)** (approximately 199.48 square units)\n\n" +
            "---\n\n" +
            "**Key Concept - Surface Area vs Volume:**\n\n" +
            "| **Quantity** | **Formula (about \\( x \\)-axis)** | **Interpretation** |\n" +
            "|---|---|---|\n" +
            "| **Volume** (Disk) | \\( \\int \\pi[f(x)]^2 \\, dx \\) | Sum of disk areas \\( \\times \\) thickness |\n" +
            "| **Surface Area** | \\( \\int 2\\pi f(x) \\sqrt{1+(f'(x))^2} \\, dx \\) | Sum of circumferences \\( \\times \\) arc length |\n\n" +
            "**Why the \\( \\sqrt{1 + (y')^2} \\) term?**\n\n" +
            "When rotating, we measure along the **slanted surface**, not just horizontal distance. The factor \\( \\sqrt{1 + (y')^2} \\) converts \\( dx \\) into the actual arc length \\( ds \\)."
        },

        // Question 118: Gabriel's Horn - Multiple Choice (Infinite Surface Area)
        {
          id: "q118",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "multiple-choice",
          text: "Consider **Gabriel's Horn**: the surface formed by rotating the curve \\( y = \\frac{1}{x} \\) for \\( x \\ge 1 \\) about the \\( x \\)-axis.\n\n" +
            "This famous shape has a finite volume but an infinite surface area. Which statement correctly explains why the surface area is infinite?",
          
          options: [
            "A. The surface area integral \\( \\displaystyle S = 2\\pi \\int_{1}^{\\infty} \\frac{\\sqrt{x^4 + 1}}{x^3} \\, dx \\) is greater than \\( \\displaystyle 2\\pi \\int_{1}^{\\infty} \\frac{1}{x} \\, dx \\), which diverges to infinity",
            "B. The surface area integral \\( \\displaystyle S = 2\\pi \\int_{1}^{\\infty} \\frac{1}{x^2} \\, dx \\) converges, so the surface area is finite",
            "C. Both the volume and surface area integrals converge to finite values",
            "D. The surface area is finite because \\( y = \\frac{1}{x} \\) approaches zero as \\( x \\to \\infty \\)"
          ],
          
          correctAnswers: ["A"],
          
          explanation: "**Gabriel's Horn** is one of the most fascinating paradoxes in calculus - a shape you can fill with paint, but you cannot paint its surface!\n\n" +
            "**Setting Up the Surface Area Integral:**\n\n" +
            "For \\( y = \\frac{1}{x} \\) rotated about the \\( x \\)-axis:\n\n" +
            "$S = \\int_{1}^{\\infty} 2\\pi y \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "**Step 1: Find the Components**\n\n" +
            "- \\( y = \\frac{1}{x} = x^{-1} \\)\n" +
            "- \\( y' = -x^{-2} = -\\frac{1}{x^2} \\)\n" +
            "- \\( (y')^2 = \\frac{1}{x^4} \\)\n\n" +
            "**Step 2: Simplify \\( 1 + (y')^2 \\)**\n\n" +
            "$1 + (y')^2 = 1 + \\frac{1}{x^4} = \\frac{x^4 + 1}{x^4}$\n\n" +
            "**Step 3: Set Up the Integral**\n\n" +
            "$S = \\int_{1}^{\\infty} 2\\pi \\left(\\frac{1}{x}\\right) \\sqrt{\\frac{x^4 + 1}{x^4}} \\, dx$\n\n" +
            "$S = 2\\pi \\int_{1}^{\\infty} \\frac{1}{x} \\cdot \\frac{\\sqrt{x^4 + 1}}{x^2} \\, dx = 2\\pi \\int_{1}^{\\infty} \\frac{\\sqrt{x^4 + 1}}{x^3} \\, dx$\n\n" +
            "**Step 4: Use the Direct Comparison Test**\n\n" +
            "For \\( x \\ge 1 \\), we know:\n\n" +
            "$\\sqrt{x^4 + 1} > \\sqrt{x^4} = x^2$\n\n" +
            "Therefore:\n\n" +
            "$\\frac{\\sqrt{x^4 + 1}}{x^3} > \\frac{x^2}{x^3} = \\frac{1}{x}$\n\n" +
            "This means our surface area integral is **greater than** a simpler integral:\n\n" +
            "$S = 2\\pi \\int_{1}^{\\infty} \\frac{\\sqrt{x^4 + 1}}{x^3} \\, dx > 2\\pi \\int_{1}^{\\infty} \\frac{1}{x} \\, dx$\n\n" +
            "**Step 5: Show the Simpler Integral Diverges**\n\n" +
            "$\\int_{1}^{\\infty} \\frac{1}{x} \\, dx = \\lim_{t \\to \\infty} \\left[ \\ln|x| \\right]_{1}^{t}$\n\n" +
            "$= \\lim_{t \\to \\infty} (\\ln(t) - \\ln(1)) = \\lim_{t \\to \\infty} \\ln(t) = \\infty$\n\n" +
            "**Conclusion:**\n\n" +
            "Since \\( \\int_{1}^{\\infty} \\frac{1}{x} \\, dx \\) diverges to infinity, and our surface area is **always greater**, the surface area must also be infinite.\n\n" +
            "**Answer: A**\n\n" +
            "---\n\n" +
            "**The Gabriel's Horn Paradox:**\n\n" +
            "| **Property** | **Value** | **Why?** |\n" +
            "|---|---|---|\n" +
            "| **Volume** | \\( \\pi \\) (finite) | \\( \\int_{1}^{\\infty} \\pi \\left(\\frac{1}{x}\\right)^2 dx = \\int_{1}^{\\infty} \\frac{\\pi}{x^2} dx \\) converges |\n" +
            "| **Surface Area** | \\( \\infty \\) (infinite) | \\( \\int_{1}^{\\infty} \\frac{2\\pi\\sqrt{x^4+1}}{x^3} dx > \\int_{1}^{\\infty} \\frac{2\\pi}{x} dx \\) diverges |\n\n" +
            "**Why This Happens:**\n\n" +
            "The volume depends on \\( y^2 = \\frac{1}{x^2} \\), which decays fast enough for convergence (\\( p \\)-test with \\( p = 2 > 1 \\)).\n\n" +
            "The surface area depends on \\( y\\sqrt{1+(y')^2} \\approx \\frac{1}{x} \\), which decays too slowly (\\( p \\)-test with \\( p = 1 \\)).\n\n" +
            "**Physical Interpretation:**\n\n" +
            "You can **fill** Gabriel's Horn with \\( \\pi \\) cubic units of paint, but you can **never** paint its inner surface because the surface area is infinite. This seems paradoxical, but it's mathematically sound!\n\n" +
            "The resolution: the \"thickness\" of real paint matters. In reality, you couldn't fill it completely because paint molecules have finite size."
        }
      ,

        // Question 119: Volume - Disk Method (y = x³)
        {
          id: "q119",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the volume of the solid generated by rotating the region bounded by the curve \\( y = x^3 \\), the line \\( x = 2 \\), and the \\( x \\)-axis (\\( y = 0 \\)) about the \\( x \\)-axis.",
          
          correctAnswers: [
            "128π/7",
            "128*π/7",
            "128*pi/7",
            "128pi/7",
            "(128/7)π",
            "(128/7)*π",
            "(128/7)*pi",
            "18.286π",
            "18.286*π",
            "57.44",
            "≈57.44",
            "≈128π/7"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "This problem uses the **disk method** because the region is flush against the axis of rotation.\n\n" +
            "**Formula for Disk Method (rotating about \\( x \\)-axis):**\n\n" +
            "$V = \\int_{a}^{b} \\pi[f(x)]^2 \\, dx$\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "- **Radius function:** \\( f(x) = x^3 \\)\n" +
            "- **Limits:** The region extends from \\( x = 0 \\) (where \\( y = 0 \\) intersects \\( y = x^3 \\)) to \\( x = 2 \\)\n" +
            "- So \\( a = 0 \\) and \\( b = 2 \\)\n\n" +
            "**Step 2: Set Up the Integral**\n\n" +
            "$V = \\int_{0}^{2} \\pi (x^3)^2 \\, dx$\n\n" +
            "**Step 3: Simplify**\n\n" +
            "$V = \\pi \\int_{0}^{2} x^6 \\, dx$\n\n" +
            "**Step 4: Integrate**\n\n" +
            "Using the power rule:\n\n" +
            "$V = \\pi \\left[ \\frac{x^7}{7} \\right]_{0}^{2}$\n\n" +
            "**Step 5: Evaluate**\n\n" +
            "$V = \\pi \\left( \\frac{2^7}{7} - \\frac{0^7}{7} \\right)$\n\n" +
            "$V = \\pi \\left( \\frac{128}{7} - 0 \\right) = \\frac{128\\pi}{7}$\n\n" +
            "**Answer: \\( \\frac{128\\pi}{7} \\) cubic units** (approximately 57.44 cubic units)\n\n" +
            "---\n\n" +
            "**Key Concept - Power Functions in Disk Method:**\n\n" +
            "When rotating \\( y = x^n \\) about the \\( x \\)-axis:\n\n" +
            "| **Step** | **Result** | **Note** |\n" +
            "|---|---|---|\n" +
            "| Square the function | \\( (x^n)^2 = x^{2n} \\) | The power doubles |\n" +
            "| Integrate | \\( \\int x^{2n} dx = \\frac{x^{2n+1}}{2n+1} \\) | Add 1 to exponent, divide |\n" +
            "| Multiply by \\( \\pi \\) | \\( \\pi \\cdot \\text{result} \\) | Don't forget this! |\n\n" +
            "For \\( y = x^3 \\): squaring gives \\( x^6 \\), integrating gives \\( \\frac{x^7}{7} \\)."
        },

        // Question 120: Volume - Washer Method (y = x² and y = 4)
        {
          id: "q120",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the volume of the solid generated by rotating the region bounded by the curves \\( y = x^2 \\) and \\( y = 4 \\) about the \\( x \\)-axis.",
          
          correctAnswers: [
            "256π/5",
            "256*π/5",
            "256*pi/5",
            "256pi/5",
            "(256/5)π",
            "(256/5)*π",
            "(256/5)*pi",
            "51.2π",
            "51.2*π",
            "160.85",
            "≈160.85",
            "≈256π/5"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "This problem uses the **washer method** because there's a gap between the region and the axis of rotation, creating a hollow center.\n\n" +
            "**Formula for Washer Method (rotating about \\( x \\)-axis):**\n\n" +
            "$V = \\int_{a}^{b} \\pi \\left( [R(x)]^2 - [r(x)]^2 \\right) dx$\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "First, find intersection points:\n\n" +
            "$x^2 = 4 \\implies x = \\pm 2$\n\n" +
            "- **Outer radius:** \\( R(x) = 4 \\) (the horizontal line, farther from \\( x \\)-axis)\n" +
            "- **Inner radius:** \\( r(x) = x^2 \\) (the parabola, closer to \\( x \\)-axis)\n" +
            "- **Limits:** \\( a = -2 \\) to \\( b = 2 \\)\n\n" +
            "**Step 2: Set Up the Integral**\n\n" +
            "$V = \\int_{-2}^{2} \\pi \\left( (4)^2 - (x^2)^2 \\right) dx$\n\n" +
            "$V = \\pi \\int_{-2}^{2} (16 - x^4) \\, dx$\n\n" +
            "**Step 3: Use Symmetry**\n\n" +
            "Since the integrand is even (symmetric about \\( y \\)-axis), we can integrate from 0 to 2 and double:\n\n" +
            "$V = 2\\pi \\int_{0}^{2} (16 - x^4) \\, dx$\n\n" +
            "**Step 4: Integrate**\n\n" +
            "$V = 2\\pi \\left[ 16x - \\frac{x^5}{5} \\right]_{0}^{2}$\n\n" +
            "**Step 5: Evaluate**\n\n" +
            "$V = 2\\pi \\left( 16(2) - \\frac{2^5}{5} - 0 \\right)$\n\n" +
            "$V = 2\\pi \\left( 32 - \\frac{32}{5} \\right)$\n\n" +
            "$V = 2\\pi \\left( \\frac{160 - 32}{5} \\right) = 2\\pi \\left( \\frac{128}{5} \\right) = \\frac{256\\pi}{5}$\n\n" +
            "**Answer: \\( \\frac{256\\pi}{5} \\) cubic units** (approximately 160.85 cubic units)\n\n" +
            "---\n\n" +
            "**Key Concept - Using Symmetry:**\n\n" +
            "When the region is symmetric about the \\( y \\)-axis:\n\n" +
            "| **Original Integral** | **Equivalent Using Symmetry** | **Benefit** |\n" +
            "|---|---|---|\n" +
            "| \\( \\int_{-a}^{a} f(x) \\, dx \\) | \\( 2\\int_{0}^{a} f(x) \\, dx \\) | Simpler limits |\n" +
            "| Works when | \\( f(-x) = f(x) \\) | Function is even |\n\n" +
            "**Why does this work?** If \\( f(x) = 16 - x^4 \\), then \\( f(-x) = 16 - (-x)^4 = 16 - x^4 = f(x) \\), so the function is even and the area from -2 to 0 equals the area from 0 to 2."
        },

        // Question 121: Volume - Washer Method about y-axis
        {
          id: "q121",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the volume of the solid generated by rotating the region bounded by the parabola \\( x = y^2 \\) and the line \\( x = y + 2 \\) about the \\( y \\)-axis.",
          
          correctAnswers: [
            "72π/5",
            "72*π/5",
            "72*pi/5",
            "72pi/5",
            "(72/5)π",
            "(72/5)*π",
            "(72/5)*pi",
            "14.4π",
            "14.4*π",
            "45.24",
            "≈45.24",
            "≈72π/5"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "We're rotating about the \\( y \\)-axis, so we integrate with respect to \\( y \\) using the washer method.\n\n" +
            "**Formula for Washer Method (rotating about \\( y \\)-axis):**\n\n" +
            "$V = \\int_{c}^{d} \\pi \\left( [R(y)]^2 - [r(y)]^2 \\right) dy$\n\n" +
            "**Step 1: Find Intersection Points**\n\n" +
            "Set the curves equal:\n\n" +
            "$y^2 = y + 2$\n" +
            "$y^2 - y - 2 = 0$\n" +
            "$(y - 2)(y + 1) = 0$\n\n" +
            "Intersections at \\( y = -1 \\) and \\( y = 2 \\)\n\n" +
            "**Step 2: Identify Components**\n\n" +
            "For \\( -1 \\le y \\le 2 \\), which curve is farther from the \\( y \\)-axis?\n\n" +
            "Test \\( y = 0 \\): \\( x = y^2 = 0 \\) vs \\( x = y + 2 = 2 \\)\n\n" +
            "- **Outer radius:** \\( R(y) = y + 2 \\) (the line)\n" +
            "- **Inner radius:** \\( r(y) = y^2 \\) (the parabola)\n" +
            "- **Limits:** \\( c = -1 \\) to \\( d = 2 \\)\n\n" +
            "**Step 3: Set Up the Integral**\n\n" +
            "$V = \\int_{-1}^{2} \\pi \\left( (y + 2)^2 - (y^2)^2 \\right) dy$\n\n" +
            "**Step 4: Expand and Simplify**\n\n" +
            "$V = \\pi \\int_{-1}^{2} (y^2 + 4y + 4 - y^4) \\, dy$\n\n" +
            "**Step 5: Integrate**\n\n" +
            "$V = \\pi \\left[ \\frac{y^3}{3} + 2y^2 + 4y - \\frac{y^5}{5} \\right]_{-1}^{2}$\n\n" +
            "**Step 6: Evaluate at Upper Limit (\\( y = 2 \\))**\n\n" +
            "$\\frac{8}{3} + 2(4) + 4(2) - \\frac{32}{5} = \\frac{8}{3} + 8 + 8 - \\frac{32}{5}$\n\n" +
            "$= \\frac{8}{3} + 16 - \\frac{32}{5} = \\frac{40 + 240 - 96}{15} = \\frac{184}{15}$\n\n" +
            "**Step 7: Evaluate at Lower Limit (\\( y = -1 \\))**\n\n" +
            "$\\frac{-1}{3} + 2(1) + 4(-1) - \\frac{-1}{5} = -\\frac{1}{3} + 2 - 4 + \\frac{1}{5}$\n\n" +
            "$= -\\frac{1}{3} - 2 + \\frac{1}{5} = \\frac{-5 - 30 + 3}{15} = -\\frac{32}{15}$\n\n" +
            "**Step 8: Subtract**\n\n" +
            "$V = \\pi \\left( \\frac{184}{15} - \\left(-\\frac{32}{15}\\right) \\right) = \\pi \\cdot \\frac{216}{15} = \\frac{216\\pi}{15} = \\frac{72\\pi}{5}$\n\n" +
            "**Answer: \\( \\frac{72\\pi}{5} \\) cubic units** (approximately 45.24 cubic units)\n\n" +
            "---\n\n" +
            "**Key Concept - Rotation About Different Axes:**\n\n" +
            "| **Axis of Rotation** | **Integrate with** | **Outer/Inner Radius** |\n" +
            "|---|---|---|\n" +
            "| \\( x \\)-axis | \\( dx \\) | Functions \\( y = f(x) \\) |\n" +
            "| \\( y \\)-axis | \\( dy \\) | Functions \\( x = g(y) \\) |\n\n" +
            "**Pro Tip:** Always sketch the region! It helps identify which curve is outer vs inner."
        },

        // Question 122: Volume - Cylindrical Shell (e^(-x²))
        {
          id: "q122",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Use the cylindrical shell method to find the volume of the solid generated by rotating the region bounded by \\( y = e^{-x^2} \\), \\( y = 0 \\), \\( x = 0 \\), and \\( x = 1 \\) about the \\( y \\)-axis.",
          
          correctAnswers: [
            "π(1 - 1/e)",
            "π(1 - e^(-1))",
            "π(1-1/e)",
            "π(1-e^(-1))",
            "π*(1 - 1/e)",
            "π*(1-1/e)",
            "pi(1-1/e)",
            "pi*(1-1/e)",
            "(1-1/e)π",
            "(1-1/e)*π",
            "1.986",
            "≈1.986",
            "≈π(1-1/e)"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "We're rotating about the \\( y \\)-axis and integrating with respect to \\( x \\), which makes the **cylindrical shell method** the natural choice.\n\n" +
            "**Formula for Shell Method (rotating about \\( y \\)-axis):**\n\n" +
            "$V = \\int_{a}^{b} 2\\pi x \\cdot f(x) \\, dx$\n\n" +
            "where \\( x \\) is the radius and \\( f(x) \\) is the height.\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "- **Radius:** Distance from \\( y \\)-axis to point at \\( x \\) is \\( x \\)\n" +
            "- **Height:** \\( f(x) = e^{-x^2} \\)\n" +
            "- **Limits:** \\( a = 0 \\) to \\( b = 1 \\)\n\n" +
            "**Step 2: Set Up the Integral**\n\n" +
            "$V = \\int_{0}^{1} 2\\pi x \\cdot e^{-x^2} \\, dx$\n\n" +
            "$V = 2\\pi \\int_{0}^{1} x e^{-x^2} \\, dx$\n\n" +
            "**Step 3: Use u-Substitution**\n\n" +
            "This integral is perfect for substitution because the derivative of \\( -x^2 \\) is \\( -2x \\):\n\n" +
            "- Let \\( u = -x^2 \\)\n" +
            "- Then \\( du = -2x \\, dx \\)\n" +
            "- So \\( x \\, dx = -\\frac{du}{2} \\)\n\n" +
            "**Change the limits:**\n" +
            "- When \\( x = 0 \\): \\( u = -0^2 = 0 \\)\n" +
            "- When \\( x = 1 \\): \\( u = -1^2 = -1 \\)\n\n" +
            "**Step 4: Substitute and Integrate**\n\n" +
            "$V = 2\\pi \\int_{0}^{-1} e^u \\left( -\\frac{du}{2} \\right)$\n\n" +
            "$V = -\\pi \\int_{0}^{-1} e^u \\, du$\n\n" +
            "**Flip the limits** (changes sign):\n\n" +
            "$V = \\pi \\int_{-1}^{0} e^u \\, du$\n\n" +
            "**Step 5: Evaluate**\n\n" +
            "$V = \\pi \\left[ e^u \\right]_{-1}^{0}$\n\n" +
            "$V = \\pi (e^0 - e^{-1})$\n\n" +
            "$V = \\pi \\left(1 - \\frac{1}{e}\\right)$\n\n" +
            "**Answer: \\( \\pi\\left(1 - \\frac{1}{e}\\right) \\) cubic units** (approximately 1.986 cubic units)\n\n" +
            "---\n\n" +
            "**Key Concept - Recognizing u-Substitution Opportunities:**\n\n" +
            "When you see \\( x \\cdot f(x^2) \\), think u-substitution:\n\n" +
            "| **Pattern** | **Let** | **Then** |\n" +
            "|---|---|---|\n" +
            "| \\( x e^{-x^2} \\) | \\( u = -x^2 \\) | \\( du = -2x \\, dx \\) |\n" +
            "| \\( x \\sin(x^2) \\) | \\( u = x^2 \\) | \\( du = 2x \\, dx \\) |\n" +
            "| \\( x(x^2 + 1)^5 \\) | \\( u = x^2 + 1 \\) | \\( du = 2x \\, dx \\) |\n\n" +
            "**The key:** The \"extra \\( x \\)\" matches (up to a constant) the derivative of the inner function!"
        },

        // Question 123: Volume - Cylindrical Shell about x-axis
        {
          id: "q123",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Use the cylindrical shell method to find the volume of the solid generated by rotating the region bounded by the parabola \\( x = 4y - y^2 \\) and the line \\( x = 0 \\) (the \\( y \\)-axis) about the \\( x \\)-axis.",
          
          correctAnswers: [
            "128π/3",
            "128*π/3",
            "128*pi/3",
            "128pi/3",
            "(128/3)π",
            "(128/3)*π",
            "(128/3)*pi",
            "42.667π",
            "134.04",
            "≈134.04",
            "≈128π/3"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "We're rotating about the \\( x \\)-axis, and the function is given as \\( x = g(y) \\), making it easiest to integrate with respect to \\( y \\) using the **cylindrical shell method**.\n\n" +
            "**Formula for Shell Method (rotating about \\( x \\)-axis, integrating with \\( y \\)):**\n\n" +
            "$V = \\int_{c}^{d} 2\\pi y \\cdot g(y) \\, dy$\n\n" +
            "where \\( y \\) is the radius and \\( g(y) \\) is the height/length.\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "- **Radius:** Distance from \\( x \\)-axis to height \\( y \\) is \\( y \\)\n" +
            "- **Height:** \\( g(y) = 4y - y^2 \\)\n" +
            "- **Limits:** Find where \\( x = 0 \\):\n\n" +
            "$4y - y^2 = 0$\n" +
            "$y(4 - y) = 0$\n\n" +
            "So \\( y = 0 \\) and \\( y = 4 \\), giving us \\( c = 0 \\) to \\( d = 4 \\)\n\n" +
            "**Step 2: Set Up the Integral**\n\n" +
            "$V = \\int_{0}^{4} 2\\pi y (4y - y^2) \\, dy$\n\n" +
            "**Step 3: Expand**\n\n" +
            "$V = 2\\pi \\int_{0}^{4} (4y^2 - y^3) \\, dy$\n\n" +
            "**Step 4: Integrate**\n\n" +
            "$V = 2\\pi \\left[ \\frac{4y^3}{3} - \\frac{y^4}{4} \\right]_{0}^{4}$\n\n" +
            "**Step 5: Evaluate**\n\n" +
            "At \\( y = 4 \\):\n\n" +
            "$\\frac{4(4^3)}{3} - \\frac{4^4}{4} = \\frac{4(64)}{3} - \\frac{256}{4} = \\frac{256}{3} - 64$\n\n" +
            "$= \\frac{256}{3} - \\frac{192}{3} = \\frac{64}{3}$\n\n" +
            "At \\( y = 0 \\): gives 0\n\n" +
            "Therefore:\n\n" +
            "$V = 2\\pi \\cdot \\frac{64}{3} = \\frac{128\\pi}{3}$\n\n" +
            "**Answer: \\( \\frac{128\\pi}{3} \\) cubic units** (approximately 134.04 cubic units)\n\n" +
            "---\n\n" +
            "**Key Concept - Shell Method: When to Use It:**\n\n" +
            "| **Situation** | **Best Method** | **Why?** |\n" +
            "|---|---|---|\n" +
            "| Function is \\( x = g(y) \\), rotating about \\( x \\)-axis | Shell (integrate \\( dy \\)) | Avoids solving for \\( y \\) |\n" +
            "| Function is \\( y = f(x) \\), rotating about \\( y \\)-axis | Shell (integrate \\( dx \\)) | Avoids solving for \\( x \\) |\n" +
            "| Region between two curves, rotating about parallel axis | Shell often simpler | Single integral vs. washer |\n\n" +
            "**Shell Method Visualization:**\n" +
            "Imagine peeling the solid like an onion - each shell is a cylinder with:\n" +
            "- Circumference: \\( 2\\pi r \\) (where \\( r \\) is distance to axis)\n" +
            "- Height: \\( h \\) (length of the region)\n" +
            "- Thickness: \\( dr \\) or \\( dy \\) (infinitesimal)"
        },

        // Question 124: Arc Length - Perfect Square (x-based)
        {
          id: "q124",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the exact length of the curve \\( y = \\frac{x^4}{8} + \\frac{1}{4x^2} \\) from \\( x = 1 \\) to \\( x = 2 \\).",
          
          correctAnswers: [
            "33/16",
            "33 / 16",
            "(33/16)",
            "2.0625",
            "2.063",
            "≈33/16",
            "≈2.0625"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "This is another **perfect square** arc length problem - designed so \\( 1 + (y')^2 \\) simplifies beautifully.\n\n" +
            "**Arc Length Formula:**\n\n" +
            "$L = \\int_{a}^{b} \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "**Step 1: Find the Derivative**\n\n" +
            "Rewrite as \\( y = \\frac{1}{8}x^4 + \\frac{1}{4}x^{-2} \\):\n\n" +
            "$y' = \\frac{4}{8}x^3 - \\frac{2}{4}x^{-3} = \\frac{x^3}{2} - \\frac{1}{2x^3}$\n\n" +
            "**Step 2: Find \\( (y')^2 \\)**\n\n" +
            "Using \\( (a - b)^2 = a^2 - 2ab + b^2 \\):\n\n" +
            "$(y')^2 = \\left(\\frac{x^3}{2}\\right)^2 - 2\\left(\\frac{x^3}{2}\\right)\\left(\\frac{1}{2x^3}\\right) + \\left(\\frac{1}{2x^3}\\right)^2$\n\n" +
            "$(y')^2 = \\frac{x^6}{4} - \\frac{1}{2} + \\frac{1}{4x^6}$\n\n" +
            "**Step 3: Find \\( 1 + (y')^2 \\)**\n\n" +
            "$1 + (y')^2 = 1 + \\frac{x^6}{4} - \\frac{1}{2} + \\frac{1}{4x^6}$\n\n" +
            "$= \\frac{x^6}{4} + \\frac{1}{2} + \\frac{1}{4x^6}$\n\n" +
            "**Step 4: Recognize the Perfect Square**\n\n" +
            "This is \\( (a + b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\frac{x^3}{2} \\) and \\( b = \\frac{1}{2x^3} \\):\n\n" +
            "$1 + (y')^2 = \\left( \\frac{x^3}{2} + \\frac{1}{2x^3} \\right)^2$\n\n" +
            "**Step 5: Set Up and Integrate**\n\n" +
            "$L = \\int_{1}^{2} \\sqrt{\\left( \\frac{x^3}{2} + \\frac{1}{2x^3} \\right)^2} \\, dx$\n\n" +
            "The square root and square cancel:\n\n" +
            "$L = \\int_{1}^{2} \\left( \\frac{x^3}{2} + \\frac{1}{2x^3} \\right) dx$\n\n" +
            "$L = \\int_{1}^{2} \\left( \\frac{x^3}{2} + \\frac{1}{2}x^{-3} \\right) dx$\n\n" +
            "$L = \\left[ \\frac{x^4}{8} - \\frac{1}{4x^2} \\right]_{1}^{2}$\n\n" +
            "**Step 6: Evaluate**\n\n" +
            "At \\( x = 2 \\):\n\n" +
            "$\\frac{2^4}{8} - \\frac{1}{4(2^2)} = \\frac{16}{8} - \\frac{1}{16} = 2 - \\frac{1}{16} = \\frac{32 - 1}{16} = \\frac{31}{16}$\n\n" +
            "At \\( x = 1 \\):\n\n" +
            "$\\frac{1^4}{8} - \\frac{1}{4(1^2)} = \\frac{1}{8} - \\frac{1}{4} = \\frac{1 - 2}{8} = -\\frac{1}{8} = -\\frac{2}{16}$\n\n" +
            "Subtract:\n\n" +
            "$L = \\frac{31}{16} - \\left(-\\frac{2}{16}\\right) = \\frac{31 + 2}{16} = \\frac{33}{16}$\n\n" +
            "**Answer: \\( \\frac{33}{16} \\)** (approximately 2.0625)\n\n" +
            "---\n\n" +
            "**Key Concept - The Perfect Square Trick:**\n\n" +
            "Many calculus textbooks include arc length problems where \\( 1 + (y')^2 \\) is designed to be a perfect square:\n\n" +
            "| **If \\( y' \\) has form** | **Then \\( 1 + (y')^2 \\) becomes** | **Pattern** |\n" +
            "|---|---|---|\n" +
            "| \\( \\frac{x^n}{2} - \\frac{1}{2x^n} \\) | \\( \\left( \\frac{x^n}{2} + \\frac{1}{2x^n} \\right)^2 \\) | Sign flips from - to + |\n" +
            "| \\( x^n - \\frac{k}{x^n} \\) | \\( \\left( x^n + \\frac{k}{x^n} \\right)^2 \\) | Middle term changes |\n\n" +
            "**Why does the sign flip?** When \\( (a - b)^2 = a^2 - 2ab + b^2 \\) and you add 1, the \\( -2ab \\) becomes \\( +2ab \\), creating \\( (a + b)^2 \\)!"
        },

        // Question 125: Arc Length - Perfect Square (y-based)
        {
          id: "q125",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the exact length of the curve \\( x = \\frac{y^3}{3} + \\frac{1}{4y} \\) from \\( y = 1 \\) to \\( y = 3 \\).",
          
          correctAnswers: [
            "53/6",
            "53 / 6",
            "(53/6)",
            "8.833",
            "8.8333",
            "≈53/6",
            "≈8.833"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "This problem uses the arc length formula for a function of \\( y \\):\n\n" +
            "$L = \\int_{c}^{d} \\sqrt{1 + (x')^2} \\, dy$\n\n" +
            "where \\( x' = \\frac{dx}{dy} \\).\n\n" +
            "**Step 1: Find the Derivative**\n\n" +
            "$x' = \\frac{dx}{dy} = \\frac{3y^2}{3} - \\frac{1}{4y^2} = y^2 - \\frac{1}{4y^2}$\n\n" +
            "**Step 2: Find \\( (x')^2 \\)**\n\n" +
            "Using \\( (a - b)^2 = a^2 - 2ab + b^2 \\):\n\n" +
            "$(x')^2 = (y^2)^2 - 2(y^2)\\left(\\frac{1}{4y^2}\\right) + \\left(\\frac{1}{4y^2}\\right)^2$\n\n" +
            "$(x')^2 = y^4 - \\frac{1}{2} + \\frac{1}{16y^4}$\n\n" +
            "**Step 3: Find \\( 1 + (x')^2 \\)**\n\n" +
            "$1 + (x')^2 = 1 + y^4 - \\frac{1}{2} + \\frac{1}{16y^4}$\n\n" +
            "$= y^4 + \\frac{1}{2} + \\frac{1}{16y^4}$\n\n" +
            "**Step 4: Recognize the Perfect Square**\n\n" +
            "This is \\( (a + b)^2 \\) where \\( a = y^2 \\) and \\( b = \\frac{1}{4y^2} \\):\n\n" +
            "$1 + (x')^2 = \\left( y^2 + \\frac{1}{4y^2} \\right)^2$\n\n" +
            "**Step 5: Set Up and Integrate**\n\n" +
            "$L = \\int_{1}^{3} \\sqrt{\\left( y^2 + \\frac{1}{4y^2} \\right)^2} \\, dy$\n\n" +
            "$L = \\int_{1}^{3} \\left( y^2 + \\frac{1}{4}y^{-2} \\right) dy$\n\n" +
            "$L = \\left[ \\frac{y^3}{3} - \\frac{1}{4y} \\right]_{1}^{3}$\n\n" +
            "**Step 6: Evaluate**\n\n" +
            "At \\( y = 3 \\):\n\n" +
            "$\\frac{3^3}{3} - \\frac{1}{4(3)} = \\frac{27}{3} - \\frac{1}{12} = 9 - \\frac{1}{12} = \\frac{108 - 1}{12} = \\frac{107}{12}$\n\n" +
            "At \\( y = 1 \\):\n\n" +
            "$\\frac{1^3}{3} - \\frac{1}{4(1)} = \\frac{1}{3} - \\frac{1}{4} = \\frac{4 - 3}{12} = \\frac{1}{12}$\n\n" +
            "Subtract:\n\n" +
            "$L = \\frac{107}{12} - \\frac{1}{12} = \\frac{106}{12} = \\frac{53}{6}$\n\n" +
            "**Answer: \\( \\frac{53}{6} \\)** (approximately 8.833)\n\n" +
            "---\n\n" +
            "**Key Concept - Arc Length in Different Variables:**\n\n" +
            "| **Function Type** | **Formula** | **When to Use** |\n" +
            "|---|---|---|\n" +
            "| \\( y = f(x) \\) | \\( L = \\int_{a}^{b} \\sqrt{1 + (y')^2} \\, dx \\) | Function naturally given as \\( y(x) \\) |\n" +
            "| \\( x = g(y) \\) | \\( L = \\int_{c}^{d} \\sqrt{1 + (x')^2} \\, dy \\) | Function naturally given as \\( x(y) \\) |\n" +
            "| Parametric | \\( L = \\int_{t_1}^{t_2} \\sqrt{(x'(t))^2 + (y'(t))^2} \\, dt \\) | Curve given parametrically |\n\n" +
            "Notice the symmetry: the formulas are identical except for swapping \\( x \\) and \\( y \\)!"
        },

        // Question 126: Arc Length Function
        {
          id: "q126",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the arc length function \\( s(x) \\) for the curve \\( y = \\frac{2}{3}(x-1)^{3/2} \\) with the starting point \\( P_0(1, 0) \\).",
          
          correctAnswers: [
            "2(x^(3/2) - 1)/3",
            "(2/3)(x^(3/2) - 1)",
            "2(x^(3/2)-1)/3",
            "(2/3)(x^(3/2)-1)",
            "2/3*(x^(3/2) - 1)",
            "2/3*(x^(3/2)-1)",
            "(2/3)*(x^(3/2) - 1)",
            "(2x^(3/2) - 2)/3",
            "(2x^(3/2)-2)/3"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "The **arc length function** \\( s(x) \\) measures the distance along the curve from a starting point to a variable endpoint.\n\n" +
            "**Arc Length Function Formula:**\n\n" +
            "$s(x) = \\int_{a}^{x} \\sqrt{1 + [f'(t)]^2} \\, dt$\n\n" +
            "where \\( a \\) is the starting point.\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "- Starting point: \\( P_0(1, 0) \\), so \\( a = 1 \\)\n" +
            "- Function: \\( f(t) = \\frac{2}{3}(t-1)^{3/2} \\)\n\n" +
            "**Step 2: Find the Derivative**\n\n" +
            "Using the chain rule:\n\n" +
            "$f'(t) = \\frac{2}{3} \\cdot \\frac{3}{2}(t-1)^{1/2} \\cdot 1 = (t-1)^{1/2} = \\sqrt{t-1}$\n\n" +
            "**Step 3: Find \\( 1 + [f'(t)]^2 \\)**\n\n" +
            "$[f'(t)]^2 = (\\sqrt{t-1})^2 = t - 1$\n\n" +
            "$1 + [f'(t)]^2 = 1 + (t - 1) = t$\n\n" +
            "**Step 4: Set Up and Integrate**\n\n" +
            "$s(x) = \\int_{1}^{x} \\sqrt{t} \\, dt$\n\n" +
            "$s(x) = \\int_{1}^{x} t^{1/2} \\, dt$\n\n" +
            "$s(x) = \\left[ \\frac{t^{3/2}}{3/2} \\right]_{1}^{x} = \\left[ \\frac{2}{3}t^{3/2} \\right]_{1}^{x}$\n\n" +
            "**Step 5: Evaluate**\n\n" +
            "$s(x) = \\frac{2}{3}(x)^{3/2} - \\frac{2}{3}(1)^{3/2}$\n\n" +
            "$s(x) = \\frac{2}{3}x^{3/2} - \\frac{2}{3}$\n\n" +
            "$s(x) = \\frac{2}{3}(x^{3/2} - 1)$\n\n" +
            "**Answer: \\( s(x) = \\frac{2}{3}(x^{3/2} - 1) \\)**\n\n" +
            "---\n\n" +
            "**Key Concept - Arc Length Function:**\n\n" +
            "| **Property** | **Meaning** | **Example** |\n" +
            "|---|---|---|\n" +
            "| \\( s(a) = 0 \\) | Zero distance at starting point | \\( s(1) = \\frac{2}{3}(1 - 1) = 0 \\) ✓ |\n" +
            "| \\( s'(x) = \\sqrt{1 + [f'(x)]^2} \\) | Rate of arc length growth | \\( s'(x) = \\sqrt{x} \\) |\n" +
            "| \\( s(x) \\) always increasing | Moving forward along curve | \\( s'(x) > 0 \\) for \\( x > 1 \\) |\n\n" +
            "**Physical Interpretation:** If you drive along the curve starting at \\( x = 1 \\), then \\( s(x) \\) tells you how far you've traveled by the time you reach position \\( x \\).\n\n" +
            "**Verification:** At \\( x = 2 \\):\n" +
            "$s(2) = \\frac{2}{3}(2^{3/2} - 1) = \\frac{2}{3}(2\\sqrt{2} - 1) \\approx 1.219$\n\n" +
            "This is the distance traveled from \\( x = 1 \\) to \\( x = 2 \\) along the curve."
        },

        // Question 127: Surface Area about x-axis
        {
          id: "q127",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the exact area of the surface obtained by rotating the curve \\( y = \\sqrt{x} \\) from \\( x = 1 \\) to \\( x = 4 \\) about the \\( x \\)-axis.",
          
          correctAnswers: [
            "π(17√17 - 5√5)/6",
            "π(17*√17 - 5*√5)/6",
            "π(17sqrt(17) - 5sqrt(5))/6",
            "(π/6)(17√17 - 5√5)",
            "(π/6)(17*sqrt(17) - 5*sqrt(5))",
            "π*(17√17 - 5√5)/6",
            "30.85",
            "≈30.85",
            "≈π(17√17 - 5√5)/6"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.02,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "We're rotating about the \\( x \\)-axis, so we use the surface area formula:\n\n" +
            "$S = \\int_{a}^{b} 2\\pi y \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "- \\( y = \\sqrt{x} = x^{1/2} \\)\n" +
            "- \\( y' = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}} \\)\n" +
            "- Bounds: \\( a = 1, b = 4 \\)\n\n" +
            "**Step 2: Find \\( \\sqrt{1 + (y')^2} \\)**\n\n" +
            "$(y')^2 = \\left(\\frac{1}{2\\sqrt{x}}\\right)^2 = \\frac{1}{4x}$\n\n" +
            "$1 + (y')^2 = 1 + \\frac{1}{4x} = \\frac{4x + 1}{4x}$\n\n" +
            "$\\sqrt{1 + (y')^2} = \\frac{\\sqrt{4x + 1}}{2\\sqrt{x}}$\n\n" +
            "**Step 3: Set Up the Integral**\n\n" +
            "$S = \\int_{1}^{4} 2\\pi (\\sqrt{x}) \\cdot \\frac{\\sqrt{4x + 1}}{2\\sqrt{x}} \\, dx$\n\n" +
            "**Step 4: Simplify**\n\n" +
            "The \\( 2\\pi \\) and \\( 2 \\) cancel, \\( \\sqrt{x} \\) cancels:\n\n" +
            "$S = \\pi \\int_{1}^{4} \\sqrt{4x + 1} \\, dx$\n\n" +
            "**Step 5: Use u-Substitution**\n\n" +
            "- Let \\( u = 4x + 1 \\)\n" +
            "- Then \\( du = 4 \\, dx \\), so \\( dx = \\frac{du}{4} \\)\n" +
            "- When \\( x = 1 \\): \\( u = 5 \\)\n" +
            "- When \\( x = 4 \\): \\( u = 17 \\)\n\n" +
            "$S = \\pi \\int_{5}^{17} \\sqrt{u} \\cdot \\frac{du}{4} = \\frac{\\pi}{4} \\int_{5}^{17} u^{1/2} \\, du$\n\n" +
            "**Step 6: Integrate and Evaluate**\n\n" +
            "$S = \\frac{\\pi}{4} \\left[ \\frac{u^{3/2}}{3/2} \\right]_{5}^{17} = \\frac{\\pi}{4} \\cdot \\frac{2}{3} \\left[ u^{3/2} \\right]_{5}^{17}$\n\n" +
            "$S = \\frac{\\pi}{6} \\left( 17^{3/2} - 5^{3/2} \\right)$\n\n" +
            "Since \\( n^{3/2} = n\\sqrt{n} \\):\n\n" +
            "$S = \\frac{\\pi}{6} (17\\sqrt{17} - 5\\sqrt{5})$\n\n" +
            "**Answer: \\( \\frac{\\pi}{6}(17\\sqrt{17} - 5\\sqrt{5}) \\)** (approximately 30.85 square units)\n\n" +
            "---\n\n" +
            "**Key Concept - Surface Area Formula Components:**\n\n" +
            "$S = \\int_{a}^{b} 2\\pi y \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "| **Component** | **Meaning** | **Geometric Interpretation** |\n" +
            "|---|---|---|\n" +
            "| \\( 2\\pi y \\) | Circumference | Distance around the circle at height \\( y \\) |\n" +
            "| \\( \\sqrt{1 + (y')^2} \\, dx \\) | Arc length element | Slanted distance along curve |\n" +
            "| Product | Surface area element | Circumference \\( \\times \\) slant height |\n\n" +
            "**Why not just \\( 2\\pi y \\, dx \\)?** Because we need to account for the **slope** of the curve. The steeper the curve, the more surface area we generate!"
        },

        // Question 128: Surface Area about y-axis
        {
          id: "q128",
          moduleId: "ITMTB",
          weekId: "ITMTB_W5",
          type: "open-ended",
          text: "Find the exact area of the surface generated by rotating the curve \\( x = y^3 \\) from \\( y = 0 \\) to \\( y = 1 \\) about the \\( y \\)-axis.",
          
          correctAnswers: [
            "π(10√10 - 1)/27",
            "π(10*√10 - 1)/27",
            "π(10sqrt(10) - 1)/27",
            "(π/27)(10√10 - 1)",
            "(π/27)(10*sqrt(10) - 1)",
            "π*(10√10 - 1)/27",
            "3.563",
            "≈3.563",
            "≈π(10√10 - 1)/27"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.02,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "We're rotating about the \\( y \\)-axis and integrating with respect to \\( y \\):\n\n" +
            "$S = \\int_{c}^{d} 2\\pi x \\sqrt{1 + (x')^2} \\, dy$\n\n" +
            "**Step 1: Identify Components**\n\n" +
            "- \\( x = y^3 \\)\n" +
            "- \\( x' = \\frac{dx}{dy} = 3y^2 \\)\n" +
            "- Bounds: \\( c = 0, d = 1 \\)\n\n" +
            "**Step 2: Find \\( \\sqrt{1 + (x')^2} \\)**\n\n" +
            "$(x')^2 = (3y^2)^2 = 9y^4$\n\n" +
            "$\\sqrt{1 + (x')^2} = \\sqrt{1 + 9y^4}$\n\n" +
            "**Step 3: Set Up the Integral**\n\n" +
            "$S = \\int_{0}^{1} 2\\pi (y^3) \\sqrt{1 + 9y^4} \\, dy$\n\n" +
            "$S = 2\\pi \\int_{0}^{1} y^3 \\sqrt{1 + 9y^4} \\, dy$\n\n" +
            "**Step 4: Use u-Substitution**\n\n" +
            "This is perfectly set up for substitution:\n\n" +
            "- Let \\( u = 1 + 9y^4 \\)\n" +
            "- Then \\( du = 36y^3 \\, dy \\)\n" +
            "- So \\( y^3 dy = \\frac{du}{36} \\)\n\n" +
            "**Change the limits:**\n" +
            "- When \\( y = 0 \\): \\( u = 1 + 0 = 1 \\)\n" +
            "- When \\( y = 1 \\): \\( u = 1 + 9(1) = 10 \\)\n\n" +
            "**Step 5: Substitute and Integrate**\n\n" +
            "$S = 2\\pi \\int_{1}^{10} \\sqrt{u} \\cdot \\frac{du}{36}$\n\n" +
            "$S = \\frac{2\\pi}{36} \\int_{1}^{10} u^{1/2} \\, du = \\frac{\\pi}{18} \\int_{1}^{10} u^{1/2} \\, du$\n\n" +
            "$S = \\frac{\\pi}{18} \\left[ \\frac{u^{3/2}}{3/2} \\right]_{1}^{10} = \\frac{\\pi}{18} \\cdot \\frac{2}{3} \\left[ u^{3/2} \\right]_{1}^{10}$\n\n" +
            "$S = \\frac{\\pi}{27} \\left[ u^{3/2} \\right]_{1}^{10}$\n\n" +
            "**Step 6: Evaluate**\n\n" +
            "$S = \\frac{\\pi}{27} \\left( 10^{3/2} - 1^{3/2} \\right)$\n\n" +
            "$S = \\frac{\\pi}{27} (10\\sqrt{10} - 1)$\n\n" +
            "**Answer: \\( \\frac{\\pi}{27}(10\\sqrt{10} - 1) \\)** (approximately 3.563 square units)\n\n" +
            "---\n\n" +
            "**Key Concept - Surface Area About Different Axes:**\n\n" +
            "| **Axis of Rotation** | **Formula** | **Radius** | **Arc Length Element** |\n" +
            "|---|---|---|---|\n" +
            "| \\( x \\)-axis | \\( \\int 2\\pi y \\sqrt{1+(y')^2} \\, dx \\) | \\( y \\) | \\( \\sqrt{1+(y')^2} \\, dx \\) |\n" +
            "| \\( y \\)-axis | \\( \\int 2\\pi x \\sqrt{1+(x')^2} \\, dy \\) | \\( x \\) | \\( \\sqrt{1+(x')^2} \\, dy \\) |\n\n" +
            "**Pattern Recognition:** Notice how this problem is similar to q117, just with \\( x \\) and \\( y \\) swapped!\n\n" +
            "- q117: \\( y = x^3 \\) about \\( x \\)-axis → \\( \\frac{\\pi}{27}(145\\sqrt{145} - 1) \\)\n" +
            "- q128: \\( x = y^3 \\) about \\( y \\)-axis → \\( \\frac{\\pi}{27}(10\\sqrt{10} - 1) \\)\n\n" +
            "The structure is identical - only the limits differ!"
        },

        {
          id: "q129",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "Find the volume of the solid formed by rotating the region bounded by \\( y = x \\) and \\( y = \\frac{x}{2} \\) around the \\( x \\)-axis for \\( 0 \\leq x \\leq 4 \\).",
          correctAnswers: [
            "16π",
            "16*pi",
            "16π",
            "50.265",
            "50.27"
          ],
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          explanation: "**Method: Washer Method**\n\n" +
            "**Step 1: Identify the outer and inner radii**\n\n" +
            "For \\( 0 \\leq x \\leq 4 \\), the function \\( y = x \\) is above \\( y = \\frac{x}{2} \\).\n\n" +
            "- Outer radius: \\( R(x) = x \\)\n" +
            "- Inner radius: \\( r(x) = \\frac{x}{2} \\)\n\n" +
            "**Step 2: Set up the volume integral**\n\n" +
            "$$V = \\pi \\int_{0}^{4} [R(x)]^2 - [r(x)]^2 \\, dx$$\n\n" +
            "$$= \\pi \\int_{0}^{4} \\left[ x^2 - \\left(\\frac{x}{2}\\right)^2 \\right] dx$$\n\n" +
            "$$= \\pi \\int_{0}^{4} \\left( x^2 - \\frac{x^2}{4} \\right) dx$$\n\n" +
            "$$= \\pi \\int_{0}^{4} \\frac{3x^2}{4} \\, dx$$\n\n" +
            "**Step 3: Evaluate the integral**\n\n" +
            "$$= \\pi \\cdot \\frac{3}{4} \\left[ \\frac{x^3}{3} \\right]_{0}^{4}$$\n\n" +
            "$$= \\frac{3\\pi}{4} \\cdot \\frac{64}{3}$$\n\n" +
            "$$= 16\\pi$$\n\n" +
            "**Answer: \\( 16\\pi \\approx 50.27 \\) cubic units**"
        },

        {
          id: "q130",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "Find the volume of the solid formed when the region between \\( y = x^2 \\) and \\( y = 4 \\) is rotated about the \\( y \\)-axis.",
          correctAnswers: [
            "16π",
            "16*pi",
            "16π",
            "50.265",
            "50.27"
          ],
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          explanation: "**Method: Cylindrical Shells**\n\n" +
            "**Step 1: Find the bounds**\n\n" +
            "The curves intersect when \\( x^2 = 4 \\), so \\( x = \\pm 2 \\).\n\n" +
            "**Step 2: Set up the shell formula**\n\n" +
            "For rotation about the \\( y \\)-axis:\n" +
            "- Radius = \\( x \\)\n" +
            "- Height = \\( 4 - x^2 \\)\n\n" +
            "By symmetry, we can integrate from 0 to 2 and double:\n\n" +
            "$$V = 2 \\cdot 2\\pi \\int_{0}^{2} x(4 - x^2) \\, dx$$\n\n" +
            "$$= 4\\pi \\int_{0}^{2} (4x - x^3) \\, dx$$\n\n" +
            "**Step 3: Evaluate the integral**\n\n" +
            "$$= 4\\pi \\left[ 2x^2 - \\frac{x^4}{4} \\right]_{0}^{2}$$\n\n" +
            "$$= 4\\pi \\left( 8 - 4 \\right)$$\n\n" +
            "$$= 4\\pi \\cdot 4 = 16\\pi$$\n\n" +
            "**Answer: \\( 16\\pi \\approx 50.27 \\) cubic units**"
        },

        {
          id: "q131",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "Find the exact length of the curve \\( y = (x+4)^{3/2} \\) for \\( 0 \\leq x \\leq 4 \\).",
          correctAnswers: [
            "(8/27)(19^(3/2) - 10^(3/2))",
            "8/27*(19^(3/2) - 10^(3/2))",
            "(8/27)(19^1.5 - 10^1.5)",
            "10.5",
            "10.50"
          ],
          options: {
            allowSymbolic: true,
            tolerance: 0.05,
            acceptedUnits: [],
            requiredUnit: null
          },
          explanation: "**Arc Length Formula:**\n\n" +
            "$$L = \\int_{a}^{b} \\sqrt{1 + (y')^2} \\, dx$$\n\n" +
            "**Step 1: Find the derivative**\n\n" +
            "$$y' = \\frac{3}{2}(x+4)^{1/2}$$\n\n" +
            "$$[y']^2 = \\frac{9}{4}(x+4)$$\n\n" +
            "**Step 2: Set up the arc length integral**\n\n" +
            "$$L = \\int_{0}^{4} \\sqrt{1 + \\frac{9}{4}(x+4)} \\, dx$$\n\n" +
            "$$= \\int_{0}^{4} \\sqrt{\\frac{9x}{4} + 10} \\, dx$$\n\n" +
            "**Step 3: Use substitution**\n\n" +
            "Let \\( u = \\frac{9x}{4} + 10 \\), then \\( du = \\frac{9}{4}dx \\), so \\( dx = \\frac{4}{9}du \\)\n\n" +
            "When \\( x = 0 \\): \\( u = 10 \\)\n\n" +
            "When \\( x = 4 \\): \\( u = 19 \\)\n\n" +
            "$$L = \\frac{4}{9} \\int_{10}^{19} u^{1/2} \\, du$$\n\n" +
            "$$= \\frac{4}{9} \\cdot \\frac{2}{3} \\left[ u^{3/2} \\right]_{10}^{19}$$\n\n" +
            "$$= \\frac{8}{27} \\left( 19^{3/2} - 10^{3/2} \\right)$$\n\n" +
            "**Answer: \\( \\displaystyle \\frac{8}{27}(19^{3/2} - 10^{3/2}) \\approx 10.50 \\) units**"
        },

        {
          id: "q132",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "multiple-choice",
          text: "The curve \\( xy = 4 \\) for \\( 1 \\leq x \\leq 8 \\) is rotated about the \\( y \\)-axis. Set up an integral **with respect to \\( x \\)** for the area of the resulting surface.",
          options: [
            "A. \\( \\displaystyle 2\\pi \\int_{1}^{8} x\\sqrt{1 + \\frac{16}{x^4}} \\, dx \\)",
            "B. \\( \\displaystyle 2\\pi \\int_{1}^{8} \\frac{4}{x}\\sqrt{1 + \\frac{16}{x^4}} \\, dx \\)",
            "C. \\( \\displaystyle 2\\pi \\int_{1}^{8} x\\sqrt{1 + \\frac{4}{x^2}} \\, dx \\)",
            "D. \\( \\displaystyle 2\\pi \\int_{1}^{8} \\sqrt{x^2 + \\frac{16}{x^2}} \\, dx \\)"
          ],
          correctAnswers: ["A"],
          explanation: "**Surface Area Formula for Rotation about the \\( y \\)-axis:**\n\n" +
            "$S = 2\\pi \\int_{a}^{b} x \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "**Step 1: Express \\( y \\) as a function of \\( x \\)**\n\n" +
            "From \\( xy = 4 \\), we get:\n\n" +
            "$y = \\frac{4}{x}$\n\n" +
            "**Step 2: Find the derivative**\n\n" +
            "$\\frac{dy}{dx} = -\\frac{4}{x^2}$\n\n" +
            "$\\left(\\frac{dy}{dx}\\right)^2 = \\frac{16}{x^4}$\n\n" +
            "**Step 3: Set up the surface area integral**\n\n" +
            "For rotation about the \\( y \\)-axis, the radius is \\( x \\):\n\n" +
            "$S = 2\\pi \\int_{1}^{8} x \\sqrt{1 + \\frac{16}{x^4}} \\, dx$\n\n" +
            "**Why other options are wrong:**\n\n" +
            "- **Option B** uses \\( y = \\frac{4}{x} \\) as the radius, but we need \\( x \\) for rotation about the \\( y \\)-axis\n" +
            "- **Option C** has the wrong derivative squared: \\( (y')^2 \\neq \\frac{4}{x^2} \\)\n" +
            "- **Option D** doesn't follow the surface area formula structure\n\n" +
            "**Answer: A**"
        },

        {
          id: "q133",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "multiple-choice",
          text: "Question q132 continued: Set up the same surface area integral **with respect to \\( y \\)** instead.",
          options: [
            "A. \\( \\displaystyle 2\\pi \\int_{1/2}^{4} \\frac{4}{y}\\sqrt{1 + \\frac{16}{y^4}} \\, dy \\)",
            "B. \\( \\displaystyle 2\\pi \\int_{4}^{1/2} y\\sqrt{1 + \\frac{16}{y^4}} \\, dy \\)",
            "C. \\( \\displaystyle 2\\pi \\int_{1/2}^{4} y\\sqrt{1 + \\frac{4}{y^2}} \\, dy \\)",
            "D. \\( \\displaystyle 2\\pi \\int_{1}^{8} \\frac{4}{y}\\sqrt{1 + \\frac{16}{y^2}} \\, dy \\)"
          ],
          correctAnswers: ["A"],
          explanation: "**Surface Area Formula for Rotation about the \\( y \\)-axis (in terms of \\( y \\)):**\n\n" +
            "$S = 2\\pi \\int_{c}^{d} x \\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2} \\, dy$\n\n" +
            "**Step 1: Express \\( x \\) as a function of \\( y \\)**\n\n" +
            "From \\( xy = 4 \\):\n\n" +
            "$x = \\frac{4}{y}$\n\n" +
            "**Step 2: Find the bounds in terms of \\( y \\)**\n\n" +
            "When \\( x = 1 \\): \\( y = 4 \\)\n\n" +
            "When \\( x = 8 \\): \\( y = \\frac{1}{2} \\)\n\n" +
            "So we integrate from \\( y = \\frac{1}{2} \\) to \\( y = 4 \\) (lower to upper bound)\n\n" +
            "**Step 3: Find the derivative**\n\n" +
            "$\\frac{dx}{dy} = -\\frac{4}{y^2}$\n\n" +
            "$\\left(\\frac{dx}{dy}\\right)^2 = \\frac{16}{y^4}$\n\n" +
            "**Step 4: Set up the surface area integral**\n\n" +
            "The radius is \\( x = \\frac{4}{y} \\):\n\n" +
            "$S = 2\\pi \\int_{1/2}^{4} \\frac{4}{y} \\sqrt{1 + \\frac{16}{y^4}} \\, dy$\n\n" +
            "**Why other options are wrong:**\n\n" +
            "- **Option B** has wrong bounds order and uses \\( y \\) instead of \\( x = \\frac{4}{y} \\) as the radius\n" +
            "- **Option C** uses \\( y \\) as radius (wrong) and has incorrect derivative squared\n" +
            "- **Option D** has wrong bounds (should be in \\( y \\), not \\( x \\)) and wrong derivative\n\n" +
            "**Answer: A**"
        },

        {
          id: "q134",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "Use the arc length formula to find the length of the curve \\( y = 3 - 2x \\) from \\( x = -1 \\) to \\( x = 3 \\).",
          image: {
            src: "/images/ITMTB_Week 6_Quiz 2_Question 1.png",
            alt: "Graph showing the linear function y = 3 - 2x from x = -1 to x = 3",
            caption: "The straight line y = 3 - 2x on the given interval"
          },
          correctAnswers: [
            "4√5",
            "4*sqrt(5)",
            "4√5",
            "8.944",
            "8.94"
          ],
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          explanation: "**Arc Length Formula:**\n\n" +
            "$L = \\int_{a}^{b} \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "**Step 1: Find the derivative**\n\n" +
            "For \\( y = 3 - 2x \\):\n\n" +
            "$y' = -2$\n\n" +
            "**Step 2: Set up the arc length integral**\n\n" +
            "$L = \\int_{-1}^{3} \\sqrt{1 + (-2)^2} \\, dx$\n\n" +
            "$= \\int_{-1}^{3} \\sqrt{1 + 4} \\, dx$\n\n" +
            "$= \\int_{-1}^{3} \\sqrt{5} \\, dx$\n\n" +
            "**Step 3: Evaluate**\n\n" +
            "$L = \\sqrt{5} \\cdot [x]_{-1}^{3}$\n\n" +
            "$= \\sqrt{5} \\cdot (3 - (-1))$\n\n" +
            "$= 4\\sqrt{5}$\n\n" +
            "**Verification:** This is a straight line, so we can use the distance formula:\n\n" +
            "$d = \\sqrt{(3-(-1))^2 + ((3-2(3))-(3-2(-1)))^2} = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5}$ ✓\n\n" +
            "**Answer: \\( 4\\sqrt{5} \\approx 8.94 \\) units**"
        },

        {
          id: "q135",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "multiple-choice",
          text: "Set up, but do not evaluate, an integral for the length of the curve \\( y = x^3 \\) from \\( x = 0 \\) to \\( x = 2 \\).",
          options: [            
            "A. \\( \\displaystyle \\int_{0}^{2} \\sqrt{1 + 3x^2} \\, dx \\)",
            "B. \\( \\displaystyle \\int_{0}^{2} \\sqrt{1 + 9x^2} \\, dx \\)",
            "C. \\( \\displaystyle \\int_{0}^{2} \\sqrt{1 + x^6} \\, dx \\)",
            "D. \\( \\displaystyle \\int_{0}^{2} \\sqrt{1 + 9x^4} \\, dx \\)"
          ],
          correctAnswers: ["D"],
          explanation: "**Arc Length Formula:**\n\n" +
            "$L = \\int_{a}^{b} \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "**Step 1: Find the derivative**\n\n" +
            "For \\( y = x^3 \\):\n\n" +
            "$y' = 3x^2$\n\n" +
            "**Step 2: Square the derivative**\n\n" +
            "$(y')^2 = (3x^2)^2 = 9x^4$\n\n" +
            "**Step 3: Set up the integral**\n\n" +
            "$L = \\int_{0}^{2} \\sqrt{1 + 9x^4} \\, dx$\n\n" +
            "**Why other options are wrong:**\n\n" +
            "- **Option B**: Uses \\( 3x^2 \\) instead of \\( (3x^2)^2 = 9x^4 \\) — forgot to square!\n" +
            "- **Option C**: Incorrectly simplifies to \\( 9x^2 \\) instead of \\( 9x^4 \\)\n" +
            "- **Option D**: Uses \\( x^6 \\) which doesn't match \\( (3x^2)^2 = 9x^4 \\)\n\n" +
            "**Note:** This integral cannot be evaluated using elementary functions and would require numerical methods.\n\n" +
            "**Answer: A**"
        },

        {
          id: "q136",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "multiple-choice",
          text: "Set up, but do not evaluate, an integral for the length of the curve \\( y = e^x \\) from \\( x = 1 \\) to \\( x = 3 \\).",
          options: [            
            "A. \\( \\displaystyle \\int_{1}^{3} \\sqrt{1 + e^x} \\, dx \\)",
            "B. \\( \\displaystyle \\int_{1}^{3} \\sqrt{1 + e^{2x}} \\, dx \\)",
            "C. \\( \\displaystyle \\int_{1}^{3} \\sqrt{e^{2x} + 1} \\, dx \\)",
            "D. \\( \\displaystyle \\int_{1}^{3} (1 + e^x) \\, dx \\)"
          ],
          correctAnswers: ["B"],
          explanation: "**Arc Length Formula:**\n\n" +
            "$L = \\int_{a}^{b} \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "**Step 1: Find the derivative**\n\n" +
            "For \\( y = e^x \\):\n\n" +
            "$y' = e^x$\n\n" +
            "**Step 2: Square the derivative**\n\n" +
            "$(y')^2 = (e^x)^2 = e^{2x}$\n\n" +
            "**Step 3: Set up the integral**\n\n" +
            "$L = \\int_{1}^{3} \\sqrt{1 + e^{2x}} \\, dx$\n\n" +
            "**Why other options are wrong:**\n\n" +
            "- **Option B**: Uses \\( e^x \\) instead of \\( (e^x)^2 = e^{2x} \\) — forgot to square the derivative!\n" +
            "- **Option C**: Same as A (just reordered), but this would be correct too. However, standard form is \\( 1 + e^{2x} \\)\n" +
            "- **Option D**: Missing the square root entirely!\n\n" +
            "**Note:** This integral also cannot be expressed in terms of elementary functions and requires numerical methods for evaluation.\n\n" +
            "**Answer: A** (Note: C is mathematically equivalent but A follows standard convention)"
        },

        {
          id: "q137",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "Find the exact length of the curve \\( 36y^2 = (x^2 - 4)^3 \\) for \\( 2 \\leq x \\leq 3 \\), where \\( y \\geq 0 \\).",
          correctAnswers: [
            "13/6",
            "2.167",
            "2.17"
          ],
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          explanation: "**Step 1: Solve for \\( y \\) (positive branch)**\n\n" +
            "$$36y^2 = (x^2 - 4)^3$$\n\n" +
            "$$y = \\frac{(x^2 - 4)^{3/2}}{6}$$\n\n" +
            "**Step 2: Find the derivative**\n\n" +
            "$$y' = \\frac{1}{6} \\cdot \\frac{3}{2}(x^2 - 4)^{1/2} \\cdot 2x$$\n\n" +
            "$$= \\frac{x}{2}(x^2 - 4)^{1/2}$$\n\n" +
            "**Step 3: Square the derivative**\n\n" +
            "$$(y')^2 = \\frac{x^2}{4}(x^2 - 4) = \\frac{x^4 - 4x^2}{4}$$\n\n" +
            "**Step 4: Simplify \\( 1 + (y')^2 \\)**\n\n" +
            "$$1 + (y')^2 = \\frac{4 + x^4 - 4x^2}{4} = \\frac{x^4 - 4x^2 + 4}{4}$$\n\n" +
            "$$= \\frac{(x^2 - 2)^2}{4}$$\n\n" +
            "$$\\sqrt{1 + (y')^2} = \\frac{x^2 - 2}{2}$$ (since \\( x \\geq 2 \\), this is positive)\n\n" +
            "**Step 5: Evaluate the arc length**\n\n" +
            "$$L = \\int_{2}^{3} \\frac{x^2 - 2}{2} \\, dx$$\n\n" +
            "$$= \\frac{1}{2} \\left[ \\frac{x^3}{3} - 2x \\right]_{2}^{3}$$\n\n" +
            "At \\( x = 3 \\): \\( \\frac{27}{3} - 6 = 9 - 6 = 3 \\)\n\n" +
            "At \\( x = 2 \\): \\( \\frac{8}{3} - 4 = \\frac{8 - 12}{3} = -\\frac{4}{3} \\)\n\n" +
            "$$L = \\frac{1}{2} \\left( 3 - \\left(-\\frac{4}{3}\\right) \\right)$$\n\n" +
            "$$= \\frac{1}{2} \\cdot \\frac{13}{3} = \\frac{13}{6}$$\n\n" +
            "**Answer: \\( \\displaystyle \\frac{13}{6} \\approx 2.17 \\) units**"
        },

        {
          id: "q138",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "Find the exact length of the curve \\( y = \\ln(\\cos x) \\) for \\( 0 \\leq x \\leq \\pi/3 \\).",
          correctAnswers: [
            "ln(2 + √3)",
            "ln(2 + sqrt(3))",
            "ln(2+√3)",
            "1.317",
            "1.32"
          ],
          options: {
            allowSymbolic: true,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          explanation: "**Step 1: Find the derivative**\n\n" +
            "For \\( y = \\ln(\\cos x) \\):\n\n" +
            "$$y' = \\frac{-\\sin x}{\\cos x} = -\\tan x$$\n\n" +
            "**Step 2: Use the trigonometric identity**\n\n" +
            "$$(y')^2 = \\tan^2 x$$\n\n" +
            "$$1 + (y')^2 = 1 + \\tan^2 x = \\sec^2 x$$\n\n" +
            "**Step 3: Set up the arc length integral**\n\n" +
            "$$L = \\int_{0}^{\\pi/3} \\sqrt{\\sec^2 x} \\, dx$$\n\n" +
            "$$= \\int_{0}^{\\pi/3} \\sec x \\, dx$$ (positive on this interval)\n\n" +
            "**Step 4: Evaluate using the standard integral**\n\n" +
            "$$L = \\left[ \\ln|\\sec x + \\tan x| \\right]_{0}^{\\pi/3}$$\n\n" +
            "At \\( x = \\frac{\\pi}{3} \\):\n" +
            "- \\( \\sec\\left(\\frac{\\pi}{3}\\right) = 2 \\)\n" +
            "- \\( \\tan\\left(\\frac{\\pi}{3}\\right) = \\sqrt{3} \\)\n" +
            "- Value: \\( \\ln(2 + \\sqrt{3}) \\)\n\n" +
            "At \\( x = 0 \\):\n" +
            "- \\( \\sec(0) = 1 \\), \\( \\tan(0) = 0 \\)\n" +
            "- Value: \\( \\ln(1) = 0 \\)\n\n" +
            "$$L = \\ln(2 + \\sqrt{3}) - 0 = \\ln(2 + \\sqrt{3})$$\n\n" +
            "**Answer: \\( \\ln(2 + \\sqrt{3}) \\approx 1.32 \\) units**"
        },

        {
          id: "q139",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "Find the length of the arc of the curve \\( x^2 = (y - 4)^3 \\) from point \\( P(1, 5) \\) to point \\( Q(8, 8) \\).",
          correctAnswers: [
            "(8/27)*10^(3/2) - (1/27)*13^(3/2)",
            "8.203",
            "8.20"
          ],
          options: {
            allowSymbolic: true,
            tolerance: 0.05,
            acceptedUnits: [],
            requiredUnit: null
          },
          explanation: "**Step 1: Express \\( x \\) as a function of \\( y \\)**\n\n" +
            "From \\( x^2 = (y - 4)^3 \\), taking the positive branch:\n\n" +
            "$$x = (y - 4)^{3/2}$$\n\n" +
            "**Step 2: Find \\( \\frac{dx}{dy} \\)**\n\n" +
            "$$\\frac{dx}{dy} = \\frac{3}{2}(y - 4)^{1/2}$$\n\n" +
            "$$\\left(\\frac{dx}{dy}\\right)^2 = \\frac{9}{4}(y - 4)$$\n\n" +
            "**Step 3: Identify the \\( y \\)-bounds**\n\n" +
            "At \\( P(1, 5) \\): \\( y = 5 \\)\n\n" +
            "At \\( Q(8, 8) \\): \\( y = 8 \\)\n\n" +
            "**Step 4: Set up the arc length integral**\n\n" +
            "$L = \\int_{5}^{8} \\sqrt{1 + \\frac{9}{4}(y - 4)} \\, dy$\n\n" +
            "$= \\int_{5}^{8} \\sqrt{\\frac{9y}{4} - 8} \\, dy$\n\n" +
            "**Step 5: Use substitution**\n\n" +
            "Let \\( u = \\frac{9y}{4} - 8 \\), then \\( du = \\frac{9}{4}dy \\)\n\n" +
            "When \\( y = 5 \\): \\( u = \\frac{45}{4} - 8 = \\frac{13}{4} \\)\n\n" +
            "When \\( y = 8 \\): \\( u = \\frac{72}{4} - 8 = 10 \\)\n\n" +
            "$L = \\frac{4}{9} \\int_{13/4}^{10} u^{1/2} \\, du$\n\n" +
            "$= \\frac{4}{9} \\cdot \\frac{2}{3} \\left[ u^{3/2} \\right]_{13/4}^{10}$\n\n" +
            "$= \\frac{8}{27} \\left( 10^{3/2} - \\left(\\frac{13}{4}\\right)^{3/2} \\right)$\n\n" +
            "$= \\frac{8}{27} \\cdot 10^{3/2} - \\frac{8}{27} \\cdot \\frac{13^{3/2}}{8}$\n\n" +
            "$= \\frac{8}{27} \\cdot 10^{3/2} - \\frac{1}{27} \\cdot 13^{3/2}$\n\n" +
            "**Answer: \\( \\displaystyle \\frac{8}{27}\\cdot 10^{3/2} - \\frac{1}{27}\\cdot 13^{3/2} \\approx 8.20 \\) units**"
        },

        {
          id: "q140",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "Find the perimeter (total length) of the astroid \\( x^{2/3} + y^{2/3} = 1 \\).",
          image: {
            src: "/images/ITMTB_Week 6_Quiz 3_Question 2.png",
            alt: "Graph of the astroid curve x^(2/3) + y^(2/3) = 1",
            caption: "The astroid curve, which has four-fold symmetry."
          },
          correctAnswers: [
            "6",
            "6.0"
          ],
          options: {
            "allowSymbolic": false,
            "tolerance": 0.01,
            "acceptedUnits": [],
            "requiredUnit": null
          },
          explanation: "**Step 1: Use parametric representation**\n\n" +
            "The astroid can be parameterized as:\n\n" +
            "$x = \\cos^3 t, \\quad y = \\sin^3 t, \\quad 0 \\leq t \\leq 2\\pi$\n\n" +
            "**Step 2: Find the derivatives**\n\n" +
            "$\\frac{dx}{dt} = -3\\cos^2 t \\sin t$\n\n" +
            "$\\frac{dy}{dt} = 3\\sin^2 t \\cos t$\n\n" +
            "**Step 3: Calculate the arc length element**\n\n" +
            "$\\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}$\n\n" +
            "$= \\sqrt{9\\cos^4 t \\sin^2 t + 9\\sin^4 t \\cos^2 t}$\n\n" +
            "$= 3|\\sin t \\cos t| \\sqrt{\\cos^2 t + \\sin^2 t}$\n\n" +
            "$= 3|\\sin t \\cos t|$\n\n" +
            "**Step 4: Use symmetry**\n\n" +
            "The astroid has 4-fold symmetry. In the first quadrant (\\( 0 \\leq t \\leq \\frac{\\pi}{2} \\)):\n\n" +
            "$L_{quarter} = \\int_{0}^{\\pi/2} 3\\sin t \\cos t \\, dt$\n\n" +
            "$= \\frac{3}{2} \\int_{0}^{\\pi/2} \\sin(2t) \\, dt$\n\n" +
            "$= \\frac{3}{2} \\left[ -\\frac{1}{2}\\cos(2t) \\right]_{0}^{\\pi/2}$\n\n" +
            "$= \\frac{3}{2} \\cdot \\frac{1}{2} \\cdot 2 = \\frac{3}{2}$\n\n" +
            "**Step 5: Calculate total perimeter**\n\n" +
            "$L = 4 \\times \\frac{3}{2} = 6$\n\n" +
            "**Answer: 6 units**"
        },
        {
          id: "q141",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "multiple-choice",
          text: "Find the arc length function \\( s(x) \\) for the curve \\( y = 2x^{3/2} \\) with starting point \\( P_0(1, 2) \\). This means \\( s(x) \\) represents the arc length from \\( x = 1 \\) to any point \\( x \\).",
          options: [            
            "A. \\( s(x) = \\frac{2}{3} \\left[ (1+9x)^{3/2} - 10^{3/2} \\right] \\)",
            "B. \\( s(x) = \\frac{2}{27} \\left[ (1+9x)^{3/2} - 1 \\right] \\)",
            "C. \\( s(x) = \\frac{2}{27} \\left[ (1+9x)^{3/2} - 10^{3/2} \\right] \\)",
            "D. \\( s(x) = \\frac{2}{27} \\left[ (1+9x)^{3/2} - 10 \\right] \\)"
          ],
          correctAnswers: ["C"],
          explanation: "**Arc Length Function:** \\( s(x) = \\int_{1}^{x} \\sqrt{1 + [f'(t)]^2} \\, dt \\)\n\n" +
            "**Step 1: Find the derivative**\n\n" +
            "For \\( y = 2x^{3/2} \\):\n\n" +
            "$y' = 2 \\cdot \\frac{3}{2}x^{1/2} = 3x^{1/2}$\n\n" +
            "**Step 2: Square the derivative**\n\n" +
            "$(y')^2 = 9x$\n\n" +
            "**Step 3: Set up the arc length function**\n\n" +
            "$s(x) = \\int_{1}^{x} \\sqrt{1 + 9t} \\, dt$\n\n" +
            "**Step 4: Evaluate the integral**\n\n" +
            "Let \\( u = 1 + 9t \\), then \\( du = 9dt \\), so \\( dt = \\frac{1}{9}du \\)\n\n" +
            "$s(x) = \\frac{1}{9} \\int_{1+9(1)}^{1+9x} u^{1/2} \\, du$\n\n" +
            "$= \\frac{1}{9} \\cdot \\frac{2}{3} \\left[ u^{3/2} \\right]_{10}^{1+9x}$\n\n" +
            "$= \\frac{2}{27} \\left[ (1+9x)^{3/2} - 10^{3/2} \\right]$\n\n" +
            "**Verification:** At \\( x = 1 \\): \\( s(1) = \\frac{2}{27}(10^{3/2} - 10^{3/2}) = 0 \\) ✓\n\n" +
            "**Answer: A** (\\( \\displaystyle s(x) = \\frac{2}{27}\\left[(1+9x)^{3/2} - 10^{3/2}\\right] \\))\n\n" +
            "**Why other options are wrong:**\n\n" +
            "- **Option B**: Forgot the \\( 1/9 \\) coefficient from the u-substitution.\n" +
            "- **Option C**: Used the wrong starting point (\\( x=0 \\) instead of \\( x=1 \\), which would make the lower limit \\( 1 \\)).\n" +
            "- **Option D**: Incorrectly evaluated the lower bound \\( 10^{3/2} \\) as \\( 10 \\)."
        },

        {
          id: "q142",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "open-ended",
          text: "A hawk drops its prey, which follows the parabolic trajectory \\( y = 180 - \\frac{x^2}{45} \\) until it hits the ground. Calculate the distance traveled by the prey from the time it is dropped (at the vertex) until it hits the ground. Express your answer in exact form.",
          correctAnswers: [
            "45√17 + (45/4)ln(4+√17)",
            "45*sqrt(17) + 45/4*ln(4+sqrt(17))",
            "196.52",
            "196.5"
          ],
          options: {
            allowSymbolic: true,
            tolerance: 0.5,
            acceptedUnits: [],
            requiredUnit: null
          },
          explanation: "**Step 1: Find where the prey hits the ground**\n\n" +
            "Set \\( y = 0 \\):\n\n" +
            "$0 = 180 - \\frac{x^2}{45}$\n\n" +
            "$x^2 = 8100$\n\n" +
            "$x = \\pm 90$\n\n" +
            "The prey is dropped at \\( x = 0 \\) and travels to \\( x = 90 \\) (using the positive side).\n\n" +
            "**Step 2: Find the derivative**\n\n" +
            "$y' = -\\frac{2x}{45}$\n\n" +
            "$(y')^2 = \\frac{4x^2}{2025}$\n\n" +
            "**Step 3: Set up the arc length integral**\n\n" +
            "$L = \\int_{0}^{90} \\sqrt{1 + \\frac{4x^2}{2025}} \\, dx$\n\n" +
            "$= \\int_{0}^{90} \\sqrt{1 + \\left(\\frac{2x}{45}\\right)^2} \\, dx$\n\n" +
            "**Step 4: Use the standard integral formula**\n\n" +
            "For \\( \\int \\sqrt{1 + a^2x^2} \\, dx \\) with \\( a = \\frac{2}{45} \\):\n\n" +
            "$\\int \\sqrt{1 + a^2x^2} \\, dx = \\frac{x}{2}\\sqrt{1+a^2x^2} + \\frac{1}{2a}\\ln\\left|ax + \\sqrt{1+a^2x^2}\\right| + C$\n\n" +
            "**Step 5: Evaluate at the bounds**\n\n" +
            "At \\( x = 90 \\):\n" +
            "- \\( \\frac{2(90)}{45} = 4 \\)\n" +
            "- \\( \\sqrt{1 + 16} = \\sqrt{17} \\)\n" +
            "- First term: \\( \\frac{90}{2}\\sqrt{17} = 45\\sqrt{17} \\)\n" +
            "- Second term: \\( \\frac{45}{4}\\ln(4 + \\sqrt{17}) \\)\n\n" +
            "At \\( x = 0 \\): both terms equal 0\n\n" +
            "$L = 45\\sqrt{17} + \\frac{45}{4}\\ln(4 + \\sqrt{17})$\n\n" +
            "**Answer: \\( \\displaystyle 45\\sqrt{17} + \\frac{45}{4}\\ln(4 + \\sqrt{17}) \\approx 196.5 \\) units**"
        },

        {
          id: "q143",
          moduleId: "ITMTB",
          weekId: "ITMTB_W6",
          type: "multiple-choice",
          text: "The curve \\( y = \\sqrt[3]{x} \\) for \\( 1 \\leq x \\leq 8 \\) is rotated about the \\( x \\)-axis. Set up an integral for the area of the resulting surface by integrating with respect to \\( x \\).",
          options: [
            "A. \\( 2\\pi \\int_{1}^{8} x^{1/3} \\sqrt{1 + \\frac{1}{9x^{4/3}}} \\, dx \\)",
            "B. \\( 2\\pi \\int_{1}^{8} x^{1/3} \\sqrt{1 + \\frac{1}{3}x^{-2/3}} \\, dx \\)",
            "C. \\( 2\\pi \\int_{1}^{8} \\sqrt{1 + \\frac{1}{9x^{4/3}}} \\, dx \\)",
            "D. \\( 2\\pi \\int_{1}^{8} x \\sqrt{1 + \\frac{1}{9x^{4/3}}} \\, dx \\)"
          ],
          correctAnswers: [
            "A"
          ],
          explanation: "**Surface Area Formula for Rotation about the \\( x \\)-axis:**\n\n" +
            "$S = 2\\pi \\int_{a}^{b} y \\sqrt{1 + (y')^2} \\, dx$\n\n" +
            "**Step 1: Express \\( y \\) and find its derivative**\n\n" +
            "$y = \\sqrt[3]{x} = x^{1/3}$\n\n" +
            "$y' = \\frac{1}{3}x^{-2/3}$\n\n" +
            "**Step 2: Square the derivative**\n\n" +
            "$(y')^2 = \\left( \\frac{1}{3}x^{-2/3} \\right)^2 = \\frac{1}{9}x^{-4/3} = \\frac{1}{9x^{4/3}}$\n\n" +
            "**Step 3: Set up the surface area integral**\n\n" +
            "Plug \\( y = x^{1/3} \\) and \\( (y')^2 = \\frac{1}{9x^{4/3}} \\) into the formula:\n\n" +
            "$S = 2\\pi \\int_{1}^{8} x^{1/3} \\sqrt{1 + \\frac{1}{9x^{4/3}}} \\, dx$\n\n" +
            "**Answer: A**\n\n" +
            "**Why other options are wrong:**\n\n" +
            "- **Option B**: Uses \\( y' \\) instead of \\( (y')^2 \\) inside the square root.\n" +
            "- **Option C**: This is the formula for arc length (multiplied by \\( 2\\pi \\)), not surface area. It's missing the radius function \\( y = x^{1/3} \\) outside the square root.\n" +
            "- **Option D**: This would be the integral for rotation about the \\( y \\)-axis, which uses \\( x \\) as the radius, not \\( y \\)."
        },
        // ============================================================
        {
          id: "q144",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the first-order linear ODE using the integrating factor method:\n\n" +
            "$$\\frac{dy}{dx} + 2y = e^{-x}$$\n\n" +
            "Express your answer in the form \\( y = ... \\) (include the constant \\( C \\)).",
          
          correctAnswers: [
            "e^(-x) + Ce^(-2x)",
            "e^(-x) + C*e^(-2x)",
            "Ce^(-2x) + e^(-x)",
            "C*e^(-2x) + e^(-x)",
            "e^-x + Ce^-2x",
            "e^-x + C*e^-2x"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Identify the standard form**\n\n" +
            "The equation is already in standard form:\n\n" +
            "$$\\frac{dy}{dx} + P(x)y = Q(x)$$\n\n" +
            "where \\( P(x) = 2 \\) and \\( Q(x) = e^{-x} \\).\n\n" +
            "**Step 2: Find the integrating factor**\n\n" +
            "$$I(x) = e^{\\int P(x)\\,dx} = e^{\\int 2\\,dx} = e^{2x}$$\n\n" +
            "**Step 3: Multiply the entire equation by \\( I(x) \\)**\n\n" +
            "$$e^{2x}\\frac{dy}{dx} + 2e^{2x}y = e^{2x} \\cdot e^{-x} = e^{x}$$\n\n" +
            "The left side is now the derivative of a product:\n\n" +
            "$$\\frac{d}{dx}\\left(e^{2x}y\\right) = e^{x}$$\n\n" +
            "**Step 4: Integrate both sides**\n\n" +
            "$$e^{2x}y = \\int e^{x}\\,dx = e^{x} + C$$\n\n" +
            "**Step 5: Solve for \\( y \\)**\n\n" +
            "$$y = e^{-2x}(e^{x} + C) = e^{-x} + Ce^{-2x}$$\n\n" +
            "**Answer: \\( y = e^{-x} + Ce^{-2x} \\)**\n\n" +
            "---\n\n" +
            "**Key Concept - Integrating Factor Method:**\n\n" +
            "| **Step** | **Action** |\n" +
            "|---|---|\n" +
            "| 1. Standard form | Write as \\( \\frac{dy}{dx} + P(x)y = Q(x) \\) |\n" +
            "| 2. Integrating factor | Compute \\( I(x) = e^{\\int P(x)\\,dx} \\) |\n" +
            "| 3. Multiply | Multiply equation by \\( I(x) \\) |\n" +
            "| 4. Recognize product | Left side becomes \\( \\frac{d}{dx}[I(x)y] \\) |\n" +
            "| 5. Integrate | \\( I(x)y = \\int I(x)Q(x)\\,dx + C \\) |\n" +
            "| 6. Solve for y | Divide by \\( I(x) \\) |"
        },

        // ============================================================
        // QUESTION 145: Integrating Factor with Initial Condition
        // ============================================================
        {
          id: "q145",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the initial value problem using the integrating factor method:\n\n" +
            "$$\\frac{dy}{dx} + \\frac{1}{x}y = \\frac{\\sin x}{x}, \\quad x > 0$$\n\n" +
            "with \\( y(\\pi) = 0 \\).\n\n" +
            "Express your answer as \\( y = ... \\) (no constant \\( C \\) needed).",
          
          correctAnswers: [
            "-(cos(x)+1)/x",
            "-(cos x + 1)/x",
            "(-cos(x)-1)/x",
            "(-cos x - 1)/x",
            "(-(cos(x)+1))/x",
            "(-(cos x + 1))/x",
            "-(1+cos(x))/x",
            "-(1+cos x)/x"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Identify \\( P(x) \\) and find integrating factor**\n\n" +
            "Standard form: \\( \\frac{dy}{dx} + \\frac{1}{x}y = \\frac{\\sin x}{x} \\)\n\n" +
            "Here \\( P(x) = \\frac{1}{x} \\), so:\n\n" +
            "$$I(x) = e^{\\int (1/x)\\,dx} = e^{ln[x]} = x$$\n\n" +
            "**Step 2: Multiply equation by \\( I(x) = x \\)**\n\n" +
            "$$x\\frac{dy}{dx} + y = \\sin x$$\n\n" +
            "The left side is \\( \\frac{d}{dx}(xy) \\).\n\n" +
            "**Step 3: Integrate both sides**\n\n" +
            "$$xy = \\int \\sin x\\,dx = -\\cos x + C$$\n\n" +
            "Thus:\n\n" +
            "$$y = \\frac{-\\cos x + C}{x}$$\n\n" +
            "**Step 4: Apply initial condition \\( y(\\pi) = 0 \\)**\n\n" +
            "$$0 = \\frac{-\\cos(\\pi) + C}{\\pi} = \\frac{-(-1) + C}{\\pi} = \\frac{1 + C}{\\pi}$$\n\n" +
            "This gives \\( 1 + C = 0 \\), so \\( C = -1 \\).\n\n" +
            "**Step 5: Substitute \\( C = -1 \\)**\n\n" +
            "$$y = \\frac{-\\cos x - 1}{x} = \\frac{-(\\cos x + 1)}{x}$$\n\n" +
            "**Answer: \\( y = -\\frac{\\cos x + 1}{x} \\)**"
        },

        // ============================================================
        // QUESTION 146: Separable ODE with Initial Condition
        // ============================================================
        {
          id: "q146",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the separable ODE:\n\n" +
            "$$\\frac{dy}{dx} = xy^2, \\quad y(0) = 1$$\n\n" +
            "Express your answer as \\( y = ... \\) (no constant \\( C \\)).",
          
          correctAnswers: [
            "1/(1 - x^2/2)",
            "1/(1 - x^(2)/2)",
            "1/(1 - (x^2)/2)",
            "2/(2 - x^2)",
            "2/(2 - x^(2))"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Separate variables**\n\n" +
            "$$\\frac{dy}{y^2} = x\\,dx$$\n\n" +
            "**Step 2: Integrate both sides**\n\n" +
            "Left side:\n\n" +
            "$$\\int y^{-2}\\,dy = -y^{-1} = -\\frac{1}{y}$$\n\n" +
            "Right side:\n\n" +
            "$$\\int x\\,dx = \\frac{x^2}{2} + C$$\n\n" +
            "So:\n\n" +
            "$$-\\frac{1}{y} = \\frac{x^2}{2} + C$$\n\n" +
            "**Step 3: Solve for \\( y \\)**\n\n" +
            "$$\\frac{1}{y} = -\\frac{x^2}{2} - C$$\n\n" +
            "**Step 4: Apply initial condition \\( y(0) = 1 \\)**\n\n" +
            "$$\\frac{1}{1} = -0 - C \\quad \\Rightarrow \\quad C = -1$$\n\n" +
            "**Step 5: Substitute and simplify**\n\n" +
            "$$\\frac{1}{y} = -\\frac{x^2}{2} + 1 = 1 - \\frac{x^2}{2}$$\n\n" +
            "$$y = \\frac{1}{1 - \\frac{x^2}{2}}$$\n\n" +
            "This can also be written as:\n\n" +
            "$$y = \\frac{2}{2 - x^2}$$\n\n" +
            "**Answer: \\( y = \\frac{1}{1 - \\frac{x^2}{2}} \\)** (valid where denominator ≠ 0)"
        },

        // ============================================================
        // QUESTION 147: Separable ODE - Another Type
        // ============================================================
        {
          id: "q147",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the separable ODE:\n\n" +
            "$$\\frac{dy}{dx} = \\frac{2x}{y}, \\quad y(1) = 2$$\n\n" +
            "Express your answer as \\( y = ... \\) (take the positive square root).",
          
          correctAnswers: [
            "sqrt(2x^2 + 2)",
            "√(2x^2 + 2)",
            "sqrt(2x^(2) + 2)",
            "√(2x^(2) + 2)",
            "(2x^2 + 2)^(1/2)",
            "(2x^(2) + 2)^(1/2)"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Separate variables**\n\n" +
            "$$y\\,dy = 2x\\,dx$$\n\n" +
            "**Step 2: Integrate both sides**\n\n" +
            "$$\\int y\\,dy = \\int 2x\\,dx$$\n\n" +
            "$$\\frac{y^2}{2} = x^2 + C$$\n\n" +
            "**Step 3: Multiply by 2**\n\n" +
            "$$y^2 = 2x^2 + 2C$$\n\n" +
            "Let \\( C_1 = 2C \\), so:\n\n" +
            "$$y^2 = 2x^2 + C_1$$\n\n" +
            "**Step 4: Apply initial condition \\( y(1) = 2 \\)**\n\n" +
            "$$4 = 2(1)^2 + C_1 = 2 + C_1$$\n\n" +
            "$$C_1 = 2$$\n\n" +
            "**Step 5: Solve for \\( y \\)**\n\n" +
            "$$y^2 = 2x^2 + 2$$\n\n" +
            "Since \\( y(1) = 2 > 0 \\), we take the positive root:\n\n" +
            "$$y = \\sqrt{2x^2 + 2}$$\n\n" +
            "**Answer: \\( y = \\sqrt{2x^2 + 2} \\)**"
        },

        // ============================================================
        // QUESTION 148: Separable ODE with Integration by Parts
        // ============================================================
        {
          id: "q148",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the separable ODE:\n\n" +
            "$$\\frac{dy}{dx} = \\frac{xe^x}{y}, \\quad y(0) = 2$$\n\n" +
            "Express your answer as \\( y = ... \\) (take the positive square root).",
          
          correctAnswers: [
            "sqrt(2((x-1)e^x + 3))",
            "√(2((x-1)e^x + 3))",
            "sqrt(2((x-1)*e^x + 3))",
            "√(2((x-1)*e^x + 3))",
            "(2((x-1)e^x + 3))^(1/2)",
            "(2((x-1)*e^x + 3))^(1/2)"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Separate variables**\n\n" +
            "$$y\\,dy = xe^x\\,dx$$\n\n" +
            "**Step 2: Integrate left side**\n\n" +
            "$$\\int y\\,dy = \\frac{y^2}{2}$$\n\n" +
            "**Step 3: Integrate right side using integration by parts**\n\n" +
            "For \\( \\int xe^x\\,dx \\), let:\n" +
            "- \\( u = x \\), \\( dv = e^x\\,dx \\)\n" +
            "- \\( du = dx \\), \\( v = e^x \\)\n\n" +
            "$$\\int xe^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + C = (x-1)e^x + C$$\n\n" +
            "**Step 4: Combine results**\n\n" +
            "$$\\frac{y^2}{2} = (x-1)e^x + C$$\n\n" +
            "**Step 5: Apply initial condition \\( y(0) = 2 \\)**\n\n" +
            "$$\\frac{4}{2} = (0-1)e^0 + C = -1 + C$$\n\n" +
            "$$2 = -1 + C \\quad \\Rightarrow \\quad C = 3$$\n\n" +
            "**Step 6: Solve for \\( y \\)**\n\n" +
            "$$\\frac{y^2}{2} = (x-1)e^x + 3$$\n\n" +
            "$$y^2 = 2\\left((x-1)e^x + 3\\right)$$\n\n" +
            "Since \\( y(0) = 2 > 0 \\), take positive root:\n\n" +
            "$$y = \\sqrt{2\\left((x-1)e^x + 3\\right)}$$\n\n" +
            "**Answer: \\( y = \\sqrt{2\\big((x-1)e^x + 3\\big)} \\)**"
        },

        // ============================================================
        // QUESTION 149: Radioactive Decay - General Solution
        // ============================================================
        {
          id: "q149",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "A radioactive substance decays according to:\n\n" +
            "$$\\frac{dN}{dt} = -\\lambda N$$\n\n" +
            "where \\( \\lambda = 0.1 \\) day\\(^{-1}\\) and \\( N(0) = 1000 \\).\n\n" +
            "Find \\( N(t) \\). Express your answer in the form \\( N(t) = ... \\)",
          
          correctAnswers: [
            "1000e^(-0.1t)",
            "1000*e^(-0.1t)",
            "1000*e^(-0.1*t)",
            "1000e^(-0.1*t)"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Recognize as separable ODE**\n\n" +
            "$$\\frac{dN}{dt} = -\\lambda N$$\n\n" +
            "**Step 2: Separate variables**\n\n" +
            "$$\\frac{dN}{N} = -\\lambda\\,dt$$\n\n" +
            "**Step 3: Integrate both sides**\n\n" +
            "$$\\int \\frac{dN}{N} = \\int -\\lambda\\,dt$$\n\n" +
            "$$\\ln[N] = -\\lambda t + C$$\n\n" +
            "**Step 4: Exponentiate**\n\n" +
            "$$N = e^{-\\lambda t + C} = e^C \\cdot e^{-\\lambda t}$$\n\n" +
            "Let \\( N_0 = e^C \\), so:\n\n" +
            "$$N(t) = N_0 e^{-\\lambda t}$$\n\n" +
            "**Step 5: Apply initial condition \\( N(0) = 1000 \\)**\n\n" +
            "$$1000 = N_0 e^0 = N_0$$\n\n" +
            "**Step 6: Substitute values**\n\n" +
            "With \\( \\lambda = 0.1 \\) day\\(^{-1}\\):\n\n" +
            "$$N(t) = 1000e^{-0.1t}$$\n\n" +
            "**Answer: \\( N(t) = 1000e^{-0.1t} \\)**\n\n" +
            "---\n\n" +
            "**Application Note:** This is the exponential decay model used for:\n" +
            "- Radioactive decay\n" +
            "- Drug concentration in bloodstream\n" +
            "- Population decline\n" +
            "- Capacitor discharge"
        },

        // ============================================================
        // QUESTION 150: Radioactive Decay - Half-life Calculation
        // ============================================================
        {
          id: "q150",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "**Question 149 continued:**\n\n" +
            "Using the decay model \\( N(t) = 1000e^{-0.1t} \\), find the half-life \\( t_{1/2} \\) (the time when \\( N = 500 \\)).\n\n" +
            "Round your answer to 2 decimal places and include units.",
          
          correctAnswers: [
            "6.93 days",
            "6.93days",
            "≈6.93 days",
            "6.93 day",
            "6.93day"
          ],
          
          options: {
            allowSymbolic: false,
            tolerance: 0.02,
            acceptedUnits: ["days", "day"],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Set up half-life equation**\n\n" +
            "At half-life, \\( N(t_{1/2}) = \\frac{N_0}{2} \\):\n\n" +
            "$$500 = 1000e^{-0.1t_{1/2}}$$\n\n" +
            "**Step 2: Divide both sides by 1000**\n\n" +
            "$$\\frac{1}{2} = e^{-0.1t_{1/2}}$$\n\n" +
            "**Step 3: Take natural logarithm**\n\n" +
            "$$\\ln\\left(\\frac{1}{2}\\right) = -0.1t_{1/2}$$\n\n" +
            "$$-\\ln(2) = -0.1t_{1/2}$$\n\n" +
            "**Step 4: Solve for \\( t_{1/2} \\)**\n\n" +
            "$$t_{1/2} = \\frac{\\ln(2)}{0.1} = \\frac{0.693147}{0.1} = 6.93147\\text{ days}$$\n\n" +
            "**Answer: \\( t_{1/2} \\approx 6.93 \\) days**\n\n" +
            "---\n\n" +
            "**General Half-Life Formula:**\n\n" +
            "For exponential decay \\( N(t) = N_0e^{-\\lambda t} \\):\n\n" +
            "$$t_{1/2} = \\frac{\\ln(2)}{\\lambda}$$\n\n" +
            "This shows half-life is inversely proportional to the decay constant."
        },

        // ============================================================
        // QUESTION 151: Newton's Law of Cooling
        // ============================================================
        {
          id: "q151",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Newton's law of cooling states:\n\n" +
            "$$\\frac{dT}{dt} = -k(T - T_a)$$\n\n" +
            "where \\( T_a = 20°C \\) (ambient temperature), \\( T(0) = 90°C \\) (initial temperature), and \\( k = 0.03 \\) min\\(^{-1}\\).\n\n" +
            "Find the temperature after 10 minutes, \\( T(10) \\). Round to 2 decimal places.",
          
          correctAnswers: [
            "71.86 °C",
            "71.86°C",
            "71.86 C",
            "71.86C",
            "≈71.86 °C",
            "71.85 °C",
            "71.85°C"
          ],
          
          options: {
            allowSymbolic: false,
            tolerance: 0.05,
            acceptedUnits: ["°C", "C"],
            requiredUnit: null
          },
          
          explanation: "**Step 1: General solution for Newton's cooling**\n\n" +
            "The solution to \\( \\frac{dT}{dt} = -k(T - T_a) \\) is:\n\n" +
            "$$T(t) = T_a + (T_0 - T_a)e^{-kt}$$\n\n" +
            "**Step 2: Substitute known values**\n\n" +
            "- \\( T_a = 20°C \\)\n" +
            "- \\( T_0 = T(0) = 90°C \\)\n" +
            "- \\( k = 0.03 \\) min\\(^{-1}\\)\n\n" +
            "$$T(t) = 20 + (90 - 20)e^{-0.03t} = 20 + 70e^{-0.03t}$$\n\n" +
            "**Step 3: Calculate \\( T(10) \\)**\n\n" +
            "$$T(10) = 20 + 70e^{-0.03(10)} = 20 + 70e^{-0.3}$$\n\n" +
            "**Step 4: Evaluate \\( e^{-0.3} \\)**\n\n" +
            "$$e^{-0.3} \\approx 0.740818$$\n\n" +
            "**Step 5: Calculate final temperature**\n\n" +
            "$$T(10) = 20 + 70(0.740818) = 20 + 51.857 = 71.857°C$$\n\n" +
            "**Answer: \\( T(10) \\approx 71.86°C \\)**\n\n" +
            "---\n\n" +
            "**Physical Interpretation:**\n\n" +
            "The temperature decays exponentially from 90°C toward the ambient temperature of 20°C. After 10 minutes, it has cooled to approximately 72°C."
        },

        // ============================================================
        // QUESTION 152: RL Circuit Current
        // ============================================================
        {
          id: "q152",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "An RL circuit is governed by:\n\n" +
            "$$L\\frac{di}{dt} + Ri = E$$\n\n" +
            "where \\( L = 2 \\) H (inductance), \\( R = 4 \\) Ω (resistance), \\( E = 10 \\) V (constant voltage), and \\( i(0) = 0 \\) A.\n\n" +
            "Find the current as a function of time: \\( i(t) = ... \\)",
          
          correctAnswers: [
            "(5/2)(1 - e^(-2t))",
            "(5/2)*(1 - e^(-2t))",
            "2.5(1 - e^(-2t))",
            "2.5*(1 - e^(-2t))",
            "(5/2)(1 - e^(-2*t))",
            "2.5(1 - e^(-2*t))"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Divide by \\( L \\) to get standard form**\n\n" +
            "$$\\frac{di}{dt} + \\frac{R}{L}i = \\frac{E}{L}$$\n\n" +
            "Substitute values:\n\n" +
            "$$\\frac{di}{dt} + \\frac{4}{2}i = \\frac{10}{2}$$\n\n" +
            "$$\\frac{di}{dt} + 2i = 5$$\n\n" +
            "**Step 2: Find integrating factor**\n\n" +
            "$$I(t) = e^{\\int 2\\,dt} = e^{2t}$$\n\n" +
            "**Step 3: Multiply equation by \\( e^{2t} \\)**\n\n" +
            "$$e^{2t}\\frac{di}{dt} + 2e^{2t}i = 5e^{2t}$$\n\n" +
            "Left side is \\( \\frac{d}{dt}(e^{2t}i) \\):\n\n" +
            "$$\\frac{d}{dt}(e^{2t}i) = 5e^{2t}$$\n\n" +
            "**Step 4: Integrate**\n\n" +
            "$$e^{2t}i = \\int 5e^{2t}\\,dt = \\frac{5}{2}e^{2t} + C$$\n\n" +
            "**Step 5: Solve for \\( i \\)**\n\n" +
            "$$i(t) = \\frac{5}{2} + Ce^{-2t}$$\n\n" +
            "**Step 6: Apply \\( i(0) = 0 \\)**\n\n" +
            "$$0 = \\frac{5}{2} + C \\quad \\Rightarrow \\quad C = -\\frac{5}{2}$$\n\n" +
            "**Step 7: Final solution**\n\n" +
            "$i(t) = \\frac{5}{2} - \\frac{5}{2}e^{-2t} = \\frac{5}{2}\\left(1 - e^{-2t}\\right)$\n\n" +
            "Or: \\( i(t) = 2.5(1 - e^{-2t}) \\) A\n\n" +
            "**Answer: \\( i(t) = \\frac{5}{2}(1 - e^{-2t}) \\) A**\n\n" +
            "---\n\n" +
            "**Physical Interpretation:**\n\n" +
            "| **Quantity** | **Value** |\n" +
            "|---|---|\n" +
            "| Steady-state current | \\( \\frac{E}{R} = \\frac{10}{4} = 2.5 \\) A |\n" +
            "| Time constant | \\( \\tau = \\frac{L}{R} = \\frac{2}{4} = 0.5 \\) s |\n" +
            "| Decay rate | \\( \\frac{1}{\\tau} = 2 \\) s\\(^{-1}\\) |\n\n" +
            "The current rises exponentially from 0 to the steady-state value of 2.5 A."
        },

        // ============================================================
        // QUESTION 153: Linear ODE with Polynomial RHS
        // ============================================================
        {
          id: "q153",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the initial value problem:\n\n" +
            "$\\frac{dy}{dx} + 3y = x, \\quad y(0) = 2$\n\n" +
            "Express your answer as \\( y = ... \\) (no constant \\( C \\)).",
          
          correctAnswers: [
            "x/3 - 1/9 + (19/9)e^(-3x)",
            "x/3 - 1/9 + (19/9)*e^(-3x)",
            "(x/3) - (1/9) + (19/9)e^(-3x)",
            "(x/3) - (1/9) + (19/9)*e^(-3x)",
            "x/3 - 1/9 + 19e^(-3x)/9",
            "x/3 - 1/9 + 19*e^(-3x)/9"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Identify \\( P(x) \\) and find integrating factor**\n\n" +
            "Standard form: \\( \\frac{dy}{dx} + 3y = x \\)\n\n" +
            "Here \\( P(x) = 3 \\), so:\n\n" +
            "$I(x) = e^{\\int 3\\,dx} = e^{3x}$\n\n" +
            "**Step 2: Multiply equation by \\( e^{3x} \\)**\n\n" +
            "$e^{3x}\\frac{dy}{dx} + 3e^{3x}y = xe^{3x}$\n\n" +
            "Left side: \\( \\frac{d}{dx}(e^{3x}y) \\)\n\n" +
            "**Step 3: Integrate right side by parts**\n\n" +
            "$\\int xe^{3x}\\,dx$\n\n" +
            "Let \\( u = x \\), \\( dv = e^{3x}dx \\):\n" +
            "- \\( du = dx \\)\n" +
            "- \\( v = \\frac{1}{3}e^{3x} \\)\n\n" +
            "$\\int xe^{3x}\\,dx = \\frac{x}{3}e^{3x} - \\int \\frac{1}{3}e^{3x}\\,dx$\n\n" +
            "$= \\frac{x}{3}e^{3x} - \\frac{1}{9}e^{3x} + C = \\frac{e^{3x}}{3}\\left(x - \\frac{1}{3}\\right) + C$\n\n" +
            "**Step 4: General solution**\n\n" +
            "$e^{3x}y = \\frac{e^{3x}}{3}\\left(x - \\frac{1}{3}\\right) + C$\n\n" +
            "Divide by \\( e^{3x} \\):\n\n" +
            "$y = \\frac{x}{3} - \\frac{1}{9} + Ce^{-3x}$\n\n" +
            "**Step 5: Apply \\( y(0) = 2 \\)**\n\n" +
            "$2 = 0 - \\frac{1}{9} + C$\n\n" +
            "$C = 2 + \\frac{1}{9} = \\frac{18 + 1}{9} = \\frac{19}{9}$\n\n" +
            "**Answer: \\( y = \\frac{x}{3} - \\frac{1}{9} + \\frac{19}{9}e^{-3x} \\)**"
        },

        // ============================================================
        // QUESTION 154: Separable with Power of x
        // ============================================================
        {
          id: "q154",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the separable ODE:\n\n" +
            "$\\frac{dy}{dx} = \\frac{3y}{x}, \\quad y(1) = 4, \\quad x > 0$\n\n" +
            "Express your answer as \\( y = ... \\)",
          
          correctAnswers: [
            "4x^3",
            "4*x^3",
            "4x^(3)",
            "4*x^(3)"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Separate variables**\n\n" +
            "$\\frac{dy}{y} = \\frac{3}{x}\\,dx$\n\n" +
            "**Step 2: Integrate both sides**\n\n" +
            "$\\int \\frac{dy}{y} = \\int \\frac{3}{x}\\,dx$\n\n" +
            "$\\ln|y| = 3\\ln|x| + C$\n\n" +
            "**Step 3: Simplify using logarithm properties**\n\n" +
            "$\\ln|y| = \\ln(x^3) + C$\n\n" +
            "**Step 4: Exponentiate**\n\n" +
            "$|y| = e^{\\ln(x^3) + C} = e^C \\cdot x^3$\n\n" +
            "Let \\( C_1 = e^C \\), so:\n\n" +
            "$y = C_1 x^3$\n\n" +
            "**Step 5: Apply \\( y(1) = 4 \\)**\n\n" +
            "$4 = C_1(1)^3 = C_1$\n\n" +
            "**Answer: \\( y = 4x^3 \\)**\n\n" +
            "---\n\n" +
            "**Key Pattern:** When you have \\( \\frac{dy}{dx} = \\frac{ky}{x} \\), the solution is \\( y = Cx^k \\)."
        },

        // ============================================================
        // QUESTION 155: Linear ODE with Trigonometric Terms
        // ============================================================
        {
          id: "q155",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the initial value problem:\n\n" +
            "$\\frac{dy}{dx} + y\\tan x = \\sin x, \\quad y(0) = 0, \\quad -\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$\n\n" +
            "Express your answer as \\( y = ... \\) (no constant).",
          
          correctAnswers: [
            "-cos(x)*ln(cos(x))",
            "-cos(x)*ln(cos x)",
            "-cos x*ln(cos x)",
            "-cos(x)ln(cos(x))",
            "-cos(x)ln(cos x)",
            "-cos x ln(cos x)"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Identify \\( P(x) \\) and find integrating factor**\n\n" +
            "Here \\( P(x) = \\tan x \\).\n\n" +
            "$I(x) = e^{\\int \\tan x\\,dx}$\n\n" +
            "Recall: \\( \\int \\tan x\\,dx = -\\ln|\\cos x| \\)\n\n" +
            "$I(x) = e^{-\\ln|\\cos x|} = e^{\\ln|\\cos x|^{-1}} = \\frac{1}{\\cos x}$\n\n" +
            "**Step 2: Multiply equation by \\( \\frac{1}{\\cos x} \\)**\n\n" +
            "$\\frac{1}{\\cos x}\\frac{dy}{dx} + y\\frac{\\tan x}{\\cos x} = \\frac{\\sin x}{\\cos x}$\n\n" +
            "$\\frac{1}{\\cos x}\\frac{dy}{dx} + y\\frac{\\sin x}{\\cos^2 x} = \\tan x$\n\n" +
            "Left side is \\( \\frac{d}{dx}\\left(\\frac{y}{\\cos x}\\right) \\).\n\n" +
            "**Step 3: Integrate both sides**\n\n" +
            "$\\frac{y}{\\cos x} = \\int \\tan x\\,dx = -\\ln|\\cos x| + C$\n\n" +
            "**Step 4: Solve for \\( y \\)**\n\n" +
            "$y = \\cos x(-\\ln|\\cos x| + C)$\n\n" +
            "For \\( -\\frac{\\pi}{2} < x < \\frac{\\pi}{2} \\), \\( \\cos x > 0 \\), so:\n\n" +
            "$y = \\cos x(-\\ln(\\cos x) + C)$\n\n" +
            "**Step 5: Apply \\( y(0) = 0 \\)**\n\n" +
            "$0 = \\cos(0)(-\\ln(\\cos 0) + C) = 1 \\cdot (-\\ln(1) + C) = 0 + C$\n\n" +
            "So \\( C = 0 \\).\n\n" +
            "**Answer: \\( y = -\\cos x \\ln(\\cos x) \\)**"
        },

        // ============================================================
        // QUESTION 156: Separable with Arctan
        // ============================================================
        {
          id: "q156",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the separable ODE:\n\n" +
            "$\\frac{dy}{dx} = \\frac{y}{1 + x^2}, \\quad y(0) = 3$\n\n" +
            "Express your answer as \\( y = ... \\)",
          
          correctAnswers: [
            "3e^(tan⁻¹(x))",
            "3*e^(tan⁻¹(x))",
            "3e^(arctan(x))",
            "3*e^(arctan(x))",
            "3*e^(tan^(-1)(x))",
            "3e^(tan^(-1)(x))"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Separate variables**\n\n" +
            "$\\frac{dy}{y} = \\frac{dx}{1 + x^2}$\n\n" +
            "**Step 2: Integrate both sides**\n\n" +
            "Left side:\n\n" +
            "$\\int \\frac{dy}{y} = \\ln|y|$\n\n" +
            "Right side (standard integral):\n\n" +
            "$\\int \\frac{dx}{1 + x^2} = \\arctan(x) + C$\n\n" +
            "**Step 3: Combine**\n\n" +
            "$\\ln|y| = \\arctan(x) + C$\n\n" +
            "**Step 4: Exponentiate**\n\n" +
            "$|y| = e^{\\arctan(x) + C} = e^C \\cdot e^{\\arctan(x)}$\n\n" +
            "Let \\( C_1 = e^C \\), so:\n\n" +
            "$y = C_1 e^{\\arctan(x)}$\n\n" +
            "**Step 5: Apply \\( y(0) = 3 \\)**\n\n" +
            "$3 = C_1 e^{\\arctan(0)} = C_1 e^0 = C_1$\n\n" +
            "**Answer: \\( y = 3e^{\\arctan(x)} \\)**\n\n" +
            "---\n\n" +
            "**Note:** You can also write this as \\( y = 3e^{\\tan^{-1}(x)} \\)."
        },

        // ============================================================
        // QUESTION 157: Linear ODE with x in Denominator
        // ============================================================
        {
          id: "q157",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the initial value problem:\n\n" +
            "$\\frac{dy}{dx} + \\frac{2}{x}y = x^2, \\quad x > 0, \\quad y(1) = 0$\n\n" +
            "Express your answer as \\( y = ... \\) (no constant).",
          
          correctAnswers: [
            "x^3/5 - 1/(5x^2)",
            "x^(3)/5 - 1/(5x^(2))",
            "(x^3)/5 - 1/(5x^2)",
            "(x^(3))/5 - 1/(5x^(2))",
            "x^3/5 - 1/(5*x^2)",
            "(x^3)/5 - 1/(5*x^2)"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Identify \\( P(x) \\) and find integrating factor**\n\n" +
            "Here \\( P(x) = \\frac{2}{x} \\).\n\n" +
            "$I(x) = e^{\\int \\frac{2}{x}\\,dx} = e^{2\\ln x} = e^{\\ln x^2} = x^2$\n\n" +
            "**Step 2: Multiply equation by \\( x^2 \\)**\n\n" +
            "$x^2\\frac{dy}{dx} + 2xy = x^4$\n\n" +
            "Left side is \\( \\frac{d}{dx}(x^2 y) \\).\n\n" +
            "**Step 3: Integrate**\n\n" +
            "$x^2 y = \\int x^4\\,dx = \\frac{x^5}{5} + C$\n\n" +
            "**Step 4: Solve for \\( y \\)**\n\n" +
            "$y = \\frac{x^5}{5x^2} + \\frac{C}{x^2} = \\frac{x^3}{5} + Cx^{-2}$\n\n" +
            "**Step 5: Apply \\( y(1) = 0 \\)**\n\n" +
            "$0 = \\frac{1}{5} + C$\n\n" +
            "$C = -\\frac{1}{5}$\n\n" +
            "**Answer: \\( y = \\frac{x^3}{5} - \\frac{1}{5x^2} \\)**"
        },

        // ============================================================
        // QUESTION 158: Separable - Numerical Evaluation
        // ============================================================
        {
          id: "q158",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "Solve the separable ODE:\n\n" +
            "$\\frac{dy}{dx} = x^2 y^2, \\quad y(0) = 1$\n\n" +
            "Then evaluate \\( y(0.5) \\). Round to 5 decimal places.",
          
          correctAnswers: [
            "1.04348",
            "≈1.04348",
            "1.04347",
            "1.0435"
          ],
          
          options: {
            allowSymbolic: false,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Separate variables**\n\n" +
            "$\\frac{dy}{y^2} = x^2\\,dx$\n\n" +
            "**Step 2: Integrate both sides**\n\n" +
            "$\\int y^{-2}\\,dy = \\int x^2\\,dx$\n\n" +
            "$-y^{-1} = \\frac{x^3}{3} + C$\n\n" +
            "$-\\frac{1}{y} = \\frac{x^3}{3} + C$\n\n" +
            "**Step 3: Solve for \\( y \\)**\n\n" +
            "$\\frac{1}{y} = -\\frac{x^3}{3} - C$\n\n" +
            "**Step 4: Apply \\( y(0) = 1 \\)**\n\n" +
            "$\\frac{1}{1} = -0 - C \\quad \\Rightarrow \\quad C = -1$\n\n" +
            "**Step 5: Substitute \\( C = -1 \\)**\n\n" +
            "$\\frac{1}{y} = -\\frac{x^3}{3} + 1 = 1 - \\frac{x^3}{3}$\n\n" +
            "$y = \\frac{1}{1 - \\frac{x^3}{3}}$\n\n" +
            "**Step 6: Evaluate at \\( x = 0.5 \\)**\n\n" +
            "$1 - \\frac{(0.5)^3}{3} = 1 - \\frac{0.125}{3} = 1 - 0.041667 = 0.958333$\n\n" +
            "$y(0.5) = \\frac{1}{0.958333} \\approx 1.04348$\n\n" +
            "**Answer: \\( y(0.5) \\approx 1.04348 \\)**"
        },

        // ============================================================
        // QUESTION 159: Logistic Growth Model - General Solution
        // ============================================================
        {
          id: "q159",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "A population grows according to the logistic model:\n\n" +
            "$\\frac{dy}{dt} = ry\\left(1 - \\frac{y}{K}\\right)$\n\n" +
            "with \\( r = 1 \\), \\( K = 10 \\) (carrying capacity), and \\( y(0) = 1 \\).\n\n" +
            "Find the general solution \\( y(t) = ... \\)",
          
          correctAnswers: [
            "10e^t/(9 + e^t)",
            "10*e^t/(9 + e^t)",
            "10e^(t)/(9 + e^(t))",
            "10*e^(t)/(9 + e^(t))"
          ],
          
          options: {
            allowSymbolic: true,
            tolerance: 0.001,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Separate variables**\n\n" +
            "$\\frac{dy}{y\\left(1 - \\frac{y}{K}\\right)} = r\\,dt$\n\n" +
            "With \\( K = 10 \\):\n\n" +
            "$\\frac{dy}{y\\left(1 - \\frac{y}{10}\\right)} = dt$\n\n" +
            "**Step 2: Rewrite left side**\n\n" +
            "$1 - \\frac{y}{10} = \\frac{10 - y}{10}$\n\n" +
            "So:\n\n" +
            "$\\frac{dy}{y \\cdot \\frac{10-y}{10}} = \\frac{10\\,dy}{y(10-y)} = dt$\n\n" +
            "**Step 3: Partial fractions**\n\n" +
            "$\\frac{10}{y(10-y)} = \\frac{A}{y} + \\frac{B}{10-y}$\n\n" +
            "Multiply by \\( y(10-y) \\):\n\n" +
            "$10 = A(10-y) + By$\n\n" +
            "Let \\( y = 0 \\): \\( 10 = 10A \\Rightarrow A = 1 \\)\n\n" +
            "Let \\( y = 10 \\): \\( 10 = 10B \\Rightarrow B = 1 \\)\n\n" +
            "So:\n\n" +
            "$\\frac{10}{y(10-y)} = \\frac{1}{y} + \\frac{1}{10-y}$\n\n" +
            "**Step 4: Integrate**\n\n" +
            "$\\int \\left(\\frac{1}{y} + \\frac{1}{10-y}\\right)dy = \\int dt$\n\n" +
            "$\\ln|y| - \\ln|10-y| = t + C$\n\n" +
            "$\\ln\\left|\\frac{y}{10-y}\\right| = t + C$\n\n" +
            "**Step 5: Exponentiate**\n\n" +
            "$\\frac{y}{10-y} = C_1 e^t$\n\n" +
            "**Step 6: Solve for \\( y \\)**\n\n" +
            "$y = (10-y)C_1 e^t$\n\n" +
            "$y(1 + C_1 e^t) = 10C_1 e^t$\n\n" +
            "$y = \\frac{10C_1 e^t}{1 + C_1 e^t}$\n\n" +
            "**Step 7: Apply \\( y(0) = 1 \\)**\n\n" +
            "$1 = \\frac{10C_1}{1 + C_1}$\n\n" +
            "$1 + C_1 = 10C_1$\n\n" +
            "$1 = 9C_1 \\quad \\Rightarrow \\quad C_1 = \\frac{1}{9}$\n\n" +
            "**Step 8: Substitute and simplify**\n\n" +
            "$y(t) = \\frac{10 \\cdot \\frac{1}{9} e^t}{1 + \\frac{1}{9}e^t} = \\frac{\\frac{10}{9}e^t}{1 + \\frac{1}{9}e^t}$\n\n" +
            "Multiply numerator and denominator by 9:\n\n" +
            "$y(t) = \\frac{10e^t}{9 + e^t}$\n\n" +
            "**Answer: \\( y(t) = \\frac{10e^t}{9 + e^t} \\)**"
        },

        // ============================================================
        // QUESTION 160: Logistic Growth - Numerical Evaluation
        // ============================================================
        {
          id: "q160",
          moduleId: "ITMTB",
          weekId: "ITMTB_W7",
          type: "open-ended",
          text: "**Question 159 continued:**\n\n" +
            "Using the logistic model \\( y(t) = \\frac{10e^t}{9 + e^t} \\), evaluate the population at \\( t = 2 \\).\n\n" +
            "Round to 3 decimal places.",
          
          correctAnswers: [
            "4.507",
            "≈4.507",
            "4.51"
          ],
          
          options: {
            allowSymbolic: false,
            tolerance: 0.01,
            acceptedUnits: [],
            requiredUnit: null
          },
          
          explanation: "**Step 1: Substitute \\( t = 2 \\) into the solution**\n\n" +
            "$y(2) = \\frac{10e^2}{9 + e^2}$\n\n" +
            "**Step 2: Evaluate \\( e^2 \\)**\n\n" +
            "$e^2 \\approx 7.389056$\n\n" +
            "**Step 3: Calculate numerator**\n\n" +
            "$10 \\times 7.389056 = 73.89056$\n\n" +
            "**Step 4: Calculate denominator**\n\n" +
            "$9 + 7.389056 = 16.389056$\n\n" +
            "**Step 5: Divide**\n\n" +
            "$y(2) = \\frac{73.89056}{16.389056} \\approx 4.507$\n\n" +
            "**Answer: \\( y(2) \\approx 4.507 \\)**\n\n" +
            "---\n\n" +
            "**Logistic Growth Behavior:**\n\n" +
            "| **Time** | **Population** | **% of Capacity** |\n" +
            "|---|---|---|\n" +
            "| \\( t = 0 \\) | 1 | 10% |\n" +
            "| \\( t = 2 \\) | 4.507 | 45% |\n" +
            "| \\( t \\to \\infty \\) | 10 | 100% |\n\n" +
            "The population grows rapidly at first, then slows as it approaches the carrying capacity \\( K = 10 \\)."
        }

]