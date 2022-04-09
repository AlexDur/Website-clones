import React from "react";
import { Link } from "react-router-dom";

import main_fahrrad from "../img/main_fahrrad.png";
import cube_aim from "../img/cube_aim.png";
import ghost_square from "../img/ghost_square.png";

const Content = () => {
  return (
    <>
      <div className="intro-pic">
        <img src={main_fahrrad} alt="Hintergrundbild" className="main_photo" />
        <div className="value-proposition">
          <div className="content-containers">
            <div className="imperative">
              <br />
              <h3>Finde jetzt deins!</h3>
              <div style={{ fontSize: 30, marginTop: -30 }}>
                Steig um, steig auf, fahr Rad. jetzt dein Rad bestellen!
              </div>
            </div>

            <div className="kategorien">
              <div className="top-kategorien">Top-Kategorien</div>
              <div className="radtypen">
                <Link to="/e-bikes" className="bike-details">
                  E-BIKES
                </Link>
                <Link to="/trekking-räder" className="bike-details">
                  Trekkingräder
                </Link>
                <Link to="/city-räder" className="bike-details">
                  Cityräder
                </Link>
                <Link to="/aktuell_im_tv" className="bike-details">
                  Aktuell im TV
                </Link>
              </div>
              <div className="top_picks">
                <h4>Top Picks</h4>
                <div className="pick_carusell">
                  <div className="picks_cards">
                    <div className="pick-details">
                      <Link to="/cube_aim" className="bike_carusell_pick">
                        <img src={cube_aim} alt="Cube aim" />
                      </Link>
                      <div>Cube</div>
                      <div>Aim SL grau</div>
                      <div>EUR 749,00</div>
                    </div>
                    <div className="pick-details">
                      <Link to="/cube_aim" className="bike_carusell_pick">
                        <img src={ghost_square} alt="Cube aim" />
                      </Link>
                      <div>Cube</div>
                      <div>Aim SL grau</div>
                      <div>EUR 749,00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
