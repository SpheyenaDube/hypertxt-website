// Logo Variation 1: Minimalist with accent
export const LogoVariation1 = ({ className = "" }) => (
  <div className={`font-bold text-2xl ${className}`}>
    <span className="text-foreground">hyper</span>
    <span className="text-blue-600">txt</span>
  </div>
);

// Logo Variation 2: With code brackets
export const LogoVariation2 = ({ className = "" }) => (
  <div className={`font-bold text-2xl flex items-center ${className}`}>
    <span className="text-blue-600">&lt;</span>
    <span className="text-foreground">hypertxt</span>
    <span className="text-blue-600">/&gt;</span>
  </div>
);

// Logo Variation 3: With forward slash
export const LogoVariation3 = ({ className = "" }) => (
  <div className={`font-bold text-2xl ${className}`}>
    <span className="text-foreground">hyper</span>
    <span className="text-blue-600">/</span>
    <span className="text-foreground">txt</span>
  </div>
);

// Logo Variation 4: Monospace tech style
export const LogoVariation4 = ({ className = "" }) => (
  <div className={`font-mono font-bold text-2xl ${className}`}>
    <span className="text-foreground">hyper</span>
    <span className="text-blue-600">txt</span>
  </div>
);

// Logo Variation 5: With dot separator
export const LogoVariation5 = ({ className = "" }) => (
  <div className={`font-bold text-2xl flex items-center gap-1 ${className}`}>
    <span className="text-foreground">hyper</span>
    <span className="text-blue-600 text-3xl leading-none">·</span>
    <span className="text-foreground">txt</span>
  </div>
);

// Logo Variation 6: With geometric accent
export const LogoVariation6 = ({ className = "" }) => (
  <div className={`font-bold text-2xl flex items-center gap-2 ${className}`}>
    <div className="w-2 h-8 bg-blue-600 rounded-sm"></div>
    <span className="text-foreground">hypertxt</span>
  </div>
);

// Logo Variation 7: With box style
export const LogoVariation7 = ({ className = "" }) => (
  <div className={`font-bold text-2xl ${className}`}>
    <span className="text-foreground">hyper</span>
    <span className="px-2 py-1 bg-blue-600 text-white rounded">txt</span>
  </div>
);

// Logo Variation 8: All caps with spacing
export const LogoVariation8 = ({ className = "" }) => (
  <div className={`font-bold text-xl tracking-wider ${className}`}>
    <span className="text-foreground">HYPER</span>
    <span className="text-blue-600">TXT</span>
  </div>
);

// Default export - the one currently used in navbar
const HypertxtLogo = LogoVariation1;

export default HypertxtLogo;
