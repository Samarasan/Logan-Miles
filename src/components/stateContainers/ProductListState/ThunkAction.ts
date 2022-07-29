import { handleErrorResponse } from "../../common/Script";
import { getColorsService, getMetalService, getStoneService } from "./Service";
import { ProductListSlice } from "./Slice";
import { IColor, IMetal, IStone } from "./Types";

export const getColorsDetails = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: IColor[] = await getColorsService();
      dispatch(ProductListSlice.actions.setColors(response));
    } catch (error) {
      console.log(error);
      handleErrorResponse(error);
    }
  };
};

export const getStoneDetails = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: IStone[] = await getStoneService();
      dispatch(ProductListSlice.actions.setStones(response));
    } catch (error) {
      console.log(error);
      handleErrorResponse(error);
    }
  };
};

export const getMetalDetails = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: IMetal[] = await getMetalService();
      dispatch(ProductListSlice.actions.setMetals(response));
    } catch (error) {
      console.log(error);
      handleErrorResponse(error);
    }
  };
};
