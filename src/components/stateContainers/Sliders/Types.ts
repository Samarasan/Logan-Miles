import { ICarousel, ISlider } from "../../../model/ISliderType";

export interface ISlidersList {
  carousel: ICarousel[];
  trendingSliders: ISlider[];
  newlyLaunchedSliders: ISlider[];
  allItemSliders: ISlider[];
  featuredSliders: ISlider[];
}

export interface IInitialState {
  Sliders: ISlidersList;
}
