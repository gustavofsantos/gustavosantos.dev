import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { LogoIcon } from '../icons/logo-icon'
import { Nav } from './nav'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex flex-col justify-start items-center w-full md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative flex justify-center items-center outline-none"
      >
        <LogoIcon size="32" />
        <div className="absolute font-bold text-xl transform translate-x-8 text-coolGray-700 dark:text-coolGray-300">
          {!open && <HiChevronDown />}
          {open && <HiChevronUp />}
        </div>
      </button>

      {open && (
        <div className="fixed p-2 w-full max-w-md rounded-md shadow-lg top-12 bg-gradient-to-br text-blueGray-800 from-pink-100 to-indigo-300 dark:bg-black backdrop-filter bg-opacity-90">
          <nav className="flex flex-col justify-start items-start w-full space-y-4 font-bold">
            <Nav />
          </nav>
        </div>
      )}
    </div>
  )
}
