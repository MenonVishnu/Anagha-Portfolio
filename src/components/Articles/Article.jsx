import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./Article.css";
// import "../ProjectSection/ProjectPage/ViewWork.css";
import "../ProjectSection/ProjectPage/ViewWork.css";

import ViewCard from "../ProjectSection/ProjectPage/ViewCard";
import { href } from "react-router-dom";

const datas = [
  {
    title: "Design Thinking",
    subtitle:
      "DEMYSTIFYING UI DESIGN:Unveiling the essential principles for crafting user centric experiences",
    para: `The design thinking process is a problem-solving approach that focuses on people’s needs`,
    date: "Feb 17, 2024",
    href: "https://www.google.com",
  },
  {
    title: "UI Design",
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

const Article = () => {
  return (
    <div className="article-container">
      <div className="article-heading">Articles</div>
      <div
        className="articles view-work-content"
        // style={{
        //   fontFamily: "inter",
        // }}
      >
        <ViewCard data={datas[0]} />
        <ViewCard data={datas[1]} />
        <ViewCard data={datas[2]} />
      </div>
    </div>
  );
};

export default Article;
