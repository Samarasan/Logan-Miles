import React from "react";
import { FilterView } from "./aside/FilterView";
import { ListView } from "./main/ListView";
import "./Collections.scss";
import useProductList from "../useProductList.hook";
import EmptyProducts from "../../../common/EmptyProducts/EmptyProducts";

export const Collections = () => {
  const { getFilters, sortedList } = useProductList();

  const FilterList = getFilters() as string[];

  return (
    <div className="CollectionInner">
      {FilterList?.length > 0 && <FilterView />}
      {sortedList?.length > 0 ? <ListView /> : <EmptyProducts />}
    </div>
  );
};
