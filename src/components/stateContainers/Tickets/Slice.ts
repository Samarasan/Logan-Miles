import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IBookingtkt, IInitialState, Itkt, IuserTkt } from "./Types";


const initialState: IInitialState = {
    allTickets:[] as Itkt[],
    getUserTickets:[] as IuserTkt[],
    bookingTickets: [] as IBookingtkt[],
}

export const Slice = createSlice({
    initialState,
    name: "ticket-user-reducer",
    reducers: Reducer,
  });

  export { Slice as TicketSlice };  

export const  {
    getAllTickets,
    getUserTickets,
    updateBookingTickets,
}  = Slice.actions
