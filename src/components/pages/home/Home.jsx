import "./home.css";
import React, { useState, useEffect } from "react";
import Main39 from "../../../assets/img/main39.jpg";
import WelcomeImg from "../../../assets/img/main4.jpg";
import Line from "../../../assets/img/line-blue.png";
import Main10 from "../../../assets/img/main10.jpg";
import Main11 from "../../../assets/img/main11.png";
import Main12 from "../../../assets/img/main12.jpg";
import Main25 from "../../../assets/img/main44 (1).jpg";
import { FaAngleRight } from "react-icons/fa";
import Main32 from "../../../assets/img/main44 (5).jpg";
import Line2 from "../../../assets/img/line-white.png";
import Caruselleft from "../../../assets/img/carusle-left.png";
import Caruselright from "../../../assets/img/carusle-right.png";
import Cloud from "../../../assets/img/bg-cloud-01.jpg";
import Btn02 from "../../../assets/img/btn-02.png";
import Main30 from "../../../assets/img/main30.jpg";
import Pen from "../../../assets/img/pen.png";
import Class1 from "../../../assets/img/class1 (1).jpg";
import Class2 from "../../../assets/img/class1 (2).jpg";
import Class3 from "../../../assets/img/class1 (3).jpg";
import Class4 from "../../../assets/img/class1 (4).jpg";  
import Teacher1 from "../../../assets/img/teacher1 (1).jpg";
import Teacher2 from "../../../assets/img/teacher1 (2).jpg";
import Teacher3 from "../../../assets/img/teacher1 (3).jpg";
import Teacher4 from "../../../assets/img/main12.jpg";
import Main29 from "../../../assets/img/main29.jpg";






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

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 2000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [goToNextSlide]);

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
              <h2 className="carousel-title">
                Baby creative art from <br /> drawing
              </h2>
            </div>
            <div className="learnmore">
              <a href="@user">
                <h4>LEARN MORE</h4>
                <FaAngleRight />
                <FaAngleRight />
              </a>
            </div>
          </div>
          <div className="pagination">
            <img src={Caruselleft} alt="" onClick={goToPreviousSlide} />
            <img src={Caruselright} alt="" onClick={goToNextSlide} />
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
                <img src={Class1} alt="" />
              </div>
            </div>
            <div className="box">
              <div className="box__content">
                <h3>Art Classes</h3>
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
                <div className="price">$55</div>
                <img src={Class2} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <div className="box__img">
                <div className="price">
                  <p>$29</p>
                </div>
                <img src={Class3} alt="" />
              </div>
              <div className="box__content">
                <h3>Color Classes</h3>
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
                  <p>$35</p>
                </div>
                <img src={Class4} alt="" />
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
                <img src={Teacher1} alt="" />
                <div className="box__title">
                  <h3>Wictoria Lawson</h3>
                  <p>Music Teacher</p>
                </div>
              </div>
              <div className="box">
                <img src={Teacher2} alt="" />
                <div className="box__title">
                  <h3>Grace Johnson</h3>
                  <p>Art Teacher</p>
                </div>
              </div>
              <div className="box">
                <img src={Teacher3} alt="" />
                <div className="box__title">
                  <h3>Victoria Lawson</h3>
                  <p>Drawing Teacher</p>
                </div>
              </div>
              <div className="box">
                <img src={Teacher4} alt="" />
                <div className="box__title">
                  <h3>Stephanie Arnold</h3>
                  <p>Language Teacher</p>
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
                <img src={Main29} alt="" />
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
                  <h1>30</h1>
                  <p>June</p>
                </div>
                <img src={Main30} alt="" />
              </div>
              <div className="box__contenet">
                <h1>How to coax children</h1>
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
    </>
  );
}
export default Home;
