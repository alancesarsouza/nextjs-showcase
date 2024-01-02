import Link from 'next/link';

import { css } from '@/styled/css';

import { routes } from '@/utils';

export default function Home() {
  return (
    <main className={css({ maxW: 'xl', w: 'full' })}>
      <ul
        className={css({
          bg: 'secondary',
          borderRadius: {
            base: 'none',
            xl: 'md',
          },
          display: 'flex',
          flexDir: 'column',
          gap: 'sm',
          p: 'lg',
        })}
      >
        <li>
          <Link href={routes.chart()}>Gráficos</Link>
        </li>
        <li>
          <Link href={routes.comments()}>Comentários</Link>
        </li>
        <li>
          <Link href={routes.forms()}>Formulários</Link>
        </li>
        <li>
          <Link href={routes.gallery()}>Galeria</Link>
        </li>
        <li>
          <Link href={routes.map()}>Mapa</Link>
        </li>
      </ul>
    </main>
  );
}
