import React from "react";
import Footer from "../../footer/Footer";
import "./teacher.css";
import Main25_2 from "../../../assets/img/main25(2).jpg";
import Line1 from "../../../assets/img/line-blue.png";
import Line2 from "../../../assets/img/line-white.png";
import Pen from "../../../assets/img/pen.png";

import Home from "../home/Home";
import Main13 from "../../../assets/img/main13.jpg";
import Main26 from "../../../assets/img/main26.jpg";
import Cloud from "../../../assets/img/cloud-02.png";
import { FaFacebook } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Cloud3 from "../../../assets/img/bg-cloud-08.png";
export default function Teacher() {
  return (
    <>
      <div className="pen">
        <img src={Pen} alt="" />
      </div>

      <div className="main">
        <div className="main__img">
          <img src={Main25_2} alt="" />
        </div>
        <div className="box">
          <h3>Teacher</h3>

          <img src={Line1} alt="" />
          <p>
            <a href={<Home />}>Home </a>- Teacher
          </p>
        </div>
      </div>
      <section className="our__teacher">
        <div className="container">
          <div className="head__content">
            <h3>Our Teacher</h3>

            <img src={Line1} alt="" />
          </div>

          <div className="cards">
            <div className="card">
              <img src={Main13} alt="" />
              <div className="card__content">
                <h1>Rose Alexander</h1>
                <h2>Managing Director</h2>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe
                </p>
                <div className="icons">
                  <ul>
                    <li>
                      <FaFacebook />
                    </li>
                    <li>
                      <FaTwitch />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Main26} alt="" />
              <div className="card__content">
                <h1>Catherine Wade</h1>
                <h2>Managing Director</h2>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe
                </p>
                <div className="icons">
                  <ul>
                    <li>
                      <FaFacebook />
                    </li>
                    <li>
                      <FaTwitch />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Main13} alt="" />
              <div className="card__content">
                <h1>Catherine Wade</h1>
                <h2>Managing Director</h2>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe
                </p>
                <div className="icons">
                  <ul>
                    <li>
                      <FaFacebook />
                    </li>
                    <li>
                      <FaTwitch />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Main26} alt="" />
              <div className="card__content">
                <h1>Stephanie Arnold</h1>
                <h2>Language Teacher</h2>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power
                </p>
                <div className="icons">
                  <ul>
                    <li>
                      <FaFacebook />
                    </li>
                    <li>
                      <FaTwitch />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Main13} alt="" />
              <div className="card__content">
                <h1>Tammy Lynch</h1>
                <h2>Drawing Teacher</h2>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men beguiled
                </p>
                <div className="icons">
                  <ul>
                    <li>
                      <FaFacebook />
                    </li>
                    <li>
                      <FaTwitch />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={Main26} alt="" />
              <div className="card__content">
                <h1>Jane Davis</h1>
                <h2>Managing Director</h2>
                <p>
                  These cases are perfectly simple and easy to distinguish. In a
                  free hour, when our power
                </p>
                <div className="icons">
                  <ul>
                    <li>
                      <FaFacebook />
                    </li>
                    <li>
                      <FaTwitch />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                    ``
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="enroll">
          <div className="enroll__head">
            <div className="enroll__content">
              <h1>How To Enroll Your Child</h1>
              <img src={Line2} alt="" />
            </div>
            <div className="cloud">
              <img src={Cloud} alt="" />
            </div>
          </div>
          <form className="contact">
            <div className="inputs">
              <input
                type="text"
                placeholder="Parents name"
                className="input-border-trans"
              />
              <input type="text" placeholder="Add use to the wait list" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea
              name=""
              placeholder="Your message..."
              id=""
              cols="10"
              rows="6"
            ></textarea>
          </form>
          <div className="cloud2">
            <img src={Cloud} alt="" />
          </div>
          <div className="enroll__more">
            <div className="learnmore">
              <a href="@user">
                <h4>LEARN MORE</h4>
                <FaAngleRight />
                <FaAngleRight />
              </a>
            </div>
          </div>

          <div className="last__cloud">
            <img src={Cloud3} alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
