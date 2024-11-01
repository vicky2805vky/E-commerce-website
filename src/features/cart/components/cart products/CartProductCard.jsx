import { useDispatch } from "react-redux";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import {
  decreaseProductQuantity,
  deleteCartProduct,
  increaseProductQuantity,
} from "services/api/userCartApi";

import CartProductQtyBtn from "./CartProductQtyBtn";

import "../../stylesheets/CartProductCard.css";

import { pushNotification } from "utils/pushNotification";

const CartProductCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="a-i-c cart-product-card gap">
      <div>
        <img src={item.images.imageURLs[0]} alt={item.name} />
        <p>{item.name}</p>
      </div>
      <div className="flex items-center gap">
        <CartProductQtyBtn
          condition={item.quantity < 5}
          onClick={() => {
            dispatch(increaseProductQuantity(item));
          }}
          className={"button-4 flex"}
        >
          <FaAngleUp />
        </CartProductQtyBtn>

        <label>{item.quantity}</label>
        <CartProductQtyBtn
          condition={item.quantity > 1}
          onClick={() => {
            dispatch(decreaseProductQuantity(item));
          }}
          className={"button-4 flex"}
        >
          <FaAngleDown />
        </CartProductQtyBtn>
      </div>
      <div>&#8377;{item.price * item.quantity}</div>
      <div className="flex gap">
        <button className="button button-1">place&nbsp;order</button>
        <button
          className="button-1"
          onClick={() => {
            dispatch(deleteCartProduct(item));
            pushNotification("Item Removed From Your Cart", true);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
