// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx5HUfbd_QJPAVZGa0j76WeeyQ3rdP3e0",
  authDomain: "blog-cf085.firebaseapp.com",
  projectId: "blog-cf085",
  storageBucket: "blog-cf085.firebasestorage.app",
  messagingSenderId: "935333921143",
  appId: "1:935333921143:web:e6b940755172192c012172",
  measurementId: "G-02DB09SFBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);