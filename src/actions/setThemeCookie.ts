'use server';
import { cookies } from 'next/headers';

import { themeKey } from '@/utils';

export default async function setCookie(theme: 'dark' | 'light') {
  cookies().set(themeKey, theme);
}
