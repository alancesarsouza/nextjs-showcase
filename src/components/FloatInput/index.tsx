import React, { forwardRef } from 'react';

import styles from './float-input.module.css';

import { css, cx } from '@/styled/css';

type DynamicParamType =
  | { label: string; placeholder?: never }
  | { label?: never; placeholder: string };

export type InputFloatProps = DynamicParamType &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'label' | 'size'> & {
    error?: boolean | string;
  };

function FloatInput(
  { id, label, placeholder, name, disabled, error, ...props }: DynamicParamType & InputFloatProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const identifier = id || name;
  const legendText = label || placeholder;

  return (
    <div
      className={css({
        '& label > fieldset > span': {
          color: 'placeholder',
        },
        _focusWithin: {
          '& fieldset': {
            bg: { _dark: '#ffffff0d', base: '#fff1' },
            shadow: '0 4px 8px #0008',
            transition: 'all 200ms',
          },
        },
      })}
    >
      <label className={cx(styles.container, css({}))} htmlFor={identifier}>
        <fieldset
          className={css({
            bg: { _dark: '#6661', base: '#ddd4' },
            border: 'sm',
            borderColor: 'corner',
            shadow: '0 2px 4px #000b',
          })}
        >
          <input
            ref={ref}
            data-cy={name}
            disabled={disabled}
            id={identifier}
            name={name}
            placeholder={!disabled ? legendText : ''}
            type="text"
            className={css({
              _placeholder: { color: 'placeholder' },
            })}
            {...props}
          />
          <span className={styles.label}>{legendText}</span>
          <legend className={styles.label}>{legendText}</legend>
        </fieldset>

        <p className={css({ color: 'danger' })}>{error}</p>
      </label>
    </div>
  );
}

export default forwardRef(FloatInput);
