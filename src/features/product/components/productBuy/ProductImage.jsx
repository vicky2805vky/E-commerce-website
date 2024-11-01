import Slider from "react-slick";
import { FaCartShopping, FaMoneyBillWave } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../stylesheets/ProductImage.css";

import useAddToCart from "../../hooks/useAddToCart";
import useStoreData from "hooks/useStoreData";
import { useNavigate } from "react-router-dom";
import { pushNotification } from "utils/pushNotification";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProductImage = ({ product, currentImageIndex }) => {
  const addToCart = useAddToCart();
  const { isUserLoggedIn } = useStoreData();
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    className: "slider",
  };

  return (
    <div className="image flex justify-center items-center f-column">
      <div className="image-box">
        <Slider {...settings}>
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
      </div>
      <div className="button-box a-i-c">
        <button
          className="button-3"
          onClick={() => {
            if (!isUserLoggedIn) {
              navigate("/profile");
              pushNotification("please login to continue");
              return;
            }
            addToCart(product, currentImageIndex);
          }}
        >
          Add to cart&nbsp;{<FaCartShopping />}
        </button>
        <button className="button-3">buy now&nbsp;{<FaMoneyBillWave />}</button>
      </div>
    </div>
  );
};

export default ProductImage;
