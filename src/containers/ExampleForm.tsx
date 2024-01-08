'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { PlusCircle, XCircle } from 'react-bootstrap-icons';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../components/Button';
import FloatInput from '../components/FloatInput';

import { IconButton } from '@/components/IconButton';
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
    email: yup.string().email(error?.email).required(error?.required),
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
    formState: { errors },
  } = useForm<InputsType>({
    defaultValues: { dependents: [dependent] },
    mode: 'onTouched',
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
          py: 'xl',
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
          <FloatInput
            error={errors.firstName?.message}
            label={labels?.firstName || ''}
            {...register('firstName')}
          />
          <FloatInput
            error={errors.lastName?.message}
            label={labels?.lastName || ''}
            {...register('lastName')}
          />
        </div>

        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: 1,
          })}
        >
          <FloatInput
            error={errors.email?.message}
            label={labels?.email || ''}
            type="email"
            {...register('email')}
          />
        </div>
        <div
          className={css({
            display: 'grid',
            gap: 'sm',
            gridTemplateColumns: { base: 1, md: 2 },
          })}
        >
          <FloatInput
            error={errors.password?.message}
            label={labels?.password || ''}
            type="password"
            {...register('password')}
          />
          <FloatInput
            error={errors.confirmation?.message}
            label={labels?.passwordConfirmation || ''}
            type="password"
            {...register('confirmation')}
          />
        </div>

        <h4 className={css({ fontWeight: 'semibold', mt: 'xl' })}>{text?.address}</h4>
        <div
          className={css({ display: 'flex', flexWrap: { base: 'wrap', md: 'nowrap' }, gap: 'sm' })}
        >
          <div className={css({ w: 'full' })}>
            <FloatInput label={labels?.street || ''} {...register('street')} />
          </div>
          <div className={css({ w: { base: 'full', md: 'sm' } })}>
            <FloatInput label={labels?.number || ''} type="number" {...register('number')} />
          </div>
          <div className={css({ w: { base: 'full', md: 'sm' } })}>
            <FloatInput label={labels?.postalCode || ''} {...register('postalCode')} />
          </div>
        </div>

        <h4 className={css({ fontWeight: 'semibold', mt: 'xl' })}>{text?.dependents}</h4>
        <ul className={css({ display: 'flex', flexDir: 'column', gap: 'md' })}>
          {fields.map((field, dependentIndex) => (
            <li
              key={field.id}
              className={css({
                alignItems: 'center',
                display: 'flex',
                gap: 'xs',
                w: 'full',
              })}
            >
              <div
                className={css({
                  display: 'grid',
                  gap: 'sm',
                  gridTemplateColumns: { base: 1, md: 2 },
                  h: 'full',
                  w: 'full',
                })}
              >
                <FloatInput
                  error={errors.dependents?.[dependentIndex]?.name?.message}
                  label={labels?.firstName || ''}
                  {...register(`dependents.${dependentIndex}.name`)}
                />
                <FloatInput
                  error={errors.dependents?.[dependentIndex]?.birthDate?.message}
                  label={labels?.birthDate || ''}
                  type="date"
                  {...register(`dependents.${dependentIndex}.birthDate`)}
                />
              </div>

              <IconButton
                disabled={fields.length <= 1}
                label="remove item"
                onClick={() => remove(dependentIndex)}
              >
                <XCircle className={css({ h: 'icon', w: 'icon' })} />
              </IconButton>
            </li>
          ))}

          <li className={css({ ml: 'auto' })}>
            <Button
              isOutLine
              disabled={fields.length > 4}
              rightElement={<PlusCircle className={css({ h: 'addon', w: 'addon' })} />}
              onClick={() => append(dependent)}
            >
              {cta?.add}
            </Button>
          </li>
        </ul>

        <div
          className={css({
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 'lg',
            w: 'full',
          })}
        >
          <Button className={css({ w: 'full' })} type="submit">
            {cta?.send}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ExampleForm;
