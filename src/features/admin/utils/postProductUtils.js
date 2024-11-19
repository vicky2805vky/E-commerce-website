import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "configs/firebase";
import { doc, setDoc } from "firebase/firestore";
import { pushNotification } from "utils/pushNotification";
import { setProducts } from "services/slices/productSlice";
import { PRODUCT_COLLECTION } from "constants/firebaseConstants";

export const validateForm = (
  productFormData,
  productImageVariants,
  uploadedProductImages
) => {
  if (productImageVariants.length !== uploadedProductImages.length) {
    pushNotification("Please upload an image");
    return false;
  }
  productFormData.description = productFormData.description
    .split("\n")
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  return true;
};

export const uploadImages = async (
  uploadedProductImages,
  productFormData,
  productImageVariants,
  storage
) => {
  return Promise.all(
    uploadedProductImages.map(async (uploadedImage, i) => {
      const imageURLs = await Promise.all(
        uploadedImage.map(async (url) => {
          if (url instanceof File) {
            const storageRef = ref(
              storage,
              `${productFormData.category}/${productFormData.name}/${url.name}`
            );
            await uploadBytes(storageRef, url);
            return await getDownloadURL(storageRef);
          }
          return url;
        })
      );

      return {
        ...productImageVariants[i],
        imageURLs: imageURLs.filter(Boolean),
      };
    })
  );
};

export const saveProductToFirestore = async (productFormData, imageData) => {
  await setDoc(
    doc(db, PRODUCT_COLLECTION, productFormData.name),
    productFormData
  );

  await Promise.all(
    imageData.map((data, i) =>
      setDoc(
        doc(db, `${PRODUCT_COLLECTION}/${productFormData.name}/images/${i}`),
        data
      )
    )
  );
};

export const addProductToRedux = (
  dispatch,
  products,
  productFormData,
  imageData
) => {
  dispatch(
    setProducts([
      ...products,
      {
        id: productFormData.name,
        ...productFormData,
        images: imageData,
      },
    ])
  );
};
