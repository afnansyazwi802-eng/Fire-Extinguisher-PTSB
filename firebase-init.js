// firebase-init.js
// Fail pusat untuk sambungkan semua halaman ke projek Firebase "fire-extinguisher-safety".
// Import fail ni (bukan letak config berulang kali) dalam mana-mana halaman yang perlukan Firestore/Auth.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACkFxDl4ADHuSEkur5TLD59BCpJ_k5Q8M",
  authDomain: "fire-extinguisher-safety.firebaseapp.com",
  projectId: "fire-extinguisher-safety",
  storageBucket: "fire-extinguisher-safety.firebasestorage.app",
  messagingSenderId: "75734761659",
  appId: "1:75734761659:web:24177b3ec780100171a99e",
  measurementId: "G-CZ9YVZ67M2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
