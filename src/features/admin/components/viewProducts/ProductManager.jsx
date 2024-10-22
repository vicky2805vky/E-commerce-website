import { FLEX_CENTER, FLEX_CENTER_COL } from "constants/tailwindConstants";
import usePopup from "hooks/usePopup";
import useReduxData from "hooks/useReduxData";
import { FaPlus, FaRegEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "services/api/productsApi";

const ProductManager = () => {
  const { products } = useReduxData();
  const dispatch = useDispatch();
  const popup = usePopup();

  const rowStyle =
    "cart-product-card flex justify-between items-center w-11/12 [&_*]:flex-1 p-3";

  const buttonStyle =
    " w-fit mx-auto p-2 rounded-full cursor-pointer " + FLEX_CENTER;

  return (
    <div className={"flex flex-col items-center w-full gap-0 h-full "}>
      <Link to={"add"} className={buttonStyle + " bg-green-400 mb-3"}>
        <FaPlus />
      </Link>
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
                <div
                  className={"bg-red-400" + buttonStyle}
                  onClick={() => {
                    const popupFn = () => {
                      dispatch(deleteProduct(product));
                    };
                    popup(popupFn);
                  }}
                >
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

export default ProductManager;
