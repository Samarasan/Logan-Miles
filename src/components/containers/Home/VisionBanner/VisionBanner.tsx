import React from "react";
import "./VisionBanner.scss";
const vPath = require("../../../../assets/image/Banner/Vision.mp4");

function VisionBanner() {
  return (
    <div className="vison-wrapper">
      <div className="vision_text-wrapper">
        <h4 className="u-h4">VISION</h4>

        <h2 className="u-h3">
          We’re Changing the Way the World Thinks About ISUP
        </h2>

        <p>
          As mentioned a trend of great concern is manufacturers implying the
          use of fusion materials on boards that are actually made of single
          layer fabric. Some creative layer-counting takes place for the sake of
          advertising, so read construction claims critically. A common practice
          is to count adhesives or coatings as 'layers, which muddies the waters
          quite a bit with regard to the actual composition of the materials
          used.
        </p>
      </div>
      <div className="vision_image-wrapper">
        <video
          autoPlay
          loop
          muted
          controls
          className="vision_image-wrapper-vdo"
        >
          <source src={vPath.default} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VisionBanner;
