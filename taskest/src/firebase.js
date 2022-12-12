// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBRXfi7CrxhZXhFVKlNLpkDwDDUyhCd3Uk",
  authDomain: "board-pro.firebaseapp.com",
  databaseURL: "https://board-pro-default-rtdb.firebaseio.com",
  projectId: "board-pro",
  storageBucket: "board-pro.appspot.com",
  messagingSenderId: "100477925458",
  appId: "1:100477925458:web:c14826f16ce2dc04c6878b",
  measurementId: "G-F5EDV5KDGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export default database 