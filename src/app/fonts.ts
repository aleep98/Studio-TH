import { Cinzel, Tangerine, Cormorant_Garamond } from 'next/font/google';

export const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cinzel',
});

export const tangerine = Tangerine({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-tangerine',
});

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
});
