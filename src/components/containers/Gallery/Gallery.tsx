import React from "react";
import Footer from "../../Footer/Footer";
import xlog from "../../../assets/image/LOGAN/IMAGES/ex.svg";
import second from "../.././../assets/image/LOGAN/Gallery/2.jpg";
import third from "../.././../assets/image/LOGAN/Gallery/3.jpg";
import four from "../.././../assets/image/LOGAN/Gallery/4.jpg";
import five from "../.././../assets/image/LOGAN/Gallery/5.jpg";
import six from "../.././../assets/image/LOGAN/Gallery/6.jpg";
import Header from "../../header/Header.logic";
import "./Gallery.scss";

export default function Gallery() {
  const galleryImages = [
    { img: second, desc: "chilling" },
    { img: third, desc: "Skater" },
    { img: four, desc: "chilling" },
    { img: five, desc: "chilling" },
    { img: six, desc: "chilling" },
  ];
  return (
    <>
      <Header />
      <div className="gallerySec">
        <img className="galex" src={xlog} alt="xlogo" />
        <h3>Gallery</h3>
        <div className="pageCtr">
          {/* <div className="galleryGrid">
            <div className="fullwr">
              <img src={fst} alt="test" />
              <div className="full">Skate Park</div>
            </div>
            <div className="fullwraper2">
              <img src={four} alt="test" />
              <div className="fullca">Skate Park</div>
            </div>
          </div> */}

          {galleryImages.map((items) => {
            return (
              <>
                <div className="fullwrap">
                  <img src={items.img} alt="test" />
                  <div className="fullcap">{items.desc}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
