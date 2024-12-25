import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import useStoreData from "hooks/useStoreData";

const NavBarLogo = () => {
  const { theme } = useStoreData();

  return (
    <section className="a-i-c">
      <Link to="/" className="logo flex items-center justify-center">
        <img src={`/logo/logo-${theme}.png`} alt="S Mart logo" />
      </Link>
      <SearchBar />
    </section>
  );
};
export default NavBarLogo;
