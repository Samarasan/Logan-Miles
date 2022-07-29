import { useNavInfoContext } from "../../react-context/NavContext";
import { HeaderView } from "./Header.view";
import { useNav } from "./useNav.hook";

export const Header = () => {
  const { Products } = useNav();
  
  let productList = [...Products];

  const { isVisibleSearch, isVisibleProfile, isVisibleMenu } =
    useNavInfoContext();

  return (
    <HeaderView
      productList={productList}
      isVisibleSearch={isVisibleSearch}
      isVisibleProfile={isVisibleProfile}
      isVisibleMenu={isVisibleMenu}
    />
  );
};

export default Header;
