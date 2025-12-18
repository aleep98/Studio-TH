import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        studio: ['var(--font-cinzel)'],
        name: ['var(--font-tangerine)'],
        subtitle: ['var(--font-cormorant)'],
      },
      letterSpacing: {
        logo: '0.25em',
        subtitle: '0.15em',
      },
    },
  },
  plugins: [],
};

export default config;
