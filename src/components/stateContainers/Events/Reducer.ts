import { PayloadAction } from "@reduxjs/toolkit";
import {
  IInitialState,
  IourEvents,
  IBooking,
  IeventID,
  IregBooking,
  IuptEvent,
  IBookingProfile,
  IAuth,
} from "./Types";

export const Reducer = {
  getAuthentication: (
    state: IInitialState,
    action: PayloadAction<Array<IAuth>>
  ): void => {
    state.userAuthentication = action.payload;
  },
  getOurEevnts: (
    state: IInitialState,
    action: PayloadAction<Array<IourEvents>>
  ): void => {
    state.ourEvents = action.payload;
  },
  addOurBooking: (
    state: IInitialState,
    action: PayloadAction<Array<IBooking>>
  ): void => {
    state.booking = action.payload;
  },
  getEventById: (
    state: IInitialState,
    action: PayloadAction<Array<IeventID>>
  ): void => {
    state.eventID = action.payload;
  },
  getRegBooking: (
    state: IInitialState,
    action: PayloadAction<Array<IregBooking>>
  ): void => {
    state.regEvent = action.payload;
  },
  updateEvent: (
    state: IInitialState,
    action: PayloadAction<Array<IuptEvent>>
  ): void => {
    state.uptEvent = action.payload;
  },
  getBookingProfile: (
    state: IInitialState,
    action: PayloadAction<Array<IBookingProfile>>
  ): void => {
    state.bookingProfile = action.payload;
  },
  getUserProfile: (
    state: IInitialState,
    action: PayloadAction<Array<any>>
  ): void => {
    state.userProfile = action.payload;
  },
  getUserBookingInfo: (
    state: IInitialState,
    action: PayloadAction<Array<IregBooking>>
  ): void => {
    state.userBookinginfo = action.payload;
  },
};
