import React, { createContext, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  validateEmailId,
  // validateMobileNumber,
  validateName,
} from "../../../UserAccount/Script";
import { IBooking } from "../../../stateContainers/Events/Service";
import {
  UpdateEvent,
} from "../../../stateContainers/Events/ThunkAction";
import { Countries } from "../../../common/json/Countries";
import { onChange } from "../../../../constant/Types";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import { IregBooking } from "../../../stateContainers/Events/Types";
import { useHistory } from "react-router-dom";

export const EventContext = createContext({});

export interface IEvents {
  name: string;
  email: string;
  uPhone: string;
  tnxid: any;
  address: string;
  video: File | undefined | string;
  img: File | undefined | string;
}

export type paymentType = string | null;

export const payment = ["Paypal", "Stripe"];

const IntialEventRegister: IEvents = {
  name: "",
  email: "",
  uPhone: "",
  tnxid: "",
  address: "",
  video: undefined,
  img: undefined,
};

export const EventContextProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const { eventData } = useSelector((state: IRootState) => state);
  const regPaymentDetails:IregBooking[] = eventData && eventData.userBookinginfo
    const [eventRegister, setEventRegister] =
    React.useState<IEvents>(IntialEventRegister);
    const history = useHistory()
  const [paymentMode, SetPaymentMode] = useState<paymentType>(null);
  const [userError, setUserError] = React.useState<string>("");
  const [amountError, setAmountError] = React.useState<string>("");
  // const [selectedCountry, setSelectedCountry] = React.useState("");
  // const [selectedRegion, setSelectedRegion] = React.useState<
  // string | undefined
  // >("");

  const [eventDetails, setEventDetails] = React.useState<any>(null);

  const onChangeValue = (event: onChange) => {
    const value = event.target.value;
    SetPaymentMode(value);
  };

  const onRegister = (e: any) => {
    const name = e.target.name;
    // const file = e.target.files?.[0];
    if (name === "video" || name === "img") {
      const value = e.target.files[0];
      setEventRegister({ ...eventRegister, [name]: value });
    } else {
      const value = e.target.value;
      setEventRegister({ ...eventRegister, [name]: value });
    }
  };

  const onRegisterFocusEvent = () => {
    setUserError("");
  };


  React.useEffect(() => {
    if (userError === "") {
      return;
    } else {
      const timer = setTimeout(() => {
        setUserError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userError]);

  const onAmountFocusEvent = () => {
    setAmountError("");
  };

  React.useEffect(() => {
    if (amountError === "") {
      return;
    } else {
      const timer = setTimeout(() => {
        setAmountError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [amountError]);

  // React.useEffect(() => {
  //   const regionList = Countries.find(
  //     (item: any, index) => item.name === selectedCountry
  //   );
  //   setSelectedRegion(regionList?.dialCode);
  // }, [selectedCountry]);

  const validateUser = () => {
    let fields = eventRegister;
    let errors = "";
    let formIsValid = true;
    const isValidName = validateName(fields.name, "name");
    const isValidEmailId = validateEmailId(fields.email);
    // const isValidMobileNumber = validateMobileNumber(fields.uPhone);
    // const isValidAddress = validateAddress(fields.address);

    if (formIsValid && !isValidName.formIsValid) {
      errors = isValidName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidEmailId.formIsValid) {
      errors = isValidEmailId.error;
      formIsValid = false;
    // } else if (formIsValid && !isValidMobileNumber.formIsValid) {
    //   errors = isValidMobileNumber.error;
    //   formIsValid = false;
    } else {
      errors = "";
      formIsValid = true;
    }
    setUserError(errors);
    return formIsValid;
  };

  const registrationDetails: IBooking = {
    name: eventRegister.name,
    mail: eventRegister.email,
    //mobile: eventRegister.uPhone,
    address: eventRegister.address,
    videourl: eventRegister.video,
    idurl: eventRegister.img,
     tnxid: eventRegister.tnxid,
  };

  const PaymentSuccess = (tid?: string ) => {
    if (tid) {
      // const status:string = "Paid";
      const id = regPaymentDetails[0]?.bid
      dispatch(UpdateEvent({ tid,id}));
      setTimeout(()=>{
        history.push('/paymentconfirm')
      },2000)
     
    }
  };

  const paymentProps = {
    name: regPaymentDetails[0]?.name,
    amount: +regPaymentDetails[0]?.entry as number,
    email: regPaymentDetails[0]?.mail,
    phoneNo: regPaymentDetails[0]?.mobile,
    onSuccess: PaymentSuccess,
  };

  const PaypalClick = (tid?: string) => {
    PaymentSuccess(tid);
  };

  return (
    <EventContext.Provider
      value={
        {
          paymentMode,
          onChangeValue,
          onRegister,
          eventRegister,
          onRegisterFocusEvent,
          userError,
          amountError,
          onAmountFocusEvent,
          // selectedCountry,
          Countries,
          // selectedRegion,
          PaypalClick,
          setEventDetails,
          eventDetails,
          paymentProps,
          validateUser,
          registrationDetails,
        } as any
      }
    >
      {children}
    </EventContext.Provider>
  );
};

export function useEventContext() {
  const {
    paymentMode,
    onChangeValue,
    onRegister,
    eventRegister,
    onRegisterFocusEvent,
    userError,
    RegisterNowClick,
    amountError,
    onAmountFocusEvent,
    selectedCountry,
    Countries,
    selectedRegion,
    PaypalClick,
    setEventDetails,
    eventDetails,
    paymentProps,
    validateUser,
    registrationDetails,
  } = useContext(EventContext) as any;
  return {
    paymentMode,
    onChangeValue,
    onRegister,
    eventRegister,
    onRegisterFocusEvent,
    userError,
    RegisterNowClick,
    amountError,
    onAmountFocusEvent,
    selectedCountry,
    Countries,
    selectedRegion,
    PaypalClick,
    setEventDetails,
    eventDetails,
    paymentProps,
    validateUser,
    registrationDetails,
  };
}
