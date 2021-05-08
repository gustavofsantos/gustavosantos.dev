import Link from 'next/link'

export const Nav = () => (
  <>
    <Link href="/find">
      <span className="cursor-pointer hover:underline">find</span>
    </Link>
    <Link href="/a">
      <span className="cursor-pointer hover:underline">blog</span>
    </Link>
  </>
)
