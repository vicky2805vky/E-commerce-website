import { calculateDiscount } from "utils/calculateDiscount";

const PriceDetails = ({ product }) => {
  return (
    <div className="a-i-c gap">
      <p className="actual-price">&#8377;{product.price}</p>
      <s className="fake-price">&#8377;{product.mrp}</s>
      <p className="price-offer">{calculateDiscount(product)}</p>
    </div>
  );
};

export default PriceDetails;
