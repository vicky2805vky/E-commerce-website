import { useEffect, useState } from "react";
import { findIconWithName } from "utils/findIconWithName";

const useFetchIcon = (iconName) => {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const fetchIcon = async () => {
      const icon = await findIconWithName(iconName);
      setIcon(() => icon);
    };

    fetchIcon();
  }, [iconName]);

  return Icon;
};

export default useFetchIcon;
