import React from "react";
import "./blog.css";
import { Card, Pagination } from "antd";
import Footer from "../../footer/Footer";
import Home from "./../home/Home";
import Line1 from "../../../assets/img/line-blue.png";
import Main25_2 from "../../../assets/img/main25(2).jpg";
import Main37 from "../../../assets/img/main37.jpg";
import Pen from "../../../assets/img/pen.png";
import { FaAngleRight } from "react-icons/fa";

const data = [
  {
    id: 1,
    class: "Color Matching Class",
    price: "$22",
    image: "playgroup.jpg",
    name: "John",
    date: "June 1, 2023",
    age: "1 - 2 years",
    size: "12 seats",
  },
  {
    id: 2,
    class: "Play Group",
    price: "$25",
    image: "playgroup2.jpg",
    name: "Emma",
    date: "June 3, 2023",
    age: 4,
    size: "Medium",
  },
  {
    id: 3,
    class: "Play Group",
    price: "$38",
    image: "playgroup2.jpg",
    name: "Emma",
    date: "June 3, 2023",
    age: 4,
    size: "Medium",
  },
  {
    id: 4,
    class: "Play Group",
    price: "$36",
    image: "playgroup2.jpg",
    name: "Emma",
    date: "June 3, 2023",
    age: 4,
    size: "Medium",
  },
  {
    id: 5,
    class: "Play Group",
    price: "$41",
    image: "playgroup2.jpg",
    name: "Emma",
    date: "June 3, 2023",
    age: 4,
    size: "Medium",
  },
  {
    id: 6,
    class: "Play Group",
    price: "$35",
    image: "playgroup2.jpg",
    name: "Emma",
    date: "June 3, 2023",
    age: 4,
    size: "Medium",
  },
  {
    id: 7,
    class: "Play Group",
    price: "$12",
    image: "playgroup2.jpg",
    name: "Emma",
    date: "June 3, 2023",
    age: 4,
    size: "Medium",
  },
  {
    id: 8,
    class: "Play Group",
    price: "$12",
    image: "playgroup2.jpg",
    name: "Emma",
    date: "June 3, 2023",
    age: 4,
    size: "27 seats",
  },
  // Add more data objects for other cards
  // ...
];

let currentPage = 1;
let selectedClass = "All classes"; // Default selected class

const CardsPerPage = 6;
const TotalPages = Math.ceil(data.length / CardsPerPage);

const Blog = () => {
  const handlePageChange = (page) => {
    // Implement logic to handle page change
    console.log("Current page:", page);
    currentPage = page;
  };

  const handleClassClick = (className) => {
    // Implement logic to handle class selection and sorting
    console.log("Selected class:", className);
    selectedClass = className;
  };

  const renderCards = () => {
    let filteredData = data;

    if (selectedClass !== "All classes") {
      filteredData = data.filter((item) => item.class === selectedClass);
    }

    const currentPageData = filteredData.slice(
      (currentPage - 1) * CardsPerPage,
      currentPage * CardsPerPage
    );

    return currentPageData.map((item) => (
      <Card key={item.id} className="card">
        <div className="card-header">
          <div className="price">{item.price}</div>
          <img src={item.image} alt="Class" className="image" />
        </div>
        <div className="card-content">
          <div className="name">{item.name}</div>
          <div className="date">{item.date}</div>
          <div className="age-size">
            Age: {item.age} | Size: {item.size}
          </div>
        </div>
      </Card>
    ));
  };

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
          <h3>Blog</h3>

          <img src={Line1} alt="" />
          <p>
            <a href={<Home />}>Home </a>- Teacher
          </p>
        </div>
      </div>
      <div className="container">
        <div className="app">
          <div className="class-selector">
            <div
              className={`class-option ${
                selectedClass === "All classes" ? "active" : ""
              }`}
              onClick={() => handleClassClick("All classes")}
            >
              All classes
            </div>
            <div
              className={`class-option ${
                selectedClass === "Play Group" ? "active" : ""
              }`}
              onClick={() => handleClassClick("Play Group")}
            >
              Play Group
            </div>
            <div
              className={`class-option ${
                selectedClass === "Primary" ? "active" : ""
              }`}
              onClick={() => handleClassClick("Primary")}
            >
              Primary
            </div>
            <div
              className={`class-option ${
                selectedClass === "Story" ? "active" : ""
              }`}
              onClick={() => handleClassClick("Story")}
            >
              Story
            </div>
          </div>
          <div className="cards-container">{renderCards()}</div>

          <Pagination
            className="pagination"
            defaultCurrent={1}
            total={TotalPages}
            onChange={handlePageChange}
            pageSize={1}
          />
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
      <Footer />
    </>
  );
};
export default Blog;