import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import Spinner from "../../common/Spinner/Spinner";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header.logic";
import { Banner } from "./Banner/Banner";
import Events from "./Events/Events";
import { AboutBanner } from "./ServiceBanners/ConstructionBanner";
import { AboutUsBanner } from "./ServiceBanners/AboutUsBanner";
import Contact from "./ServiceBanners/Contact";
import Modal from "../../ui-kit/modal/modal";
import Reward from "./Rewards/Reward";
import { FounderWord } from "./ServiceBanners/Founderwords";
import FloatingButton from "./FloatingButton";
export const HomeView = () => {
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [openModal, setOpenModal] = useState<boolean>(true);

  const handleClose = () => {
    setOpenModal(!openModal);
  };
  useEffect(() => {
    if (openModal === true) {
      setTimeout(() => {
        setOpenModal(false);
      }, 15000);
    }
  }, [openModal]);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition === 0) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const scrollName = scrolling ? "homeview-inverted" : "homeview";

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={scrollName}>
          <Header />
          <Banner />
          <Events />
          {/* <FounderWord /> */}
          <AboutBanner />
          <AboutUsBanner />
          <Contact />
          <Footer />
          {/* <Modal onClose={handleClose} visibilty={openModal}>
            <Reward />
          </Modal> */}
          <FloatingButton />
        </div>
      )}
    </React.Fragment>
  );
};

export default HomeView;
