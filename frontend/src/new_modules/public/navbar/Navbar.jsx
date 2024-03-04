import React from "react";
import "./Navbar.scss";
import searchIcon from "../../../assets/search-icon.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-div">
        <div className="input">
          <img src={searchIcon} alt="search icon" />
          <input type="text" />
        </div>
        <span>Categories</span>
        <span>Website Builders</span>
        <span className="todays-deals-span">Today's Deals</span>
      </div>
    </nav>
  );
}

export default Navbar;
