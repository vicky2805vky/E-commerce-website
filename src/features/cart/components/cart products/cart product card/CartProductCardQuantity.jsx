import { useDispatch } from "react-redux";
import CartProductQtyBtn from "./CartProductQtyBtn";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "services/api/userCartApi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion, useAnimationControls } from "motion/react";

const CartProductCardQuantity = ({ item }) => {
  const dispatch = useDispatch();
  const control = useAnimationControls();
  return (
    <div className="flex items-center gap">
      <CartProductQtyBtn
        condition={item.quantity < 5}
        onClick={() => {
          dispatch(increaseProductQuantity(item));
        }}
        control={control}
      >
        <FaAngleUp />
      </CartProductQtyBtn>

      <motion.p
        variants={{
          jump: {
            y: [0, 5, -10, 5, 0],
          },
          initial: {
            y: 0,
          },
        }}
        initial="initial"
        animate={control}
      >
        {item.quantity}
      </motion.p>
      <CartProductQtyBtn
        condition={item.quantity > 1}
        onClick={() => {
          dispatch(decreaseProductQuantity(item));
        }}
        control={control}
      >
        <FaAngleDown />
      </CartProductQtyBtn>
    </div>
  );
};

export default CartProductCardQuantity;
