import { TYPOGRAPHY_LG } from "constants/tailwindConstants";
import useStoreData from "hooks/useStoreData";
import TopRatedCard from "./TopRatedCard";
import TopRatedShimmerUi from "./shimmerUi/TopRatedShimmerUi";

const HomePageTopRated = () => {
  const { products } = useStoreData();
  if (!products) return <TopRatedShimmerUi />;
  const topRatedProducts = products.filter((product) => product.rating > 4.5);

  return (
    <div>
      <h2 className={TYPOGRAPHY_LG + "my-5"}>Top Rated</h2>
      <div className="grid grid-flow-col gap-3 overflow-x-scroll">
        {topRatedProducts.map((product, i) => (
          <TopRatedCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePageTopRated;
