import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./SkillAndTools.css";

// Image Import
import SkillBulb from "../../assets/skills/skill-bulb.svg";
import ToolImage from "../../assets/skills/Tool-image.svg";
import Background from "../../assets/skills/rect-3.svg";

//Skill Assets:
import skill1arr from "../../assets/skills/ele-1-arr.svg";
import skill2arr from "../../assets/skills/ele-2-arr.svg";
import skill3arr from "../../assets/skills/ele-3-arr.svg";
import skill4arr from "../../assets/skills/ele-4-arr.svg";
import skill5arr from "../../assets/skills/ele-5-arr.svg";
import skill6arr from "../../assets/skills/ele-6-arr.svg";

//Tools Asset:
import tool1 from "../../assets/skills/tools-1.svg";
import tool2 from "../../assets/skills/tools-2.svg";
import tool3 from "../../assets/skills/tools-3.svg";
import tool4 from "../../assets/skills/tools-4.svg";
import tool5 from "../../assets/skills/tools-5.svg";
import tool6 from "../../assets/skills/tools-6.svg";

import tool1arr from "../../assets/skills/tool-1-arr.svg";
import tool2arr from "../../assets/skills/tool-2-arr.svg";
import tool3arr from "../../assets/skills/tool-3-arr.svg";
import tool4arr from "../../assets/skills/tool-4-arr.svg";
import tool5arr from "../../assets/skills/tool-5-arr.svg";
import tool6arr from "../../assets/skills/tool-6-arr.svg";

const SkillAndTools = () => {
  return (
    <div
      className="section-container"
      // style={{
      //   backgroundImage: `url(${Background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "auto",
      // }}
    >
      <img
        className="skills-background-image"
        src={Background}
        alt="Background"
      />
      <div className="skill-container">
        <div className="skill-heading">
          <div className="skill-heading-title">
            SK
            <img src={SkillBulb} alt="skill-image" />
            LLS
          </div>

          {/* UX Design */}
          <div className="sk-ele-1">
            <p>UX Design</p>
            <div className="circle-yellow"></div>
            <img src={skill1arr} alt="skill-1-arr" />
          </div>
          {/* Interaction Design */}
          <div className="sk-ele-2">
            <p>Interaction Design</p>
            <div className="circle-skin"></div>
            <img src={skill2arr} alt="skill-2-arr" />
          </div>
          {/* Experience Design */}
          <div className="sk-ele-3">
            <p>Experience Design</p>
            <div className="circle-green"></div>
            <img src={skill3arr} alt="skill-3-arr" />
          </div>
          {/* Product Design */}
          <div className="sk-ele-4">
            <p>Product Design</p>
            <div className="circle-red"></div>
            <img src={skill4arr} alt="skill-4-arr" />
          </div>
          {/* Front-end Development */}
          <div className="sk-ele-5">
            <p>Front-end Development</p>
            <div className="circle-purple"></div>
            <img src={skill5arr} alt="skill-5-arr" />
          </div>
          {/* UI Design */}
          <div className="sk-ele-6">
            <p>UI Design</p>
            <div className="circle-blue"></div>
            <img src={skill6arr} alt="skill-6-arr" />
          </div>
        </div>

        <div className="tools-heading">
          <div className="tools-heading-title">
            TO
            <img src={ToolImage} alt="skill-image" />
            LS
          </div>
          {/* Adobe Xd */}
          <div className="to-ele-1">
            <img src={tool1} alt="tool" />
            <img src={tool1arr} alt="tool-1-arr" className="arr-1" />
          </div>
          {/* Medium */}
          <div className="to-ele-2">
            <img src={tool2} alt="tool" />
            <img src={tool2arr} alt="tool-2-arr" className="arr-2" />
          </div>
          {/* Behance */}
          <div className="to-ele-3">
            <img src={tool3} alt="tool" />
            <img src={tool3arr} alt="tool-3-arr" className="arr-3" />
          </div>
          {/* Figma */}
          <div className="to-ele-4">
            <img src={tool4} alt="tool" />
            <img src={tool4arr} alt="tool-4-arr" className="arr-4" />
          </div>
          {/* Ball */}
          <div className="to-ele-5">
            <img src={tool5} alt="tool" />
            <img src={tool5arr} alt="tool-5-arr" className="arr-5" />
          </div>
          {/* Diamond */}
          <div className="to-ele-6">
            <img src={tool6} alt="tool" />
            <img src={tool6arr} alt="tool-6-arr" className="arr-6" />
          </div>
        </div>
      </div>
      {/* <img
        className="skills-background-image"
        src={Background}
        alt="Background"
      /> */}
    </div>
  );
};

export default SkillAndTools;
