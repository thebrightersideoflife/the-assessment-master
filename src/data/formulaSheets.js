export const formulaSheets = [
  {
    moduleId: "ITMTB",
    title: "Calculus Formula Sheet: Integrals and the Fundamental Theorem of Calculus",
    sections: [
      {
        title: "I. The Definite Integral",
        items: [
          "The definite integral is defined as the limit of a Riemann sum, which represents the net signed area under the curve of $f(x)$ from $x=a$ to $x=b$.",
          "**Definition of the Definite Integral**: $\\int_{a}^{b}f(x)dx = \\lim_{n\\rightarrow\\infty}\\sum_{i=1}^{n}f(x_{i}^{*})\\Delta x$ where $\\Delta x = \\frac{b-a}{n}$ is the width of each subinterval, and $x_{i}^{*}$ is any sample point in the $i$-th subinterval.",
        ],
      },
      {
        title: "Properties of Definite Integrals",
        items: [
          "**Constant Multiple Rule**: $\\int_{a}^{b}c f(x)dx = c \\int_{a}^{b}f(x)dx$",
          "**Sum/Difference Rule**: $\\int_{a}^{b}[f(x) \\pm g(x)]dx = \\int_{a}^{b}f(x)dx \\pm \\int_{a}^{b}g(x)dx$",
          "**Reversing Limits**: $\\int_{a}^{b}f(x)dx = -\\int_{b}^{a}f(x)dx$",
          "**Additive Interval Property**: $\\int_{a}^{b}f(x)dx = \\int_{a}^{c}f(x)dx + \\int_{c}^{b}f(x)dx$",
          "**Comparison Property (Estimation)**: If $m \\le f(x) \\le M$ on $[a, b]$, then $m(b-a) \\le \\int_{a}^{b}f(x)dx \\le M(b-a)$",
        ],
      },
      {
        title: "II. The Fundamental Theorem of Calculus (FTC)",
        items: [
          "The FTC links differentiation and integration, establishing them as inverse processes.",
          "**FTC Part 1 (Derivative of an Integral)**: If $g(x)=\\int_{a}^{x}f(t)dt$, then $g^{\\prime}(x)=f(x)$. Differentiating a definite integral with respect to its upper limit returns the integrand function.",
          "**FTC Part 2 (Evaluation Theorem)**: $\\int_{a}^{b}f(x)dx = F(b) - F(a)$ where $F$ is **any antiderivative** of $f$ (i.e., $F^{\\prime}(x) = f(x)$). This is the primary method for evaluating definite integrals.",
        ],
      },
      {
        title: "The Net Change Theorem",
        items: [
          "**Net Change Theorem**: $\\int_{a}^{b}F^{\\prime}(x)dx = F(b) - F(a)$. The integral of a rate of change, $F'(x)$, is the **net change** in the original quantity, $F(x)$, from $a$ to $b$.",
        ],
      },
      {
        title: "III. Indefinite Integrals (Antiderivatives)",
        items: [
          "An indefinite integral represents the family of all antiderivatives of $f(x)$.",
          "**Indefinite Integral**: $\\int f(x)dx = F(x) + C$ means $F'(x) = f(x)$. **Always include the constant of integration, $C$.**",
        ],
      },
      {
        title: "Basic Integration Formulas",
        items: [
          "**Power Rule** ($n \\ne -1$): $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$",
          "**Natural Log**: $\\int \\frac{1}{x} dx = \\ln|x| + C$",
          "**Exponential**: $\\int e^x dx = e^x + C$",
          "**Sine**: $\\int \\sin x dx = -\\cos x + C$",
          "**Cosine**: $\\int \\cos x dx = \\sin x + C$",
          "**Secant Squared**: $\\int \\sec^2 x dx = \\tan x + C$",
          "**Cosecant Squared**: $\\int \\csc^2 x dx = -\\cot x + C$",
          "**Secant Tangent**: $\\int \\sec x \\tan x dx = \\sec x + C$",
          "**Cosecant Cotangent**: $\\int \\csc x \\cot x dx = -\\csc x + C$",
        ],
      },
    ],
  },
];