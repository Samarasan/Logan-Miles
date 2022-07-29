import React from "react";
import { Facebook, Twitter, Instagram } from "../../Footer/FooterIcons";
// import { useCart } from "../useCart.hook";
// import { CartBody } from "./CartBody";
import StripeBtn from "./StripeButton";
import { PaypalButtons } from "./PayPal";
import "./Ticket.scss";
import { onClick } from "../../../constant/Types";
import { useDispatch } from "react-redux";
import { LoggedInUser } from "../../common/Script";
import { UpdateTicketBooking } from "../../stateContainers/Tickets/ThunkAction";

interface IProps {
  ticketItems: any;
}

export const TicketTable: React.FC<IProps> = (props: IProps) => {
  const { ticketItems } = props;
  console.log(ticketItems, "ticketItems");

  const [money, setMoney] = React.useState<any>(null);
  const [tid, setTicketid] = React.useState<any>();
  const [tType, setTicketype] = React.useState<any>();
  const handleOnClick = (
    e: onClick,
    ticketid: any,
    ticketType: string,
    money: number
  ) => {
    e.preventDefault();
    setMoney(money);
    setTicketid(ticketid)
    setTicketype(ticketType)
  };

  const dispatch = useDispatch();

  const PaymentSuccess = (txnid?: any) => {
    const paymentOptions = {
      useremail: LoggedInUser as string,
      pstatus: "success",
     ticketid: tid,
      quantity: "1",
      total: money,
      tickettype:tType,
      txnid,
    };
    dispatch(UpdateTicketBooking(paymentOptions));
  };
  const paymentProp = {
    amount: +money as number,
    email: LoggedInUser as string,
    onSuccess: PaymentSuccess,
  };

  const socialIcons = [
    {
      icon: <Facebook />,
      href: "https://facebook.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Facebook",
    },
    {
      icon: <Twitter />,
      href: "https://twitter.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Twitter",
    },
    {
      icon: <Instagram />,
      href: "https://instagram.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Instagram",
    },
  ];

  const getSocialIcons = () => {
    return socialIcons.map((item: any, index) => (
      <li key={item.name}>
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      </li>
    ));
  };

  let headers = [
    { name: "Tickets", class: "item" },
    { name: "Price", class: "tkt price" },
    { name: "Status", class: "qty" },
    { name: "Select", class: "total" },
  ];

  const TableHeaders = () => {
    return (
      <thead className="u-h4">
        <tr>
          {headers.map((item: any, index: number) => (
            <th className={`col ${item.class}`} key={item.name}>
              <span>{item.name}</span>
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  return (
    <React.Fragment>
   <div className="form-cart">
      <div className="cart table-wrapper">
        <table className="cart items table" style={{ width: "100%" }}>
          <TableHeaders />
          {ticketItems?.map((item: any, index: number) => {
            return (
              <>
                {/* <CartBody key={index} item={item} /> */}
                <tbody className="cart item u-h5">
                  <tr className="item-info">
                    <td className="col item">
                      <div className="product-image-container CartItem__ImageWrapper AspectRatio">
                        <div className="AspectRatio">{item.tickettype}</div>
                      </div>
                    </td>
                    <td data-th="Description" className="col item dec">
                      <div className="cart-item-details-info">
                        <div className="product-item-details">
                          <dl className="item-options">
                            <span>$ {item.price}</span>
                          </dl>
                        </div>
                      </div>
                    </td>
                    {/* <Quantity /> */}
                    <td className="col qty">On Sale</td>
                    <td className="col subtotal" data-th="Subtotal">
                      <button
                        className="price"
                        onClick={(e) => {
                          handleOnClick(
                            e,
                            item.tid,
                            item.tickettype,
                            item.price
                          );
                        }}
                      >
                        Select and Pay
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
        {LoggedInUser ? ( <div className="ticketPayments">
            <p  className="ticketStripe">
              Stripe :{" "}
              <span>
                <StripeBtn PaymetProps={paymentProp} />
              </span>{" "}
              </p>
            <p className="ticketpaypal">  Paypal : <span className="paypalbtn"><PaypalButtons amount={money as number}
              PaymentSuccess={PaymentSuccess}/></span></p>
        
          </div>):(<div className="userCheck">Member Login Required</div>)}
       
        <div className="socialMedia">
          <h3>Share This Event</h3>
          <div className="menuSocial">
            <ul className="menu-social">{getSocialIcons()}</ul>
          </div>
        </div>
      </div>
    </div>
   
    </React.Fragment>
  );
};
