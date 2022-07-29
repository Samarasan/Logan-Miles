import { CssBaseline } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IRootState } from "../../../../../redux/reducer/CombineReducer";
import Spinner from "../../../../common/Spinner/Spinner";
import Footer from "../../../../Footer/Footer";
import Header from "../../../../header/Header.logic";
import { EventBanner } from "../EventBanner/EventBanner";

export const EventBooking = () => {
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;
  const params: any = useParams();
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { eventData } = useSelector((state: IRootState) => state);
  const ourEvent = eventData && eventData.ourEvents;
  const regDetails = ourEvent.find((item) => item.eid === params.bookingId);
  

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
    <>
       {isLoading ? (
        <Spinner />
      ) :(
      <div className={scrollName}>
        <Header />
        <EventBanner />
        <section className="events-wrapper">
          <CssBaseline />
          <Box
            sx={{
              bgcolor: "#ffffff",
              boxShadow:
                "0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
              borderRadius: "6px",
              marginTop: "-85px",
            }}
          >
            <div className="event-container">
              <h2 className="event-header-h1">Register Event</h2>
              <div className="event-list">
                <Link to={{ pathname: "/eventform", state: { regDetails } }}>
                  <Button variant="contained">Register Now</Button>
                </Link>
              </div>
              <div className="event-list">
                <h4 className="event-header-h1">Event Details :<span className="details">{regDetails?.details}</span> </h4>{" "}
                
              </div>
            </div>
          </Box>
        </section>
        <Footer />
      </div>
       )}
    </>
  );
};
