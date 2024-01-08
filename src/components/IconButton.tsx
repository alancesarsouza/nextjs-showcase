import React, { ButtonHTMLAttributes } from 'react';

import { css, cx } from '@/styled/css';

import recipes from '@/recipes';

export function IconButton({ label, disabled, className, ...props }: IconButtonProps) {
  const buttonCustomization = css({
    '& svg': {
      color: 'inherit',
      fill: 'inherit',
    },
    _active: {
      bg: 'glass',
      color: { _dark: 'muted', base: 'hover' },
      fill: { _dark: 'muted', base: 'hover' }, // important to icons
    },
    _disabled: {
      _hover: {
        color: 'disabled',
      },
      color: { _dark: 'disabled', base: 'disabled' },
      cursor: 'not-allowed',
      fill: { _dark: 'disabled', base: 'disabled' }, // important to icons
    },
    _hover: {
      color: { _dark: 'muted', base: 'primary' },
      fill: { _dark: 'muted', base: 'primary' }, // important to icons
    },
    color: { _dark: 'white', base: 'primary' },
    cursor: 'pointer',
    fill: { _dark: 'white', base: 'primary' }, // important to icons
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
