import React, { useState } from "react";
import Home from "../home/Home";
import Main2 from "../../../assets/img/main2.jpg";
import Line1 from "../../../assets/img/line-blue.png";
import Main40 from "../../../assets/img/main40.jpg";
import Pen from "../../../assets/img/pen.png";
import "./Shop.css";
import Footer from "./../../footer/Footer";
import Main37 from "../../../assets/img/main37.jpg";
import { FaAngleRight } from "react-icons/fa";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Card = ({ name, price, category, img }) => (
  <div className="card" onClick="">
    <img src={img} alt="" />
    <h3>{name}</h3>
    <p> ${price}</p>
    <p>Category: {category}</p>
  </div>
);

const data = [
  { name: "Card 1", img: Main40, price: 10, category: "Kids Education" },
  { name: "Card 2", img: Main40, price: 20, category: "Sport Games" },
  { name: "Card 3", img: Main40, price: 45, category: "Kindergarten" },
  { name: "Card 4", img: Main40, price: 15, category: "Learning" },
  { name: "Card 5", img: Main40, price: 8, category: "Kids Education" },
  { name: "Card 6", img: Main40, price: 32, category: "Kindergarten" },
  { name: "Card 7", img: Main40, price: 53, category: "Learning" },
  { name: "Card 8", img: Main40, price: 23, category: "Sport Games" },
  { name: "Card 9", img: Main40, price: 55, category: "Kindergarten" },
  { name: "Card 10", img: Main40, price: 45, category: "Sport Games" },
  { name: "Card 11", img: Main40, price: 65, category: "Learning" },
  { name: "Card 12", img: Main40, price: 49, category: "Kindergarten" },
  { name: "Card 13", img: Main40, price: 5, category: "Sport Games" },
  { name: "Card 14", img: Main40, price: 50, category: "Kids Education" },
  { name: "Card 15", img: Main40, price: 18, category: "Learning" },
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const filteredData = data
    .filter((card) => !selectedCategory || card.category === selectedCategory)
    .filter((card) => priceFilter <= 0 || card.price <= priceFilter)
    .sort((a, b) => {
      if (selectedSort === "popularity") {
      } else if (selectedSort === "bestSellers") {
      } else if (selectedSort === "special") {
      }
      return 0; // Default behavior if no sorting option is selected
    });

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset current page when category changes
  };
  const handlePriceFilterChange = (e) => {
    const priceValue = parseInt(e.target.value);
    setPriceFilter(priceValue);
    setCurrentPage(1); // Reset current page when price filter changes
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    setCurrentPage(1); // Reset current page when sorting changes
  };

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
        <div className="shopping">
          <div className="container">
            <div className="filter__section">
              <p>Showing 1- 9 of 9 results</p>

              <select value={selectedSort} onChange={handleSortChange}>
                <option value="">Sort by</option>
                <option value="popularity">Popularity</option>
                <option value="bestSellers">Best Sellers</option>
                <option value="special">Special</option>
              </select>
            </div>

            <div className="card__collect">
              <div className="card-list">
                {visibleData.map((card, index) => (
                  <Card key={index} {...card}  />
                ))}
              </div>
              <div className="filter__options">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">All Categories</option>
                  <option value="Kids Education">Kids Education</option>
                  <option value="Sport Games">Sport Games</option>
                  <option value="Kindergarten">Kindergarten</option>
                  <option value="Learning">Learning</option>
                </select>

                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceFilter}
                  onChange={handlePriceFilterChange}
                />
                <span>Price: ${priceFilter}</span>
              </div>
            </div>

            <div className="pagination">
              <div className="left">
                <LeftOutlined />
              </div>
              <div className="collect">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="right">
                <RightOutlined />
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Shop;
