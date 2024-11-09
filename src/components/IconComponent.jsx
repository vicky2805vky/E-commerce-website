import useFetchIcon from "hooks/useFetchIcon";
import { IoMdWarning } from "react-icons/io";

const IconComponent = ({ iconName, className }) => {
  const Icon = useFetchIcon(iconName);

  if (!iconName || !Icon) return <IoMdWarning className={className} />;

  return <Icon className={className} />;
};

export default IconComponent;
