// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-d333a.firebaseapp.com",
  projectId: "blog-d333a",
  storageBucket: "blog-d333a.appspot.com",
  messagingSenderId: "105324813524",
  appId: "1:105324813524:web:ec7c874b2fb28d9907af41",
  measurementId: "G-NZJKPFJPGF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
