import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../model/IProductType";
import { IColor, IInitialState, IMetal, IStone, IView } from "./Types";

export const Reducer = {
  setSortVisibility: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.isSortEnabled = action.payload;
  },
  settoggleFilterInner: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.toggleFilterInner = action.payload;
  },
  setSelectedListId: (
    state: IInitialState,
    action: PayloadAction<number | undefined>
  ): void => {
    state.selectedListId = action.payload;
  },
  setSelectedColorId: (
    state: IInitialState,
    action: PayloadAction<string | undefined>
  ): void => {
    state.selectedColorId = action.payload;
  },
  setSelectedMetal: (
    state: IInitialState,
    action: PayloadAction<string | undefined>
  ): void => {
    state.selectedMetal = action.payload;
  },
  setSelectedStone: (
    state: IInitialState,
    action: PayloadAction<string | undefined>
  ): void => {
    state.selectedStone = action.payload;
  },
  setRightFilterVisibility: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.isRightviewEnabled = action.payload;
  },
  setgridView: (state: IInitialState, action: PayloadAction<IView>): void => {
    state.gridView = action.payload;
  },
  setSortedList: (
    state: IInitialState,
    action: PayloadAction<IProduct[]>
  ): void => {
    state.sortedList = action.payload;
  },
  setColors: (state: IInitialState, action: PayloadAction<IColor[]>): void => {
    state.colors = action.payload;
  },
  setStones: (state: IInitialState, action: PayloadAction<IStone[]>): void => {
    state.stones = action.payload;
  },
  setMetals: (state: IInitialState, action: PayloadAction<IMetal[]>): void => {
    state.metals = action.payload;
  },
};
