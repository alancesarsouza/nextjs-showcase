import React, { forwardRef } from 'react';

import styles from './float-input.module.css';

import { css, cx } from '@/styled/css';

type DynamicParamType =
  | { label: string; placeholder?: never }
  | { label?: never; placeholder: string };

export type InputFloatProps = DynamicParamType &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'label' | 'size'> & {
    error?: boolean;
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
            bg: 'transparent',
            shadow: '0 4px 4px #0002',
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
              bg: { _dark: '#6661', base: '#ddd4' },
              color: 'blue',
            })}
            {...props}
          />
          <span className={styles.label}>{legendText}</span>
          <legend className={styles.label}>{legendText}</legend>
        </fieldset>

        <p>{error}</p>
      </label>
    </div>
  );
}

export default forwardRef(FloatInput);
