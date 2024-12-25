import HomePageBrandSlider from "./components/HomePageBrandSlider";
import HomePageCategories from "./components/HomePageCategories";
import HomePageFooter from "./components/HomePageFooter";
import HomePageSlider from "./components/HomePageSlider";
import HomePageTopRated from "./components/HomePageTopRated";

const HomePage = () => {
  return (
    <div>
      <HomePageSlider />
      <HomePageCategories />
      <HomePageTopRated />
      <HomePageBrandSlider />
      <HomePageFooter />
    </div>
  );
};

export default HomePage;
