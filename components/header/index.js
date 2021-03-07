import { useRouter } from 'next/router'
import { DesktopNav } from './desktop-nav'
import { HeaderInfo } from './info'
import { MobileNav } from './mobile-nav'

export const Header = () => {
  const router = useRouter()
  const isInHome = router.route === '/'

  return (
    <header className="flex justify-center md:justify-between items-center h-10 fixed z-10 top-0 left-0 right-0 pr-4 pl-4 md:pr-8 md:pl-8 bg-white dark:bg-coolGray-900 bg-opacity-90">
      {!isInHome && <HeaderInfo />}
      {!!isInHome && <div className="hidden md:flex" />}
      <DesktopNav />
      <MobileNav />
    </header>
  )
}
