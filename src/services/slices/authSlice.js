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

const initialState = {
  isUserLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateLoginStatus: (state, action) => {
      state.isUserLoggedIn = action.payload;
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

        pushNotification("logged in successfully", true);
      })
      .addCase(signInUserWithEmail.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      })
      .addCase(signInUserWithGoogle.fulfilled, (state, action) => {
        state.isUserLoggedIn = true;
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

        pushNotification("account deleted successfully", true);
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        const errMessage = getFirebaseErrorMessage(action.payload);
        pushNotification(errMessage);
      });
  },
});

export const { updateLoginStatus } = authSlice.actions;
export default authSlice.reducer;
