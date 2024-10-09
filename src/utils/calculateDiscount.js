export const calculateDiscount = (product) => {
  const discount = Math.floor(
    ((product.mrp - product.price) / product.mrp) * 100
  );
  return ` ${discount}%off`;
};
