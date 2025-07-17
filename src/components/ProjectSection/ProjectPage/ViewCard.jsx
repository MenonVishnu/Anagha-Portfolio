import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./ViewWork.css";

//svg
import customShape from "../../../assets/Projects/ProjectPage3/Rectangle 210.png";

const ViewCard = (props) => {
  return (
    <div className="glass-container">
      <div
        className="shape"
        style={{
          backgroundImage: `url(${customShape})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          //   backgroundColor: "black",
        }}
      >
        <div className="empty"></div>

        <div className="view-card-header">
          <div className="view-header">{props.data.title}</div>
        </div>
        <div className="view-card-content">
          <div className="view-content-title">{props.data.subtitle}</div>
          <div className="view-content-para">
            {props.data.para + "..."}

            <a href={props.data.href} target="_blank" className="read-more">
              Read More
            </a>
          </div>
        </div>
        <div className="view-card-footer">
          <div className="view-circle">
            <p
              style={{
                padding: "0px 0 2px 0",
              }}
            >
              a
            </p>
          </div>
          <div className="view-date">{props.data.date}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
