import { Metadata } from 'next';

import { PageWithLanguageProps } from '@/dictionaries/types';
import { css } from '@/styled/css';

import { ExampleForm } from '@/containers';
import { fetchDictionary } from '@/dictionaries';

export const metadata: Metadata = {
  description: 'Showcase front-end page', // todo: create a description
  title: 'Forms | Alan Souza ',
};

export default async function Page<T extends PageWithLanguageProps>(props: T) {
  const {} = await fetchDictionary(props);

  return (
    <div className={css({ p: 'lg', w: 'full' })}>
      <ExampleForm />
    </div>
  );
}
