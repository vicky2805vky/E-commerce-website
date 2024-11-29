import { db, storage } from "configs/firebase";
import { PRODUCT_COLLECTION } from "constants/firebaseConstants";
import { removeProductById } from "features/product/utils/findProductById";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { deleteObject, getDownloadURL, listAll, ref } from "firebase/storage";
import { setProducts } from "services/slices/productSlice";

export const deleteAllImages = async (productFormData) => {
  const allImageRef = await getDocs(
    collection(
      db,
      PRODUCT_COLLECTION,
      productFormData.name.replaceAll(" ", "-"),
      "images"
    )
  );
  const allImages = allImageRef.docs.map((doc) => {
    return doc.data();
  });

  await Promise.all(
    allImages.map(async (_, i) => {
      await deleteDoc(
        doc(db, PRODUCT_COLLECTION, productFormData.name, "images", `${i}`)
      );
    })
  );
};

export const updateStoreProduct = (
  productFormData,
  imageData,
  products,
  id,
  dispatch
) => {
  const updatedProduct = {
    ...productFormData,
    id: productFormData.name,
    images: imageData,
  };

  const newProducts = removeProductById(products, id);
  newProducts.push(updatedProduct);

  dispatch(setProducts(newProducts));
};

export const deleteNonExistingImages = async (productFormData, imageData) => {
  let imageLinks = [];
  imageData.map((imageSet) => {
    imageSet.imageURLs.map((link) => imageLinks.push(link));
  });
  const listRef = ref(
    storage,
    `${productFormData.category}/${productFormData.name}`
  );
  const allImages = await listAll(listRef);

  allImages.items.map(async (item) => {
    const itemRef = ref(storage, item.fullPath);
    const link = await getDownloadURL(itemRef);
    if (!imageLinks.includes(link)) {
      await deleteObject(itemRef);
    }
  });
};
