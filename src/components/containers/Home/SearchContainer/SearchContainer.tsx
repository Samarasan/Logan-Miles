import NoResultFound from "./NoResultsFound/NoResultFound";
import SearchList from "./SearchList/SearchList";
import "./SearchContainer.scss";
import { useSelector } from "react-redux";
import useSearch from "../../../header/SearchBox/useSearch.hook";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import Header from "../../../header/Header.logic";
import Spinner from "../../../common/Spinner/Spinner";

export const SearchContainer = () => {
  const { searchList } = useSearch();
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;

  return (
    <div>
      <Header />

      {isLoading ? (
        <Spinner />
      ) : searchList.length > 0 ? (
        <SearchList />
      ) : (
        <NoResultFound />
      )}
    </div>
  );
};

export default SearchContainer;
