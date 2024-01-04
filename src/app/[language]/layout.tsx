import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import '@/app/globals.css';
import { css, cx } from '@/styled/css';

import { Header } from '@/containers';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Showcase front-end page', // todo: create a description
  title: 'Alan Souza',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={css({ h: '100vh' })} data-color-mode="dark" lang="en">
      <body className={cx(rubik.className, css({ bg: { _dark: 'darkBg', base: 'white' } }))}>
        <Header />

        {children}
      </body>
    </html>
  );
}
