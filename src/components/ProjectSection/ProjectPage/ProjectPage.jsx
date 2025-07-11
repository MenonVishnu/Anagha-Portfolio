import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./ProjectPage.css";

import Image from "../../../assets/Projects/Project-1-Cover.png";

const ProjectPage = () => {
	return (
		<div className="project-page">
			<div className="top-section">
				<div className="background-box">
					<div className="projectpage-title">RESUME BUILDER APP</div>
					<div className="sub-section">
						<div className="sub-title">Design Thinking</div>
						<div className="sub-para">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Veritatis dignissimos quod saepe reprehenderit quaerat aliquid
							neque, nihil illum error nostrum. Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Veritatis dignissimos quod saepe
							reprehenderit quaerat aliquid neque, nihil illum error nostrum.
						</div>
					</div>
				</div>
				<div className="cover-image">
					<img src={Image} alt="" />
				</div>
			</div>
			<div className="projects"></div>
		</div>
	);
};

export default ProjectPage;

/*
https://www.figma.com/design/O8gWiPPhvmwBPYrZ3sdG4d/Fiverr?node-id=192-1147&p=f&t=9ce5L1DyQglznJES-0
*/
