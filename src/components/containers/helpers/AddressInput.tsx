import React from "react";
import { onChange } from "../../../constant/Types";
import "./AddressInput.scss";

interface IProps {
  name: string;
  type: string;
  text: string;
  value: string;
  onChange: (e: onChange) => void;
}

export const AddressInput: React.FC<IProps> = (props: IProps) => {
  const { text, type, name, onChange, value } = props;

  return (
    <div className="Form__Item">
      <input
        type={type}
        className="Form__Input u-h5"
        id={name}
        name={name}
        placeholder={text}
        onChange={onChange}
        value={value}
      />
      <label className="Form__FloatingLabel  u-h5" htmlFor={name}>
        {text}
      </label>
    </div>
  );
};
