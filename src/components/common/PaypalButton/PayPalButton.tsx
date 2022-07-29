import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
  PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":
    "Ab7o46ECiTmaI86WxovLThOHhk5ynWacpgrRRwvLXGgGW47d1S522dv9-Cd6QjmyH6C5wo4bd-dnuX_T",
  currency: "USD",
};

interface IProps {
  amount: number;
  PaymentSuccess: (id?:string) => void;
}

export const PaypalButtons: React.FC<IProps> = (props: IProps) => {
  const { amount, PaymentSuccess } = props;

  const [msg, setMsg] = React.useState<null | string>(null);

  React.useEffect(() => {
    if (msg === null) {
      return;
    }
    const timer = setTimeout(() => {
      setMsg(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [msg]);

  function Button() {
    const [{ isPending }] = usePayPalScriptReducer();

    const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
      style: { layout: "vertical" },
      createOrder(data: any, actions: any) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
                currency_code: "USD",
              },
            },
          ],
        });
      },
      onApprove(data: any, actions: any) {
        
        return actions.order.capture({}).then((details: any) => {
          console.log(details,"det");
          
          setMsg("Payment Sucessful");
          PaymentSuccess(details.id);
        });
      },
      onError(err: any) {
        console.log("err", err);
        setMsg("Payment Failed");
      },
    };
    return (
      <>
        {isPending ? <h3>Load Smart Payment Button...</h3> : null}
        <PayPalButtons {...paypalbuttonTransactionProps} />
      </>
    );
  }
  return (
    <div className="paypal-buttons">
      <span className="status-text u-h4">{msg && msg}</span>
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Button />
      </PayPalScriptProvider>
    </div>
  );
};
