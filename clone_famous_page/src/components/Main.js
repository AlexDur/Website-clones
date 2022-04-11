import React from "react";

//components
import Nav from "./Nav";
import Content from "./Content";
import Intersection from "./Intersection";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="container">
        <Router>
          <Nav />
          <Content />
          <Intersection />
          <Routes>
            <Route path="/" exact />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default Main;
