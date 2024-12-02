import IconComponent from "components/IconComponent";
import {
  FLEX_BETWEEN,
  TYPOGRAPHY_3XL,
  TYPOGRAPHY_LG,
  TYPOGRAPHY_SM,
} from "constants/tailwindConstants";

import { Link } from "react-router-dom";

const AdminNavCard = ({ label, destination, totatItems, iconName }) => {
  return (
    <Link
      to={destination}
      className={` ${FLEX_BETWEEN} p-3 `}
      style={{
        background: "var(--primary-bg-gradient)",
        borderRadius: "2em 0",
      }}
    >
      <p className={TYPOGRAPHY_SM}>
        {label} <b className={TYPOGRAPHY_LG}>{totatItems}</b>
      </p>
      <IconComponent className={TYPOGRAPHY_3XL} iconName={iconName} />
    </Link>
  );
};

export default AdminNavCard;
