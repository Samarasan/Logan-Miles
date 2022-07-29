import React from "react";
import { useHistory } from "react-router-dom";
import {
  validateEmailId,
  validatePassword,
} from "../components/UserAccount/Script";
import { ERROR404, ERROR500 } from "../constant/routes";
import { loginState, onChange, onClick } from "../constant/Types";
import { PlayerServices as PlayerAPI } from "../utils/API";

export const useLogin = () => {
  const loginInitialState: loginState = {
    username: "",
    password: "",
  };
const history = useHistory();
  const [loginCredentials, setLoginCredentials] =
    React.useState<loginState>(loginInitialState);

  const [loginErrors, setLoginErrors] = React.useState<string>("");

  const [successMsg, setSuccessMsg] = React.useState("");

  const handleLoginFormChange = (e: onChange) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const handleLoginValidation = () => {
    let fields = loginCredentials;
    let formIsValid = true;
    let errors = "";

    const isValidEmailId = validateEmailId(fields.username);
    const isValidPassword = validatePassword(fields.password);

    if (formIsValid && !isValidEmailId.formIsValid) {
      errors = isValidEmailId.error;
      formIsValid = false;
    } else if (formIsValid && !isValidPassword.formIsValid) {
      errors = isValidPassword.error;
      formIsValid = false;
    } else {
      errors = "";
      formIsValid = true;
    }

    setLoginErrors(errors);

    return formIsValid;
  };

  const onFocusEvent = () => {
    setLoginErrors("");
  };

  React.useEffect(() => {
    if (loginErrors === "") {
      return;
    }
    const timer = setTimeout(() => {
      setLoginErrors("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [loginErrors]);

  const handleLoginSubmit = (e: onClick) => {
    e.preventDefault();

    const user = {
      emailId: loginCredentials.username,
      password:  loginCredentials.password,
    };

    if (handleLoginValidation()) {        
      PlayerAPI.proflogin(user)
        .then((response: any) => {
          console.log(response.data,"ghjk");
          
          if (response.status === 200 ) {
            setSuccessMsg("Sucessfully logged in!");
            localStorage.setItem("player-login", user.emailId);
            localStorage.setItem("player-post",JSON.stringify(response.data))
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
          history.push('/')
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.status);
            switch (error.response.status) {
              case 401: {
                setLoginErrors("Incorrect Password");
                break;
              }
              case 500: {
                window.location.href = ERROR500;
                break;
              }
              case 404: {
                window.location.href = ERROR404;
                break;
              }
              default:
                window.location.href = ERROR500;
            }
          }
        });
    }
  };

  return {
    loginCredentials,
    loginErrors,
    handleLoginFormChange,
    handleLoginSubmit,
    successMsg,
    onFocusEvent,
  };
};
