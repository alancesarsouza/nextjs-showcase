'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { PlusCircle, X } from 'react-bootstrap-icons';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from './Button';
import FloatInput from './FloatInput';

import { DictionaryShape } from '@/dictionaries/types';
import useDictionary from '@/hooks/useDictionary';
import { css } from '@/styled/css';

type InputsType = {
  confirmation?: string;
  dependents: Array<{ name: string; birthDate: string }>;
  email: string;
  firstName: string;
  lastName: string;
  number: number;
  password: string;
  postalCode: string;
  street: string;
};

const getSchema = ({ error }: Partial<Pick<DictionaryShape, 'error'>>) =>
  yup.object().shape({
    confirmation: yup.string().oneOf([yup.ref('password')], error?.notEquals),
    dependents: yup
      .array()
      .of(yup.object().shape({
          birthDate: yup.string().required(error?.required),
          name: yup.string().required(error?.required),
        }))
      .required('Required'),
    email: yup.string().required(error?.required),
    firstName: yup.string().required(error?.required),
    lastName: yup.string().required(error?.required),
    number: yup.number().required(error?.required),
    password: yup.string().required(error?.required),
    postalCode: yup.string().required(error?.required),
    street: yup.string().required(error?.required),
  });

const dependent: InputsType['dependents'][number] = { birthDate: '', name: '' };

function ExampleForm() {
  const { isReady, cta, labels, text, error } = useDictionary();
  const {
    control,
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<InputsType>({
    defaultValues: { dependents: [dependent] },
    resolver: yupResolver(getSchema({ error })),
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'dependents' });

  if (!isReady) {
    return null;
  }

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
          <FloatInput label={labels?.firstName || ''} {...register('firstName')} />
          <FloatInput label={labels?.lastName || ''} {...register('lastName')} />
        </div>

        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: 1,
          })}
        >
          <FloatInput label={labels?.email || ''} type="email" {...register('email')} />
        </div>
        <div
          className={css({
            display: 'grid',
            gap: 'sm',
            gridTemplateColumns: { base: 1, md: 2 },
          })}
        >
          <FloatInput label={labels?.password || ''} type="password" {...register('password')} />
          <FloatInput
            label={labels?.passwordConfirmation || ''}
            type="password"
            {...register('confirmation')}
          />
        </div>

        <h4 className={css({ fontWeight: 'semibold', mt: 'sm' })}>{text?.address}</h4>
        <div
          className={css({ display: 'flex', flexWrap: { base: 'wrap', xl: 'nowrap' }, gap: 'sm' })}
        >
          <div className={css({ w: 'full' })}>
            <FloatInput label={labels?.street || ''} {...register('street')} />
          </div>
          <div className={css({ w: { base: 'full', xl: 'sm' } })}>
            <FloatInput label={labels?.number || ''} type="number" {...register('number')} />
          </div>
          <div className={css({ w: { base: 'full', xl: 'sm' } })}>
            <FloatInput label={labels?.postalCode || ''} {...register('postalCode')} />
          </div>
        </div>

        <h4 className={css({ fontWeight: 'semibold', mt: 'sm' })}>{text?.dependents}</h4>
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
                <FloatInput
                  label={labels?.firstName || ''}
                  {...register(`dependents.${dependentIndex}.name`)}
                />
                <FloatInput
                  label={labels?.birthDate || ''}
                  {...register(`dependents.${dependentIndex}.birthDate`)}
                />
              </div>

              <Button
                isOutLine
                disabled={fields.length <= 1}
                rightElement={<X className={css({ h: 'icon', w: 'icon' })} />}
                onClick={() => remove(dependentIndex)}
              />
            </li>
          ))}

          <li
            className={css({
              display: 'flex',
              justifyContent: 'flex-end',
              w: 'full',
            })}
          >
            <Button
              isOutLine
              disabled={fields.length > 4}
              rightElement={<PlusCircle className={css({ h: 'icon', w: 'icon' })} />}
              onClick={() => append(dependent)}
            >
              {cta?.add}
            </Button>
          </li>
        </ul>

        <Button type="submit">{cta?.send}</Button>
      </form>
    </div>
  );
}

export default ExampleForm;
