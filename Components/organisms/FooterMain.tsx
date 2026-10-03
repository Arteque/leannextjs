import LinkImg from "../molecules/LinkImg";

const FooterMain = () => {
  return (
    <footer id="footer">
      <div className="container flex items-center gap-2 bg-background/10">
        <LinkImg
          href="/"
          img={{
            src: "https://asek.academy/wp-content/uploads/2026/09/ASEK-LOGO-Main.png",
            alt: "ASEK – accueil",
            width: 425,
            height: 578,
            className: "w-10 h-auto",
          }}
        />
        <p className="text-xs">
          &copy; Tableau de bord ASEK {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
