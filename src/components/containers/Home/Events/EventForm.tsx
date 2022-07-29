import { Box, CssBaseline } from "@material-ui/core";
import  { useEffect, useState } from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../../header/Header.logic";
import { EventRegistration } from "./EventRegistration";
import { EventUserForm } from "./EventUser/EventUserForm";
import RegisterNow from "./RegisterNowButton/registerNow";

export const EventForm = ({ location }: any) => {
  const propValue = location.state;

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

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
      <div className={scrollName}>
        <Header />
        <EventRegistration />
        <div className="column_content wide_left sticky_none ">
          <div className="column_content__col">
            <section className="events-wrapper">
              <CssBaseline />
              <Box
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow:
                    "0 16px 24px 2px rgb(0 0 0 / 8%), 0 6px 30px 5px rgb(0 0 0 / 6%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
                  borderRadius: "6px",
                  marginTop: "-85px",
                  marginBottom: "3rem",
                  background:"#cbc8c8",
                }}
              >
                <div className="event-container">
                  <EventUserForm details={propValue?.step} />
                  <RegisterNow />
                </div>
              </Box>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
