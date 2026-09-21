import Link from "next/link";
import LinkTag from "../shared/LinkTag";
import Logo from "../shared/Logo";

const HeaderMain = () => {
  return (
    <nav className="lg:flex lg:flex-col lg:items-start w-fit border border-foreground p-10">
      <Link href="/" className="pt-1">
        <Logo alt="ASEK logo pricinpal" loading="eager" className="w-30" />
      </Link>
      <ul className="w-full">
        <li>
          <LinkTag href="/">Home</LinkTag>
        </li>
        <li>
          <LinkTag href="/about">About</LinkTag>
        </li>
        <li>
          <LinkTag href="/">Services </LinkTag>
        </li>
        <li>
          <LinkTag href="/">Contact </LinkTag>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMain;
