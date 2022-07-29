import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
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

const initialState: IInitialState = {
  userAuthentication:[] as IAuth[],
  ourEvents: [] as IourEvents[],
  booking: [] as IBooking[],
  bookingProfile: [] as IBookingProfile[],
  eventID: [] as IeventID[],
  regEvent: [] as IregBooking[],
  uptEvent: [] as IuptEvent[],
  userProfile: [] as any[],
  userBookinginfo:[] as IregBooking[] ,
};

export const Slice = createSlice({
  initialState,
  name: "event-user-reducer",
  reducers: Reducer,
});

export { Slice as EventSlice };

export const {
  getAuthentication,
  getOurEevnts,
  addOurBooking,
  getUserProfile,
  getEventById,
  getRegBooking,
  updateEvent,
  getBookingProfile,
  getUserBookingInfo
} = Slice.actions;
