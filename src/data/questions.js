/**
 * Quiz Questions Database
 * 
 * Each question object should contain:
 * - id: unique identifier
 * - question: the question text (supports LaTeX math with $$ and $)
 * - correctAnswers: array of acceptable answer formats
 * - explanation: detailed explanation with math rendering
 * - type: question category for analytics
 * - difficulty: 'easy', 'medium', 'hard' (optional)
 * - tags: array of topic tags (optional)
 */

export const quizQuestions = [
  {
    id: 1,
    question: "What is the decimal equivalent of the fraction $$\\frac{3}{4}$$?",
    correctAnswers: [
      "0.75", 
      "0,75",  // European format
      "3/4", 
      "75%", 
      "0.750",
      ".75"
    ],
    explanation: `To convert $$\\frac{3}{4}$$ to decimal, divide the numerator by the denominator:
    
$$3 ÷ 4 = 0.75$$

This can also be expressed as:
- **Percentage**: $$0.75 × 100\\% = 75\\%$$
- **Fraction**: $$\\frac{3}{4}$$ (original form)

**Real-world application**: If you have 3 out of 4 equal parts of a pizza, you have 0.75 or 75% of the whole pizza.`,
    type: "fraction_conversion",
    difficulty: "easy",
    tags: ["fractions", "decimals", "percentages"]
  },

  {
    id: 2,
    question: "Solve for x in the equation: $$2x + 5 = 13$$",
    correctAnswers: [
      "4", 
      "x=4", 
      "x = 4",
      "x= 4",
      " x = 4 "
    ],
    explanation: `**Step-by-step solution:**

Starting equation: $$2x + 5 = 13$$

**Step 1**: Subtract 5 from both sides
$$2x + 5 - 5 = 13 - 5$$
$$2x = 8$$

**Step 2**: Divide both sides by 2
$$\\frac{2x}{2} = \\frac{8}{2}$$
$$x = 4$$

**Check our answer**: Substitute $$x = 4$$ back into the original equation:
$$2(4) + 5 = 8 + 5 = 13$$ ✓`,
    type: "linear_algebra",
    difficulty: "easy",
    tags: ["algebra", "equations", "solving"]
  },

  {
    id: 3,
    question: "A rectangular garden is 8 meters long and 6 meters wide. What is its area in square meters?",
    correctAnswers: [
      "48", 
      "48 m²", 
      "48 square meters", 
      "48m²", 
      "48 sq m",
      "48 m^2",
      "48m^2"
    ],
    explanation: `**Formula for rectangle area**: $$\\text{Area} = \\text{length} × \\text{width}$$

**Given information**:
- Length = 8 meters
- Width = 6 meters

**Calculation**:
$$\\text{Area} = 8\\text{ m} × 6\\text{ m} = 48\\text{ m}^2$$

**Why this works**: We're counting how many unit squares (1m × 1m) fit inside the rectangle. Think of it as a grid with 8 columns and 6 rows, giving us 8 × 6 = 48 unit squares.

**Real-world application**: This garden has 48 square meters of space for planting.`,
    type: "geometry_area",
    difficulty: "easy",
    tags: ["geometry", "area", "rectangles", "real-world"]
  },

  {
    id: 4,
    question: "Express the number **12,825.75** in scientific notation.",
    correctAnswers: [
      "1.282575 * 10^4", 
      "1.282575 ∗ 10^4",
      "1,282575 * 10^4",
      "1,282575 ∗ 10^4",
      "1.282575 × 10^4",
      "1.282575e4"
    ],
    explanation: `**Scientific notation format**: $$a × 10^n$$ where $$1 ≤ a < 10$$

**Step 1**: Identify the decimal number
$$12,825.75$$

**Step 2**: Move the decimal point to create a number between 1 and 10
$$12,825.75 → 1.282575$$

**Step 3**: Count how many places we moved the decimal point
We moved it **4 places to the left**, so the exponent is **positive 4**.

**Final answer**: $$1.282575 × 10^4$$

**Check**: $$1.282575 × 10^4 = 1.282575 × 10,000 = 12,825.75$$ ✓

**When to use**: Scientific notation is helpful for very large or very small numbers, like distances in space or sizes of atoms.`,
    type: "scientific_notation",
    difficulty: "medium",
    tags: ["scientific notation", "exponents", "decimal conversion"]
  },

  {
    id: 5,
    question: "Convert the improper fraction $$\\frac{17}{8}$$ to a mixed number.",
    correctAnswers: [
      "2 1/8",
      "2  1/8",  // extra space
      "2 1/8",
      "2¹/₈"     // Unicode fractions
    ],
    explanation: `**Converting improper fractions to mixed numbers:**

**Step 1**: Divide the numerator by the denominator
$$17 ÷ 8 = 2$$ remainder $$1$$

**Step 2**: The quotient becomes the whole number part: **2**
**Step 3**: The remainder becomes the new numerator: **1**  
**Step 4**: The denominator stays the same: **8**

**Result**: $$\\frac{17}{8} = 2\\frac{1}{8}$$

**Verification**: 
$$2\\frac{1}{8} = 2 + \\frac{1}{8} = \\frac{16}{8} + \\frac{1}{8} = \\frac{17}{8}$$ ✓

**Real-world example**: If you have 17 pizza slices and each pizza is cut into 8 slices, you have 2 whole pizzas plus 1 extra slice.`,
    type: "mixed_numbers",
    difficulty: "medium",
    tags: ["fractions", "mixed numbers", "conversion"]
  },

  {
    id: 6,
    question: "What is the value of $$\\sqrt{144}$$?",
    correctAnswers: [
      "12",
      "+12",
      "12.0",
      "twelve"
    ],
    explanation: `**Finding square roots:**

We need to find what number, when multiplied by itself, equals 144.

**Think**: What number × itself = 144?

$$12 × 12 = 144$$

Therefore: $$\\sqrt{144} = 12$$

**Perfect squares pattern**:
- $$\\sqrt{1} = 1$$ because $$1^2 = 1$$
- $$\\sqrt{4} = 2$$ because $$2^2 = 4$$  
- $$\\sqrt{9} = 3$$ because $$3^2 = 9$$
- $$\\sqrt{16} = 4$$ because $$4^2 = 16$$
- ...
- $$\\sqrt{144} = 12$$ because $$12^2 = 144$$

**Real-world application**: If you have a square garden with an area of 144 square meters, each side of the garden is 12 meters long.`,
    type: "square_roots",
    difficulty: "easy",
    tags: ["square roots", "perfect squares", "radicals"]
  },

  {
    id: 7,
    question: "A recipe calls for $$2\\frac{1}{3}$$ cups of flour. How many cups is this as an improper fraction?",
    correctAnswers: [
      "7/3",
      "7 / 3",
      "7÷3"
    ],
    explanation: `**Converting mixed numbers to improper fractions:**

**Given**: $$2\\frac{1}{3}$$ cups

**Formula**: $$\\text{whole} × \\text{denominator} + \\text{numerator} = \\text{new numerator}$$

**Step 1**: Multiply the whole number by the denominator
$$2 × 3 = 6$$

**Step 2**: Add the numerator
$$6 + 1 = 7$$

**Step 3**: Keep the same denominator
Denominator = 3

**Result**: $$2\\frac{1}{3} = \\frac{7}{3}$$

**Verification**: 
$$\\frac{7}{3} = \\frac{6}{3} + \\frac{1}{3} = 2 + \\frac{1}{3} = 2\\frac{1}{3}$$ ✓

**Practical note**: $$\\frac{7}{3} ≈ 2.33$$ cups of flour.`,
    type: "mixed_to_improper",
    difficulty: "medium",
    tags: ["fractions", "mixed numbers", "cooking", "real-world"]
  }
];

/**
 * Get questions by difficulty level
 * @param {string} difficulty - 'easy', 'medium', or 'hard'
 * @returns {Array} Filtered questions
 */
export function getQuestionsByDifficulty(difficulty) {
  return quizQuestions.filter(q => q.difficulty === difficulty);
}

/**
 * Get questions by tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} Filtered questions
 */
export function getQuestionsByTag(tag) {
  return quizQuestions.filter(q => q.tags && q.tags.includes(tag));
}

/**
 * Get a random subset of questions
 * @param {number} count - Number of questions to return
 * @returns {Array} Random questions
 */
export function getRandomQuestions(count = 5) {
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get question by ID
 * @param {number} id - Question ID
 * @returns {Object|null} Question object or null if not found
 */
export function getQuestionById(id) {
  return quizQuestions.find(q => q.id === id) || null;
}