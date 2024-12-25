import {
  TYPOGRAPHY_2XL,
  TYPOGRAPHY_LG,
  TYPOGRAPHY_XL,
} from "constants/tailwindConstants";
import HomePageCategoryCard from "./HomePageCategoryCard";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "constants/constants";

const categoryCardContents = [
  {
    image: "/homePage/mobile2.png",
    title: "Mobiles & Tablets",
    description: "Explore the latest smartphones, tablets, and accessories.",
  },
  {
    image: "/homePage/laptop2.png",
    title: "Laptops & Computers",
    description: "Discover powerful laptops, desktops, and more.",
  },
  {
    image: "/homePage/watch.png",
    title: "Smart Wearables",
    description: "Smartwatches, fitness trackers, and other wearables.",
  },
  {
    image: "/homePage/charger.png",
    title: "Mobile Accessories",
    description: "Shop chargers, cases, screen protectors, and more.",
  },
  {
    image: "/homePage/mouse.png",
    title: "Computer Accessories",
    description: "Enhance your PC setup with keyboards, mice, and more.",
  },
  {
    image: "/homePage/speaker.png",
    title: "Bluetooth Speakers",
    description: "Portable speakers with rich sound for music lovers.",
  },
];

const HomePageCategories = () => {
  return (
    <div>
      <h2 className={TYPOGRAPHY_LG + "my-5"}>Explore Categories</h2>
      <div className="hidden grid-cols-[_repeat(auto-fill,minmax(300px,1fr))] gap-5 md:grid">
        {categoryCardContents.map((content, i) => {
          return <HomePageCategoryCard {...content} key={i} />;
        })}
      </div>
      <Slider
        {...SLIDER_SETTINGS}
        slidesToShow={1}
        dots={false}
        className="md:hidden"
      >
        {categoryCardContents.map((content, i) => {
          return <HomePageCategoryCard {...content} key={i} />;
        })}
      </Slider>
    </div>
  );
};

export default HomePageCategories;
