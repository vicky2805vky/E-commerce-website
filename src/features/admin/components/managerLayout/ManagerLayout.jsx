import ManagerLayoutHeader from "./ManagerLayoutHeader";
import ManagerLayoutBody from "./ManagerLayoutBody";

const ManagerLayout = ({
  managerName,
  columns,
  managerData,
  deleteFunction,
}) => {
  return (
    <div className={"flex flex-col items-center w-full gap-0 h-full "}>
      <ManagerLayoutHeader managerName={managerName} columns={columns} />
      <div
        className={"flex flex-col items-center w-full gap-0 overflow-scroll"}
      >
        {managerData.map((data, i) => {
          return (
            <ManagerLayoutBody
              data={data}
              columns={columns}
              deleteFunction={deleteFunction}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ManagerLayout;
