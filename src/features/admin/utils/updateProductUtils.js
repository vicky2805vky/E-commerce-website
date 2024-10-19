import { db, storage } from "configs/firebase";
import { PRODUCT_COLLECTION } from "constants/firebaseConstants";
import { removeProductById } from "features/product/utils/filterProductById";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { deleteObject, getDownloadURL, listAll, ref } from "firebase/storage";
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

export const deleteNonExistingImages = async (formData, imageData) => {
  imageData.map(async (imageSet) => {
    const listRef = ref(
      storage,
      `${formData.category}/${formData.name}/${formData.name}_${imageSet.color}/`
    );
    const allImages = await listAll(listRef);

    let allImageLinks = [];

    allImages.items.map(async (item) => {
      const itemRef = ref(storage, item.fullPath);
      const link = await getDownloadURL(itemRef);
      allImageLinks.push(link);
      if (!imageSet.imageURLs.includes(link)) {
        await deleteObject(itemRef);
      }
    });
  });
};
