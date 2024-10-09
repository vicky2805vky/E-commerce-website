import useReduxData from "hooks/useReduxData";

const useCartCalculation = () => {
  const { cartItems } = useReduxData();

  const subTotal =
    cartItems.length &&
    cartItems.reduce((total, item) => (total += item.mrp * item.quantity), 0);

  const discount =
    cartItems.length &&
    cartItems.reduce(
      (total, item) => (total += (item.price - item.mrp) * item.quantity),
      0
    );

  const delivery = cartItems.length * 100;

  return {
    subTotal: subTotal,
    discount: -discount,
    delivery: delivery,
    total: subTotal + discount + delivery,
  };
};

export default useCartCalculation;
