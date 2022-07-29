import React from "react";
import FilterAction from "./FilterAction";
import FilterContent from "./FilterContent";
import FilterHeader from "./FilterHeader";
import "./FilterDrawer.scss";

function FilterDrawer() {
  return (
    <div className="f-drawer hidden-lap-and-up">
      <div className="f-wrapper">
        <FilterHeader />
        <FilterContent />
        <FilterAction />
      </div>
    </div>
  );
}

export default FilterDrawer;
