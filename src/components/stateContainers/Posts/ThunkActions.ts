import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import { getLikesCountById } from "./Services";

import { getUserLikesCount } from "./Slice";



export const getLikecountId = (ppid:any) => {
    return async (dispatch: any, getState: any) => {
      dispatch(setSpinnerLoad(true));
      getLikesCountById(ppid)
        .then((res) => {
          dispatch(getUserLikesCount(res));
          dispatch(setSpinnerLoad(false));
        })
        .catch((error) => {
          console.log("Error", error);
          dispatch(setSpinnerLoad(false));
          handleErrorResponse(error);
        });
    };
  };


