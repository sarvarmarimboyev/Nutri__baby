import { useState } from "react";
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaStar,
  FaTwitch,
} from "react-icons/fa";
import Main37 from "../../assets/img/main37.jpg";
import Main1 from "../../assets/img/main1.jpg";
import Main36 from "../../assets/img/main36.jpg";
import Main35 from "../../assets/img/main35.jpg";
import Main34 from "../../assets/img/main34.jpg";
import Main33 from "../../assets/img/main33.jpg";
import "./purchase.css";
import Pen from "../../assets/img/pen.png";
import Line1 from "../../assets/img/line-blue.png";
import Home from "../pages/home/Home";

function Purchase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const dicrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const thumbnails = [Main37, Main36, Main35, Main34, Main33];
  return (
    <>
      <div className="pen">
        <img src={Pen} alt="" />
      </div>
      <div className="main">
        <div className="main__img">
          <img src={Main1} alt="" />
        </div>
        <div className="box">
          <h3>Product Single</h3>

          <img src={Line1} alt="" />
          <p>
            <a href={<Home />}>Home </a>- Product Single
          </p>
        </div>
      </div>

      <div className="purchase__main">
        <div className="image-gallery">
          <div className="big-image">
            <img src={thumbnails[activeIndex]} alt="Big" />
          </div>
          <div className="thumbnail-images">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                className={`thumbnail ${
                  activeIndex === index ? "active-thumbnail" : ""
                }`}
                src={thumbnail}
                alt={` ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="purchase__content">
          <h2>Squeeze Toys For Kids</h2>
          <div className="haed__ul">
            <ul>
              <li>
                <FaStar style={{ color: "#f6c2c4" }} />
              </li>
              <li>
                <FaStar style={{ color: "#f6c2c4" }} />
              </li>
              <li>
                <FaStar style={{ color: "#f6c2c4" }} />
              </li>
              <li>
                <FaStar style={{ color: "#f6c2c4" }} />
              </li>
              <li>
                <FaStar style={{ color: "#f6c2c4" }} />
              </li>
            </ul>
          </div>

          <h3>$ 11</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="purchase__add">
            <div className="control">
              <div className="control1">
                <p>{count}</p>
              </div>
              <div className="control2">
                <button
                  onClick={increase}
                  style={{
                    borderBottom: "1px solid #e6e6e6 ",
                    width: "40px",
                  }}
                >
                  +
                </button>
                <button onClick={dicrease}>-</button>
              </div>
            </div>
            <div className="left">
              <button>
                Add To Card
                <span>
                  <FaAngleRight /> <FaAngleRight />
                </span>
              </button>
            </div>
          </div>

          <div className="content__last">
            <ul>
              <li>
                <p>Sku: 012</p>
              </li>
              <li>
                <p>Category: Kids Care</p>
              </li>
              <li>
                <p>Tags: Conton Nature</p>
              </li>
              <li>
                <p> Shared:
                  <div className="last__icons">

                  <FaFacebook /> <FaTwitch /> <FaInstagram />
                  </div>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="blog__last">
        <img src={Main37} alt="" />
        <div className="last__content">
          <h1>HOW TO ENROLL YOUR CHILD TO A CLASS?</h1>
          <p>
            Interested in good preschool education for your child? Our
            kindergarten is the right decision!
          </p>
          <div className="enroll__more">
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
    </>
  );
}

export default Purchase;
