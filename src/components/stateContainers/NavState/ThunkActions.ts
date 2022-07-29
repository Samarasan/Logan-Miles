import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import {
  getAllProductsAPI,
  getCategoriesAPI,
  getPreOrderAPI,
  getSearchAPI,
} from "./Services";
import {
  getAllProducts,
  getCategories,
  getPreOrderList,
  getSearchList,
} from "./Slice";

export function fetchCategories() {
  
  return async (dispatch: (arg0: any) => void) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response = await getCategoriesAPI();
      dispatch(getCategories(response));
      dispatch(setSpinnerLoad(false));
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
}

export const fetchAllProducts = (item: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response = await getAllProductsAPI(item);
      dispatch(getAllProducts(response));
      setTimeout(() => {
        dispatch(setSpinnerLoad(false));
      }, 500);
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
};

export const fetchSearchProducts = (item: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response = await getSearchAPI(item);
      dispatch(getSearchList(response));
      setTimeout(() => {
        dispatch(setSpinnerLoad(false));
      }, 500);
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
};

export const fetchPreOrderList = ()=> {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response = await getPreOrderAPI();
      dispatch(getPreOrderList(response));
      setTimeout(() => {
        dispatch(setSpinnerLoad(false));
      }, 500);
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
}
