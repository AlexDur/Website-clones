import React from "react";

//components
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" exact />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default Main;
