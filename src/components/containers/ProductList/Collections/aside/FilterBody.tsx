import React from "react";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Categories from "./Categories";

export const FilterBody = () => {
  const [isVisibleCategory, setVisibleCategory] = React.useState(false);

  return (
    <div className="Filter-List">
      <div
        className="Filter-List-title u-h5"
        onClick={() => setVisibleCategory(!isVisibleCategory)}
      >
        <span className="fs-name">CATEGORIES</span>
        <ExpandMore />
      </div>
      {isVisibleCategory && <Categories />}
    </div>
  );
};
