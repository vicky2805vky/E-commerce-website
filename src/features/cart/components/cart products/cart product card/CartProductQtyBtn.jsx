const CartProductQtyBtn = ({ condition, onClick, children, control }) => {
  return (
    <button
      className={"button-4 flex"}
      onClick={() => {
        condition && onClick();
        control.start("jump");
      }}
      disabled={!condition}
    >
      {children}
    </button>
  );
};

export default CartProductQtyBtn;
