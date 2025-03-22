// src/firebase.js
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth

const firebaseConfig = {
  apiKey: "AIzaSyDHyBrHfBqRxCyvGGTWap3ePA41OnRikgA",
  authDomain: "e-commerce-clone-81d6c.firebaseapp.com",
  projectId: "e-commerce-clone-81d6c",
  storageBucket: "e-commerce-clone-81d6c.firebasestorage.app",
  messagingSenderId: "513780169715",
  appId: "1:513780169715:web:9c95192552145d2e0e3086",
  measurementId: "G-RQE4LM2DLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Analytics (optional)
const auth = getAuth(app); // Initialize Authentication

export { auth }; // Export auth for use in other files
