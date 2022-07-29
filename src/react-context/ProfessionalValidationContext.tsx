import React, { useContext } from "react";
import { createContext } from "react";
import { ProfAccountLogin } from "../components/ProfessionalsAcoount/Login/ProfAccountLogin";
import { AccountReset } from "../components/ProfessionalsAcoount/Login/AccountReset";
import { OTPVerfication } from "../components/ProfessionalsAcoount/Login/OTPVerfication";
import { PasswordReset } from "../components/ProfessionalsAcoount/Login/PasswordReset";

export const professionalValidationContext = createContext({});

enum Page {
  LOGIN,
  EMAIL,
  OTP,
  PASSWORD,
}

export const ProfValidationContextProvider = function ({ children }: any) {
  const [activePage, setActivePage] = React.useState(Page.LOGIN);

  const handleForgotPasswordOnClick = () => {
    setActivePage(Page.EMAIL);
  };

  const handleBackToLogin = () => {
    setActivePage(Page.LOGIN);
  };

  const handleForgotPasswordOnSubmit = () => {
    setActivePage(Page.OTP);
  };

  const handleOTPSubmit = () => {
    setActivePage(Page.PASSWORD);
  };

  const getErrorText = (key: string) => {};

  const getLoginComponent = () => {
    let component;
    switch (activePage) {
      case Page.LOGIN: {
        component = <ProfAccountLogin/>;
        break;
      }
      case Page.EMAIL: {
        component =  <AccountReset />;
        break;
      }
      case Page.OTP: {
        component = <OTPVerfication />;
        break;
      }
      case Page.PASSWORD: {
        component = <PasswordReset />;
        break;
      }
      default:
        // component =
        break;
    }
    return component;
  };
  const name = activePage === Page.OTP ? "OTP" : "log";
  const loginComponent = getLoginComponent();

  return (
    <professionalValidationContext.Provider
      value={
        {
          loginComponent,
          name,
          handleForgotPasswordOnClick,
          handleForgotPasswordOnSubmit,
          handleOTPSubmit,
          getErrorText,
          handleBackToLogin,
        } as any
      }
    >
      {children}
    </professionalValidationContext.Provider>
  );
};

export function useValidationInfoContext() {
  const {
    handleForgotPasswordOnClick,
    handleForgotPasswordOnSubmit,
    handleOTPSubmit,
    getErrorText,
    handleBackToLogin,
    // addNotification,
  } = useContext(professionalValidationContext) as any;
  return {
    handleForgotPasswordOnClick,
    handleForgotPasswordOnSubmit,
    handleOTPSubmit,
    getErrorText,
    handleBackToLogin,
    // addNotification,
  };
}
