import { PayloadAction } from "@reduxjs/toolkit";
import { IBookingtkt, IInitialState, Itkt, IuserTkt } from "./Types";

export const Reducer = {
    getAllTickets: (
        state: IInitialState,
        action: PayloadAction<Array<Itkt>>
      ): void => {
        state.allTickets = action.payload;
      },
      getUserTickets: (
        state: IInitialState,
        action: PayloadAction<Array<any>>
      ): void => {
        state.getUserTickets = action.payload;
      },

      updateBookingTickets: (
        state: IInitialState,
        action: PayloadAction<Array<IBookingtkt>>
      ): void => {
        state.bookingTickets = action.payload;
      },
}

