import { TextareaAutosize } from "@mui/material";
import React from "react";
import { CloseIcon } from "../../../../common/Icons";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";
import { usePost } from "./usePost.hook";
import "./Addpost.scss"
export default function Addpost(props: any) {
  const { addPost } = props;

  const {
    state,
    isSelected,
    handleOnChange,
    handleFocus,
    displayFile,
    registerOnSubmit,
  } = usePost();

  const inputs = [
    {
      id: 1,
      name: "feedurl",
      type: "file",
      text: "Upload File",
      value: state.feedurl,
    },
  ];
  const getFormInputs = () => {
    return inputs.map((item) => {
      return (
        <React.Fragment>
          <div className="Form__Item u-h5" key={item.id}>
            {item.type === "file" ? (
              <input
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
              />
            ) : (
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
        onClick={addPost}
      >
        <CloseIcon classname="Icon Icon--close" />
      </button>
      <header className="Modal__Header">
        <h3 className="Modal__Title u-h3">Add Posts</h3>
      </header>
      <div className="form-box">
        {getFormInputs()}
        {isSelected ? (<>
          <div className="preImg">
          <img
            className="images"
            src={URL.createObjectURL(displayFile)}
            alt=" images"
          />
           </div>
          </>
        ) : (
          <>
            <div className="previewImg">
              +
            </div>
          </>
        )}
        <TextareaAutosize
          aria-label="minimum height"
          minRows={4}
          name="description"
          placeholder="Add a description"
          onChange={handleOnChange}
          onFocus={handleFocus}
          style={{
            width: 439,
            height: 120,
            border: "1px solid #707070",
            borderRadius: "22px",
            color: "black",
            paddingTop: "14px",
            paddingLeft: "11px",
            marginBottom: 10,
          }}
        />
      </div>
      <TextButton
        items="Save Changes"
        className="profile-button"
        isprimary={true}
        onClick={registerOnSubmit as any}
      />
    </div>
  );
}
