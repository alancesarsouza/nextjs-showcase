import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import '@/app/globals.css';
import { css } from '@/styled/css';

import { Header } from '@/containers';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Showcase front-end page', // todo: create a description
  title: 'Alan Souza',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={css({ bg: 'muted', h: '100vh' })} lang="en">
      <body className={rubik.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
