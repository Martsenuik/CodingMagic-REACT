import "../../components/footer/footer.css";
import logo from "../../images/svg/logo.svg";

export const Footer = () => {
  return (
    <section className="footetr">
      <img className="footer-logo" src={logo} alt="logo" />

      <p className="footer-text">
        Тел: +38 (123) 456 78 90 <br />
        E-Mail: codingmagic@gmail.com <br />
        Facebook: CodingMagic <br />
        Twitter: CodingMagic <br />
        Instagram: CodingMagic
      </p>
      <div>
        <input
          type="text"
          className="footer-input"
          placeholder="Ваша ел. адреса..."
        />
        <button type="button" className="footer-button">
          Підписатись
        </button>
      </div>
      <p className="footer-p">
        *Підписавшись, Ви зможете ортимувати інформаццію про новинки на сайті
      </p>
    </section>
  );
};
