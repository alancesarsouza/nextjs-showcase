import GoBackButton from '@/components/GoBackButton';
import { css } from '@/styled/css';

export default function Header() {
  return (
    <div
      className={css({
        alignItems: 'center',
        bg: 'brand',
        display: 'flex',
        h: '2xs',
        justifyContent: 'space-between',
        px: 'xl',
        py: 'md',
        transition: 'all 200ms',
        w: 'full',
      })}
    >
      <GoBackButton />

      <h1
        className={css({
          fontSize: '1.5rem',
          fontWeight: 'semibold',
          lineHeight: '120%',
          userSelect: 'none',
        })}
      >
        Alan Souza
      </h1>
    </div>
  );
}
