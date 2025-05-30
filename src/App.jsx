import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection.jsx";
import HeroSection from "./components/HeroSection/Herosection.jsx";
import SkillAndTools from "./components/SkillAndTools/SkillAndTools.jsx";
import ProjectSection from "./components/ProjectSection/ProjectSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <PortfolioSection />
      <HeroSection />
      <SkillAndTools />
      <ProjectSection />
    </>
  );
}

export default App;
