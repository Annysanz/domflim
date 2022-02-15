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
            <Link to="/">Inicio</Link>
            <Link to="/">Sobre Nosotros</Link>
            <Link to="/">Término de los servicios</Link>
            <Link to="/">Contacto</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Vivir</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Politicas de Privacidad</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Usted tiene que ver</Link>
            <Link to="/">Lanzamiento reciente</Link>
            <Link to="/">Superior IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
