import { createContext, useContext, useReducer, useRef } from "react";
import addProductReducer from "../reducers/addProductReducer";

const addProductContext = createContext();

const AddProductContextProvider = ({ children }) => {
  const initialState = {
    formData: {
      name: "",
      category: "",
      description: "",
      mrp: "",
      price: "",
      rating: "",
    },
    imageVariations: [
      {
        id: 0,
        color: "",
        code: "#000000",
      },
    ],
    currentImageSet: 0,
    uploadedImageFiles: [],
  };

  const [state, dispatch] = useReducer(addProductReducer, initialState);

  const colorRef = useRef();
  const colorCodeRef = useRef();
  const fileRef = useRef();

  return (
    <addProductContext.Provider
      value={{ state, dispatch, colorRef, colorCodeRef, fileRef }}
    >
      {children}
    </addProductContext.Provider>
  );
};

export const useAddProductContext = () => {
  return useContext(addProductContext);
};

export default AddProductContextProvider;
