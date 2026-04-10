'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const CookieConsent = () => {
  const t = useTranslations('cookie')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6">
      <div className="container">
        <div className="bg-[rgb(29_29_29)] border border-clr_cusborder rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-white text-sm sm:text-base">
              {t('message')}{' '}
              <Link href="/cookies" className="text-clr_base underline duration-500 hover:opacity-80">
                {t('policy')}
              </Link>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-5 py-2.5 rounded-lg border border-clr_cusborder text-white text-sm duration-500 hover:border-clr_base hover:text-clr_base"
            >
              {t('decline')}
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 rounded-lg bg-clr_base text-clr_title text-sm font-semibold duration-500 hover:opacity-90"
            >
              {t('accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
