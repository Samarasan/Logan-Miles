import React from "react";
import myloganlogo from "../../../assets/image/nav/b.svg";

function HeaderLogo() {
  return (
    <div className="Header__FlexItem Header__FlexItem--logo">
      <div className="Header__Logo">
        <a href="/" className="Header__LogoLink">
          <img
            className="Header__LogoImage Header__LogoImage--primary hidden-phone"
            src={myloganlogo}
            width="100"
            alt="opheliamoon"
          />  
          <img
            className="Header__LogoImage Header__LogoImage--primary hidden-tablet-and-up"
            src={myloganlogo}
            width="60"
            alt="opheliamoon"
          />
        </a>
      </div>
    </div>
  );
}

export default HeaderLogo;
