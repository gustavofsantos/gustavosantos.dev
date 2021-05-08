import { FC } from 'react'

type Props = {
  href: string
}

export const OuterLink: FC<Props> = ({ href, children }) => (
  <a
    href={href}
    className="text-lightBlue-600 dark:text-lightBlue-300 underline cursor-pointer"
    target="_blank"
    rel="noopener noreferer"
  >
    {children}
  </a>
)
