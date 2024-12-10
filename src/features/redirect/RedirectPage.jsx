import { Link } from "react-router-dom";

import "./RedirectPage.css";
import { FLEX_CENTER_COL, TYPOGRAPHY_2XL } from "constants/tailwindConstants";
import IconComponent from "components/IconComponent";
import { REDIRECT_MAP } from "constants/constants";

const RedirectPage = ({ redirectionType }) => {
  const { imageName, destination, iconName, buttonText, message } =
    REDIRECT_MAP[redirectionType];
  return (
    <div className="redirect-page flex items-center justify-center">
      <img src={`/redirectImages/${imageName}.png`} />
      <div className={`message ${FLEX_CENTER_COL} gap-3`}>
        <IconComponent iconName={iconName} className={TYPOGRAPHY_2XL} />
        <p>{message}</p>
        {destination !== null && (
          <Link to={destination} className="button-2">
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default RedirectPage;
1;
