import React from "react";
import Header from "../header/Header.logic";
import member from "../../assets/image/LOGAN/Player/member.svg";
import prof from "../../assets/image/LOGAN/Player/prof.svg";
import "./UserAccount.scss";
import { LoginValues, ProfessionalLoginValues } from "../../constant/Variables";
import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <React.Fragment>
      <Header />
      <div className="loginCardContainer">
        <div className="usercontainer">
          <div className="card">
            {/* <div className="imgBx">
              <img src={member} alt="login card"/>
            </div> */}
            <div className="contentBx">
              <h2>Member Login</h2>
              <a className="log" href="/login">Login</a>
              <div className="registerAcc">
              <span>{LoginValues.NO_ACCOUNT} &nbsp;</span>
              <Link to="/register" className="createNew">
                {LoginValues.CREATE_ACCOUNT}
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="usercontainer">
          <div className="card prof">
            {/* <div className="imgBx">
            <img src={prof} alt="login card" />
            </div> */}
            <div className="contentBx">
              <h2>Player Login</h2>
              <a className="log" href="/professionallogin">Login</a>
              <div className="registerAcc">
              <span>{ProfessionalLoginValues.NO_ACCOUNT} &nbsp;</span>
              <Link to="/profregister" className="createNew">
                {ProfessionalLoginValues.CREATE_ACCOUNT}
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
