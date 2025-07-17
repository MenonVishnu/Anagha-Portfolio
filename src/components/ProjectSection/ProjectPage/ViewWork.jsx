import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./ViewWork.css";
import ViewCard from "./ViewCard";

import backgroundImage1 from "../../../assets/Projects/ProjectPage3/Rectangle 214.png";

const datas = [
  {
    title: "Design Thinking",
    subtitle:
      "DEMYSTIFYING UI DESIGN:Unveiling the essential principles for crafting user centric experiences",
    para: `The design thinking process is a problem-solving approach that focuses on people’s needs`,
    date: "Feb 17, 2024",
    href: "https://medium.com/@anagha9805/demystifying-ui-design-unveiling-the-essential-principles-for-crafting-user-centric-experiences-e76ecdc8ed42",
  },
  {
    title: "UI Case Study",
    subtitle: "UI Case Study: Pet Care Application",
    para: `Design Thinking is a user-centered, iterative problem-solving
                approach that focuses on understanding users’ needs and creating
                innovative solutions. In User Interface design, it emphasizes`,
    date: "Nov 11, 2024",
    href: "https://medium.com/@anagha9805/ui-case-study-pet-care-application-a2058b79a469",
  },
  {
    title: "UX Research",
    subtitle:
      "UI Case Study: Recharge: Your Post-Work Stress Recovery Companion",
    para: `Helping 9-to-5 working young adults manage stress, exhaustion, and burnout after work. Help users unwind, recharge, and reset after their workday to avoid burnout`,
    date: "July 17, 2025",
    href: "https://medium.com/@anagha9805/ui-case-study-recharge-your-post-work-stress-recovery-companion-f6371bb4094b",
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
