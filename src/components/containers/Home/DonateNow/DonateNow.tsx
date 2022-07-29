import React from "react";
import { LeftArrowIcon } from "../../../common/Icons";
import { ISupportTeam } from "../../../stateContainers/BrandUsers/Types";
import { useAmbassador } from "../../Brand Ambassador/useAmbassador.hook";
import "./DonateNow.scss";

function DonateNow() {
  const { supportTeam } = useAmbassador();

  return (
    <section className="donate-wrapper">
      <div className="donate-container">
        <h2 className="donate-header u-h1">THANKS FOR SUPPORTING</h2>
        <span className="donate-header-line"></span>
        <ul className="donater-list">
          {supportTeam.map((item: ISupportTeam) => {
            return (
              <li className="donater-list-item" key={item.thanksId}>
                <div className="donater-image-wrapper">
                  <img src={item.url} alt={item.name} />
                </div>
                <div className="donater-name u-h2">{item.name}</div>
                <span className="donater-details u-h4">{item.caption}</span>
              </li>
            );
          })}
        </ul>
        <div className="DonateNowBtn">
          <a href="/donate" className="DonateNowBtn__btn">
            <div className="DonateNowBtn__container">
              <span className="DonateNowBtn__label u-h4">Donate Now</span>
              <span className="DonateNowBtn__icon">
                <LeftArrowIcon />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default DonateNow;
