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
          base: 'sm',
          sm: 'md',
          md: 'lg',
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
    bg: 'glass',
    display: 'flex',
    flexDir: 'column',
    gap: 'sm',
    py: 'md',
    w: '200px',
    zIndex: 1,
    backdropFilter: 'blur(2px)',
    border: 'sm',
    shadow: {
      base: '1px 5px 5px #0004',
      _dark: '1px 5px 5px #000',
    },
  },
  variants: {
    type: {
      card: {
        w: 'full',
        rounded: 'lg',
      },
      dropdown: {
        rounded: 'md',
        position: 'absolute',
        right: 'calc(100% + 0.5rem)',
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
