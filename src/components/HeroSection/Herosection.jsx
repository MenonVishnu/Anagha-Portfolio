import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./HeroSection.css";

// Image Import
import AnaghaHero from "../../assets/Anagha-Image.png";
import Name from "../../assets/Name.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="circle"></div>
      <div className="paragraph">
        <img src={AnaghaHero} alt="Anagha Image" />
        <div className="hero-heading">Hello,</div>
        <p>
          I am <img src={Name} alt="anagha name" />{" "}
        </p>

        <p>
          Computer science graduate with hands-on experience in UI/UX design,
          web development, & AI/ML.I thrive on solving problems & sparking
          innovation! Passionate about user interaction & experience design,I
          love diving into case studies for industry-leading products and
          crafting engaging wire-frames.{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
