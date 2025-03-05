import 'server-only';

import { dictionaries } from './constants';
import { LanguagesKeys, PageWithLanguageProps } from './types';

import { defaultLocale } from '@/utils/locale';

export async function fetchDictionary<T extends PageWithLanguageProps | never>({ params }: T) {
  const { language } = params || {};

  const lang = language in dictionaries ? language : defaultLocale;

  return await dictionaries[lang as LanguagesKeys]();
}
