import { addCommaToNumber } from "utils/addCommaToNumber";
import { calculateDiscount } from "utils/calculateDiscount";

const PriceDetails = ({ product }) => {
  return (
    <div className="a-i-c gap">
      <p className="actual-price">&#8377;{addCommaToNumber(product.price)}</p>
      <s className="fake-price">&#8377;{addCommaToNumber(product.mrp)}</s>
      <p className="price-offer">{calculateDiscount(product)}</p>
    </div>
  );
};

export default PriceDetails;
