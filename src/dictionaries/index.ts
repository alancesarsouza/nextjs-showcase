import { PropsWithChildren } from 'react';

import { defaultLocale } from '@/utils/locale';

import 'server-only';

const dictionaries = {
  en: () => import('./en').then((d) => d.default),
  'en-US': () => import('./en').then((d) => d.default),
  es: () => import('./es').then((d) => d.default),
  'es-MX': () => import('./es').then((d) => d.default),
  pt: () => import('./pt-BR').then((d) => d.default),
  'pt-BR': () => import('./pt-BR').then((d) => d.default),
} as const;

export type Languages = keyof typeof dictionaries;

export type PageWithLanguageProps = PropsWithChildren & {
  params: { language: Languages };
};

export const getDictionary = async (locale: Languages) => dictionaries[locale]();

export async function useDictionary<T extends PageWithLanguageProps>({ params }: T) {
  const { language } = params || {};

  const lang = language in dictionaries ? language : defaultLocale;

  return await dictionaries[lang as Languages]();
}
