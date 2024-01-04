import React, { ButtonHTMLAttributes } from 'react';

import { css, cx } from '@/styled/css';

export function Button({
  children,
  isOutLine,
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
        bg: isOutLine ? 'secondary' : 'hover',
        color: isOutLine ? 'brand' : 'white',
        shadowColor: 'hover',
      },
      _disabled: {
        _hover: {
          bg: isOutLine ? 'inherit' : 'muted',
          color: isOutLine ? 'muted' : 'border',
          filter: 'none',
        },
        bg: isOutLine ? 'inherit' : 'disabled',
        color: 'border',
      },
      _hover: {
        bg: isOutLine ? 'secondary' : 'primary',
        color: isOutLine ? 'hover' : 'muted',
        filter: 'drop-shadow(1.5px 1.5px 3px #2226)',
        shadowColor: 'brand',
      },
      alignItems: 'center',
      bg: isOutLine ? 'secondary' : 'primary',
      borderRadius: 'md',
      color: isOutLine ? 'primary' : 'secondary',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      fontSize: 'large',
      fontWeight: 'semibold',
      gap: 'sm',
      lineHeight: '130%',
      px: !children ? 'xs' : 'lg',
      py: 'xs',
      shadow: isOutLine ? '0 0 0 2px currentColor' : '0 0 0 2px transparent',
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
  leftElement?: React.ReactElement;
  isOutLine?: boolean;
};
