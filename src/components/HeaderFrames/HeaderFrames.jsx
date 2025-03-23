import React from "react";
import "./header-frames.css";
import frameOne from "../../assets/images/frames__images/frame1.jpg";
import frameTwo from "../../assets/images/frames__images/frame2.jpg";
import { LuArrowUpRight } from "react-icons/lu";

const HeaderFrames = () => {
 
  return (
    <>
      <div className="header__frames">
        <div className="header__frame">
          <img src={frameOne} alt="header__frame-one" />
        </div>
        <div className="header__frame">
          <img src={frameTwo} alt="header__frame-two" />
        </div>
      </div>
      <a
        href="mailto:abderrahmane.eddourabi@gmail.com"
        className="contact__btn header__btn"
      >
        <LuArrowUpRight />
        <p>
          {"CONTACT US".split("").map((char, index) => (
            <span
              key={index}
              style={{
                transform: `rotate(${index * 12}deg)`,
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </a>
    </>
  );
};

export default HeaderFrames;