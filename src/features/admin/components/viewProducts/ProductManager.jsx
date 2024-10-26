import useReduxData from "hooks/useReduxData";
import { useDispatch } from "react-redux";
import { deleteProduct } from "services/api/productsApi";
import ManagerLayout from "../ui/ManagerLayout";

const ProductManager = () => {
  const { products } = useReduxData();
  const dispatch = useDispatch();

  return (
    <ManagerLayout
      managerName={"product"}
      columns={["name", "category"]}
      managerData={products}
      popupFn={(product) => {
        dispatch(deleteProduct(product));
      }}
    />
  );
};

export default ProductManager;
