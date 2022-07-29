import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../../assets/image/nav/mylogantownlogo.png";

export default function StripeButton(props: any) {
  const { email, amount, onSuccess } = props.PaymentProps;
console.log(props.PaymentProps,"props.PaymentProps");

  const history = useHistory();
  const stripeAmount = amount * 100;

  const onToken = (token: any) => {
    console.log(token,"toke");
    console.log(stripeAmount,"amt");

    axios
      .post("https://api.homecraft.tv:8443/nazca/ophelia/payment/stripe", {
        amount: stripeAmount,
        token,
      })
      .then((response) => {
        console.log(response,"res");
        onSuccess(token.id);
        history.push("/paymentconfirm");
      })
      .catch((error) => {
        alert("Something Went Wrong");
        console.log("error", error);
      });
  };

  return (
    <div className="stripe-buttons" >
      <StripeCheckout
        name="50 Miles"
        image={logo}
        ComponentClass="div"
        panelLabel="Pay"
        amount={stripeAmount}
        description={`Your total is $ ${amount}`}
        currency="usd"
        email={email}
        token={onToken}
        stripeKey="pk_test_51K3Cn9SJJLXo9ricH5EX5ImknK3ujoHyhNBK9ppNLlARPo0Iq1AHWk0WCD7QDM0rtfl1htMxmZusvrWWo6ZBsaU400lO4zwPis"
      />
    </div>
  );
}
