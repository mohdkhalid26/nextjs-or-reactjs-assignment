import React from "react";
import "./Header.scss";
import checkIcon from "../../../assets/check-icon.svg";
import informationIcon from "../../../assets/information-icon.svg";
import dropdownIcon from "../../../assets/dropdown-icon.svg";
import vectorIcon from "../../../assets/vector-icon.svg";
function Header() {
  return (
    <header className="header">
        <div className="header-div">

      <h1>Best Website Builders In The US</h1>
      <div className="show-update-date-div">
        <div className="first-div-of-show-update-date-div">
          <span>
            <img src={checkIcon} alt="checkIcon" /> Last Updated - February 22,
            2020
          </span>
          <span>
            <img src={informationIcon} alt="informationIcon" /> Advertising
            Disclosure
          </span>
        </div>
        <div className="second-div-of-show-update-date-div">
          Top Relevant <img src={dropdownIcon} alt="dropdownIcon" />
        </div>
      </div>
      <div className="more-categories-div">
        <span>Tools</span>
        <span>AWS Builder</span>
        <span>Start Build</span>
        <span>Build Supplies</span>
        <span>Tooling</span>
        <span>BlueHosting</span>
      </div>
      <div className="path-name-div">
        <span>Home</span>
        <img src={vectorIcon} alt="vectorIcon" />
        <span>Hosting for all</span>
        <img src={vectorIcon} alt="vectorIcon" />
        <span>Hosting</span>
        <img src={vectorIcon} alt="vectorIcon" />
        <span>Hosting6</span>
        <img src={vectorIcon} alt="vectorIcon" />
        <span>Hosting5</span>
      </div>
        </div>
    </header>
  );
}

export default Header;
