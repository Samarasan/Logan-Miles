import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { productType, useNav } from "../useNav.hook";

interface IProps {
  productList: productType[];
  //  productList: any;
}

export const HeaderNavList: React.FC<IProps> = (props: IProps) => {
  const { productList } = props;
  const { MenuItemHandleClick } = useNav();


  return (
    <nav
      className="Header__MainNav hidden-pocket hidden-lap"
      aria-label="Main navigation"
    >
      <ul className="HorizontalList HorizontalList--spacingExtraLoose">
        <li className="HorizontalList__Item">
          <span className="Nav__header u-h6">
            <a href="/"> HOME </a>
          </span>
        </li>
        <Link to="/eventreg">
          {" "}
          <li className="HorizontalList__Item">
            <span className="Nav__header u-h6">Events</span>
          </li>{" "}
        </Link>
        <Link to="/players">
          {" "}
          <li className="HorizontalList__Item">
            <span className="Nav__header u-h6">Players</span>
          </li>{" "}
        </Link>
        <Link to="/ourevent">
          {" "}
          <li className="HorizontalList__Item">
            <span className="Nav__header u-h6">Tickets</span>
          </li>{" "}
        </Link>
        <Link to="/gallery">
          {" "}
          <li className="HorizontalList__Item">
            <span className="Nav__header u-h6">Gallery</span>
          </li>{" "}
        </Link>
        <Link to="/membership">
          {" "}
          <li className="HorizontalList__Item">
            <span className="Nav__header u-h6">Membership</span>
          </li>{" "}
        </Link>
        {productList.map((item: productType, index: number) => {

          return (
            <li
              key={index}
              className="HorizontalList__Item"
            >
              <span
                className="Nav__header u-h6"
                onClick={() => {
                  MenuItemHandleClick(item.mCategory);
                }}
              >
                {item.mCategory}
              </span>
            </li>
          );
        })}
        <li className="HorizontalList__Item">
          {/* <LinkScroll
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          > */}
          <a href="/#contact">
            {" "}
            <span className="Nav__header u-h6">Contact</span></a>
          {/* </LinkScroll> */}
        </li>
      </ul>
    </nav>
  );
};
