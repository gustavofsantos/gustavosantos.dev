import { HeaderInfo } from "./info";
import { HeaderNav } from "./nav";

export const Header = () => (
  <header className="flex justify-between items-center h-10 fixed top-0 left-0 right-0 pr-4 pl-4 md:pr-8 md:pl-8 header-background">
    <HeaderInfo />
    <HeaderNav />
  </header>
);
