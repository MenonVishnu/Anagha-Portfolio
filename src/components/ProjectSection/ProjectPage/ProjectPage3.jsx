import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./ProjectPage3.css";

import Image from "../../../assets/Projects/ProjectPage3/Project-3-Cover.png";
import Image1 from "../../../assets/Projects/ProjectPage3/Project-3-image1.png";
import arrow1 from "../../../assets/Projects/ProjectPage3/arrow1.png";
import arrow2 from "../../../assets/Projects/ProjectPage3/arrow2.png";
import arrow3 from "../../../assets/Projects/ProjectPage3/arrow3.png";
import arrow4 from "../../../assets/Projects/ProjectPage3/arrow4.png";
import arrow5 from "../../../assets/Projects/ProjectPage3/arrow5.png";

// wireframes
import wireframe1 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe1.png";
import wireframe2 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe2.png";
import wireframe3 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe3.png";
import wireframe4 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe4.png";
import wireframe5 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe5.png";
import wireframe6 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe6.png";
import wireframe7 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe7.png";
import wireframe8 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe8.png";
import wireframe9 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe9.png";
import wireframe10 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe10.png";
import wireframe11 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe11.png";
import wireframe12 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe12.png";
import wireframe13 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe13.png";
import wireframe14 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe14.png";
import wireframe15 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe15.png";
import wireframe16 from "../../../assets/Projects/ProjectPage3/Wireframes/wireframe16.png";

const ProjectPage3 = () => {
  return (
    <div className="project-3-project-page">
      <div className="project-3-top-section">
        <div className="project-3-background-box">
          <div className="project-3-projectpage-title">
            NUTRIMATE FOOD DELIVERY APP
          </div>
          <div className="project-3-page-label">App Design</div>
          <div className="project-3-sub-section">
            <div className="project-3-sub-title">Design Thinking</div>

            <div className="project-3-sub-para">
              Created a food delivery app that includes healthy food options
              with an inbuilt calorie tracker. The UI design for the Food
              Delivery & Calorie Tracking App combines convenience &
              health-consciousness in a sleek, user-friendly interface.
            </div>
          </div>
        </div>
        <div className="project-3-cover-image">
          <img src={Image} alt="" />
        </div>
        <div className="project-3-arrow-1">
          <img src={arrow1} alt="" />
        </div>
      </div>

      <div className="project-3-mid-section">
        <div className="project-3-mid-title">Typeface</div>
        <div className="project-3-typeface-container">
          <div className="project-3-type-left">
            <div className="project-3-left-title">
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
                  color: "#045E14",
                  fontSize: "70px",
                }}
              >
                INTER
              </p>
            </div>
            <div className="project-3-alphabets">
              <div className="project-3-alpha">
                AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
              </div>
              <div className="project-3-numbers">1234567890</div>
            </div>
          </div>

          <div className="project-3-type-right">
            <div className="project-3-arrow-2">
              <img src={arrow2} alt="" />
            </div>
            <div
              className="project-3-mid-title"
              style={{
                fontSize: "36px",
                margin: "-20px 0 0 0",
              }}
            >
              Why Inter?
            </div>
            <div className="project-3-list">
              <div className="project-3-list-element">
                <div className="project-3-list-circle"></div>
                <div className="project-3-list-content">
                  Highly <b>legible and UI-optimized</b>, making form fields and
                  content easy to read across all devices.
                </div>
              </div>
              <div className="project-3-list-element">
                <div className="project-3-list-circle"></div>
                <div className="project-3-list-content">
                  Clean and professional appearance with{" "}
                  <b>versatile weights</b> for clear visual hierarchy.
                </div>
              </div>
              <div className="project-3-list-element">
                <div className="project-3-list-circle"></div>
                <div className="project-3-list-content">
                  <b>Web-friendly and accessible</b>, offering consistent
                  performance, fast loading, and open-source flexibility.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-3-color-section">
          <div className="project-3-color-container">
            <div
              className="project-3-mid-title"
              style={{
                width: "100%",
              }}
            >
              Color Scheme & Color Guide
            </div>

            <div className="project-3-type-right">
              <div className="project-3-arrow-3">
                <img src={arrow3} alt="" />
              </div>
              <div className="project-3-list">
                <div className="project-3-list-element">
                  <div className="project-3-list-circle"></div>
                  <div className="project-3-list-content">
                    Ensures <b>visual consistency</b> across all screens,
                    components, and user interactions.
                  </div>
                </div>
                <div className="project-3-list-element">
                  <div className="project-3-list-circle"></div>
                  <div className="project-3-list-content">
                    Strengthens <b>brand identity</b> by using a cohesive and
                    recognizable color palette.
                  </div>
                </div>
                <div className="project-3-list-element">
                  <div className="project-3-list-circle"></div>
                  <div className="project-3-list-content">
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
              { color: "#E6FF9E", hex: "E6FF9E" },
              { color: "#C9FF31", hex: "C9FF31" },
              { color: "#31A044", hex: "31A044" },
              { color: "#03871A", hex: "03871A" },
              { color: "#045E14", hex: "045E14" },
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

        <div className="project-3-wireframe-section">
          <div
            className="project-3-mid-title"
            style={{
              width: "40%",
            }}
          >
            Mobile UI Wireframing
          </div>
          <div className="project-3-template-image">
            <img src={Image1} alt="" />
          </div>
          <div className="project-3-wireframe-container">
            <div className="project-3-wireframe-sub">
              <div className="project-3-wireframe-title">
                Low Fidelity Wireframing
              </div>
              <div className="project-3-wireframe-content">
                Low-fidelity wireframing is used in the early stages of app
                design to plan and visualize the basic structure and user flow
                without focusing on visual details. They are used to create and
                easy to update, making them ideal for brainstorming and early
                feedback.
                <div
                  className="project-3-list"
                  style={{
                    marginTop: "5px",
                    lineHeight: "30px",
                    fontSize: "16px",
                  }}
                >
                  <div className="project-3-list-element">
                    <div className="project-3-list-circle"></div>
                    <div className="project-3-list-content">
                      <b>Simplified Layouts:</b> Uses basic shapes and
                      placeholders (e.g., rectangles for buttons, lines for
                      text) to map out the interface such as where to place
                      "Book Vet Appointment" or "Add Feeding Reminder."
                    </div>
                  </div>
                  <div className="project-3-list-element">
                    <div className="project-3-list-circle"></div>
                    <div className="project-3-list-content">
                      <b>Content Structure Focus:</b> Emphasizes screen
                      structure and information hierarchy for example,
                      positioning a top navigation bar with tabs like Home, My
                      Pets, and Alerts.
                    </div>
                  </div>
                  <div className="project-3-list-element">
                    <div className="project-3-list-circle"></div>
                    <div className="project-3-list-content">
                      <b>No Visual Styling:</b> Typically in greyscale with no
                      images, icons, or fonts just labels like "Pet Photo Here"
                      or "Next Appointment."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-3-wireframe-sub">
              <div className="project-3-wireframe-title">
                High Fidelity Wireframing
              </div>
              <div className="project-3-wireframe-content">
                High-fidelity wireframing comes later in the design process and
                represents a detailed, realistic version of the application. For
                a pet care app, this means incorporating branding, images, UI
                components, and interactivity to give a complete sense of how
                the final app will look and behave.
                <div
                  className="project-3-list"
                  style={{
                    marginTop: "5px",
                    lineHeight: "30px",
                    fontSize: "16px",
                  }}
                >
                  <div className="project-3-list-element">
                    <div className="project-3-list-circle"></div>
                    <div className="project-3-list-content">
                      <b>Visual Details & Branding:</b> Includes colors,
                      typography, icons (e.g., paw icon for pet profile), and
                      pet-related imagery to reflect the final design.
                    </div>
                  </div>
                  <div className="project-3-list-element">
                    <div className="project-3-list-circle"></div>
                    <div className="project-3-list-content">
                      <b>Interactive Elements:</b> Allows clickable prototypes —
                      for example, tapping “Remind Me to Walk Bella” might open
                      a schedule selector.
                    </div>
                  </div>
                  <div className="project-3-list-element">
                    <div className="project-3-list-circle"></div>
                    <div className="project-3-list-content">
                      <b>Real Data Examples:</b> Uses real pet names, profile
                      images, appointment times, and notification settings to
                      simulate actual user experience.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-3-fidelity-container">
          <div className="project-3-fidelity-title">Wireframes</div>

          <div className="project-3-wireframe-title-1">
            <p
              style={{
                transform: "rotate(-9deg)",
              }}
            >
              Low Fidelity Wireframe{" "}
            </p>
            <img id="arrow-4" src={arrow4} alt="" />
          </div>

          <div className="project-3-wireframes">
            <div className="project-3-number-container">1</div>
            <div className="project-3-image-container">
              <img src={wireframe1} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe2} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe3} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe4} alt="" />
            </div>
          </div>

          <div className="project-3-wireframes">
            <div className="project-3-number-container">2</div>
            <div className="project-3-image-container">
              <img src={wireframe5} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe6} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe7} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe8} alt="" />
            </div>
          </div>

          <div className="project-3-wireframe-title-2">
            <p
              style={{
                transform: "rotate(9deg)",
              }}
            >
              High Fidelity Wireframe{" "}
            </p>
            <img id="arrow-5" src={arrow5} alt="" />
          </div>

          <div className="project-3-wireframes">
            <div className="project-3-number-container">3</div>
            <div className="project-3-image-container">
              <img src={wireframe9} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe10} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe11} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe12} alt="" />
            </div>
          </div>
          <div className="project-3-wireframes">
            <div className="project-3-number-container">4</div>
            <div className="project-3-image-container">
              <img src={wireframe13} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe14} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe15} alt="" />
            </div>
            <div className="project-3-image-container">
              <img src={wireframe16} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage3;

/*
https://www.figma.com/design/O8gWiPPhvmwBPYrZ3sdG4d/Fiverr?node-id=192-1147&p=f&t=9ce5L1DyQglznJES-0
*/
