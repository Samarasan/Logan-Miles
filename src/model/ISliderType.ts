import { IProductImage, IProductSize } from "./IProductType";

export interface ICarousel {
  banId: number;
  bannerUrl: string;
}

export interface ISlidersView {
  imageurl: string;
  productName: string;
  pcolor: string;
}

export interface ISlider {
  description: string;
  enddate: string;
  offer: number;
  pcolor: string;
  price: number;
  productCode: number;
  productName: string;
  psize: string;
  sPhone: string;
  deliveryTime: String | null;
  pWeight: number;
  proSize: number;
  productHeight: number;
  ps: IProductSize[] | [];
  prodImg: IProductImage[] | [];
}



