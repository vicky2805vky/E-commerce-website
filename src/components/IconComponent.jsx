import React, { useEffect, useState } from "react";
import { findIconWithName } from "features/admin/utils/categoryManagerUtils";
import { LuFileWarning } from "react-icons/lu";

const IconComponent = ({ iconName, library }) => {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const fetchIcon = async () => {
      if (!iconName || !library) return;

      try {
        const icon = await findIconWithName(iconName, library);
        setIcon(() => icon);
      } catch (error) {
        setIcon(() => LuFileWarning);
      }
    };

    fetchIcon();
  }, [iconName, library]);

  if (!Icon) return <LuFileWarning />;

  return <Icon />;
};

export default IconComponent;
