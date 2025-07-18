import { useState } from "react";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import SkillAndTools from "./components/SkillAndTools/SkillAndTools.jsx";
import ProjectSection from "./components/ProjectSection/ProjectSection.jsx";
import CaseStudy from "./components/CaseStudy/CaseStudy.jsx";
import ThankYou from "./components/ThankYou/ThankYou.jsx";
import ScrollToTop from "./components/ScrollToTop";

import ProjectPage from "./components/ProjectSection/ProjectPage/ProjectPage.jsx";
import ProjectPage2 from "./components/ProjectSection/ProjectPage/ProjectPage2.jsx";
import ProjectPage3 from "./components/ProjectSection/ProjectPage/ProjectPage3.jsx";
import Article from "./components/Articles/Article.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PortfolioSection />
              <HeroSection />
              <SkillAndTools />
              <ProjectSection />
              <CaseStudy />
              <Article />
              <ThankYou />
            </>
          }
        />

        {/* <Route path="/projects/:id" element={<ProjectPage />} /> */}
        <Route path="/projects/1" element={<ProjectPage />} />
        <Route path="/projects/2" element={<ProjectPage2 />} />
        <Route path="/projects/3" element={<ProjectPage3 />} />
      </Routes>
    </Router>
  );
}

export default App;
