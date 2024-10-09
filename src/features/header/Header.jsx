import CartAfterStyle from "./components/navLink/CartAfterStyle";
import NavBar from "./components/NavBar";

import "./stylesheets/Header.css";

const Header = () => {
  return (
    <header className="w-100">
      <CartAfterStyle />
      <NavBar />
    </header>
  );
};

export default Header;
