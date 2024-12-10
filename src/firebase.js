// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import for Realtime Database
import { getStorage } from "firebase/storage"; // Import for Firebase Storage
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf7vOIx3gSTy_RRXErQ-m8WI3yMwncECA",
  authDomain: "keepsake-a44a0.firebaseapp.com",
  databaseURL: "https://keepsake-a44a0-default-rtdb.firebaseio.com", // Add your Realtime Database URL
  projectId: "keepsake-a44a0",
  storageBucket: "keepsake-a44a0.appspot.com", // Firebase Storage bucket
  messagingSenderId: "266536330551",
  appId: "1:266536330551:web:44595e1380803aab5ea6b2",
  measurementId: "G-LDS4X4VJDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and Firebase Storage
export const db = getDatabase(app); // Realtime Database instance
export const storage = getStorage(app); // Firebase Storage instance

export const auth = getAuth(app);


