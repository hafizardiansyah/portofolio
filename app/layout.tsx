import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hafiz Ardiansyah | Frontend Developer (React, Next.js, Laravel)',
  description:
    "I'm Hafiz, a Frontend Developer specializing in building fast, reliable web applications with React, Next.js, and Laravel.",
  openGraph: {
    title: 'Hafiz Ardiansyah | Frontend Developer',
    description:
      'Portfolio of Hafiz Ardiansyah, a frontend developer focused on React, Next.js, and Laravel.',
    url: 'https://hafizardiansyah.my.id',
    siteName: 'hafizardiansyah.my.id',
    type: 'website',
    // images: []  // boleh dikosongin / dihapus dulu
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
