import { Link } from "react-router-dom";

import "./RedirectPage.css";
import { FLEX_CENTER_COL, TYPOGRAPHY_2XL } from "constants/tailwindConstants";
import IconComponent from "components/IconComponent";

const RedirectPage = ({
  imageName,
  destination,
  iconName,
  buttonText,
  children,
}) => {
  return (
    <div className="redirect-page flex justify-center items-center">
      <img src={new URL(`./images/${imageName}.png`, import.meta.url)} />
      <div className={`message ${FLEX_CENTER_COL} gap-3`}>
        <IconComponent iconName={iconName} className={TYPOGRAPHY_2XL} />
        <p>{children}</p>
        <Link to={destination} className="button-2">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default RedirectPage;
