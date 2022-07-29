import React from "react";
import "./OrderItem/OrderItem.scss";
import { SideMenu } from "../Layout/SideMenu/SideMenu";
import EmptyOrders from "../../../common/EmptyOrders/EmptyOrders";
import ticket from "../../../../assets/image/LOGAN/IMAGES/ticket.png";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getTicketList,
  getUserTicketsAction,
} from "../../../stateContainers/Tickets/ThunkAction";

export default function MyTickets() {
  const { ticketdata } = useSelector((state: IRootState) => state);
  const allTickets = ticketdata && ticketdata.allTickets;
  const userTicket = ticketdata && ticketdata.getUserTickets;
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (allTickets && allTickets.length < 1) {
      dispatch(getTicketList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTickets]);

  React.useEffect(() => {
    if (userTicket && userTicket.length < 1) {
      dispatch(getUserTicketsAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTicket]);
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userTicket]);

  const filterTickets = allTickets?.filter(
    (item: any) => userTicket?.ticketid === item?.tid
  );

  return (
    <>
      <div className="column main">
        <div className="block">
          <div className="block-title u-h3">My Tickets</div>
          {filterTickets?.length === 0 ? (
            <>
              <EmptyOrders />
            </>
          ) : (
            <>
              {filterTickets?.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    <figure className="movie">
                      <div className="movie__hero">
                        <img src={ticket} alt="Rambo" className="movie__img" />
                      </div>
                      <div className="movie__content">
                        <div className="movie__title">
                          <h1 className="heading__primary">
                            {item.tickettype} <i className="fas fa-fire"></i>
                          </h1>
                          <div className="movie__tag movie__tag--1">#Jump</div>
                          <div className="movie__tag movie__tag--2">#Logan</div>
                        </div>
                        <p className="movie__description">{item.event}</p>
                        <div className="movie__details">
                          <p className="movie__detail">
                            <span className="icons icons-red">
                              <i className="fas fa-camera-retro"></i>{" "}
                            </span>
                            Location Feitshans
                          </p>
                          <p className="movie__detail">
                            <span className="icons icons-grey">
                              <i className="fas fa-clock"></i>{" "}
                            </span>
                            time
                          </p>
                          <p className="movie__detail">
                            <span className="icons icons-yellow">
                              <i className="fas fa-file-invoice-dollar"></i>
                            </span>
                            $ {item.price}
                          </p>
                        </div>
                      </div>
                      <div className="movie__price">$ {item.price}</div>
                    </figure>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <SideMenu />
    </>
  );
}
