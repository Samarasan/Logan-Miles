import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { SORT } from "../../../constant/Variables";
import { IProduct } from "../../../model/IProductType";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { getProductHeader, removeChar } from "../../common/Script";
import { fetchAllProducts } from "../../stateContainers/NavState/ThunkActions";
import { ICategory, ISubCategory } from "../../stateContainers/NavState/Types";
import { ProductListSlice } from "../../stateContainers/ProductListState/Slice";
import { SelectedProductSlice } from "../../stateContainers/SelectedProduct/Slice";

export interface IView {
  mobile: string;
  desktop: string;
}

export default function useProductList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { mc, sc } = useParams() as any;
  // Values From Redux
  const { navData } = useSelector((state: IRootState) => state);
  const productList = navData && navData.allProducts;
  // const featureProducts = navData && navData.featureProduct;

  const selectedCategory = navData && navData.selectedCategory;
  const categories = navData && navData.categories;

  const { productListData } = useSelector((state: IRootState) => state);
  const gridView = productListData && productListData.gridView;
  const sortedList = productListData && productListData.sortedList;
  const selectedId = productListData && productListData.selectedListId;

  const selectedCategoryStorage = JSON.parse(
    localStorage.getItem("selected-category") as any
  );

  React.useEffect(() => {
    dispatch(ProductListSlice.actions.setSortedList(productList as IProduct[]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  const GetAlphabeticalOrderList = (): IProduct[] => {
    return [...productList].sort((a: IProduct, b: IProduct) =>
      a.productname.localeCompare(b.productname)
    );
  };

  const GetPriceOrderList = (): IProduct[] => {
    return [...productList].sort(
      (a: IProduct, b: IProduct) =>
        a.productSize[0].price - b.productSize[0].price
    );
  };

  // Sort Handler
  const isSortEnabled = productListData && productListData.isSortEnabled;
  const handleSortIconClick = () => {
    dispatch(ProductListSlice.actions.setSortVisibility(!isSortEnabled));
  };

  const handleSort = (item: string) => {
    let list;
    switch (item) {
      case SORT.AlPHABET: {
        list = GetAlphabeticalOrderList();
        break;
      }
      case SORT.REVERSEALPHABET: {
        list = GetAlphabeticalOrderList().reverse();
        break;
      }
      case SORT.HIGHTOLOW: {
        list = GetPriceOrderList().reverse();
        break;
      }
      case SORT.LOWTOHIGH: {
        list = GetPriceOrderList();
        break;
      }
      default:
        list = productList;
        break;
    }
    dispatch(ProductListSlice.actions.setSortedList(list));
    setTimeout(() => {
      handleSortIconClick();
    }, 1000);
  };

  const selectedCategoryItems = () => {
    const item = categories.find((item: ICategory) => {
      return item.mainCatName === selectedCategory.mc;
    });
    return item;
  };

  // Filters
  const getFilters = () => {
    const item = selectedCategoryItems();
    const subList = item?.categories.map((item: ISubCategory) => item.cName);
    return subList;
  };

  //Toggle Filter Inner
  const filterInnerEnabled =
    productListData && productListData.toggleFilterInner;
  const toggleFilterClick = () => {
    dispatch(
      ProductListSlice.actions.settoggleFilterInner(!filterInnerEnabled)
    );
  };

  // selected category title 
  const getTitle = () => {
    let mtName = selectedCategory?.mc || mc;
    let stName = selectedCategory?.sc || sc;

    let pageHeader = {
      stName,
    };

    let title = getProductHeader(mtName, pageHeader);
    return title;
  };

  // Filter List Selector
  const handleSelectedItemClick = (id: number) => {
    if (selectedId === id) {
      dispatch(ProductListSlice.actions.setSelectedListId(undefined));
    } else {
      dispatch(ProductListSlice.actions.setSelectedListId(id));
    }
  };

  const MenuApplyHandleClick = () => {
    const subCategory = getFilters();
    
    const sCategory = subCategory?.find(
      (item: any, index: number) => index === selectedId
    );
    console.log(sCategory,'wer');
    
    const mtName: any = {
      mt: selectedCategory.mc,
      st: sCategory,
    };
    dispatch(fetchAllProducts(mtName));

    if (isRightViewEnabled) {
      handleRightViewVisibility();
    }
  };

  const resetButtonOnClick = () => {
    const mtName: any = {
      mt: selectedCategory.mc,
    };
    dispatch(ProductListSlice.actions.setSelectedListId(undefined));
    dispatch(fetchAllProducts(mtName));

    if (isRightViewEnabled) {
      handleRightViewVisibility();
    }
  };

  //Right View Filter List Selector
  const isRightViewEnabled =
    productListData && productListData.isRightviewEnabled;

  const handleRightViewVisibility = () => {
    dispatch(
      ProductListSlice.actions.setRightFilterVisibility(!isRightViewEnabled)
    );
  };

  // Grid View Controller
  const handleGridView = (view: IView) => {
    dispatch(ProductListSlice.actions.setgridView(view));
  };

  const getActiveGridView = (view: IView) => {
    const activeClass =
      gridView === view ? "layout-type is-active" : "layout-type";
    return activeClass;
  };

  // Image OnClick
  const handleProductOnclick = (item: IProduct) => {
    const selectedProduct = {
      from: "list",
      productDetails: item,
    };
    dispatch(SelectedProductSlice.actions.setSelectedProduct(selectedProduct));
    localStorage.setItem("selected-product", JSON.stringify(selectedProduct));
    const str = removeChar(item.productname);
    const url = `info/${str}/${item.mcId}`;
    history.push(url, { from: "list" });
  };

  return {
    // featureProducts,
    isSortEnabled,
    handleSortIconClick,
    selectedId,
    handleSelectedItemClick,
    resetButtonOnClick,
    isRightViewEnabled,
    handleRightViewVisibility,
    filterInnerEnabled,
    toggleFilterClick,
    gridView,
    handleGridView,
    getActiveGridView,
    productList,
    selectedCategory,
    getFilters,
    handleProductOnclick,
    MenuApplyHandleClick,
    sortedList,
    handleSort,
    getTitle,
    categories,
    selectedCategoryItems,
    selectedCategoryStorage,
  };
}
