import { createSlice } from "@reduxjs/toolkit";
import {
  signInUserWithEmail,
  signUpUserWithEmail,
  signOutUser,
  resetPassword,
  deleteAccount,
  signInUserWithGoogle,
  reauthenticateWithEmail,
  reauthenticateWithGoogle,
} from "../api/authApi";
import { getFirebaseErrorMessage } from "utils/getFirebaseErrorMessage";
import { pushNotification } from "utils/pushNotification";
import { auth } from "configs/firebase";

const initialState = {
  isUserLoggedIn: false,
  user: auth?.currentUser || null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateLoginStatus: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUserWithEmail.fulfilled, (state, action) => {
        state.isUserLoggedIn = true;
        pushNotification("account created successfully", true);
      })
      .addCase(signUpUserWithEmail.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      })
      .addCase(signInUserWithEmail.fulfilled, (state, action) => {
        state.isUserLoggedIn = true;
        state.user = action.payload;
        pushNotification("logged in successfully", true);
      })
      .addCase(signInUserWithEmail.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
        pushNotification("logged in successfully", true);
      })
      .addCase(signInUserWithGoogle.fulfilled, (state, action) => {
        state.isUserLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(signInUserWithGoogle.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        pushNotification("Instructions Sent to your email", true);
      })
      .addCase(resetPassword.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      })
      .addCase(signOutUser.fulfilled, (state, action) => {
        state.isUserLoggedIn = false;
        state.user = null;
        pushNotification("logged out successfully", true);
      })
      .addCase(signOutUser.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      })
      .addCase(reauthenticateWithEmail.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      })
      .addCase(reauthenticateWithGoogle.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.isUserLoggedIn = false;
        state.user = null;
        pushNotification("account deleted successfully", true);
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      });
  },
});

export const { updateLoginStatus, setUser } = authSlice.actions;
export default authSlice.reducer;
