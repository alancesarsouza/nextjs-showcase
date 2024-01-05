import React, { ButtonHTMLAttributes } from 'react';

import style from './button.module.css';

import { css, cx } from '@/styled/css';

export function Button({
  isOutLine,
  children,
  disabled,
  leftElement,
  rightElement,
  className,
  ...props
}: ButtonProps) {
  const buttonCustomization = css({
    _active: {
      bg: {
        _dark: isOutLine ? 'darkButton' : 'hover',
        base: isOutLine ? 'white' : 'hover',
      },
      color: {
        _dark: isOutLine ? 'white' : 'muted',
        base: isOutLine ? 'hover' : 'muted',
      },
    },
    _disabled: {
      _active: {
        bg: {
          _dark: isOutLine ? 'disabled' : 'disabled',
          base: isOutLine ? 'white' : 'disabled',
        },
        color: isOutLine ? 'muted' : 'muted',
      },
      bg: {
        _dark: isOutLine ? 'transparent' : 'gray',
        base: isOutLine ? 'white' : 'disabled',
      },
      color: {
        _dark: 'disabled',
        base: isOutLine ? 'disabled' : 'gray',
      },
      cursor: 'not-allowed',
      opacity: 0.7,
    },
    _hover: {},
    alignItems: 'center',
    bg: {
      _dark: isOutLine ? 'transparent' : 'darkButton',
      base: isOutLine ? 'white' : 'lightButton',
    },
    color: {
      _dark: 'white',
      base: isOutLine ? 'primary' : 'white',
    },
    cursor: 'pointer',
    display: 'flex',
    fontSize: 'medium',
    fontWeight: 'semibold',
    gap: 'sm',
    justifyContent: 'center',
    px: 'lg',
    py: 'xs',
    rounded: 'lg',
    w: 'fit-content',
  });

  const rootClassName = cx(buttonCustomization, className);

  return (
    <div className={style.container}>
      <button disabled={disabled} type="button" {...props} className={rootClassName}>
        <span className={css({ display: { base: 'none', xl: 'block' } })} />
        {leftElement ?? leftElement}
        {children}
        {rightElement ?? rightElement}
      </button>
    </div>
  );
}

export type ButtonProps = ButtonHTMLAttributes<{
  disabled?: boolean;
}> & {
  rightElement?: React.ReactElement;
  leftElement?: React.ReactElement;
  isOutLine?: boolean;
};
