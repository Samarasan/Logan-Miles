import React from "react";
import { useSelProduct } from "../useSelProduct.hook";
// import { ProductMetaTimer } from "./Timer";
import { getOfferPrice } from "../../../../common/Script";

interface IProps {
  name: string;
  price: number;
  offer: number;
  endDate?: string;
  minqty?: number;
  productcode: number | string | null;
}

export const ProductMeta: React.FC<IProps> = (props: IProps) => {
  // const { isPastDate } = useSelProduct();
//endDate, productcode
  const { name, price, offer,  } = props;

  return (
    <div className="ProductMeta">
      <h1 className="ProductMeta__Title u-h4">{name}</h1>

      <div className="ProductMeta__PriceList u-h4">
        <div className="new">
        <span
          className="ProductMeta__Price Price Price--highlight"
          data-money-convertible=""
        >
        <span className="pri">Price :</span>  $ {getOfferPrice(price, offer)}
        </span><br />
        {offer !== 0 && (<>
          <span
            className="ProductMeta__Price Price Price--compareAt Text--subdued"
            data-money-convertible=""
          >
          Actual Price:  $ {price}
          </span>
          </>
        )} 
</div>
<div className="offer_price">
{/* <img src={off} alt="offer" />   <span className="offericon">  {offer}  % offer </span> */}
</div>

  <div className="ProductMeta__PriceList u-h4">
    {/* <span className="ProductMeta__Price Price Price--highlight" >Price</span> */}
    {/* <span className="ProductMeta__Price Price Price--compareAt Text--subdued"> Actual Price</span> */}
  </div>

      </div>

      {/* {productcode !== null && (
        <h1 className="ProductMeta__Code u-h4">Product Code: {productcode}</h1>
      )} */}

      {/* {!isPastDate && endDate && <ProductMetaTimer endDate={endDate} />} */}
    </div>
  );
};
