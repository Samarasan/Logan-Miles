import React from "react";
import { DownloadApp } from "./DownloadApp";
import "./FooterTopBar.scss";
import logo from "../../../assets/image/nav/logo.png";

export const FooterTopBar = () => {
  return (
    <div className="index-section u-h5">
      <div className="section--divider">
        <div className="grid grid--flush-bottom">
          <div className="grid__itemd medium-up--one-third">
            <div className="footer-title">DOWNLOAD OUR APP</div>
            <DownloadApp />
          </div>
          <div className="grid__itemd medium-up--one-third small--hide">
            <img src={logo} alt="iwi" height="33" width="100" />
          </div>
          <div className="grid__itemd medium-up--one-third--large">
            <div className="footer-row">
              <div className="footer-col-sm">
                <div className="footer-about-us">
                  <div className="footer-title u-h4 mb5">CONTACT INFO</div>
                  {/* <div
                    className="footer-subhead u-h5"
                    style={{ paddingTop: "7px", paddingBottom: "7px" }}
                  >
                    Rock Rock
                  </div> */}
                  <p>435 Stratton Street Logon WV25601</p>
                  <p>
                    RockRock Ranipet No. 99 sidco industrial estate
                    Sipcot.-632403 
                  </p>
                </div>
              </div>
              <div className="footer-col-sm">
                <div className="footer-about-us ">
                  <div className="footer-title u-h5">Phone</div>
                  <p>3046889192</p>

                  <div className="footer-title  u-h5">Email</div>
                  <p>contact@rockrock.tv</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopBar;
