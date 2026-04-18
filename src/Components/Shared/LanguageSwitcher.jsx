'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'sk', label: 'SK' },
  { code: 'de', label: 'DE' },
  { code: 'ru', label: 'RU' },
]

const LanguageSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale) => {
    if (newLocale === locale) return
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${pathWithoutLocale}`)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map(({ code, label }, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && <span className="text-clr_pra text-xs">|</span>}
          <button
            onClick={() => switchLocale(code)}
            className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-300 ${
              locale === code
                ? 'bg-clr_base text-clr_title'
                : 'text-clr_white hover:text-clr_base'
            }`}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  )
}

export default LanguageSwitcher
