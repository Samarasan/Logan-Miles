import React from "react";
import { ProfRegisterView } from "./Register.view";
import RegisterOTP from "./RegisterOTP";
import Wrapper from "../Wrapper/Wrapper.logic";
import { useRegister } from "../../../hook/profRegister.hook";
import "../ProfessionalAccount.scss";

export const ProfRegister: React.FC = () => {
  const {
    registerCredentials,
    errors,
    handleOnChange,
    onFocusEvent,
    registerOnSubmit,
    successMsg,
    //  handleCountrySelect,
    // countries,
    //  selectedCountry,
    isregistered,
  } = useRegister();

  const regComponent = isregistered ? (
    <RegisterOTP />
  ) : (
    <ProfRegisterView
      onChangeEvent={handleOnChange}
      registerOnSubmit={registerOnSubmit}
      credentials={registerCredentials}
      errors={errors}
      onFocusEvent={onFocusEvent}
      successMsg={successMsg}
      //  selectedCountry={selectedCountry}
      //  handleCountrySelect={handleCountrySelect}
      // countries={countries}
    />
  );

  return <Wrapper childComp={regComponent} name="reg" />;
};
