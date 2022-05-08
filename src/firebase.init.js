// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDxCEGIW1DMyn7pinIhlVuzSdV7MU3ZqY",
  authDomain: "sam-professional-trainer.firebaseapp.com",
  projectId: "sam-professional-trainer",
  storageBucket: "sam-professional-trainer.appspot.com",
  messagingSenderId: "945443781246",
  appId: "1:945443781246:web:6ca27fc32fcb381e46b62f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;