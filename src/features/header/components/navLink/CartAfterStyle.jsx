import useReduxData from "hooks/useReduxData";

const CartAfterStyle = () => {
  const { cartQuantity } = useReduxData();
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .cart-icon:after {
        ${cartQuantity != 0 ? `content: "${cartQuantity}"` : ""}
      }`,
      }}
    ></style>
  );
};

export default CartAfterStyle;
