import Link from 'next/link';

import { css } from '@/styled/css';

import { routes } from '@/utils';

export default function Home() {
  return (
    <main>
      <ul
        className={css({
          bg: 'border',
          borderRadius: { base: 'none', xl: 'md' },
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
