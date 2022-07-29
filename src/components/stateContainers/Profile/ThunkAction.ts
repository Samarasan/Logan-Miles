import { IProfile } from "../../../model/IProductType";
import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import { addNotification } from "../Toast/Slice";
import {
  getProfileService,
  IgetProfile,
  setPlanService,
  subscriptionService,
  updatePlayerService,
  updateProfileService,
  updateSubscriptionService,
} from "./Services";
import {
  setPlan,
  setProfileDetails,
  setReferral,
  setUpdateSubscription,
} from "./Slice";

export const getProfileDetails = (item: IgetProfile) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: IProfile = await getProfileService(item);
      dispatch(setProfileDetails(response));
    } catch (error) {
      console.log(error);
      handleErrorResponse(error);
    }
  };
};

export const updateUserProfile = (item: any) => {
  return async (dispatch: any, getState: any) => {
    const response: any = await updateProfileService(item);
    if (response === 200) {
      dispatch(addNotification({ isOpen: true, text: "Successfully updated" }));
      window.location.reload();
    } else {
      dispatch(addNotification({ isOpen: true, text: "Something Went Wrong" }));
    }
  };
};
export const updatePlayerProfile = (item: any) => {
  return async (dispatch: any, getState: any) => {
    const response: any = await updatePlayerService(item);
    if (response === 200) {
      dispatch(addNotification({ isOpen: true, text: "Successfully updated" }));
      window.location.reload();
    } else {
      dispatch(addNotification({ isOpen: true, text: "Something Went Wrong" }));
    }
  };
};

export const getSubscriptionAction = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response: any = await subscriptionService();
      dispatch(setReferral(response));
      setTimeout(() => {
        dispatch(setSpinnerLoad(false));
      }, 500);
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
};

export const getPlanAction = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response: any = await setPlanService();
      dispatch(setPlan(response));
      setTimeout(() => {
        dispatch(setSpinnerLoad(false));
      }, 500);
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
};

export const updateSubscription = (item: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response: any = await updateSubscriptionService(item);

      if (response.status === 200) {
        dispatch(setUpdateSubscription(true));
      }

      setTimeout(() => {
        dispatch(setSpinnerLoad(false));
      }, 500);

      setTimeout(() => {
        dispatch(setUpdateSubscription(false));
      }, 1000);
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
};
