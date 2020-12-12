import Link from "next/link";

export const HeaderNav = () => (
  <nav className="flex space-x-4">
    <Link href="/blog">
      <span className="cursor-pointer hover:underline text-gray-900 dark:text-gray-50">
        blog
      </span>
    </Link>
    <Link href="/apps">
      <span className="cursor-pointer hover:underline text-gray-900 dark:text-gray-50">
        apps
      </span>
    </Link>
    <Link href="/about">
      <span className="cursor-pointer hover:underline text-gray-900 dark:text-gray-50">
        about
      </span>
    </Link>
  </nav>
);
