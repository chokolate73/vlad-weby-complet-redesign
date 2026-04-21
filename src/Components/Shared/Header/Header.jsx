'use client'
import React from 'react'
import RanderHeader from './RanderHeader'
import Banner from '@/Components/Banner'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

const Header = () => {
  const pathname = usePathname()
  const locale = useLocale()
  // Slovak is the default locale and renders at root (no /sk prefix),
  // so the home pathname is `/`. Other locales use /<locale>.
  const isHome =
    pathname === '/' ||
    pathname === `/${locale}` ||
    pathname === `/${locale}/`

  return (
    <>
      {isHome ? (
        <div className={`bg-banner_image bg-no-repeat bg-center bg-cover bg-fixed relative overflow-hidden`}>
          <RanderHeader />
          <Banner />
        </div>
      ) : (
        <RanderHeader />
      )}
    </>
  )
}

export default Header
