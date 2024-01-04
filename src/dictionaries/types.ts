import { PropsWithChildren } from 'react';

import { Languages } from './constants';
import ptBR from './pt-BR';

export type DictionaryShape<T = typeof ptBR> = { [K in keyof T]: Record<keyof T[K], string> };
export type LanguagesKeys = Languages;

export type PageWithLanguageProps = PropsWithChildren & {
  params: { language: LanguagesKeys };
};
