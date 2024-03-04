import React, { useState } from "react";
import "./Navbar.scss";
import searchIcon from "../../../assets/search-icon.svg";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  const [con, setCon] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-div">
        <div className="input" style={{ visibility: con ? "hidden" : "" }}>
          <img src={searchIcon} alt="search icon" />
          <input type="text" />
        </div>
        <span className={con ? "show span1" : "hide span"}>Categories</span>
        <span className={con ? "show span2" : "hide span"}>
          Website Builders
        </span>
        <span
          className={
            con ? "show span3 todays-deals-span" : "hide span todays-deals-span"
          }
        >
          Today's Deals
        </span>
        <RxHamburgerMenu
          className="ham-burger"
          style={{
            textAlign: "center",
            fontSize: "25px",
            backgroundColor: con ? "white" : "transparent",
            color: con ? "#212731" : "#d1d6da",
          }}
          onClick={() => setCon(!con)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
