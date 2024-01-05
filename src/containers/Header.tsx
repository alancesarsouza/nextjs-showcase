import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/logo.webp';

import GoBackButton from '@/components/GoBackButton';
import LanguageSelector from '@/components/LanguageSelector';
import { css } from '@/styled/css';

export default function Header() {
  return (
    <div
      className={css({
        alignItems: 'center',
        bg: 'brand',
        display: 'flex',
        gap: 'sm',
        h: '2xs',
        justifyContent: 'space-between',
        px: 'xl',
        py: 'md',
        transition: 'all 200ms',
        w: 'full',
      })}
    >
      <div
        className={css({
          alignItems: 'center',
          display: 'flex',
          gap: 'sm',
          w: 'fit-content',
        })}
      >
        <GoBackButton />
        <Link href="/">
          <Image
            alt="site logo - Alan Souza"
            className={css({ h: '2rem', w: '2rem' })}
            height={32}
            src={logo}
            width={32}
          />
        </Link>
      </div>

      <div
        className={css({
          alignItems: 'center',
          display: 'flex',
          gap: 'md',
          w: 'fit-content',
        })}
      >
        <h2
          className={css({
            color: 'text',
            fontSize: '1.5rem',
            fontWeight: 'semibold',
            lineHeight: '120%',
            ml: 'auto',
            userSelect: 'none',
          })}
        >
          Alan Souza
        </h2>
        <i>(DM)</i>
        <LanguageSelector />
      </div>
    </div>
  );
}
