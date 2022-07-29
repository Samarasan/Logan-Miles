import React from "react";
import HeaderLogo from "./common/HeaderLogo";
import HeaderIconList from "./common/HeaderIconList";
import { HeaderNavList } from "./common/HeaderNavList";
import HeaderMenu from "./common/HeaderMenu";
import { productType } from "./useNav.hook";
import "./Header.scss";
import MyProfileView from "./MyProfile/MyProfile.view";
import LeftDrawer from "./LeftDrawer/LeftDrawer";
import SearchBox from "./SearchBox/SearchBox";

interface IProps {
  productList: productType[];
  isVisibleSearch: boolean;
  isVisibleProfile: boolean;
  isVisibleMenu: boolean;
}

export const HeaderView: React.FC<IProps> = (props: IProps) => {
  const { productList, isVisibleSearch, isVisibleProfile, isVisibleMenu } =
    props;

  return (
    <React.Fragment>
      {}

      {isVisibleSearch ? (
        <SearchBox />
      ) : (
        <header
          id="section-header"
          className="Header Header--logoLeft Header--withIcons Header--initialized"
        >
          <div className="Header__Wrapper">
            <div className="Header__FlexItem Header__FlexItem--fill">
              <HeaderMenu />
              <HeaderNavList productList={productList} />
            </div>
            <HeaderLogo />
            <HeaderIconList />
          </div>
        </header>
      )}
      <section>
        {isVisibleMenu && <LeftDrawer productList={productList} />}
      </section>

      <section>{isVisibleProfile && <MyProfileView />}</section>
    </React.Fragment>
  );
};
