export const findProductById = (products, productId) => {
  if (!products || !productId) return null;

  const [product] = products.filter(
    (productDetail) => productDetail.id == productId
  );
  return product;
};

export const removeProductById = (products, productId) => {
  if (!products || !productId) return null;

  const newProducts = products.filter(
    (productDetail) => productDetail.id !== productId
  );
  return newProducts;
};
