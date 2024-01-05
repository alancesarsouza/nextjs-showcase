'use client';
import { MoonFill, SunFill } from 'react-bootstrap-icons';

import { IconButton } from './IconButton';

import setThemeCookie from '@/actions/setThemeCookie';
import { css } from '@/styled/css';

import { themeKey } from '@/utils';

const html = typeof document !== 'undefined' ? document?.querySelector('html') : null;

export const ThemeSwitcher = () => {
  const toggleTheme = async () => {
    const current = html?.getAttribute(themeKey);
    const theme = current !== 'dark' ? 'dark' : 'light';

    await setThemeCookie(theme);

    html?.setAttribute(themeKey, theme);
  };

  return (
    <IconButton label="change color theme mode" onClick={toggleTheme}>
      <MoonFill
        className={css({
          _dark: { display: 'none' },
          base: { display: 'block' },
          h: 'icon',
          w: 'icon',
        })}
      />
      <SunFill
        className={css({
          _dark: { display: 'block' },
          base: { display: 'none' },
          h: 'icon',
          w: 'icon',
        })}
      />
    </IconButton>
  );
};
