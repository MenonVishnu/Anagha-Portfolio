import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ProjectSection.css";
import ProjectCard from "./ProjectCard";
import { useState, useRef } from "react";

//Project Cover Images
import Project1 from "../../assets/Projects/Project-1.png";
import Project2 from "../../assets/Projects/Project-2.png";
import Project3 from "../../assets/Projects/Project-3.png";
import Project4 from "../../assets/Projects/Project-4.png";

//carousel
import Slider from "react-slick";

const projectData = [
  {
    id: 4,
    label: "App Design",
    title: "Modern Wellness App",
    date: "13th June, 2025",
    description: `The app offers a personalized wind-down plan based on mood and energy levels.
Helping 9-to-5 adults manage post-work stress and burnout.`,
    tools: "Figma | Figjam",
    coverImage: Project4,
    backColor: "#BFB7FF",
  },
  {
    id: 3,
    label: "Web Design",
    title: "Resume Builder App",
    date: "30th March 2025",
    description: `The Resume Builder App features a sleek, user-friendly UI, ensuring an effortless and professional resume creation experience.`,
    tools: "Figma ",
    coverImage: Project1,
    backColor: "#f8ff30",
  },
  {
    id: 2,
    label: "App Design",
    title: "Pet Care App",
    date: "8th Nov 2024",
    description: `The UI design for the Pet Care App is thoughtfully designed to offer a delightful & intuitive experience for pet owners. `,
    tools: "Figma | FigJam",
    coverImage: Project2,
    backColor: "#C6E6FF",
  },
  {
    id: 1,
    label: "App Design",
    title: "Food Delivery App",
    date: "07th Jan 2024",
    description: `The UI design for the Food Delivery & Calorie Tracking App combines convenience & health-consciousness in a sleek, user-friendly interface.`,
    tools: "Figma | Figjam",
    coverImage: Project3,
    backColor: "#E6FF9E",
  },
];

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="project-container">
      <div className="project-heading">PROJECTS</div>
      <div className="projects-slider">
        <Slider {...settings}>
          {projectData.map((project) => (
            <div key={project.id} className="project-slide">
              <ProjectCard data={project} />
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="projects"> */}
      {/* <ProjectCard data={projectData[0]} />
      <ProjectCard data={projectData[1]} />
      <ProjectCard data={projectData[2]} /> */}
      {/* <ProjectCard data={projectData[3]} /> */}
      {/* </div> */}
    </div>
  );
};

export default ProjectSection;
