import React from "react";
import { useDispatch } from "react-redux";
import { onClick } from "../../../constant/Types";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header.logic";
import { getSelectedUser } from "../../stateContainers/BrandUsers/Slice";
import { getAmbassadorList } from "../../stateContainers/BrandUsers/ThunkAction";
import { IAmbassador } from "../../stateContainers/BrandUsers/Types";
import UserDetails from "./BrandAmbassadorDetails/UserDetails/UserDetails";
import UserList from "./BrandAmbassadorDetails/UserList/UserList";
import { useAmbassador } from "./useAmbassador.hook";
import "./BrandAmbassador.scss";

export const BrandAmbassador = () => {
  const [userDetailsEnabled, setUserDetailsEnabled] = React.useState(false);

  const dispatch = useDispatch();

  const onViewDetailsClick = (e: onClick, item: IAmbassador) => {
    e.preventDefault();
    setUserDetailsEnabled(!userDetailsEnabled);
    dispatch(getSelectedUser(item));
  };

  const { ambassadorGallery } = useAmbassador();

  React.useEffect(() => {
    if (ambassadorGallery && ambassadorGallery.length < 1) {
      dispatch(getAmbassadorList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      {userDetailsEnabled ? (
        <UserDetails />
      ) : (
        <UserList onViewDetailsClick={onViewDetailsClick} />
      )}
      <Footer />
    </div>
  );
};

export default BrandAmbassador;
