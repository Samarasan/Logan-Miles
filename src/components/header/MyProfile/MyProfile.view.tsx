import React from "react";
import { LoggedInUser } from "../../common/Script";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import { ThumbProfileImageWrapper } from "./ThumbImage";
import "./MyProfile.scss";
import { Link, useHistory } from "react-router-dom";
import { ProfileLinks } from "../../../constant/Variables";
import { useDispatch, useSelector } from "react-redux";
import { NavSLice } from "../../stateContainers/NavState/Slice";
import { IRootState } from "../../../redux/reducer/CombineReducer";

function MyProfileView() {
  enum PageView {
    RegisteredUser,
    NonRegisteredUser,
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const { profileData } = useSelector((state: IRootState) => state);

  const profile = profileData && profileData.profileDetails.Profile;

  const [user] = React.useState(
    LoggedInUser !== "" ? PageView.RegisteredUser : PageView.NonRegisteredUser
  );

  const handleSelectedLink = (name: string) => {
    dispatch(NavSLice.actions.setselectedAccountView(name));
  };

  const getLinks = () => {
    return ProfileLinks.map((item: any, index: number) => (
      <li key={item.id} onClick={() => handleSelectedLink(item.name)}>
        <Link
          to="/myprofile"
          key={item.id}
          className="u-h3"
          onClick={() => handleSelectedLink(item.name)}
        >
          {item.name}
        </Link>
      </li>
    ));
  };

  const RegisteredUserView = () => {
    return (
      <div className="profile-modal">
        <ThumbProfileImageWrapper
          name={profile.fname}
          phone={profile.fname}
          url={profile.iUmg}
        />
        <ul className="List__modal " id="menu">
          {getLinks()}
        </ul>
      </div>
    );
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  const NonRegisteredUserView = () => {
    return (
      <div className="profile-modal">
        <div className="Profile__header">
          <h1 className="Profile__header--text">Welcome</h1>
          <p className="Profile__header--desc u-h2">To manage your account</p>
          <TextButton
            items="Login/Signup"
            isprimary={true}
            className="Profile__button"
            onClick={handleLoginClick}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {user === PageView.RegisteredUser ? (
        <RegisteredUserView />
      ) : (
        <NonRegisteredUserView />
      )}
    </div>
  );
}

export default MyProfileView;
