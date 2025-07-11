import { useState, useEffect } from "react";
import "@fontsource/koulen"; // Defaults to weight 400
import "@fontsource/kosugi-maru"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "./Study.css";

import { SquareArrowOutUpRight } from "lucide-react";

const Study = (props) => {
  const [stylePara, setStylePara] = useState({
    padding: "",
    margin: "",
  });

  const [styleDevice, setStyleDevice] = useState({
    top: "",
    left: "",
  });

  useEffect(() => {
    if (props.data.align === "left") {
      setStylePara({
        padding: "10px 10px 10px 5rem",
        margin: "50px 10px 10px 60px",
      });
      setStyleDevice({
        top: "-70px",
        left: "-55px",
      });
    } else {
      setStylePara({
        padding: "10px 5rem 10px 10px", // changed padding for right alignment
        margin: "60px 60px 10px 10px",
      });
      setStyleDevice({
        top: "-60px",
        left: "185px",
      });
    }
  }, [props.data.align]);

  return (
    <div className="study-container">
      <div className="study-inside">
        <div className="top">
          <div className="study-title">
            {props.data.title}
            <span className="date">{props.data.date}</span>
          </div>

          <div className="external">
            <SquareArrowOutUpRight size={16} />
          </div>
        </div>

        <div className="content">
          <div className="device" style={styleDevice}>
            <img src={props.data.cover} alt="vase" />
          </div>
          <div
            className="para"
            style={{ ...stylePara, backgroundColor: props.data.backColor }}
          >
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
