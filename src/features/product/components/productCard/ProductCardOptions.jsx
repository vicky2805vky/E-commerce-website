import { FLEX_BETWEEN } from "constants/tailwindConstants";
import { Link } from "react-router-dom";

const ProductCardOptions = ({ product, setImageSet }) => {
  return (
    <div className={FLEX_BETWEEN}>
      <div className="flex gap-2 ">
        {product.images.map((imageSet, i) => {
          return (
            <div
              key={i}
              className="w-5 h-5  rounded-[7px] cursor-pointer"
              style={{ background: imageSet.code }}
              onMouseOver={() => {
                setImageSet(i);
              }}
            ></div>
          );
        })}
      </div>
      <Link to={`product/${product.id}`} className="button-1">
        view
      </Link>
    </div>
  );
};
export default ProductCardOptions;
