import React from "react";
import { registerInput } from "../../../../../constant/Types";
import { DropDown } from "../../../../common/DropDown/DropDown";
import { useDonationContext } from "../DonationContext";
import "./UserInfo.scss";

export const UserInfo = () => {
  const {
    donor,
    onDonorChange,
    onDonarFocusEvent,
    userError,
    selectedCountry,
    countries,
    handleCountrySelect,
  } = useDonationContext();

  const inputs: registerInput[] = [
    {
      id: 1,
      name: "fname",
      type: "text",
      text: "First name",
      icon:"",
      value: donor.fname,
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      text: "Last name",
      icon:"",
      value: donor.lname,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      text: "Email",
      icon:"",
      value: donor.email,
    },
    {
      id: 4,
      name: "uPhone",
      type: "number",
      text: "Mobile number",
      icon:"",
      value: donor.uPhone,
    },
  ];

  const getInputText = () => {
    return inputs.map((item: registerInput) => {
      return (
        <React.Fragment key={item.id}>
          <div className="donation--form__item">
            <input
              type={item.type}
              id={item.name}
               name={item.name}
              aria-label={item.text}
              value={item.value}
              placeholder={item.text}
              className="donation--form__input u-h4"
              autoFocus={false}
              onChange={onDonorChange}
              onFocus={onDonarFocusEvent}
            />
            <label className="donation__floating--label u-h4">
              {item.text}
            </label>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <fieldset>
      <div className="df-form-head">
        <p>User Information</p>
      </div>
      {userError && (
        <div className=" form__alert alert alert--error u-h6">{userError}</div>
      )}
      <div className="df-form-body">
        {getInputText()}
        <div className="donation--form__item">
          <DropDown
            name="Countries"
            value={selectedCountry}
            onChange={handleCountrySelect}
            collections={countries}
          />
        </div>
      </div>
    </fieldset>
  );
};
