// src/Firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // Include only if you're using Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc9fj4FFnaWNdfygmxsxBEt4ALjStyUqE",
  authDomain: "walmart-9c45f.firebaseapp.com",
  projectId: "walmart-9c45f",
  storageBucket: "walmart-9c45f.firebasestorage.app",
  messagingSenderId: "870261293397",
  appId: "1:870261293397:web:98d4b84032f25237aa6fdc",
  measurementId: "G-M5NCCQQ5PP"
};

// Initialize Firebase app (only once)
const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore(); // Optional – remove if not using Firestore

// Export services to use in other components
export { auth, db };
