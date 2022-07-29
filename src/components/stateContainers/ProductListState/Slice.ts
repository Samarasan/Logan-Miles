import { createSlice } from "@reduxjs/toolkit";
import { view2 } from "../../../constant/Variables";
import { Reducer } from "./Reducer";
import { IInitialState } from "./Types";

const initialState: IInitialState = {
  isSortEnabled: false,
  toggleFilterInner: false,
  selectedListId: undefined,
  selectedColorId: undefined,
  selectedMetal: undefined,
  selectedStone: undefined,
  isRightviewEnabled: false,
  gridView: view2,
  sortedList: [],
  colors: [],
  stones: [],
  metals: [],
};

const Slice = createSlice({
  initialState,
  name: "product-list-grid",
  reducers: Reducer,
});

export { Slice as ProductListSlice };
