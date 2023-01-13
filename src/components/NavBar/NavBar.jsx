import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <img src="/imgs/brandLogo/logoFarmaq.png" alt="brand Logo" className="brandLogoHeader"/>
          </Link>
        </li>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/category/higienePersonal">Higiene personal</Link>
        </li>
        <li>
          <Link to="/category/higieneDental">Higiene dental</Link>
        </li>
        <li>
          <Link to="/category/desinfectantes">Desinfectantes</Link>
        </li>
        <li>
          <Link to="/category/apositos">Apósitos</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
