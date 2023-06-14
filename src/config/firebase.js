// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2BWzaxFrw9msWJg3j7w7pF2mH_8iyf7w",
  authDomain: "fir-greta-3d684.firebaseapp.com",
  projectId: "fir-greta-3d684",
  storageBucket: "fir-greta-3d684.appspot.com",
  messagingSenderId: "399512949917",
  appId: "1:399512949917:web:0b2ee973c73237f5993074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()