import { SLIDER_SETTINGS } from "constants/constants";
import { FLEX_CENTER_COL } from "constants/tailwindConstants";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const bannerContents = [
  {
    image: "mobile",
    alt: "Samsung S24 Ultra",
    title: "Latest smartphones at unbeatable prices.",
    subTitle:
      "Explore cutting-edge features and sleek designs starting at just ₹7,999.",
  },
  {
    image: "laptop",
    alt: "dell G15",
    title: "Power Meets Portability – Laptops for Every Need!",
    subTitle:
      "Find the perfect laptop for work, study, or gaming. Prices starting at just ₹25,999.",
  },
  {
    image: "winter",
    alt: 'a small poster with "winter sale" written on it',
    title: "Winter Sale is Here – Chill Deals, Hot Savings!",
    subTitle:
      "Enjoy up to 50% off on electronics, fashion, and more. Don’t miss these limited-time offers!",
  },
];

const HomePageSlider = () => {
  return (
    <Slider {...SLIDER_SETTINGS} dots={false} arrows={false}>
      {bannerContents.map((content, i) => {
        return (
          <div
            key={i}
            className="!grid w-full grid-cols-2 place-content-center rounded-3xl bg-opacity-50 p-3 [background:var(--primary-bg-gradient)] [height:_clamp(180px,30vw,400px)]"
          >
            <div className="mx-auto">
              <img
                src={`/homePage/${content.image}.png`}
                alt={content.alt}
                className="[width:_clamp(150px,30vw,350px)]"
              />
            </div>
            <div className={`text-center ${FLEX_CENTER_COL} gap-5`}>
              <p className="font-semibold [font-size:_clamp(14px,3vw,25px)]">
                {content.title}
              </p>
              <p className="hidden text-base md:block">{content.subTitle}</p>
              <Link to={"/shop"} className="button-1">
                shop now
              </Link>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HomePageSlider;
