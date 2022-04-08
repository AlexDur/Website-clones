/* import React, { useState } from "react"; */
import { Link } from "react-router-dom";

import fahrrad_de from "../img/fahrrad_de.png";

const Nav = () => {
  /* const [click, setClick] = useState(false); */

  /* const handleClick = () => (!click) */
  return (
    <>
      <div className="topline">
        Steig um, steig auf, fahr Rad. Jetzt dein Rad bestellen!"
      </div>
      <div className="kauf_konditionen-container">
        <div>30 TAGE KOSTENLOSE RÜCKGABE</div>
        <div>KAUF AUF RECHNUNG</div>
        <div>BIKE AUFBAUSERVICE</div>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="suchfeld">
            <form>
              <label>
                <input type="text" placeholder="Wunschprodukt finden" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <img src={fahrrad_de} className="image" alt="company-logo" />
          <div className="navbar-cards">
            {/* Bring in Cards here, containg icon and subtitle */}
            <div className="navbar-card">
              <Link to="/payback" className="navbar-logo">
                PAYBACK
              </Link>
            </div>
            <div className="navbar-card">
              <Link to="/anmeldung" className="navbar-logo">
                Jetzt anmelden
              </Link>
            </div>
            <div className="navbar-card">
              <Link to="/wunschliste" className="navbar-logo">
                Wunschliste
              </Link>
            </div>
            <div className="navbar-card">
              <Link to="/warenkorb" className="navbar-logo">
                Warenkorb
              </Link>
            </div>
          </div>

          {/*   <i className={click ? "" : ""} /> */}
        </div>
        <div className="menu-tabs">
          <Link to="/fahrraeder_nav" className="navbar-logo">
            FAHRRÄDER
          </Link>
          <Link to="/e_bikes_nav" className="navbar-logo">
            E-Bikes
          </Link>
          <Link to="/bekleidung_nav" className="navbar-logo">
            Bekleidung
          </Link>
          <Link to="/bekleidung_nav" className="navbar-logo">
            ZUBEHÖR
          </Link>
          <Link to="/bekleidung_nav" className="navbar-logo">
            TEILE
          </Link>
          <Link to="/bekleidung_nav" className="navbar-logo">
            AKTIVITÄTEN
          </Link>
          <Link
            to="/bekleidung_nav"
            className="navbar-logo"
            style={{ color: "red" }}
          >
            SALE
          </Link>
          <Link to="/bekleidung_nav" className="navbar-logo">
            MARKEN
          </Link>
          <Link to="/bekleidung_nav" className="navbar-logo">
            SERVICE & BERATUNG
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
