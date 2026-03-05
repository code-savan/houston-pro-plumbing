import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Houston Pro Plumbing | Fast, Fair & Reliable Plumbers in Houston',
  description: 'Houston\'s Trusted Plumber — Fast, Fair & Reliable. From leaky pipes to full installations, we get it done right. Serving Houston & surrounding areas.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
