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
import ProjectPage from "./components/ProjectSection/ProjectPage/ProjectPage.jsx";

function App() {
	return (
		<Router>
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
							<ThankYou />
						</>
					}
				/>

				<Route path="/projects/:id" element={<ProjectPage />} />
			</Routes>
		</Router>
	);
}

export default App;
