import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJQayjEV1w-jccfe6PCwOCBQNMSqBQ8bk",
  authDomain: "fir-mart-83485.firebaseapp.com",
  projectId: "fir-mart-83485",
  storageBucket: "fir-mart-83485.appspot.com",
  messagingSenderId: "988094373776",
  appId: "1:988094373776:web:871a1b9f428b00ffdc1d15",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const storage = getStorage();
