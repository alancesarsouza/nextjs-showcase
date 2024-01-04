import React, { forwardRef } from 'react';

import styles from './float-input.module.css';

import { css } from '@/styled/css';

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
    <div className={css({ color: 'primary' })}>
      <label className={styles.container} htmlFor={identifier}>
        <fieldset className={css({ border: 'sm' })}>
          <input
            ref={ref}
            data-cy={name}
            disabled={disabled}
            id={identifier}
            name={name}
            placeholder={!disabled ? legendText : ''}
            type="text"
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
