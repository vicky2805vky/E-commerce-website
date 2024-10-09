import { FLEX_CENTER, FLEX_CENTER_COL } from "constants/tailwindConstants";
import useReduxData from "hooks/useReduxData";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ViewProducts = () => {
  const { products } = useReduxData();

  const rowStyle =
    "cart-product-card flex justify-between items-center w-11/12 [&_*]:flex-1 p-3";

  const buttonStyle =
    " w-fit mx-auto p-2 rounded-full cursor-pointer " + FLEX_CENTER;

  return (
    <div className={"flex flex-col items-center w-full gap-0 h-full "}>
      <div className={rowStyle}>
        <p>name</p>
        <p>category</p>
        <p>edit</p>
        <p>delete</p>
      </div>
      <div
        className={"flex flex-col items-center w-full gap-0 overflow-scroll"}
      >
        {products.map((product, i) => {
          return (
            <div key={i} className={rowStyle}>
              <p>{product.name}</p>
              <p>{product.category}</p>
              <div>
                <Link
                  to={`${product.id}/edit`}
                  className={"bg-blue-400" + buttonStyle}
                >
                  <FaRegEdit />
                </Link>
              </div>
              <div>
                <div className={"bg-red-400" + buttonStyle}>
                  <FaTrash />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewProducts;
