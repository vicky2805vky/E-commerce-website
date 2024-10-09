import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { FORM_ELEMENTS } from "constants/constants";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "configs/firebase";
import { doc, setDoc } from "firebase/firestore";
import { pushNotification } from "utils/pushNotification";

const usePostProduct = () => {
  const { state } = useAddProductContext();
  const { imageVariations, uploadedImageFiles } = state;

  return (e) => {
    e.preventDefault();

    let formData = {};
    FORM_ELEMENTS.map((element) => {
      if (element.type !== "number") {
        formData[element.name] = e.target.elements[element.name].value;
      } else {
        formData[element.name] = parseFloat(
          e.target.elements[element.name].value
        );
      }
    });

    formData.description = formData.description
      .split("\n")
      .map((sentence) => sentence.trim()) //removing extra spaces in front and back
      .filter((sentence) => sentence && sentence); //removing empty strings

    let imageData = [];
    imageVariations.map((variation, i) => {
      imageData[i] = { ...variation, imageURLs: uploadedImageFiles[i] };
    });

    for (let i = 0; i < Object.keys(imageData).length; i++) {
      imageData[i].imageURLs.map((url, urlIndex) => {
        const storageRef = ref(
          storage,
          `${formData.category}/${formData.name}/${formData.name}_${imageData[i].color}/${url.name}`
        );
        uploadBytes(storageRef, url).then(() => {
          getDownloadURL(storageRef).then((res) => {
            imageData[i].imageURLs[urlIndex] = res;
          });
        });
      });
    }
    setDoc(
      doc(db, "S-mart-products", formData.name.replaceAll(" ", "-")),
      formData
    );
    imageData.map((data, i) => {
      console.log(data);
      setDoc(
        doc(
          db,
          `S-mart-products/${formData.name.replaceAll(" ", "-")}/images/${i}`
        ),
        data
      );
    });
    pushNotification("product added successfully", true);
  };
};
export default usePostProduct;
