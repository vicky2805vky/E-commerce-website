import CartAfterStyle from "./components/navLink/CartAfterStyle";
import NavBar from "./components/NavBar";

import "./stylesheets/Header.css";
import BreadCrumbs from "./components/BreadCrumbs";

const Header = () => {
  return (
    <header className="w-100">
      <CartAfterStyle />
      <NavBar />
      <BreadCrumbs />
    </header>
  );
};

export default Header;
