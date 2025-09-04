import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skill from "./components/Skill";
import Contracts from './components/Contracts'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skill/>
        <Contracts/>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
