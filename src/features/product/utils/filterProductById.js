export const filterProductById = (products, id) => {
  if (!products || !id) return null;

  const [product] = products.filter((productDetail) => productDetail.id == id);
  return product;
};
