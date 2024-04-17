import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact-container">
        <h1 className="footer__title">CONTACT INFO</h1>
        <a className="footer__info" href="mailto:krrisantan@proton.me">
          krrisantan@proton.me
        </a>{" "}
        <br />
        <a
          className="footer__info"
          href="http://linkedin.com/in/kristopher-koski"
        >
          linkedin.com/in/kristopher-koski
        </a>{" "}
        <br />
        <a className="footer__info" href="http://github.com/Krrisantan">
          github.com/Krrisantan
        </a>
      </div>
    </div>
  );
}

export default Footer;
