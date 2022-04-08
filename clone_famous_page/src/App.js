//Build fahrrad.de

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      <Main />
    </>
  );
}

export default App;
