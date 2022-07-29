import React from "react";
import { useHistory } from "react-router-dom";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import reg from "../../../assets/image/mybook.png";
import "./EmptyOrders.scss";

function EmptyOrders() {
  const history = useHistory();
  return (
    <div className="ordersNotFoundCard-wrapper">
      <img
        src={reg}
        alt="orders-not-found"
        className="ordersNotFoundCard-image"
      />
      <div className="ordersNotFoundCard-header u-h3">
        You haven't booked any Event's yet!
      </div>
      {/* <div className="ordersNotFoundCard-text">
        Booking section is empty. After placing order, You can track them from
        here!
      </div> */}
      <TextButton
        items="Back To Home"
        isprimary={true}
        className="ordersNotFoundCard-button"
        onClick={() => {
          history.push("/");
        }}
      />
    </div>
  );
}

export default EmptyOrders;
