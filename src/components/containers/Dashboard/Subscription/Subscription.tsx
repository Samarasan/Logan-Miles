import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { onClick } from "../../../../constant/Types";
import { LoggedInUser } from "../../../common/Script";
import Footer from "../../../Footer/Footer";
import Header from "../../../header/Header.logic";
import { updateSubscription } from "../../../stateContainers/Profile/ThunkAction";
import { IPlans } from "../../../stateContainers/Profile/Types";
import { PaypalButtons } from "./PayPal";
import StripeButton from "./StripeButton";
import "./Subscription.scss";

export const Subscription = () => {
  const [plansInfo, setPlansInfo] = React.useState<any>();
  const [scrolling, setScrolling] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition === 0) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  const scrollName = scrolling ? "homeview-inverted" : "homeview";

  React.useEffect(() => {
    const userPlans = async () => {
      await axios
        .get(
          "https://api.mememove.com:8443/Logan50miles/referral/get/referralplan"
        )
        .then((res: any) => {
          setPlansInfo(res.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    userPlans();
  }, []);

  // const { eventData } = useSelector((state: IRootState) => state);
  // const ProfileInfo: any = eventData && eventData.userProfile;
  const [money, setMoney] = React.useState<any>(null);
  const [plan, setPlan] = React.useState<string>("");

  const handleOnClick = (e: onClick, money: number, name: string) => {

    e.preventDefault();
    setMoney(money);
    setPlan(name);
  };

  const dispatch = useDispatch();

  const PaymentSuccess = () => {
    const paymentOptions = {
      plan: plan,
      cusId: LoggedInUser as string,
      pstatus: "success",
    };
    dispatch(updateSubscription(paymentOptions));
  };
  const paymentProps = {
    amount: +money as number,
    email: LoggedInUser as string,
    onSuccess: PaymentSuccess,
  };

  return (
    <>
    <div className={scrollName}>
      <Header />
      <div className="column-main">
      <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            // objectFit: "cover",
            // height: containerHeight,
          }}
          className="slideimg"
        >
          <source
            src="https://video.wixstatic.com/video/5e82fd_a44ee5a5b1eb4df085e2ab85debdc483/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="SubsContainer">
          <div className="pagectr">
          <div className="headerCard">
            <div className="sub-title u-h3">
              CHOOSE YOUR
            PRICING PLAN
            </div>
            {/* <div className="sub-subhead u-h4">
              Logged in with {ProfileInfo?.uPhone}
            </div>
            <div className="sub-subhead u-h4">
              <a href="/login">Use Another Account</a>
            </div> */}
          </div>

            <div className="btn-group">
              {plansInfo &&
                plansInfo?.map((item: IPlans) => {
                  const activePlan = plan === item.planName ? "btn-active" : "";
                  return (
                    <div
                      key={item.planID}
                      className={`btn-wrapper ${activePlan}`}
                    >
                      <button
                        className="btn-element"
                        key={item.planID}
                        onClick={(e) => {
                          handleOnClick(e, item.planAmount, item.planName);
                        }}
                      >
                        <span
                          style={{ color: "white" }}
                          className="u-h5 btn-text"
                        >
                          {item.planName}
                        </span>
                        <span className="u-h4 btn-text">
                          $ {item.planAmount}
                        </span>
                        <span className="dis">{item.discounts}</span>
                        <div className="num">
                          {item.validty === 0 ? (
                            <p className="free">Free Plan</p>
                          ) : (
                            <p className="valid">
                              Valid for {item.validty} Year
                            </p>
                          )}
                        </div>
                        <div></div>
                        <div className="select">Select</div>
                      </button>
                    </div>
                  );
                })}
            </div>
          <div className="Payment-container" style={{position:"relative"}}>
            {/* <PaypalButtons
              amount={money as number}
              PaymentSuccess={PaymentSuccess}
            /> */}
            <div className="Stripe_Pay">
              <p>
                Stripe :{" "}
                <span>
                <StripeButton PaymentProps={paymentProps} />
                </span>{" "}
              </p>
            </div>
            <div className="paypalPay">
            <p>
                Paypal :{" "}
                <span>
                <PaypalButtons
            amount={money as number}
            PaymentSuccess={PaymentSuccess}
          /> 
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscription;
