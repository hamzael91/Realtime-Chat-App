// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA8dFecNopTxQbSqCqDAK1xMod3nwfhnPY",
  authDomain: "chatapp-869c7.firebaseapp.com",
  projectId: "chatapp-869c7",
  storageBucket: "chatapp-869c7.appspot.com",
  messagingSenderId: "929752383376",
  appId: "1:929752383376:web:bbb8a466ec75ea4a3cbd15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();