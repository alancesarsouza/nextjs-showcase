import { Metadata } from 'next';

// import { PageWithLanguageProps } from '@/dictionaries/types';

import { ExampleForm } from '@/containers';
// import { fetchDictionary } from '@/dictionaries';

export const metadata: Metadata = {
  description: 'Showcase front-end page', // todo: create a description
  title: 'Forms | Alan Souza ',
};

export default async function Page() {
  // const {} = await fetchDictionary(props);

  return (
    <main>
      <ExampleForm />;
    </main>
  );
}
