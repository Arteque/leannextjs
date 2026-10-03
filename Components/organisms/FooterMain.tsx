import LinkImg from "../molecules/LinkImg";

const FooterMain = () => {
  return (
    <footer id="footer">
      <div className="container">
        <LinkImg
          href="/"
          img={{
            src: "https://asek.academy/wp-content/uploads/2026/09/ASEK-LOGO-Main.png",
            alt: "ASEK – accueil",
            width: 425,
            height: 578,
            className: "w-30 h-auto",
          }}
        />
      </div>
    </footer>
  );
};

export default FooterMain;
