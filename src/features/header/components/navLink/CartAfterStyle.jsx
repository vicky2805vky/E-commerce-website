import useStoreData from "hooks/useStoreData";

const CartAfterStyle = () => {
  const { cartQuantity } = useStoreData();
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
