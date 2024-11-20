// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQoOXNU1ilHdM_lfQauMDRHdMcbrILzBc",
  authDomain: "pet-world-a1532.firebaseapp.com",
  projectId: "pet-world-a1532",
  storageBucket: "pet-world-a1532.firebasestorage.app",
  messagingSenderId: "1013109850379",
  appId: "1:1013109850379:web:9107d38d1ab1d7bd32220e",
  measurementId: "G-B6SXNS7BSQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
