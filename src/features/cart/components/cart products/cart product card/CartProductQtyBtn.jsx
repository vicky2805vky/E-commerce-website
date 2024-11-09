const CartProductQtyBtn = ({ condition, onClick, children }) => {
  return (
    <button
      className={"button-4 flex"}
      onClick={() => {
        condition && onClick();
      }}
      disabled={!condition}
    >
      {children}
    </button>
  );
};

export default CartProductQtyBtn;
