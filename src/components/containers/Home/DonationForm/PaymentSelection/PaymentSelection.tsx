import React from "react";
import { payment, useDonationContext } from "../DonationContext";
import "./PaymentSelection.scss";

export const PaymentSelection = () => {
  const { donationData, onChangeValue } = useDonationContext();
  return (<>
      <div className="df-form-head">
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
                  checked={item === donationData.paymentMode}
                  readOnly
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
