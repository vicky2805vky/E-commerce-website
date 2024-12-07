import { useDispatch } from "react-redux";
import { deleteCartProduct } from "services/api/userCartApi";

const CartProductCardButtons = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap [&>*]:flex-1">
      <button className="button button-1">place&nbsp;order</button>
      <button
        className="button-1"
        onClick={() => {
          dispatch(deleteCartProduct(item));
        }}
      >
        remove
      </button>
    </div>
  );
};
export default CartProductCardButtons;
