import Link from "next/link";

export const InnerLink = ({ href, children }) => (
  <Link href={href}>
    <span>{children}</span>
  </Link>
);
