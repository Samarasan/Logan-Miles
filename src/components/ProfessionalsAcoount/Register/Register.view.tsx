import React from "react";
import {
  onChange,
  onClick,
  registerInput,
  profregisterUser,
} from "../../../constant/Types";
import { REGISTER } from "../../../constant/Variables";
import {FiMail} from "react-icons/fi"
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import "../ProfessionalAccount.scss";

interface IProps {
  onChangeEvent: (e: onChange) => void;
  registerOnSubmit: (e: onClick) => void;
  credentials: profregisterUser;
  errors: string;
  onFocusEvent: () => void;
  successMsg: string;
  //  selectedCountry: string;
  //  handleCountrySelect: (e: any) => void;
  // countries: any;
}

export const ProfRegisterView: React.FC<IProps> = (props: IProps): JSX.Element => {
  const {
    onChangeEvent,
    registerOnSubmit,
    credentials,
    errors,
    onFocusEvent,
    successMsg,
    //  selectedCountry,
    //  handleCountrySelect,
    // countries,
  } = props;

  const inputs: registerInput[] = [
    {
      id: 1,
      name: "fname",
      type: "text",
      text: "First name",
      icon:"",
      value: credentials.fname,
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      text: "Last name",
      icon:"",
      value: credentials.lname,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      text: "Email",
      icon:<FiMail />,
      value: credentials.email,
    },
    {
      id: 4,
      name: "phoneno",
      type: "number",
      text: "Mobile number",
      icon:"",
      value: credentials.phoneno,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      text: "Password",
      icon:"",
      value: credentials.password,
    },
    {
      id: 6,
      name: "userReferral",
      type: "text",
      text: "Referral Code",
      icon:"",
      value: credentials.userReferral,
    },
    {
      id: 7,
      name: "imgproof",
      type: "file",
      text: "Image Proof",
      icon:"",
      value: credentials.imgproof,
    },
    {
      id: 8,
      name: "videoproof",
      type: "file",
      text: "Video Proof",
      icon:"",
      value: credentials.videoproof,
    },
    {
      id: 9,
      name: "state",
      type: "text",
      text: "State",
      icon:"",
      value: credentials.state,
    },
    {
      id: 10,
      name: "country",
      type: "text",
      text: "Country",
      icon:"",
      value: credentials.country,
    },
  ];

  const getToast = () => {
    let classname;
    let message;
    if (successMsg) {
      classname = "alert--success";
      message = successMsg;
    }
    if (errors) {
      classname = "alert--error";
      message = errors;
    }
    return { classname, message };
  };

  const getInputText = () => {
    return inputs.map((item: registerInput) => {
      
      return (
        <React.Fragment key={item.id}>
          <div className="prof--form__item">
          {item.type === "file" ? (<input
                type={item.type}
                id={item.name}
                name={item.name}
                aria-label={item.text}
                accept=".jpg,.png,video/mp4,video/x-m4v,video/mkv"
                placeholder={item.text}
                className="prof--form__input u-h4"
                autoFocus={false}
                onChange={onChangeEvent}
                onFocus={onFocusEvent}
              />):(
            <input
              type={item.type}
              id={item.name}
              className="prof--form__input u-h4"
              name={item.name}
              aria-label={item.text}
              src={item.icon}
              placeholder={item.text}
              autoFocus={false}
              onChange={onChangeEvent}
              onFocus={onFocusEvent}
            />)}
            <label className="prof-form__floating--label u-h4">{item.text}</label>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <section data-section-id="register" data-section-type="register">
      <div className="user--form">
        <div className="user_bg">
        <div className="user--form__container reg__container extra-narrow">
          <form
            id="create_customer"
            acceptCharset="UTF-8"
            name="create_customer"
            className="user--form__wrapper"
            autoComplete="off"
          >
            <header className="user--form__header">
              <h1 className="user--form__title u-h3">{REGISTER.REGISTER}</h1>
              <p className="user--form__content u-h4">
                Please fill in the information below:
              </p>
            </header>
            {getToast().message && (
              <p className={`alert ${getToast().classname} form__alert u-h6`}>
                {getToast().message}
              </p>
            )}

            <div className="input-grp">{getInputText()}</div>
            {/* <div className="dropdown-grp" >
              <DropDown
                name="Countries"
                value={selectedCountry}
                onChange={handleCountrySelect}
                collections={countries}
              />
            </div> */}
            <TextButton
              type="submit"
              className="button--full"
              isprimary={true}
              items={REGISTER.CREATEACCOUNT}
              onClick={registerOnSubmit as any}
            />
          </form>
        </div>
        </div>
      </div>
    </section>
  );
};
