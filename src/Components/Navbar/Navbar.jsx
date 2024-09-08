import React from "react";
import "./Navbar.css";
import Dropdown from "../../assets/Navbar/Dropdown_icon.png";
import Logo from "../../assets/Navbar/Logo.png";
import Profile_icon from "../../assets/Navbar/Profile_icon.png";
import Search_icon from "../../assets/Navbar/Search_icon.png";
import Hamburger from "../../assets/Navbar/Hamburger.png";

const Navbar = () => {
  return (
    <div className="nav_container">
      <nav>
        <img src={Hamburger} alt="" className="hamburger"/>
        <ul className="category">
          <li className="new_drops">
            <a href="">New Drops 🔥</a>
          </li>
          <div className="men_category">
            <a href="" className="men">Men</a>
            <img src={Dropdown} alt="" />
          </div>
          <div className="women_category">
            <a href="Women" className="women">Women</a>
            <img src={Dropdown} alt="" />
          </div>
        </ul>
        <div className="logo_container">
          <img src={Logo} alt="" />
        </div>
        <div className="action_container">
          <img src={Profile_icon} alt="" className="profile"/>
          <img src={Search_icon} alt="" className="search"/>
          <div className="circle">0</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
