import React from "react";
import { useNavInfoContext } from "../../../react-context/NavContext";
import { MenuDesktop, MenuMobile } from "./Icons";

function HeaderMenu() {
  const { MenuIconClick } = useNavInfoContext();

  return (
    <button
      className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk"
      onClick={MenuIconClick}
    >
      <span className="hidden-tablet-and-up">
        <MenuMobile />
      </span>
      <span className="hidden-phone">
        <MenuDesktop />
      </span>
    </button>
  );
}

export default HeaderMenu;
