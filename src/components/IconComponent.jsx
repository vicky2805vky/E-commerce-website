import React, { useEffect, useState } from "react";
import { findIconWithName } from "features/admin/utils/categoryManagerUtils";
import { LuFileWarning } from "react-icons/lu";

const IconComponent = ({ iconName, iconPath }) => {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const fetchIcon = async () => {
      const icon = await findIconWithName(iconName, iconPath);
      setIcon(() => icon);
    };

    fetchIcon();
  }, [iconName]);

  return Icon ? <Icon /> : <LuFileWarning />;
};

export default IconComponent;
