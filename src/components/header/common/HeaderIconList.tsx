import { Link, useHistory } from "react-router-dom";
// import { useNavInfoContext } from "../../../react-context/NavContext";
import { LoggedInProf, LoggedInUser } from "../../common/Script";
import { useCart } from "../../containers/Cart/useCart.hook";
import { useWishList } from "../../containers/Home/WishList/useWishList.hook";
// import { useCart } from "../../containers/Cart/useCart.hook";
import {
  CartDesktop,
  CartMobile,
  ProfileIcon, WishListDesktop, WishListMobile,
  // SearchDeskptop,
  // SearchIconMobile,
  // WishListDesktop,
} from "./Icons";

function HeaderIconList() {
  const history = useHistory();
  const { viewCart } = useCart();
  const { favItems } = useWishList();

  const ProfileIconClick = () => {
    if (LoggedInUser !== null) {
      history.push("/myprofile");
    } else if (LoggedInProf !== null) {
      history.push("/playersprofile");
    } else {
      history.push("/logincard");
    }
  };
  // const { viewCart } = useCart();

  return (
    <div className="Header__FlexItem Header__FlexItem--fill iconss">
      <span
        className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone"
        onClick={ProfileIconClick}
      >
        {LoggedInUser == null && LoggedInProf == null? (
          <span className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone">
            Login
          </span>
        ) : (
          <ProfileIcon />
        )}
      </span>

      <Link
        to="/wishlist"
        className="swym-wishlist Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone"
      >
        <span className="hidden-tablet-and-up">
          <WishListMobile />
        </span>
        <span className="hidden-phone">
          <WishListDesktop />
        </span>
        {favItems.length > 0 && (
          <span className="Header__CartDot is-visible"></span>
        )}
      </Link>

      <a
        href="/cart"
        className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable "
        data-action="open-drawer"
        data-drawer-id="sidebar-cart"
        aria-expanded="false"
        aria-label="Open cart"
      >
        <span className="hidden-tablet-and-up">
          <CartMobile />
        </span>
        <span className="hidden-phone">
          <CartDesktop />
        </span>
        {viewCart.cartItem?.length > 0 && (
          <span className="Header__CartDot is-visible"></span>
        )}
      </a>
    </div>
  );
}

export default HeaderIconList;

// import { useRef } from "react";
// import { useHistory } from "react-router-dom";
// import { useNavInfoContext } from "../../../react-context/NavContext";
// import { LoggedInUser } from "../../common/Script";
// import { ProfileIcon } from "./Icons";

// // import { ProfileIcon, SearchDeskptop, SearchIconMobile } from "./Icons";

// function HeaderIconList() {
//   const {  useOutsideAlerter } = useNavInfoContext();

//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   const history = useHistory();

//   const ProfileIconClick = () => {
//     if (LoggedInUser !== null) {
//       history.push("/myprofile");
//     } else {
//       history.push("/login");
//     }
//   };

// return (
//   <div className="Header__FlexItem Header__FlexItem--fill">
//    <span
//       className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone"
//       onClick={ProfileIconClick}
//       ref={wrapperRef}
//     >
//      {LoggedInUser == null ? <span>Professional's Login</span> : <ProfileIcon /> }
//     </span>
/* <span
        className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable"
        data-action="toggle-search"
        aria-label="Search"
        onClick={searchToggleClick}
      >
        <span className="hidden-tablet-and-up">
          <SearchIconMobile />
        </span>

        <span className="hidden-phone">
          <SearchDeskptop />
        </span>
      </span> */
/* </div>
  );
} */

// export default HeaderIconList;
