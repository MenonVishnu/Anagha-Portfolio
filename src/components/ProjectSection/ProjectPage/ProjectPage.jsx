import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./ProjectPage.css";
import ViewWork from "./ViewWork";

// import Image from "../../../assets/Projects/Project-1-Cover.png";
import Image from "../../../assets/Projects/ProjectPage1/Project-1-Cover.png";
import arrow1 from "../../../assets/Projects/ProjectPage1/arrow1.png";
import arrow2 from "../../../assets/Projects/ProjectPage1/arrow2.png";
import arrow3 from "../../../assets/Projects/ProjectPage1/arrow3.png";
import arrow4 from "../../../assets/Projects/ProjectPage1/arrow4.png";
import arrow5 from "../../../assets/Projects/ProjectPage1/arrow5.png";

// vector
import vector1 from "../../../assets/Projects/ProjectPage1/vector1.png";
import vector2 from "../../../assets/Projects/ProjectPage1/vector2.png";
import vector3 from "../../../assets/Projects/ProjectPage1/vector3.png";
import vector4 from "../../../assets/Projects/ProjectPage1/vector4.png";
import vector5 from "../../../assets/Projects/ProjectPage1/vector5.png";
import vector6 from "../../../assets/Projects/ProjectPage1/vector6.png";
import vector7 from "../../../assets/Projects/ProjectPage1/vector7.png";
import vector8 from "../../../assets/Projects/ProjectPage1/vector8.png";

// wireframes
import wireframe1 from "../../../assets/Projects/ProjectPage1/wireframe1.png";
import wireframe2 from "../../../assets/Projects/ProjectPage1/wireframe2.png";
import wireframe3 from "../../../assets/Projects/ProjectPage1/wireframe3.png";

// sticky notes
import stickyNote1 from "../../../assets/Projects/ProjectPage1/StickyNote1.png";
import stickyNote2 from "../../../assets/Projects/ProjectPage1/StickyNote2.png";
import stickyNote3 from "../../../assets/Projects/ProjectPage1/StickyNote3.png";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="top-section">
        <div className="background-box">
          <div className="projectpage-title">RESUME BUILDER APP</div>
          <div className="page-label">Web Design</div>
          <div className="sub-section">
            <div className="sub-title">Design Thinking</div>

            <div className="sub-para">
              The UI design for the Resume Builder App is meticulously crafted
              to provide a seamless & elegant user experience, allowing
              individuals to effortlessly create professional resumes. With a
              sophisticated, modern interface, the design guides users through
              each step with clarity & precision.
            </div>
          </div>
        </div>
        <div className="cover-image">
          <img src={Image} alt="" />
        </div>
        <div className="arrow-1">
          <img src={arrow1} alt="" />
        </div>
        <div
          className="stickynotes"
          style={{
            bottom: "80px",
            right: "0px",
          }}
        >
          <img src={stickyNote1} alt="" />
        </div>
        <div
          className="stickynotes"
          style={{
            bottom: "-120px",
            right: "260px",
          }}
        >
          <img src={stickyNote2} alt="" />
        </div>
      </div>
      <div className="mid-section">
        <div className="mid-title">Typeface</div>
        <div className="typeface-container">
          <div className="type-left">
            <div className="left-title">Aa</div>
            <div className="alphabets">
              <p>AaBbCcDdEeFfGgHhIiJjKkLl</p>
              <p>MmNnOoPpQqRrSsTtUuVv</p>
              <p>WwXxYyZz</p>
              <p>1234567890</p>
            </div>
          </div>
          <div className="type-right">
            <div className="arrow-2">
              <img src={arrow2} alt="" />
            </div>
            <div
              className="mid-title"
              style={{
                fontSize: "36px",
                margin: "-20px 0 0 0",
              }}
            >
              Why Inter?
            </div>
            <div className="list">
              <div className="list-element">
                <div className="list-circle"></div>
                <div className="list-content">
                  Highly <b>legible and UI-optimized</b>, making form fields and
                  content easy to read across all devices.
                </div>
              </div>
              <div className="list-element">
                <div className="list-circle"></div>
                <div className="list-content">
                  Clean and professional appearance with{" "}
                  <b>versatile weights</b> for clear visual hierarchy.
                </div>
              </div>
              <div className="list-element">
                <div className="list-circle"></div>
                <div className="list-content">
                  <b>Web-friendly and accessible</b>, offering consistent
                  performance, fast loading, and open-source flexibility.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="color-section">
          <div className="color-container">
            <div
              className="mid-title"
              style={{
                width: "400px",
              }}
            >
              Color Scheme & Color Guide
            </div>

            <div className="type-right">
              <div className="arrow-3">
                <img src={arrow3} alt="" />
              </div>
              <div className="list">
                <div className="list-element">
                  <div className="list-circle"></div>
                  <div className="list-content">
                    Ensures <b>visual consistency</b> across all screens,
                    components, and user interactions.
                  </div>
                </div>
                <div className="list-element">
                  <div className="list-circle"></div>
                  <div className="list-content">
                    Strengthens <b>brand identity</b> by using a cohesive and
                    recognizable color palette.
                  </div>
                </div>
                <div className="list-element">
                  <div className="list-circle"></div>
                  <div className="list-content">
                    Improves <b>usability and accessibility</b> through
                    thoughtful contrast, hierarchy, and state indicators
                    <p>(e.g., hover, active, error).</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="stickynotes"
              style={{
                bottom: "-320px",
                right: "-80px",
              }}
            >
              <img id="arrow-5" src={arrow5} alt="" />
              <img src={stickyNote3} alt="" />
            </div>
          </div>
          <div className="color-left">
            <div className="color">
              <img src={vector1} alt="" />
              <p className="color-text">FAFE81</p>
            </div>
            <div className="color">
              <img src={vector2} alt="" />
              <p className="color-text">FAFE81</p>
            </div>
            <div className="color">
              <img src={vector3} alt="" />
              <p className="color-text">FAFE81</p>
            </div>
            <div className="color">
              <img src={vector4} alt="" />
              <p className="color-text">FAFE81</p>
            </div>
            <div className="color">
              <img src={vector5} alt="" />
              <p className="color-text">FAFE81</p>
            </div>
            <div className="color">
              <img src={vector6} alt="" />
              <p className="color-text">FAFE81</p>
            </div>
            <div className="color">
              <img src={vector7} alt="" />
              <p className="color-text">FAFE81</p>
            </div>
            <div className="color">
              <img src={vector8} alt="" />
              <p className="color-text">FAFE81</p>
            </div>
          </div>
        </div>

        <div className="wireframe-section">
          <div
            className="mid-title"
            style={{
              width: "50%",
            }}
          >
            Story Boarding & Wireframing
          </div>
          <div className="wireframe-container">
            <div className="wireframe-sub">
              <div className="wireframe-title">What is Story Boarding?</div>
              <div className="wireframe-content">
                Storyboarding is a visual representation of a sequence of events
                or actions, typically used to map out a narrative or user
                journey. It's akin to a comic strip where each panel represents
                a scene or key moment. In web or app development, storyboards
                are used to outline the flow of user interactions, showing how
                users will navigate through different features or sections.
                Storyboarding helps teams visualize and plan the overall
                experience, ensuring that all elements fit cohesively and align
                with the intended user journey.
              </div>
            </div>
            <div className="wireframe-sub">
              <div className="wireframe-title">What is Wireframing? </div>
              <div className="wireframe-content">
                Wireframing is a low-fidelity, blueprint-like sketch of a
                webpage, app, or interface. It focuses on the structure and
                layout, showing where key elements like buttons, navigation,
                text, and images will be placed. Wireframes are typically devoid
                of colors, graphics, or intricate design details, allowing
                designers to concentrate on the basic layout and functionality.
                Wireframing helps teams get early feedback on usability and user
                flow before investing time in more detailed design or
                development, serving as a practical tool for visualizing the
                user interface's structure and ensuring intuitive navigation.
              </div>
            </div>
          </div>
          <div className="arrow-4">
            <img src={arrow4} alt="" />
          </div>
        </div>

        <div className="fidelity-container">
          <div className="fidelity-title">High Fidelity Level Wireframes</div>
          <div className="wireframes">
            <div className="image-container-top">
              <div className="image-container">
                <div className="number-container" id="one">
                  1
                </div>
                <img src={wireframe1} alt="" />
              </div>
              <div className="image-container">
                <div className="number-container" id="two">
                  2
                </div>
                <img src={wireframe2} alt="" />
              </div>
            </div>
            <div className="image-container-bottom">
              <div className="number-container" id="three">
                3
              </div>
              <img src={wireframe3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <ViewWork />
    </div>
  );
};

export default ProjectPage;

/*
https://www.figma.com/design/O8gWiPPhvmwBPYrZ3sdG4d/Fiverr?node-id=192-1147&p=f&t=9ce5L1DyQglznJES-0
*/
