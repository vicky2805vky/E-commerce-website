import { db } from "configs/firebase";
import { removeProductById } from "features/product/utils/filterProductById";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { setProducts } from "services/slices/productSlice";

export const deleteAllImages = async (formData) => {
  const allImageRef = await getDocs(
    collection(
      db,
      "S-mart-products",
      formData.name.replaceAll(" ", "-"),
      "images"
    )
  );
  const allImages = allImageRef.docs.map((doc) => {
    return doc.data();
  });

  await Promise.all(
    allImages.map(async (_, i) => {
      await deleteDoc(
        doc(
          db,
          "S-mart-products",
          formData.name.replaceAll(" ", "-"),
          "images",
          `${i}`
        )
      );
    })
  );
};

export const updateStoreProduct = (
  formData,
  imageData,
  products,
  id,
  dispatch
) => {
  const updatedProduct = {
    ...formData,
    id: formData.name.replaceAll(" ", "-"),
    images: imageData,
  };

  const newProducts = removeProductById(products, id);
  newProducts.push(updatedProduct);

  dispatch(setProducts(newProducts));
};
