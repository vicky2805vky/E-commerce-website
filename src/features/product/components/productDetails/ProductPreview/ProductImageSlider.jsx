import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { SLIDER_SETTINGS } from "constants/constants";

const ProductImageSlider = ({ product, currentImageIndex }) => {
  return (
    <Slider {...SLIDER_SETTINGS}>
      {product.images[currentImageIndex]?.imageURLs?.map((imageURL, i) => {
        return (
          <PhotoProvider key={i}>
            <PhotoView src={imageURL}>
              <img
                className="cursor-zoom-in !w-full"
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
