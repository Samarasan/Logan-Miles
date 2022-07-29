import React, { useContext } from "react";
import { professionalValidationContext } from "../../../react-context/ProfessionalValidationContext";
import Wrapper from "../Wrapper/Wrapper.logic";

const ProfessionalLogin = () => {
  const { loginComponent, name } = useContext(professionalValidationContext) as any;
  return (
    <>
      <Wrapper childComp={loginComponent} name={name} />
    </>
  );
};

export default ProfessionalLogin;
