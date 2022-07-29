import React from "react";
import "./OurTeam.scss";
import Header from "../../header/Header.logic";
import Footer from "../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { getEventList } from "../../stateContainers/Events/ThunkAction";
import { Link } from "react-router-dom";

export const OurEvent = () => {
  const dispatch = useDispatch();
  const { eventData } = useSelector((state: IRootState) => state);
  const eventList: any = eventData && eventData.ourEvents;
  console.log(eventList, "ourEvent");
  React.useEffect(() => {
    if (eventList && eventList?.length < 1) {
      dispatch(getEventList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header />
      <div className="upEve">
        <h3>Ticket for Members</h3>
        {/* <p>
          Doors open 90 minutes before Events. Max capacity 850;
          <br /> <span>most events are 100 players only.</span>
        </p> */}
        <div className="allign">
          {eventList?.map((step: any, index: number) => {
            return (
              <>
                <div className="container">
                  <div className="card">
                    <div className="slide slide1">
                      <div className="content">
                        <div className="icon">
                          <img src={step.url} alt="eventImg" />
                        </div>
                      </div>
                    </div>
                    <div className="slide slide2">
                      <div className="content">
                        <h3>{step?.title}</h3>
                        <p>{step?.details}</p>
                        <p>{step?.date}</p>
                        <p>Time : 07:30 am</p>
                        {/* <p>$ {step?.entry}</p> */}
                        <Link
                          to={{
                            pathname: `/ticket/${step?.eid}`,
                            state: { step },
                          }}
                        >
                          <p className="bookTckts">Buy Tickets</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurEvent;
