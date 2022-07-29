import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useWindowSize } from "../../../../../../hook/useWindowSize.hook";
import { IProductImage } from "../../../../../../model/IProductType";

interface IProps {
  activeIndex: number;
  productImages: IProductImage[];
  next: () => void;
  prev: () => void;
}

function FlickyViewPort(props: IProps) {
  const [width] = useWindowSize();
  const { productImages, activeIndex, next, prev } = props;

  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div
      className="flickity-viewport"
      style={{ height: width, width: "auto", touchAction: "pan-y" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="flickity-slider"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {productImages?.map((item: IProductImage, index: number) => {
          return (
            <div
              className="Product__SlideItem Product__SlideItem--image Carousel__Cell is-selected"
              style={{ position: "absolute", left: `${100 * index}%` }}
              key={index}
            >
              <div
                className="AspectRatio AspectRatio--withFallback"
                style={{ paddingBottom: "100.0%", aspectRatio: "1.0" }}
              >
                <Zoom>
                  <img
                    className="Image--fadeIn lazyautosizes Image--lazyLoaded"
                    src={item.imageUrl}
                    alt="Product"
                  />
                </Zoom>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlickyViewPort;
