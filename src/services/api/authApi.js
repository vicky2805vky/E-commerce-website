import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db, googleAuthProvider } from "configs/firebase";
import { CART_COLLECTION, USER_COLLECTION } from "constants/firebaseConstants";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  deleteUser,
  signInWithPopup,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export const signUpUserWithEmail = createAsyncThunk(
  "auth/signup/email",
  async (formDetails, thunkApi) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        formDetails.email,
        formDetails.password
      );
      await updateProfile(auth.currentUser, {
        displayName: formDetails.name || "guest",
      });

      return response.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signInUserWithEmail = createAsyncThunk(
  "auth/signin/email",
  async (formDetails, thunkApi) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        formDetails.email,
        formDetails.password
      );

      return response.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signInUserWithGoogle = createAsyncThunk(
  "auth/signin/google",
  async (_, thunkApi) => {
    try {
      const response = await signInWithPopup(auth, googleAuthProvider);
      return response.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/password/reset",
  async (email, thunkApi) => {
    try {
      const response = await sendPasswordResetEmail(auth, email);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signOutUser = createAsyncThunk(
  "auth/signout",
  async (_, thunkApi) => {
    try {
      const response = signOut(auth);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const reauthenticateWithEmail = createAsyncThunk(
  "auth/reauth/email",
  async ({ formDetails, navigate }, thunkApi) => {
    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        formDetails.email,
        formDetails.password
      );
      await reauthenticateWithCredential(user, credential);
      navigate("/delete-confirmation");
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const reauthenticateWithGoogle = createAsyncThunk(
  "auth/reauth/google",
  async ({ currentUserId, navigate }, thunkApi) => {
    try {
      const response = await signInWithPopup(auth, googleAuthProvider);
      const user = response.user;
      if (currentUserId !== user.uid) {
        return thunkApi.rejectWithValue("invalid user account");
      } else {
        navigate("/delete-confirmation");
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "auth/delete",
  async (user, thunkApi) => {
    try {
      deleteUser(user);
      const documents = await getDocs(
        collection(db, USER_COLLECTION, user?.uid, CART_COLLECTION)
      );
      documents.docs.map((document) => {
        deleteDoc(
          doc(
            db,
            `${USER_COLLECTION}/${user.uid}/${CART_COLLECTION}`,
            document.id
          )
        );
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
