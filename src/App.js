import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Harita from "./pages/Harita";
import Detay from "./pages/Detay";
import "./App.css";



const App = () => {
  return (
    <>
      <Harita />
    </>
  );
};

export default App;
