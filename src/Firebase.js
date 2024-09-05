// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDl67ed723hWDPReKdKpb0HtOwIm4xQgfY",
    authDomain: "ayush-registration-portal.firebaseapp.com",
    projectId: "ayush-registration-portal",
    storageBucket: "ayush-registration-portal.appspot.com",
    messagingSenderId: "584869073993",
    appId: "1:584869073993:web:e5397473d2984dac845b98",
    measurementId: "G-0BGKMFDBSG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
