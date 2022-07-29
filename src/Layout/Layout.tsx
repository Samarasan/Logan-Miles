import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoggedInUser } from "../components/common/Script";
import { IgetProfile } from "../components/stateContainers/Profile/Services";
import { getProfileDetails } from "../components/stateContainers/Profile/ThunkAction";
import { IRootState } from "../redux/reducer/CombineReducer";
import Toast from "../components/common/Toast/Toast";
import { Routes as RoutedComponent } from "../routes/Index";
// import { fetchSupportTeam } from "../components/stateContainers/BrandUsers/ThunkAction";
import { getEventList } from "../components/stateContainers/Events/ThunkAction";
import { fetchCategories } from "../components/stateContainers/NavState/ThunkActions";
import { useWishList } from "../components/containers/Home/WishList/useWishList.hook";
import { useCart } from "../components/containers/Cart/useCart.hook";

/**
 * Responsible for rendering the component as per route path
 */

export const Layout: React.FC = () => {
  const dispatch = useDispatch();
  // const { FetchCartData } = useCart();
  const { FetchWishList } = useWishList();
  // const dataArray = {
  //   username: "mylogantown",
  //   password: "password",
  // };
  const { eventData } = useSelector((state: IRootState) => state);
  const ourEvent: any = eventData && eventData.ourEvents;
  const { toastData } = useSelector((state: IRootState) => state);
  const openToast = toastData && toastData.notifications.isOpen;
  const text = toastData && toastData.notifications.text;

  const item: IgetProfile = {
    phone: LoggedInUser as string,
  };

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (LoggedInUser !== null) {
      FetchWishList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // React.useEffect(() => {
  //   dispatch(fetchSlidersList());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // React.useEffect(() => {
  //   dispatch(fetMetaHome({ where: "home" }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  React.useEffect(() => {
    dispatch(getProfileDetails(item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React.useEffect(() => {
  //   dispatch(fetchHomePdts());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // React.useEffect(() => {
  //   if (LoggedInUser !== null) {
  //     FetchCartData();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   const GetAuthToken =  () => {
  //  axios
  //       .post("https://api.mememove.com:8443/loganmiles/authenticate",dataArray)
  //       .then((resp) => {
  //         console.log(resp, "res");
  //         dispatch(getAuthentication(resp.data.token));
  //         localStorage.setItem("mydata", resp.data.token);
  //       })
  //       .catch((err) => {
  //         console.log(err, "err");
  //       });
  //   };
  //   GetAuthToken();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchSupportTeam());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    dispatch(getProfileDetails(item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (ourEvent && ourEvent.length < 1) {
      dispatch(getEventList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RoutedComponent />
      {openToast && <Toast openToast={openToast} message={text} />}
    </>
  );
};
