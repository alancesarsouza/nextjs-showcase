import React, { ButtonHTMLAttributes } from 'react';

import { css, cx } from '@/styled/css';

import recipes from '@/recipes';

export function IconButton({ label, disabled, className, ...props }: IconButtonProps) {
  const buttonCustomization = css({
    _active: {
      bg: 'glass',
      color: { _dark: 'muted', base: 'hover' },
    },
    _disabled: {
      _hover: {
        color: 'disabled',
      },
      color: { _dark: 'border', base: 'disabled' },
      cursor: 'not-allowed',
    },
    _hover: {
      color: { _dark: 'muted', base: 'primary' },
    },
    color: { _dark: 'white', base: 'primary' },
    cursor: 'pointer',
    h: 'fit-content',
    p: 'xs',
    rounded: 'lg',
    transition: 'background 200ms',
    w: 'fit-content',
  });

  const rootClassName = cx(
    recipes.highlight({ type: 'actionHover' }),
    buttonCustomization,
    className
  );

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
