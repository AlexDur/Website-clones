import React from "react";
import cube_icon from "../img/cube_icon.png";

const Intersection = () => {
  return (
    <>
      <div className="first_banner">
        <h4> Top-Marken</h4>
        <div className="icon_grid">
          <img src={cube_icon} alt="cube_icon" />
          <img src={cube_icon} alt="cube_icon" />
          <img src={cube_icon} alt="cube_icon" />
          <img src={cube_icon} alt="cube_icon" />
          <img src={cube_icon} alt="cube_icon" />
          <img src={cube_icon} alt="cube_icon" />
        </div>
      </div>
      <div className="services"></div>
    </>
  );
};

export default Intersection;
