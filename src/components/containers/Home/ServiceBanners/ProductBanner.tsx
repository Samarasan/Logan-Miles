import React from "react";
import SkateBoard from "../../../../assets/image/Banner/SkateBoard.jpeg";

export const ProductBanner = () => {
  return (
    <div className="hp_image_with_text">
      <div className="hp_text-wrapper">
        <h2 className="u-h2">ROCKROCK SKATE BOARDS</h2>
        <p>
          Our team of experts has selected the best skateboards out of hundreds
          of models. Based on our research, we’ve narrowed down the list to
          models from Minority, KPC, Aceshin, Magneto, and WhiteFang. We named
          Minority as the Best of the Best in our Best Skateboards category
          because of its superior quality and great consumer experience. We
          chose the KPC as our Best Bang for the Buck because of its overall
          quality and value. Read our full review for our pros, cons, and bottom
          line on each of the models we chose for our top five.
        </p>
        <span>Read More</span>
      </div>
      <div className="hp_image-wrapper">
        <img src={SkateBoard} className="hp_skate-board-img" alt="SkateBoard" />
      </div>
    </div>
  );
};
