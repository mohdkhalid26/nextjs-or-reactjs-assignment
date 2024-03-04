import React from "react";
import "../RelatedDeals.scss";
import computerImg from "../../../../assets/computer-img.png";
function RelatedDealsCard() {
  return (
    <div className="related-content">
      <img src={computerImg} alt="computerImg" />
      <div className="offer-div">
        <span>20% Off</span>
        <span>Limited time</span>
      </div>
      <span>Webbuilder 1</span>
      <p>Computer Modern clasic with wix support</p>
      <div className="rate-div">
        <span>$39.96</span>
        <span>$49.96</span>
        <span>(20% Off)</span>
      </div>
      <button>View Deal</button>
    </div>
  );
}

export default RelatedDealsCard;
