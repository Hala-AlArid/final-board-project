// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqMx_c6gCfsq5b9mIrG--TfTtFA7tPY-E",
  authDomain: "final-board-project-29f7b.firebaseapp.com",
  projectId: "final-board-project-29f7b",
  storageBucket: "final-board-project-29f7b.appspot.com",
  messagingSenderId: "544777590634",
  appId: "1:544777590634:web:793e5332a0bd6b392cb713",
  measurementId: "G-5SSG65ZBN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;