import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDZ5NyX6_jVs74Ms1H60ZhTyowAX-UvTlw",
    authDomain: "movie-app-53e15.firebaseapp.com",
    projectId: "movie-app-53e15",
    storageBucket: "movie-app-53e15.appspot.com",
    messagingSenderId: "944797644565",
    appId: "1:944797644565:web:dfc5a36455ea49a7391b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export const createUser = async (email, password, navigate)=>{

   try {
       let userCredential= await createUserWithEmailAndPassword(auth, email, password)
       navigate("/");
       console.log(userCredential);
} catch(err){
    alert(err.message)
}
   
};


export const signIn = async (email, password, navigate)=>{

 try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential);
    navigate("/");
    console.log(userCredential);
} catch(err){
 alert(err.message)
  }
}

export const logOut =()=>{
    signOut(auth)
    alert("logged out successfully")
}







