import { createSlice } from "@reduxjs/toolkit";
import { ProfileMenu } from "../../../constant/Variables";
import { IProduct } from "../../../model/IProductType";
import { Reducer } from "./Reducer";
import { IInitialState, ISelectedCategory } from "./Types";

const initialState: IInitialState = {
  categories: [],
  allProducts: [] as IProduct[],
  searchList: [] as IProduct[],
  PreOrderList: [] as IProduct[],
  selectedCategory: {
    mc: "",
    sc: "",
  } as ISelectedCategory,
  selectedAccountView: ProfileMenu.MyProfile,
  searchValue: "",
};

export const Slice = createSlice({
  initialState,
  name: "NavSLice",
  reducers: Reducer,
});

export { Slice as NavSLice };

export const {
  getCategories,
  getAllProducts,
  getPreOrderList,
  setselectedAccountView,
  getSearchList,
  getSearchValue,
} = Slice.actions;
