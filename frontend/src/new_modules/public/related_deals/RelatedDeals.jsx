import React from "react";
import "./RelatedDeals.scss";
import RelatedDealsCard from "./related-deals-card/RelatedDealsCard";
function RelatedDeals() {
  return (
    <div className="related-deals-div">
      <h2>Related deals you might like for</h2>
      <div className="related-contents-div">
        <RelatedDealsCard />
        <RelatedDealsCard />
        <RelatedDealsCard />
        <RelatedDealsCard />
        <RelatedDealsCard />
      </div>
      <div className="signup-div">
        <h3>Sign up and get exclusive special deals</h3>
        <div className="signup-input-div">
          <input type="text" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default RelatedDeals;
