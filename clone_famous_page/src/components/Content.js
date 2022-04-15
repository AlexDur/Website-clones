import React from "react";
import { Link } from "react-router-dom";

import main_fahrrad from "../img/main_fahrrad.png";
import cube_aim from "../img/cube_aim.png";
import ghost_square from "../img/ghost_square.png";
import cujo from "../img/cujo.png";
import tce from "../img/tce.png";
import croozer from "../img/croozer.png";
import chariot from "../img/chariot.png";
import hook from "../img/hook.png";
import ecoco_turkis from "../img/ecoco_turkis.png";

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
                      <div>Standard wheel</div>
                      <div>EUR 810,00</div>
                    </div>
                    <div className="pick-details">
                      <Link to="/cujo" className="bike_carusell_pick">
                        <img src={cujo} alt="Cujo" />
                      </Link>
                      <div>Cujo</div>
                      <div>Zuma Suspensio</div>
                      <div>EUR 899,00</div>
                    </div>
                    <div className="pick-details">
                      <Link to="/croozer" className="bike_carusell_pick">
                        <img src={croozer} alt="Croozer" />
                      </Link>
                      <div>Croozer</div>
                      <div>Kid Vaaya 2 Kinder </div>
                      <div>EUR 906,99</div>
                    </div>
                    <div className="pick-details">
                      <Link to="/tce" className="bike_carusell_pick">
                        <img src={tce} alt="tce" />
                      </Link>
                      <div>Rabeneick</div>
                      <div>TC-E Carry Deore 10-fach Disc </div>
                      <div>EUR 749,00</div>
                    </div>
                    <div className="pick-details">
                      <Link to="/chariot" className="bike_carusell_pick">
                        <img src={chariot} alt="chariot" />
                      </Link>
                      <div>Cube</div>
                      <div>Aim SL grau</div>
                      <div>EUR 749,00</div>
                    </div>
                    <div className="pick-details">
                      <Link to="/hook" className="bike_carusell_pick">
                        <img src={hook} alt="hook" />
                      </Link>
                      <div>Cube</div>
                      <div>Aim SL grau</div>
                      <div>EUR 749,00</div>
                    </div>
                    <div className="pick-details">
                      <Link to="/ecoco_turkis" className="bike_carusell_pick">
                        <img src={ecoco_turkis} alt="ecoco_turkis" />
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
