import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/logo.webp';

import GoBackButton from '@/components/GoBackButton';
import LanguageSelector from '@/components/LanguageSelector';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { css, cx } from '@/styled/css';

import recipes from '@/recipes';

export default function Header() {
  return (
    <div
      className={cx(
        recipes.responsive({ type: 'layout' }),
        css({
          alignItems: 'center',
          bg: 'header',
          borderBottom: 'sm',
          borderColor: 'gray',
          boxShadow: '0 2px 4px 1px #0008',
          display: 'flex',
          gap: 'sm',
          h: '2xs',
          justifyContent: 'space-between',
          py: 'md',
          transition: 'all 200ms',
          w: 'full',
        })
      )}
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

        <h2
          className={css({
            display: { base: 'none', sm: 'block' },
            fontWeight: 'semibold',
          })}
        >
          Alan Souza
        </h2>
      </div>

      <div
        className={css({
          alignItems: 'center',
          display: 'flex',
          gap: 'md',
          w: 'fit-content',
        })}
      >
        <ThemeSwitcher />

        <LanguageSelector />
      </div>
    </div>
  );
}
