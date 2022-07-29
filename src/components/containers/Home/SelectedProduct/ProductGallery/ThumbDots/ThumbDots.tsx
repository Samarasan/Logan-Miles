import React from "react";
import { onClick } from "../../../../../../constant/Types";
import { IProductImage } from "../../../../../../model/IProductType";

interface IProps {
  activeIndex: number;
  onThumbDotsClick: (activeIndex: number) => void;
  productImages: IProductImage[];
}

export const ThumbDots: React.FC<IProps> = (props: IProps) => {
  const { activeIndex, onThumbDotsClick, productImages } = props;

  console.log(productImages,"productImages");
  

  const handleOnClick = (e: onClick, index: number) => {
    e.preventDefault();
    onThumbDotsClick(index);
  };

  return (
    <div className="Product__SlideshowNav Product__SlideshowNav--dots">
      <div className="Product__SlideshowNavScroller">
        {productImages?.map((item: IProductImage, index: number) => {
          const activeclass = activeIndex === index && "is-selected";
          return (
            <span
              key={index}
              className={`Product__SlideshowNavDot ${activeclass}`}
              onClick={(e) => handleOnClick(e, index)}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
