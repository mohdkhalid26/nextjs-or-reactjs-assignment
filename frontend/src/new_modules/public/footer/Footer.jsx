import React from "react";
import "./Footer.scss";
import grayDropdownIcon from "../../../assets/gray-dropdown-icon.svg";
function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-first-cont">
          <h4>Categories</h4>
          <ul>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className="footer-sec-cont">
          <h4>Contact</h4>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-third-cont">
          <span>United States</span>
          <img src={grayDropdownIcon} alt="grayDropdownIcon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
