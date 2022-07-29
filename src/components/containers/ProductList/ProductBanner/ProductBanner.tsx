import React from "react";
import "./ProductBanner.scss";
import comingsoon from "../../../../assets/image/ComingSoon.png";

function ProductBanner() {
  return (
    <div className="Banner-Wrapper">
      <img
        className="Banner-Image"
        src={comingsoon}
        height="278.2230077120823"
        width="1519"
        loading="lazy"
        alt="Elaa"
      />
    </div>
  );
}

export default ProductBanner;
