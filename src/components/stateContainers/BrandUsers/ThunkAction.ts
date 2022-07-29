import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import { addNotification } from "../Toast/Slice";
import {
  getTeamService,
  getAmbassadorService,
  addFundingService,
  IFund,
} from "./Service";
import {
  getaddCrowdFunding,
  getAmbassador,
  getOurTeam,
} from "./Slice";

export const getTeamList = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    getTeamService()
      .then((res) => {
        dispatch(getOurTeam(res));
        dispatch(setSpinnerLoad(false));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(setSpinnerLoad(false));
        handleErrorResponse(error);
      });
  };
};

export const getAmbassadorList = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    getAmbassadorService()
      .then((res) => {
        dispatch(getAmbassador(res));
        dispatch(setSpinnerLoad(false));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(setSpinnerLoad(false));
        handleErrorResponse(error);
      });
  };
};

export const AddFund = (item: IFund) => {
  return async (dispatch: any, _getState: any) => {
    try {
      const response: any = await addFundingService(item);
      if (response === 200) {
        dispatch(getaddCrowdFunding(false));
        dispatch(
          addNotification({
            isOpen: true,
            text: "Your Payment Successfully Added",
          })
        );
        setTimeout(() => {
          dispatch(addNotification({ isOpen: false, text: "" }));
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      dispatch(getaddCrowdFunding(false));
    }
  };
};

// export const fetchSupportTeam = () => {
//   return async (dispatch: any, getState: any) => {
//     dispatch(setSpinnerLoad(true));
//     getSupportTeamService()
//       .then((res) => {
//         dispatch(getSupportTeam(res));
//         dispatch(setSpinnerLoad(false));
//       })
//       .catch((error) => {
//         console.log("Error", error);
//         dispatch(setSpinnerLoad(false));
//         handleErrorResponse(error);
//       });
//   };
// };
