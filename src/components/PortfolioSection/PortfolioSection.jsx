import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./PortfolioSection.css";

// Image
import Backdrop from "../../assets/Hero-Background.png";

const HeroSection = () => {
  return (
    <>
      <div className="portfolio">
        <div className="heading">
          <img src={Backdrop} alt="" />
          PORTFOLIO
          <p className="ele-1">Design</p>
          <p className="ele-2">Product</p>
          <p className="ele-3">Experience</p>
          <p className="ele-4">UI</p>
          <p className="ele-5">UX</p>
          <p className="ele-6">Interaction</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
