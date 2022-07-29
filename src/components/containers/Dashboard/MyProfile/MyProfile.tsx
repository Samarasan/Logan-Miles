import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfile } from "./UpdateProfile/UpdateProfile"
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { SideMenu } from "../Layout/SideMenu/SideMenu";
import {getSubscriptionAction} from "../../../stateContainers/Profile/ThunkAction";
import { LoggedInUser } from "../../../common/Script";
import "./MyProfile.scss";
import axios from "axios";
import { getUserProfile } from "../../../stateContainers/Events/Slice";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import Loader from "../../../common/loader/loader";

export default function MyProfile() {
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;

  const dispatch = useDispatch();
  // User
  const [profileInfo, setProfileInfo] = React.useState<any>();
  console.log(profileInfo,"profileInfo");
  
  // const { profileInfo, PlansInfo } = useProfile();

  useEffect(() => {
    const userProfile = async () => {
      await axios
        .get("https://api.mememove.com:8443/Logan50miles/user/get/user/byEmail?", {
          params: {
            email: LoggedInUser,
          },
        })
        .then((res: any) => {
              setProfileInfo(res.data);
              dispatch(getUserProfile(res.data));
        })
        .catch((error: any) => {
          console.log(error);
        });
     
    };

    userProfile();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    dispatch(getSubscriptionAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [openUpdateView, setOpenUpdateView] = React.useState(false);

  const toggleUpdateView = () => {
    setOpenUpdateView(!openUpdateView);
  };

  const ProfileInfoWrapper = () => {
    return (
      <React.Fragment>
        {isLoading ? (<Loader />):(
        <div className="block">
          <div className="block-title u-h3">Account Information</div>
          <div className="profile-content">
            <div className="profile-avatar">
              <img
                src="https://cdn.yellowmessenger.com/ut2G9Z9WbkRW1604914013763.jpg"
                alt="user"
              />
            </div>

            <div className="profile-text u-h4">
              {profileInfo?.fname} &nbsp; {profileInfo?.lname}
              <br /> {profileInfo?.email}
              <br />
              {profileInfo?.uPhone}
            </div>

            <TextButton
              items="Edit Profile"
              className="edit-profile"
              isprimary={true}
              onClick={toggleUpdateView}
            />
          </div>
        </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="column main">
        {openUpdateView ? (
          <UpdateProfile toggleUpdateView={toggleUpdateView} />
        ) : (
          <ProfileInfoWrapper />
        )}
      </div>
      <SideMenu />
    </>
  );
}
