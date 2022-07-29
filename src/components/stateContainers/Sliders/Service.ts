import { ProductServices } from "../../../utils/API";

export const getSliders = async (): Promise<any> => {
  return ProductServices.SlidersAPI()
    .then((res) => res)
    .catch((error) => error);
};
