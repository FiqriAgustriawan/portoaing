import type { Metadata } from 'next';
import Script from 'next/script';
import { sans, mono } from '@/lib/fonts';
import './globals.css';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import CursorGlow from '@/components/CursorGlow';

export const metadata: Metadata = {
  metadataBase: new URL('https://fiqriagustriawan.vercel.app'),
  verification: {
    google: 'tGjJts6uXLp-DqGq7tzca2VirbCFexAtR55iIQi3h7s',
  },
  title: 'Muhammad Fiqri Agustriawan — Fullstack Software Engineer',
  description:
    'Fullstack Software Engineer based in Bandung, Indonesia. Intern at Ashari Tech. Specializing in backend engineering, APIs, databases, Next.js, Laravel, Golang, and DevOps automation.',
  authors: [{ name: 'Muhammad Fiqri Agustriawan' }],
  keywords: [
    'Muhammad Fiqri Agustriawan',
    'Fullstack Software Engineer',
    'Backend Engineer',
    'Golang',
    'Laravel',
    'Next.js',
    'DevOps',
    'AI Engineer',
    'Ashari Tech',
    'Bandung',
    'Indonesia',
    'Software Engineer Indonesia',
  ],
  creator: 'Muhammad Fiqri Agustriawan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fiqriagustriawan.vercel.app',
  },
  openGraph: {
    title: 'Muhammad Fiqri Agustriawan — Fullstack Software Engineer',
    description:
      'Fullstack Software Engineer based in Bandung, Indonesia. Intern at Ashari Tech. Specializing in backend engineering, APIs, databases, Next.js, Laravel, Golang, and DevOps automation.',
    url: 'https://fiqriagustriawan.vercel.app',
    siteName: 'Muhammad Fiqri Agustriawan',
    images: [
      {
        url: '/profile_Fiqri-kacamata.jpeg',
        width: 400,
        height: 400,
        alt: 'Muhammad Fiqri Agustriawan — Fullstack Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiqriagustriawan',
    creator: '@fiqriagustriawan',
    title: 'Muhammad Fiqri Agustriawan — Fullstack Software Engineer',
    description: 'Fullstack Software Engineer based in Bandung. Intern at Ashari Tech. Backend, APIs, Golang, Next.js, DevOps.',
    images: ['/profile_Fiqri-kacamata.jpeg'],
  },
  icons: {
    icon: '/profile_Fiqri-kacamata.jpeg',
    shortcut: '/profile_Fiqri-kacamata.jpeg',
    apple: '/profile_Fiqri-kacamata.jpeg',
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
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#F9F8F6"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#111110"
        />
        {/* Inline theme init script to prevent FOUC */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var saved = localStorage.getItem('theme');
                  var dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (dark) document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="antialiased relative"
        style={{ fontFamily: 'var(--font-sans)' }}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <CursorGlow />
        <div id="grid-bg" />

        <Header />

        <div className="relative z-20 max-w-[680px] mx-auto px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
