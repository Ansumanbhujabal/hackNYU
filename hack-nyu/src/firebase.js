// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgONKfyjKZX4rnYl8OJtzGtCdRVg_UdZo",
  authDomain: "mentalhealth-dc71c.firebaseapp.com",
  projectId: "mentalhealth-dc71c",
  storageBucket: "mentalhealth-dc71c.appspot.com",
  messagingSenderId: "591883839895",
  appId: "1:591883839895:web:244ae3243f85e04d3cbcd2",
  measurementId: "G-KYPH205VBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
