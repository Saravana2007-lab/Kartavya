// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZgsRLh_Vv5hemg1J4plV_wrx9yNUxkV0",
  authDomain: "kartavya-8165c.firebaseapp.com",
  projectId: "kartavya-8165c",
  storageBucket: "kartavya-8165c.firebasestorage.app",
  messagingSenderId: "833006742782",
  appId: "1:833006742782:web:2dd9ac1b518497762fc9af"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
