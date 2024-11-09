import IconComponent from "components/IconComponent";

const ManagerLayoutColumns = ({ columns, data }) => {
  return columns.map((column, i) => {
    if (column === "icon") {
      return <IconComponent key={i} iconName={data.icon} />;
    }
    return <p key={i}>{data[column]}</p>;
  });
};
export default ManagerLayoutColumns;
