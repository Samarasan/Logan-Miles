import React from "react";
import { ProductDescription } from "../ProductInfo/ProductDescription";
import { useSelProduct } from "../useSelProduct.hook";
import MainImage from "./MainImage/MainImage";
import { ThumbDots } from "./ThumbDots/ThumbDots";
import { Thumbnails } from "./Thumbnails/Thumbnails";

function ProductGallery() {
  const {
    images,
    activeIndex,
    activeImage,
    selectedImageUrl,
    handleDotsClick,
    next,
    prev,
  } = useSelProduct();

  React.useEffect(() => {
    selectedImageUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div>
      <div className="Product__Gallery Product__Gallery--stack Product__Gallery--withThumbnails">
        {/* <ActionButtons /> */}
        {/* <Thumbnails
          activeIndex={activeIndex}
          onThumbnailClick={handleDotsClick}
          productImages={images}
        /> */}

        <ThumbDots
          activeIndex={activeIndex}
          onThumbDotsClick={handleDotsClick}
          productImages={images}
        />
        <MainImage
          image={activeImage}
          activeIndex={activeIndex}
          onThumbDotsClick={handleDotsClick}
          productImages={images}
          next={next}
          prev={prev}
        />
          <div className="thumnail-view">
        <Thumbnails
          activeIndex={activeIndex}
          onThumbnailClick={handleDotsClick}
          productImages={images}
        />
        </div>
      </div>
  
     
      <ProductDescription classname="hidden-phone hidden-tablet" />
    </div>
  );
}

export default ProductGallery;
