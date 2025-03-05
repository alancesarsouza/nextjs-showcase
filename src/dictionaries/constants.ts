export type Languages = keyof typeof dictionaries;

import { StaticImageData } from 'next/image';

import enUs from '../../public/assets/flags/en-US.webp';
import esMx from '../../public/assets/flags/es-MX.webp';
import es from '../../public/assets/flags/es.webp';
import ptBr from '../../public/assets/flags/pt-BR.webp';
import pt from '../../public/assets/flags/pt.webp';

export const dictionaries = {
  // en: () => import('./en').then((d) => d.default),
  'en-US': () => import('./en').then((d) => d.default),
  es: () => import('./es').then((d) => d.default),
  'es-MX': () => import('./es').then((d) => d.default),
  pt: () => import('./pt-BR').then((d) => d.default),
  'pt-BR': () => import('./pt-BR').then((d) => d.default),
} as const;

export const flags: Record<Languages, StaticImageData> = {
  'en-US': enUs,
  es,
  'es-MX': esMx,
  pt,
  'pt-BR': ptBr,
};
