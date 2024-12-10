import { FLEX_BETWEEN } from "constants/tailwindConstants";
import { Link } from "react-router-dom";

const ProductCardOptions = ({ product, setImageSet }) => {
  return (
    <div className={FLEX_BETWEEN}>
      <div className="flex gap-2">
        {product.images.map((imageSet, i) => {
          return (
            <div
              title={imageSet.color}
              key={i}
              className="h-5 w-5 cursor-pointer rounded-[7px]"
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
