import Link from 'next/link'
import { FC } from 'react'

type Props = {
  href: string
}

export const InnerLink: FC<Props> = ({ href, children }) => (
  <Link href={href}>
    <span className="text-blue-700 underline cursor-pointer">{children}</span>
  </Link>
)
