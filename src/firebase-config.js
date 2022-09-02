// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCviuazwDvQmH5QHWSpeOfm6ccVCWZBO5Q",
  authDomain: "blog-4e377.firebaseapp.com",
  projectId: "blog-4e377",
  storageBucket: "blog-4e377.appspot.com",
  messagingSenderId: "1060567992723",
  appId: "1:1060567992723:web:6d2737efdcb71ee9fb0066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();