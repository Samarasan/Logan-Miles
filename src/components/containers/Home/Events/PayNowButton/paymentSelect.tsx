import React from "react";
import { payment, useEventContext } from "../EventContext";
import "../../DonationForm/PaymentSelection/PaymentSelection.scss";

export const PaymentSelection = () => {
  const { paymentMode, onChangeValue } = useEventContext();


  return (
    <>
      <div className="df-form">
        <p>Payment Method</p>
      </div>
      <ul className="pay-inputs-list" onChange={onChangeValue as any}>
        {payment.map((item: string) => {

          return (
            <li className="pay-form-radio" key={item}>
              <label className="pay-form-radio-display">
                <input
                  type="radio"
                  className="df-payment-input"
                  value={item}
                  name={`paymentMode`}
                  checked={item === paymentMode}
                />
                <span className="df-payment-span">{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
      </>
  );
};
