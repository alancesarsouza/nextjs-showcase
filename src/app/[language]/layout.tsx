import '@/app/globals.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { cookies } from 'next/headers';

import { css, cx } from '@/styled/css';

import { Header } from '@/containers';
import recipes from '@/recipes';
import { themeKey } from '@/utils';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Showcase front-end page', // todo: create a description
  title: 'Alan Souza',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = cookies().get(themeKey);

  return (
    <html className={css({ h: '100vh' })} data-color-mode={theme?.value || 'light'} lang="en">
      <body className={cx(rubik.className, css({ bg: { _dark: 'darkBg', base: 'white' } }))}>
        <Header />

        <div className={recipes.responsive({ type: 'layout' })}>{children}</div>
      </body>
    </html>
  );
}
