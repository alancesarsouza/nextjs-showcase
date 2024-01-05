import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/logo.webp';

import GoBackButton from '@/components/GoBackButton';
import LanguageSelector from '@/components/LanguageSelector';
import { css, cx } from '@/styled/css';

import recipes from '@/recipes';

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
        px: 'responsive',
        py: 'md',
        transition: 'all 200ms',
        w: 'full',
      })}
    >
      <div
        className={css({
          alignItems: 'center',
          display: 'flex',
          gap: 'lg',
          w: 'fit-content',
        })}
      >
        <GoBackButton />

        <Link href="/">
          <Image
            alt="site logo - Alan Souza"
            height={32}
            src={logo}
            width={32}
            className={cx(
              recipes.highlight({ type: 'hoverShadow' }),
              css({ h: '2rem', w: '2rem' })
            )}
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
            display: { base: 'none', md: 'block' },
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
