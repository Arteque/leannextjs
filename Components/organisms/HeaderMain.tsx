import Link from "next/link";
import Logo from "../atoms/Img";
import MainNav from "../molecules/MainNav";
import LinkImg from "../molecules/LinkImg";

const HeaderMain = () => {
  return (
    <nav className="lg:flex lg:flex-col lg:items-start w-fit border border-foreground p-10">
      <LinkImg
        href="/"
        img={{
          src: "https://asek.academy/wp-content/uploads/2026/09/ASEK-LOGO-Main.png",
          alt: "ASEK – accueil",
          width: 425,
          height: 578,
          loading: "eager",
          className: "w-30 h-auto",
        }}
      />
      <MainNav />
    </nav>
  );
};

export default HeaderMain;
