import type {Metadata} from 'next';
import {Space_Grotesk, Inter} from 'next/font/google';
import './globals.css'; // Global styles

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAK Studio | Premium Mobile Apps',
  description: 'We build clean, modern mobile apps.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
