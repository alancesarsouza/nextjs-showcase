import { Metadata } from 'next';

import ExampleForm from '@/components/ExampleForm';
import { css } from '@/styled/css';

import { PageWithLanguageProps, useDictionary } from '@/dictionaries';

export const metadata: Metadata = {
  description: 'Showcase front-end page', // todo: create a description
  title: 'Forms | Alan Souza ',
};

export default async function Page<T extends PageWithLanguageProps>(props: T) {
  const translation = await useDictionary(props);
  console.log(translation);

  return (
    <div className={css({ p: 'lg', w: 'full' })}>
      <p>{translation.products.cart}</p>
      <ExampleForm />
    </div>
  );
}
