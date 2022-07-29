import { TextareaAutosize } from "@mui/material";
import React from "react";
import { CloseIcon } from "../../../../common/Icons";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";
import { useProfile } from "../useProfile.hook";
import ProfilePic from "./ProfilePic";
import "./UpdateProfile.scss";

interface IProps {
  toggleUpdateView: () => void;
}

export const UpdateProfile: React.FC<IProps> = (props: IProps) => {
  const { toggleUpdateView } = props;

  const {
    state,
    error,
    visible,
    Validation,
    handleOnChange,
    handleFocus,
  } = useProfile();

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      text: "First name",
      value: state.fname,
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      text: "Last name",
      value: state.lname,
    },

    {
      id: 3,
      name: "uPhone",
      type: "number",
      text: "Mobile number",
      value: state.phoneno,
    },
    {
      id: 4,
      name: "pimg",
      type: "file",
      text: "Profile Pic",
      value: state.pimg,
    },
    {
      id: 5,
      name: "fburl",
      type: "text",
      text: "Facebook Link",
      value: state.fburl,
    },
    {
      id: 6,
      name: "instaurl",
      type: "text",
      text: "Instagram Link",
      value: state.instaurl,
    },
  ];

  const getFormInputs = () => {
    return inputs.map((item) => {
      
      return (
        <React.Fragment>
        <div className="Form__Item u-h5" key={item.id}>
        {item.type === 'file' ? ( <input
            className="Form__Input"
            type={item.type}
                id={item.name}
                name={item.name}
            placeholder={item.text}
            accept=".jpg,.png,.svg,video/mp4,video/x-m4v,video/"
            required
            autoFocus={false}
            onChange={handleOnChange}
            onFocus={handleFocus}
          />):(
          <input
          type={item.type}
          id={item.name}
          name={item.name}
            className="Form__Input"
            placeholder={item.text}
            required
            autoFocus={false}
            value={item.value}
            onChange={handleOnChange}
            onFocus={handleFocus}
          />
          )}
          <label className="Form__FloatingLabel u-h6">{item.text}</label>
        </div>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="Modal__Content">
      <button
        className="Modal__Close Modal__Close--outside"
        data-action="close-modal"
        onClick={toggleUpdateView}
      >
        <CloseIcon classname="Icon Icon--close" />
      </button>

      <header className="Modal__Header">
        <h3 className="Modal__Title u-h3">Update Profile</h3>
      </header>
      {/* <form
        method="post"
        id="address_form_new"error
        className="Form Form--spacingTight"
      > */}
        <div className="Form__Item">
          <ProfilePic />
        </div>
        {visible && (
          <div className="Form__Item alert alert--error u-h6">{error}</div>
        )}

        {getFormInputs()}
        <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            name="Message"
            placeholder="Add a description"
            onChange={handleOnChange}
             onFocus={handleFocus}
            style={{
              width: 439,
              height: 100,
              border: "1px solid #707070",
              borderRadius: "22px",
              color: "black",
              paddingTop: "14px",
              paddingLeft: "11px",
              marginBottom:10
            }} />
        <TextButton
          items="Save Changes"
          className="profile-button"
          isprimary={true}
          onClick={Validation}
        />
      {/* </form> */}
    </div>
  );
};
