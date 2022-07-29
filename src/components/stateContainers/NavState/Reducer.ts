import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../model/IProductType";
import { IInitialState, ICategory, ISelectedCategory } from "./Types";

export const Reducer = {
  getCategories: (
    state: IInitialState,
    action: PayloadAction<Array<ICategory>>
  ): void => {
    state.categories = action.payload;
  },
  getAllProducts: (
    state: IInitialState,
    action: PayloadAction<IProduct[]>
  ): void => {
    state.allProducts = action.payload;
  },

  setSelectedCategory: (
    state: IInitialState,
    action: PayloadAction<ISelectedCategory>
  ): void => {
    state.selectedCategory = action.payload;
  },

  getPreOrderList: (
    state: IInitialState,
    action: PayloadAction<IProduct[]>
  ): void => {
    state.PreOrderList = action.payload;
  },
  setselectedAccountView: (
    state: IInitialState,
    action: PayloadAction<string>
  ): void => {
    state.selectedAccountView = action.payload;
  },

  getSearchList: (
    state: IInitialState,
    action: PayloadAction<IProduct[]>
  ): void => {
    state.searchList = action.payload;
  },

  getSearchValue: (
    state: IInitialState,
    action: PayloadAction<string>
  ): void => {
    state.searchValue = action.payload;
  },
};
