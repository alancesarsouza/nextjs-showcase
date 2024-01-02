import { Metadata } from 'next';
import Head from 'next/head';

import ExampleForm from '@/components/ExampleForm';
import { css } from '@/styled/css';

export const metadata: Metadata = {
  description: 'Showcase front-end page', // todo: create a description
  title: 'Forms | Alan Souza ',
};

export default function Page() {
  return (
    <>
      <Head>
        <link
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          rel="stylesheet"
        />
      </Head>
      <div className={css({ p: 'lg', w: 'full' })}>
        <ExampleForm />
      </div>
    </>
  );
}
