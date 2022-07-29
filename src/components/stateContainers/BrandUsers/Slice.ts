import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IAmbassador, IInitialState, IOurTeam, ISupportTeam } from "./Types";

const initialState: IInitialState = {
  ourTeam: [] as IOurTeam[],
  ambassadorGallery: [] as IAmbassador[],
  selectedUser: null,
  addCrowdFunding: false,
  SupportTeam: [] as ISupportTeam[],
};

export const Slice = createSlice({
  initialState,
  name: "brand-user-reducer",
  reducers: Reducer,
});

export { Slice as BrandUserSlice };

export const {
  getOurTeam,
  getAmbassador,
  getSelectedUser,
  getaddCrowdFunding,
  getSupportTeam,
} = Slice.actions;
