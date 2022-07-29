import React from "react";
import { RouteComponentProps } from "react-router";
import { Page404 } from "../components/common/page/Page404";
import { Page500 } from "../components/common/page/Page500";
import { DonationForm } from "../components/containers/Home/DonationForm/DonationForm";
import { EventForm } from "../components/containers/Home/Events/EventForm";
import OrderConfirmation from "../components/containers/RegistrationSuccess/OrderConfirmation";
import OurEvent from "../components/containers/OurTeam/OurEvent";
import Login from "../components/UserAccount/Login/Login";
import { Register } from "../components/UserAccount/Register/Register.logic";
import RegisterConfirmation from "../components/containers/Home/Events/RegistorConfirmation/registerConfirmation";
import Layout from "../components/containers/Dashboard/Layout/Layout";
import PaymentConfirmation from "../components/containers/RegistrationSuccess/PaymentConfirmation ";
import Ticket from "../components/containers/Ticket/Ticket";
import Subscription from "../components/containers/Dashboard/Subscription/Subscription";
import Gallery from "../components/containers/Gallery/Gallery";
import Players from "../components/containers/Players/Players";
import Playerdetails from "../components/containers/Players/PlayerDetails/Playerdetails";
import EventRegPage from "../components/containers/Home/Events/EventNewRegPage/EventRegPage";
// import ProductList from "../components/containers/ProductList/ProductList";
import LoginCard from "../components/UserAccount/LoginCard";
import ProfessionalLogin from "../components/ProfessionalsAcoount/Login/ProfessionalLogin";
import { ProfRegister } from "../components/ProfessionalsAcoount/Register/Register.logic";
import PlayersLayout from "../components/containers/ProfessionalsDashboard/Layout/PlayersLayout";
import SelectedProduct from "../components/containers/Home/SelectedProduct/SelectedProduct";
import Contact from "../components/containers/Home/ServiceBanners/Contact";

const HomeView = React.lazy(
  () => import("../components/containers/Home/HomeView")
);
const PaymentContainer = React.lazy(
  () => import("../components/containers/PaymentContainer/PaymentContainer")
);
const Cart = React.lazy(() => import("../components/containers/Cart/Cart"));
const WishList = React.lazy(
  () => import("../components/containers/Home/WishList/WishList")
);
const ProductList = React.lazy(
  () => import("../components/containers/ProductList/ProductList")
);
const Address = React.lazy(
  () => import("../components/containers/Address/Address")
);
export interface IRoutesData {
  /**
   * Should be displayed on the home page
   */
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  /**
   * Should be displayed on the home page
   */
  path: string;
}

const RoutesData: IRoutesData[] = [
  {
    component: HomeView,
    path: "/",
  },
  {
    component: LoginCard,
    path: "/logincard",
  },
  {
    component: Login,
    path: "/login",
  },
  {
    component: ProfessionalLogin,
    path: "/professionallogin",
  },
  {
    component: PaymentContainer,
    path: "/pay",
  },
  {
    component: Register,
    path: "/register",
  },
  {
    component: Address,
    path: "/address",
  },
  {
    component: ProfRegister,
    path: "/profregister",
  },
  {
    component: Cart,
    path: "/cart",
  },
  {
    component: Layout,
    path: "/myprofile",
  },{
    component: PlayersLayout,
    path: "/playersprofile",
  },
  {
    component: Subscription,
    path: "/membership",
  },{
    component: EventRegPage,
    path: "/eventreg",
  },
  {
    component: WishList,
    path: "/wishlist",
  },
  {
    component: ProductList,
    path: "/list",
  },
  {
    component: SelectedProduct,
    path: "/info/:name/:id",
  },
  {
    component: Page404,
    path: "/error/404",
  },
  {
    component: Page500,
    path: "/error/500",
  },
  {
    component: OrderConfirmation,
    path: "/orderconfirm",
  },
  {
    component: PaymentConfirmation,
    path: "/paymentconfirm",
  },
  {
    component: OurEvent,
    path: "/ourevent",
  },
  {
    component: Gallery,
    path: "/gallery",
  },
  {
    component: Players,
    path: "/players",
  },
  {
    component: Playerdetails,
    path: "/plrdetails/:playerid",
  },
  {
    component: DonationForm,
    path: "/donate",
  },
  {
    component: EventForm,
    path: "/eventform/:eid",
  }, 
  {
    component: Ticket,
    path: "/ticket/:eid",
  },
  {
    component: Contact,
    path: "/#contact",
  },
  // {
  //   component: EventBooking,
  //   path: "/booking/:bookingId",
  // },
  {
    component: RegisterConfirmation,
    path: "/confirm",
  },
];

export default RoutesData;
