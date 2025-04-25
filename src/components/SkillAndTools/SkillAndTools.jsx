import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./SkillAndTools.css";

// Image Import
import SkillBulb from "../../assets/skills/skill-bulb.png";
import ToolImage from "../../assets/skills/Tool-image.png";
import Background from "../../assets/skills/rect-3.svg";

//Skills Asset:
import ele1 from "../../assets/skills/ele-1.png";
import ele1arr from "../../assets/skills/ele-1-arr.png";

const SkillAndTools = () => {
  return (
    <div className="section-container">
      <div className="skill-container">
        <div className="skill-heading">
          SK
          <img src={SkillBulb} alt="skill-image" />
          LLS
          {/* UX Design */}
          <div className="sk-ele-1">
            <p>UX Design</p>
            <div className="circle-yellow"></div>
          </div>
          {/* Interaction Design */}
          <div className="sk-ele-2">
            <p>Interaction Design</p>
            <div className="circle-skin"></div>
          </div>
          {/* Experience Design */}
          <div className="sk-ele-3">
            <p>Experience Design</p>
            <div className="circle-green"></div>
          </div>
          {/* Product Design */}
          <div className="sk-ele-4">
            <p>Product Design</p>
            <div className="circle-red"></div>
          </div>
          {/* Front-end Development */}
          <div className="sk-ele-5">
            <p>Front-end Development</p>
            <div className="circle-purple"></div>
          </div>
          {/* UI Design */}
          <div className="sk-ele-6">
            <p>UI Design</p>
            <div className="circle-blue"></div>
          </div>
        </div>

        <div className="tools-heading">
          TO <img src={ToolImage} alt="skill-image" /> LS
        </div>
      </div>
      <img className="background-image" src={Background} alt="Background" />
    </div>
  );
};

export default SkillAndTools;
