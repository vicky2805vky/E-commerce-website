import { db } from "configs/firebase";
import { PRODUCT_COLLECTION } from "constants/firebaseConstants";
import { removeProductById } from "features/product/utils/filterProductById";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { setProducts } from "services/slices/productSlice";

export const deleteAllImages = async (formData) => {
  const allImageRef = await getDocs(
    collection(db, PRODUCT_COLLECTION, formData.name, "images")
  );
  const allImages = allImageRef.docs.map((doc) => {
    return doc.data();
  });

  await Promise.all(
    allImages.map(async (_, i) => {
      await deleteDoc(
        doc(db, PRODUCT_COLLECTION, formData.name, "images", `${i}`)
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
    id: formData.name,
    images: imageData,
  };

  const newProducts = removeProductById(products, id);
  newProducts.push(updatedProduct);

  dispatch(setProducts(newProducts));
};

export const deleteNonExistingImages = (formData) => {
  //TODO: DELETE THE IMAGES ALONG WITH ITS DETAILS
};
