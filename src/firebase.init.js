// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK82AryDiB5dBtbXxwR-doxmehjJwtQ90",
  authDomain: "xtreme-cars-2022.firebaseapp.com",
  projectId: "xtreme-cars-2022",
  storageBucket: "xtreme-cars-2022.appspot.com",
  messagingSenderId: "578714307488",
  appId: "1:578714307488:web:ef544f4087028dd0dc72c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;