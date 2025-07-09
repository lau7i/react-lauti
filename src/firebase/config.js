import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_TKBvM2jIqYnJQZAm23AvO8g3trLRSTc",
  authDomain: "tiendalauti-db.firebaseapp.com",
  projectId: "tiendalauti-db",
  storageBucket: "tiendalauti-db.firebasestorage.app",
  messagingSenderId: "672449325346",
  appId: "1:672449325346:web:8da128c95ac57f75399d7b",
};

export const app = initializeApp(firebaseConfig);
