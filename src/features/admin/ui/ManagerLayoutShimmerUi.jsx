import ManagerLayoutBodyShimmerUi from "./ManagerLayoutBodyShimmerUi";
import ManagerLayoutHeaderShimmerUi from "./ManagerLayoutHeaderShimmerUi";

const ManagerLayoutShimmerUi = ({ managerName, columns }) => {
  return (
    <div className={"flex flex-col items-center w-full gap-0 h-full "}>
      <ManagerLayoutHeaderShimmerUi
        managerName={managerName}
        columns={columns}
      />
      <ManagerLayoutBodyShimmerUi columns={columns} />
    </div>
  );
};

export default ManagerLayoutShimmerUi;
