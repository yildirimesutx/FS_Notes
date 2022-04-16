// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW3c3b8J8QuzLJXyj4PgTxnH6qg0iDyjY",
    authDomain: "contact-app-b727d.firebaseapp.com",
    projectId: "contact-app-b727d",
    storageBucket: "contact-app-b727d.appspot.com",
    messagingSenderId: "868018015221",
    appId: "1:868018015221:web:2089ec251e72b1ffaeaebc",
    measurementId: "G-EQG92EYWK0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;