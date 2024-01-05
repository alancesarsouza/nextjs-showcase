/* eslint-disable sort-keys/sort-keys-fix */

import { cva } from '@/styled/css';

const highlight = cva({
  base: {},
  variants: {
    type: {
      actionHover: {
        _disabled: {
          _hover: { transform: 'scale(1.05)' },
        },
        _hover: { transform: 'scale(1.05)' },
        transition: 'all 200ms, transform 100ms',
      },
      hoverShadow: {
        transform: 'linear 150ms',
        _hover: {
          filter: {
            base: 'drop-shadow(0 0 2px #fff4)',
            _dark: 'drop-shadow(0 0 2px #fff4)',
          },
        },
      },
    },
  },
});

const responsive = cva({
  base: {},
  variants: {
    type: {
      layout: {
        w: 'full',
        py: 'lg',
        px: {
          base: '2xs',
          sm: 'xs',
          md: 'sm',
          '2xl': 'xl',
          '3xl': '5%',
        },
        mx: 'auto',
      },
    },
  },
});

const glassCard = cva({
  base: {
    alignItems: 'center',
    bg: 'cloud',
    display: 'flex',
    flexDir: 'column',
    gap: 'sm',
    py: 'md',
    w: '200px',
    zIndex: 1,
  },
  variants: {
    type: {
      dropdown: {
        backdropFilter: 'blur(2px)',
        background: 'cloud',
        border: 'sm',
        position: 'absolute',
        right: 'calc(100% + 0.5rem)',
        rounded: 'md',
        shadow: '0 5px 5px #000a',
        top: 'full',
      },
    },
  },
});

export default {
  glassCard,
  responsive,
  highlight,
};
