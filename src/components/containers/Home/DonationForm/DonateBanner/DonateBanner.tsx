import React from "react";
import "./DonateBanner.scss";

export const DonateBanner = () => {
  return (
    <div className="DonateBanner">
      <div className="DonateBanner-head">
        <h1 className="DonateBanner__ttl">
          <span className="main">Donate Now</span>
        </h1>
      </div>
      <div className="DonateBanner__bg">
        <img
          src="https://www.technoserve.org/wp-content/uploads/2019/09/cta-bg-1400x628.png"
          alt=""
        />
      </div>
    </div>
  );
};
