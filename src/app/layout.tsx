import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio Brandon Castillo',
  description: 'Portfolio Brandon Castillo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-black text-gray-300 flex flex-col">
          <Navbar />
          <div className="mx-auto max-w-2xl px-6 pt-16">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
