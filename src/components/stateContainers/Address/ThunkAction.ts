import { handleErrorResponse, LoggedInUser } from "../../common/Script";
import { addNotification } from "../Toast/Slice";
import {
  addNewAdrdressService,
  deleteAddressService,
  getAddressListService,
  IAddAddress,
  IDeleteAddress,
  IGetAddress,
  updateNewAddressService,
} from "./Service";
import { deleteAddress, getAddressList } from "./Slice";

export const getUserAddressList = (item: IGetAddress) => {
  return async (dispatch: any, getState: any) => {
    getAddressListService(item)
      .then((res) => {
        dispatch(getAddressList(res));
      })
      .catch((error) => {
        console.log("Error", error);
        handleErrorResponse(error);
      });
  };
};

export const addUserAddress = (item: IAddAddress) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: any = await addNewAdrdressService(item);
      if (response === 200) {
        dispatch(addNotification({ isOpen: true, text: "Successfully Added" }));
        setTimeout(() => {
          dispatch(addNotification({ isOpen: false, text: "" }));
        }, 500);
        window.location.reload();
      }
    } catch (error) {
      console.log("Error", error);
      dispatch(addNotification({ isOpen: true, text: "Something Went Wrong" }));
    }
  };
};

export const updateUserAddress = (item: IAddAddress) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: any = await updateNewAddressService(item);
      if (response === 200) {
        dispatch(
          addNotification({ isOpen: true, text: "Successfully Updated" })
        );
        setTimeout(() => {
          dispatch(addNotification({ isOpen: false, text: "" }));
        }, 500);
        window.location.reload();
      }
    } catch (error) {
      console.log("Error", error);
      dispatch(addNotification({ isOpen: true, text: "Something Went Wrong" }));
    }
  };
};

export const deleteUserAddress = (item: IDeleteAddress) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: any = await deleteAddressService(item);
      if (response === 200) {
        dispatch(getUserAddressList({ email: LoggedInUser as string }));
        dispatch(
          addNotification({ isOpen: true, text: "Successfully Deleted" })
        );
        setTimeout(() => {
          dispatch(addNotification({ isOpen: false, text: "" }));
        }, 500);
      }
    } catch (error) {
      dispatch(deleteAddress(false));
      dispatch(addNotification({ isOpen: true, text: "Something Went Wrong" }));
    }
  };
};
