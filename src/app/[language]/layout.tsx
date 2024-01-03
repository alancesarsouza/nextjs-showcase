import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import '@/app/globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Showcase front-end page', // todo: create a description
  title: 'Alan Souza',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
