import type { Metadata } from 'next';
import { sans, mono } from '@/lib/fonts';
import './globals.css';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import CursorGlow from '@/components/CursorGlow';
import { profileData } from '@/lib/data';

export const metadata: Metadata = {
  title: `${profileData.name} — Fullstack Software Engineer`,
  description: profileData.bioShort.replace(/\*\*/g, ''),
  authors: [{ name: profileData.name }],
  keywords: ['Muhammad Fiqri Agustriawan', 'Fullstack Engineer', 'Backend focused', 'Golang', 'Laravel', 'Next.js', 'DevOps'],
  creator: profileData.name,
  openGraph: {
    title: `${profileData.name} — Fullstack Software Engineer`,
    description: profileData.bioShort.replace(/\*\*/g, ''),
    url: 'https://fiqrigustriawan.vercel.app',
    siteName: profileData.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${profileData.name} — Fullstack Software Engineer`,
    description: profileData.bioShort.replace(/\*\*/g, ''),
    creator: profileData.socials.twitter.replace('https://twitter.com/', '@'),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (dark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased relative selection:bg-neutral-200 dark:selection:bg-neutral-800">
        <ScrollProgress />
        <CursorGlow />
        <div id="grid-bg" />
        
        <Header />
        
        <div className="relative z-20 max-w-[1100px] mx-auto px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
