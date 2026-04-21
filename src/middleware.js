import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const LOCALE_COOKIE = 'vw_locale';
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 1 year

// Country → site locale. Everything unlisted falls through to English.
const COUNTRY_TO_LOCALE = {
  SK: 'sk',
  CZ: 'sk',
  DE: 'de',
  AT: 'de',
  CH: 'de',
};

// Crawler UAs must not be geo-redirected — each locale has its own canonical URL
// and hreflang alternates, and bouncing bots by IP would fragment indexing.
const BOT_UA = /(bot|crawler|spider|slurp|facebookexternalhit|embedly|quora link preview|pinterest|bingpreview|vkshare|w3c_validator|lighthouse|gtmetrix|pagespeed|applebot|headlesschrome)/i;

function detectCountry(request) {
  if (request.geo?.country) return request.geo.country.toUpperCase();
  const vercel = request.headers.get('x-vercel-ip-country');
  if (vercel) return vercel.toUpperCase();
  const cf = request.headers.get('cf-ipcountry');
  if (cf) return cf.toUpperCase();
  return null;
}

function isBot(request) {
  const ua = request.headers.get('user-agent') || '';
  return BOT_UA.test(ua);
}

const DEBUG = process.env.NODE_ENV !== 'production';

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  // Geo redirect only fires on the bare root URL — never on deep links,
  // so a shared `/en/blog/...` URL always opens in the intended locale.
  const isRoot = pathname === '/';
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (isRoot && !cookieLocale && !isBot(request)) {
    const country = detectCountry(request);
    const targetLocale = country ? COUNTRY_TO_LOCALE[country] || 'en' : null;

    if (DEBUG) {
      console.log('[middleware /]', { country, targetLocale, ua: (request.headers.get('user-agent') || '').slice(0, 60) });
    }

    if (targetLocale && targetLocale !== 'sk') {
      const url = request.nextUrl.clone();
      url.pathname = `/${targetLocale}`;
      const response = NextResponse.redirect(url, 302);
      response.cookies.set(LOCALE_COOKIE, targetLocale, {
        maxAge: COOKIE_MAX_AGE_SECONDS,
        path: '/',
        sameSite: 'lax',
      });
      return response;
    }

    // SK/CZ visitor (or country detection failed) → let next-intl render Slovak.
    // Pin the cookie so the geo check doesn't rerun on every page load.
    const response = intlMiddleware(request);
    if (DEBUG) {
      console.log('[middleware / → intl]', { status: response.status, location: response.headers.get('location') });
    }
    response.cookies.set(LOCALE_COOKIE, targetLocale || 'sk', {
      maxAge: COOKIE_MAX_AGE_SECONDS,
      path: '/',
      sameSite: 'lax',
    });
    return response;
  }

  const response = intlMiddleware(request);
  if (DEBUG && isRoot) {
    console.log('[middleware / pass-through]', { cookieLocale, status: response.status, location: response.headers.get('location') });
  }
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
