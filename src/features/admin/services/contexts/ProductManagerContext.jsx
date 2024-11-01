import { createContext, useContext, useReducer, useRef } from "react";
import productManagerReducer from "../reducers/productManagerReducer";

const productManagerContext = createContext();

const ProductManagerContextProvider = ({ children }) => {
  const initialState = {
    productFormData: {
      name: "",
      category: "",
      description: "",
      mrp: "",
      price: "",
      rating: "",
    },
    productImageVariants: [
      {
        id: 0,
        color: "",
        code: "#000000",
      },
    ],
    currentImageIndex: 0,
    uploadedProductImages: [],
  };

  const [state, dispatch] = useReducer(productManagerReducer, initialState);

  const colorInputRef = useRef();
  const colorCodeInputRef = useRef();

  return (
    <productManagerContext.Provider
      value={{ state, dispatch, colorInputRef, colorCodeInputRef }}
    >
      {children}
    </productManagerContext.Provider>
  );
};

export const useProductManagerContext = () => {
  return useContext(productManagerContext);
};

export default ProductManagerContextProvider;
