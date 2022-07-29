import React from "react";
import { useSelector } from "react-redux";
import MyOrders from "../MyOrders/MyOrders";
import Header from "../../../header/Header.logic";
import { ProfileMenu } from "../../../../constant/Variables";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import Footer from "../../../Footer/Footer";
import "./PlayersLayout.scss";
import PlayerProfile from "../MyProfile/PlayerProfile";
import MyPurchase from "../MyPurchase/MyPurchase";

export const PlayersLayout = () => {
  const { navData } = useSelector((state: IRootState) => state);
  const selectedView = navData && navData.selectedAccountView;

  localStorage.removeItem("selected-category");

  const getComponent = (viewName: string) => {
  
    switch (viewName) {
      case ProfileMenu.MyProfile:
        return <PlayerProfile />;
      // case ProfileMenu.SavedAddress:
      //   return <MyAddress />;
      case ProfileMenu.Orders:
        return <MyOrders />;
      case ProfileMenu.MyPurchase:
        return <MyPurchase />;
      // case ProfileMenu.SubsCribe:
      //   return <Subscription />;
      // case ProfileMenu.Help:
      //   return <Help />;
      default:
        return <PlayerProfile />;
    }
  };

  return (
    
    <React.Fragment>
     
      <Header />
      <main id="maincontent" className="page-main">
        <div className="columns">{getComponent(selectedView)}</div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default PlayersLayout;
