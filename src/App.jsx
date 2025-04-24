import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection.jsx";
import HeroSection from "./components/HeroSection/Herosection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <PortfolioSection />
      <HeroSection />
    </>
  );
}

export default App;
