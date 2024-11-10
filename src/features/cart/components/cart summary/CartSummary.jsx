import useCartCalculation from "../../hooks/useCartCalculation";

const CartSummary = () => {
  const calculations = useCartCalculation();
  return (
    <div className="cart-summary-container mb-5">
      <p>CART SUMMARY</p>
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>
              &#8377;
              {calculations.subTotal}
            </td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>
              &#8377;
              {calculations.discount}
            </td>
          </tr>
          <tr>
            <td>delivery charges</td>
            <td>&#8377;{calculations.delivery}</td>
          </tr>
          <tr>
            <td>total</td>
            <td>&#8377;{calculations.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartSummary;
