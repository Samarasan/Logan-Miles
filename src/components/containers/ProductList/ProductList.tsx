import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import Spinner from "../../common/Spinner/Spinner";
import Header from "../../header/Header.logic";
import { Collections } from "./Collections/Collections";
import FilterDrawer from "./Collections/FilterDrawer/FilterDrawer";
import { SortPopover } from "./SortPopover/SortPopover";
import { Title } from "./TitleBar/Title";
import { Toolbar } from "./Toolbar/Toolbar";
import useProductList from "./useProductList.hook";
import "./ProductList.scss";
import Footer from "../../Footer/Footer";

export const ProductList = () => {
  const { isSortEnabled, isRightViewEnabled } = useProductList();
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;

  return (
    <React.Fragment>
      <Header />

      {isLoading ? (
        <Spinner />
      ) : (
        <section
          data-section-id="collection-template"
          data-section-type="collection"
          className="container__main"
        >
          <Title />
          <Toolbar />
          {isRightViewEnabled && <FilterDrawer />}
          {isSortEnabled && <SortPopover />}
          <Collections />
        </section>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default ProductList;
