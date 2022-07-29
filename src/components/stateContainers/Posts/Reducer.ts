import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, ILikes } from "./Types";

export const Reducer = {
    getUserLikesCount: (
        state: IInitialState,
        action: PayloadAction<Array<ILikes>>
      ): void => {
        state.userLikesCount = action.payload;
      },
}