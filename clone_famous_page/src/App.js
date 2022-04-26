//Build fahrrad.de

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";

function App() {
  const user = {
    name: "John Doe",

    email: "john.doe@example.com",

    age: 25,

    dob: "08/02/1989",

    active: true,
  };

  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }

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
