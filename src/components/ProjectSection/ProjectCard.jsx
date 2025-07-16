import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400

import "@fontsource/inter"; // Defaults to weight 400
import "./ProjectCard.css";

import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`projects/${props.data.id}`, {});
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div
        className="project-inside"
        style={{
          backgroundColor: props.data.backColor,
        }}
      >
        <div className="first-section">
          <div className="project-label">{props.data.label}</div>
          <div
            className="project-title"
            style={{
              backgroundImage: `url(${props.data.coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p>{props.data.title}</p>
          </div>
        </div>
        <div className="second-section">
          <div className="project-date">{props.data.date}</div>
          <div className="project-description">
            <p className="description-title">DESCRIPTION</p>
            <p className="description-para">{props.data.description}</p>
          </div>
          <div className="project-footer">
            <div className="tools">
              <p className="description-title">TOOLS</p>
              <p className="description-para">{props.data.tools}</p>
            </div>
            <div className="view-icon">
              <Eye size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
