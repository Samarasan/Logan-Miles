import React from "react";
import { useHistory } from "react-router-dom";
import EmtyWishList from "../../../../../assets/image/EmtyWishList.png";
import { LoggedInProf, LoggedInUser } from "../../../../common/Script";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";
import "./EmptyWishList.scss";

function EmptyWishList() {
  const history = useHistory();

  const RegisteredUserView = () => {
    return (
      <div className="modal-empty-wishlist">
        <img
          src={EmtyWishList}
          alt="No-Wishlist"
          className="productsNotFoundCard-image"
        />
        <div className="empty-text u-h4">YOUR WISHLIST IS EMPTY</div>
        <div className="second-text u-h4">(but it doesn’t have to be)</div>
        <TextButton
          items=" CONTINUE SHOPPING"
          isprimary={true}
          className="shop-emt-btn"
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
    );
  };

  const NonRegisteredUserView = () => {
    return (
      <div className="modal-empty-wishlist">
        <div className="empty-text u-h4">
          Please login to get your wishlist!
        </div>
        <TextButton
          items="Login"
          isprimary={true}
          className="shop-emt-btn"
          onClick={() => {
            history.push("/login");
          }}
        />
      </div>
    );
  };

  return (
    <div className="wishlist-wrapper">
      {LoggedInUser|| LoggedInProf !== null ? (
        <RegisteredUserView />
      ) : (
        <NonRegisteredUserView />
      )}
    </div>
  );
}

export default EmptyWishList;
