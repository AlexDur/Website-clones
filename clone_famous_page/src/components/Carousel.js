import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import cube_aim from "../img/cube_aim.png";
/* import ghost_square from "../img/ghost_square.png";
import cujo from "../img/cujo.png"; */
import tce from "../img/tce.png";
import croozer from "../img/croozer.png";
import chariot from "../img/chariot.png";
import hook from "../img/hook.png";
import ecoco_turkis from "../img/ecoco_turkis.png";

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <div className="slide">
          <Carousel.Item className="carousel_card">
            <img className="d-block w-100" src={cube_aim} alt="First slide" />
            <Carousel.Caption>
              <h4>Cube</h4>
              <div>Aim SL </div>
              <br />
              <div>EUR 7459,00</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel_card">
            <img className="d-block w-100" src={croozer} alt="Second slide" />

            <Carousel.Caption>
              <h4>Cujo</h4>
              <div>Zuma </div>
              <br />
              <div>EUR 810,00</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_card">
            <img className="d-block w-100" src={chariot} alt="Third slide" />

            <Carousel.Caption className="caption">
              <h4>Croozer</h4>
              <p>Kid Vaaya</p>

              <p>EUR 906,99</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_card">
            <img className="d-block w-100" src={hook} alt="Third slide" />

            <Carousel.Caption>
              <h4>Hook</h4>
              <div>Fast </div>
              <br />
              <div>EUR 1006,99</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_card">
            <img className="d-block w-100" src={tce} alt="Third slide" />

            <Carousel.Caption>
              <h4>Hook</h4>
              <div>Manti Bear </div>
              <br />
              <div>EUR 1006,99</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel_card">
            <img
              className="d-block w-100"
              src={ecoco_turkis}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4>Ecoco </h4>
              <div>Fast 2</div>
              <br />
              <div>EUR 996,99</div>
            </Carousel.Caption>
          </Carousel.Item>
        </div>
      </Carousel>
    </>
  );
}

export default CarouselComponent;

/*  <div className="pick_carusell">
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
       <div>EUR 1.699,00</div>
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
 </div>; */
