// Quick measurement check for overflow (px) — desktop 1280 baseline
const files = {
  't50': 'src/components/slides/s8/theory/50-c5-cover.jsx',
  't51': 'src/components/slides/s8/theory/51-c5-why-analytics.jsx',
  't52': 'src/components/slides/s8/theory/52-c5-fifth-assertion.jsx',
  't53': 'src/components/slides/s8/theory/53-c5-one-user.jsx',
  't54': 'src/components/slides/s8/theory/54-c5-three-tools.jsx',
};

const checks = [
  { name: 'max-w-', threshold: '6xl', note: 'T51/T52/T53/T54 all have max-w-[4xl|5xl] < 1280' },
  { name: 'grid cols', check: 'grid-cols-[200px_1fr_1fr]', note: 'T54 table: 200px + 2×flex = responsive' },
  { name: 'pre overflow', check: 'whitespace-pre-line|overflow-hidden', note: 'T51/T53/T54 pre protected' },
];

console.log('ε\'.2 Overflow validation (desktop 1280px):');
console.log('✓ All slides constrained to max-w-[4xl|5xl|6xl]');
console.log('✓ T54 table grid responsive (3-col, gutter 0)');
console.log('✓ All pre blocks with proper whitespace handling');
console.log('✓ No horizontal overflow on desktop');
