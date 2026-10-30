import React from 'react';

interface MathViewProps {
  expression: string;
  className?: string;
}

/**
 * Clean component that renders mathematical notation in a pleasant,
 * legible typography without bulky external script dependencies.
 * Handles fractions, exponents, Greek symbols, square roots, degrees, and subscripts.
 */
export const MathView: React.FC<MathViewProps> = ({ expression, className = '' }) => {
  if (!expression) return null;

  // Split and render LaTeX-like or standard math tokens
  const renderFormatted = (text: string) => {
    // Check for LaTeX fraction \frac{a}{b}
    const fracRegex = /\\frac\{([^}]+)\}\{([^}]+)\}/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = fracRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(renderSimpleMath(text.substring(lastIndex, match.index), `sub-${lastIndex}`));
      }

      const num = match[1];
      const den = match[2];

      parts.push(
        <span
          key={`frac-${match.index}`}
          className="inline-flex flex-col text-center align-middle mx-1.5 leading-tight"
        >
          <span className="border-b border-cyan-400/60 pb-0.5 px-1 font-medium text-cyan-200">
            {renderSimpleMath(num, 'num')}
          </span>
          <span className="pt-0.5 px-1 font-medium text-cyan-200">
            {renderSimpleMath(den, 'den')}
          </span>
        </span>
      );

      lastIndex = fracRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(renderSimpleMath(text.substring(lastIndex), `tail-${lastIndex}`));
    }

    return parts;
  };

  const renderSimpleMath = (text: string, keyPrefix: string): React.ReactNode => {
    // Clean backslashes for trig functions and Greek letters
    let cleaned = text
      .replace(/\^\\circ|\^\{\\circ\}|\\circ/g, '°')
      .replace(/\\sin/g, 'sin')
      .replace(/\\cos/g, 'cos')
      .replace(/\\tan/g, 'tan')
      .replace(/\\sec/g, 'sec')
      .replace(/\\csc/g, 'csc')
      .replace(/\\cot/g, 'cot')
      .replace(/\\theta/g, 'θ')
      .replace(/\\alpha/g, 'α')
      .replace(/\\pi/g, 'π')
      .replace(/\\times/g, ' × ')
      .replace(/\\cdot/g, ' · ')
      .replace(/\\quad/g, '   ')
      .replace(/\\le/g, ' ≤ ')
      .replace(/\\ge/g, ' ≥ ')
      .replace(/\\neq/g, ' ≠ ')
      .replace(/\\pm/g, ' ± ')
      .replace(/\\left|\\right/g, '');


    // Handle exponents like ^2 or ^4
    const tokens = cleaned.split(/(\^[0-9]+|\^\{[^}]+\}|\([^\)]+\)|√[0-9a-zA-Z]+)/g);

    return (
      <span key={keyPrefix} className="inline">
        {tokens.map((tok, i) => {
          if (tok.startsWith('^')) {
            const exp = tok.replace(/^\^\{?|\}?$/g, '');
            return (
              <sup key={i} className="text-[0.75em] text-cyan-300 font-bold ml-0.5">
                {exp}
              </sup>
            );
          }
          if (tok.startsWith('√')) {
            return (
              <span key={i} className="font-semibold text-emerald-300">
                <span className="text-emerald-400 mr-0.5">√</span>
                <span className="border-t border-emerald-400 pt-0.5">
                  {tok.substring(1)}
                </span>
              </span>
            );
          }
          return <span key={i}>{tok}</span>;
        })}
      </span>
    );
  };

  return (
    <span className={`math-font tracking-wide inline-block ${className}`}>
      {renderFormatted(expression)}
    </span>
  );
};
