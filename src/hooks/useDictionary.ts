'use client';
import { useCallback, useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { dictionaries } from '@/dictionaries/constants';
import { DictionaryShape, LanguagesKeys } from '@/dictionaries/types';

export default function useDictionary() {
  const [dictionary, setDictionary] = useState<DictionaryShape | null>(null);
  const { language } = useParams();

  const fetchDictionary = useCallback(async () => {
    const data = await dictionaries[language as LanguagesKeys]();
    setDictionary(data);
    return data;
  }, [language]);

  useEffect(() => {
    if (language && !dictionary) {
      fetchDictionary();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isReady: dictionary !== null,
    ...(dictionary || ({} as Partial<DictionaryShape>)),
  } as const;
}
