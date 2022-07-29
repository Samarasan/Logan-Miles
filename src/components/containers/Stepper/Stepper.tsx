import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../assets/image/nav/b.svg";
import "./Stepper.scss";

interface IProps {
  activeIndex: number;
}

export const Stepper: React.FC<IProps> = (props: IProps) => {
  const list = ["My Cart", " My Address", "Payment"];

  const { activeIndex } = props;

  const history = useHistory();

  return (
    <header className="page-header">
      <ul className="checkout-tab">
        <li
          className="checkout-logo"
          onClick={() => {
            history.push("/");
          }}
        >
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </li>
        {list.map((name: string, index) => {
          let clsname =
            activeIndex === index ? "checkout_active" : "checkout_inactive";
          return (
            <li className={`checkout-menu ${clsname} u-h5`} key={name}>
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Stepper;
