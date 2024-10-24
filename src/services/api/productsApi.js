import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, storage } from "configs/firebase";
import { deleteObject, listAll, ref } from "firebase/storage";
import { PRODUCT_COLLECTION } from "constants/firebaseConstants";

const productsCollectionData = collection(db, PRODUCT_COLLECTION);

export const getProducts = createAsyncThunk(
  "products/get",
  async (_, thunkApi) => {
    try {
      const response = await getDocs(productsCollectionData);
      const data = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      for (let i = 0; i < data.length; i++) {
        const imageResponse = await getDocs(
          collection(db, PRODUCT_COLLECTION, data[i].id, "images")
        );

        const images = imageResponse.docs.map((doc, index) => {
          return {
            id: index,
            ...doc.data(),
          };
        });

        data[i] = { ...data[i], images: images };
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (product, thunkApi) => {
    try {
      const imageDeletePromises = product.images.map((image) =>
        deleteDoc(
          doc(db, `${PRODUCT_COLLECTION}/${product.id}/images/${image.id}`)
        )
      );

      const productDeletePromise = deleteDoc(
        doc(db, `${PRODUCT_COLLECTION}/${product.id}`)
      );

      await Promise.all([...imageDeletePromises, productDeletePromise]);

      const storageRef = ref(storage, `${product.category}/${product.name}/`);
      const imageFolderRef = await listAll(storageRef);

      const folderDeletePromises = imageFolderRef.prefixes.map(
        async (folder) => {
          const imageRef = await listAll(
            ref(storage, `${product.category}/${product.name}/${folder.name}`)
          );
          const itemDeletePromises = imageRef.items.map((item) =>
            deleteObject(
              ref(
                storage,
                `${product.category}/${product.name}/${folder.name}/${item.name}`
              )
            )
          );
          await Promise.all(itemDeletePromises);
        }
      );

      await Promise.all(folderDeletePromises);

      return product;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
