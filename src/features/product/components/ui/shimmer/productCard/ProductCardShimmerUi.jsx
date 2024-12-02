import ProductCardDetailsShimmerUi from "./ProductCardDetailsShimmerUi";
import ProductCardImageShimmerUi from "./ProductCardImageShimmerUi";

const ProductCardShimmerUi = () => {
  const array = Array.from(Array(6).keys());
  return (
    <main>
      {array.map((element) => {
        return (
          <section
            key={element}
            className="[background:var(--secondary-bg-gradient)] p-10 rounded-3xl flex flex-col gap-10 scale-90 hover:scale-95 product-card"
            style={{
              transition: "transform var(--transition)",
            }}
          >
            <ProductCardImageShimmerUi />
            <ProductCardDetailsShimmerUi />
          </section>
        );
      })}
    </main>
  );
};

export default ProductCardShimmerUi;
