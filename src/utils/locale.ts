import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { LanguagesKeys } from '@/dictionaries/types';

const defaultLocale: LanguagesKeys = 'pt-BR';
const locales: LanguagesKeys[] = ['pt-BR', 'en', 'en-US', 'en-US', 'es', 'es-MX'];
const headers = { 'accept-language': `${locales.join(',')};q=0.5` };
const languages = new Negotiator({ headers }).languages();

function getMatchLocale(locale: LanguagesKeys | never = defaultLocale) {
  return match(languages, locales, locale);
}

export { defaultLocale, getMatchLocale, languages, locales };
