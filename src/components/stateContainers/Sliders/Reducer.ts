import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, ISlidersList } from "./Types";

export const Reducer = {
  setSlidersList: (
    state: IInitialState,
    action: PayloadAction<ISlidersList>
  ): void => {
    state.Sliders = action.payload;
  },
};
