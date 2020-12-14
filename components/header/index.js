import { useRouter } from 'next/router'
import { HeaderInfo } from './info'
import { HeaderNav } from './nav'

export const Header = () => {
  const router = useRouter()
  const isInHome = router.route === '/'

  return (
    <header className="flex justify-between items-center h-10 fixed z-10 top-0 left-0 right-0 pr-4 pl-4 md:pr-8 md:pl-8 bg-white dark:bg-black backdrop-filter bg-opacity-80">
      {!isInHome && <HeaderInfo />}
      {!!isInHome && <div />}
      <HeaderNav />
    </header>
  )
}
