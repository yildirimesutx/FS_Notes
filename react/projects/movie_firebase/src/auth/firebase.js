import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
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







