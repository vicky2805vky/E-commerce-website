import useStoreData from "hooks/useStoreData";
import AdminNavCard from "./components/AdminNavCard";

const Admin = () => {
  const { products, categories } = useStoreData();
  return (
    <div className="h-full overflow-scroll">
      <div className="flex [&>*]:flex-1 [&>*]:min-w-[200px] [&>*]:max-w-[400px] flex-wrap gap-3 h-36">
        <AdminNavCard
          label={"products"}
          destination={"products"}
          totatItems={products.length}
          iconName={"LuBaggageClaim"}
        />
        <AdminNavCard
          label={"categories"}
          destination={"categories"}
          totatItems={categories.length}
          iconName={"BiSolidCategory"}
        />
      </div>
    </div>
  );
};

export default Admin;
