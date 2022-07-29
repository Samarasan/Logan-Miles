import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import { getProduct } from "../../../stateContainers/SelectedProduct/ThunkAction";
import { useSelProduct } from "../SelectedProduct/useSelProduct.hook";

function Sproduct() {
  const { selectedProductData } = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();
  const selectedData =
    selectedProductData && selectedProductData.selectedProduct;

  const selectedProduct = JSON.parse(
    localStorage.getItem("selected-product") as any
  );

  const { name, id } = useParams() as any;

  useEffect(() => {
    if (
      selectedProduct === null ||
      Object.entries(selectedProduct).length < 1
    ) {
      dispatch(getProduct({ pId: id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct]);

  console.log(selectedProduct);

  return <div></div>;
}

export default Sproduct;
