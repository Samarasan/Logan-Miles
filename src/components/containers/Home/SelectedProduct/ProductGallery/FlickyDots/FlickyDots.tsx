import React from "react";
import { onClick } from "../../../../../../constant/Types";
import { IProductImage } from "../../../../../../model/IProductType";

interface IProps {
  activeIndex?: number;
  onThumbDotsClick: (activeIndex: number) => void;
  images: IProductImage[];
}

function FlickyDots(props: IProps) {
  const { activeIndex, images, onThumbDotsClick } = props;

  const handleOnClick = (e: onClick, index: number) => {
    e.preventDefault();
    onThumbDotsClick(index);
  };

  return (
    <ol className="flickity-page-dots">
      {images?.map((image: IProductImage, index: number) => (
        <li
          key={index}
          className={`${activeIndex === index ? "dot is-selected" : "dot"}`}
          onClick={(e) => handleOnClick(e, index)}
        ></li>
      ))}
    </ol>
  );
}

export default FlickyDots;
