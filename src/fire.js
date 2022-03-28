import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDT-OGTa5G3fHNtEx7yNIxyG8EG5XP7x1g",
  authDomain: "login-74f2c.firebaseapp.com",
  projectId: "login-74f2c",
  storageBucket: "login-74f2c.appspot.com",
  messagingSenderId: "1060732745946",
  appId: "1:1060732745946:web:292221f805710024ba8de3",
  measurementId: "G-1VTDW69266",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
