'use client';
import { useMemo, useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useBoolean, useOnClickOutside } from 'usehooks-ts';

import { IconButton } from './IconButton';

import { flags } from '@/dictionaries/constants';
import { LanguagesKeys } from '@/dictionaries/types';
import { css } from '@/styled/css';

import recipes from '@/recipes';

export default function LanguageSelector() {
  const ref = useRef(null);
  const { value, setTrue, setFalse } = useBoolean(false);
  const { language } = useParams();
  const currentPath = usePathname();

  const url = useMemo(() => {
    const hasLocale = currentPath.startsWith(`/${language}/`);
    if (!hasLocale) {
      return '/:lang';
    }
    return currentPath.replace(`/${language}`, '/:lang');
  }, [currentPath, language]);

  useOnClickOutside(ref, setFalse);

  return (
    <div className={css({ position: 'relative' })}>
      <IconButton label="Select your language" onClick={setTrue}>
        <Image
          alt={language as string}
          className={css({ h: '2rem', w: '2rem' })}
          height={32}
          src={flags[language as LanguagesKeys]}
          width={32}
        />
      </IconButton>

      <div style={{ visibility: value ? 'visible' : 'hidden' }} onClick={setFalse}>
        <div ref={ref} className={recipes.glassCard({ type: 'dropdown' })}>
          <ul
            className={css({
              display: 'flex',
              flexDir: 'column',
              maxH: value ? '200px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 200ms, width 300ms',
              w: value ? 'full' : '0%',
            })}
          >
            {Object.entries(flags).map(([lang, src]) => (
              <li key={lang}>
                <Link
                  href={`${url.replace(':lang', lang)}`}
                  locale={lang}
                  className={css({
                    _hover: { bg: 'brand' },
                    alignItems: 'center',
                    display: 'flex',
                    gap: 'xs',
                    p: 'xs',
                    transition: 'background 200ms',
                  })}
                >
                  <Image
                    alt={lang}
                    className={css({ h: 'icon', w: 'icon' })}
                    height={32}
                    src={src}
                    width={32}
                  />
                  <p
                    className={css({ color: 'text', textOverflow: 'hidden', whiteSpace: 'nowrap' })}
                  >
                    {lang}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
