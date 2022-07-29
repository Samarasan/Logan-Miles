import { PayloadAction } from "@reduxjs/toolkit";
import { IAmbassador, IInitialState, IOurTeam, ISupportTeam } from "./Types";

export const Reducer = {
  getOurTeam: (
    state: IInitialState,
    action: PayloadAction<Array<IOurTeam>>
  ): void => {
    state.ourTeam = action.payload;
  },
  getAmbassador: (
    state: IInitialState,
    action: PayloadAction<Array<IAmbassador>>
  ): void => {
    state.ambassadorGallery = action.payload;
  },
  getSelectedUser: (
    state: IInitialState,
    action: PayloadAction<IAmbassador>
  ): void => {
    state.selectedUser = action.payload;
  },
  getaddCrowdFunding: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.addCrowdFunding = action.payload;
  },
  getSupportTeam: (
    state: IInitialState,
    action: PayloadAction<Array<ISupportTeam>>
  ): void => {
    state.SupportTeam = action.payload;
  },
};
