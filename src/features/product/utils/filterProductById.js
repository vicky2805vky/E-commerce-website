export const filterProductById = (products, id) => {
  if (!products || !id) return null;

  const [product] = products.filter((productDetail) => productDetail.id == id);
  return product;
};

export const removeProductById = (products, id) => {
  if (!products || !id) return null;

  const newProducts = products.filter(
    (productDetail) => productDetail.id !== id
  );
  return newProducts;
};
