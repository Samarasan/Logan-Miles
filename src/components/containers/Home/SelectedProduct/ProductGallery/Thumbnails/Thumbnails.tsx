import React from "react";
import { IProductImage } from "../../../../../../model/IProductType";

interface IProps {
  activeIndex: number;
  onThumbnailClick: (activeIndex: number) => void;
  productImages: IProductImage[];
}

export const Thumbnails: React.FC<IProps> = (props: IProps) => {
  const { activeIndex, onThumbnailClick, productImages } = props;

  return (
    <div
      className="Product__SlideshowNav Product__SlideshowNav--thumbnails"
      style={{ top: "60px" }}
    >
      <div className="Product__SlideshowNavScroller">
        {productImages?.map((item: IProductImage, index: number) => {
          const activeClassName = activeIndex === index ? "is-selected" : "";
          return (
            <ul>
            <li
              key={index}
              className={`Product__SlideshowNavImage AspectRatio ${activeClassName}`}
              style={{ aspectRatio: "1.0" }}
              onClick={(event: any) =>
                onThumbnailClick((event.target.value = index))
              }
            >
              <img src={item.imageUrl} alt="product" />
            </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
