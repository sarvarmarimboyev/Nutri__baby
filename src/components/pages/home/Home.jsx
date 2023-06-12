import "./home.css";
import React, { useState } from "react";
import Main39 from "../../../assets/img/main39.jpg";
import WelcomeImg from "../../../assets/img/main4.jpg";
import Line from "../../../assets/img/line-blue.png";
import Main10 from "../../../assets/img/main10.jpg";
import Main11 from "../../../assets/img/main11.png";
import Main12 from "../../../assets/img/main12.jpg";
import Main25 from "../../../assets/img/main25.jpg";
import { FaAngleRight } from "react-icons/fa";
import Main32 from "../../../assets/img/main32.jpg";
import Line2 from "../../../assets/img/line-white.png";
import Footer from "../../footer/Footer";
import Caruselleft from "../../../assets/img/carusle-left.png";
import Caruselright from "../../../assets/img/carusle-right.png";
import Cloud from "../../../assets/img/bg-cloud-01.jpg";
import Main38 from "../../../assets/img/main38.jpg";
import Btn02 from "../../../assets/img/btn-02.png";
import Main30 from "../../../assets/img/main30.jpg";
import Pen from "../../../assets/img/pen.png";
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Main32, Main25]; // Add more image URLs

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="pen">
        <img src={Pen} alt="" />
      </div>

      <section className="first">
        <div className="carousel-container">
          <img
            src={images[currentIndex]}
            alt="Carousel"
            className="carousel-image"
          />
          <div className="carousel-content">
            <div className="carousel-description">
              <p>#Nutri Baby Information</p>
              <h2 className="carousel-title">Baby creative art from drawing</h2>
            </div>
          
          </div>
  <div className="pagination">
              <img src={Caruselleft} alt="" onClick={goToPreviousSlide} />
              <img src={Caruselright} alt="" onClick={goToNextSlide} />
            </div>
          <div className="learnmore">
            <a href="@user">
              <h4>LEARN MORE</h4>
              <FaAngleRight />
              <FaAngleRight />
            </a>
          </div>
        </div>
      </section>

      <section className="secound">
        <div className="container">
          <div className="welcome">
            <div className="content">Welcome to Nutri Baby</div>
            <img src={Line} alt="" />
          </div>
          <div className="welcome__bottom">
            <div className="welcome__cards">
              <div className="welcome__card">
                <img src={WelcomeImg} alt="" />
                <div className="title">Healthy Meals</div>
                <div className="text">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                </div>
              </div>
              <div className="welcome__card">
                <img src={Main10} alt="" />
                <div className="title">Nutrition Food</div>
                <div className="text">
                  If you are going to use a passage of Lorem Ipsum you need{" "}
                </div>
              </div>
              <div className="welcome__card">
                <img src={Main11} alt="" />
                <div className="title">Value For Baby</div>
                <div className="text">
                  There are many variations of passages of Lorem Ipsum available{" "}
                </div>
              </div>
              <div className="welcome__card">
                <img src={Main12} alt="" />
                <div className="title">Learn And Play</div>
                <div className="text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third">
        <div className="container">
          <div className="third__head">
            <h2>Our Rooms Classes</h2>
            <img src={Line2} alt="" />
          </div>
        </div>

        <div className="boxs">
          <div className="left">
            <div className="box">
              <div className="box__content">
                <h3>Music Classes</h3>
                <p>
                  08:00 am - 05:00 pm <br />
                  <br />
                  April 29, 2020
                </p>
                <div className="last">
                  <h4>Age: 1 - 4 years</h4>
                  <h4>Size: 12 seats</h4>
                </div>
              </div>
              <div className="box__img">
                <div className="price">
                  <p>$35</p>
                </div>
                <img src={Main38} alt="" />
              </div>
            </div>
            <div className="box">
              <div className="box__content">
                <h3>Music Classes</h3>
                <p>
                  08:00 am - 05:00 pm <br />
                  <br />
                  April 29, 2020
                </p>
                <div className="last">
                  <h4>Age: 1-4 years</h4>
                  <h4>Size: 12 seats</h4>
                </div>
              </div>
              <div className="box__img">
                <div className="price">$35</div>
                <img src={Main38} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <div className="box__img">
                <div className="price">
                  <p>$35</p>
                </div>
                <img src={Main38} alt="" />
              </div>
              <div className="box__content">
                <h3>Music Classes</h3>
                <p>
                  08:00 am - 05:00 pm <br />
                  <br />
                  April 29, 2020
                </p>
                <div className="last">
                  <h4>Age: 1-4 years</h4>
                  <h4>Size: 12 seats</h4>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="box__img">
                <div className="price">
                  <p>$35</p>{" "}
                </div>
                <img src={Main38} alt="" />
              </div>

              <div className="box__content">
                <h3>Music Classes</h3>
                <p>
                  08:00 am - 05:00 pm <br />
                  <br />
                  April 29, 2020
                </p>
                <div className="last">
                  <h4>Age: 1-4 years</h4>
                  <h4>Size: 12 seats</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="learnmore2">
          <img src={Btn02} alt="" />
          <a href="@user">
            <h4>LEARN MORE</h4>
            <FaAngleRight />
            <FaAngleRight />
          </a>
        </div>
        <div className="last">
          <img src={Cloud} alt="" />
        </div>
      </section>
      <section className="four">
        <div className="container">
          <div className="four__title">
            <h1>Our teacher</h1>
            <img src={Line} alt="" />
          </div>
          <div className="four__img">
            <div className="left">
              <img src={Main39} alt="" />
              <div className="left__title">
                <h2>Rose Alexander</h2>
                <p>Managing director</p>
                <div className="bottom">
                  <p>
                    Excepteur sint occaecat cupidatat non proident There are
                    many variations of passages of Lorem Ipsum available
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="box">
                <img src={Main39} alt="" />
                <div className="box__title">
                  <h3>Wictoria Lawson</h3>
                  <p>Music Teacher</p>
                </div>
              </div>
              <div className="box">
                <img src={Main39} alt="" />
                <div className="box__title">
                  <h3>Wictoria Lawson</h3>
                  <p>Music Teacher</p>
                </div>
              </div>
              <div className="box">
                <img src={Main39} alt="" />
                <div className="box__title">
                  <h3>Wictoria Lawson</h3>
                  <p>Music Teacher</p>
                </div>
              </div>
              <div className="box">
                <img src={Main39} alt="" />
                <div className="box__title">
                  <h3>Wictoria Lawson</h3>
                  <p>Music Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div className="container">
          <div className="collect">
            <div className="collect__first">
              <div className="head">
                <h1>Our Blog</h1>
                <img src={Line} alt="" />
              </div>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat et voluptates
                repudiandae sint et molestiae non recusandae.
              </p>
              <div className="learnmore">
                <a href="@user">
                  <h4>LEARN MORE</h4>
                  <FaAngleRight />
                  <FaAngleRight />
                </a>
              </div>
            </div>
            <div className="box">
              <div className="box__head">
                <div className="date">
                  <h1>20</h1>
                  <p>June</p>
                </div>
                <img src={Main30} alt="" />
              </div>
              <div className="box__contenet">
                <h1>How to grom</h1>
                <h4>By Jhon Hart / 0 Comment</h4>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box__head">
                <div className="date">
                  <h1>20</h1>
                  <p>June</p>
                </div>
                <img src={Main30} alt="" />
              </div>
              <div className="box__contenet">
                <h1>How to grom</h1>
                <h4>By Jhon Hart / 0 Comment</h4>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
