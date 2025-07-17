import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./ViewWork.css";
import ViewCard from "./ViewCard";

import backgroundImage1 from "../../../assets/Projects/ProjectPage3/Rectangle 214.png";

const datas = [
  {
    title: "Design Thinking",
    subtitle: "UI Case Study: Pet Care Application",
    para: `Design Thinking is a user-centered, iterative problem-solving
                  approach that focuses on understanding users’ needs and creating
                  innovative solutions. In User Interface design, it emphasizes`,
    date: "Nov 11, 2024",
    href: "https://www.google.com",
  },
  {
    title: "Design Thinking",
    subtitle: "UI Case Study: Pet Care Application",
    para: `Design Thinking is a user-centered, iterative problem-solving
              approach that focuses on understanding users’ needs and creating
              innovative solutions. In User Interface design, it emphasizes`,
    date: "Nov 11, 2024",
    href: "https://www.google.com",
  },
  {
    title: "Design Thinking",
    subtitle: "UI Case Study: Pet Care Application",
    para: `Design Thinking is a user-centered, iterative problem-solving
              approach that focuses on understanding users’ needs and creating
              innovative solutions. In User Interface design, it emphasizes`,
    date: "Nov 11, 2024",
    href: "https://www.google.com",
  },
];

const ViewWork = () => {
  return (
    <div
      className="view-work-container"
      style={{
        // padding: "100px",
        backgroundImage: `url(${backgroundImage1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "77%",
        backgroundSize: "100%",
      }}
    >
      <div className="view-work-title">View More Work</div>
      {/* <div className="background-image">
         <img src={backgroundImage1} alt="" /> 
      </div> */}
      <div className="view-work-content">
        <ViewCard data={datas[0]} />
        <ViewCard data={datas[1]} />
        <ViewCard data={datas[2]} />
      </div>
    </div>
  );
};

export default ViewWork;
