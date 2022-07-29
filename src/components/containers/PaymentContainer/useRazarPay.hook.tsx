import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../../assets/image/nav/b.svg";
import { addNotification } from "../../stateContainers/Toast/Slice";

function useRazarPay() {
  
  const history = useHistory();
  const dispatch = useDispatch();

  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const __DEV__ = document.domain === "localhost";

  interface IProps {
    name: string;
    amount: number;
    email: string;
    phoneNo: string;
    onSuccess: () => any;
  }

  const displayRazorpay = async (props: IProps) => {
    const { name, amount, email, phoneNo, onSuccess } = props;

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: __DEV__ ? "rzp_test_mDQKPFrOkDfJql" : "rzp_live_tvqz6w4jM4nLvb",
      currency: "INR",
      amount: amount * 100,
      name: "Nazca",
      description: "Thank you for your purchase",
      image: logo,
      handler: function (response: any) {
        dispatch(
          addNotification({ isOpen: true, text: "Ordered Successfully" })
        );
        setTimeout(() => {
          dispatch(addNotification({ isOpen: false, text: "" }));
        }, 2000);
        onSuccess();
        history.push("/orderconfirm");
      },
      prefill: {
        name: name,
        email: email,
        phone_number: phoneNo,
      },
      theme: {
        color: "#c70c0c",
      },
    };
    const _window = window as any;
    const paymentObject = new _window.Razorpay(options);
    paymentObject.open();
  };

  return {
    displayRazorpay,
  };
}

export default useRazarPay;
