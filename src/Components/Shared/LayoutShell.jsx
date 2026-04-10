'use client'
import { usePathname } from 'next/navigation'
import Header from './Header/Header'
import Footer from './Footer'

const hideLayoutRoutes = ['/businesscard']

const LayoutShell = ({ children }) => {
  const pathname = usePathname()
  const hideLayout = hideLayoutRoutes.some(route => pathname.endsWith(route))

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}

export default LayoutShell
