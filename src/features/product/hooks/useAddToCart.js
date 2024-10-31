import useReduxData from "hooks/useReduxData";

import { pushNotification } from "utils/pushNotification";
import { useDispatch } from "react-redux";
import {
  postCartProduct,
  incrementCartProduct,
} from "services/api/userCartApi";

const useAddToCart = () => {
  const { cartItems } = useReduxData();
  const dispatch = useDispatch();

  return (product, imageSet) => {
    const itemIndexInCart = cartItems.findIndex((item) => {
      return (
        item.id === product.id &&
        item.images.color === product.images[imageSet].color
      );
    });

    if (itemIndexInCart === -1) {
      const productToAdd = {
        id: product.id,
        name: product.name,
        mrp: product.mrp,
        price: product.price,
        images: product.images[imageSet],
        quantity: 1,
      };
      dispatch(postCartProduct(productToAdd));
      pushNotification("Item Added To Your Cart", true);
    } else {
      if (cartItems[itemIndexInCart].quantity < 5) {
        dispatch(incrementCartProduct(cartItems[itemIndexInCart]));
        pushNotification("Item Added To Your Cart", true);
      } else {
        pushNotification("Maximum Quantity in cart");
      }
    }
  };
};

export default useAddToCart;
