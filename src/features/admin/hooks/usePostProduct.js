import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "configs/firebase";
import { doc, setDoc } from "firebase/firestore";
import { pushNotification } from "utils/pushNotification";
import { useNavigate } from "react-router-dom";

const usePostProduct = () => {
  const { state } = useAddProductContext();
  const { imageVariations, uploadedImageFiles, formData } = state;
  const navigate = useNavigate();

  return async (e) => {
    e.preventDefault();

    formData.description = formData.description
      .split("\n")
      .map((sentence) => sentence.trim())
      .filter(Boolean);

    try {
      const imageData = await Promise.all(
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

      await setDoc(
        doc(db, "S-mart-products", formData.name.replaceAll(" ", "-")),
        formData
      );

      await Promise.all(
        imageData.map((data, i) =>
          setDoc(
            doc(
              db,
              `S-mart-products/${formData.name.replaceAll(
                " ",
                "-"
              )}/images/${i}`
            ),
            data
          )
        )
      );

      navigate("/admin/products");
      pushNotification("Product added successfully", true);
    } catch (error) {
      console.error("Error adding product:", error);
      pushNotification("Error adding product. Please try again.", false);
    }
  };
};

export default usePostProduct;
