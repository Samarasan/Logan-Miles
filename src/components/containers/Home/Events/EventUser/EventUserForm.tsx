import React, { useEffect } from "react";
import { registerInput } from "../../../../../constant/Types";
import { useEventContext } from "../EventContext";
import "../../DonationForm/DonationForm.scss"
import "../../DonationForm/UserInfo/UserInfo.scss"

export const EventUserForm = (props: any) => {
  const { details } = props;

  const {
    eventRegister,
    onRegister,
    onRegisterFocusEvent,
    userError,
    setEventDetails,
  } = useEventContext();

  useEffect(() => {
    setEventDetails(details);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details]);

  const inputs: registerInput[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      text: "Name",
      icon: "",
      value: eventRegister.name,
    },
    {
      id: 2,

      name: "email",
      type: "email",
      text: "Email",
      icon: "",
      value: eventRegister.email,
    },
    // {
    //   id: 3,
    //   name: "uPhone",
    //   type: "number",
    //   text: "Mobile number",
    //   icon: "",
    //   value: eventRegister.uPhone,
    // },
    {
      id: 3,
      name: "address",
      type: "text",
      text: "Address",
      icon: "",
      value: eventRegister.address,
    },
    {
      id: 4,
      name: "video",
      type: "file",
      text: "Video Proof",
      icon: "",
      value: eventRegister.video,
    },
    {
      id: 5,
      name: "img",
      type: "file",
      text: "Img Proof",
      icon: "",
      value: eventRegister.img,
    },
  ];

  const getInputText = () => {
    return inputs.map((item: registerInput) => {
      return (
        <React.Fragment key={item.id}>
          <div className="donation--form__item">
            {item.type === "file" ? (
              <input
                type={item.type}
                id={item.name}
                name={item.name}
                accept=".jpg,.png,video/mp4,video/x-m4v,video/"
                placeholder={item.text}
                className="donation--form__input u-h4"
                autoFocus={false}
                onChange={onRegister}
                onFocus={onRegisterFocusEvent}
              />
            ) : (
              <input
                type={item.type}
                id={item.name}
                name={item.name}
                aria-label={item.text}
                value={item.value}
                placeholder={item.text}
                className="donation--form__input u-h4"
                autoFocus={false}
                onChange={onRegister}
                onFocus={onRegisterFocusEvent}
              />
            )}
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
        <p>Player Registration</p>
      </div>
      {userError && (
        <div className=" form__alert alert alert--error u-h6">{userError}</div>
      )}
      <div className="df-form-body">{getInputText()}</div>
    </fieldset>
  );
};
