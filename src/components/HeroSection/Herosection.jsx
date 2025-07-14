import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./HeroSection.css";

// Image Import
import AnaghaHero from "../../assets/heroSection/Anagha-Image.png";
import Name from "../../assets/Name.png";
import Rect1 from "../../assets/heroSection/rect-1.png";
import Rect2 from "../../assets/heroSection/rect-2.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="circle"></div>
      <div className="paragraph-container">
        <img src={AnaghaHero} alt="Anagha Image" className="anagha-image" />
        <img className="rect-1" src={Rect1} alt="rectangle-1" />
        <img className="rect-2" src={Rect2} alt="rectangle-2" />
        <div className="paragraph">
          <div className="hero-heading">Hello,</div>

          <p className="sub-heading">
            <p className="text">I am </p>
            <img src={Name} alt="anagha name" />{" "}
          </p>
          <p>
            Computer science graduate with hands-on experience in UI/UX design,
            web development, & AI/ML.{" "}
          </p>
          <p>I thrive on solving problems & sparking innovation!. </p>
          <p>
            Passionate about user interaction & experience design,I love diving
            into case studies for industry-leading products and crafting
            engaging wire-frames.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
