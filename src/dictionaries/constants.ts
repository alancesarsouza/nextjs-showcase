export type Languages = keyof typeof dictionaries;

export const dictionaries = {
  en: () => import('./en').then((d) => d.default),
  'en-US': () => import('./en').then((d) => d.default),
  es: () => import('./es').then((d) => d.default),
  'es-MX': () => import('./es').then((d) => d.default),
  pt: () => import('./pt-BR').then((d) => d.default),
  'pt-BR': () => import('./pt-BR').then((d) => d.default),
} as const;
