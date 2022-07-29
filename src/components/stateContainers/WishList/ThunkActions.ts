import { handleErrorResponse, LoggedInUser } from "../../common/Script";
import { addNotification } from "../Toast/Slice";
import {
  getFavService,
  addFavService,
  deleteFavService,
  IADDFAV,
  IGETFAV,
  IDELFAV,
} from "./Service";
import { getFavItem, removeFavItem, addFavItem } from "./Slice";

export const GetFavItem = (UserId: IGETFAV) => {
  return async (dispatch: any, getState: any) => {
    getFavService(UserId)
      .then((res) => {
        dispatch(getFavItem(res));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

export const AddFavItem = (item: IADDFAV) => {
  return async (dispatch: any, getState: any) => {
    const response: any = await addFavService(item);
    if (response === 200) {
      dispatch(addNotification({ isOpen: true, text: "Added To WishList" }));
      dispatch(GetFavItem({ phone: LoggedInUser as string }));
      setTimeout(() => {
        dispatch(addNotification({ isOpen: false, text: "" }));
      }, 500);
      // window.location.reload();
    } else {
      dispatch(addFavItem(false));
    }
  };
};

export const DeleteFavItem = (id: IDELFAV) => {
  return async (dispatch: any, getState: any) => {
    deleteFavService(id)
      .then((res) => {
        dispatch(removeFavItem(true));
        dispatch(GetFavItem({ phone: LoggedInUser as string }));
        dispatch(
          addNotification({ isOpen: true, text: "Removed From WishList" })
        );
        setTimeout(() => {
          dispatch(addNotification({ isOpen: false, text: "" }));
        }, 500);
        // window.location.reload();
      })
      .catch((error) => {
        console.log("Error - ", error);
        dispatch(removeFavItem(false));
        handleErrorResponse(error);
      });
  };
};
