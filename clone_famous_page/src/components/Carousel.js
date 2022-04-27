import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import cube_aim from "../img/cube_aim.png";
import ghost_square from "../img/ghost_square.png";
import cujo from "../img/cujo.png";
import tce from "../img/tce.png";
import croozer from "../img/croozer.png";
import chariot from "../img/chariot.png";
import hook from "../img/hook.png";
import ecoco_turkis from "../img/ecoco_turkis.png";

//Array with three objects
const cards = [
  {
    image: cube_aim,
    alt: "First slide",
    name: "Cube",
    model: "Carbon",
    price: "EUR 759,00",
  },
  {
    image: croozer,
    alt: "Second slide",
    name: "Cujo",
    model: "Aluminium",
    price: "EUR 810,00",
  },
  {
    image: hook,
    alt: "Third slide",
    name: "Canyon",
    model: "Aluminium",
    price: "EUR 1006,99",
  },
  {
    image: cujo,
    alt: "Third slide",
    name: "Brigade",
    model: "Carbon",
    price: "EUR 1250,99",
  },
  {
    image: tce,
    alt: "Third slide",
    name: "Diamant",
    model: "Aluminium",
    price: "EUR 776,99",
  },
];

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log(cards.image);

  return (
    <>
      <Carousel
        slide={false}
        controls={false}
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <div className="slide">
          {cards.map((card, index) => {
            return (
              <div key={index}>
                <Carousel.Item className="carousel_card">
                  <img src={card.image} alt="Alternative" />
                  <br />
                  <Carousel.Caption>
                    <div>{card.name}</div> <br />
                    <div>{card.model}</div>
                    <br />
                    <div>{card.price} </div>
                    <br />
                  </Carousel.Caption>
                </Carousel.Item>
              </div>
            );
          })}
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
