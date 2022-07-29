import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoggedInUser } from "../../common/Script";
import { ISelectedAddress } from "../../stateContainers/Address/Types";
import { placeOrderAction } from "../../stateContainers/Order/ThunkAction";
import { IPlaceOrder } from "../../stateContainers/Order/Types";
import { useCart } from "../Cart/useCart.hook";
import { MiniCart } from "../MiniCart/MiniCart";
import { Stepper } from "../Stepper/Stepper";
import { PaypalButtons } from "./PayPalButtons";
import useRazarPay from "./useRazarPay.hook";
import Footer from "../../Footer/Footer";
import "./PaymentContainer.scss";
import TakeMoney from "./StripeButton";

export const PaymentContainer = () => {
  const { displayRazorpay } = useRazarPay();
  const history = useHistory();
  const dispatch = useDispatch();
  const { viewCart } = useCart();

  const [activeUPI, setActiveUPI] = useState(false);
  const [activateStripe, setActivateStripe] = useState(false);
  const [activeRazarPay, setActiveRazarPay] = useState(false);

  let selectedAddress = {} as ISelectedAddress;
  let cartItem = localStorage.getItem("selected-address");
  if (cartItem) selectedAddress = JSON.parse(cartItem as string);

  let addressId = localStorage.getItem("selected-address-id") as string;

  React.useEffect(() => {
    if (Object.keys(selectedAddress).length < 1) {
      history.push("/address");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAddress]);

  const handleRazarOnClick = (e: any) => {
    e.preventDefault();
    setActiveRazarPay(!activeRazarPay);
    setActiveUPI(false);
    setActivateStripe(false);
  };

  const handlePayPalOnClick = (e: any) => {
    e.preventDefault();
    setActiveUPI(!activeUPI);
    setActiveRazarPay(false);
    setActivateStripe(false);
  };

  const handleStripeOnClick = (e: any) => {
    e.preventDefault();
    setActiveUPI(false);
    setActiveRazarPay(false);
    setActivateStripe(!activateStripe);
  };

  const RazarPaySuccess = (id:any) => {
    const OrderItems: IPlaceOrder = {
      cusId: LoggedInUser as string,
      addId: parseInt(addressId),
      pstatus: "success",
      tnxid:id
    };
    dispatch(placeOrderAction(OrderItems));
  };

  const PaymentProps = {
    name: selectedAddress.address?.name,
    amount: viewCart.totalPrice as any,
    email: selectedAddress.address?.phone,
    phoneNo: selectedAddress?.address?.uPhone,
    onSuccess: RazarPaySuccess,
  };

  const AddressBar = () => {
    const history = useHistory();
    return (
      <div className="add_old_address mb-4 u-h5">
        <h3>{selectedAddress.address?.name}</h3>
        <div>
          <span
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <p>
              {selectedAddress.address?.flatNo},
              {selectedAddress.address?.street}
            </p>
            <p>{selectedAddress.address?.city}</p>
            <p>
              {selectedAddress.address?.state} - {selectedAddress.address?.pin}
            </p>
          </span>
        </div>
        <p>
          Mobile Number: &nbsp;
          <span
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            {selectedAddress?.address?.uPhone}
          </span>
        </p>
        <p
          style={{
            marginTop: "7px",
            color: " #c70c0c",
            fontWeight: 500,
          }}
        >
          Delivery in 3-12 Days.
        </p>
        <button
          className="edit-button u-h6"
          onClick={() => history.push("/Address")}
        >
          Edit
        </button>
      </div>
    );
  };

  // const RazarPay = () => {
  //   const isActiveRazarPay = activeRazarPay ? "active" : "";
  //   return (
  //     <div
  //       className={`payment-method ${isActiveRazarPay}`}
  //       onClick={handleRazarOnClick}
  //     >
  //       <div
  //         className="payment-method-title choice"
  //         style={{ position: "relative" }}
  //       >
  //         <input
  //           type="radio"
  //           name="payment[method]"
  //           className="radio paymentInput"
  //         />
  //         <label htmlFor="razorpay" className="payment-label u-h5">
  //           Pay Online With Razorpay
  //         </label>
  //       </div>
  //       {activeRazarPay && (
  //         <div className="payment-method-button">
  //           <button
  //             id="payu_button"
  //             type="button"
  //             className="checkout u-h6"
  //             onClick={() => displayRazorpay(PaymentProps)}
  //           >
  //             Continue Checkout
  //           </button>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  const PayPal = () => {
    const isActiveUPI = activeUPI ? "active" : "";
    return (
      <div
        className={`payment-method ${isActiveUPI}`}
        onClick={handlePayPalOnClick}
      >
        <div
          className="payment-method-title choice"
          style={{ position: "relative" }}
        >
          <input
            type="radio"
            name="payment[method]"
            className="radio paymentInput"
          />
          <label htmlFor="paypal" className="payment-label u-h5">
            <span>Paypal</span>
          </label>
        </div>
        {activeUPI && <PaypalButtons id={selectedAddress.address?.id} />}
      </div>
    );
  };

  const Stripe = () => {
    const isActiveUPI = activateStripe ? "active" : "";
    return (
      <div className={`payment-method ${isActiveUPI}`}>
        <div
          className="payment-method-title choice"
          style={{ position: "relative" }}
          onClick={handleStripeOnClick}
        >
          <input
            type="radio"
            name="payment[method]"
            className="radio paymentInput"
          />
          <label htmlFor="paypal" className="payment-label u-h5">
            <span>Stripe Payment</span>
          </label>
        </div>
        {activateStripe && <TakeMoney PaymentProps={PaymentProps} />}
      </div>
    );
  };

  return (
    <div>
      <Stepper activeIndex={2} />
      <div className="checkout-main">
        <div className="checkout-main-wrapper">
          <div className="col-md-8 col-sm-12 col-xs-12 checkout-section">
            <div className="payment-method-section omc-section">
              <AddressBar />
              <PayPal />
              <Stripe />
              {/* <RazarPay /> */}
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 omc-sidebar">
            {/* <MiniCart onClickContinue={() => displayRazorpay(PaymentProps)} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentContainer;
