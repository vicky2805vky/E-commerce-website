import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import useStoreData from "hooks/useStoreData";

const NavBarLogo = () => {
  const { theme } = useStoreData();

  return (
    <section className="a-i-c ">
      <Link to="/" className="flex justify-center items-center logo">
        <img
          src={new URL(`../../images/logo-${theme}.png`, import.meta.url)}
          alt="S-Mart"
        />
      </Link>
      <SearchBar />
    </section>
  );
};
export default NavBarLogo;
