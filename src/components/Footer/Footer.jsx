import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (     
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <Link to="/">
                        <img src="/imgs/brandLogo/logoFarmaq.png" alt="brand Logo" className="brandLogoHeader"/>
                    </Link>
                </div>

                <div className="footer__quickMenu">                    
                    <ul className="quickMenu__content">
                        <li className="quickMenu__title">
                            <h4>Quick Menu</h4>
                        </li>
                        <li className="quickMenu__item">
                            <Link to="/">Todos</Link>
                        </li>
                        <li className="quickMenu__item">
                            <Link to="/category/higienePersonal">Higiene personal</Link>
                        </li>
                        <li className="quickMenu__item">
                            <Link to="/category/higieneDental">Higiene dental</Link>
                        </li>
                        <li className="quickMenu__item">
                         <Link to="/category/desinfectantes">Desinfectantes</Link>
                        </li>
                        <li className="quickMenu__item">
                            <Link to="/category/apositos">Apósitos</Link>
                        </li>
                    </ul>
                </div>

                <ul className="footer__socialMedia">
                    <li className="socialMedia__item">
                        <a className="socialMedia__item-content a" href="https://www.instagram.com/">
                            <img className="a__img" src="/imgs/footerImg/whatsapp.png" alt="whatsapp icon"/>
                        </a>
                    </li>
                    <li className="socialMedia__item">
                        <a className="socialMedia__item-content a" href="https://www.instagram.com/">
                            <img className="a__img" src="/imgs/footerImg/instagram.png" alt="instagram icon"/>
                        </a>
                    </li>
                    <li className="socialMedia__item">
                        <a className="socialMedia__item-content a" href="https://www.instagram.com/">
                            <img className="a__img" src="/imgs/footerImg/facebook.png" alt="facebook icon"/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer__rights">
                <span></span>
                <div >
                    <p className="rights__text">
                        © 2023 Farmaq Todos los derechos reservados - by <a href="https://github.com/MarianoQF">MQ</a>
                    </p>          
                </div>
            </div>
        </footer>    
    );
  }
  
  export default Footer;