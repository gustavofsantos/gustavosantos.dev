import Link from 'next/link'

export const InnerLink = ({ href, children }) => (
  <Link href={href}>
    <span className="text-blue-700 underline cursor-pointer">{children}</span>
  </Link>
)
