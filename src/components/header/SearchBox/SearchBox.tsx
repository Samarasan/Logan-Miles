import "./SearchBox.scss";
import SearchIcon from "@material-ui/icons/Search";
import useSearch from "./useSearch.hook";
import { useNavInfoContext } from "../../../react-context/NavContext";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";

export const SearchBox = () => {
  const { searchValue, handleChange, onSearchSubmit } = useSearch();

  const { searchToggleClick } = useNavInfoContext();

  const SearchClose = () => {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="icon icon-search-close"
        viewBox="0 0 64 64"
      >
        <path d="M19 17.61l27.12 27.13m0-27.12L19 44.74"></path>
      </svg>
    );
  };

  return (
    <form className="searchBar">
      <div className="searchBar--inner">
        <TextButton
          type="button"
          isprimary={true}
          className="search-header-close"
          onClick={searchToggleClick as any}
          items={<SearchClose />}
        />
        <div className="searchBar--wrapper">
          <div className="searchcontainer">
            <div className="searchBox" style={{ overflow: "hidden" }}>
              <div className="sform-group">
                <input
                  type="text"
                  id="searchInput"
                  className="sform-control"
                  placeholder="Search here"
                  value={searchValue}
                  onChange={handleChange}
                ></input>
              </div>
              <TextButton
                type="submit"
                isprimary={true}
                className="sform-button"
                onClick={onSearchSubmit as any}
                items={
                  <span>
                    <SearchIcon />
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
