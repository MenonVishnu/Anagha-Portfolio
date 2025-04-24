import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/PortfolioSection/PortfolioSection.jsx";

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

export default App;
