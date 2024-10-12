// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup  } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoZ-pxMQUzzIEkALCU3p3-LG4EOSwTEV4",
  authDomain: "authflow-bc06d.firebaseapp.com",
  projectId: "authflow-bc06d",
  storageBucket: "authflow-bc06d.appspot.com",
  messagingSenderId: "1092644429693",
  appId: "1:1092644429693:web:3d155e2ccd39f9414b7614",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export { auth };