import React from "react";
import { useHistory } from "react-router";
import { onClick } from "../../../../../constant/Types";
import Header from "../../../../header/Header.logic";
import "../../../RegistrationSuccess/OrderConfirmation.scss";

function RegisterConfirmation() {
  const history = useHistory();

  const continueOnclick = (e: onClick) => {
    e.preventDefault();
    history.push("/");
  };


  return (
    <div>
      <Header />
      <div className="desktop-base-container">
        <div className="desktop-base-cardLayout">
          <div className="desktop-base-cardContainer">
            <div className="desktop-base-confirmationCardContainer">
              <div className="cardComponents-base-statusCardContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="cardComponents-base-confirmTick"
                >
                  <path
                    fillRule="nonzero"
                    d="M7.59 0l1.195 1.72 1.72-1.104.465 2.06 2.005-.34-.325 2.103 1.964.488-1.053 1.805L15.2 7.985l-1.64 1.253 1.053 1.806-1.964.488.325 2.102-2.005-.34-.465 2.06-1.72-1.104-1.194 1.7-1.194-1.72-1.721 1.103-.466-2.038-2.003.34.323-2.103-1.963-.488 1.052-1.806L0 7.985l1.64-1.253L.566 4.927 2.53 4.44l-.323-2.102 2.003.339.466-2.06 1.72 1.104L7.591 0zm1.768 6.12L6.687 9.007a.045.045 0 0 1-.067 0L5.64 7.955a.358.358 0 0 0-.53 0 .417.417 0 0 0 0 .564l1.283 1.37c.07.075.165.112.265.112h.002c.1 0 .195-.039.265-.115l2.97-3.208a.417.417 0 0 0-.007-.563.358.358 0 0 0-.529.006z"
                  ></path>
                </svg>
                <div className="cardComponents-base-statusCardHeading u-h2">
                  Registration Succesfull
                </div>
                <div className="cardComponents-base-statusCardDesc u-h5">
                  Your Event registration is confirmed. You will receive an 
                  confirmation email/SMS shortly. 
                </div>
              </div>
              <div className="inlineButtonV3-base-container u-h6">
                <button
                  className="button-base-button cardComponents-base-primaryCTAButton"
                  onClick={continueOnclick}
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterConfirmation;

