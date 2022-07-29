import React from "react";
import { Link } from "react-router-dom";
import { ProfessionalLoginValues } from "../../../constant/Variables";
import { useValidationInfoContext } from "../../../react-context/ProfessionalValidationContext";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import { getToast } from "../Script";
import "../ProfessionalAccount.scss";
import { useLogin } from "../../../hook/profLogin.hook";

export const ProfAccountLogin: React.FC = (): JSX.Element => {
  const {
    loginCredentials,
    loginErrors,
    successMsg,
    handleLoginSubmit,
    handleLoginFormChange,
    onFocusEvent,
  } = useLogin();

  const { handleForgotPasswordOnClick } = useValidationInfoContext();

  const toast = getToast(successMsg, loginErrors as string);

  const LoginHeader = () => {
    return (
      <header className="user--form__header">
        <h1 className="user--form__title u-h3"> {ProfessionalLoginValues.PROFESSIONAL_LOGIN} </h1>
        <p className="user--form__content u-h4">
          {ProfessionalLoginValues.LOGIN_DESCRIPTION}
        </p>
      </header>
    );
  };

  return (
    <section
      data-section-id="prof-account-login"
      data-section-type="prof-account-register"
    >
      <div className="user--form">
        <div className="user--form__container extra-narrow">
          <form
            id="login_customer"
            acceptCharset="UTF-8"
            name="login_customer"
            className="user--form__wrapper"
            autoComplete="off"
          >
            <LoginHeader />
            {toast.message && (
              <p className={`alert ${toast.classname} form__alert u-h6`}>
                {toast.message}
              </p>
            )}
            <div className="user--form__item">
              <input
                type="email"
                className="user--form__input u-h4"
                aria-label="Email"
                id="form-username"
                name="username"
                value={loginCredentials.username}
                placeholder="e-mail"
                onChange={handleLoginFormChange}
                onFocus={onFocusEvent}
              />
              <label className="form__floating--label  u-h4">Email</label>
            </div>

            <div className="user--form__item">
              <input
                className="user--form__input u-h4"
                aria-label="Password"
                id="form-password"
                type="password"
                name="password"
                value={loginCredentials.password}
                placeholder="Password"
                onChange={handleLoginFormChange as any}
                onFocus={onFocusEvent}
              />
              <label className="form__floating--label  u-h4">Password</label>
              <button
                type="button"
                className="user--form__input--text  u-h5"
                data-action="toggle-recover-form"
                onClick={handleForgotPasswordOnClick}
              >
                Forgot password?
              </button>
            </div>

            <TextButton
              type="submit"
              className="button--full"
              isprimary={true}
              items={ProfessionalLoginValues.LOGIN}
              onClick={handleLoginSubmit as any}
            />
            {/* <div className="user--form__footer u-h4s">
              <span>{ProfessionalLoginValues.NO_ACCOUNT} &nbsp;</span>
              <Link to="/profregister" className="form--underline">
                {ProfessionalLoginValues.CREATE_ACCOUNT}
              </Link>
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
};
