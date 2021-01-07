import { FC } from 'react'

type Props = {
  href: string
  children: any
}

export const OuterLink: FC<Props> = ({ href, children }) => (
  <a href={href} className="underline" target="_blank" rel="noopener noreferer">
    {children}
  </a>
)
