/* eslint-disable react/jsx-no-undef */
import React from "react";
import { onClick } from "../../../../../constant/Types";
import { Facebook, Twitter } from "../../../../Footer/FooterIcons";
import {
  IAmbGallery,
  ISocialMedia,
} from "../../../../stateContainers/BrandUsers/Types";
import { useAmbassador } from "../../useAmbassador.hook";

export const UserCard = () => {
  const { selectedUser } = useAmbassador();

  const initialState = selectedUser?.ambassadorGallery?.length
    ? selectedUser?.ambassadorGallery[0].imageurl
    : "";

  const [activeImage, setActiveImage] = React.useState(initialState);

  const handleThumbClick = (e: onClick, url: string) => {
    e.preventDefault();
    setActiveImage(url);
  };

  return (
    <div className="brd-card-wrapper">
      <div className="brd-card">
        <div className="brd-card-content">
          <h2 className="brd-card-title">{selectedUser?.ambassadorName}</h2>

          {selectedUser?.socialMedia.map((item: ISocialMedia) => {
            return (
              <div className="brd-social-link" key={item.id}>
                {item.socialId === 206 ? <Facebook /> : <Twitter />}
                <span className="brd-social-link-user">{item.link}</span>
              </div>
            );
          })}
        </div>
        <div className="brd-images">
          <div className="brd-img-display">
            <div className="brd-img-showcase">
              <img src={activeImage} alt="brd" />;
            </div>
          </div>
          <div className="brd-img-select">
            {selectedUser?.ambassadorGallery.map((item: IAmbGallery) => {
              return (
                <div
                  className="brd-img-item"
                  key={item.id}
                  onClick={(e: onClick) => {
                    handleThumbClick(e, item.imageurl);
                  }}
                >
                  <a href="/#" data-id="1">
                    <img
                      src={item.imageurl}
                      alt="profile"
                      className="brd-img-thumb"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
