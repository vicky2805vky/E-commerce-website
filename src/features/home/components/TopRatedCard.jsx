import { getStars } from "features/product/utils/getStars";
import { Link } from "react-router-dom";
import { addCommaToNumber } from "utils/addCommaToNumber";
import "../stylesheets/flipCard.css";

const TopRatedCard = ({ product }) => {
  return (
    <div className="flip-card">
      <div key={product.id} className="inner-flip-card">
        <div className="flip-card-face flip-card-front">
          <img src={product.images[0].imageURLs[0]} alt={product.name} />
        </div>
        <div className="flip-card-face flip-card-back flex flex-col gap-3">
          <p className="font-bold">{product.name}</p>
          <p>
            {product.rating} {getStars(product.rating)}
          </p>
          <p className="font-bold [font-size:var(--fs-l)]">
            &#8377; {addCommaToNumber(product.price)}
          </p>
          <Link className="button-1 text-center" to={`shop/${product.id}`}>
            view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopRatedCard;
