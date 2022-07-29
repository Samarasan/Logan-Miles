import React from "react";
// import { QuantitySelector } from "../../../common/QuantitySelector/QuantitySelector";
import { useSelProduct } from "../useSelProduct.hook";
 import size from "../../../../../assets/image/Size.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import "../SelectedProduct.scss";
import { onClick } from "../../../../../constant/Types";
import { IProductSepc, IProductSize } from "../../../../../model/IProductType";
import { ModalEnum } from "../../../../stateContainers/SelectedProduct/Types";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";
import { WishList } from "../../../../common/Icons";
function ProductVarients() {
  const {
    productDetails,
    buttonName,
    // count,
    // handleIncrement,
    // handleDecrement,
    handleSizeChange,
    handleButtonClick,
    FavIconOnclick,
    FavIconName,
    disableFav,
    modalHandleClick,
  } = useSelProduct();

  const { productcolor, productSize, sizechart, productSpecs,descpription, descpription1 } = productDetails;
  const data = descpription1?.split(",") || null;
  const initialId =
    productSize && productSize?.length > 0
      ? productDetails?.productSize[0].sid
      : 0;

  const [id, setId] = React.useState(initialId);

  const ProductColor = () => {
    const pdtColor = productcolor?.includes(",")
      ? productcolor?.split(",")
      : productcolor?.split("-");

    return (
      <div className="ProductForm__Variants">
        <div className="ProductForm__Option ProductForm__Option--labelled">
          <Accordion>
            <AccordionSummary
             style={{
              color: "white",
              backgroundColor: "black",
            }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4 className="product-sizeFitDescTitle">Color:</h4>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                {pdtColor?.map((item: string, index: number) => {
                  return (
                    <li
                      className="HorizontalList__Item"
                      style={{
                        borderLeft: `4px solid ${item.toLowerCase().trim()}`,
                      }}
                      key={index}
                    >
                      <input
                        id="option-product-template-0-0"
                        className="SizeSwatch__Radio"
                        type="radio"
                        name="option-0"
                        readOnly
                        data-option-position="1"
                      />
                      <label
                        htmlFor="option-product-template-0-0"
                        className="SizeSwatch u-h4"
                      >
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  };

  const Description = () => {
    return (
      <>
          <div className="ProductForm__Variants">
            <div className="ProductForm__Option ProductForm__Option--labelled">
              <Accordion>
                <AccordionSummary
                 style={{
                  color: "white",
                  backgroundColor: "black",
                }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4 className="product-sizeFitDescTitle">Description:</h4>
                </AccordionSummary>
                <AccordionDetails>
            <ul className="Product__Desc">
              <li>{descpription && descpription}</li>
              {/* <li>{fabric && fabric}</li> */}
            </ul>
            <br />
            <ul>
              {data?.map((item: string, index: number) => (
                <li
                  className="HorizontalList__Item SizeSwatch u-h6 pro-dec-active"
                  key={index}
                >
                  {/* {item} */}
                </li>
              ))}
            </ul>
          </AccordionDetails>
               </Accordion>
               </div>
               </div>
      </>
    );
  };


  const ProductSize = () => {
    const handleSizeClick = (e: onClick, item: IProductSize) => {
      e.preventDefault();
      setId(item.sid);
      handleSizeChange(item.psize);
    };

    return (
      <React.Fragment>
        {productSize?.length > 0 && (
          <div className="ProductForm__Variants">
            <div className="ProductForm__Option ProductForm__Option--labelled">
              <Accordion>
                <AccordionSummary
                 style={{
                  color: "white",
                  backgroundColor: "black",
                }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4 className="product-sizeFitDescTitle">Size:</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">
                    {productSize?.map((item: IProductSize, index: number) => {
                      return (
                        <li
                          key={index}
                          className="HorizontalList__Item"
                          onClick={(e: onClick) => {
                            handleSizeClick(e, item);
                          }}
                        >
                          <input
                            id={item.psize}
                            className="SizeSwatch__Radio"
                            type="radio"
                            name={`option-${index}`}
                            value={item.psize}
                            readOnly
                            checked={item.sid === id ? true : false}
                          />
                          <label
                            htmlFor={item.psize}
                            className="SizeSwatch u-h6"
                          >
                            {item.psize}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  const specs =
    productSpecs?.map((item: IProductSepc) => item.specification) || [];

  function SpecificationDetails() {
    return (
      <>
        {specs.length > 0 &&
          specs?.map((item: any, index: number) => {
            const ac = item.split(":");
            return (
              <div className="product-row" key={index}>
                <div className="product-rowKey">{ac[0]}</div>
                <div className="product-rowValue">{ac[1]}</div>
              </div>
            );
          })}
      </>
    );
  }

  return (
    <div className="singleproductwrapper">
    <form className="ProductForm u-h4">
      {sizechart && (
        <div
          className="sizing-chart-link"
          onClick={(e: onClick) => {
            modalHandleClick(e, ModalEnum.Size);
          }}
        >
          <a href={sizechart} target="_blank" rel="noreferrer">
            <img className="size_icon" src={size} alt="SizeChart" />
            <span className="size_text u-h4">Size Chart</span>
          </a>
        </div>
      )}
      <Description />
      <ProductSize />
      <ProductColor />
      <div className="ProductForm__Variants">
        <div className="ProductForm__Option ProductForm__Option--labelled">
          {/* <span className="ProductForm__Label">Quantity:</span>
          <QuantitySelector
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          /> */}
        </div>
      </div>

      <div className="product-sizeFitDesc">
        <Accordion
        >
          <AccordionSummary
           style={{
            color: "white",
            backgroundColor: "black",
          }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h4 className="product-sizeFitDescTitle">Specifications:</h4>
          </AccordionSummary>
          <AccordionDetails  style={{
            marginTop:"10px"
          }}>
            <div className="product-tableContainer">
              {SpecificationDetails()}
            </div>
          </AccordionDetails>
        </Accordion>
        {/* <h4 className="product-sizeFitDescTitle">Specifications:</h4>
        <div className="product-tableContainer">{SpecificationDetails()}</div>  */}
      </div>

      <TextButton
        items={buttonName}
        isprimary={true}
        className="Button--full"
        onClick={handleButtonClick}
      />

      <button
        className="ProductWishListButton"
        onClick={FavIconOnclick}
        disabled={disableFav}
      >
        <WishList name="ProductWishListIcon" fill={disableFav} />
        <span className="u-h4">{FavIconName}</span>
      </button>
    </form>
    </div>
  );
}




export default ProductVarients;
