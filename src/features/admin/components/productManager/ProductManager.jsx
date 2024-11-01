import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import { deleteProduct } from "services/api/productsApi";
import ManagerLayout from "../managerLayout/ManagerLayout";

const ProductManager = () => {
  const { products } = useStoreData();
  const dispatch = useDispatch();

  return (
    <ManagerLayout
      managerName={"product"}
      columns={["name", "category"]}
      managerData={products}
      deleteFunction={(product) => {
        dispatch(deleteProduct(product));
      }}
    />
  );
};

export default ProductManager;
