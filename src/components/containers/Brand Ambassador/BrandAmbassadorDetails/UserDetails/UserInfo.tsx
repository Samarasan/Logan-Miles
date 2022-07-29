import React from "react";
import { useAmbassador } from "../../useAmbassador.hook";

export const UserInfo = () => {
  const { selectedUser } = useAmbassador();
  return (
    <div className="brd-element">
      <div className="brd-element-inner">
        <div className="brd-inner-content">
          <div className="brd-element brd-element-column brd-col-md-25">
            <div className="brd-element-inner brd-img-container">
              <div className="brd-image-wrapper">
                <img
                  src={selectedUser?.dp}
                  alt="img"
                  className="brd-img-main lazy"
                />
              </div>
            </div>
          </div>
          <div className="brd-element brd-element-column brd-col-md-7">
            <div className="brd-element-inner u-h4">
              <h2 className="brd-element-heading-text u-h1">Background:</h2>
              <p>
                <span>{selectedUser?.background}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
