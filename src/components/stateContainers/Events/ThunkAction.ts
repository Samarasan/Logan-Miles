import { handleErrorResponse } from "../../common/Script";
import {
  getAllEventsService,
  addBookingService,
  IBooking,
  getEventById,
  getRegisteredEvents,
  updateEventService,
  getBookingProfileService,
} from "./Service";
import { getBookingProfile, getOurEevnts, getRegBooking } from "./Slice";
import { setSpinnerLoad } from "../Spinner/Slice";
import { addNotification } from "../Toast/Slice";

export const getEventList = () => {
  
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    getAllEventsService()
      .then((res) => {
        dispatch(getOurEevnts(res));
        dispatch(setSpinnerLoad(false));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(setSpinnerLoad(false));
        handleErrorResponse(error);
      });
  }

};
export const getRegBookingList = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    getRegisteredEvents()
      .then((res) => {
        dispatch(getRegBooking(res));
        dispatch(setSpinnerLoad(false));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(setSpinnerLoad(false));
        handleErrorResponse(error);
      });
  };
};

export const getBookingProfileByPhone = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    getBookingProfileService()
      .then((res) => {
        dispatch(getBookingProfile(res));
        dispatch(setSpinnerLoad(false));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(setSpinnerLoad(false));
        handleErrorResponse(error);
      });
  };
};

export const getEventId = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    getEventById()
      .then((res) => {
        dispatch(getOurEevnts(res));
        dispatch(setSpinnerLoad(false));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(setSpinnerLoad(false));
        handleErrorResponse(error);
      });
  };
};

export const AddBooking = (item: IBooking) => {
  return async (dispatch: any, _getState: any) => {
    try {
      const response: any = await addBookingService(item);
      if (response === 200) {
        dispatch(
          addNotification({
            isOpen: true,
            text: "Events Added Successfully",
          })
        );
        setTimeout(() => {
          dispatch(addNotification({ isOpen: false, text: "" }));
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const UpdateEvent = (item: any) => {
  return async (dispatch: any, _getState: any) => {
    try {
      const response: any = await updateEventService(item);
      if (response === 200) {
        dispatch(
          addNotification({
            isOpen: true,
            text: "Events updated Successfully",
          })
        );
        setTimeout(() => {
          dispatch(addNotification({ isOpen: false, text: "" }));
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
