import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-heading">
        <div className="left-box"></div>STAY CONNECTED
      </div>

      <div className="thankyou-content">
        <div className="left-side">
          <p>Get in Touch!</p>
          <p>anagha9805@gmail.com</p>
          <p>9867992928</p>
        </div>
        <div className="right-side">
          <p>
            While I might be a junior with not a ton of experience, but Iam
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
