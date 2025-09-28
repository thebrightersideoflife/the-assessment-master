export const renderMath = () => {
  try {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
        ],
        throwOnError: false,
        errorColor: '#cc0000',
      });
    }
  } catch (error) {
    console.error('KaTeX rendering failed:', error);
  }
};