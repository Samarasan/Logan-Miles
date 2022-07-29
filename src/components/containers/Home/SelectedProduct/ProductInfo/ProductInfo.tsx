import React from "react";
import { useRef } from "react";
import { useSelProduct } from "../useSelProduct.hook";
import { Accordion } from "./Accordian/Accordian";
import DeliveryDetails from "./Accordian/DeliveryDetails";
import { ProductMeta } from "./ProductMeta";
import ProductVarients from "./ProductVarients";

function ProductInfo() {
  const { productDetails, updatedProduct } = useSelProduct();
  const { productname, offer, date, minqty, productcode } = productDetails;

  const myRef = useRef(null) as any;

  return (
    <div className="Product__InfoWrapper">
      <div ref={myRef} className="Product__Info " style={{ top: "-100px" }}>
        <div className="Container">
          <ProductMeta
            name={productname}
            price={(updatedProduct?.price as number) || 0}
            offer={offer}
            endDate={date}
            minqty={minqty}
            productcode={productcode}
          />
          <ProductVarients />
          <div className="accordian-group">
            <Accordion title="Check Delivery" childComp={<DeliveryDetails />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
