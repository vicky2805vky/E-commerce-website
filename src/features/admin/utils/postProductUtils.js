import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "configs/firebase";
import { doc, setDoc } from "firebase/firestore";
import { pushNotification } from "utils/pushNotification";
import { setProducts } from "services/slices/productSlice";
import { PRODUCT_COLLECTION } from "constants/firebaseConstants";

export const validateForm = (formData, imageVariations, uploadedImageFiles) => {
  if (imageVariations.length !== uploadedImageFiles.length) {
    pushNotification("Please upload an image");
    return false;
  }
  formData.description = formData.description
    .split("\n")
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  return true;
};

export const uploadImages = async (
  uploadedImageFiles,
  formData,
  imageVariations,
  storage
) => {
  return Promise.all(
    uploadedImageFiles.map(async (uploadedImage, i) => {
      const imageURLs = await Promise.all(
        uploadedImage.map(async (url) => {
          if (url instanceof File) {
            const storageRef = ref(
              storage,
              `${formData.category}/${formData.name}/${formData.name}_${imageVariations[i].color}/${url.name}`
            );
            await uploadBytes(storageRef, url);
            return await getDownloadURL(storageRef);
          }
          return url;
        })
      );

      return {
        ...imageVariations[i],
        imageURLs: imageURLs.filter(Boolean),
      };
    })
  );
};

export const saveProductToFirestore = async (formData, imageData) => {
  await setDoc(doc(db, PRODUCT_COLLECTION, formData.name), formData);

  await Promise.all(
    imageData.map((data, i) =>
      setDoc(doc(db, `${PRODUCT_COLLECTION}/${formData.name}/images/${i}`), data)
    )
  );
};

export const addProductToRedux = (dispatch, products, formData, imageData) => {
  dispatch(
    setProducts([
      ...products,
      {
        id: formData.name,
        ...formData,
        images: imageData,
      },
    ])
  );
};
