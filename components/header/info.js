import Link from 'next/link'
import Image from 'next/image'

export const HeaderInfo = () => (
  <div className="hidden md:flex">
    <Link href="/">
      <div className="flex space-x-4 cursor-pointer">
        <div className="flex justify-center align-center">
          <Image
            src="/images/profile.jpg"
            alt="Profile picture"
            className="rounded-full object-cover"
            width={32}
            height={32}
          />
        </div>
        <h3 className="hidden justify-start items-center md:flex">
          Gustavo Santos
        </h3>
      </div>
    </Link>
  </div>
)
