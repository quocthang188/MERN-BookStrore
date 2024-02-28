// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEUmojkeHpq_HMz3GICDUc3b6cwBg_Ow",
  authDomain: "mern-book-inventory-623e7.firebaseapp.com",
  projectId: "mern-book-inventory-623e7",
  storageBucket: "mern-book-inventory-623e7.appspot.com",
  messagingSenderId: "662311660654",
  appId: "1:662311660654:web:7c1cba0fa84dde5ee30a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app