import React, { useEffect, useState } from "react";
import { findIconWithName } from "features/admin/utils/categoryManagerUtils";
import { IoMdWarning } from "react-icons/io";

const IconComponent = ({ iconName, className }) => {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const fetchIcon = async () => {
      if (!iconName) return;

      try {
        const icon = await findIconWithName(iconName);
        setIcon(() => icon);
      } catch (error) {
        setIcon(() => IoMdWarning);
      }
    };

    fetchIcon();
  }, [iconName]);

  if (!Icon) return <IoMdWarning className={className} />;

  return <Icon className={className} />;
};

export default IconComponent;
