import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import { getSliders } from "./Service";
import { setSlidersList } from "./Slice";

const MapToSlidersViewModel = (sliders: any[]) => {
  return {
    carousel: sliders[0].data,
    trendingSliders: sliders[1].data,
    newlyLaunchedSliders: sliders[2].data,
    allItemSliders: sliders[3].data,
    featuredSliders: sliders[4].data,
  };
};

export const fetchSlidersList = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    getSliders()
      .then((res) => {
        const slidersView: any = MapToSlidersViewModel(res);
        dispatch(setSlidersList(slidersView));
        setTimeout(() => {
          dispatch(setSpinnerLoad(false));
        }, 500);
      })
      .catch((error) => {
        console.log("Error", error);
        handleErrorResponse(error);
        dispatch(setSpinnerLoad(false));
      });
  };
};
