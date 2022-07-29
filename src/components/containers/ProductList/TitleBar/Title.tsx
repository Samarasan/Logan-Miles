import React from "react";
import useProductList from "../useProductList.hook";
import "./Title.scss";

export const Title = () => {
  const { selectedCategory } = useProductList();
  return (
    <header className="list-header">
      <div className="list-container">
        <div className="list-container__wrapper">
          <h1 className="u-h4">
            {selectedCategory.mc ? selectedCategory.mc : "Shop"}
          </h1>
        </div>
      </div>
    </header>
  );
};
