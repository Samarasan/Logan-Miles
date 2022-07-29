import { CartServices, ShowSingLeProduct } from "../../../utils/API";

export const showProductService = async (item: any): Promise<any> => {
  return ShowSingLeProduct.showSingleProduct(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const deliveryService = async (item: any): Promise<any> => {
  return CartServices.verifyDelivery(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const sendPasswordToUserService = async (item: any): Promise<any> => {
  return CartServices.sendPasswordUsername(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};