import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./ProjectPage2.css";
import ViewWork from "./ViewWork";

// import Image from "../../../assets/Projects/Project-1-Cover.png";
import Image from "../../../assets/Projects/ProjectPage2/Project-2-Cover.png";
import Image1 from "../../../assets/Projects/ProjectPage2/Project-2-image1.png";
import arrow1 from "../../../assets/Projects/ProjectPage2/arrow1.png";
import arrow2 from "../../../assets/Projects/ProjectPage2/arrow2.png";
import arrow3 from "../../../assets/Projects/ProjectPage2/arrow3.png";
import arrow4 from "../../../assets/Projects/ProjectPage2/arrow4.png";
import arrow5 from "../../../assets/Projects/ProjectPage2/arrow5.png";

// wireframes
import wireframe1 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe1.png";
import wireframe2 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe2.png";
import wireframe3 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe3.png";
import wireframe4 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe4.png";
import wireframe5 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe5.png";
import wireframe6 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe6.png";
import wireframe7 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe7.png";
import wireframe8 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe8.png";
import wireframe9 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe9.png";
import wireframe10 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe10.png";
import wireframe11 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe11.png";
import wireframe12 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe12.png";
import wireframe13 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe13.png";
import wireframe14 from "../../../assets/Projects/ProjectPage2/Wireframes/wireframe14.png";

// sticky notes
import stickyNote1 from "../../../assets/Projects/ProjectPage2/StickyNote1.png";
import stickyNote2 from "../../../assets/Projects/ProjectPage2/StickyNote2.png";
import stickyNote3 from "../../../assets/Projects/ProjectPage2/StickyNote3.png";

const ProjectPage2 = () => {
  return (
    <div className="project-2-project-page">
      <div className="project-2-top-section">
        <div className="project-2-background-box">
          <div className="project-2-projectpage-title">PET CARE APP</div>
          <div className="project-2-page-label">App Design</div>
          <div className="project-2-sub-section">
            <div className="project-2-sub-title">Design Thinking</div>

            <div className="project-2-sub-para">
              The UI design for the Pet Care App is thoughtfully designed to
              offer a delightful & intuitive experience for pet owners. The
              design prioritizes simplicity & ease of use, ensuring that pet
              owners can effortlessly manage their pets' needs while enjoying a
              joyful and engaging experience.
            </div>
          </div>
        </div>
        <div className="project-2-cover-image">
          <img src={Image} alt="" />
        </div>
        <div className="project-2-arrow-1">
          <img src={arrow1} alt="" />
        </div>
        <div
          className="stickynotes"
          style={{
            bottom: "-20px",
            right: "200px",
          }}
        >
          <img src={stickyNote1} alt="" />
        </div>
        <div
          className="stickynotes"
          style={{
            bottom: "-230px",
            right: "0px",
          }}
        >
          <img src={stickyNote2} alt="" />
        </div>
      </div>

      <div className="project-2-mid-section">
        <div
          className="project-2-mid-title"
          style={{
            margin: "100px 0 0 0",
          }}
        >
          Typeface
        </div>
        <div className="project-2-typeface-container">
          <div className="project-2-type-left">
            <div className="project-2-left-title">
              <p
                style={{
                  marginTop: "80px",
                  textShadow: " 0px 4px 6px #00000025",
                }}
              >
                Aa
              </p>
              <p
                style={{
                  color: "#0B2E4A",
                  fontSize: "70px",
                }}
              >
                INTER
              </p>
            </div>
            <div className="project-2-alphabets">
              <div className="project-2-alpha">
                AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
              </div>
              <div className="project-2-numbers">1234567890</div>
            </div>
          </div>

          <div className="project-2-type-right">
            <div className="project-2-arrow-2">
              <img src={arrow2} alt="" />
            </div>
            <div
              className="project-2-mid-title"
              style={{
                fontSize: "36px",
                margin: "-20px 0 0 0",
              }}
            >
              Why Inter?
            </div>
            <div className="project-2-list">
              <div className="project-2-list-element">
                <div className="project-2-list-circle"></div>
                <div className="project-2-list-content">
                  Highly <b>legible and UI-optimized</b>, making form fields and
                  content easy to read across all devices.
                </div>
              </div>
              <div className="project-2-list-element">
                <div className="project-2-list-circle"></div>
                <div className="project-2-list-content">
                  Clean and professional appearance with{" "}
                  <b>versatile weights</b> for clear visual hierarchy.
                </div>
              </div>
              <div className="project-2-list-element">
                <div className="project-2-list-circle"></div>
                <div className="project-2-list-content">
                  <b>Web-friendly and accessible</b>, offering consistent
                  performance, fast loading, and open-source flexibility.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-2-color-section">
          <div className="project-2-color-container">
            <div
              className="project-2-mid-title"
              style={{
                width: "100%",
              }}
            >
              Color Scheme & Color Guide
            </div>

            <div className="project-2-type-right">
              <div className="project-2-arrow-3">
                <img src={arrow3} alt="" />
              </div>
              <div className="project-2-list">
                <div className="project-2-list-element">
                  <div className="project-2-list-circle"></div>
                  <div className="project-2-list-content">
                    Ensures <b>visual consistency</b> across all screens,
                    components, and user interactions.
                  </div>
                </div>
                <div className="project-2-list-element">
                  <div className="project-2-list-circle"></div>
                  <div className="project-2-list-content">
                    Strengthens <b>brand identity</b> by using a cohesive and
                    recognizable color palette.
                  </div>
                </div>
                <div className="project-2-list-element">
                  <div className="project-2-list-circle"></div>
                  <div className="project-2-list-content">
                    Improves <b>usability and accessibility</b> through
                    thoughtful contrast, hierarchy, and state indicators
                    <p>(e.g., hover, active, error).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-3-color-right">
            {[
              { color: "#EAF7FF", hex: "EAF7FF" },
              { color: "#D4EDFF", hex: "D4EDFF" },
              { color: "#AFDCFF", hex: "AFDCFF" },
              { color: "#82C8FF", hex: "82C8FF" },
              { color: "#0B2E4A", hex: "0B2E4A" },
              { color: "#E2E2E2", hex: "E2E2E2" },
              { color: "#787878", hex: "787878" },
              { color: "#4E4E4E", hex: "4E4E4E" },
            ].map(({ color, hex }) => (
              <div className="project-3-color" key={hex}>
                <div
                  className="project-3-square"
                  style={{ backgroundColor: color }}
                ></div>
                <p className="project-3-color-text">{hex}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-2-wireframe-section">
          <div
            className="project-2-mid-title"
            style={{
              width: "40%",
            }}
          >
            Mobile UI Wireframing
          </div>
          <div className="template-image">
            <img src={Image1} alt="" />
          </div>
          <div className="project-2-wireframe-container">
            <div className="project-2-wireframe-sub">
              <div className="project-2-wireframe-title">
                Low Fidelity Wireframing
              </div>
              <div className="project-2-wireframe-content">
                Low-fidelity wireframing is used in the early stages of app
                design to plan and visualize the basic structure and user flow
                without focusing on visual details. They are used to create and
                easy to update, making them ideal for brainstorming and early
                feedback.
                <div
                  className="project-2-list"
                  style={{
                    marginTop: "5px",
                    lineHeight: "30px",
                    fontSize: "16px",
                  }}
                >
                  <div className="project-2-list-element">
                    <div className="project-2-list-circle"></div>
                    <div className="project-2-list-content">
                      <b>Simplified Layouts:</b> Uses basic shapes and
                      placeholders (e.g., rectangles for buttons, lines for
                      text) to map out the interface such as where to place
                      "Book Vet Appointment" or "Add Feeding Reminder."
                    </div>
                  </div>
                  <div className="project-2-list-element">
                    <div className="project-2-list-circle"></div>
                    <div className="project-2-list-content">
                      <b>Content Structure Focus:</b> Emphasizes screen
                      structure and information hierarchy for example,
                      positioning a top navigation bar with tabs like Home, My
                      Pets, and Alerts.
                    </div>
                  </div>
                  <div className="project-2-list-element">
                    <div className="project-2-list-circle"></div>
                    <div className="project-2-list-content">
                      <b>No Visual Styling:</b> Typically in greyscale with no
                      images, icons, or fonts just labels like "Pet Photo Here"
                      or "Next Appointment."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-2-wireframe-sub">
              <div className="project-2-wireframe-title">
                High Fidelity Wireframing
              </div>
              <div className="project-2-wireframe-content">
                High-fidelity wireframing comes later in the design process and
                represents a detailed, realistic version of the application. For
                a pet care app, this means incorporating branding, images, UI
                components, and interactivity to give a complete sense of how
                the final app will look and behave.
                <div
                  className="project-2-list"
                  style={{
                    marginTop: "5px",
                    lineHeight: "30px",
                    fontSize: "16px",
                  }}
                >
                  <div className="project-2-list-element">
                    <div className="project-2-list-circle"></div>
                    <div className="project-2-list-content">
                      <b>Visual Details & Branding:</b> Includes colors,
                      typography, icons (e.g., paw icon for pet profile), and
                      pet-related imagery to reflect the final design.
                    </div>
                  </div>
                  <div className="project-2-list-element">
                    <div className="project-2-list-circle"></div>
                    <div className="project-2-list-content">
                      <b>Interactive Elements:</b> Allows clickable prototypes —
                      for example, tapping “Remind Me to Walk Bella” might open
                      a schedule selector.
                    </div>
                  </div>
                  <div className="project-2-list-element">
                    <div className="project-2-list-circle"></div>
                    <div className="project-2-list-content">
                      <b>Real Data Examples:</b> Uses real pet names, profile
                      images, appointment times, and notification settings to
                      simulate actual user experience.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="project-2-arrow-4">
            <img src={arrow4} alt="" />
          </div> */}
        </div>

        <div className="project-2-fidelity-container">
          <div className="project-2-fidelity-title">Wireframes</div>
          <div className="project-2-wireframe-title-1">
            <p
              style={{
                transform: "rotate(-9deg)",
              }}
            >
              Low Fidelity Wireframe{" "}
            </p>
            <img id="arrow-4" src={arrow4} alt="" />
          </div>
          <div className="project-2-wireframes">
            <div className="project-2-number-container">1</div>
            <div className="project-2-image-container">
              <img src={wireframe1} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe2} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe3} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe4} alt="" />
            </div>
          </div>
          <div className="project-2-wireframes">
            <div className="project-2-number-container">2</div>
            <div className="project-2-image-container">
              <img src={wireframe5} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe6} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe7} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe8} alt="" />
            </div>
          </div>
          <div className="project-2-wireframe-title-2">
            <p
              style={{
                transform: "rotate(9deg)",
              }}
            >
              High Fidelity Wireframe{" "}
            </p>
            <img id="arrow-5" src={arrow5} alt="" />
          </div>
          <div className="project-2-wireframes">
            <div className="project-2-number-container">3</div>
            <div className="project-2-image-container">
              <img src={wireframe9} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe10} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe11} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe12} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe13} alt="" />
            </div>
            <div className="project-2-image-container">
              <img src={wireframe14} alt="" />
            </div>
          </div>
          <div
            className="stickynotes"
            style={{
              bottom: "-150px",
              left: "0px",
            }}
          >
            <img src={stickyNote3} alt="" />
          </div>
        </div>
      </div>
      <ViewWork />
    </div>
  );
};

export default ProjectPage2;

/*
https://www.figma.com/design/O8gWiPPhvmwBPYrZ3sdG4d/Fiverr?node-id=192-1147&p=f&t=9ce5L1DyQglznJES-0
*/
