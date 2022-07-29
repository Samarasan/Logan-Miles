import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../../redux/reducer/CombineReducer";
import "./EventBanner.scss";
import { useParams } from "react-router-dom";

export const EventBanner = () => {
  const params: any = useParams();
  const { eventData } = useSelector((state: IRootState) => state);
  const ourEvent = eventData && eventData.ourEvents;
  const bookingImg = ourEvent.find((item) => item.eid === params.bookingId);
  return (
    <div className="slideshow-container">
      <div className="eventBanner">
        <img src={bookingImg?.url} alt="img" style={{width:"100%"}} />
      </div>
         <div className="homepage-center-promo">
        <h1 className="homepage-center-promo-head">
          {bookingImg?.title}
        </h1>
        <span className="homepage-center-promo-content u-h3">
          {bookingImg?.date}
        </span>
      </div>
    </div>
  );
};
