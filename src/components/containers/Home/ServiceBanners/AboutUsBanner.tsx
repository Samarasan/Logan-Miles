import React from "react";
import insta from "../../../../assets/image/LOGAN/IMAGES/instagram.png";
import ins1 from "../../../../assets/image/LOGAN/IMAGES/insta11.png";
import ins2 from "../../../../assets/image/LOGAN/IMAGES/insta22.png";
import ins3 from "../../../../assets/image/LOGAN/IMAGES/insta3.png";
import rewards from "../../../../assets/image/LOGAN/IMAGES/reward.png"
export const AboutUsBanner = () => {
  return (
    <React.Fragment>
      <div className="instagram-Container">
        <img src={rewards} alt="scenery" />
      </div>
      <div className="instagram-Container">
        <img src={insta} alt="instagram" />
      </div>
            <div className="instalist">
              <ul>
                <li>
                  <img src={ins1} alt="insta" />
                </li>
                <li>
                  <img src={ins2} alt="insta" />
                </li>
                <li>
                  <img src={ins3} alt="insta" />
                </li>
                <li>
                  <img src={ins1} alt="insta" />
                </li>
              </ul>
            </div>
    </React.Fragment>
  );
};
