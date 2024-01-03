import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { Languages } from '@/dictionaries';

const defaultLocale = 'pt-BR';
const headers = { 'accept-language': 'en-US,en;q=0.5' };
const languages = new Negotiator({ headers }).languages();
const locales = ['pt-BR', 'en', 'en-US', 'en-US', 'es', 'es-MX'];

function getMatchLocale(locale: Languages | never = defaultLocale) {
  return match(languages, locales, locale);
}

export { defaultLocale, getMatchLocale, languages, locales };
