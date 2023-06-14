import React from "react";
import "./about.css";
import Main2 from "../../../assets/img/main27.jpg";
import Line1 from "../../../assets/img/line-blue.png";
import Home from "../home/Home";
import { FaAngleRight } from "react-icons/fa";
import Main8 from "../../../assets/img/main8.jpg";
import Main9 from "../../../assets/img/main9.jpg";
import Main16 from "../../../assets/img/main16.jpg";
import Main18 from "../../../assets/img/main181.jpg";
import Main19 from "../../../assets/img/main19.jpg";
import Main20 from "../../../assets/img/main20.jpg";
import Main21 from "../../../assets/img/main21.jpg";
import Main22 from "../../../assets/img/main22.jpg";
import Main23 from "../../../assets/img/main23.jpg";
import Pen from "../../../assets/img/pen.png";

import { Progress } from "antd";

function About() {
  return (
    <>
      <div className="pen">
        <img src={Pen} alt="" />
      </div>
      <div className="main">
        <div className="main__img">
          <img src={Main2} alt="" />
        </div>
        <div className="box">
          <h3>About Us</h3>

          <img src={Line1} alt="" />
          <p>
            <a href={<Home />}>Home</a>- About
          </p>
        </div>
      </div>

      <section className="first">
        <div className="container">
          <div className="support">
            <div className="picture">
              <img src={Main16} alt="" />
              <div className="background_line"></div>
            </div>
            <div className="content">
              <h1>Welcome to Nutri Baby</h1>
              <img src={Line1} alt="" />
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form. <br />
                <br /> By injected humour, or randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators
              </p>
              <div className="learnmore">
                <a href="@user">
                  <h4>LEARN MORE</h4>
                  <FaAngleRight />
                  <FaAngleRight />
                </a>
              </div>
            </div>
          </div>

          <div className="support">
            <div className="content">
              <h1>What We Bring</h1>
              <img src={Line1} alt="" />

              <div className="progress__bar">
                <Progress percent={82} strokeColor="#f6b851" />
                <Progress percent={50} strokeColor="#95adfa" />
                <Progress percent={99} strokeColor="#63e3d6" />
              </div>
            </div>
            <div className="picture">
              <img src={Main8} alt="" />
              <div
                className="background_line"
                style={{ border: "4px solid #ff97a4" }}
              ></div>
            </div>
          </div>

          <div className="support">
            <div className="picture">
              <img
                src={Main9}
                alt=""
                
              />
              <div className="background_line" style={{ border: "4px solid #fcdd64" }}></div>
            </div>
            <div className="content">
              <h1>Our Story</h1>
              <img src={Line1} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat sit voluptatem
                accusantium doloremque laudantium. <br /> <br /> Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <div className="learnmore">
                <a href="@user">
                  <h4>LEARN MORE</h4>
                  <FaAngleRight />
                  <FaAngleRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="about__last">
          <div className="last_support">
            <img src={Main18} alt="" />
            <img src={Main19} alt="" />
            <img src={Main20} alt="" />
            <img src={Main21} alt="" />
            <img src={Main22} alt="" />
            <img src={Main23} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
