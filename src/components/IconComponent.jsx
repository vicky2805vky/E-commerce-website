import React, { useEffect, useState } from "react";
import { findIconWithName } from "features/admin/utils/categoryManagerUtils";
import { LuFileWarning } from "react-icons/lu";

const IconComponent = ({ iconName }) => {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const fetchIcon = async () => {
      if (!iconName) return;

      try {
        const icon = await findIconWithName(iconName);
        setIcon(() => icon);
      } catch (error) {
        setIcon(() => LuFileWarning);
      }
    };

    fetchIcon();
  }, [iconName]);

  if (!Icon) return <LuFileWarning />;

  return <Icon />;
};

export default IconComponent;
