import { Inter, JetBrains_Mono } from 'next/font/google';

export const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const mono = JetBrains_Mono({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
