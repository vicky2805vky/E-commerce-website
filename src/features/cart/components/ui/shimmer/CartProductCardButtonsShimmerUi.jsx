const CartProductCardButtons = () => {
  return (
    <div className="flex gap">
      <button className="[font-size:var(--fs-s)] text-[transparent] px-[2em] rounded shimmer">
        place order
      </button>
      <button className="[font-size:var(--fs-s)] text-[transparent] py-[1em] px-[2em] rounded shimmer">
        remove
      </button>
    </div>
  );
};

export default CartProductCardButtons;
