import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Logo from "../../assets/img/Nutri.png";
import "./Navbar.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TbSeparatorVertical } from "react-icons/tb";
import { FaMap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { CaretDownOutlined } from "@ant-design/icons";
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar__main">
        <div className="navbar__top">
          <div className="left">
            <div className="loc">
              <FaMap /> No 40 Baria Sreet 133/2
            </div>
            <div className="number">
              <FaPhone /> +99 897 123 45 67
            </div>
          </div>

          <div className="right">
            <ul>
              <li>
                <a href="@user">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="@user">
                  <FaTwitch />
                </a>
              </li>
              <li>
                <a href="@user">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="@user">
                  <TbSeparatorVertical />
                </a>
              </li>
              <li>
                <a href="@user">
                  <FaSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt=""/>
          </div>
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <Link to="/" className="home">
              <li>Home</li>
            </Link>
            <Link to="/about" className="about">
              <li>About</li>
            </Link>
            <Link to="/classes" className="class">
              <li>Classes</li>
            </Link>
            <Link to="/teacher" className="teacher">
              <li>Teacher</li>
            </Link>
            <Link to="/Blog" className="Blog">
              <li>Blog</li>
            </Link>

            <Link to="/purchase" className="Purchase">
              <li>
                <div className="App">
                  <button className="dropbtn" onClick={toggleDropdown}>
                    <Link to="/Shop" className="Shop">
                      <li>
                        Shop <CaretDownOutlined style={{ fontSize: "12px" }} />
                      </li>
                    </Link>
                  </button>
                  {isOpen && (
                    <div className="dropdown-content">
                      <a href="@user">
                        <Link to="/purchase" className="purchase">
                          <li>Purchase</li>
                        </Link>
                        <Link to="/Shop" className="Shop">
                          <li>Product List</li>
                        </Link>
                      </a>
                    </div>
                  )}
                </div>
              </li>
            </Link>
          </ul>

          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <ImCross /> : <FaBars />}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
