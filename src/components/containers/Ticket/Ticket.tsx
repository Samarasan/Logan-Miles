import React from "react";
import "./Ticket.scss";
import Header from "../../header/Header.logic";
import Footer from "../../Footer/Footer";
import { TicketTable } from "./TicketTable";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { getTicketList } from "../../stateContainers/Tickets/ThunkAction";

export const Ticket = ({ location }: any) => {
  const ticketDetails = location.state;
const dispatch =useDispatch()
  const { ticketdata } = useSelector((state: IRootState) => state);
  const ticketlist:any  =ticketdata && ticketdata.allTickets
  React.useEffect(() => {
    if (ticketlist && ticketlist.length < 1) {
      dispatch(getTicketList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
 

  function monthName(mon: any) {
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][mon - 1];
  }
  function weekDay(week: any) {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][week - 1];
  }

  const date = new Date(parseInt(ticketDetails?.step?.date.slice(0, 2)));
  const dayName = date.getDay();

  

  return (
    <div>
      <Header />
      <div className="ticketWrapper">
        <div className="ticketInfo">
          <p>
            {weekDay(dayName)} ,{monthName(ticketDetails?.step?.date.slice(3, 5))}{" "}
            <span>{ticketDetails?.step?.date.slice(0, 2)}</span>|{" "}
            <span>{ticketDetails?.step?.location}</span>
          </p>
          <h2>{ticketDetails?.step?.details}</h2>
          {/* <p>
            I’m an event description. Click here to open up the Event Editor and
            change my text.
          </p> */}
          <div className="tcktbtn">
            <span> Buy Tickets</span>
          </div>
          <div className="eveImg">
            <img src={ticketDetails?.step?.url} alt="skate img" />
          </div>
        </div>
        <div className="ticketBooking">
          <div className="pageCenter">
            <h3>Time & Location</h3>
            <p>
              <span>{monthName(ticketDetails?.step?.date.slice(3, 5))}</span>{" "}
              <span>{ticketDetails?.step.date.slice(0, 2)}</span> ,{" "}
              <span>
                {ticketDetails?.step?.date.slice(6, 10)},<span> 9:10 PM</span>
              </span>
            </p>
            <p>{ticketDetails?.step?.location}</p>
            <div>
              <TicketTable ticketItems={ticketlist} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ticket;
