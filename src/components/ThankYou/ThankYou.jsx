import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./ThankYou.css";

//logos
import Mail from "../../assets/mail.png";
import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import arrow from "../../assets/thankyou-arrow.png";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-content">
        <div className="left-side">
          <div className="thankyou-heading">STAY CONNECTED</div>
          <div className="thankyou-icons">
            <div
              className="icon-wrapper"
              onClick={() =>
                (window.location.href = "mailto:anagha9805@gmail.com")
              }
            >
              <img src={Mail} alt="" />
            </div>
            <div className="icon-wrapper">
              <img
                src={LinkedIn}
                alt=""
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shinde-anagha-anil/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="icon-wrapper">
              <img
                src={Github}
                alt=""
                onClick={() => window.open("", "_blank")}
              />
            </div>
          </div>
          <img className="thankyou-arrow" src={arrow} alt="" />
        </div>
        <div className="right-side">
          <p>
            While I might be a junior with not a ton of experience, but I am
            super passionate about design & really eager to learn & improve. Iam
            all about bringing new ideas & creativity to the mix, & Iam always
            working on leveling up my skills.
          </p>
          <p>
            I know it maybe a challenge to take a chance on me, but I believe
            with my potential & dedication, I can become the best designer you
            could hire!
          </p>
        </div>
        <div className="right-box"></div>
      </div>
    </div>
  );
};

export default ThankYou;
