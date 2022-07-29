import React from "react";
import { useSelector } from "react-redux";
import MyTickets from "../MyOrders/MyOrders";
import MyProfile from "../MyProfile/MyProfile";
import Header from "../../../header/Header.logic";
// import ReferandEarn from "../ReferAndEarn/ReferandEarn";
// import Subscription from "../Subscription/Subscription";
import { ProfileMenu } from "../../../../constant/Variables";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import Footer from "../../../Footer/Footer";
import "./Layout.scss";
import MyPurchase from "../MyPurchase/MyPurchase";

export const Layout = () => {
  const { navData } = useSelector((state: IRootState) => state);
  const selectedView = navData && navData.selectedAccountView;

  localStorage.removeItem("selected-category");

  const getComponent = (viewName: string) => {
  
    switch (viewName) {
      case ProfileMenu.MyProfile:
        return <MyProfile />;
      // case ProfileMenu.SavedAddress:
      //   return <MyAddress />;
      case ProfileMenu.Orders:
        return <MyTickets />;
      case ProfileMenu.MyPurchase:
        return <MyPurchase />;
      // case ProfileMenu.SubsCribe:
      //   return <Subscription />;
      // case ProfileMenu.Help:
      //   return <Help />;
      default:
        return <MyProfile />;
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

export default Layout;
