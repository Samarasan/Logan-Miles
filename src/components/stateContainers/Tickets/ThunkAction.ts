import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import { addNotification } from "../Toast/Slice";
import { getAllTicketService, getUserTicketService, updateTicketBookingService } from "./Service";
import { getAllTickets,getUserTickets } from "./Slice";


export const getTicketList = () => {
  
    return async (dispatch: any, getState: any) => {
      dispatch(setSpinnerLoad(true));
      getAllTicketService()
        .then((res) => {
          dispatch(getAllTickets(res));
          dispatch(setSpinnerLoad(false));
        })
        .catch((error) => {
          console.log("Error", error);
          dispatch(setSpinnerLoad(false));
          handleErrorResponse(error);
        });
    }
  
  };
 
  export const getUserTicketsAction = () => {
    return async (dispatch: any, getState: any) => {
      dispatch(setSpinnerLoad(true));
      try {
        const response: any = await getUserTicketService();
        dispatch(getUserTickets(response));
        setTimeout(() => {
          dispatch(setSpinnerLoad(false));
        }, 500);
      } catch (error) {
        handleErrorResponse(error);
        dispatch(setSpinnerLoad(false));
      }
    };
  };

  export const UpdateTicketBooking = (item: any) => {
    return async (dispatch: any, _getState: any) => {
      try {
        const response: any = await updateTicketBookingService(item);
        if (response === 200) {
          dispatch(
            addNotification({
              isOpen: true,
              text: "Ticket Booked Succesfully",
            })
          );
          setTimeout(() => {
            dispatch(addNotification({ isOpen: false, text: "" }));
          }, 1000);
           window.location.reload()
        }
      } catch (error) {
        console.log(error);
      }
    };
  };  