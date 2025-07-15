import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./ProjectSection.css";
import ProjectCard from "./ProjectCard";

//Project Cover Images
import Project1 from "../../assets/Projects/Project-1.png";
import Project2 from "../../assets/Projects/Project-2.png";
import Project3 from "../../assets/Projects/Project-3.png";

const projectData = [
  {
    id: 1,
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
    id: 3,
    label: "App Design",
    title: "Food Delivery App",
    date: "07th Jan 2024",
    description: `The UI design for the Food Delivery & Calorie Tracking App combines convenience & health-consciousness in a sleek, user-friendly interface.`,
    tools: "Figma | Figjam",
    coverImage: Project3,
    backColor: "#E6FF9E",
  },
  {
    id: 4,
    label: "Civic Notice",
    title: "Notice Delivery App",
    date: "10th July 2024",
    description: `The UI design for the Food Delivery & Calorie Tracking App combines convenience & health-consciousness in a sleek, user-friendly interface.`,
    tools: "Figma ",
    coverImage: Project2,
    backColor: "#FFE2D1",
  },
];

const ProjectSection = () => {
  return (
    <div className="project-container">
      <div className="project-heading">PROJECTS</div>
      <div className="projects">
        <ProjectCard data={projectData[0]} />
        <ProjectCard data={projectData[1]} />
        {/* <ProjectCard data={projectData[2]} /> */}
        {/* <ProjectCard data={projectData[3]} /> */}
      </div>
    </div>
  );
};

export default ProjectSection;
