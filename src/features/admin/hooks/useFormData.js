import { FORM_ELEMENTS } from "constants/constants";
import { filterProductById } from "features/product/utils/filterProductById";
import useReduxData from "hooks/useReduxData";
import { useParams } from "react-router-dom";

const useFormData = () => {
  const { id } = useParams();
  if (!id) return FORM_ELEMENTS;

  const { products } = useReduxData();

  const product = filterProductById(products, id);

  const formData = FORM_ELEMENTS.map((element) => {
    return {
      ...element,
      optionalParameters: {
        ...element.optionalParameters,
        value: product[element.name],
      },
    };
  });

  console.log(formData);
  return formData;
};

export default useFormData;
