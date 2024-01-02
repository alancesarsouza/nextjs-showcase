'use client';
import { PlusCircle, XCircle } from 'react-bootstrap-icons';
import { useFieldArray, useForm } from 'react-hook-form';

import FloatInput from './FloatInput';

import { css } from '@/styled/css';

type InputsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmation: string;
  dependents: Array<{
    name: string;
    birthDate: string;
  }>;
  street: string;
  number: number;
  postalCode: string;
};

const dependent: InputsType['dependents'][number] = { birthDate: '', name: '' };

function ExampleForm() {
  const {
    control,
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<InputsType>({
    defaultValues: { dependents: [dependent] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'dependents',
  });

  return (
    <div>
      <form
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 'md',
          p: 'lg',
          w: 'full',
        })}
        onSubmit={handleSubmit(() => null)}
      >
        <div
          className={css({
            display: 'grid',
            gap: 'sm',
            gridTemplateColumns: { base: 1, md: 2 },
          })}
        >
          <FloatInput label="First Name" {...register('firstName')} />
          <FloatInput label="Last Name" {...register('lastName')} />
        </div>

        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: 1,
          })}
        >
          <FloatInput label="E-mail" type="email" {...register('email')} />
        </div>
        <div
          className={css({
            display: 'grid',
            gap: 'sm',
            gridTemplateColumns: { base: 1, md: 2 },
          })}
        >
          <FloatInput label="Password" type="password" {...register('password')} />
          <FloatInput label="Password Confirmation" type="password" {...register('confirmation')} />
        </div>

        <h4 className={css({ fontWeight: 'semibold', mt: 'sm' })}>Address</h4>
        <div
          className={css({ display: 'flex', flexWrap: { base: 'wrap', xl: 'nowrap' }, gap: 'sm' })}
        >
          <div className={css({ w: 'full' })}>
            <FloatInput label="Street" {...register('street')} />
          </div>
          <div className={css({ w: { base: 'full', xl: 'sm' } })}>
            <FloatInput label="Number" {...register('number')} />
          </div>
          <div className={css({ w: { base: 'full', xl: 'sm' } })}>
            <FloatInput label="Postal Code" {...register('postalCode')} />
          </div>
        </div>

        <h4 className={css({ fontWeight: 'semibold', mt: 'sm' })}>Dependents</h4>

        <ul className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}>
          {fields.map((field, dependentIndex) => (
            <li
              key={field.id}
              className={css({ alignItems: 'center', display: 'flex', gap: 'xs', w: 'full' })}
            >
              <div
                className={css({
                  display: 'grid',
                  gap: 'sm',
                  gridTemplateColumns: { base: 1, md: 2 },
                  w: 'full',
                })}
              >
                <FloatInput label="Name" {...register(`dependents.${dependentIndex}.name`)} />
                <FloatInput
                  label="Birth Date"
                  {...register(`dependents.${dependentIndex}.birthDate`)}
                />
              </div>

              <button
                aria-label="Remove item"
                role="button"
                className={css({
                  _hover: { color: 'border' },
                  color: 'primary',
                  cursor: 'pointer',
                  transition: 'ease-in-out',
                })}
                onClick={() => remove(dependentIndex)}
              >
                <XCircle className={css({ h: 'icon', w: 'icon' })} />
              </button>
            </li>
          ))}

          <li
            className={css({
              display: 'flex',
              justifyContent: 'flex-end',
              w: 'full',
            })}
          >
            <button
              type="button"
              className={css({
                _hover: { color: 'border' },
                alignItems: 'center',
                bg: 'primary',
                borderRadius: 'md',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                gap: 'xs',
                px: 'sm',
                py: 'xs',
                transition: 'ease-in-out',
              })}
              onClick={() => append(dependent)}
            >
              Add
              <PlusCircle className={css({ h: 'icon', w: 'icon' })} />
            </button>
          </li>
        </ul>

        <button type="submit" />
      </form>
    </div>
  );
}

export default ExampleForm;
