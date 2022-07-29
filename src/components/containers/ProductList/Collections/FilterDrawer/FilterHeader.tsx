import React from "react";
import useProductList from "../../useProductList.hook";

function FilterHeader() {
  const { resetButtonOnClick } = useProductList();
  return (
    <div className="f-header">
      <p className="f-title">Filters</p>
      <button className="f-clear-all" onClick={resetButtonOnClick}>
        Reset filters
      </button>
    </div>
  );
}

export default FilterHeader;
