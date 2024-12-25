// src/firebase.js

// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Import Realtime Database

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCQoOXNU1ilHdM_lfQauMDRHdMcbrILzBc",
  authDomain: "pet-world-a1532.firebaseapp.com",
  projectId: "pet-world-a1532",
  storageBucket: "pet-world-a1532.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "1013109850379",
  appId: "1:1013109850379:web:9107d38d1ab1d7bd32220e",
  measurementId: "G-B6SXNS7BSQ",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export initialized Firebase services
export const auth = getAuth(app); // Authentication
export const analytics = getAnalytics(app); // Analytics
export const db = getFirestore(app); // Firestore Database
export const rtdb = getDatabase(app); // Realtime Database
