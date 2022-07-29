import React from "react";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { AddressInput } from "../../helpers/AddressInput";
import { CheckBox } from "./CheckBox/CheckBox";
import "./AddressForm.scss";
import { useAddress } from "../useAddress.hook";
import { DropDown } from "../../../common/DropDown/DropDown";

interface IProps {
  toggleUpdateView: () => void;
}

export const AddressForm: React.FC<IProps> = (props: IProps) => {
  const {
    state,
    error,
    visible,
    handleOnChange,
    handleOnSubmit,
    onClickCancel,
    handleCountrySelect,
    countries,
    selectedCountry,
  } = useAddress();

  const { toggleUpdateView } = props;

  return (
    <React.Fragment>
      <div className="AddressForm__container">
        <div className="AddressForm__Form ">
          <header className="AddressForm__header">
            <h3 className="SectionHeader__Heading u-h3">
              Add Your New Address
            </h3>
          </header>
          {visible && (
            <div className="Form__Item alert alert--error">{error}</div>
          )}
          <div className="fields--2">
            <AddressInput
              type="text"
              name="name"
              text="User Name"
              value={state.name}
              onChange={handleOnChange}
            />
            <AddressInput
              type="email"
              text="Email"
              name="phone"
              onChange={handleOnChange}
              value={state.phone}
            />
          </div>

          <div className="fields--2">
            <AddressInput
              type="text"
              name="flatNo"
              text="Flat No"
              onChange={handleOnChange}
              value={state.flatNo}
            />
            <AddressInput
              type="text"
              text="Street"
              name="street"
              onChange={handleOnChange}
              value={state.street}
            />
          </div>

          <div className="fields--2">
            <AddressInput
              type="text"
              text="City"
              name="city"
              onChange={handleOnChange}
              value={state.city}
            />
            <AddressInput
              type="text"
              text="State"
              name="state"
              onChange={handleOnChange}
              value={state.state}
            />
          </div>

          <div className="fields--2">
            <DropDown
              name="Countries"
              value={selectedCountry}
              onChange={handleCountrySelect}
              collections={countries}
            />
            <AddressInput
              type="number"
              text="Phone Number"
              name="uPhone"
              onChange={handleOnChange}
              value={state.uPhone}
            />
          </div>

          <div className="fields--2">
            <AddressInput
              type="number"
              name="pin"
              text="Pin Code"
              onChange={handleOnChange}
              value={state.pin}
            />
            <AddressInput
              type="text"
              text="Land Mark"
              name="landMark"
              onChange={handleOnChange}
              value={state.landMark}
            />
          </div>
        </div>
        <footer className="AddressForm__footer u-h4">
          <CheckBox label="Make this address default" />
          <div>
            <TextButton
              items="Save"
              className="add-button-full"
              isprimary={true}
              onClick={(e: any) => handleOnSubmit(e, toggleUpdateView) as any}
            />
            <TextButton
              items="Cancel"
              className="add-button-full"
              isprimary={true}
              onClick={() => {
                onClickCancel(toggleUpdateView);
              }}
            />
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};
