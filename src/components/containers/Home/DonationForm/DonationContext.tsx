import React, { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { onChange, onClick } from "../../../../constant/Types";
import { Countries } from "../../../common/json/Countries";
import { IFund } from "../../../stateContainers/BrandUsers/Service";
import { AddFund } from "../../../stateContainers/BrandUsers/ThunkAction";
import {
  validateEmailId,
  validateMobileNumber,
  validateName,
} from "../../../UserAccount/Script";

export const DonationContext = createContext({});

export interface IDonor {
  fname: string;
  lname: string;
  email: string;
  uPhone: string;
}

export interface IDonationData {
  donatedAmount: number;
  paymentMode: string;
}

export const amounts = [500, 250, 100, 50];
export const payment = ["RazarPay", "Paypal"];

const initialState = {
  donatedAmount: 0,
  paymentMode: payment[0],
};

const initialDonarCredentials: IDonor = {
  fname: "",
  lname: "",
  email: "",
  uPhone: "",
};

export const DonateContextProvider = ({ children }: any) => {
  const dispatch = useDispatch();
  const [donationData, setDonationData] = useState<IDonationData>(initialState);
  const [donor, setDonor] = React.useState<IDonor>(initialDonarCredentials);
  const [userError, setUserError] = React.useState<string>("");
  const [amountError, setAmountError] = React.useState<string>("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedRegion, setSelectedRegion] = React.useState<
    string | undefined
  >("");

  const onChangeValue = (event: onChange) => {
    const value = event.target.value;
    const name = event.target.name;
    setDonationData({ ...donationData, [name]: value } as IDonationData);
  };

  const onDonorChange = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setDonor({ ...donor, [name]: value });
  };

  const onDonarFocusEvent = () => {
    setUserError("");
  };

  const countries = Countries.map((item: any) => {
    return item.name;
  });

  const handleCountrySelect = (e: any) => {
    e.preventDefault();
    setSelectedCountry(e.target.value);
  };

  React.useEffect(() => {
    const regionList = Countries.find(
      (item: any, index) => item.name === selectedCountry
    );
    setSelectedRegion(regionList?.dialCode);
  }, [selectedCountry]);

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

  const validateUser = () => {
    let fields = donor;
    let errors = "";
    let formIsValid = true;

    const isValidFirstName = validateName(fields.fname, "fname");
    const isValidLastName = validateName(fields.lname, "lname");
    const isValidEmailId = validateEmailId(fields.email);
    const isValidMobileNumber = validateMobileNumber(fields.uPhone);

    if (formIsValid && !isValidFirstName.formIsValid) {
      errors = isValidFirstName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidLastName.formIsValid) {
      errors = isValidLastName.error;
      formIsValid = false;
    } else if (formIsValid && !isValidEmailId.formIsValid) {
      errors = isValidEmailId.error;
      formIsValid = false;
    } else if (formIsValid && !isValidMobileNumber.formIsValid) {
      errors = isValidMobileNumber.error;
      formIsValid = false;
    } else if (formIsValid && selectedRegion === undefined) {
      formIsValid = false;
      errors = "Please select your country";
    } else {
      errors = "";
      formIsValid = true;
    }
    setUserError(errors);
    return formIsValid;
  };

  const validateAmount = () => {
    let errors = "";
    let formIsValid = true;

    if (donationData.donatedAmount < 1) {
      errors = "Please enter an valid amout";
      formIsValid = false;
    } else {
      errors = "";
      formIsValid = true;
    }
    setAmountError(errors);
    return formIsValid;
  };

  const fundDetails: IFund = {
    name: donor.fname + donor.lname,
    mailId: donor.email,
    amount: donationData.donatedAmount.toString(),
  };

  const PaymentSuccess = () => {
    dispatch(AddFund(fundDetails));
  };

  // const RazProps = {
  //   name: donor.fname + donor.lname,
  //   amount: donationData.donatedAmount as number,
  //   email: donor.email,
  //   phoneNo: selectedRegion + donor.uPhone,
  //   onSuccess: PaymentSuccess,
  // };

  const DonateNowClick = (e: onClick) => {
    e.preventDefault();
    if (validateAmount() && validateUser()) {
      // displayRazorpay(RazProps);
    }
  };

  const PaypalClick = (e: onClick) => {
    e.preventDefault();
    if (validateAmount() && validateUser()) {
      PaymentSuccess();
    }
  };

  return (
    <DonationContext.Provider
      value={
        {
          donationData,
          onChangeValue,
          onDonorChange,
          donor,
          onDonarFocusEvent,
          userError,
          DonateNowClick,
          amountError,
          onAmountFocusEvent,
          selectedCountry,
          countries,
          selectedRegion,
          handleCountrySelect,
          PaypalClick,
        } as any
      }
    >
      {children}
    </DonationContext.Provider>
  );
};

export function useDonationContext() {
  const {
    donationData,
    onChangeValue,
    onDonorChange,
    donor,
    onDonarFocusEvent,
    userError,
    DonateNowClick,
    onAmountFocusEvent,
    amountError,
    selectedCountry,
    countries,
    selectedRegion,
    handleCountrySelect,
    PaypalClick,
  } = useContext(DonationContext) as any;
  return {
    donationData,
    onChangeValue,
    onDonorChange,
    donor,
    onDonarFocusEvent,
    userError,
    DonateNowClick,
    onAmountFocusEvent,
    amountError,
    selectedCountry,
    countries,
    selectedRegion,
    handleCountrySelect,
    PaypalClick,
  };
}
