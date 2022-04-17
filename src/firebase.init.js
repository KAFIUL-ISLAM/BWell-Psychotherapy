// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC95ECiaWwHTLEHeITR7G9UYiyJmf-vSW8",
    authDomain: "bwell-psychotherapy.firebaseapp.com",
    projectId: "bwell-psychotherapy",
    storageBucket: "bwell-psychotherapy.appspot.com",
    messagingSenderId: "1015427412757",
    appId: "1:1015427412757:web:850714a6114653e624ef1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;