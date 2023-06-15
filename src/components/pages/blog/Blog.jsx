import React from "react";
import "./blog.css";
import { Card, Pagination } from "antd";
import Home from "./../home/Home";
import Line1 from "../../../assets/img/line-blue.png";
import Main37 from "../../../assets/img/main37.jpg";
import Pen from "../../../assets/img/pen.png";
import { FaAngleRight } from "react-icons/fa";
import Main15 from "../../../assets/img/main15.jpg";

import Course1 from "../../../assets/img/course1 (1).jpg";
import Course2 from "../../../assets/img/course1 (2).jpg";
import Course3 from "../../../assets/img/course1 (3).jpg";
import Course4 from "../../../assets/img/course1 (4).jpg";
import Course5 from "../../../assets/img/course1 (5).jpg";
import Course6 from "../../../assets/img/course1 (6).jpg";

const data = [
  {
    id: 1,
    price: "22",
    date: "August",
    image: Course1,
    name: "Color Matching Class",
    by: "By : Jhon Doe / 0 Comment",
    discription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 2,
    price: "25",
    date: "July",
    image: Course2,
    name: "If you are going to use",
    by: "By : Jhon Doe / 0 Comment",
    discription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },

  {
    id: 3,
    price: "15",
    date: "June",
    image: Course3,
    name: "Neque porro quisquam",
    by: "By : Jhon Doe / 0 Comment",
    discription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 4,
    price: "10",
    date: "May",
    image: Course4,
    name: "On the other hand",
    by: "By : Jhon Doe / 0 Comment",
    discription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 5,
    price: "31",
    date: "October",
    image: Course5,
    name: "Righteous indignation",
    by: "By : Jhon Doe / 0 Comment",

    discription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 6,
    price: "25",
    date: "August",
    image: Course6,
    name: "Demoralized charms",
    by: "By : Jhon Doe / 0 Comment",
    discription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 6,
    price: "25",
    date: "August",
    image: Course6,
    name: "Demoralized charms",
    by: "By : Jhon Doe / 0 Comment",
    discription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },

];

let currentPage = 1;

const CardsPerPage = 6;
const TotalPages = Math.ceil(data.length / CardsPerPage);

const Blog = () => {
  const handlePageChange = (page) => {
    console.log("Current page:", page);
    currentPage = page;
  };


  const renderCards = () => {
    let filteredData = data;


    const currentPageData = filteredData.slice(
      (currentPage - 1) * CardsPerPage,
      currentPage * CardsPerPage
    );

    return currentPageData.map((item) => (
      <Card key={item.id} className="blog__card">
        <div className="card-header">
          <div className="price">
            <h1>{item.price}</h1> <h4>{item.date}</h4>
          </div>
          <img src={item.image} alt="Class" className="image" />
        </div>
        <div className="card-content">
          <div className="name">{item.name}</div>

          <div className="by">{item.by}</div>
          <div className="discription">{item.discription}</div>
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
          <img src={Main15} alt="" />
        </div>
        <div className="box">
          <h3>Blog</h3>

          <img src={Line1} alt="" />
          <p>
            <a href={<Home />}>Home </a>- Teacher
          </p>
        </div>
      </div>
      <div className="app">
        <div className="cards-container">{renderCards()}</div>

        <Pagination
          className="pagination"
          defaultCurrent={1}
          total={TotalPages}
          onChange={handlePageChange}
          pageSize={1}
        />
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
};
export default Blog;
