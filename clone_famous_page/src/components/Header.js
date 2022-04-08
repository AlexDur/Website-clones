import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="intro-pic">
        <div className="value-proposition">
          <div className="imperative"></div>
          <div className="categories">
            <div className="bike-types">
              <Link to="/e-bikes" className="bike-details" />
            </div>
            <div className="top_picks">{/*               <Card /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
