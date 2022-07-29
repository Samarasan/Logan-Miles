import React from "react";
import "./ProductDesc.scss";

interface IProps {
  name: string;
  price: number;
  offer: number;
  textAlign?: string;
}

export const ProductDesc = (props: IProps) => {
  const { name, price, offer, textAlign } = props;
  const offerPrice = price * (offer / 100) + price;

  const align = textAlign ? textAlign : "ProductItem__Info--center";

  const classname = `ProductItem__Info ${align} u-h3`;

  return (
    <div className={classname}>
      <h2 className="ProductItem__Title info-text">{name}</h2>
      <div className="ProductItem__PriceList  info-text">
        <span
          className="ProductItem__Price Price Price--highlight"
          data-money-convertible=""
        >
          {price}
        </span>
        <span
          className="ProductItem__Price Price Price--compareAt Text--subdued"
          data-money-convertible=""
        >
          {offerPrice}
        </span>
      </div>
    </div>
  );
};
