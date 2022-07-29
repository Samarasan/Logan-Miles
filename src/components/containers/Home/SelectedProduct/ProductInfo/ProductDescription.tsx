import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelProduct } from "../useSelProduct.hook";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { monthNames } from "../../../../../constant/Variables";
import { DeliveryBusIcon } from "../../../../common/Icons";
interface IProps {
  classname: string;
}

export const ProductDescription: React.FC<IProps> = (props: IProps) => {
  const { classname } = props;
  const { productDetails, selectedProduct } = useSelProduct();
  const { descpription, descpription1, fabric } = productDetails;
  const data = descpription1?.split(",") || null;
  const { deliveryTime, date } = productDetails;
  const time = deliveryTime ? deliveryTime : "3-21";
  const currentDate = new Date();
  let someDate =
    selectedProduct.from === "preorder" ? new Date(date) : new Date();

  var numberOfDaysToAdd = parseInt(deliveryTime);
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

  const minExpectedDate = `${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getDate()}`;

  const maxExpectedDate = `${
    monthNames[someDate.getMonth()]
  } ${someDate.getDate()}`;

  const Description = () => {
    return (
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography   sx={{
                background: "black",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "1px",
                border: "1px solid white",
                padding: "9px 10px"
              }}>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="Product__Desc">
              <li>{descpription && descpription}</li>
              <li>{fabric && fabric}</li>
            </ul>
            <br />
            <ul>
              {data?.map((item: string, index: number) => (
                <li
                  className="HorizontalList__Item SizeSwatch u-h6 pro-dec-active"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  const Delivery = () => {
    return (
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                background: "black",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "1px",
                border: "1px solid white",
                padding: "9px 22px",
              }}
            >
              Delivery
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ padding: "20px  0px" }}>
              <div>
                {` Products are generally dispatched in ${time} days depending upon the
          product you have ordered.`}
              </div>
              <div className="Product__Delivery u-h41">
                <span className="Product__Delivery__Bus">
                  <DeliveryBusIcon />
                </span>
                Delivered between {minExpectedDate} - {maxExpectedDate}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };

  const layoutData = [
    // {
    //   head: "Description",
    //   component: <Description />,
    // },
    {
      head: "Delivery",
      component: <Delivery />,
    },
  ];

  return (
    <React.Fragment>
      {layoutData?.map((item: any, index: number) => (
        <div
          key={index}
          id="tsp_tab_products"
          className={`Container product-collateral clearfix ${classname}`}
        >
          <ul className="nav-tabs u-h6">
            {/* <li className="active">
              <span data-toggle="tab">{item.head}</span>
            </li> */}
          </ul>
          <div className="tab-content">
            <section className="active">{item.component}</section>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
