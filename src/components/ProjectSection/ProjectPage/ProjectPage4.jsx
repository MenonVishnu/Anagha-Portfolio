import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./ProjectPage4.css";

import Image from "../../../assets/Projects/ProjectPage4/Project-4-Cover.png";
import Image1 from "../../../assets/Projects/ProjectPage4/Project-4-image1.png";
import StoryBoarding from "../../../assets/Projects/ProjectPage4/StoryBoarding.png";
import arrow1 from "../../../assets/Projects/ProjectPage4/arrow1.png";
import arrow2 from "../../../assets/Projects/ProjectPage4/arrow2.png";
import arrow3 from "../../../assets/Projects/ProjectPage4/arrow3.png";
import arrow4 from "../../../assets/Projects/ProjectPage4/arrow4.png";
import arrow5 from "../../../assets/Projects/ProjectPage4/arrow5.png";
import arrow6 from "../../../assets/Projects/ProjectPage4/arrow6.png";
import arrow7 from "../../../assets/Projects/ProjectPage4/arrow7.png";
import arrow8 from "../../../assets/Projects/ProjectPage4/arrow8.png";
import arrow9 from "../../../assets/Projects/ProjectPage4/arrow9.png";

// wireframes
import wireframe1 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe1.png";
import wireframe2 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe2.png";
import wireframe3 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe3.png";
import wireframe4 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe4.png";
import wireframe5 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe5.png";
import wireframe6 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe6.png";
import wireframe7 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe7.png";
import wireframe8 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe8.png";
import wireframe9 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe9.png";
import wireframe10 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe10.png";
import wireframe11 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe11.png";
import wireframe12 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe12.png";
import wireframe13 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe13.png";
import wireframe14 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe14.png";
import wireframe15 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe15.png";
import wireframe16 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe16.png";
import wireframe17 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe17.png";
import wireframe18 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe18.png";
import wireframe19 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe19.png";
import wireframe20 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe20.png";
import wireframe21 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe21.png";
import wireframe22 from "../../../assets/Projects/ProjectPage4/Wireframes/wireframe22.png";

// sticky notes
import stickyNote1 from "../../../assets/Projects/ProjectPage4/StickyNote1.png";
import stickyNote2 from "../../../assets/Projects/ProjectPage4/StickyNote2.png";
import stickyNote3 from "../../../assets/Projects/ProjectPage4/StickyNote3.png";
import stickyNote4 from "../../../assets/Projects/ProjectPage4/StickyNote4.png";
import stickyNote5 from "../../../assets/Projects/ProjectPage4/StickyNote5.png";
import ViewWork from "./ViewWork";

const ProjectPage4 = () => {
  return (
    <div className="project-4-project-page">
      <div className="project-4-top-section">
        <div className="project-4-background-box">
          <div className="project-4-projectpage-title">
            RECHARGE POSTWORK STRESS RECOVERY COMPANION
          </div>
          <div className="project-4-page-label">App Design</div>
          <div className="project-4-sub-section">
            <div className="project-4-sub-title">Design Thinking</div>
            <div className="project-4-sub-para">
              "Recharge" is a stress recovery app designed for 9-to-5 young
              professionals to manage post-work stress and burnout. It features
              a calming, minimal UI with soft colors and smooth navigation.
              Clean layout create a relaxing, user-friendly experience that
              helps users unwind, recharge, and reset each day.
            </div>
          </div>
        </div>
        <div className="project-4-cover-image">
          <img src={Image} alt="" />
        </div>
        <div className="stickynotes" style={{ bottom: "-120px", right: "0px" }}>
          <img id="project-4-arrow-8" src={arrow8} alt="" />
          <img src={stickyNote1} alt="" />
        </div>
      </div>

      <div className="project-4-mid-section">
        <div className="project-4-mid-title">Typeface</div>
        <div className="project-4-typeface-container">
          <div className="project-4-type-left">
            <div className="project-4-left-title">
              <p
                style={{
                  marginTop: "80px",
                  textShadow: "0px 4px 6px #00000025",
                }}
              >
                Aa
              </p>
              <p style={{ color: "#52489D", fontSize: "70px" }}>INTER</p>
            </div>
            <div className="project-4-alphabets">
              <div className="project-4-alpha">
                AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
              </div>
              <div className="project-4-numbers">1234567890</div>
            </div>
          </div>

          <div className="project-4-type-right">
            <div className="project-4-arrow-2">
              <img src={arrow2} alt="" />
            </div>
            <div
              className="project-4-mid-title"
              style={{ fontSize: "36px", margin: "-20px 0 0 0" }}
            >
              Why Inter?
            </div>
            <div className="project-4-list">
              <div className="project-4-list-element">
                <div className="project-4-list-circle"></div>
                <div className="project-4-list-content">
                  Highly <b>legible and UI-optimized</b>, making form fields and
                  content easy to read across all devices.
                </div>
              </div>
              <div className="project-4-list-element">
                <div className="project-4-list-circle"></div>
                <div className="project-4-list-content">
                  Clean and professional appearance with{" "}
                  <b>versatile weights</b> for clear visual hierarchy.
                </div>
              </div>
              <div className="project-4-list-element">
                <div className="project-4-list-circle"></div>
                <div className="project-4-list-content">
                  <b>Web-friendly and accessible</b>, offering consistent
                  performance, fast loading, and open-source flexibility.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-4-color-section">
          <div className="project-4-color-container">
            <div className="project-4-mid-title" style={{ width: "100%" }}>
              Color Scheme & Color Guide
            </div>

            <div className="project-4-type-right">
              <div className="project-4-arrow-3">
                <img src={arrow3} alt="" />
              </div>
              <div className="project-4-list">
                <div className="project-4-list-element">
                  <div className="project-4-list-circle"></div>
                  <div className="project-4-list-content">
                    Ensures <b>visual consistency</b> across all screens,
                    components, and user interactions.
                  </div>
                </div>
                <div className="project-4-list-element">
                  <div className="project-4-list-circle"></div>
                  <div className="project-4-list-content">
                    Strengthens <b>brand identity</b> by using a cohesive and
                    recognizable color palette.
                  </div>
                </div>
                <div className="project-4-list-element">
                  <div className="project-4-list-circle"></div>
                  <div className="project-4-list-content">
                    Improves <b>usability and accessibility</b> through
                    thoughtful contrast, hierarchy, and state indicators
                    <p>(e.g., hover, active, error).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-4-color-right">
            {[
              { color: "#CCC2FE", hex: "CCC2FE" },
              { color: "#CCC2FE", hex: "CCC2FE" },
              { color: "#9688FF", hex: "9688FF" },
              { color: "#9E95D8", hex: "9E95D8" },
              { color: "#7D76B2", hex: "7D76B2" },
              { color: "#E2E2E2", hex: "E2E2E2" },
              { color: "#787878", hex: "787878" },
              { color: "#4E4E4E", hex: "4E4E4E" },
            ].map(({ color, hex }) => (
              <div className="project-4-color" key={hex}>
                <div
                  className="project-4-square"
                  style={{ backgroundColor: color }}
                ></div>
                <p className="project-4-color-text">{hex}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-4-wireframe-section">
          <div className="project-4-mid-title" style={{ width: "40%" }}>
            Story Boarding & Wireframing
          </div>
          <div className="project-4-template-image">
            <img src={Image1} alt="" />
          </div>
          <div className="project-4-wireframe-container">
            <div className="project-4-wireframe-container">
              <div className="project-4-wireframe-sub">
                <div className="project-4-wireframe-title">
                  What is Story Boarding?
                </div>
                <div className="project-4-wireframe-content">
                  Storyboarding is a <b>visual representation</b> of a sequence
                  of events or actions, typically used to map out a{" "}
                  <b>narrative or user journey</b>. It's akin to a comic strip
                  where each panel represents a scene or key moment. In web or
                  app development,{" "}
                  <b>
                    storyboards are used to outline the flow of user
                    interactions
                  </b>
                  , showing how users will navigate through different features
                  or sections. Storyboarding helps teams{" "}
                  <b>visualize and plan the overall experience</b>, ensuring
                  that all elements fit cohesively and align with the intended
                  user journey.
                </div>
              </div>
              <div className="project-4-wireframe-sub">
                <div className="project-4-wireframe-title">
                  What is Wireframing?
                </div>
                <div className="project-4-wireframe-content">
                  Wireframing is a low-fidelity, blueprint-like sketch of a
                  webpage, app, or interface. It{" "}
                  <b>focuses on the structure and layout</b>, showing where key
                  elements like buttons, navigation, text, and images will be
                  placed. Wireframes are typically devoid of colors, graphics,
                  or intricate design details, allowing designers to concentrate
                  on the <b>basic layout and functionality</b>. Wireframing
                  helps teams get early feedback on usability and user flow
                  before investing time in more detailed design or development,
                  serving as a{" "}
                  <b>
                    practical tool for visualizing the user interface's
                    structure
                  </b>{" "}
                  and ensuring intuitive navigation.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Story Boarding */}
        <div
          className="project-4-fidelity-container"
          style={{
            width: "100%",
          }}
        >
          <div className="project-4-fidelity-title" style={{ width: "90%" }}>
            Story Boarding
          </div>
          <div className="project-4-story-sub">
            <img src={StoryBoarding} alt="" />
            <div
              className="stickynotes"
              style={{ bottom: "-100px", right: "-80px" }}
            >
              <img id="arrow-9" src={arrow9} alt="" />
              <img src={stickyNote2} alt="" />
            </div>
          </div>
        </div>

        <div className="project-4-fidelity-container">
          <div className="project-4-fidelity-title">Wireframes</div>

          <div className="project-4-wireframe-title-1">
            <p style={{ transform: "rotate(-9deg)" }}>
              Low Fidelity Wireframe{" "}
            </p>
            <img id="arrow-4" src={arrow4} alt="" />
          </div>

          <div className="project-4-wireframes">
            <div className="project-4-number-container">1</div>
            <div className="project-4-image-container">
              <img src={wireframe1} alt="" />
              <p>Welcome Screen</p>
            </div>
            <div className="project-4-image-container">
              <img src={wireframe2} alt="" />
              <p>Login Window</p>
            </div>
            <div className="project-4-image-container">
              <img src={wireframe3} alt="" />
              <p>Preference Window</p>
            </div>
            <div className="project-4-image-container">
              <img src={wireframe4} alt="" />
              <p>Settings / Filter</p>
            </div>
          </div>

          <div className="project-4-wireframes">
            <div className="project-4-number-container">2</div>
            <div className="project-4-image-container">
              <img src={wireframe5} alt="" />
              <p>Suggestions Window</p>
            </div>
            <div className="project-4-image-container">
              <img src={wireframe6} alt="" />
              <p>Suggestions Window</p>
            </div>
            <div className="project-4-image-container">
              <img src={wireframe7} alt="" />
              <p>Feedback Window</p>
            </div>
            <div className="project-4-image-container">
              <img src={wireframe8} alt="" />
              <p>Tracker</p>
            </div>
          </div>
          <div
            className="project-4-wireframes"
            style={{
              justifyContent: "left",
            }}
          >
            <div className="project-4-number-container">3</div>
            <div className="project-4-image-container">
              <img src={wireframe9} alt="" />
              <p>Profile</p>
            </div>
            <div className="project-4-image-container">
              <img src={wireframe10} alt="" />
              <p>Notification</p>
            </div>
            <div
              className="stickynotes"
              style={{ bottom: "80px", right: "-75px" }}
            >
              <img src={stickyNote3} alt="" />
            </div>
            <div
              className="stickynotes"
              style={{ bottom: "0px", right: "290px" }}
            >
              <img src={stickyNote4} alt="" />
            </div>
          </div>

          <div className="project-4-wireframe-title-2">
            <p style={{ transform: "rotate(9deg)" }}>
              High Fidelity Wireframe{" "}
            </p>
            <img id="arrow-5" src={arrow5} alt="" />
          </div>

          <div
            className="project-4-wireframes"
            style={{
              gap: "40px",
            }}
          >
            <div className="project-4-number-container">4</div>
            <div className="project-4-image-container">
              <img src={wireframe11} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe12} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe13} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe14} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe15} alt="" />
            </div>
          </div>

          <div className="project-4-wireframes">
            <div className="project-4-number-container">5</div>
            <div className="project-4-image-container">
              <img src={wireframe16} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe17} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe18} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe19} alt="" />
            </div>
          </div>

          <div
            className="project-4-wireframes"
            style={{
              marginBottom: "300px",
            }}
          >
            <div className="project-4-number-container">6</div>
            <div className="project-4-image-container">
              <img src={wireframe20} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe21} alt="" />
            </div>
            <div className="project-4-image-container">
              <img src={wireframe22} alt="" />
            </div>
          </div>
          <div
            className="stickynotes"
            style={{ bottom: "-100px", left: "-80px" }}
          >
            <img src={stickyNote5} alt="" />
          </div>
        </div>
      </div>
      <ViewWork />
    </div>
  );
};

export default ProjectPage4;
