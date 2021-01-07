import { FC } from 'react'

type Props = {
  href: string
  children: any
}

export const OuterLink: FC<Props> = ({ href, children }) => (
  <a
    href={href}
    className="text-blue-700 underline cursor-pointer"
    target="_blank"
    rel="noopener noreferer"
  >
    {children}
  </a>
)
