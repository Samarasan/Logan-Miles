import { ProductServices } from "../../../utils/API";

// Get Colors
export const getColorsService = async (): Promise<any> => {
  return ProductServices.Colors()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const getStoneService = async (): Promise<any> => {
  return ProductServices.Stone()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
export const getMetalService = async (): Promise<any> => {
  return ProductServices.Metal()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
