import { FLEX_CENTER, TYPOGRAPHY_LG } from "constants/tailwindConstants";

const TopRatedShimmerUi = () => {
  const array = Array.from(Array(6).keys());
  return (
    <div>
      <h2 className={TYPOGRAPHY_LG + "my-5"}>Top Rated</h2>
      <div className="grid grid-flow-col gap-3 overflow-x-scroll">
        {array.map((number) => (
          <div
            key={number}
            className={`flip-card rounded-lg [background:var(--secondary-bg-gradient)] ${FLEX_CENTER}`}
          >
            <div className="shimmer mx-auto w-9/12 rounded-lg bg-gray-300">
              <img
                src="/placeholder-image-500x500.svg"
                alt=""
                className="opacity-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedShimmerUi;
