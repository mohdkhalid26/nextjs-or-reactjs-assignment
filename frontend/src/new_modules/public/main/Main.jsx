import React, { useState } from "react";
import Hosting5 from "../hosting_5/Hosting5";
import "./Main.scss";
import cupIcon from "../../../assets/cup-icon.svg";
import diamondIcon from "../../../assets/diamond-icon.svg";
import computerImg from "../../../assets/computer-img.png";
import blueDropdownIcon from "../../../assets/blue-dropdown-icon.svg";
import blueCheckIcon from "../../../assets/blue-check-icon.svg";
import firstStarImg from "../../../assets/first-star-img.png"
import secStarImg from "../../../assets/sec-star-img.png"
import thirdStarImg from "../../../assets/third-star-png.png"
import fourthStarImg from "../../../assets/fourth-star-img.png"
import RelatedDeals from "../related_deals/RelatedDeals";
function Main() {
  const [data] = useState([
    {
      extraIcon: cupIcon,
      extraData: "Best Choice",
      img: computerImg,
      buildName: "Builder 1",
      contentFirstHead: "WixPro 72-Inch Responsive Website Builder- ",
      contentFirstPara:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      contentSecHead: "Main highlights",
      contentSecPara:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      contentSecDiv: null,
      whyHead: null,
      whyCont: null,
      sM: "Show More",
      sMicon: blueDropdownIcon,
      rateNum: 9.8,
      rateStatus: "Exceptional",
      rateImg:firstStarImg,
    },
    {
      extraIcon: diamondIcon,
      extraData: "Best Value",
      img: computerImg,
      buildName: "Builder",
      contentFirstHead: "SiteCraft 68-Inch Ultimate Web Design Studio- ",
      contentFirstPara:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      contentSecHead: "Main highlights",
      contentSecPara:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      contentSecDiv: null,
      whyHead: null,
      whyCont: null,
      sM: "Show More",
      sMicon: blueDropdownIcon,
      rateNum: 9.5,
      rateStatus: "Excellent",
      rateImg:secStarImg,
    },
    {
      extraIcon: null,
      extraData: "",
      img: computerImg,
      buildName: "Builder 1",
      contentFirstHead: "WixPro 72-Inch Responsive Website Builder- ",
      contentFirstPara:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      contentSecHead: "Main highlights",
      contentSecPara:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      contentSecDiv: null,
      whyHead: null,
      whyCont: null,
      sM: "Show More",
      sMicon: blueDropdownIcon,
      rateNum: 9.3,
      rateStatus:"Exceptional",
      rateImg:thirdStarImg,
    },
    {
      extraIcon: null,
      extraData: "",
      img: computerImg,
      buildName: "CDK",
      contentFirstHead: "CDK Resposive Builder: ",
      contentFirstPara:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      contentSecHead: "Main highlights",
      contentSecPara: "",
      contentSecDiv: [
        {
          name: "Building Responsive",
          rating: 9.9,
        },
        {
          name: "Cool",
          rating: 8.9,
        },
        {
          name: "Docs",
          rating: 8.9,
        },
      ],
      whyHead: "Why we love it",
      whyCont: [
        {
          icon: blueCheckIcon,
          name: "Documentation",
        },
        {
          icon: blueCheckIcon,
          name: "Ease Use",
        },
        {
          icon: blueCheckIcon,
          name: "Out of Box",
        },
      ],
      sM: "Show More",
      sMicon: blueDropdownIcon,
      rateNum: 9.1,
    rateStatus:"Very Good",
    rateImg:fourthStarImg,
    },
  ]);
  return (
    <main className="main-div">
      <Hosting5 data={data} />
      <RelatedDeals/>
    </main>
  );
}

export default Main;
