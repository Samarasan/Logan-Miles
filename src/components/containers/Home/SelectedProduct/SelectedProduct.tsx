import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import { PopupContainer } from "./PopupContainer/PopupContainer";
import { useSelProduct } from "./useSelProduct.hook";
import { ProductDescription } from "./ProductInfo/ProductDescription";
import "./SelectedProduct.scss";
// import { Helmet } from "react-helmet";
import Spinner from "../../../common/Spinner/Spinner";
import Header from "../../../header/Header.logic";
import { getProduct } from "../../../stateContainers/SelectedProduct/ThunkAction";
import { ModalEnum } from "../../../stateContainers/SelectedProduct/Types";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import EmptyProducts from "../../../common/EmptyProducts/EmptyProducts";
import Footer from "../../../Footer/Footer";

export const SelectedProduct = () => {
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;
  const { selectedProduct, modalVisibility } = useSelProduct();
  // const metaTags = (productDetails?.metatags && productDetails?.metatags) || [];
  const dispatch = useDispatch();
  const { id } = useParams() as any;
  localStorage.removeItem("selected-category");

  const mcid = selectedProduct?.productDetails?.mcId;
  const isEqualProductId = id.toString() === mcid?.toString();

  useEffect(() => {
    if (!isEqualProductId) {
      dispatch(getProduct({ pId: id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <div>
        {/* <Helmet htmlAttributes={{ lang: "en" }}>
          <meta charSet="utf-8" />
          <title>{selectedProduct.productDetails.productname}</title>
          <meta name="description" content="$__META_DESCRIPTION__" />
          <meta name="keyword" content={metaTags[0]?.keyword} />
          <meta name="facebook" content={metaTags[0]?.facebook} />
          <meta name="twitter" content={metaTags[0]?.twitter} />
          <meta name="instagram" content={metaTags[0]?.instagram} />
          <meta name="linkedin" content={metaTags[0]?.linkedin} />
          <meta name="pintrest" content={metaTags[0]?.pintrest} />
          <meta
            name="image"
            content={selectedProduct.productDetails.imageurl}
          />
        </Helmet> */}
      </div>
      <React.Fragment>
        <Header />
        {Object.entries(selectedProduct?.productDetails).length ? (
          <section className="Product Product--large">
            <div className="Product__Wrapper">
              <ProductGallery />
              <ProductInfo />
            </div>
            {modalVisibility !== ModalEnum.Empty && <PopupContainer />}
            <ProductDescription classname="hidden-lap-and-up" />
          </section>
        ) : (
          <EmptyProducts />
        )}
      </React.Fragment>
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
};

export default SelectedProduct;
