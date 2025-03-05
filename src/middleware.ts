// https://nextjs.org/docs/app/building-your-application/routing/internationalization
import { type NextRequest, NextResponse } from 'next/server';

import { getMatchLocale, locales } from './utils/locale';

export const config = {
  matcher: ['/((?!_next).*)'],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some((_locale) => pathname.startsWith(`/${_locale}/`) || pathname === `/${_locale}`);

  if (hasLocale) {
    return null;
  }

  const locale = getMatchLocale();

  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}
