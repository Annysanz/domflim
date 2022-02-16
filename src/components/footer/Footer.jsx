import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/domflim.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <h3>DomFlim</h3>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/About">Sobre Nosotros</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/Politicas">Políticas de Privacidad</Link>
            <Link to="/Contact">Contacto</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/Terminos">Término de usos</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
