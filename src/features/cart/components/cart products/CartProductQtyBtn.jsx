const CartProductQtyBtn = ({ condition, className, onClick, children }) => {
  return (
    <button
      className={className}
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
