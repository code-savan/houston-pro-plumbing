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
  title: 'YB Plumbing & Hydro Jetting Services | Professional Plumbing in Houston',
  description: 'YB Plumbing & Hydro Jetting Services — Professional plumbing and hydro jetting services in Houston. From emergency repairs to hydro jetting, we get it done right. Serving Houston & surrounding areas.',
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
