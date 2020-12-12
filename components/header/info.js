import Link from "next/link";

export const HeaderInfo = () => (
  <Link href="/">
    <div className="flex space-x-4 cursor-pointer">
      <span>img</span>
      <h3 className="md:hidden">Gustavo Santos</h3>
    </div>
  </Link>
);
