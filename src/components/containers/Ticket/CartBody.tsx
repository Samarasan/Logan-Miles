import React from "react";
import { useDispatch } from "react-redux";
import { onClick } from "../../../constant/Types";
import { QuantitySelector } from "../../common/QuantitySelector/QuantitySelector";
import { LoggedInUser } from "../../common/Script";
import { SelectedProductSlice } from "../../stateContainers/SelectedProduct/Slice";
import { UpdateTicketBooking } from "../../stateContainers/Tickets/ThunkAction";
import { PaypalButtons } from "./PayPal";
import StripeBtn from "./StripeButton";

interface IProps {
  item: any;
}

export const CartBody: React.FC<IProps> = (props: IProps) => {
  const { item } = props;

  // const code = item.productInfo.productCode;
  const [price, setPrice] = React.useState(item.price);

  const [serviceFee, setServiceFee] = React.useState<any>(item.servicefee);
  const finalAmt = item.price + parseInt(item.servicefee);
  const [total, setTotal] = React.useState<any>(finalAmt);
  const [money, setMoney] = React.useState<any>(finalAmt);
  const dispatch = useDispatch();

  const [count, setCount] = React.useState<number>(1);

  let updateAccount = {
    productId: item.productInfo?.productCode,
    qty: count,
    cusId: LoggedInUser as string,
    size: item.productInfo?.size,
    price: item.productInfo?.price,
  };

  React.useEffect(() => {
    dispatch(SelectedProductSlice.actions.setUpdatedProduct(updateAccount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleOnAddClick = (prevCount: number) => {
    setCount(prevCount + 1);
    setPrice(price + item.price);
    setServiceFee(parseInt(serviceFee) + parseInt(item.servicefee));
    setTotal(total + finalAmt);
    setMoney(total + finalAmt);
    // AddItemToCart(item);
  };

  const handleOnReduceClick = (prevCount: number) => {
    if (prevCount > 1) {
      setCount(prevCount - 1);
      setPrice(price - item.price);
      setServiceFee(serviceFee - item.servicefee);
      setTotal(total - finalAmt);
      setMoney(total - finalAmt);
      // RemoveItemFromCart(item);
    }
  };
  const handleOnClick = (
    e: onClick,
    bookingid: any,
    username: string,
    money: number,
  ) => {
    e.preventDefault();
    setMoney(money);
    // setName(username);
    // setMobile(phone);
    // setEmail(mail);
    // setBid(bookingid);
    // setIsSelect(true);
  };
  const PaymentSuccess = (txnid?: any) => {
    const paymentOptions = {
      useremail: LoggedInUser as string,
      pstatus: "success",
      ticketid: item.tid,
      quantity: count,
      total: money,
      serviceFee: item.servicefee,
      subtotal: price,
      txnid,
    };
    dispatch(UpdateTicketBooking(paymentOptions));
  };
  const paymentProp = {
    amount: +money as number,
    email: LoggedInUser as string,
    onSuccess: PaymentSuccess,
  };

  const ProductDetails = () => {
    return (
      <div className="cart-item-details-info">
        <div className="product-item-details">
          <strong className="product-item-name">
            {item.productInfo?.productName}
          </strong>

          <dl className="item-options">
            <span>$ {item.price}</span>
          </dl>
        </div>
        {/* <div className="item-options">
          <span className="price-title">
            {" "}
            + ${item.servicefee} Service fee
          </span>
        </div> */}
      </div>
    );
  };

  const Quantity = () => {
    return (
      <td className="col qty">
        <QuantitySelector
          count={count}
          handleDecrement={handleOnReduceClick}
          handleIncrement={handleOnAddClick}
          classname="customqty"
        />
      </td>
    );
  };

  return (
    <>
      <tbody className="cart item u-h5">
        <tr className="item-info">
          <td className="col item">
            <div className="product-image-container CartItem__ImageWrapper AspectRatio">
              <div className="AspectRatio">{item.tickettype}</div>
            </div>
          </td>
          <td data-th="Description" className="col item dec">
            <ProductDetails />
          </td>
          {/* <Quantity /> */}
          <td className="col qty">
            On Sale
          </td>
          <td className="col subtotal" data-th="Subtotal">
            <span className="price"  onClick={(e) => {
                            handleOnClick(
                              e,
                              item.tid,
                              item.tickettype,
                              item.price,
                            );
                          }}>Select and Pay</span>
          </td>
        </tr>
      </tbody>
      {/* <tbody className="subTotal">
        <tr className="item-info">
          <td className="colsub" data-th="Subtotal">
            <span className="price">Sub Total</span>
            <p className="servicefee"> Service Fee</p>
          </td>
          <td className="colsub" data-th="Subtotal">
            <span className="price">$ {price}</span>
            <p className="servicefee">$ {serviceFee}</p>
          </td>
        </tr>
        <tr className="item-info">
          <td className="colsub" data-th="Subtotal">
            <span className="price">Total</span>
          </td>
          <td className="colsub" data-th="Subtotal">
            <span className="price">$ {total}</span>
          </td>
        </tr>
      </tbody> */}
    </>
  );
};
