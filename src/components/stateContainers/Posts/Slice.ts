import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IInitialState, ILikes } from "./Types";

const initialState: IInitialState = {
    userLikesCount: [] as ILikes[]
}

export const Slice = createSlice({
    initialState,
    name: "post-user-reducer",
    reducers: Reducer,
  });

  export { Slice as PostSlice };  


  export const {
    getUserLikesCount
  } = Slice.actions 