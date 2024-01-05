import Link from 'next/link';

import recipes from '@/recipes';
import { routes } from '@/utils';

export default function Home() {
  return (
    <main>
      <ul className={recipes.glassCard({ type: 'card' })}>
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
