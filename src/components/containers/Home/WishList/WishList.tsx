import React from "react";
import ImageList from "./ImageList";
import EmptyWishList from "./EmptyWishList/EmptyWishList";
import { useWishList } from "./useWishList.hook";
import { useSelector } from "react-redux";
import "./WishList.scss";
import { IProduct } from "../../../../model/IProductType";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import Spinner from "../../../common/Spinner/Spinner";
import Footer from "../../../Footer/Footer";
import Header from "../../../header/Header.logic";

export const WishList = () => {
  const { favItems } = useWishList();
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;

  localStorage.removeItem("selected-category");

  const WishListView = () => {
    return (
      <div className="wishListContainer">
        <div className="CollectionMain">
          <div className="CollectionInner">
            <div className="CollectionInner__Products">
              <div className="ProductListWrapper">
                <div
                  className="ProductList ProductList--grid ProductList--removeMargin Grid FavList"
                  data-mobile-count="1"
                  data-desktop-count="4"
                >
                  {favItems.map((item: IProduct, index: number) => {
                    return (
                      <React.Fragment key={index}>
                        <ImageList item={item} />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : favItems.length > 0 ? (
        <WishListView />
      ) : (
        <EmptyWishList />
      )}
      <Footer />
    </section>
  );
};

export default WishList;
