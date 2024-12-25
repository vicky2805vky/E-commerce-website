import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { SLIDER_SETTINGS } from "constants/constants";

const ProductImageSlider = ({ product, currentImageIndex }) => {
  return (
    <Slider {...SLIDER_SETTINGS} className="slider">
      {product.images[currentImageIndex]?.imageURLs?.map((imageURL, i) => {
        return (
          <PhotoProvider key={i}>
            <PhotoView src={imageURL}>
              <img
                className="!w-full cursor-zoom-in"
                src={imageURL}
                alt={product.name}
              />
            </PhotoView>
          </PhotoProvider>
        );
      })}
    </Slider>
  );
};

export default ProductImageSlider;
