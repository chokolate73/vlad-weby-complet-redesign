'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale) => {
    if (newLocale === locale) return
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLocale('en')}
        className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-300 ${
          locale === 'en'
            ? 'bg-clr_base text-clr_title'
            : 'text-clr_white hover:text-clr_base'
        }`}
      >
        EN
      </button>
      <span className="text-clr_pra text-xs">|</span>
      <button
        onClick={() => switchLocale('sk')}
        className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-300 ${
          locale === 'sk'
            ? 'bg-clr_base text-clr_title'
            : 'text-clr_white hover:text-clr_base'
        }`}
      >
        SK
      </button>
    </div>
  )
}

export default LanguageSwitcher
