import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./CaseStudy.css";
import Study from "./Study";

import Case1 from "../../assets/Case Study/case1.png";
import Case2 from "../../assets/Case Study/case2.png";
import { DessertIcon, HeartHandshake } from "lucide-react";

const casestudy = [
  {
    title: "SPOTIFY CASE STUDY",
    date: "29th April, 2024",
    cover: Case1,
    description: `The problem was to generate an UI interface for a music and podcast
            application that allows the user to add the songs & shuffle play
            them also listen to the podcast listed by the application.`,
    backColor: "#1ed760",
    align: "left",
    href: "https://www.behance.net/gallery/195421455/Spotify-Case-Study",
  },
  {
    title: "TEAM PERFORMANCE TRACKING PORTAL UI CASE STUDY",
    date: "10th April, 2024",
    cover: Case2,
    description: `Create streamlining navigation, improving data visualization, and implementing intuitive design elements. 
                    The goal is to make it easier for teams to monitor key performance indicators (KPIs), track progress, 
                    and make data-driven decisions.`,
    backColor: "#558DE4",
    align: "right",
    href: "https://dribbble.com/shots/25886234-TEAM-PERFORMANCE-TRACKING-PORTAL-UI-CASE-STUDY?utm_source=Clipboard_Shot&utm_campaign=Anagha_12&utm_content=TEAM%20PERFORMANCE%20TRACKING%20PORTAL%20UI%20CASE%20STUDY&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Anagha_12&utm_content=TEAM%20PERFORMANCE%20TRACKING%20PORTAL%20UI%20CASE%20STUDY&utm_medium=Social_Share",
  },
];

const ProjectSection = () => {
  return (
    <div className="casestudy-container">
      <div className="casestudy-heading">CASE STUDY</div>
      <div className="studies">
        <Study data={casestudy[0]} />
        <Study data={casestudy[1]} />
      </div>
    </div>
  );
};

export default ProjectSection;
