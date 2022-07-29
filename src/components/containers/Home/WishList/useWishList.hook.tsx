import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { onClick } from "../../../../constant/Types";
import { IProduct } from "../../../../model/IProductType";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import { getProductDetails, LoggedInProf, LoggedInUser, updateLocalCart } from "../../../common/Script";
import { addNotification } from "../../../stateContainers/Toast/Slice";
import { AddFavItem, GetFavItem } from "../../../stateContainers/WishList/ThunkActions";

export const useWishList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { favData } = useSelector((state: IRootState) => state);
  const favItems: IProduct[] = favData && favData.getFav;

  const FetchWishList = () => {
    if ((LoggedInUser || LoggedInProf as string) !== "") {
      dispatch(GetFavItem({ phone: LoggedInUser || LoggedInProf as string }));
    } else {
      history.push("/login");
    }
  };

  const Nofify = () => {
    dispatch(addNotification({ isOpen: true, text: "Added to cart" }));
    setTimeout(() => {
      dispatch(addNotification({ isOpen: false, text: "" }));
    }, 1000);
  };

  const handleAddToCartClick = (
    e: onClick,
    updatedProduct: any,
    item: IProduct
  ) => {
    e.preventDefault();
    const selectedProduct = getProductDetails(item, updatedProduct);
    updateLocalCart(selectedProduct);
    Nofify();
  };

  const handleDeleteClick = (id: any) => {
    if ((LoggedInUser || LoggedInProf as string) !== "") {
      const item = {
        phone: LoggedInUser || LoggedInProf as string,
        pId: id,
      };
      dispatch(AddFavItem(item));
    }
  }

  return {
    favData,
    favItems,
    handleAddToCartClick,
    handleDeleteClick,
    FetchWishList,
  };
};
