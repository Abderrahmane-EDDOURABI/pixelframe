import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import "./about.css";
import aboutOne from "../../assets/images/about__images/about.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about__container">
      <h2 className="about__title">About US</h2>
      <a
        href="mailto:abderrahmane.eddourabi@gmail.com"
        className="contact__btn about__btn"
      >
        <LuArrowUpRight />
        <p>
          {"More About US".split("").map((char, index) => (
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
        <div className="about__left">
          <div className="about__image">
            <div className="about__img-bg"></div>
            <div className="about__img-lg">
              <img src={aboutOne} alt="about__image" />
            </div>
            <div className="about__img-sm">
              <img src={aboutOne} alt="" />
            </div>
          </div>
        </div>
        <div className="about__right">
          <div className="empty about__empty"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quis
            magni hic. Dicta magnam quos natus blanditiis accusantium,
            praesentium neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            inventore suscipit, similique quam laudantium asperiores veritatis
            alias fugit numquam tempora eius? Illo fuga dolor ratione corrupti
            magnam iusto, possimus aperiam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quis
            magni hic. Dicta magnam quos natus blanditiis accusantium,
            praesentium neque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
