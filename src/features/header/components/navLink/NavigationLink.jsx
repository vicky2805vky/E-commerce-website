
import { Link } from "react-router-dom";

const NavigationLink = ({ destination, className, icon, label }) => {
  return (
    <Link to={destination}>
      <span className={`header-icon ${className}`}>{icon}</span>
      <span className="header-label">{label}</span>
    </Link>
  );
};

export default NavigationLink;
