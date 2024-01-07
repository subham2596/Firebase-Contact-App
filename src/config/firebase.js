// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJRO6xk7WhygAnI144kjfGj8B1SmuXkh8",
  authDomain: "contact-app-9ba81.firebaseapp.com",
  projectId: "contact-app-9ba81",
  storageBucket: "contact-app-9ba81.appspot.com",
  messagingSenderId: "509757350172",
  appId: "1:509757350172:web:4e8d0c0ae4708393815ad9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);