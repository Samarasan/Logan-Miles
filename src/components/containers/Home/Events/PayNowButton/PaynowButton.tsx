import { PaypalButtons } from "../../../../common/PaypalButton/PayPalButton";
import { payment, useEventContext } from "../EventContext";
import "../../DonationForm/DonateNowButton/DonateNowButton.scss";
import StripeButton from "../../../../common/StripeButton/StripeButton";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../../redux/reducer/CombineReducer";

export const PayNowButton = () => {
  
  const { paymentMode, PaypalClick, paymentProps } =
    useEventContext();
    const { eventData } = useSelector((state: IRootState) => state);
    const regBooking = eventData && eventData.userBookinginfo;
    
  const getPaymentButton = (paymentType: string) =>
    ({
      [payment[0]]: (
        <PaypalButtons
          amount={regBooking[0]?.entry as unknown  as number}
          PaymentSuccess={PaypalClick}
        />
      ),
      [payment[1]]: <StripeButton PaymentProps={paymentProps} />,
    }[paymentType]);

  if (!paymentMode) return <></>;

  const CustomButton = paymentMode && getPaymentButton(paymentMode);

  return <div className="donate-button">{CustomButton}</div>;
};

export default PayNowButton;
