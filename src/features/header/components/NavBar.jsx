import { FaCartShopping, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import NavigationLink from "./navLink/NavigationLink";
import ToggleTheme from "./navLink/ToggleTheme";

import useReduxData from "hooks/useReduxData";

const NavBar = () => {
  const { isLoggedIn, theme } = useReduxData();

  return (
    <nav className="a-i-c">
      <section className="a-i-c">
        <Link to="/" className="flex justify-center items-center logo">
          <img
            src={new URL(`../images/logo-${theme}.png`, import.meta.url)}
            alt="S-Mart"
          />
        </Link>
        <SearchBar />
      </section>
      <ul>
        <li>
          <NavigationLink
            destination={"/profile"}
            icon={<FaUser />}
            label={isLoggedIn ? "Account" : "login"}
          />
        </li>
        <li>
          <NavigationLink
            destination={"/cart"}
            className={"cart-icon"}
            icon={<FaCartShopping />}
            label={"cart"}
          />
        </li>

        <li className="theme-switch">
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
