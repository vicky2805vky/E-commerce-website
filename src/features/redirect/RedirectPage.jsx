import { Link } from "react-router-dom";

import "./RedirectPage.css";

const RedirectPage = ({ image, destination, message, children }) => {
  return (
    <div className="redirect-page flex justify-center items-center">
      <img src={new URL(`./images/${image}`, import.meta.url)} />
      <div className="message f-column">
        <p>{children}</p>
        <Link to={destination} className="button-2">
          {message}
        </Link>
      </div>
    </div>
  );
};

export default RedirectPage;
