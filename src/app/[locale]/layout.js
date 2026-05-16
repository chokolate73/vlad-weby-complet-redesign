import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getPageMetadata } from '@/lib/seo';
import LayoutShell from '@/Components/Shared/LayoutShell';
import CookieConsent from '@/Components/Shared/CookieConsent';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata('home', locale);
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LayoutShell>
        {children}
      </LayoutShell>
      <CookieConsent />
    </NextIntlClientProvider>
  );
}
