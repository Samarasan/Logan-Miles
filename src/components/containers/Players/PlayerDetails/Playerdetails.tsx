import React, { useEffect, useState } from "react";
import Footer from "../../../Footer/Footer";
import { Facebook, Instagram } from "../../../Footer/FooterIcons";
import Header from "../../../header/Header.logic";
import UserComments from "./Feed";
import qr from "../../../../assets/image/shop/download.png";
import ww from "../../../../assets/image/www.jpg";
import "./PlayerDetails.scss";

export default function Playerdetails({ location }: any) {
  const playerDetails = location.state;
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition === 0) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  const scrollName = scrolling ? "homeview-inverted" : "homeview";
  return (
    <>
      <div className={scrollName}>
        <Header />
        <div className="detailContainer">
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
            }}
            className="slideimg"
          >
            <source
              src="https://video.wixstatic.com/video/5e82fd_a44ee5a5b1eb4df085e2ab85debdc483/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
          <div className="brd-card-wrapper">
            <div className="brd-card">
              <div className="brd-card-content">
                <h2 className="brd-card-title">
                  {playerDetails.item.fname}  {playerDetails.item.lname}
                </h2>
                <div className="plydetails">
                  <ul>
                    <li>
                      Name : {playerDetails.item.fname}
                    </li>
                    <li>
                      State : {playerDetails.item.state}
                    </li>
                    <li>
                      Country : {playerDetails.item.country}
                    </li>
                  </ul>
                </div>
                <div className="brd-social-link" key={playerDetails.item.pid}>
                  {playerDetails.item.description}
                  {/* <span className="brd-social-link-user">{item.link}</span> */}
                </div>
                <div className="ply-crd-det">
                    <div className="fb">
                        <Facebook /> <a href={playerDetails.item.fburl} target="blank" >{playerDetails.item.fburl}</a>
                        
                    </div>
                    <div className="insta">
                    <Instagram /><span>https://www.instagram.com</span>
                    </div>
                </div>
                <div className="ply-crd-detail">
                    <div className="ply-email">
                        {playerDetails.item.email}
                    </div>
                    <div className="ply-phone">
                        {playerDetails.item.phoneno}
                    </div>
                </div>
              </div>
              <div className="brd-images">
                <div className="brd-img-display">
                  <div className="brd-img-showcase">
                    <img src={playerDetails.item.pimg} alt="brd" />;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="userComments">
          <h2>Posts</h2>
        <UserComments playerId = {playerDetails} />
        </div>
{/* <div className="qrscan">
  <img src={ww} alt="erty" className="www" />
  <h4><u>Pike 10 Miles Rally Test 2 Tickets Information:</u></h4>
  <img className="iii" src={qr} alt="sd" />
  <p>Email: samarasan@meme-global.com</p>
  <p>Stand: OPENING TICKET</p>
  <p>Stand: OPENING TICKET</p>
  <p>Stand: OPENING TICKET</p>
  <p>Stand: OPENING TICKET</p>
</div> */}

        <Footer />
      </div>
    </>
  );
}
