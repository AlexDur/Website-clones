import React from "react";
import { Link } from "react-router-dom";

import main_fahrrad from "../img/main_fahrrad.png";

const Content = () => {
  return (
    <>
      <div className="intro-pic">
        <img src={main_fahrrad} alt="Hintergrundbild" className="main_photo" />
        <div className="value-proposition">
          <div className="content-containers">
            <div className="imperative">Finde jetzt deins!</div>
            <div className="categories">
              <div className="bike-types">
                <Link to="/e-bikes" className="bike-details" />
              </div>
              <div className="top_picks">{/*               <Card /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
