import Link from 'next/link'
import { FC } from 'react'

type Props = {
  href: string
  children: any
}

export const InnerLink: FC<Props> = ({ href, children }) => (
  <Link href={href}>
    <span className="underline cursor-pointer">{children}</span>
  </Link>
)
