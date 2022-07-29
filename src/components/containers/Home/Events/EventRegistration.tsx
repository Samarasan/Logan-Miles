import React from "react";
import "./EventBanner/EventBanner.scss";
import reg from "../../../../assets/image/reg.png";

export const EventRegistration = () => {
  return (
    <div className="slideshow-container">
      <div className="mySlides">
        <img src={reg} style={{ width: "100%" }} alt="event-pic" />
      </div>
      <div className="homepage-center-promo">
        <h1 className="homepage-center-promo-head">Registration</h1>
      </div>
    </div>
  );
};
