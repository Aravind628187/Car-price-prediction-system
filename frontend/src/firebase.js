// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyButclCXMt_oXKnE2VaaG0PQu59rP7kkDk",
  authDomain: "car-price-prediction-system.firebaseapp.com",
  projectId: "car-price-prediction-system",
  storageBucket: "car-price-prediction-system.firebasestorage.app",
  messagingSenderId: "207875631619",
  appId: "1:207875631619:web:b875fba196ad7889687c36",
  measurementId: "G-LY8Y5HRTQ5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();