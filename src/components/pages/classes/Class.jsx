import { Card, Pagination } from "antd";
import "./class.css";
import React from "react";
import Home from "../home/Home";
import "./class.css";
import Pen from "../../../assets/img/pen.png";
import Main5 from "../../../assets/img/main5.jpg";
import Line1 from "../../../assets/img/line-blue.png";
import Course1 from "../../../assets/img/course1 (1).jpg";
import Course2 from "../../../assets/img/course1 (2).jpg";
import Course3 from "../../../assets/img/course1 (3).jpg";
import Course4 from "../../../assets/img/course1 (4).jpg";
import Course5 from "../../../assets/img/course1 (5).jpg";
import Course6 from "../../../assets/img/course1 (6).jpg";

const data = [
  {
    id: 1,
    class: "Color Matching Class",
    price: "$22",
    image: Course1,
    name: "Color Matching Class",
    date: "June 1, 2023,  April 29, 2020",
    age: "1 - 2 years",
    size: "12 seats",
  },
  {
    id: 2,
    class: "Play Group",
    price: "$25",
    image: Course2,
    name: "Sand Play Class",
    date: "June 3, 2023,  April 29, 2020",
    age: 4,
    size: "Medium",
  },
  {
    id: 3,
    class: "Play Group",
    price: "$38",
    image: Course3,
    name: "Painting Class",
    date: "June 3, 2023,  April 29, 2020",
    age: 4,
    size: "Medium",
  },
  {
    id: 4,
    class: "Play Group",
    price: "$36",
    image: Course4,
    name: "Table/Floor Toys Class",
    date: "June 3, 2023,  April 29, 2020",
    age: 4,
    size: "Medium",
  },
  {
    id: 5,
    class: "Play Group",
    price: "$41",
    image: Course5,
    name: "Storytime Class",
    date: "June 3, 2023,  April 29, 2020",
    age: 4,
    size: "Medium",
  },
  {
    id: 6,
    class: "Play Group",
    price: "$35",
    image: Course6,
    name: "Shapes Match",
    date: "June 3, 2023,  April 29, 2020",
    age: 4,
    size: "Medium",
  },
  {
    id: 7,
    class: "Play Group",
    price: "$12",
    image: Course6,
    name: "Smart Turtles",
    date: "June 3, 2023,  April 29, 2020",
    age: 4,
    size: "Medium",
  },
  {
    id: 8,
    class: "Play Group",
    price: "$12",
    image: Course1,
    name: "Letter Match",
    date: "June 3, 2023,  April 29, 2020",
    age: 4,
    size: "27 seats",
  },
  {
    id: 9,
    class: "Play Group",
    price: "$12",
    image: Course1,
    name: "Smart Turtles",
    date: "June 3, 2023,  April 29, 2020",
    age: 4,
    size: "27 seats",
  },
];

let currentPage = 1;
let selectedClass = "All classes"; 

const CardsPerPage = 6;
const TotalPages = Math.ceil(data.length / CardsPerPage);

const Class = () => {
  const handlePageChange = (page) => {
    console.log("Current page:", page);
    currentPage = page;
  };

  const handleClassClick = (className) => {
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
      <Card key={item.id} className="class__card">
        <div className="card-header">
          <div className="price">
            <p>{item.price}</p>
          </div>
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
          <img src={Main5} alt="" />
        </div>
        <div className="box">
          <h3>Classes</h3>

          <img src={Line1} alt="" />
          <p>
            <a href={<Home />}>Home</a>- Classes
          </p>
        </div>
      </div>

      <div className="class__main">
        <div className="class__head">
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
    </>
  );
};

export default Class;
