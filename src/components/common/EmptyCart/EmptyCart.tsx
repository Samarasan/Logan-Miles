import React from "react";
import { useHistory } from "react-router-dom";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import { LoggedInProf, LoggedInUser } from "../Script";
import "./EmptyCart.scss";
import emptyCart from "../../../assets/image/emptyCart.png";

function EmptyCart() {
  const history = useHistory();

  const RegisterdView = () => {
    return (
      <>
        <img src={emptyCart} alt="Empty Cart" className="empty-cart-image" />
        <h2 className="empty-cart-head">Your shopping bag is empty!</h2>
        <p className="empty-cart-sub">
          Looks like you haven’t added anything to your bag. Let’s change that.
        </p>
        <TextButton
          items="Coming Soon"
          isprimary={true}
          className="empty-cart-button u-h2"
          onClick={() => {
            history.push("/");
          }}
        />
      </>
    );
  };

  const NonRegisteredView = () => {
    return (
      <>
        <p className="empty-cart-sub">Login To Get Your Bag !!!</p>
        <TextButton
          items="Login"
          isprimary={true}
          className="empty-cart-button u-h2"
          onClick={() => {
            history.push("/login");
          }}
        />
      </>
    );
  };

  return (
    <section className="empty-container">
      {LoggedInUser || LoggedInProf !== null ? <RegisterdView /> : <NonRegisteredView />}
    </section>
  );
}

export default EmptyCart;
