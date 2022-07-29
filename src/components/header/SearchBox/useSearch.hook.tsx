import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { onChange, onClick } from "../../../constant/Types";
import { useNavInfoContext } from "../../../react-context/NavContext";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { getSearchValue } from "../../stateContainers/NavState/Slice";
import { fetchSearchProducts } from "../../stateContainers/NavState/ThunkActions";
import { addNotification } from "../../stateContainers/Toast/Slice";

function useSearch() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const { searchToggleClick, isVisibleSearch } = useNavInfoContext();

  const { navData } = useSelector((state: IRootState) => state);
  const searchList = navData && navData.searchList;
  const searchTerm = navData && navData.searchValue;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e: onChange) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const svalue = {
    pname: searchValue,
  };

  const onSearchSubmit = (e: onClick) => {
    e.preventDefault();
    if (searchValue.length > 1) {
      dispatch(getSearchValue(searchValue));
      dispatch(fetchSearchProducts(svalue));
      history.push("/search");
      if (isVisibleSearch) {
        searchToggleClick();
      }
    } else {
      dispatch(
        addNotification({
          isOpen: true,
          text: "Your search value should contain more than 2 letters",
        })
      );
      setTimeout(() => {
        dispatch(addNotification({ isOpen: false, text: "" }));
      }, 2000);
    }
  };
  return {
    searchValue,
    handleChange,
    onSearchSubmit,
    searchList,
    searchTerm,
  };
}

export default useSearch;
