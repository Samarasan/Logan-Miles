import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./OrderItem/OrderItem.scss";
import { SideMenu } from "../Layout/SideMenu/SideMenu";
import EmptyOrders from "../../../common/EmptyOrders/EmptyOrders";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { PaymentSelection } from "../../Home/Events/PayNowButton/paymentSelect";
// import PayNowButton from "../../Home/Events/PayNowButton/PaynowButton";
import axios from "axios";
import { getUserBookingInfo } from "../../../stateContainers/Events/Slice";
import StripeBtn from "./StripeButton";
import { UpdateEvent } from "../../../stateContainers/Events/ThunkAction";
import { useHistory } from "react-router-dom";
import { onClick } from "../../../../constant/Types";
import { PaypalButtons } from "./OrderItem/PayPal";

export default function MyOrders() {
  const [registerData, setRegisterData] = React.useState<any>();
 
  
  const [isselect, setIsSelect] = React.useState(false);
  const [entry, setMoney] = React.useState<any>(null);
  const [name, setName] = React.useState<string>("");
  const [mobile, setMobile] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [bid, setBid] = React.useState<any>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = (
    e: onClick,
    bookingid: any,
    username: string,
    money: number,
    mail: string,
    phone: any
  ) => {
    e.preventDefault();
    setMoney(money);
    setName(username);
    setMobile(phone);
    setEmail(mail);
    setBid(bookingid);
    setIsSelect(true);
  };

  const PaymentSuccess = (tid?: string) => {
    if (tid) {
      // const status:string = "Paid";
      const id = bid;
      dispatch(UpdateEvent({ tid, id }));
      setTimeout(() => {
        history.push("/paymentconfirm");
      }, 2000);
    }
  };
  const paymentProps = {
    name: name,
    amount: +entry as number,
    email: email,
    phoneNo: mobile,
    onSuccess: PaymentSuccess,
  };

  useEffect(() => {
    const BookingProfile = async () => {
      let locData :any= localStorage.getItem("phone-details")
      const phoneNo :any =JSON.parse(locData)
      
      await axios
        .get(
          "https://api.mememove.com:8443/Logan50miles/events/get/bookingevents/phone?",
          {
            params: {
              phone: phoneNo.phoneno,
            },
          }
        )
        .then((res: any) => {
          setRegisterData(res.data);
          dispatch(getUserBookingInfo(res.data));
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    BookingProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="column main">
        <div className="block">
          <div className="block-title u-h3">My Bookings</div>
          {registerData?.length === 0 ? (
            <>
              <EmptyOrders />
            </>
          ) : (
            registerData?.map((item: any, index: any) => {
              return (
                <Card
                  sx={{
                    display: "flex",
                    borderRadius: "15px",
                    border: "1px solid",
                    marginTop: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "30%", height: "212px", objectFit: "cover" }}
                    image={item.url}
                    alt="Live from space album cover"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "36%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {item?.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {item.details}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                  <Box>
                    {item.status === "APPROVED" ? (
                      <>   
                        <button
                          className="bookingButton"
                          key={item.bid}
                          onClick={(e) => {
                            handleOnClick(
                              e,
                              item.bid,
                              item.name,
                              item.entry,
                              item.mail,
                              item.mobile
                            );
                          }}
                        >
                          {" "}
                          <span className="paySelect">Select and Pay</span>
                        </button>
                      </>
                    ) : item.status === "Paid" ? (
                      <>
                        <div className="pending">Paid</div>
                      </>
                    ) : (
                      <div className="pending">Approval Pending</div>
                    )}
                  </Box>
                </Card>
              );
            })
          )}
        </div>
        {isselect === true ? (
          <div className="paymentgateway">
            <p>
              Stripe :{" "}
              <span>
                <StripeBtn PaymetProps={paymentProps} />
              </span>{" "}
              </p>
            <p className="paypalbook">  Paypal : <span className="paypalbtn"><PaypalButtons amount={entry as number}
              PaymentSuccess={PaymentSuccess}/></span></p>
            
            {/* <PaymentSelection />
                      <PayNowButton /> */}
          </div>
        ) : (
          <div style={{ display: "none" }}>
            <p>
              PAYMENT :{" "}
              <span>
                <StripeBtn PaymetProps={paymentProps} />
              </span>{" "}
            </p>
          </div>
        )}
      </div>
      <SideMenu />
    </>
  );
}
