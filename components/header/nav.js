import Link from 'next/link'

export const Nav = () => (
  <>
    <Link href="/find">
      <span className="cursor-pointer hover:underline">find</span>
    </Link>
    <Link href="/knowledge">
      <span className="cursor-pointer hover:underline">knowledge</span>
    </Link>
  </>
)
