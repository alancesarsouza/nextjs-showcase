import React, { ButtonHTMLAttributes } from 'react';

import { css, cx } from '@/styled/css';

export function IconButton({ label, disabled, className, ...props }: IconButtonProps) {
  const buttonCustomization = css({
    _active: {
      bg: { _dark: 'cloud', base: 'cloud' },
      color: { _dark: 'muted', base: 'hover' },
    },
    _disabled: {
      _hover: {
        color: 'disabled',
        transform: 'scale(1)',
      },
      color: { _dark: 'border', base: 'disabled' },
      cursor: 'not-allowed',
    },
    _hover: {
      color: { _dark: 'muted', base: 'primary' },
      transform: 'scale(1.1)',
    },
    color: { _dark: 'white', base: 'primary' },
    cursor: 'pointer',
    h: 'fit-content',
    p: '2xs',
    rounded: 'lg',
    transition: 'background 200ms, transform 100ms',
    w: 'fit-content',
  });

  const rootClassName = cx(buttonCustomization, className);

  return (
    <button
      aria-label={label}
      className={rootClassName}
      disabled={disabled}
      type="button"
      {...props}
    />
  );
}

export type IconButtonProps = ButtonHTMLAttributes<{
  disabled?: boolean;
}> & {
  label: string;
};
