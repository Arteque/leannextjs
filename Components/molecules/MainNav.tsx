"use client"
import LinkTag from "@/Components/molecules/LinkTag";

const MainNav = () => {
  return (
    <>
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
    </>
  );
};

export default MainNav;
