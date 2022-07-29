import { PaypalButtons } from "../../../../common/PaypalButton/PayPalButton";
import { payment, useDonationContext } from "../DonationContext";
import "./DonateNowButton.scss";

export const DonateNowButton = () => {
  const { DonateNowClick, donationData, PaypalClick } = useDonationContext();

  const amount =
    donationData.donatedAmount > 0 && `$${donationData.donatedAmount}`;

  return (
    <div className="donate-button">
      {donationData.paymentMode === payment[0] ? (
        <button onClick={DonateNowClick}>Donate Now &nbsp;{amount} </button>
      ) : (
        <PaypalButtons
          amount={donationData.donatedAmount}
          PaymentSuccess={PaypalClick}
        />
      )}
    </div>
  );
};

export default DonateNowButton;
