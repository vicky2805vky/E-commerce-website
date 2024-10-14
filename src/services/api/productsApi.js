import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, storage } from "configs/firebase";
import { deleteObject, listAll, ref } from "firebase/storage";

const productsCollection = "S-mart-products";

const productsCollectionData = collection(db, productsCollection);

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
          collection(db, productsCollection, data[i].id, "images")
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
      await deleteDoc(doc(db, productsCollection, product.id));
      const storageRef = ref(storage, `${product.category}/${product.name}/`);
      const imageFolderRef = await listAll(storageRef);
      imageFolderRef.prefixes.map(async (folder) => {
        const imageRef = await listAll(
          ref(storage, `${product.category}/${product.name}/${folder.name}`)
        );
        imageRef.items.map((item) =>
          deleteObject(
            ref(
              storage,
              `${product.category}/${product.name}/${folder.name}/${item.name}`
            )
          )
        );
      });

      return product;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
