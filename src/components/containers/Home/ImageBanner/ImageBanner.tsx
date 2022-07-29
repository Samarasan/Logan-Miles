import React from "react";
import { useWindowSize } from "../../../../hook/useWindowSize.hook";
import "./ImageBanner.scss";
import bgfull from "./images/bg-full.png";
import bghalf from "./images/bg-half.png";

function ImageBanner() {
  const [width] = useWindowSize();

  const imageSrc = width > 1000 ? bgfull : bghalf;

  return (
    <div className="about-bot1 pr">
      <img alt="About us" src={imageSrc} className="about-bot-img1" />
      <div className="banner-cont1">
        <div className="banner-cont2">
          <h4 className="u-h3">WHY ROCKROCK</h4>
          <h2 className="u-h2">
            A different approach, using a new method of manufacturing.
          </h2>
          <p className="u-h5">
            We RockRock the first paddle board’s manufacturer at India! Back up
            from international professionals at paddle board of 20+ years at
            High quality manufacturing. Selected best material and parts
            worldwide with local Indian quality supplier.
          </p>
          <button className="u-h5">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
