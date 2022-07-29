import React from "react";
import useProductList from "../../useProductList.hook";

function FilterAction() {
  const { handleRightViewVisibility, MenuApplyHandleClick } = useProductList();

  return (
    <div className="f-actions u-h5">
      <button className="f-btn f-btn-close" onClick={handleRightViewVisibility}>
        Close
      </button>
      <button
        className="f-btn f-btn-apply f-btn-enabled"
        onClick={MenuApplyHandleClick}
      >
        Apply Filters
      </button>
    </div>
  );
}

export default FilterAction;
