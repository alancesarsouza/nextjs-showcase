import styles from './page.module.css';

import { css } from '@/styled/css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className={css({
          bg: 'gray',
          fontSize: '5xl',
          fontWeight: 'bold',
          h: 'full',
          my: 'auto',
        })}
      >
        My Project Showcase 🐼!
      </div>
    </main>
  );
}
