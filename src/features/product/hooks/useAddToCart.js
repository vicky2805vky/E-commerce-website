import useStoreData from "hooks/useStoreData";

import { pushNotification } from "utils/pushNotification";
import { useDispatch } from "react-redux";
import { addCartItem, increaseProductQuantity } from "services/api/userCartApi";

const useAddToCart = () => {
  const { cartItems } = useStoreData();
  const dispatch = useDispatch();

  return (product, selectedImageIndex) => {
    const cartItemIndex = cartItems.findIndex((item) => {
      return (
        item.id === product.id &&
        item.images.color === product.images[selectedImageIndex].color
      );
    });

    if (cartItemIndex === -1) {
      const newCartItem = {
        id: product.id,
        name: product.name,
        mrp: product.mrp,
        price: product.price,
        images: product.images[selectedImageIndex],
        quantity: 1,
      };
      dispatch(addCartItem(newCartItem));
      pushNotification("Item Added To Your Cart", true);
    } else {
      if (cartItems[cartItemIndex].quantity < 5) {
        dispatch(increaseProductQuantity(cartItems[cartItemIndex]));
        pushNotification("Item Added To Your Cart", true);
      } else {
        pushNotification("Maximum Quantity in cart");
      }
    }
  };
};

export default useAddToCart;
