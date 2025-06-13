// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBYOAIKc6OoU9yEfhCr-ngviReJbaHUO_8",
  authDomain: "shopping-cart-efa23.firebaseapp.com",
  projectId: "shopping-cart-efa23",
  storageBucket: "shopping-cart-efa23.firebasestorage.app",
  messagingSenderId: "89412661879",
  appId: "1:89412661879:web:6531cf9f2b6095b8a48c72",
  measurementId: "G-T4L8FLHTMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ EXPORT these for use in your pages
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
