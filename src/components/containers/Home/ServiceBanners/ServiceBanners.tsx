import React from "react";
import { AboutUsBanner } from "./AboutUsBanner";
import { AboutBanner } from "./ConstructionBanner";
import { ProductBanner } from "./ProductBanner";
import "./ServiceBanners.scss";

export const ServiceBanners = () => {
  return (
    <React.Fragment>
      <div className="service-head-wrapper">
        <div className="service-head_text-wrapper">
          <h4 className="u-h4">SERVICES</h4>

          <h2 className="u-h3">
            We Deliver Exceptional Products and Services Around the World
          </h2>
        </div>
      </div>
      <AboutUsBanner />
      <AboutBanner />
      <ProductBanner />
    </React.Fragment>
  );
};
