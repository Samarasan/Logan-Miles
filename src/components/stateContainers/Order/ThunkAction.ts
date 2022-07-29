import {  getOrderService, placeOrderService } from "./Service";
import { getOrder, getPlaceOrder } from "./Slice";
import { IOrder, IPlaceOrder } from "./Types";

export const placeOrderAction = (item: IPlaceOrder) => {
  return async (dispatch: any, getState: any) => {
    const response: any = await placeOrderService(item);
    if (response === 200) {
      dispatch(getPlaceOrder(true));
    } else {
      dispatch(getPlaceOrder(false));
    }
  };
};

export const getOrderAction = (item: any) => {
  return async (dispatch: any, getState: any) => {
    const response: IOrder[] = await getOrderService(item);
    if (response) {
      dispatch(getOrder(response));
    } else {
      console.log("Something Went Order");
    }
  };
};



