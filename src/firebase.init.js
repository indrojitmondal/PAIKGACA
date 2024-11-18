// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuPGFhvZNbiPeuTTIz_10r_8QRYMpN3q8",
    authDomain: "paikgacha-336df.firebaseapp.com",
    projectId: "paikgacha-336df",
    storageBucket: "paikgacha-336df.firebasestorage.app",
    messagingSenderId: "394988677696",
    appId: "1:394988677696:web:b43d89275e0dd068c3cda5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);