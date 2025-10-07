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
      "**Why This Works (Option A is Correct):**\n\n" +
      "**Part 1: Continuous functions on closed intervals are bounded**\n\n" +
      "By the **Extreme Value Theorem**:\n" +
      "- Every continuous function on $[a, b]$ attains a maximum value $M$ and minimum value $m$\n" +
      "- Therefore: $m \\leq f(x) \\leq M$ for all $x \\in [a, b]$\n" +
      "- The function is **bounded**\n\n" +
      "**Part 2: Continuous functions are integrable**\n\n" +
      "For a function to be Riemann integrable, the upper and lower Riemann sums must converge to the same value:\n\n" +
      "$$\\lim_{n \\to \\infty} L_n = \\lim_{n \\to \\infty} U_n$$\n\n" +
      "where:\n" +
      "- $L_n$ uses the minimum value of $f$ on each subinterval\n" +
      "- $U_n$ uses the maximum value of $f$ on each subinterval\n\n" +
      "**For continuous functions:**\n" +
      "- They have no sudden jumps\n" +
      "- As we make partitions finer ($n \\to \\infty$), the difference $U_n - L_n \\to 0$\n" +
      "- This guarantees the integral exists\n\n" +
      "**Why the other options are INCORRECT:**\n\n" +
      "**Option B: 'Continuous functions have no critical points'**\n" +
      "- **False!** Continuous functions can have many critical points\n" +
      "- Example: $f(x) = x^2$ is continuous and has a critical point at $x = 0$\n" +
      "- Example: $f(x) = \\sin(x)$ is continuous with infinitely many critical points\n" +
      "- Critical points are irrelevant to integrability\n\n" +
      "**Option C: 'All continuous functions are increasing'**\n" +
      "- **False!** Continuous functions can increase, decrease, or do both\n" +
      "- Example: $f(x) = -x$ is continuous and decreasing\n" +
      "- Example: $f(x) = x^2 - 1$ is continuous and changes from decreasing to increasing\n" +
      "- Monotonicity is not required for integrability\n\n" +
      "**Option D: 'The Mean Value Theorem applies'**\n" +
      "- While the MVT does apply to continuous, differentiable functions, this is not why they're integrable\n" +
      "- The MVT is about derivatives, not integrals\n" +
      "- You can have continuous functions that aren't differentiable everywhere (e.g., $f(x) = |x|$), and they're still integrable\n" +
      "- The MVT is relevant for other theorems, but not the reason for integrability\n\n" +
      "**Important Distinction:**\n\n" +
      "Not all bounded functions are integrable:\n" +
      "- Example: The Dirichlet function (1 for rationals, 0 for irrationals) is bounded but not Riemann integrable\n" +
      "- **Continuity** is the key property that ensures integrability\n\n" +
      "**Mathematical Rigor:**\n\n" +
      "The precise statement is:\n\n" +
      "> Every function that is continuous on a closed, bounded interval $[a, b]$ is Riemann integrable on $[a, b]$.\n\n" +
      "This is one of the foundational results in real analysis.\n\n" +
      "**Practical Implication:**\n\n" +
      "When you see a continuous function, you can immediately conclude:\n" +
      "1. It's bounded on any closed interval\n" +
      "2. Its integral exists\n" +
      "3. You can approximate it with Riemann sums\n" +
      "4. The Fundamental Theorem of Calculus applies\n\n" +
      "**Answer: A** — Continuous functions are bounded and integrable",
  },

{
  id: "q14",
  moduleId: "ITMTB",
  weekId: "ITMTB_W1",
  type: "open-ended",
  text: "The velocity graph of a car accelerating from rest to a speed of 120 km/h over a period of 30 seconds is shown. Estimate the distance traveled during this period.",
  correctAnswers: [
    "0.694444",
    "0.69444",
    "0.6944",
    "0.694",
    "0.69",
    "0.7",
    "0.694444 km",
    "0.6944 km",
    "0.694 km",
    "0.69 km",
    "694.444 m",
    "694.4 m",
    "694 m",
    "≈0.694",
    "≈694 m"
  ],
  image: {
    src: "/images/ITMTB_Week 1_Quiz 3_Question 12.png",
    alt: "Velocity-time graph of a car accelerating from 0 to 120 km/h over 30 seconds",
    caption: "Velocities at t = 0, 10, 20, 30 s are approximately 0, 80, 110, 120 km/h respectively. Area under the curve ≈ distance traveled."
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
  }

];