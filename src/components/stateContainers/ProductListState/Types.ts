import { IProduct } from "../../../model/IProductType";

export interface IView {
  mobile: string;
  desktop: string;
}

export interface IColor {
  id: number;
  color: string;
}

export interface IStone {
  id: number;
  stones: string;
}

export interface IMetal {
  id: number;
  metals: string;
}

export interface IInitialState {
  isSortEnabled: boolean;
  toggleFilterInner: boolean;
  selectedListId: number | undefined;
  selectedColorId: string | undefined;
  selectedMetal: string | undefined;
  selectedStone: string | undefined;
  isRightviewEnabled: boolean;
  gridView: IView;
  sortedList: IProduct[];
  colors: IColor[];
  stones: IStone[];
  metals: IMetal[];
}
