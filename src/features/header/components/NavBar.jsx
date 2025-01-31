import { FaCartShopping, FaUser } from "react-icons/fa6";

import NavigationLink from "./navLink/NavigationLink";
import ToggleTheme from "./navLink/ToggleTheme";

import useStoreData from "hooks/useStoreData";
import NavBarLogo from "./navLink/NavBarLogo";
import { GiShoppingBag } from "react-icons/gi";

const NavBar = () => {
  const { isUserLoggedIn } = useStoreData();

  return (
    <nav className="a-i-c nav">
      <NavBarLogo />
      <ul className="nav-ul">
        <li>
          <NavigationLink
            destination={"/shop"}
            icon={<GiShoppingBag />}
            label={"shop"}
          />
        </li>
        <li>
          <NavigationLink
            destination={"/profile"}
            icon={<FaUser />}
            label={isUserLoggedIn ? "Account" : "login"}
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
