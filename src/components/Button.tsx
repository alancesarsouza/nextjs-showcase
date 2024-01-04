import React, { ButtonHTMLAttributes } from 'react';

import { css, cx } from '@/styled/css';

export function Button({
  children,
  isOutLine,
  isGhost,
  disabled,
  leftElement,
  rightElement,
  className,
  ...props
}: ButtonProps) {
  const rootClassName = cx(
    'group',
    css({
      _active: {
        bg: isOutLine || isGhost ? 'transparent' : 'hover',
        color: isOutLine ? 'brand' : 'white',
        shadowColor: 'hover',
      },
      _disabled: {
        _hover: {
          bg: isOutLine || isGhost ? 'inherit' : 'muted',
          color: isOutLine || isGhost ? 'muted' : 'border',
          filter: 'none',
        },
        bg: isOutLine || isGhost ? 'inherit' : 'disabled',
        color: 'border',
      },
      _hover: {
        bg: isOutLine || isGhost ? 'transparent' : 'primary',
        color: isOutLine || isGhost ? 'hover' : 'muted',
        filter: 'drop-shadow(1.5px 1.5px 3px #2226)',
        shadowColor: !isOutLine && !isGhost ? 'red' : 'inherit',
      },
      alignItems: 'center',
      bg: isOutLine || isGhost ? 'transparent' : 'primary',
      borderRadius: 'md',
      boxShadow: '0 0 0 2px token(colors.primary)',
      color: isOutLine || isGhost ? 'primary' : 'white',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      fontSize: 'medium',
      fontWeight: 'semibold',
      gap: 'sm',
      justifyContent: 'center',
      lineHeight: '130%',
      px: !children ? 'xs' : 'lg',
      py: 'xs',
      shadowColor: isOutLine ? 'currentColor' : 'primary',
      transition: 'color 300ms, filter 100ms, all 400ms',
      w: 'fit-content',
    }),
    className
  );

  return (
    <button className={rootClassName} disabled={disabled} type="button" {...props}>
      {leftElement ?? leftElement}
      {children}
      {rightElement ?? rightElement}
    </button>
  );
}

export type ButtonProps = ButtonHTMLAttributes<{
  disabled?: boolean;
}> & {
  rightElement?: React.ReactElement;
  isGhost?: boolean;
  leftElement?: React.ReactElement;
  isOutLine?: boolean;
};
