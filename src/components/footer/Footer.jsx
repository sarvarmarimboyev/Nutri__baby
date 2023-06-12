import React from "react";
import Logo from "../../assets/img/Nutri.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./style.css";
import { MailOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <div className="head">
        <div className="logo1">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-nav">
          <ul>
            <Link to="/" className="home">
              <li>Home</li>
            </Link>
            <Link to="/about" className="about">
              <li>About</li>
            </Link>
            <Link to="/Blog" className="Blog">
              <li>Blog</li>
            </Link>
            <Link to="/Classes" className="Classes">
              <li>Classes</li>
            </Link>
            <Link to="/Teacher" className="Teacher">
              <li>Teacher</li>
            </Link>
            <Link to="/Blog" className="Blog">
              <li>Blog</li>
            </Link>

            <Link to="/Shop" className="Shop">
              <li>Shop</li>
            </Link>
          </ul>
        </div>

        <form className="e_mail">
          <input type="text" placeholder="Your e-mail address..." />
          <button type="submit">
            <MailOutlined />
          </button>
        </form>
      </div>
      <div className="bottom">
        <div className="left">
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
          </ul>
        </div>
        <div className="right">© 2019 JOBBY. Get The Theme</div>
      </div>
    </>
  );
}
