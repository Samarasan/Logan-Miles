import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
  PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { useDispatch } from "react-redux";
import { placeOrderAction } from "../../stateContainers/Order/ThunkAction";
import { IPlaceOrder } from "../../stateContainers/Order/Types";
import { LoggedInUser } from "../../common/Script";
import { useCart } from "../Cart/useCart.hook";
import React from "react";
import { useHistory } from "react-router-dom";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":
    "AWY-y26BC3PrzVlVLXYMLpDEfldLx7BURWov6D3nYa3OLZUhPMyjTOcZUKYmhoPIZfNwoLW8c6tzGpgG",
  currency: "INR",
};

interface IProps {
  id: number;
}

export const PaypalButtons: React.FC<IProps> = (props: IProps) => {
  const { id } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const { viewCart } = useCart();

  const [msg, setMsg] = React.useState<null | string>(null);

  const OrderItems: IPlaceOrder = {
    cusId: LoggedInUser as string,
    addId: id,
    pstatus: "success",
    tnxid:""
  };

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
                value: viewCart.totalPrice && viewCart?.totalPrice.toFixed(),
                currency_code: "INR",
              },
            },
          ],
        });
      },
      onApprove(data: any, actions: any) {
        return actions.order.capture({}).then((details: any) => {
          dispatch(placeOrderAction(OrderItems));
          setMsg("Order Placed");
          history.push("/orderconfirm");
        });
      },
      onError(err: any) {
        console.log("err", err);
        setMsg("Order Failed");
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
