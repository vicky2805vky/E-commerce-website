import { SLIDER_SETTINGS } from "constants/constants";
import Slider from "react-slick";

const ProductImageSliderShimmerUi = () => {
  const array = Array.from(Array(4).keys());
  return (
    <div className="image-box">
      <Slider {...SLIDER_SETTINGS}>
        {array.map((element) => {
          return (
            <div
              key={element}
              className="bg-gray-300 mx-auto rounded-lg w-6/12 shimmer"
            >
              <img
                src="/placeholder-image-500x500.svg"
                alt=""
                className="opacity-0"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductImageSliderShimmerUi;
