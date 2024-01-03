const ptBR = {
  a: {
    b: {
      c: '',
    },
  },
} as const;

type First = keyof typeof ptBR;
type Second = keyof (typeof ptBR)[keyof typeof ptBR];
type Third = keyof (typeof ptBR)[keyof typeof ptBR][keyof (typeof ptBR)[keyof typeof ptBR]];

export type DictionaryShape = Record<First, Record<Second, Record<Third, string>>>;

export default ptBR;
