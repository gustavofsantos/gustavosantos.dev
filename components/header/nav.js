import Link from "next/link";

export const HeaderNav = () => (
  <nav className="flex space-x-4">
    <Link href="/blog">
      <span className="cursor-pointer hover:underline">blog</span>
    </Link>
    <Link href="/about">about</Link>
    <Link href="/apps">apps</Link>
  </nav>
);
