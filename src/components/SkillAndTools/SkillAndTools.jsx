import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./SkillAndTools.css";

// Image Import
import SkillBulb from "../../assets/skills/skill-bulb.png";
import ToolImage from "../../assets/skills/Tool-image.png";
import Background from "../../assets/skills/rect-3.svg";

//Tools Asset:
import tool1 from "../../assets/skills/tools-1.png";
import tool2 from "../../assets/skills/tools-2.png";
import tool3 from "../../assets/skills/tools-3.png";
import tool4 from "../../assets/skills/tools-4.png";
import tool5 from "../../assets/skills/tools-5.png";
import tool6 from "../../assets/skills/tools-6.png";

import tool1arr from "../../assets/skills/tool-1-arr.png";
import tool2arr from "../../assets/skills/tool-2-arr.png";
import tool3arr from "../../assets/skills/tool-3-arr.png";
import tool4arr from "../../assets/skills/tool-4-arr.png";
import tool5arr from "../../assets/skills/tool-5-arr.png";
import tool6arr from "../../assets/skills/tool-6-arr.png";

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
