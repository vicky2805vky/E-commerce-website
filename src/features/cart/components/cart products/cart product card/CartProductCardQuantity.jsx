import { useDispatch } from "react-redux";
import CartProductQtyBtn from "./CartProductQtyBtn";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "services/api/userCartApi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CartProductCardQuantity = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap">
      <CartProductQtyBtn
        condition={item.quantity < 5}
        onClick={() => {
          dispatch(increaseProductQuantity(item));
        }}
      >
        <FaAngleUp />
      </CartProductQtyBtn>

      <label>{item.quantity}</label>
      <CartProductQtyBtn
        condition={item.quantity > 1}
        onClick={() => {
          dispatch(decreaseProductQuantity(item));
        }}
      >
        <FaAngleDown />
      </CartProductQtyBtn>
    </div>
  );
};

export default CartProductCardQuantity;
