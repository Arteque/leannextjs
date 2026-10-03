import Link from "next/link";
import Logo from "../atoms/Logo";
import MainNav from "../molecules/MainNav";

const HeaderMain = () => {
  return (
    <nav className="lg:flex lg:flex-col lg:items-start w-fit border border-foreground p-10">
      <Link href="/" className="pt-1">
        <Logo alt="ASEK logo pricinpal" loading="eager" className="w-30" />
      </Link>
      <MainNav />
    </nav>
  );
};

export default HeaderMain;
